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

Pure narrative editing may use one independent hiring-reader review and one
bounded reader repair. For design work, use the adaptive natural-language
workflow in the global `frontend-design` skill; a reader review must not
consume or expand its separate design budget. Neither review makes a first
structure or reviewer preference binding after Mason rejects it.

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
- Use `crop-optimize-web-images` when a selected raster screenshot needs
  canonical-source confirmation, an exact crop, lossless optimization, a
  hash-based public filename, a paired-image scale check, or served-byte
  verification. It owns only the image-byte workflow. The repository agent
  owns copying into `site/public`, reference and manifest updates, build and
  browser review, and cleanup. Follow the repository capture policy.
- Use `frontend-design` after the selected story cluster, causal skeleton, and
  artifact jobs are clear. Let it infer whether the task needs a new design,
  redesign, direct iteration, faithful reproduction, or visual bug fix. Do not
  duplicate its adaptive workflow here; apply the Portfolio meanings below. Its
  preference for preserving an existing design system does not make rejected
  case layouts or shared components authoritative.
- After implementation, use the approved browser-control route for real
  desktop, mobile, overflow, interaction-state, and keyboard inspection. Static
  checks do not replace that visual review.

## External-agent packet requests

When Mason asks a repository agent to prepare, fill, update, or refresh an
external-agent packet, follow
[`docs/external-agent-packets.md`](docs/external-agent-packets.md).

- [`docs/external-agent/base/`](docs/external-agent/base/) is the canonical
  tracked base for the shared instructions already installed in the external
  web project spaces. Edit shared instructions there, never in a dated `tmp/`
  copy. Repository agents may inspect the base to understand the installed
  context. Do not copy or restate it inside a case-study packet unless Mason
  explicitly asks to update the shared base itself.
- The external agent already has the shared base. A generated case-study packet
  contains only the current task's context, facts, draft, index, captures, and
  selected artifacts. The external agent still cannot inspect this repository,
  hidden evidence, prior conversations, local paths, or unshared source
  material. A review packet may briefly tell the external agent to check the
  instructions and files already available in its project space, but must not
  cite base filenames or repository paths.
- Every request to create, update, or refresh a new or existing
  `tmp/external-agent-*` case-study folder must leave that folder with no more
  than 10 files. Inspect the existing folder first. Combine task, context,
  facts, asset-index, and draft sections into fewer text files when that
  preserves slots for necessary images. Move superseded or duplicate files to
  Trash; do not keep the same material under new names.
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
- Every case packet must still contain an exact task, case context, facts and
  limits, an asset index, and the selected artifacts. These sections may share
  one text file to stay within the 10-file limit. Add the reader-facing draft,
  rendered captures, slate context, or a narrowly necessary source excerpt only
  when the chosen mode needs them.
- Keep `PROJECT_INSTRUCTIONS.txt` below 8,000 characters. Before handoff,
  verify the separately maintained shared base, then verify the case-study
  folder contains at most 10 task-specific files, every reference resolves,
  every selected asset is actually included, rejected work is labelled or
  removed, and the packet assumes no hidden access.

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

## Portfolio design workflow and visual-language profile

There is no universal case-study layout. Use the global `frontend-design` skill
as an adaptive agent-owned workflow. Infer from Mason's ordinary request and
the repository whether this is a new design, redesign, direct iteration,
faithful reproduction, or visual bug fix. Do not ask Mason to name a phase,
skill, profile, handoff, budget, or routine thread transition. Stay in one chat
by default. For a substantial new design or redesign where materially
different directions would change the outcome, develop three genuinely
structural directions and pause once for Mason's choice. For clear, routine,
reversible, faithful, or bug-fix work, choose the strongest direction and
proceed directly.

An explicit or natural rejection abandons the rejected layout family and its
defining traits, then pursues a materially different composition; it does not
authorize cosmetic repair or consume the rendered repair budget. Preserve
privacy, factual, accessibility, provenance, and publication rules throughout.
Use one implementation pass and up to two focused rendered visual repair
passes. Make the rendered qualitative decision before build, accessibility, or
other conformance checks; passing checks do not replace it. Clearly marked
provisional copy, hierarchy labels, length targets, and alternate text
structures may guide exploration. Mason retains final copy and claim approval;
provisional text cannot be published or represented as fact.

### Non-negotiable narrative-visual alignment

Text and design have the same job: communicate the case's core ideas to the
reader. They use different means, but they must make the same argument together.
Every visual must clarify, demonstrate, or prove the idea advanced by the
surrounding narrative. A visual that merely depicts related material—or
obscures the relationship the text is explaining—must be redesigned or removed.

Do not keep a visual merely because it is available, attractive, or broadly
related to the subject. This rule governs story planning, visual selection,
temporary concepts, implementation, and rendered review.

### Current approved visual-language profile

The following rules are an approved Portfolio visual-language profile. They
become binding only after the profile is intentionally selected for
implementation. During framing, divergence, and selection, they are candidate
traits rather than universal prohibitions.

- Use sentence case for every reader-facing heading, label, caption, control,
  diagram, metadata line, and navigation item. Never style text as all caps or
  use CSS `text-transform: uppercase`. Preserve exact capitalization only
  inside source evidence, quotations, legal text, product names, and technical
  identifiers that cannot be changed.
- Never add decorative numeric prefixes or standalone sequence labels such as
  `01`, `02`, `03`, or similar numbering to portfolio headings, sections,
  figures, captions, cards, callouts, or visual modules. Functional numbers are
  allowed only when they are part of the source evidence or Mason explicitly
  requests them, such as numbered checkout steps or tab labels.
- Never use a tiny eyebrow, kicker, category label, or metadata label in the
  upper-left of a composition with a larger headline or primary message placed
  to its right. Keep the primary heading in the clear leading position and do
  not create hierarchy through that asymmetrical small-label/large-headline
  pattern.
- In every case-study body, prose and media use the same content column. Images,
  figures, comparisons, interactive evidence, and their captions must match the
  narrative text width and align to the same left and right edges at every
  viewport. Never let case-study media break wider than its text column,
  overflow that column, or use a full-bleed or wide-breakout treatment.
- Existing `chapter-*` classes, comparisons, switchers, lightboxes, and
  adjacent cases are optional utilities. Reuse them only when they serve the
  new story; never reuse them merely for consistency.
- A user rejection of a layout is permission to replace its composition and
  case-specific styles within the requested scope.
- Evidence must be available and understandable, but it does not need to sit
  beside every sentence that refers to it.
- Do not cram prose, annotations, metrics, and complete screens into one small
  construction. Use space, sequence, tabs, focused details, or text-only
  passages according to the material while keeping media on the text column.
- Do not encode exact prose, metadata, asset sets, section order, component
  names, media placement, or visual treatment in automated tests.

## Safety and external actions

- Keep private evidence and raw exports out of `site/` unless Mason explicitly
  selects the material for public use.
- Figma is read-only unless Mason explicitly approves an edit. Follow
  [`docs/figma-workflow.md`](docs/figma-workflow.md) for an approved Figma task.
- Commit, push, publication, deployment, access changes, Figma writes, and
  destructive actions require their normal separate approvals.
- When rendered design quality is in scope, transient local browser-page or
  viewport captures, desktop/mobile resizing, relevant interaction/state
  checks, and visual inspection are allowed. Do not retain, attach, or share
  captures unless Mason requests that exact artifact. Never capture the
  surrounding desktop. Publishing, deployment, and external disclosure remain
  separately protected. Product screenshots alone do not prove the rendered
  Portfolio page.
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
