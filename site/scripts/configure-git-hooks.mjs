import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSyncChecked } from "../../scripts/spawn-sync.mjs";

const scriptPath = fileURLToPath(import.meta.url);
const repositoryRoot = path.resolve(path.dirname(scriptPath), "../..");

try {
  spawnSyncChecked("git", ["rev-parse", "--git-dir"], {
    cwd: repositoryRoot,
    encoding: "utf8",
  });
} catch {
  console.log("Git hooks were not configured because this checkout has no Git directory.");
  process.exit(0);
}

spawnSyncChecked(
  "git",
  ["config", "--local", "core.hooksPath", ".githooks"],
  { cwd: repositoryRoot, encoding: "utf8" },
);
console.log("Configured Git to use the tracked hooks in .githooks.");
