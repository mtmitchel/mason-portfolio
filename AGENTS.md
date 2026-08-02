# Mason Portfolio repository instructions

This directory is the Git and instruction root. Global Codex and workstation
safety rules still apply. [site/AGENTS.md](site/AGENTS.md) owns application
implementation and technical verification.

## Canonical owners and routing

- The native editorial method is the
  [build-content-design-portfolio skill](/home/mason/.agents/skills/build-content-design-portfolio/SKILL.md).
  Route ordinary-language requests for portfolio discovery, case writing,
  artifact selection, and the hiring-reader check through it implicitly. Its
  identifier and internal workflow labels are never inputs Mason must supply.
  It is the sole complete native editorial method.
- [docs/external-agent-packets.md](docs/external-agent-packets.md) owns local
  packet assembly, file protection, and handoff validation.
- [docs/external-agent/base/01-AUDIENCE-AND-PORTFOLIO-GOAL.md](docs/external-agent/base/01-AUDIENCE-AND-PORTFOLIO-GOAL.md)
  owns external audience, hiring value, and portfolio-wide context.
- [docs/external-agent/base/02-STORY-AND-READER-STANDARD.md](docs/external-agent/base/02-STORY-AND-READER-STANDARD.md)
  owns external narrative and prose guidance.
- [docs/external-agent/base/03-EVIDENCE-AND-ACCURACY-STANDARD.md](docs/external-agent/base/03-EVIDENCE-AND-ACCURACY-STANDARD.md)
  owns external factual and screenshot-state validation.
- [docs/external-agent/base/04-EXTERNAL-AGENT-PACKET-GUIDE.md](docs/external-agent/base/04-EXTERNAL-AGENT-PACKET-GUIDE.md)
  is the local-only sender and QA runbook. Never upload it or expose its local
  workflow to an external Portfolio project.
- [docs/external-agent/base/05-MASON-WRITING-VOICE.md](docs/external-agent/base/05-MASON-WRITING-VOICE.md)
  is the canonical Mason-specific Portfolio voice reference. It is persistent
  knowledge in the external Portfolio project and is a style reference only; it
  never supplies case facts, claims, terminology, structure, or conclusions.
  Local agents load it only where the native workflow allows.
- [site/AGENTS.md](site/AGENTS.md) owns application source, rendered review,
  and technical checks. Shared components do not impose a case-study template.

Ask Mason in ordinary language. Do not require phase, operation, skill, profile,
packet, handoff, or contract labels. Review or diagnosis never authorizes
rewriting. When Mason explicitly asks to draft, write, rewrite, edit, fix, or
otherwise change prose, use the native skill to infer one internal operation and
its four private fields from the request and evidence. Ask once only when
inspection leaves two materially different preservation outcomes. Keep those
fields private; they never prescribe public headings, paragraph order, sentence
count, or conclusion contents. Carry the request through every applicable
authorized step. When material work remains outside the current authorization,
recommend one next action in ordinary language instead of asking Mason to choose
or restate the workflow.

### Local Sol-to-Flash prose route

For authorized drafting, rewriting, focused structural repair, and line
editing, Sol owns the evidence, private editorial contract, concepts, structural
direction, protected facts, attribution limits, and validation. The sole
reader-facing prose writer is exact model `gemini-3.6-flash-high`, launched
read-only through `agy` plan+sandbox via
`/home/mason/.codex/skills/delegate-coding-agent/scripts/delegate_agent.py`.
Require live `agy models` proof for that exact slug; if it is unavailable, stop
with no fallback or substitution. Review-only work must not launch Flash or
rewrite.

Flash writes the initial full reader-facing candidate and every reader-facing
repair. Sol maintains a current acceptance ledger for the assembled draft. For
each material defect, record the passage location; the factual, conceptual,
attribution, scope, logic, evidence, or reader-comprehension failure; its
supporting evidence or principle; protected labels, numbers, facts, and claim
limits; what the reader must understand; and whether the defect is open,
resolved, or regressed. Sol must not send replacement sentences, preferred
wording, synonyms, cadence instructions, or rewritten conclusions. Flash owns
sentence construction, word choice, rhythm, transitions, and whether optional
terminology or plain language is clearest. Sol may reject only material
failures, not stylistic preference.

After the initial candidate, use the smallest repair that can resolve the open
ledger entries. A full-candidate repair is appropriate only while the structure
is broadly failing. Otherwise, freeze every accepted passage and protected fact
and ask Flash for complete replacement prose only for the named failing
passages, with stable insertion locations. The root validates each returned
passage before integration and may assemble accepted Flash-authored passages
without rewriting them. Keep the current live passage when its replacement
fails. Reject a regression only in the returned passage that introduced it,
preserve all other accepted work, and narrow the next brief to the defects still
open. Never regenerate correct prose merely to repair an unrelated passage.

Treat Mason's request to draft, write, rewrite, edit, fix, or otherwise change
Portfolio prose as authorization for the initial Flash candidate and every
same-model correction cycle needed to reach acceptance. Do not ask Mason to
authorize Gemini, its launch, or any correction cycle separately. Acceptance,
not a numerical repair limit, ends the loop. Each new launch must target the
current open ledger and narrow the failing surface when a defect repeats. A
repeated model-authored defect is not by itself a reason to stop while another
safe, in-scope Flash correction can be requested. Stop only when the assembled
candidate passes; Mason stops or changes scope; the exact model or provider is
unavailable; required evidence or a required decision is missing; or no further
correction can be requested without Sol writing the prose. No Opus/model
fallback or separate style loop.

Context compaction is not a completion or stop condition. Reconstruct the open
ledger from the current draft, latest provider output, and latest validation,
then continue. Never call rejected output final, claim the requested rewrite is
complete, or close the task while material defects remain and the authorized
route can continue. If a real stop condition occurs, state plainly which output
was rejected and not integrated, which accepted passages were integrated, what
remains open, and why the next correction cannot run. External output remains
untrusted: the root inspects the actual text. No provider-side file writes.
Keep this local route out of external persistent context; it does not alter
external persistent files 01, 02, 03, or 05 or the external project workflow.

## Durable source and acceptance boundaries

- Treat the supplied evidence boundary as complete unless Mason expands it.
  Current private-evidence owners and Mason's account govern his role,
  contribution, rationale, artifact status, and supported outcomes.
- Use the approved voice reference only when drafting, rewriting, or editing
  Mason's Portfolio prose. Match samples to the task's genre and preserve their
  useful cadence and reader relationship without importing content. Do not
  apply the reference by default to product UI copy, CVs, technical writing, or
  another person's voice. Locally, do not load it for an independent-reader or
  factual-validator pass. Because 05 is persistent in the external Portfolio
  project, run either independent external check in a fresh projectless context
  without 05 or the external project instructions.
- Never invent research, quotations, ownership, shipment, adoption, causation,
  metrics, or results. Keep professional interpretation distinct from observed
  or measured outcome. Attribute team, program, and experiment results at their
  supported scope.
- A screenshot or captured interface state proves only its visible state and
  conditions. Do not generalize it as universal, exhaustive, default, or
  guaranteed. Use the evidence owner for factual and screenshot-state checks.
- A review, reader observation, model rationale, checklist, sentence count, or
  mechanical check is diagnostic evidence, not qualitative acceptance. Mason's
  explicit rejection reopens the rejected structure and is not a request for
  cosmetic repair.
- A new draft, construction, reconstruction, or structural rebuild gets one
  independent reader check; a focused repair gets at most one repair after a
  material reader failure. Do not turn reader diagnostics into mandatory
  conclusion slots or a universal template.
- Keep private provenance, claim-checking language, and source notes out of
  public copy. Do not mark qualitative work complete while a requested branch or
  material placeholder remains.

## External web-agent boundary

Read [docs/external-agent-packets.md](docs/external-agent-packets.md) before
preparing external task material. Local Codex workflow and external web-agent
collaboration are separate systems.

The local system owns skills, agents, review isolation, packets, validation,
repository rules, browser procedures, and implementation sequencing. None of
that machinery belongs in persistent external context.

The external Portfolio project is a neutral, voice-aware collaboration context.
Its persistent set is the exact text of `PROJECT_INSTRUCTIONS.txt` plus 01, 02,
03, and 05. It never receives 04, the base README, repository instructions,
local skill names, private planning fields, model routing, QA receipts, browser
mechanics, or implementation procedures.

Mason's current ordinary-language request and supplied materials define each
external task and authorization. Supply the relevant draft, facts, screenshots,
artifacts, and constraints in that chat. A formal packet is never required, and
the external model must not ask Mason to name local workflow states.

Because 05 is persistent, the external Portfolio project is not an independent
blind-reader or factual-validator context. Use a fresh projectless context
without 05, project instructions, prior feedback, or local rationale for those
checks. Packet preparation does not authorize provider delivery or publication.
External output remains untrusted advice, not factual authority or approval.

## Design and implementation

Use the adaptive frontend-design workflow after the story and artifact jobs are
clear. Mason's ordinary request determines whether the work is a new design,
redesign, direct iteration, faithful reproduction, or visual bug fix. A rejected
layout family requires a materially different direction, not cosmetic repair.
Keep provisional copy clearly marked and preserve privacy, provenance,
accessibility, responsive, and publication boundaries.

When rendered quality is in scope, use the approved local browser route for
transient page or viewport review only. Do not retain or share captures, capture
the surrounding desktop, publish, deploy, or perform other machine-bound actions
without their separate authorization. Read the machine owner before such work.

## Visual-language profile

Never split a headline, section heading, or figure caption into parallel
label/message columns. Keep the primary message as one left-aligned block in
normal reading order.

When the current approved visual-language profile is selected for implementation:

- Use sentence case for reader-facing text; never use CSS uppercase or
  `text-transform: uppercase`.
- Do not add decorative numeric prefixes such as `01`, `02`, or `03`.
- Do not place a tiny upper-left label beside a larger headline to its right.
- Keep prose and media in the same content column with matching left and right
  edges at every viewport.

## Verification

For documentation or evidence-only changes, run from the repository root:

    node scripts/check-repository.mjs
    git diff --check

For site changes, follow [site/AGENTS.md](site/AGENTS.md), then inspect the
complete repository diff. Preserve unrelated dirty work and do not commit, push,
publish, deploy, edit Figma, or change access without separate authorization.
