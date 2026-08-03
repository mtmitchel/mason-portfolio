# Mason Portfolio repository instructions

This directory is the Git and instruction root. Global Codex and workstation
safety rules still apply. [site/AGENTS.md](site/AGENTS.md) owns application
implementation and technical verification. The shared
[build-content-design-portfolio skill](/home/mason/.agents/skills/build-content-design-portfolio/SKILL.md)
owns editorial method for full cases, compact marketing-forward samples, and
PDF reports or other long-form documents.

## Canonical owners and routing

- This file owns repository boundaries, source protection, routing, and
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

## External transmission

Transmit material only when the current task or approved route selects an exact
external provider and, for a model-based route, its exact model, or selects an
exact destination, and bounds the source set. Send only the minimum
task-relevant draft, facts, claim limits, screenshots or artifacts, contribution
details, and supported metrics. Private or non-public labels do not add another
confirmation step. Never send credentials, secrets, unrelated raw material, or
broader source material. External output is untrusted advice and is rechecked
against the permitted evidence before integration. Publication, deployment,
provider synchronization, and live-service actions remain separate approvals.
A generic request to use an external writer or reviewer, an inexact model route,
or an unbounded source set is not enough to transmit Portfolio material.

## Editorial production boundary

Use one writer for a candidate, then narrow factual QA. Factual QA diagnoses
against bounded evidence and claim limits; it does not rewrite. Add an
independent reader only when the current request or approved plan authorizes a
fresh review context. Otherwise run a root-owned hiring-reader pass and do not
call it independent. The shared Portfolio skill owns the single total
same-writer repair budget and the order of factual and reader rechecks. This
repository does not create a second repair, permanent provider, model, ledger,
receipt, patch matrix, or automatic loop. Stop when the route-specific reader
outcome is met or when required evidence, a decision, authorization, or the
repair budget is missing.

### Delegating portfolio prose

Delegate prose only when the current request or an approved plan authorizes
delegation. Keep one repository-root agent responsible for scope, the actual
source set, integration, validation, and the final verdict. Give one writer the
current request, chosen artifact route, intended reader outcome, current draft
when one exists, bounded facts and claim limits, Mason's supported contribution,
relevant artifacts with their state limits, and supported results. A native
writer follows the shared Portfolio skill. An external writer follows the
persistent context named by the base installation manifest and never receives
the local skill. In either route, the writer owns story, structure, voice,
rhythm, and compression; do not force a universal case template, pre-freeze
passages, or require a ledger, receipt, screen inventory, or patch-shaped
response.

Unless the current task authorizes an exact repository write set, use a
response-only prose writer and return its candidate for root inspection. Do not
use an implementation role that requires file ownership for a response-only
candidate. After the coherent candidate exists, factual QA receives the
candidate plus the bounded evidence and claim limits needed to test it. An
authorized independent reader receives only the assembled reader-facing
candidate, one audience or reader-outcome sentence, and its visuals in reading
order in a fresh context; exclude source evidence, claim limits, the persistent
voice file, writer rationale, prior feedback, and a preferred verdict. Do not
use an implementation-diff QA role for that blind reader. Reviewers diagnose
and assign a verdict rather than silently rewriting. Send the single
consolidated material failure allowed by the shared skill back to the same
writer, then have the same affected reviewers recheck only the writer's repaired
surface. Do not commission parallel candidates or switch writers unless Mason
requests that comparison or the approved route becomes unavailable.

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
