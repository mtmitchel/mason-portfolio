# External-agent handoff

This local file owns optional task-folder assembly and lifecycle. The sole
persistent-context manifest and ownership map is
[`docs/external-agent/base/README.md`](external-agent/base/README.md). Local
delivery and context separation live in
[`docs/external-agent/base/EXTERNAL-AGENT-PACKET-GUIDE.md`](external-agent/base/EXTERNAL-AGENT-PACKET-GUIDE.md).

## Before handoff

1. Read the base README and the canonical context owners it lists.
2. Read the current request and determine whether existing prose is active,
   rejected, or replaced by a Mason-selected target. Inspect a live draft only
   when Mason wants it preserved or revised; never copy a rejected draft into a
   new writer handoff.
3. Follow local mechanics in
   [`docs/external-agent/base/EXTERNAL-AGENT-PACKET-GUIDE.md`](external-agent/base/EXTERNAL-AGENT-PACKET-GUIDE.md).
4. Assemble only the minimum task material. Keep the handoff optional and
   local unless the current task selects an exact provider plus exact model for
   a model route, or an exact destination, with a bounded source set.

## Stage routing and packet context

The [Portfolio case-production runbook](portfolio-case-production.md) is the
sole local owner of the four-stage review order, candidate invalidation, and
repair budget. Use its current stage and candidate boundary before assembling
a packet. This file owns packet assembly, context separation, and return
handling only; it does not add stages or change the runbook's repair budget.

Prepare one current packet at a time. Never prebuild four packet folders, give
Mason four packet links, or ask him to choose and manage the sequence. When
Mason must perform a manual web handoff, give him exactly one current packet
and one concrete action. For a smaller change, use the earliest affected stage
named by the runbook and its downstream instructions.

Every packet brief must state the current decision, exact review surface and
questions, complete source set and assumptions boundary, whether diagnosis,
replacement proposals, rewriting, or design work is authorized, fixed
corrections and exclusions, and the required response shape.

For factual and claim review, the repository agent builds the input from the
canonical evidence owners: the current candidate, the minimum relevant source
excerpts and screenshots, Mason's contribution and attribution boundaries, and
the supported metrics and claim limits. The external agent compares the
candidate only with that supplied material. It does not inspect the repository
or become the factual authority; the repository agent verifies its findings
against the canonical sources before integration.

An external agent may draft, rewrite, or repair prose when Mason or the task
brief explicitly asks it to; a review request alone does not authorize prose
changes. A guided review or any facts-backed review is not blind. Every review
brief must state the intended audience and decision; the exact review surface
and questions; the complete source set and assumptions boundary; whether
diagnosis, exact replacement proposals, rewriting, or design work is
authorized; fixed corrections and exclusions; and the required response shape.

For review outputs, answer the requested decision directly; separate material
issues from preferences, identify useful strengths to preserve, and give the
smallest prioritized changes. Request exact replacement prose only when the
brief authorizes it.

Use a lightweight internal coverage check while preparing the guided
comprehensive packet. Check the hiring story (company pressure or goal; Mason's
assignment and contribution; collaboration and judgment; supported outcome; and
relevance to another employer), editorial quality (title and opening; causal
flow, transitions, and section balance; headings; captions and alt text; and
conclusion), accuracy (actor and ownership; tense; stable terminology;
screenshot conditions; lifecycle; measurement; and causal attribution), and the
rendered experience when in scope (hierarchy; reading width and pacing; media
selection, order, and legibility; interaction; desktop and mobile; and visible
accessibility). Add any missing question to the current comprehensive brief;
do not create another review round merely to satisfy the checklist. Do not
require a ledger, receipt, matrix file, prior-feedback upload, or universal
template.

A blind hiring-reader packet follows the context-separation owner: use a fresh
context containing only the assembled reader-facing candidate, one
audience/outcome sentence, and visuals in reading order. Exclude facts and
limits, persistent guidance or voice, prior feedback, rationale, local workflow
notes, and a preferred verdict. If an external-agent project has persistent
Portfolio guidance installed, use a fresh chat or context outside that project.

Preparing a packet is local preparation only. It does not authorize external
transmission, rewriting beyond the request, new review rounds, publication, or
integration. Keep this workflow local; do not bump or synchronize the
persistent external-context version.

## Folder lifecycle

Keep the two folder types distinct:

- `docs/external-agent/base/` is the canonical local source for persistent
  external Portfolio context. Change it only when the current task authorizes a
  portfolio-wide instruction change. If persistent meaning or membership
  changes, update the external-context version in its README and the matching
  repository check. A change to local-only mechanics does not by itself require
  provider synchronization.
- An ignored `tmp/external-agent-<subject>-<purpose>-YYYY-MM-DD/` folder is an optional
  task snapshot. Create one only when the selected external route benefits from
  grouped files. Create only the current review stage's folder; never prebuild
  downstream stage folders. Use a new dated folder for a materially different
  task. For the same active task, inventory every existing file, including files
  with uncertain ownership, before refreshing its task brief, draft, and
  artifacts from their live canonical sources before delivery.
  If refresh would overwrite ownership-uncertain work or require cleanup, create
  a new isolated dated folder instead.

A task folder may contain a short task brief, the active draft or
Mason-selected target, and the few relevant artifacts. It must not contain a
rejected draft, its outline, or a summary that preserves its narrative spine.
Follow the ten-file limit in
[`EXTERNAL-AGENT-PACKET-GUIDE.md`](external-agent/base/EXTERNAL-AGENT-PACKET-GUIDE.md).
Do not copy the persistent context into the
task folder, treat packet copies as factual source truth, or edit a packet copy
and back-propagate it into the repository. Keep writer and independent-review
inputs in separate folders or external contexts; keep returned output separate
from the input set until it has been checked and explicitly integrated. Put
every task-folder write in the authorized write set; delegated writers receive
the input folder but do not mutate it unless the current task gives them that
exact folder boundary.

An older folder may remain as working history, but its existence does not make
it current. Do not silently reuse it. Cleanup is a separate Trash-first action,
not a requirement for creating the next bounded handoff; no receipt or ledger is
mandatory. Folder names, file counts, or local hashes do not prove provider
installation or delivery.

## Persistent context

Use the base README as the only membership and version authority. This runbook,
[`EXTERNAL-AGENT-PACKET-GUIDE.md`](external-agent/base/EXTERNAL-AGENT-PACKET-GUIDE.md),
repository instructions, skills, tests, fixtures, and validation remain local.
Provider synchronization is a separate action.

## Delivery and return

Keep writer and independent-review material separate as directed by
[`EXTERNAL-AGENT-PACKET-GUIDE.md`](external-agent/base/EXTERNAL-AGENT-PACKET-GUIDE.md).
Attach
actual task-relevant assets, not only filenames. On return, inspect external
output against the supplied evidence, integrate or route any authorized repair,
and finish the current stage before preparing the next packet. Report local
checks, independent review, and provider state separately. Do not commit,
publish, deploy, or add a new review round from this runbook alone.
