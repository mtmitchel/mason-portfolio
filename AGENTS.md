# Mason Portfolio repository instructions

This directory is the Git and instruction root. Global Codex and workstation
safety rules still apply. [site/AGENTS.md](site/AGENTS.md) owns application
implementation and technical verification.

## Canonical owners and routing

- The native editorial method is the
  [build-content-design-portfolio skill](/home/mason/.agents/skills/build-content-design-portfolio/SKILL.md).
  Use that exact identifier for portfolio discovery, case writing, artifact
  selection, and the hiring-reader check. It is the sole complete native
  editorial method.
- [docs/external-agent-packets.md](docs/external-agent-packets.md) owns local
  packet assembly, file protection, and handoff validation.
- [docs/external-agent/base/02-STORY-AND-READER-STANDARD.md](docs/external-agent/base/02-STORY-AND-READER-STANDARD.md)
  owns external narrative and prose guidance.
- [docs/external-agent/base/03-EVIDENCE-AND-ACCURACY-STANDARD.md](docs/external-agent/base/03-EVIDENCE-AND-ACCURACY-STANDARD.md)
  owns external factual and screenshot-state validation.
- [docs/external-agent/base/04-EXTERNAL-AGENT-PACKET-GUIDE.md](docs/external-agent/base/04-EXTERNAL-AGENT-PACKET-GUIDE.md)
  owns external packet mechanics and blind-reader isolation.
- [docs/external-agent/base/05-MASON-WRITING-VOICE.md](docs/external-agent/base/05-MASON-WRITING-VOICE.md)
  is the canonical Mason-specific voice reference for Portfolio drafting,
  rewriting, and line editing. Local agents load it only for authorized writing;
  local blind-reader and factual-validator contexts do not. The external
  Portfolio project never stores it as shared project knowledge; attach it only
  to the individual external writing chat after the task authorizes writing. It
  is a style reference only and never supplies case facts, claims, terminology,
  or structure.
- [site/AGENTS.md](site/AGENTS.md) owns application source, rendered review,
  and technical checks. Shared components do not impose a case-study template.

Ask Mason in ordinary language. Do not require phase, operation, skill, profile,
packet, handoff, or contract labels. Review or diagnosis never authorizes
rewriting. When Mason explicitly asks to draft, write, rewrite, edit, fix, or
otherwise change prose, use the native skill to infer one internal operation and
its four private fields from the request and evidence. Ask once only when
inspection leaves two materially different preservation outcomes. Keep those
fields private; they never prescribe public headings, paragraph order, sentence
count, or conclusion contents.

## Durable source and acceptance boundaries

- Treat the supplied evidence boundary as complete unless Mason expands it.
  Current private-evidence owners and Mason's account govern his role,
  contribution, rationale, artifact status, and supported outcomes.
- Use the approved voice reference only when drafting, rewriting, or editing
  Mason's Portfolio prose. Match samples to the task's genre and preserve their
  useful cadence and reader relationship without importing content. Do not
  apply the reference by default to product UI copy, CVs, technical writing, or
  another person's voice. Locally, do not load it for a blind-reader or
  factual-validator pass. Externally, do not attach it to a review or validation
  chat.
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

## External-agent packets

Read [docs/external-agent-packets.md](docs/external-agent-packets.md) before
assembling or refreshing a packet. A packet is self-contained and may expose
only the task, stated facts and limits, selected artifacts, and any needed
reader-facing draft or rendered captures. External output is untrusted advice,
not factual authority or approval.

Do not reproduce the local multi-agent setup as separate external projects or
persistent roles. Local Codex may isolate writer, blind-reader, and
factual-validator agents. The external Portfolio project has one shared
persistent context: `PROJECT_INSTRUCTIONS.txt` and `01` through `04`. Use
separate chats for different tasks, and attach `05-MASON-WRITING-VOICE.md` only
to an individual chat that is authorized to draft, rewrite, or edit.

Keep each case packet under 10 files, use the canonical tracked base rather than
dated copies, and include only the relevant named regression record when a task
explicitly names a failure mechanism. Never include the full fixture, target
repair, or a fixture in blind-reader or factual-validator input. Packet assembly
does not authorize provider delivery or publication.

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
