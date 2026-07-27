# Claude Code instructions

This file adds nothing of its own about how this repository works. All
repository rules — structure, task routing, evidence safety, approval gates,
verification — live in [`AGENTS.md`](AGENTS.md), which is imported below and
applies in full. Where the two ever appear to differ, `AGENTS.md` wins; fix the
drift there rather than here.

@AGENTS.md

## Reading the rest

- Working anywhere under `site/`: read [`site/AGENTS.md`](site/AGENTS.md) first,
  then [`site/README.md`](site/README.md). Those files own application
  implementation, visual rules, and the change-to-proof table.
- Everything else: follow the task routing section of `AGENTS.md` and read only
  the owners it names.

## Claude Code specifics

These cover harness behavior that `AGENTS.md` does not describe. They do not
relax anything it requires.

- Run repository-wide checks from the repository root and application checks
  from `site/`. `AGENTS.md` and `site/AGENTS.md` state which apply.
- Use the scratchpad directory for working files. Do not write scratch into the
  repository except under the ignored `tmp/`.
- Subagents inherit these instructions only if you restate them. When
  delegating, name the evidence owner the subagent may read and repeat the
  rule that Mason selects the evidence used in the site.
- The approval gates in `AGENTS.md` — commit, push, deployment, Figma writes,
  destructive actions — are not satisfied by a permission-mode allowlist. Ask
  Mason each time.
- Figma access goes through Mason's logged-in Chrome profile via the Chrome
  integration. The native Figma MCP server and Playwright are prohibited here
  even though they are available in this environment.
