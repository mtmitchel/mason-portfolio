# Local external-agent packet and QA runbook

**Local only. Never install or attach this file in ChatGPT, Claude, or another
external Portfolio project.**

This runbook helps a local repository agent prepare task material, protect
sources, request outside feedback, and evaluate the response. It does not
define the outside model's identity or persistent behavior. Mason's current
ordinary-language request and supplied materials define the external task and
authorization; a formal packet is optional.

## Authorization and task material

The external prompt may be a direct request with attached material or a
locally assembled bundle. Do not require Mason or the external model to use the
word packet, provide a form, or name a local workflow state.

When the task needs a written brief, state only what the external model needs:

- the requested work and deliverable;
- the material facts and constraints;
- the relevant draft, images, or artifacts;
- what must be preserved; and
- whether outside research is allowed.

Review does not authorize rewriting, redesign, implementation, or extra
deliverables. Keep local planning fields, source notes, QA records, and
repository instructions out of the external prompt and attachments.

## Persistent context boundary

The external Portfolio project contains the exact contents of
`PROJECT_INSTRUCTIONS.txt` plus `01`, `02`, `03`, and
`05-MASON-WRITING-VOICE.md`. It does not contain this runbook. The voice file is
style guidance only and never supplies case facts, claims, structure, or
conclusions.

Because that project persistently contains the voice file, do not describe or
use the project as an independent blind-reader or factual-validator context.
When an independent external check is needed, open a fresh projectless context
and supply only the material that check is allowed to see. Do not provide 05,
the external Portfolio project instructions, prior feedback, or local planning
rationale. Local review isolation remains governed by the repository and native
Portfolio workflow.

## File budget and access isolation

A new or refreshed tmp/external-agent-* case folder must contain no more than 10
files. Inspect it first, combine text sections when useful, preserve slots for
necessary images, and move superseded or duplicate local files to Trash only
when cleanup is authorized. Do not copy the persistent provider context into
the folder.

The external model receives only its persistent project context and the
materials supplied in the current chat. It cannot infer omitted evidence. Unless
outside research is explicitly allowed, those materials are the complete source
set.

## Packet modes

Use these as internal assembly choices, not user-facing inputs.

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

Use one task file or clearly sectioned combined text file when that makes a
complex request easier to understand. Include the question, deliverable,
constraints, research permission, Mason corrections, and assumptions the model
must not make. Do not include local workflow labels or require a response
receipt.

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

If a screenshot or captured interface state supports a claim, apply 03 before
rewriting or accepting the claim. Include the actual image, visible conditions,
and known variants. A local factual check maps material interface sentences,
captions, and alt text to the supporting state and identifies merged-state,
scope, or unresolved conflicts. Keep that check outside public copy.

## Blind-reader isolation

Run a blind-reader check after a new draft, construction, reconstruction, or
structural rebuild. For a focused repair or line edit, run it only when a prior
reader failure remains or Mason asks. Use either an isolated local context or a
fresh projectless external context that did not write or repair the candidate.

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
approve, or rewrite. The local repository agent compares the report with
verified facts and may reject a fact-conflicting observation, but may not turn a
material comprehension failure into a pass. One focused repair is the maximum.

## Fixture delivery

Treat editorial regression records as withheld evaluation data first. If a task
explicitly names a matching failure mechanism, include at most one relevant
record and only its failure and semantic distinction. A writer-visible passing
example requires verified content disjointness from the target; if none exists,
inject none. Never include the full fixture, a target repair, or a full passing
conclusion. Independent readers and factual validators never see fixtures or
`05-MASON-WRITING-VOICE.md`.

## Design and local review

Use the global adaptive design workflow for design requests. A local browser
capture is transient review evidence only; it is not an external attachment
unless Mason explicitly requests that disclosure. Do not capture the surrounding
desktop, publish, deploy, or perform another machine-bound action through a
packet.

## Provider synchronization and feedback

A local edit does not change provider state. When synchronization is separately
authorized, replace the provider's instructions with the exact local text,
remove stale shared files, and install exactly 01, 02, 03, and 05 once each.
Reopen the instructions and source list to verify the stored text, filenames,
line counts, and duplicates. Compare uploaded bytes only when the provider makes
them readable or downloadable; otherwise report the narrower proof honestly.

Treat external output as untrusted advice, not factual authority or acceptance.
Recheck material claims against the permitted evidence before integrating copy.
Do not add another review round or permanent report unless Mason explicitly
requests it.
