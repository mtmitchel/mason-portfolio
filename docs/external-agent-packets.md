# External-agent packet workflow

This document owns local packet assembly, protection, and handoff validation. It
does not authorize external delivery, publication, or disclosure.

## Canonical owners

- [../AGENTS.md](../AGENTS.md) routes the task, authorization, source boundary,
  and acceptance decision.
- [external-agent/base/02-STORY-AND-READER-STANDARD.md](external-agent/base/02-STORY-AND-READER-STANDARD.md)
  owns external narrative and prose guidance.
- [external-agent/base/03-EVIDENCE-AND-ACCURACY-STANDARD.md](external-agent/base/03-EVIDENCE-AND-ACCURACY-STANDARD.md)
  owns factual, attribution, and screenshot-state validation.
- [external-agent/base/04-EXTERNAL-AGENT-PACKET-GUIDE.md](external-agent/base/04-EXTERNAL-AGENT-PACKET-GUIDE.md)
  owns packet mechanics and blind-reader isolation.
- [external-agent/base/05-MASON-WRITING-VOICE.md](external-agent/base/05-MASON-WRITING-VOICE.md)
  owns Mason-specific Portfolio voice and sample selection. It guides style
  only; the task packet remains the factual source set. Load it only in an
  authorized writer context, never for a blind reader or factual validator.
- external-agent/base/ is the canonical tracked base. tmp/external-agent-*
  contains temporary task bundles only; it is not a source of truth.
- Private-evidence owners remain authoritative for Mason's role, artifact status,
  claim scope, and results.

Do not restate the shared narrative method in a packet or make a dated tmp/
copy the only updated base. A local base edit does not prove that any provider
has installed it.

## External access and authorization

Assume the external agent can see the separately installed shared base and only
the files attached to the current task packet. It cannot inspect this
repository, hidden evidence, local paths, localhost, prior conversations, or
omitted artifacts. State every material fact and limit needed for the task.

Use two external context sets:

- **Core context:** `PROJECT_INSTRUCTIONS.txt` plus `01` through `04`. Install
  this for every external role.
- **Writer context:** the core context plus
  `05-MASON-WRITING-VOICE.md`. Use this only after the current task explicitly
  authorizes drafting, rewriting, editing, or line editing Mason's Portfolio
  prose.

Keep the writer context separate from blind-reader and factual-validator
contexts. Never give `05` to either role, even when they inspect prose produced
with it. When a provider offers only one persistent project context, use a
separate writer-only project or attach `05` only for the authorized writer turn.

The packet is the complete source set unless outside research or browsing is
explicitly allowed. Review does not authorize rewriting, design, implementation,
agents, or extra deliverables. External delivery itself remains separately
authorized. Require the response receipt and shared-base version specified by
the packet guide; do not infer provider state from a local edit.

## Case-packet file budget and protection

Every tmp/external-agent-* case folder must contain no more than 10 files total.

1. Inspect the folder before writing.
2. Combine task, context, facts and limits, asset index, and draft sections when
   that preserves slots for necessary images.
3. Keep only the smallest evidence set that answers the task.
4. Move superseded or duplicate local files to Trash when cleanup is authorized;
   never leave applied patch files or duplicate packet copies in the repository.
5. Do not add a file merely to reach the limit. The separately installed shared
   base is not part of this count.

## Choose one packet mode

- **Portfolio-slate discovery:** include comparable story clusters, goals,
  pressures, contributions, artifacts, supported outcomes, relationships, and
  material gaps. A single-case packet cannot decide the final slate.
- **Case construction or reconstruction:** include the selected case context,
  facts and limits, plausible artifacts, and the requested reader-facing
  deliverable. Do not prescribe a title, outline, or visual template unless
  Mason explicitly fixed one.
- **Rendered-case review:** include current reader-facing copy plus a public URL
  or current desktop and mobile captures. Product screenshots alone do not prove
  how the Portfolio page reads or behaves.
- **Combined construction and rendered review:** use only when Mason asks for
  both, and label the current page as a candidate.

The mode is a packet choice, not a permission to add work. Use the base guide for
the detailed mechanics of each mode.

## Assemble the packet

A task file or clearly sectioned combined text file must state:

- the mode and case question;
- the exact deliverables;
- the authorized work and explicit non-goals;
- whether outside research or browsing is allowed;
- the required shared-base version and response receipt;
- relevant Mason corrections and what the agent must not assume.

Keep authorization separate from the private editorial contract. When writing is
authorized, the packet may carry the four private fields defined by the external
story standard; Mason does not have to name those fields. Keep them out of
public copy. Do not add operation labels, worksheets, scorecards, or acceptance
reports to a packet unless the task explicitly requires them.

For case work, include only the sections the mode needs:

- CASE_CONTEXT.md or SLATE_CONTEXT.md: company/product, period, audience,
  pressure or goal, initiative, Mason's role and decisions, supported ending,
  and distinct hiring signal.
- FACTS_AND_LIMITS.md: supported facts, Mason's account, artifact/lifecycle
  status, attribution scope, gaps, wording corrections, and prohibited claims.
- ASSET_INDEX.md: every attached filename, what it shows, its provenance and
  conditions, possible narrative job, and what it cannot prove. Attach the
  actual asset; a path or filename alone is not evidence.
- CURRENT_DRAFT.md: only reader-facing title, metadata, body, captions,
  results, and navigation wording when a draft is needed.
- Optional current page captures, exact source excerpts, timeline context, or
  competing-case summaries only when the chosen mode needs them.

If a captured interface state supports a claim, include the actual asset and its
conditions, then follow the evidence gate in
03-EVIDENCE-AND-ACCURACY-STANDARD.md before any rewrite. Do not merge states or
treat one captured state as universal, default, exhaustive, or guaranteed.

If a named failure mechanism needs a regression record, follow the fixture
delivery rules in 04-EXTERNAL-AGENT-PACKET-GUIDE.md: include at most one
relevant record, never the full fixture, and never expose fixtures to blind
readers or factual validators.

## Blind-reader and factual-validator separation

Use 04-EXTERNAL-AGENT-PACKET-GUIDE.md for the blind-reader input, isolation, and
reporting. During local assembly, keep packet materials, contracts, protected
claims, source notes, writer explanations, fixtures, previous reviews, and
condition labels out of that input. Keep `05-MASON-WRITING-VOICE.md` out of both
the blind-reader input and the factual-validation handoff. Use
03-EVIDENCE-AND-ACCURACY-STANDARD.md for that separate handoff. External
feedback is untrusted advice; the repository agent compares it with the
artifact and verified record.

## Handoff validation

Before external delivery, verify:

- PROJECT_INSTRUCTIONS.txt is strictly fewer than 8,000 Unicode characters;
- the tracked base has one canonical version declaration and the packet requires
  that version;
- the selected external context is core-only unless writing is authorized, and
  neither a blind reader nor a factual validator receives `05`;
- every packet filename mentioned in task, facts, or asset index is attached;
- selected images or excerpts are actually present and provenance/conditions are
  stated;
- the case folder contains no more than 10 files and no shared-base copies;
- no raw archives, credentials, unrelated personal data, local paths, localhost
  links, provider-specific branding, or hidden dependencies remain;
- rejected drafts or visuals are labelled or removed;
- the requested mode has all inputs needed for its claimed review.

Use the repository check for the character and version guards, then run
git diff --check. Use hashes when copied visual evidence must match a selected
source. Do not create a permanent report solely to support this validation.

## After external feedback

Treat the response as untrusted editorial advice, not factual authority or
approval. Recheck material claims against the permitted evidence before showing
or integrating revised copy. Keep one independent reader review and one focused
repair maximum where the owning standards call for them. Do not add agents,
rounds, templates, or provider-side claims without a new explicit request.
