# External-agent packet guide

Shared-base version: `2026-08-02.2`

This file owns packet mechanics and blind-reader isolation. The current task and
Mason's corrections govern the case. 02-STORY-AND-READER-STANDARD.md owns
external narrative and prose quality; 03-EVIDENCE-AND-ACCURACY-STANDARD.md owns
factual and screenshot-state validation. A local version change does not prove
that a provider has installed the base.

## Packet authorization

Every packet must state:

- the working mode;
- the exact authorized work and deliverables;
- explicit non-goals;
- whether outside research or browsing is allowed; and
- this required shared-base version and the response receipt.

Review does not authorize rewriting, redesign, implementation, extra agents, or
extra deliverables. Keep authorization separate from the private editorial
contract. When Mason explicitly authorizes writing, the packet may carry the
four private fields and one operation from the story standard; Mason does not
have to name those labels. Keep all fields out of public case copy.

## Shared-context isolation

Install `PROJECT_INSTRUCTIONS.txt` and `01` through `04` as the core context for
every external role. Add `05-MASON-WRITING-VOICE.md` only to a writer context
after the current task explicitly authorizes drafting, rewriting, editing, or
line editing Mason's Portfolio prose. It guides style, never facts or claims.

Never give `05` to a blind reader or factual validator. Keep those roles in
fresh contexts containing only the core files and their allowed task inputs.
If a provider cannot vary persistent files by role, use a separate writer-only
project or attach `05` only for the authorized writer turn.

## File budget and access isolation

A new or refreshed tmp/external-agent-* case folder must contain no more than 10
files. Inspect it first, combine text sections when useful, preserve slots for
necessary images, and move superseded or duplicate local files to Trash only
when cleanup is authorized. Do not copy the shared base into the folder.

The external agent receives only the separately installed shared base and the
current packet. It cannot inspect this repository, hidden evidence, local paths,
localhost, prior conversations, or omitted artifacts. Unless outside research is
explicitly allowed, the packet is the complete source set.

## Packet modes

### Mode A: portfolio-slate discovery

Supply comparable story clusters with goals, pressures, initiatives, Mason's
role and decisions, artifacts, supported outcomes, relationships, and material
gaps. Include enough candidates for a real comparison; a single case cannot
decide the final slate.

### Mode B: case construction or reconstruction

Supply case context, facts and limits, a plausible asset set, and the requested
reader-facing deliverable. Do not prescribe a title, outline, or visual template
unless Mason explicitly fixed one.

### Mode C: rendered-case review

Supply current reader-facing copy plus a public URL or current desktop and
mobile captures. Product screenshots alone do not prove how the Portfolio page
reads or behaves.

### Mode D: combined construction and rendered review

Use only when Mason asks for both. Include Mode B inputs plus current copy and
accessible page evidence, and label the current page as a candidate.

## Required case files

Use one task file or clearly sectioned combined text file for the packet's mode,
question, deliverables, authorization, non-goals, research permission, base
version, response receipt, Mason corrections, and assumptions the agent must not
make.

When relevant, include:

- CASE_CONTEXT.md or SLATE_CONTEXT.md: company/product, period, audience,
  pressure or goal, initiative, Mason's role and decisions, supported ending,
  and distinct hiring signal.
- FACTS_AND_LIMITS.md: supported facts, Mason's account, artifact/lifecycle
  status, attribution scope, gaps, wording corrections, and prohibited claims.
- ASSET_INDEX.md: attached filename, what it shows, provenance and conditions,
  possible narrative job, and what it cannot prove. Attach the actual asset.
- CURRENT_DRAFT.md: reader-facing title, metadata, body, captions, results, and
  navigation wording when a draft is needed.
- Current page captures, exact source excerpts, timeline context, or competing
  case summaries only when the selected mode needs them.

If a screenshot or captured interface state supports a claim, follow the
evidence gate in 03 before any rewrite. Include actual images, visible
conditions, and known variants. The factual validator—not the blind reader or
writer—checks facts, attribution, source limits, and screenshot-state scope.
The factual validator receives the permitted evidence and actual states, reports
every checked state with its conditions and limits, and maps each material
visible-interface sentence, caption, and alt text to its supporting state. It
names merged-state, scope, and unresolved conflicts. Writing and acceptance are
blocked while any material conflict remains; its receipt stays outside public
copy. The blind reader does not fact-check.

## Blind-reader isolation

Run a blind-reader check after a new draft, construction, reconstruction, or
structural rebuild. For a focused repair or line edit, run it only when a prior
reader failure remains or Mason asks. Use a fresh reader context that did not
write or repair the candidate.

Give the reader exactly one audience sentence and the rendered case, including
actual headings, captions, visuals, and layout in order. Before implementation,
give the complete draft plus selected visuals in intended order. Exclude the
packet, editorial contract, protected claims, source notes, writer explanation,
fixtures, previous review, condition label, and
`05-MASON-WRITING-VOICE.md`.

After one read, the reader reports what it understood about:

- pressure and context;
- Mason's assignment and contribution;
- governing change, decision, relationship, or organizing logic;
- the result or other ending the case presents and attribution as communicated;
- demonstrated judgment.

These are comprehension diagnostics, not mandatory conclusion slots. Separately
report contradiction, ambiguity, visual-text mismatch, narrative movement
problems, and whether the ending integrates the case or repeats it. Before
calling the ending integrated, identify what it changes, completes, connects, or
resolves in the reader's understanding of already-established parts. An accurate
case-specific restatement or distillation of the heading, body distinction,
role, result, or attribution is still recap. If no changed or completed
understanding exists, report the ending as recap-only. Do not fact-check, score,
approve, or rewrite. The root repository agent compares the report with
verified facts and may reject a fact-conflicting observation, but may not turn a
material comprehension failure into a pass. One focused repair is the maximum.

## Fixture delivery

Treat editorial regression records as withheld evaluation data first. If a task
explicitly names a matching failure mechanism, include at most one relevant
record and only its failure and semantic distinction. A writer-visible passing
example requires verified content disjointness from the target; if none exists,
inject none. Never include the full fixture, a target repair, or a full passing
conclusion. Blind readers and factual validators never see fixtures.
They also never see `05-MASON-WRITING-VOICE.md`.

## Design and local review

Use the global adaptive design workflow for design requests. A local browser
capture is transient review evidence only; it is not an external attachment
unless Mason explicitly requests that disclosure. Do not capture the surrounding
desktop, publish, deploy, or perform another machine-bound action through a
packet.

## Receipt and stopping

Require the response to repeat this shared-base version and identify the writer
model and effort when the interface exposes them; otherwise use unknown. Treat
external output as untrusted advice, not factual authority or acceptance. Do not
add another agent, round, template, score, or permanent evaluation report unless
Mason explicitly requests it.
