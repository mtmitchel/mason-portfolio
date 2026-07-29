import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSyncChecked } from "../../scripts/spawn-sync.mjs";

const scriptPath = fileURLToPath(import.meta.url);
const repositoryRoot = path.resolve(path.dirname(scriptPath), "../..");
const maximumLines = 500;
const productionRoots = [
  "site/app",
  "site/build",
  "site/worker",
];
const productionFiles = new Set([
  "site/next.config.ts",
  "site/vite.config.ts",
]);
const sourceExtension = /\.(?:cjs|css|js|jsx|json|less|mjs|sass|scss|ts|tsx|ya?ml)$/i;
const excludedDirectoryNames = new Set([
  ".next",
  ".vinext",
  "__tests__",
  "coverage",
  "dist",
  "fixtures",
  "node_modules",
  "test",
  "tests",
]);
const excludedFilePattern = /\.(?:spec|test)\.[^.]+$/i;

function normalize(relativePath) {
  return relativePath.split(path.sep).join("/");
}

function isProductionSource(relativePath) {
  const normalized = normalize(relativePath);
  const inProductionRoot = productionRoots.some(
    (root) => normalized === root || normalized.startsWith(`${root}/`),
  );
  if (!inProductionRoot && !productionFiles.has(normalized)) return false;
  if (!sourceExtension.test(normalized) || excludedFilePattern.test(normalized)) {
    return false;
  }
  return !normalized.split("/").some((part) => excludedDirectoryNames.has(part));
}

function countLines(text) {
  if (text.length === 0) return 0;
  const lines = text.split(/\r\n|\n|\r/).length;
  return /(?:\r\n|\n|\r)$/.test(text) ? lines - 1 : lines;
}

async function collectWorktreeFiles(root) {
  const files = [];

  async function walk(relativeDirectory) {
    const absoluteDirectory = path.join(root, relativeDirectory);
    let entries;
    try {
      entries = await readdir(absoluteDirectory, { withFileTypes: true });
    } catch (error) {
      if (error.code === "ENOENT") return;
      throw error;
    }

    for (const entry of entries) {
      const relative = normalize(path.join(relativeDirectory, entry.name));
      if (entry.isDirectory()) {
        if (!excludedDirectoryNames.has(entry.name)) await walk(relative);
      } else if (entry.isFile() && isProductionSource(relative)) {
        files.push(relative);
      }
    }
  }

  for (const relativeRoot of productionRoots) await walk(relativeRoot);
  for (const relativeFile of productionFiles) {
    try {
      await readFile(path.join(root, relativeFile));
      files.push(relativeFile);
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }
  return [...new Set(files)].sort();
}

function collectStagedFiles(root) {
  const result = spawnSyncChecked(
    "git",
    [
      "ls-files",
      "-z",
      "--cached",
      "--",
      ...productionRoots,
      ...productionFiles,
    ],
    { cwd: root, encoding: "utf8" },
  );
  return result.stdout
    .split("\0")
    .filter(Boolean)
    .filter(isProductionSource)
    .sort();
}

function readStagedFile(root, relativeFile) {
  return spawnSyncChecked(
    "git",
    ["show", `:${relativeFile}`],
    { cwd: root, encoding: "utf8", maxBuffer: 20 * 1024 * 1024 },
  ).stdout;
}

export async function checkProductionLineLimits({
  root = repositoryRoot,
  staged = false,
} = {}) {
  const files = staged
    ? collectStagedFiles(root)
    : await collectWorktreeFiles(root);
  const violations = [];

  for (const relativeFile of files) {
    const source = staged
      ? readStagedFile(root, relativeFile)
      : await readFile(path.join(root, relativeFile), "utf8");
    const lineCount = countLines(source);
    if (lineCount > maximumLines) {
      violations.push({ lineCount, path: relativeFile });
    }
  }

  return {
    filesChecked: files.length,
    maximumLines,
    staged,
    violations,
  };
}

async function main() {
  const args = process.argv.slice(2);
  const unknown = args.filter((arg) => arg !== "--staged");
  if (unknown.length > 0) {
    console.error(`Unknown argument${unknown.length === 1 ? "" : "s"}: ${unknown.join(", ")}`);
    process.exitCode = 2;
    return;
  }

  const result = await checkProductionLineLimits({
    staged: args.includes("--staged"),
  });
  if (result.violations.length > 0) {
    console.error(`Production files must not exceed ${result.maximumLines} lines:`);
    for (const violation of result.violations) {
      console.error(`- ${violation.path}: ${violation.lineCount} lines`);
    }
    process.exitCode = 1;
    return;
  }

  const scope = result.staged ? "staged production files" : "production files";
  console.log(
    `Production line-limit check passed: ${result.filesChecked} ${scope}, maximum ${result.maximumLines} lines.`,
  );
}

if (process.argv[1] && path.resolve(process.argv[1]) === scriptPath) {
  await main();
}
