# External-agent handoff

This local file owns optional task-folder assembly and lifecycle. The sole
persistent-context manifest and ownership map is
[`docs/external-agent/base/README.md`](external-agent/base/README.md). Local
delivery and context separation live in
[`docs/external-agent/base/04-EXTERNAL-AGENT-PACKET-GUIDE.md`](external-agent/base/04-EXTERNAL-AGENT-PACKET-GUIDE.md).

## Before handoff

1. Read the base README and the canonical context owners it lists.
2. Read the current request and inspect the live draft, source boundary, and
   relevant assets.
3. Follow local mechanics in
   [`docs/external-agent/base/04-EXTERNAL-AGENT-PACKET-GUIDE.md`](external-agent/base/04-EXTERNAL-AGENT-PACKET-GUIDE.md).
4. Assemble only the minimum task material. Keep the handoff optional and
   local unless the current task selects an exact provider plus exact model for
   a model route, or an exact destination, with a bounded source set.

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

A task folder may contain a short task brief, the current draft or source
excerpt, and the few relevant artifacts. Follow the ten-file limit in 04. Do not
copy the persistent context into the task folder, treat packet copies as source
truth, or edit a packet copy and back-propagate it into the repository. Keep
writer and independent-review inputs in separate folders or external contexts;
keep returned output separate from the input set until it has been checked and
explicitly integrated. Put every task-folder write in the authorized write set;
delegated writers receive the input folder but do not mutate it unless the
current task gives them that exact folder boundary.

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
