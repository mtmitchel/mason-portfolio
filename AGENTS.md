# Mason Portfolio repository instructions

This directory is the Git and instruction root. Global Codex and workstation
safety rules still apply. [`site/AGENTS.md`](site/AGENTS.md) owns application
implementation and technical checks. The shared
[`build-content-design-portfolio` skill](/home/mason/.agents/skills/build-content-design-portfolio/SKILL.md)
owns editorial method. This file owns Portfolio-specific evidence, writer, and
repository boundaries.

## Canonical owners

- [`docs/portfolio-case-production.md`](docs/portfolio-case-production.md)
  owns case-production stages, candidate invalidation, the repair budget, and
  shared presentation rules. It is a workflow, not a story template.
- [`site/AGENTS.md`](site/AGENTS.md) and [`site/README.md`](site/README.md)
  own application structure, local preview, rendered review, and technical
  verification.
- [`docs/external-agent/base/README.md`](docs/external-agent/base/README.md)
  owns the persistent external-project file set.
- [`docs/external-agent-packets.md`](docs/external-agent-packets.md) owns
  optional task-folder lifecycle. The
  [local delivery guide](docs/external-agent/base/EXTERNAL-AGENT-PACKET-GUIDE.md)
  owns delivery and context separation.
- Private evidence files own facts, claim ceilings, provenance, and story
  opportunities. Queues, filenames, manifests, and existing routes help
  discovery; they do not choose the story or prove quality.

## Hiring and evidence standard

The Portfolio's purpose is to help Mason win interviews and a job. Build the
strongest clear, truthful, defensible account of his contribution. Evidence
limits facts and claims; it does not require a public case to preserve a
correctable copy, visual, crop, framing, or presentation defect. Repair the
public derivative or truthful reconstruction, replace it, or remove it.

Preserve original evidence. Record material reconstruction or transformation
privately. Do not present reconstructed work as an exact historical capture,
and do not turn routine provenance into public caveats unless the distinction
changes what a hiring reader needs to understand.

- Treat Mason's supplied source boundary as complete unless he expands it.
- Use his account for his role, contribution, rationale, collaboration, and
  recollection when it is consistent with the artifacts.
- Distinguish supported facts, defensible professional reconstruction, and
  invention. Do not invent research, quotations, ownership, shipment,
  adoption, metrics, results, or measured causation.
- Attribute team, program, campaign, and experiment outcomes only at their
  supported scope. A rationale or copy-quality judgment does not prove that
  one wording change caused a metric.
- A screenshot proves only the visible state and conditions. It does not prove
  a universal, default, exhaustive, shipped, or guaranteed product state.
- Use a public case visual only when its private record ties it to retained
  historical evidence or to new work Mason explicitly authorized. Keep
  generated or illustrative material quarantined unless he authorizes that
  exact new-work route.
- Keep private provenance, source notes, and review machinery out of public
  copy unless a limitation changes the reader's understanding.

## Portfolio prose route

For authorized creation or revision of reader-facing Portfolio prose, this
repository selects one response-only native `gpt-5.6-sol` writer at `high`
effort. Verify that exact route before use. If it is unavailable, stop rather
than substituting another model, effort, provider, role, or destination. An
exact current-task selection by Mason overrides this repository route for that
stage. Review or diagnosis alone does not authorize rewriting or launch the
writer.

The root curates the minimum bounded source set, keeps claims within evidence,
and gives the writer the current request, intended reader outcome, selected
editorial source, supported contribution, relevant artifacts and state limits,
and supported results. The writer returns prose only. It does not inspect
unnamed repository material or edit files. The root owns integration,
verification, and the final verdict.

Before preparing writer material, classify existing prose:

- Include an active draft only when Mason wants it preserved, revised, or
  line-edited.
- Exclude a rejected draft completely, including its prose, headings, order,
  thesis, conclusion, and derivative outline. Rebuild the factual brief from
  evidence.
- Treat a Mason-selected target as the editorial starting point. Preserve or
  adapt its story and voice as requested while correcting unsupported facts
  and claims. It is not factual authority.

Follow the case-production runbook for stage order, candidate validity, and
the one total same-writer repair. Reviewers diagnose; they do not rewrite.
Meaning-preserving Markdown, JSX, escaping, capitalization, or quotation
normalization is integration, not a new draft.

An authorized factual reviewer receives the candidate plus only the evidence
and claim limits needed to test it. An authorized independent hiring reader
receives only the assembled reader-facing candidate, one audience or outcome
sentence, and its visuals in reading order in a fresh context. Do not send that
reader evidence, claim limits, voice files, writer rationale, prior feedback,
or a preferred verdict.

## External and delegated agents

An external agent has no implied access to this repository, local files,
terminal, Git state, localhost, or unprovided material. Send only the minimum
task-relevant source set to the exact authorized provider, model, or
destination. Never send credentials, secrets, or unrelated material.

A local delegated agent receives only its stated task, source set, permissions,
write boundary, invariants, and stop condition. It does not inherit an
external project's persistent context. The repository-root agent remains the
only user-facing orchestrator and inspects any returned work before use.

## Implementation and design

Inspect Git status and any protected-file hashes before editing. Preserve
unrelated work. Do not reset, restore, overwrite, or bulk-stage a dirty tree.
Use the existing primary checkout for ordinary writes; the case-production
runbook owns the narrow linked-worktree exception.

Let the selected story determine order, reading width, media scale, captions,
and interaction. Shared components provide behavior, not a universal case
template. When rendered quality is in scope, use the approved local browser
route under the global and machine capture rules.

Do not commit, push, publish, deploy, edit Figma, change access, restart a
service, or perform another live external action without its required
authorization.

## Verification

For documentation, evidence, or repository-policy changes, run from the
repository root:

```bash
node scripts/check-repository.mjs
git diff --check
```

For application changes, follow [`site/AGENTS.md`](site/AGENTS.md). Run focused
checks before expensive gates and inspect the complete final diff. Mechanical
checks prove conformance only; they do not prove reader value, visual quality,
provider behavior, or Mason's approval.
