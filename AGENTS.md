# Mason Portfolio repository instructions

This directory is the Git and instruction root. The global Codex instructions
apply first. This file owns repository-wide routing, evidence safety,
permissions, and completion. [`site/AGENTS.md`](site/AGENTS.md) adds rules for
the application.

## Canonical structure

- [`site/`](site/) is the only deployable portfolio application.
- [`private-evidence/deepl-portfolio-current-direction.md`](private-evidence/deepl-portfolio-current-direction.md)
  owns current public titles, story order, writing rules, and homepage choices.
- [`private-evidence/claim-review.md`](private-evidence/claim-review.md) owns
  current claim ceilings.
- [`private-evidence/portfolio-asset-manifest.json`](private-evidence/portfolio-asset-manifest.json)
  owns selected-asset source and crop records.
- [`private-evidence/deepl-figma-evidence-map.md`](private-evidence/deepl-figma-evidence-map.md)
  owns the achievement-to-Figma crosswalk.
- [`docs/figma-workflow.md`](docs/figma-workflow.md) owns Figma access, edit,
  and export procedure.
- [`archive/`](archive/) contains preserved history only. It is never current
  product, claim, or publication truth.
- `tmp/` is ignored scratch space.

Current disk evidence outranks chat summaries, handovers, transient commit
references, and archived plans.

## Task routing

Read only the owners required by the task:

- Site implementation or review: [`site/AGENTS.md`](site/AGENTS.md), then
  [`site/README.md`](site/README.md).
- Public case framing or claim-bearing copy:
  [`private-evidence/deepl-portfolio-current-direction.md`](private-evidence/deepl-portfolio-current-direction.md),
  then the relevant section of
  [`private-evidence/claim-review.md`](private-evidence/claim-review.md).
- Achievement-to-Figma mapping:
  [`private-evidence/deepl-product-figma-navigation-correction-2026-07-20.md`](private-evidence/deepl-product-figma-navigation-correction-2026-07-20.md),
  the relevant section of
  [`private-evidence/deepl-figma-evidence-map.md`](private-evidence/deepl-figma-evidence-map.md),
  and
  [`private-evidence/deepl-achievement-recovery/README.md`](private-evidence/deepl-achievement-recovery/README.md).
- Figma inspection, export, recovery, or an explicitly approved Figma edit:
  [`docs/figma-workflow.md`](docs/figma-workflow.md) plus the task-specific
  evidence owner.
- Historical material: read one exact archived item only when Mason asks for
  that history or a current owner points to it.

Do not scan every private source file by default. Narrow evidence work to the
selected case, claim, frame, or acceptance result.

## Working rules

- Treat Mason's request as the objective and finish every safe, authorized
  step through focused verification and final diff review.
- Preserve unrelated dirty work.
- Keep one current source of truth for each decision. Move superseded work into
  the archive instead of leaving active stubs, duplicate instructions, or
  placeholder links.
- Never publish private employment evidence, raw Figma links, internal
  identifiers, or archived review material.
- Aggregated business results may appear only at the documented program,
  experiment-wave, or campaign level.
- Do not create screenshots, recordings, PDFs, or visual-diff files unless
  Mason requests that exact artifact.
- Permanent deletion is prohibited. When cleanup is approved, preserve useful
  material in the archive and use the workstation Trash route for disposable
  empty or generated paths.

## Protected phases

Figma is read-only unless Mason explicitly approves an edit in the current
task. Use Mason's logged-in Chrome profile when direct Figma access is required.
The official native Figma MCP server, direct Figma APIs, unrelated plugins,
Playwright, and other browsers are prohibited.

Commit, push, publication, deployment, access changes, Figma writes, and
destructive actions each require explicit approval. Approval for one phase does
not approve another.

## Verification and closeout

- Documentation or evidence changes: run `node scripts/check-repository.mjs`
  and `git diff --check`.
- Site changes: follow the proof table in [`site/AGENTS.md`](site/AGENTS.md),
  then review the full diff from this repository root.
- A handover is written only when Mason asks for one. Rebuild it from final live
  state, give one concrete next action, and stop after delivering it.
