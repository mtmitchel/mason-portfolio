# Mason Portfolio repository instructions

This directory is the Git and instruction root for the portfolio workspace.
`/home/mason/.codex/AGENTS.md` owns universal workflow and
`/home/mason/AGENTS.md` owns workstation safety. This file owns repository-wide
portfolio routing, evidence safety, permissions, and completion. The closest
nested `AGENTS.md` owns implementation details inside its subtree.

## Repository shape

- `site/` is the versioned portfolio application. Read `site/AGENTS.md` before
  changing its code, copy, routes, tests, or public assets.
- `private-evidence/`, `claim-review.md`, `archive/`, `tmp/`, and the root CV are
  local working material and are ignored by Git. Never publish or stage them.
- `private-evidence/deepl-portfolio-current-direction.md` owns the current DeepL
  portfolio selection, metric, writing, and layout decisions. Do not duplicate
  changing task state in this file.
- Current disk evidence outranks old handovers, chat summaries, transient SHA
  references, and stale documentation.

## Task routing

Read only the owners required by the current task:

- Site implementation or review: `site/AGENTS.md`, then `site/README.md`.
- DeepL selection, case-study framing, or claim-bearing copy:
  `private-evidence/deepl-portfolio-current-direction.md`, then the relevant
  section of `claim-review.md`.
- Achievement-to-Figma mapping or source classification:
  `private-evidence/deepl-product-figma-navigation-correction-2026-07-20.md`,
  the relevant section of `private-evidence/deepl-figma-evidence-map.md`, and
  `private-evidence/deepl-achievement-recovery/README.md`.
- Figma inspection, export, recovery, or an explicitly authorized Figma edit:
  `docs/figma-workflow.md` plus the task-specific evidence owner above.
- Historical material under `archive/`: read only when Mason explicitly asks to
  inspect that history or a current owner points to one exact artifact.

Do not read every private evidence file by default. Narrow context to the
selected project, claim, frame, or acceptance outcome.

## Execution and finish line

- Treat Mason's request as the objective and its requested outcomes as the
  acceptance criteria. For ordinary work, do not create a separate plan or task
  artifact unless one is needed to resolve real ambiguity.
- Continue through live-state inspection, in-scope implementation, focused
  verification, and final diff review. Do not stop after a proposal, inventory,
  partial edit, or status update while the next required step is authorized and
  safe.
- Use the smallest durable solution that fully meets the request. Preserve all
  unrelated and pre-existing work in the dirty repository.
- `COMPLETE` means every requested outcome passed its applicable proof.
  `PARTIAL` means useful work exists but an acceptance outcome remains unmet and
  authority has ended. `BLOCKED` means an external decision, capability, or
  protected phase prevents a safe candidate.
- Never describe unverified behavior as complete. Name the exact unmet outcome
  and one concrete next action when work remains.

## Evidence and confidentiality

- Support artifact/state, Mason's contribution, lifecycle, and outcome as
  separate claim dimensions. Evidence for one dimension does not prove another.
- Keep invitation URLs, account or subscription identifiers, emails, comments,
  employee identities, internal tickets, participant data, unreleased features,
  allocation details, private Figma links, and unsupported metrics private.
- A screenshot, flattened image, PDF, or export may prove historical or current
  state. It does not prove editable active design work or an improvement.
- User-confirmed aggregate outcomes may appear only at their documented program
  or experiment-wave scope, never attached to an individual screen without
  direct support.

## Protected phases and artifacts

- Figma is read-only unless Mason explicitly authorizes an edit in the current
  task. All Figma access uses Mason's logged-in Chrome profile; never use Figma
  MCP, APIs, plugins, Playwright, another browser, or programmatic canvas edits.
- Do not create screenshots, recordings, browser captures, visual diffs, PDFs,
  or other visual QA artifacts unless Mason requests that exact artifact.
- Local inspection, requested repository edits, and focused verification are
  allowed. Commit, push, publication, deployment, access changes, Figma writes,
  and deletion each require their own explicit authorization.
- Permanent deletion is prohibited. Preserve immutable provenance sources and
  use the workstation-approved Trash route only when removal is authorized.
- Detailed Figma evidence, edit, recovery, and export procedure lives only in
  `docs/figma-workflow.md` and loads for matching tasks.

## Verification and closeout

- Evidence or documentation changes: verify affected links, claim ceilings,
  privacy boundaries, and `git diff --check` on the changed paths.
- Site changes: follow the change-to-proof matrix in `site/AGENTS.md` and review
  the final diff from this repository root.
- A handover is created only when Mason asks for one. It must be rebuilt from
  final live state, contain one concrete next action, and end the task.
- Routine closeouts use `TL;DR:` and at most five bullets: result, most important
  change, strongest verification, material remaining risk, and `Next` when work
  remains.
