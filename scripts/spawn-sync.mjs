import { spawnSync } from "node:child_process";

export function spawnSyncChecked(command, args, options = {}) {
  const result = spawnSync(command, args, options);
  if (result.status === 0) return result;

  const output = [result.stderr, result.stdout]
    .filter(Boolean)
    .map((value) => String(value).trim())
    .filter(Boolean)
    .join("\n");
  const detail = output ? `\n${output}` : "";
  const error = new Error(
    `${command} exited with status ${result.status ?? "unknown"}${detail}`,
  );
  error.cause = result.error;
  error.result = result;
  throw error;
}
