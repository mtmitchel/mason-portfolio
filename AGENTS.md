# Mason Portfolio repository instructions

This directory is the Git and instruction root. Global Codex and workstation
safety rules still apply. [`site/AGENTS.md`](site/AGENTS.md) owns only
application implementation and technical verification.

## What good work means here

The portfolio is a qualitative hiring artifact. Narrative and visual design are
not exact sciences, and passing checks does not make a case good. Mason's
explicit criticism or rejection reopens the thesis, causal framing, structure,
writing, evidence selection, and layout.

The goal is the strongest overall portfolio site: roughly five convincing UX
copywriting and content-design cases selected across Mason's DeepL experience
and the full available evidence base. Prefer case combinations that connect:

- a documented company or team goal, commercial priority, or meaningful product
  pressure;
- Mason's role, collaborators, decisions, and judgment;
- existing Figma visuals or other concrete artifacts that make the work
  understandable; and
- an attributable data-driven result at the correct team, program, experiment,
  or campaign scope when one is supported.

Not every strong case will have every element, and a metric must never be
invented or attached to one person or artifact without support. Judge the
complete portfolio slate and each complete story, not isolated queue rows or
screens. Do not turn these criteria into mandatory public sections.

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
  exports supply the relationships needed to discover strong story
  combinations. Search them selectively from relevant queue leads rather than
  reading the entire repository without a hypothesis.
- `archive/` is history, never current direction.

If important context is clearly missing from the active notes, search the
targeted evidence library or retained export material. Do not assume the
current summary is exhaustive and do not flatten a story around whatever was
already documented.

## Suggested slate-to-case workflow

Use this default for a substantial portfolio build or case-selection task. It
guides discovery; it is not an approval pipeline or a public template.

1. Start with the portfolio slate, not the existing routes. Use the queue to
   find promising relationships among strategic goals, initiatives,
   experiments, Mason's contributions, Figma artifacts, and outcomes.
2. Form several candidate story clusters. Combine rows or workstreams when
   their causal relationship creates one stronger, interview-defensible story;
   do not combine unrelated work merely to make a case larger.
3. Compare complete clusters in totality: hiring value, strategic stakes,
   clarity of Mason's contribution, strength and complementarity of the
   visuals, attributable result, factual defensibility, and distinctness from
   the rest of the slate. Do not turn these factors into a mechanical score.
4. Select the strongest roughly five-case slate. An existing route, historical
   rank, status, or current asset selection does not reserve a place.
5. For each selected case, build a private causal skeleton: goal or pressure,
   team response, relevant initiatives or experiments, Mason's contribution
   and decisions, and the supported result or other meaningful ending.
6. Give each artifact a narrative job such as context, decision, contrast,
   sequence, proof, consequence, or result. Then choose the narrative structure
   and visual grammar together.
7. When implementation is authorized, build the strongest supported direction.
   Do not insert a separate proposal or approval gate unless Mason requested
   one or a material decision genuinely cannot be resolved from the evidence.

Use one independent hiring-reader review and at most one focused repair. This
limit prevents hypothetical perfection. It does not make the first structure
or reviewer preference binding after Mason rejects it.

## Skill routing

- `build-content-design-portfolio` owns portfolio-wide discovery, story
  clustering, slate selection, artifact combinations, case writing, and the
  hiring-reader review.
- For substantial slate selection or case architecture, use the
  `sequential-thinking` MCP in two passes: first for the slate or causal
  skeleton and evidence relationships, then again to turn the selected
  combination into a full narrative and visual plan.
- Do not automatically stack `narrative-writer` on top of it. Use
  `narrative-writer` only when Mason explicitly requests it or the task is a
  genuinely separate deep narrative-architecture repair.
- Use `research-deepl-product-intelligence` during discovery or draft
  verification only when product relationships, terminology, commercial
  history, audience, adoption, or current product state need external context.
  Local evidence and Mason's account govern company or team goals, his role,
  contribution, and attributable project outcomes.
- Use `frontend-design` only after the selected story cluster, causal skeleton,
  and artifact jobs are clear. Its preference for preserving an existing design
  system does not make rejected case layouts or shared components authoritative.
- After implementation, use the approved browser-control route for real
  desktop, mobile, overflow, and keyboard inspection. Static checks do not
  replace that visual review.

## External-agent packet requests

When Mason asks a repository agent to prepare, fill, update, or refresh an
external-agent packet, follow
[`docs/external-agent-packets.md`](docs/external-agent-packets.md).

- [`docs/external-agent/base/`](docs/external-agent/base/) is the canonical
  tracked base. Edit it there, never in a dated `tmp/` copy.
- The external agent receives only `PROJECT_INSTRUCTIONS.txt`, the four
  numbered base files, and the files and images in the current task packet. It
  cannot inspect this repository, hidden evidence, prior conversations, local
  paths, or unshared source material.
- The repository agent may search the private evidence library to assemble a
  self-contained packet. Do not expose repository paths, raw private archives,
  credentials, unrelated personal data, or unsupported conclusions.
- Generated upload bundles belong in ignored `tmp/external-agent-*`
  directories. They are working output, not durable instructions or sources of
  truth. Preparing a packet does not authorize sending it to a provider.
- Choose the packet mode before collecting files: portfolio-slate discovery,
  case construction or reconstruction, rendered-case review, or an explicit
  combination. A single-case packet cannot make a final slate comparison
  without the competing cases.
- For comprehensive written feedback, include the reader-facing draft when one
  exists and ask for narrative, structure, role clarity, headings, transitions,
  body copy, captions, result treatment, and ending.
- For comprehensive design feedback on an implemented page, also include a
  currently accessible public URL or current desktop and mobile captures.
  Product screenshots alone support visual planning, not a rendered-page
  review. Do not create new captures unless Mason requested them.
- Every case packet normally includes an exact task file, `CASE_CONTEXT.md`,
  `FACTS_AND_LIMITS.md`, `ASSET_INDEX.md`, and the selected artifacts.
  Add `CURRENT_DRAFT.md`, rendered captures, a slate context, or a narrowly
  necessary source excerpt only when the chosen mode needs them.
- Keep `PROJECT_INSTRUCTIONS.txt` below 8,000 characters. Before handoff,
  verify every reference resolves, every selected asset is actually included,
  rejected work is labelled or removed, and the packet assumes no hidden
  access.

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
