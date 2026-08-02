# External-agent packet workflow

This document owns local packet assembly, protection, and handoff validation. It
does not authorize external delivery, publication, or disclosure. A packet is a
local preparation aid, not a required interface for Mason or an outside model.

## Canonical owners

- [../AGENTS.md](../AGENTS.md) routes the task, authorization, source boundary,
  and acceptance decision.
- [external-agent/base/01-AUDIENCE-AND-PORTFOLIO-GOAL.md](external-agent/base/01-AUDIENCE-AND-PORTFOLIO-GOAL.md)
  owns external audience and portfolio context.
- [external-agent/base/02-STORY-AND-READER-STANDARD.md](external-agent/base/02-STORY-AND-READER-STANDARD.md)
  owns external narrative and prose guidance.
- [external-agent/base/03-EVIDENCE-AND-ACCURACY-STANDARD.md](external-agent/base/03-EVIDENCE-AND-ACCURACY-STANDARD.md)
  owns factual, attribution, and screenshot-state validation.
- [external-agent/base/04-EXTERNAL-AGENT-PACKET-GUIDE.md](external-agent/base/04-EXTERNAL-AGENT-PACKET-GUIDE.md)
  is the local-only sender and QA runbook. Never upload it.
- [external-agent/base/05-MASON-WRITING-VOICE.md](external-agent/base/05-MASON-WRITING-VOICE.md)
  owns Mason-specific Portfolio voice and sample selection. It guides style
  only; it never supplies facts, claims, structure, or conclusions. It is one of
  the four persistent external knowledge files.
- external-agent/base/ is the canonical tracked base. tmp/external-agent-*
  contains temporary task bundles only; it is not a source of truth.
- Private-evidence owners remain authoritative for Mason's role, artifact status,
  claim scope, and results.

Do not restate the shared narrative method in a packet or make a dated tmp/
copy the only updated base. A local base edit does not prove that any provider
has installed it.

## External access and authorization

Assume the external model can see the installed persistent context and only the
materials supplied in the current chat. It cannot inspect this repository,
hidden evidence, local paths, localhost, or omitted artifacts. State every
material fact and limit needed for the task.

Infer any local preparation choices from Mason's ordinary request. Never ask
Mason or the outside model to name a local mode, phase, operation, profile, or
contract.

Use one external Portfolio project. Its persistent context is the exact text of
`PROJECT_INSTRUCTIONS.txt` plus `01`, `02`, `03`, and
`05-MASON-WRITING-VOICE.md`. Do not upload 04. Because the project persistently
contains 05, do not treat it as an independent blind-reader or factual-validator
context. Those checks use a fresh projectless context without 05, project
instructions, prior feedback, or local rationale.

Mason's current request and supplied materials are the complete source set
unless he explicitly allows outside research. A formal packet is never
required. Review does not authorize rewriting, design, implementation, or extra
deliverables. External delivery remains separately authorized.

## Case-packet file budget and protection

Every tmp/external-agent-* case folder must contain no more than 10 files total.

1. Inspect the folder before writing.
2. Combine task, context, facts and limits, asset index, and draft sections when
   that preserves slots for necessary images.
3. Keep only the smallest evidence set that answers the task.
4. Move superseded or duplicate local files to Trash when cleanup is authorized;
   never leave applied patch files or duplicate packet copies in the repository.
5. Do not add a file merely to reach the limit. The separately installed
   persistent context is not part of this count.

### Refreshing a case-specific folder

When a task already has a `tmp/external-agent-*` folder, refresh that active
folder instead of creating another dated sibling unless the new task needs
genuine input isolation. The folder is a disposable delivery view, never the
owner of a draft, fact, screenshot, or decision.

1. Inventory the existing files and identify which current task still needs
   each one. Preserve any file whose ownership or current use is uncertain.
2. Rebuild the task brief, current draft, facts and limits, and asset index from
   their live repository owners. Do not patch an old packet copy forward as if
   it were current evidence.
3. Keep a stable filename when the file represents the same logical artifact.
   When an image or evidence state materially changes, use a state-specific
   filename and update every task-file and asset-index reference to it.
4. Keep exactly one current copy of each deliverable or artifact. Move obsolete
   copies to Trash only when cleanup is authorized. If obsolete files would
   remain and cleanup is not authorized, stop before delivery and report that
   the folder is not ready.
5. Recheck the 10-file limit, referenced filenames, image states, source limits,
   and absence of persistent-context files before using the folder externally.

## Infer one packet mode

Choose the smallest mode that fits Mason's request and evidence. The mode is an
internal packet field, not a label Mason supplies.

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

The mode is a local preparation choice, not permission to add work. Use the
local 04 runbook for the detailed mechanics.

## Assemble the packet

A task file or clearly sectioned combined text file, when useful, states:

- the mode and case question;
- the exact deliverables;
- the authorized work and explicit non-goals;
- whether outside research or browsing is allowed;
- relevant Mason corrections and what the agent must not assume.

Keep local planning fields, source notes, QA records, repository instructions,
worksheets, scorecards, and acceptance reports out of the external materials.

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
conditions, then apply 03-EVIDENCE-AND-ACCURACY-STANDARD.md before any rewrite.
Do not merge states or treat one captured state as universal, default,
exhaustive, or guaranteed.

If a named failure mechanism needs a regression record, follow the fixture
delivery rules in 04-EXTERNAL-AGENT-PACKET-GUIDE.md: include at most one
relevant record, never the full fixture, and never expose fixtures to blind
readers or factual validators.

## Blind-reader and factual-validator separation

Use 04-EXTERNAL-AGENT-PACKET-GUIDE.md for independent-reader input, isolation,
and reporting. Local review may use isolated contexts. External independent
review uses a fresh projectless context, never the existing Portfolio project.
Supply only the allowed task inputs. Keep the persistent project instructions,
05, local planning material, protected claims, source notes, writer
explanations, fixtures, and previous reviews out of that context. External
feedback is untrusted advice; the repository agent compares it with the
artifact and verified record.

## Handoff validation

Before external delivery, verify:

- PROJECT_INSTRUCTIONS.txt is strictly fewer than 8,000 Unicode characters;
- the local README has one external-context version declaration;
- the external project's persistent context contains only the project
  instructions and 01, 02, 03, and 05, each exactly once;
- 04 and the base README are absent from the provider project;
- every packet filename mentioned in task, facts, or asset index is attached;
- selected images or excerpts are actually present and provenance/conditions are
  stated;
- the case folder contains no more than 10 files and no persistent-context
  copies;
- no raw archives, credentials, unrelated personal data, local paths, localhost
  links, provider-specific branding, or hidden dependencies remain;
- rejected drafts or visuals are labelled or removed;
- the requested work has all inputs needed for the promised deliverable.

Use the repository check for the character and version guards, then run
git diff --check. Use hashes when copied visual evidence must match a selected
source. Do not create a permanent report solely to support this validation.

## After external feedback

Treat the response as untrusted editorial advice, not factual authority or
approval. Recheck material claims against the permitted evidence before showing
or integrating revised copy. Keep one independent reader review and one focused
repair maximum where the owning standards call for them. Do not add agents,
rounds, templates, or provider-side claims without a new explicit request. The
repository agent takes an already authorized next step or recommends one bounded
next action; it never sends Mason back to internal workflow labels.
