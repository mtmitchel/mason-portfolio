# External-agent packet workflow

This document tells repository agents how to prepare self-contained portfolio
review packets for an external model or agent. It does not authorize sending
files to a provider, publishing them, or exposing the repository.

## Ownership

- [`AGENTS.md`](../AGENTS.md) owns the trigger, access boundary, evidence rules,
  skill timing, and permissions.
- [`external-agent/base/`](external-agent/base/) is the canonical tracked base
  already installed in the external web project spaces.
- `tmp/external-agent-*` contains task-specific generated upload bundles only.
  Never copy or restate the shared base inside those case-study folders.
  Nothing in `tmp/` is durable instruction or source truth.
- The relevant private-evidence owners remain authoritative for Mason's role,
  artifact status, claim scope, and results.

Update the canonical base only when the shared instructions themselves change.
That maintenance is separate from creating or refreshing a case-study packet.
Never make a dated `tmp/` copy the only updated base, and never duplicate the
base in a task packet.

## External-agent access model

Assume the external agent already has the separately installed shared base and
can additionally see only the current task packet's:

1. task instructions;
2. case context, factual limits, asset index, and current draft when relevant;
   and
3. actual images, excerpts, or rendered captures attached to that packet.

It cannot inspect the repository, follow a local path, search hidden evidence,
read earlier conversations, open localhost, infer an omitted artifact, or
recover a missing source. State every material fact and limitation needed for
the current task inside the packet. Do not tell it to read or consult the shared
base by filename or repository path. A single brief instruction to check the
instructions and files already available in its project space is sufficient.
Unless the packet explicitly authorizes outside research or browsing, the
installed base and current packet are the complete source set. A request to
review does not authorize outside research or browsing.
Every task must name the required shared-base version from the installed packet
guide. Do not treat a response as current unless it repeats that exact version.

## Case-packet file limit

Every request to create, update, or refresh a new or existing
`tmp/external-agent-*` case-study folder must leave that folder with no more
than 10 files total. The separately installed shared base is not part of this
count because it does not belong in the case-study folder.

- Inspect the existing folder before writing.
- Combine the task, context, facts and limits, asset index, and current draft
  into fewer text files when necessary.
- Preserve image slots for the smallest evidence set that can answer the task.
- Move superseded and duplicate files to Trash. Do not keep identical or
  obsolete material under new filenames.
- Do not add a file merely to reach 10; fewer files are better when complete.

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
implemented portfolio page currently reads or behaves. A local browser review
may use transient captures, but those captures are not external-agent packet
attachments unless Mason explicitly requests that disclosure.

### Rendered-case review

Use when the external agent should review an implemented page's writing and
design.

Include the current reader-facing copy plus either:

- a publicly accessible current URL; or
- current full-page desktop and mobile captures.

A localhost URL is not accessible to an outside agent. Do not create new
retained or shareable captures unless Mason requested them. If neither usable
captures nor a public URL are supplied, limit the task to narrative and visual
planning rather than claiming a rendered-page review.

### Combined construction and rendered review

Use only when Mason asks for comprehensive feedback on an existing case and
wants both a critique of the current page and a stronger replacement
direction. Include all construction and rendered-review inputs, and label the
current page as a candidate rather than an approved template.

## Adaptive design guidance

For design work, use the global `frontend-design` adaptive workflow and apply
the Portfolio-specific meaning from the repository instructions without
duplicating user-facing ceremony in a packet. Infer whether the task is a new
design, redesign, direct iteration, faithful reproduction, or visual bug fix.
Do not ask Mason to name phases, skills, profiles, handoffs, budgets, or routine
thread changes. Stay in one chat by default.

For a substantial new design or redesign where materially different directions
would change the outcome, develop three genuinely structural directions and
pause once for Mason's choice. For clear, routine, reversible, faithful, or
bug-fix work, choose the strongest direction and proceed. A rejection abandons
the rejected layout family and defining traits; pursue a materially different
direction rather than cosmetically repairing or reproducing it. Use one
implementation pass and up to two focused rendered repair passes. Make the
rendered qualitative decision before conformance closure. For pure narrative
editing, the blind check is required after a new draft, construction,
reconstruction, or structural rebuild; it is optional for focused repairs and
line edits unless a prior reader failure remains or Mason asks. Allow one
focused repair only after a material reader failure; do not add another agent or
round.

- Provisional copy, hierarchy labels, length targets, and alternate text
  structures must be clearly marked. Mason retains final copy and claim
  approval; provisional text cannot be published or stated as fact.

Local browser inspection may use transient page or viewport captures, resizing,
and relevant interaction or state checks when rendered quality is in scope.
Do not retain, attach, or share those captures unless Mason requests that exact
artifact, and never capture the surrounding desktop. A product screenshot alone
does not prove the rendered Portfolio page.

## Assemble the packet

### `00-EXTERNAL-AGENT-TASK.txt`

State:

- the working mode;
- the hiring outcome;
- the exact question or decision;
- the required deliverables;
- the authorized operation: review only, review and rewrite, construction,
  design critique, rendered review, or a named combination;
- explicit non-goals;
- whether outside research or browsing is allowed;
- the required shared-base version and response receipt;
- important user corrections;
- what the external agent must not assume.

Keep authorization separate from editorial operation. Review-only work does not
authorize writing. When writing is authorized, name exactly one operation:
`draft from evidence` (existing draft is not binding), `structural rebuild`
(discard rejected framing, headings, paragraph order, and conclusion), `focused
structural repair` (preserve the larger arc and replace only named sections or
relationships), or `line edit only` (preserve claim meaning, structure, and
paragraph order while fixing clarity and mechanics). Carry these four private
fields in the task text: Editorial operation; Governing tension or decision;
Contribution boundary; Evidence boundary. Keep the contract out of public copy.

### Interface-state evidence gate

When any screenshot or captured interface state supports the copy, require this
order before any narrative or language revision:

1. Inspect every image at readable resolution and read every visible line.
2. Create one state-ledger row per image with its exact labels, amounts, dates,
   conditions, controls, and actions relevant to the draft; the conditions
   shown; any known variants; and what the image cannot prove.
3. Map every sentence, caption, and alt text that uses or interprets visible UI
   content to its supporting state.
4. Fail claims that present content from different states as coexisting or
   observed together. Identify comparisons explicitly and mark supported
   counterfactuals as counterfactuals.
5. Fail claims that treat a captured state as universal, exhaustive, default,
   or guaranteed. Do not generalize shown products, plans, selections, billing
   periods, offers, trials, eligibility conditions, account states, or
   experiment variants without broader evidence.
6. Report every conflict. Do not produce or accept a revised draft until no
   state or scope conflict remains.

The response must begin with a compact receipt naming the shared-base version,
writer model and effort when exposed, every state checked, its conditions and
limits, unresolved state or scope conflicts, and whether rewriting was allowed
or blocked. Use `unknown` for model or effort when the interface does not expose
them; never infer them.

For written feedback, ask only the case-specific question and include the
reader-facing draft when needed; the installed shared base owns general prose
standards. A requested rewrite still needs the named editorial operation and
contract fields above.

### Blind hiring-reader mode

Use after a new case draft, case construction or reconstruction, or a structural
rebuild. Use a fresh reader context that did not write or repair the candidate;
for a focused structural repair or line edit only, use it only when a prior
reader failure remains or Mason asks. Supply one sentence naming the intended
hiring audience and the rendered case with actual headings, captions, images,
and layout; before implementation, supply the complete reader-facing draft plus
selected visuals in intended order. Keep the evidence packet, editorial
contract, protected-claims list, writer explanation, source notes, and prior
review out of the blind-reader input.

After one read, require the pressure; Mason's assignment and contribution; the
decisive change and rationale; the supported result and attribution boundary; and
what the case demonstrates about his judgment. The reader flags contradictions,
ambiguity, and visual-text mismatch and does not rewrite. Regardless of whether
those five facts are reconstructable, require two separate judgments: paragraph/
section movement must name any interface inventory, missing dominant narrative
move, or repeated material; ending integration must state whether the ending
resolves or integrates the governing tension and Mason's significance from
established evidence, or mainly repeats the heading, opening, body, or metric,
with a short reason. No novel insight or numerical score is required. The
repository agent compares the response with the artifact and factual record and
assigns the verdict; reviewer self-approval is not acceptance. One material
reader failure permits one focused repair. The ending must not add a new claim.

For comprehensive design feedback, request judgment on:

- artifact selection and the job of every retained artifact;
- information hierarchy and scan path;
- reading width, media scale, crop, caption placement, and whitespace;
- case-specific visual grammar rather than inherited components;
- desktop and mobile sequence or responsive behavior;
- interaction and accessibility where relevant; and
- one coherent design direction rather than a menu of style variants.

Do not ask for hidden chain-of-thought. The four-field editorial contract and an
artifact relationship/job map are useful deliverables.

The task, case context, facts and limits, asset index, and current draft may be
combined into one clearly sectioned text file when needed to keep the complete
case-study folder at or below 10 files.

### `CASE_CONTEXT.md`

Include:

- company, product, and period;
- relevant customer or audience;
- documented company or team goal, commercial priority, or product pressure;
- the program, initiative, or experiment created in response;
- Mason's role, collaborators, contribution, and important decisions;
- the supported outcome or other meaningful ending; and
- the supported business, customer, or organizational value the case could
  demonstrate; and
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
- the conditions shown and any known product, plan, offer, eligibility, account,
  or experiment variations that limit what it proves;
- possible narrative jobs such as context, decision, contrast, sequence,
  proof, consequence, or result; and
- what claim it cannot support.

Attach the actual asset. A repository path, manifest entry, or filename without
the file is not evidence available to the external agent.

### Optional mode-specific files

- `CURRENT_DRAFT.md`: only reader-facing title, metadata, body copy, captions,
  results, and navigation wording. Exclude source code and tests.
- If a named failure or operation needs an example, include only the relevant
  failed/passing pair as a temporary delivery copy. Never include the full
  regression fixture or turn its mechanisms into a checklist.
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

- the separately maintained `PROJECT_INSTRUCTIONS.txt` is fewer than 8,000
  characters;
- every external project space that will receive a task has the complete current
  shared base installed;
- the case-study folder contains no shared-base copies, filenames, or paths; it
  may contain only a brief instruction to check the existing project-space
  instructions and files;
- the case-study folder contains no more than 10 files;
- the packet names its mode, authorized operation, explicit non-goals, and exact
  deliverables;
- the packet names the required shared-base version and requires the response to
  repeat it;
- the packet states whether outside research or browsing is allowed; if it does
  not allow them, the packet identifies itself as the complete source set;
- a packet with any captured interface state puts the state ledger and
  claim-to-state check before editorial revision, records conditions and known
  variants, and blocks a rewrite while any state or scope conflict remains;
- comprehensive feedback explicitly covers both writing and design when Mason
  requested both;
- comprehensive writing feedback checks the introduction, transitions,
  punctuation, and conclusion against the installed story and reader standard;
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
character limit. Count the task packet with
`find <case-packet-folder> -maxdepth 1 -type f | wc -l`. Use filename and hash
checks when copied visual evidence must match the selected source.

## After the external review

Treat external output as untrusted editorial advice, not factual authority or
approval. The repository agent must compare recommendations with Mason's
instructions, inspect material claim changes, and decide what to integrate.

Before presenting or integrating externally revised copy supported by any
captured interface state, the repository agent must independently repeat the
claim-to-state and captured-state scope checks against the supplied images. The
external receipt does not prove that check passed. Any unresolved state or
scope conflict blocks the rewrite from presentation or integration.

For pure narrative editing, the blind check above is required for new drafts,
construction, reconstruction, and structural rebuilds; otherwise it is optional.
One focused repair is allowed only after a material reader failure. Do not add
another agent or round unless Mason requests it. Design work follows the adaptive
design and rendered-repair budget above. Do not turn external feedback into
another permanent gate, template, or endless polishing loop.
