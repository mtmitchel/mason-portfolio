# External-agent handoff

This local file owns optional task-folder assembly and lifecycle. The sole
persistent-context manifest and ownership map is
[`docs/external-agent/base/README.md`](external-agent/base/README.md). Local
delivery and context separation live in
[`docs/external-agent/base/04-EXTERNAL-AGENT-PACKET-GUIDE.md`](external-agent/base/04-EXTERNAL-AGENT-PACKET-GUIDE.md).

## Before handoff

1. Read the base README and the canonical context owners it lists.
2. Read the current request and determine whether existing prose is active,
   rejected, or replaced by a Mason-selected target. Inspect a live draft only
   when Mason wants it preserved or revised; never copy a rejected draft into a
   new writer handoff.
3. Follow local mechanics in
   [`docs/external-agent/base/04-EXTERNAL-AGENT-PACKET-GUIDE.md`](external-agent/base/04-EXTERNAL-AGENT-PACKET-GUIDE.md).
4. Assemble only the minimum task material. Keep the handoff optional and
   local unless the current task selects an exact provider plus exact model for
   a model route, or an exact destination, with a bounded source set.

## Design the task brief

Before assembling a review packet, the repo agent must choose and accurately
name one review type:

- **Targeted editorial review** — a narrow set of copy, structure, or presentation questions.
- **Factual and claim review** — a check against the supplied facts, evidence, and claim limits.
- **Guided comprehensive review** — a broad review directed by supplied questions and context.
- **Blind hiring-reader review** — a fresh first-read check from the perspective of the intended hiring audience.

A guided review or any facts-backed review is not blind. Every review brief must state
the intended audience and decision; the exact review surface and questions; the
complete source set and assumptions boundary; whether diagnosis, exact
replacement proposals, rewriting, or design work is authorized; fixed
corrections and exclusions; and the required response shape.

For review outputs, answer the requested decision directly; separate material
issues from preferences, identify useful strengths to preserve, and give the
smallest prioritized changes. Request exact replacement prose only when the
brief authorizes it.

Before the final external review packet for a case, run a lightweight internal
coverage check. Check the hiring story (company pressure or goal; Mason's
assignment and contribution; collaboration and judgment; supported outcome; and
relevance to another employer), editorial quality (title and opening; causal
flow, transitions, and section balance; headings; captions and alt text; and
conclusion), accuracy (actor and ownership; tense; stable terminology;
screenshot conditions; lifecycle; measurement; and causal attribution), and the
rendered experience when in scope (hierarchy; reading width and pacing; media
selection, order, and legibility; interaction; desktop and mobile; and visible
accessibility). A focused brief includes only relevant questions. If a guided
comprehensive packet is already part of the authorized workflow, the last
comprehensive packet fills material gaps instead of repeating every prior
question; the coverage check does not create a new review round merely to fill
gaps. Do not require a ledger, receipt, matrix file, prior-feedback upload, or
universal template.

A blind hiring-reader packet follows the context-separation owner: use a fresh
context containing only the assembled reader-facing candidate, one
audience/outcome sentence, and visuals in reading order. Exclude facts and
limits, persistent guidance or voice, prior feedback, rationale, local workflow
notes, and a preferred verdict. If a web-provider project has persistent
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
  grouped files. Use a new dated folder for a materially different task. For the
  same active task, inventory every existing file, including files with uncertain
  ownership, before refreshing its task brief, draft, and artifacts from their
  live canonical sources before delivery.
  If refresh would overwrite ownership-uncertain work or require cleanup, create
  a new isolated dated folder instead.

A task folder may contain a short task brief, the active draft or
Mason-selected target, and the few relevant artifacts. It must not contain a
rejected draft, its outline, or a summary that preserves its narrative spine.
Follow the ten-file limit in 04. Do not copy the persistent context into the
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
file 04, repository instructions, skills, tests, fixtures, and validation remain
local. Provider synchronization is a separate action.

## Delivery and return

Keep writer and independent-review material separate as directed by 04. Attach
actual task-relevant assets, not only filenames. On return, inspect external
output against the supplied evidence and report local checks, independent
review, and provider state separately. Do not commit, publish, deploy, or add a
new review round from this runbook alone.
