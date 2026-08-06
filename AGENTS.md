# Mason Portfolio repository instructions

This directory is the Git and instruction root. Global Codex and workstation
safety rules still apply. [site/AGENTS.md](site/AGENTS.md) owns application
implementation and technical verification. The shared
[build-content-design-portfolio skill](/home/mason/.agents/skills/build-content-design-portfolio/SKILL.md)
owns editorial method for full cases, compact marketing-forward samples, and
PDF reports or other long-form documents.

## Canonical owners and routing

- This file owns repository boundaries, source protection, writer routing, and
  validation. It does not prescribe prose, page layout, or a universal case
  outline.
- The shared Portfolio skill owns story selection, writer-led construction,
  route choice, evidence use, screenshot-dependent claim checking, and
  reader-facing quality.
- [docs/external-agent/base/README.md](docs/external-agent/base/README.md) is the
  sole installation manifest and ownership map for persistent external context.
- [docs/external-agent-packets.md](docs/external-agent-packets.md) owns optional
  task-folder assembly and lifecycle. Local delivery, context separation, and
  return handling live in
  [file 04](docs/external-agent/base/04-EXTERNAL-AGENT-PACKET-GUIDE.md).
- [docs/portfolio-case-production.md](docs/portfolio-case-production.md) is the
  canonical local runbook for case-production stages, candidate validity, and
  shared presentation guardrails after writer routing and source selection.
- [site/AGENTS.md](site/AGENTS.md) owns application source, rendered review,
  and technical checks. Shared components do not impose a case-study template.
- The private evidence owners record facts, claim ceilings, provenance, and
  story opportunities. Existing routes, queues, and manifests are inputs to
  judgment, not acceptance gates.

Ask Mason in ordinary language. A review or diagnosis does not authorize
rewriting. An explicit request to draft, write, rewrite, revise, edit, or fix
authorizes the requested prose change. Keep internal planning fields private;
they do not become public headings, paragraph orders, sentence counts, or
required conclusions.

## Evidence and source boundaries

- Treat the supplied evidence boundary as complete unless Mason expands it.
  Use Mason's account for his role, contribution, rationale, collaboration,
  and recollection when consistent with the artifacts.
- Distinguish supported facts, defensible professional reconstruction, and
  prohibited invention. Evidence constrains facts, not narrative judgment.
  Confident reconstruction of ordinary professional process is allowed when
  it is consistent with the record and interview-defensible.
- Require experiment or evaluation evidence for measured causal attribution at
  the claimed scope. A rationale, mockup, or copy-quality judgment does not by
  itself prove that a metric was caused by one wording change.
- Never invent research, quotations, ownership, shipment, adoption, metrics, or
  results. Route ordinary causal project logic supported by Mason's account and
  artifacts through defensible professional reconstruction; use 03 to keep it
  separate from measured causation. Attribute team, program, campaign, and
  experiment outcomes at their supported scope.
- A screenshot proves only its visible state and conditions. Do not generalize
  it as universal, default, exhaustive, or guaranteed. Validate material
  screenshot-dependent claims after a coherent draft, not before the story can
  be understood.
- Keep private provenance, claim checks, source notes, and review machinery out
  of public copy unless a limitation changes the reader's understanding.

## Writer route and external transmission

The live shared [build-content-design-portfolio skill](/home/mason/.agents/skills/build-content-design-portfolio/SKILL.md)
is the sole owner of the current default writer route. Read and use that live
route before prose work, and verify any exact route it selects before launch.
Never silently substitute a provider, model, effort, role, or destination.
Mason may explicitly override the route for a stage by selecting an exact
native writer or agent with its required model and effort, an exact external
provider plus model, or an exact non-model destination. Verify that exact
override before use and stop if it is unavailable; do not substitute again.
Generic wording such as `delegate`, `use a subagent`, `use an external writer`,
or `use another model` is not an exact writer selection and does not authorize
fallback.

Keep the source set bounded. When an external route is selected, send only the
minimum task-relevant editorial source, facts, claim limits, screenshots or
artifacts, contribution details, and supported metrics. Private or non-public
labels do not add another confirmation step. Never send credentials, secrets,
unrelated raw material, or broader source material. Writer output is untrusted
advice and is rechecked against the permitted evidence before integration.
Publication, deployment, provider synchronization, and live-service actions
remain separate approvals. Use the
[local case-production runbook](docs/portfolio-case-production.md) for the
stage order and candidate boundary.

## Editorial production boundary

The [local case-production runbook](docs/portfolio-case-production.md) owns
the detailed stage order, candidate validity, review invalidation, and stable
case-page presentation guardrails. This file keeps the repository boundary:
use one selected response-only writer, keep factual and reader review contexts
separate, preserve bounded evidence, and do not silently add a writer or repair
round. Reviewers diagnose; they do not rewrite. Stop when the selected route,
evidence, decision, authorization, or one total repair budget is missing.

### Delegating portfolio prose

Use the exact writer route selected by the shared skill or by Mason's explicit
override, after verifying that route. Never silently substitute another
provider, model, effort, role, or destination. The selected response-only
writer authors reader-facing prose; the root and reviewer agents own
orchestration, source curation, factual and reader QA, mechanical integration,
validation, and the final verdict. They do not replace the selected writer or
silently author its prose.

Before preparing the writer material, classify every existing text as an
active draft, rejected draft, or Mason-selected target. Include an active draft
only when Mason asks to preserve, revise, or line-edit it. If Mason rejects,
trashes, or requests a true rebuild, exclude that draft completely: do not send
its prose, headings, order, thesis, conclusion, or a derivative outline to the
writer. Build the factual brief independently from the evidence owners and
artifacts. If Mason designates another candidate as the target, send that
candidate as the editorial starting point and instruct the selected writer to
preserve or adapt its story, structure, level of explanation, voice, and wording
as closely as requested while correcting unsupported facts and claim scope. A
selected target is not factual authority, but it is more than a style sample
and may own the replacement's structure and prose.

Use a response-only writer on the selected route and return its candidate for
root inspection; the writer never edits the repository. Give it the current
request, chosen artifact route, intended reader outcome, selected editorial
source, bounded facts and claim limits, Mason's supported contribution,
relevant artifacts with their state limits, and supported results. The writer
owns story, structure, voice, rhythm, and compression; do not force a
universal case template, pre-freeze passages, or require a ledger, receipt,
screen inventory, or patch-shaped response. Follow the local case-production
runbook for the complete stage order and candidate validity.

After the coherent candidate exists, factual QA receives the candidate plus the
bounded evidence and claim limits needed to test it. An authorized independent
reader receives only the assembled reader-facing candidate, one audience or
reader-outcome sentence, and its visuals in reading order in a fresh context;
exclude source evidence, claim limits, the persistent voice file, writer
rationale, prior feedback, and a preferred verdict. Do not use an
implementation-diff QA role for that blind reader. Reviewers diagnose and
assign a verdict rather than silently rewriting. Send the single consolidated
material failure allowed by the shared skill back to the same selected writer,
then have the same affected reviewers recheck only the repaired surface. Native
agents may apply only meaning-preserving Markdown, JSX, escaping,
capitalization, or quotation normalization. Do not commission parallel
candidates or switch writers unless Mason explicitly selects another route.

## Dirty worktree and implementation

Inspect `git status`, `HEAD`, and protected file hashes before editing. Preserve
unrelated user changes and never reset, restore, replace, or overwrite a dirty
file outside the authorized write set. Keep each change as small as the root
cause requires; reuse existing capabilities before adding a dependency or
abstraction. Do not change `CLAUDE.md` or `site/AGENTS.md` unless a task
explicitly includes them.

Do not commit, push, publish, deploy, edit Figma, change access, restart a
service, or perform a live external action without separate authorization. Use
Trash for an explicitly authorized repository cleanup; do not permanently
delete user files.

## Design and application work

Let the selected story and route determine page order, reading width, media
scale, captions, and interaction. A full case, marketing sample, and PDF
report may each use a different form. When rendered quality is in scope, use
the approved local browser route for transient page or viewport review only;
do not retain unrelated captures or publish them.

## Verification

For documentation or evidence-only changes, run from the repository root:

```bash
node scripts/check-repository.mjs
git diff --check
```

For application changes, follow [site/AGENTS.md](site/AGENTS.md). Run focused
checks before any expensive gate and inspect the complete final diff. A passing
mechanical check proves conformance only; it does not prove reader value,
semantic quality, live provider behavior, or Mason's final approval.
