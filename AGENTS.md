# Mason Portfolio repository instructions

This directory is the Git and instruction root. Global Codex and workstation
safety rules still apply. [`site/AGENTS.md`](site/AGENTS.md) owns only
application implementation and technical verification.

## What good work means here

The portfolio is a qualitative hiring artifact. Narrative and visual design are
not exact sciences, and passing checks does not make a case good. Mason's
explicit criticism or rejection reopens the thesis, causal framing, structure,
writing, evidence selection, and layout.

Aim for roughly five strong UX copywriting and content-design cases. Each case
should help a hiring reader understand:

- the product or organizational pressure;
- Mason's role and collaborators;
- the decisions and judgment that mattered;
- the evidence that makes those decisions concrete; and
- the supported result or other meaningful ending.

Do not turn those questions into mandatory public sections.

## Evidence is a story library, not a workflow engine

- [`private-evidence/deepl-project-candidate-queue.md`](private-evidence/deepl-project-candidate-queue.md)
  is a database of related initiatives, artifacts, outcomes, and possible
  combinations. Its ranks and statuses are discovery aids, not gates, route
  contracts, or a public outline.
- [`private-evidence/deepl-portfolio-current-direction.md`](private-evidence/deepl-portfolio-current-direction.md)
  is a working snapshot of recent decisions and explicit corrections. It is not
  a binding story specification.
- [`private-evidence/claim-review.md`](private-evidence/claim-review.md) is
  consulted only to check a material claim about ownership, lifecycle,
  causation, or results. It does not choose tone, emphasis, order, or layout.
- [`private-evidence/portfolio-asset-manifest.json`](private-evidence/portfolio-asset-manifest.json)
  records provenance and transformations. Existing `central_exhibit`,
  `required_tokens`, and route fields are inventory metadata, not acceptance
  criteria for copy, structure, or visual prominence.
- The document inventory, achievement recovery, Figma crosswalks, and source
  exports are lookup sources. Read only what the named story needs.
- `archive/` is history, never current direction.

If important context is clearly missing from the active notes, search the
targeted evidence library or retained export material. Do not assume the
current summary is exhaustive and do not flatten a story around whatever was
already documented.

## How to construct a case

For a substantial case or rebuild, reason through a private skeleton before
writing or laying out the page:

1. Put the events in causal order: organizational goal or product pressure,
   team initiative, relevant experiments or workstreams, Mason's contribution,
   important decisions, and result.
2. Search the queue and targeted evidence for related material. Evaluate
   combinations in totality. Prefer the set that creates the most complete,
   coherent story—not the set with the highest-ranked individual row or the
   most screenshots.
3. Give every selected artifact a narrative job such as context, decision,
   contrast, sequence, proof, consequence, or result. Leave it out when it
   repeats another artifact or forces explanation the story does not need.
4. Choose the narrative structure and visual grammar together. A case may be
   chronological, thematic, experimental, comparative, tabbed, image-led,
   text-led, or something else supported by the material.
5. When Mason asked for implementation, implement the strongest supported
   direction. Do not insert a separate proposal or approval gate unless he
   requested one or the subject itself remains genuinely undecided.

Use one independent hiring-reader review and at most one focused repair. This
limit prevents hypothetical perfection. It does not make the first structure
or reviewer preference binding after Mason rejects it.

## Skill routing

- `build-content-design-portfolio` is the default skill for portfolio
  selection, narrative, evidence use, and reader review.
- Do not automatically stack `narrative-writer` on top of it. Use
  `narrative-writer` only when Mason explicitly requests it or the task is a
  separate deep narrative-architecture pass.
- Use `frontend-design` for implementation or visual redesign. In this
  repository, its normal preference for preserving an existing design system
  does not make rejected case layouts or shared case components authoritative.
- Use `research-deepl-product-intelligence` only when a volatile or externally
  verifiable DeepL product fact is material. Local evidence and Mason's account
  govern his role, team context, contribution, and outcomes.

## Narrative and evidence boundaries

- Mason is the primary source for his own role, participation, rationale, and
  recollection. Missing contributor metadata does not erase his experience.
- Never invent research, quotations, ownership, shipment, adoption, causation,
  or results.
- Attribute team, program, and experiment results at that level. Do not imply
  that one person, string, or screen caused the whole result.
- Distinguish representative working artifacts from exact tested, winning,
  approved, or production states only when the public claim depends on that
  identity.
- Evidence limits the factual claim, not the creativity of the narrative.

## Layout freedom

There is no universal case-study layout.

- Existing `chapter-*` classes, comparisons, switchers, lightboxes, and
  adjacent cases are optional utilities. Reuse them only when they serve the
  new story; never reuse them merely for consistency.
- A user rejection of a layout is permission to replace its composition and
  case-specific styles within the requested scope.
- Evidence must be available and understandable, but it does not need to sit
  beside every sentence that refers to it.
- Do not cram prose, annotations, metrics, and complete screens into one small
  construction. Use space, sequence, tabs, focused details, full-width media,
  or text-only passages according to the material.
- Do not encode exact prose, metadata, asset sets, section order, component
  names, media placement, or visual treatment in automated tests.

## Safety and external actions

- Keep private evidence and raw exports out of `site/` unless Mason explicitly
  selects the material for public use.
- Figma is read-only unless Mason explicitly approves an edit. Follow
  [`docs/figma-workflow.md`](docs/figma-workflow.md) for an approved Figma task.
- Commit, push, publication, deployment, access changes, Figma writes, and
  destructive actions require their normal separate approvals.
- Do not create screenshots, recordings, PDFs, or visual-diff artifacts unless
  Mason asks for that artifact.
- Preserve unrelated dirty work. Use Trash for approved cleanup.

## Verification

Tests should protect route rendering, privacy, asset integrity, factual
prohibitions, accessibility, responsive safety, and interaction behavior. They
must not certify editorial quality or freeze the current story and design.

- Documentation or evidence-only changes: `node scripts/check-repository.mjs`
  and `git diff --check`.
- Site changes: follow [`site/AGENTS.md`](site/AGENTS.md), then inspect the full
  repository diff.
- Write a handover only when Mason asks for one.
