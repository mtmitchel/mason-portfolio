import { readFile } from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";

const invocationDirectory = path.resolve(process.cwd());
const requestedModes = new Set(process.argv.slice(2));
const supportedModes = new Set(["--audit-linked"]);
const unsupportedModes = [...requestedModes].filter((mode) => !supportedModes.has(mode));
if (unsupportedModes.length > 0) {
  throw new Error(`unsupported mode: ${unsupportedModes.join(", ")}`);
}
const auditLinked = requestedModes.has("--audit-linked");
const authorizedLinkedWrite = process.env.PORTFOLIO_AUTHORIZED_LINKED_WRITE === "1";
const ownerFiles = [
  "AGENTS.md",
  "README.md",
  "site/AGENTS.md",
  "docs/portfolio-case-production.md",
  "docs/external-agent/base/04-EXTERNAL-AGENT-PACKET-GUIDE.md",
  "scripts/check-repository.mjs",
  "scripts/check-worktree-alignment.mjs",
  ".githooks/pre-commit",
];

function runGitAt(directory, args) {
  const result = spawnSync("git", args, {
    cwd: directory,
    encoding: "utf8",
  });
  if (result.status !== 0) {
    const detail = [result.stderr, result.stdout]
      .filter(Boolean)
      .map((value) => String(value).trim())
      .filter(Boolean)
      .join("\n");
    throw new Error(`git ${args.join(" ")} failed${detail ? `: ${detail}` : ""}`);
  }
  return result.stdout;
}

function runGit(args) {
  return runGitAt(invocationDirectory, args);
}

function parseWorktreePaths(output) {
  return String(output)
    .split(/\r?\n/)
    .filter((line) => line.startsWith("worktree "))
    .map((line) => line.slice("worktree ".length).trim())
    .filter(Boolean);
}

async function inspectOwnerAlignment(worktreeRoot, primaryCheckout) {
  const localStatus = runGitAt(
    worktreeRoot,
    ["status", "--short", "--untracked-files=all", "--", ...ownerFiles],
  );
  const localOwnerChanges = localStatus
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  const mismatches = [];

  for (const file of ownerFiles) {
    const currentPath = path.join(worktreeRoot, file);
    const primaryPath = path.join(primaryCheckout, file);
    let current;
    let primary;
    try {
      current = await readFile(currentPath);
    } catch {
      mismatches.push(`${file} is missing in the linked worktree`);
      continue;
    }
    try {
      primary = await readFile(primaryPath);
    } catch {
      mismatches.push(`${file} is missing in the primary checkout`);
      continue;
    }
    if (!current.equals(primary)) {
      mismatches.push(`${file} differs from the primary checkout`);
    }
  }

  return { localOwnerChanges, mismatches };
}

const currentRoot = path.resolve(runGit(["rev-parse", "--show-toplevel"]).trim());
const commonDirectory = path.resolve(
  invocationDirectory,
  runGit(["rev-parse", "--git-common-dir"]).trim(),
);
const worktreePaths = parseWorktreePaths(
  runGit(["--git-dir", commonDirectory, "worktree", "list", "--porcelain"]),
);

if (worktreePaths.length === 0) {
  throw new Error("could not resolve the primary checkout from Git worktree data");
}

const primaryRoot = path.resolve(worktreePaths[0]);
const currentIsPrimary = path.resolve(currentRoot) === primaryRoot;

if (auditLinked) {
  if (!currentIsPrimary) {
    throw new Error("--audit-linked must run from the primary checkout");
  }

  const auditFindings = [];
  const linkedWorktrees = worktreePaths
    .map((worktreePath) => path.resolve(worktreePath))
    .filter((worktreePath) => worktreePath !== primaryRoot);

  for (const worktreeRoot of linkedWorktrees) {
    try {
      const { localOwnerChanges, mismatches } = await inspectOwnerAlignment(
        worktreeRoot,
        primaryRoot,
      );
      if (localOwnerChanges.length === 0 && mismatches.length === 0) {
        auditFindings.push(`${worktreeRoot}: aligned`);
        continue;
      }
      auditFindings.push(`${worktreeRoot}:`);
      for (const change of localOwnerChanges) {
        auditFindings.push(`  local owner change: ${change}`);
      }
      for (const mismatch of mismatches) {
        auditFindings.push(`  ${mismatch}`);
      }
    } catch (error) {
      auditFindings.push(`${worktreeRoot}: could not inspect (${error.message})`);
    }
  }

  const failures = auditFindings.filter((line) => !line.endsWith(": aligned"));
  if (failures.length > 0) {
    throw new Error(`linked-worktree audit failed:\n${auditFindings.join("\n")}`);
  }
  console.log(
    `Linked-worktree audit passed: ${linkedWorktrees.length} registered linked worktree${linkedWorktrees.length === 1 ? "" : "s"} aligned.`,
  );
  process.exit(0);
}

if (currentIsPrimary) {
  console.log("Worktree alignment passed: primary checkout.");
  process.exit(0);
}

if (!authorizedLinkedWrite) {
  throw new Error(
    "linked worktree writes are disabled by default; run the task in the primary checkout or use PORTFOLIO_AUTHORIZED_LINKED_WRITE=1 only for Mason's explicit task-specific exception",
  );
}

const { localOwnerChanges, mismatches } = await inspectOwnerAlignment(currentRoot, primaryRoot);
if (localOwnerChanges.length > 0 || mismatches.length > 0) {
  const findings = [
    ...localOwnerChanges.map((change) => `local owner change: ${change}`),
    ...mismatches,
  ];
  throw new Error(
    `authorized linked-write mode requires every canonical owner to exist, have no local owner edits, and byte-match the primary checkout:\n${findings.join("\n")}`,
  );
}

console.log(
  "Authorized linked-write alignment passed: canonical owners match the primary checkout.",
);
