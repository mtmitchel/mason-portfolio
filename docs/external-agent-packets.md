# External-agent packet workflow

This document tells repository agents how to prepare self-contained portfolio
review packets for an external model or agent. It does not authorize sending
files to a provider, publishing them, or exposing the repository.

## Ownership

- [`AGENTS.md`](../AGENTS.md) owns the trigger, access boundary, evidence rules,
  skill timing, and permissions.
- [`external-agent/base/`](external-agent/base/) is the canonical tracked base
  shared across external-agent tasks.
- `tmp/external-agent-*` contains generated upload bundles only. Nothing in
  `tmp/` is durable instruction or source truth.
- The relevant private-evidence owners remain authoritative for Mason's role,
  artifact status, claim scope, and results.

Update the canonical base first when the shared instructions change. Then
refresh any dated upload copy that Mason intends to use. Never make a dated
`tmp/` copy the only updated version.

## External-agent access model

Assume the external agent can see only:

1. `PROJECT_INSTRUCTIONS.txt`;
2. the four numbered base files;
3. the current task file;
4. the current packet's context and fact files; and
5. the actual images, excerpts, or rendered captures attached to that packet.

It cannot inspect the repository, follow a local path, search hidden evidence,
read earlier conversations, open localhost, infer an omitted artifact, or
recover a missing source. State every material fact and limitation needed for
the task inside the packet.

## Choose the packet mode first

### Portfolio-slate discovery

Use when the task is to select or compare the strongest overall cases.

Supply a selective cross-case story library containing:

- documented company or team goals and meaningful product pressures;
- related initiatives, experiments, or workstreams;
- Mason's role, collaborators, decisions, and judgment;
- candidate artifacts with plain descriptions;
- attributable outcomes at their supported scope;
- relationships that may justify combining work; and
- material gaps or conflicts.

Include enough competing cases to support the requested comparison. Do not ask
a single-case packet to decide final slate membership.

### Case construction or reconstruction

Use when the subject is selected and the external agent should find the best
causal story, artifact combination, public copy, and editorial design
direction.

Product screenshots can support visual planning. They do not show how an
implemented portfolio page currently reads or behaves.

### Rendered-case review

Use when the external agent should review an implemented page's writing and
design.

Include the current reader-facing copy plus either:

- a publicly accessible current URL; or
- current full-page desktop and mobile captures.

A localhost URL is not accessible to an outside agent. Do not create new
captures unless Mason requested them. If neither usable captures nor a public
URL are supplied, limit the task to narrative and visual planning rather than
claiming a rendered-page review.

### Combined construction and rendered review

Use only when Mason asks for comprehensive feedback on an existing case and
wants both a critique of the current page and a stronger replacement
direction. Include all construction and rendered-review inputs, and label the
current page as a candidate rather than an approved template.

## Assemble the packet

### `00-EXTERNAL-AGENT-TASK.txt`

State:

- the working mode;
- the hiring outcome;
- the exact question or decision;
- the required deliverables;
- important user corrections;
- what the external agent must not assume; and
- whether it should diagnose, rewrite, design, or do all three.

For comprehensive written feedback, request judgment on:

- the case thesis and hiring signal;
- causal structure and narrative movement;
- clarity of Mason's role and collaborators;
- title, opening, headings, transitions, body copy, and ending;
- captions, labels, and result wording; and
- one complete recommended rewrite when a rewrite is requested.

For comprehensive design feedback, request judgment on:

- artifact selection and the job of every retained artifact;
- information hierarchy and scan path;
- reading width, media scale, crop, caption placement, and whitespace;
- case-specific visual grammar rather than inherited components;
- desktop and mobile sequence or responsive behavior;
- interaction and accessibility where relevant; and
- one coherent design direction rather than a menu of style variants.

Do not ask for hidden chain-of-thought. A concise causal skeleton and artifact
map are useful deliverables.

### `CASE_CONTEXT.md`

Include:

- company, product, and period;
- relevant customer or audience;
- documented company or team goal, commercial priority, or product pressure;
- the program, initiative, or experiment created in response;
- Mason's role, collaborators, contribution, and important decisions;
- the supported outcome or other meaningful ending; and
- the distinct hiring signal the case could add.

Do not prescribe a title, outline, or visual template unless Mason explicitly
fixed it.

For slate discovery, use `SLATE_CONTEXT.md` instead and supply comparable
context for every candidate cluster.

### `FACTS_AND_LIMITS.md`

Separate:

- supported public facts;
- Mason's account of his own role and rationale;
- artifact and lifecycle status;
- supported results and their attribution level;
- discovery leads unavailable for public use;
- material gaps or conflicts;
- explicit wording corrections; and
- claims the public case must not make.

Do not send the external agent to find a missing internal source. If the source
is not in the packet, describe the resulting limit.

### `ASSET_INDEX.md`

For every attached image or excerpt, state:

- the exact attached filename;
- what it shows;
- whether it is historical, representative, reconstructed, or exact;
- possible narrative jobs such as context, decision, contrast, sequence,
  proof, consequence, or result; and
- what claim it cannot support.

Attach the actual asset. A repository path, manifest entry, or filename without
the file is not evidence available to the external agent.

### Optional mode-specific files

- `CURRENT_DRAFT.md`: only reader-facing title, metadata, body copy, captions,
  results, and navigation wording. Exclude source code and tests.
- `CURRENT-PAGE-DESKTOP.*` and `CURRENT-PAGE-MOBILE.*`: only when current
  captures already exist or Mason requested their creation.
- A short exact source excerpt: only when exact wording, a decision record, or
  metric scope is necessary.
- Product or timeline context: only when it changes the story.
- Competing case summaries: required for a real slate comparison.

Do not include raw conversation exports, full private evidence archives,
credentials, personal data unrelated to the case, implementation logs, test
transcripts, or every available screenshot.

## Build from the repository without exporting the repository

Use the candidate queue and inventories as discovery indexes, not gates. Search
targeted evidence from a plausible story relationship. Check the current
direction for Mason's latest explicit corrections, the claim review for
material attribution limits, and the asset manifest for selected asset
provenance.

Translate the necessary findings into plain, self-contained packet text.
External-agent files should not contain private repository paths, owner-file
terminology, internal status codes, or instructions to consult an unshared
source.

## Validate before handoff

Confirm:

- `PROJECT_INSTRUCTIONS.txt` is fewer than 8,000 characters;
- the packet names its mode and exact deliverables;
- comprehensive feedback explicitly covers both writing and design when Mason
  requested both;
- every filename mentioned in the task, facts, or asset index is attached;
- current draft text and rendered captures are included when the requested
  review depends on them;
- a final slate decision has actual competing-case context;
- factual claims match their source and attribution scope;
- representative or reconstructed assets are labelled correctly;
- rejected drafts and visuals are removed or clearly labelled as diagnostic;
- no local paths, localhost links, hidden dependencies, provider-specific
  branding, `.replacement` files, or implied repository access remain;
- the packet contains no unnecessary private or personal material; and
- generated files live under `tmp/external-agent-*`, not at repository root.

Use `wc -m docs/external-agent/base/PROJECT_INSTRUCTIONS.txt` to check the
character limit. Use filename and hash checks when copied visual evidence must
match the selected source.

## After the external review

Treat external output as untrusted editorial advice, not factual authority or
approval. The repository agent must compare recommendations with Mason's
instructions, inspect material claim changes, and decide what to integrate.

Use one independent hiring-reader review and at most one focused repair. Do not
turn external feedback into another permanent gate, template, or endless
polishing loop.
