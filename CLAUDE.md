# Claude Code adapter

`AGENTS.md` is the canonical repository policy and is imported below. This
file adds only Claude-specific mechanics.

@AGENTS.md

- For work under `site/`, read `site/AGENTS.md` and `site/README.md` before
  editing or running application checks.
- Put working files in the ignored `tmp/` directory, not at repository root.
- Restate every protected invariant, source boundary, write boundary, and stop
  condition when using a Claude subagent; inheritance is not assumed.
- A Claude permission-mode allowlist does not satisfy the repository's commit,
  push, deployment, Figma, destructive-action, or other approval boundaries.
- Follow `/home/mason/AGENTS.md` for machine-owned browser, Figma, credential,
  wrapper, and safety routing. Do not copy those rules here.
