# Canonical external-agent portfolio base

This tracked directory is the source of truth for the provider-neutral context
shared with an outside model or agent. Repository agents follow
[`../../external-agent-packets.md`](../../external-agent-packets.md) and copy
these files into a generated upload bundle when needed.

The external agent receives `PROJECT_INSTRUCTIONS.txt`, the four numbered base
files, and one current task packet. It does not receive repository access.

## How to use it

1. Give the agent the complete contents of `PROJECT_INSTRUCTIONS.txt` as its
   project or custom instructions.
2. Attach the four numbered Markdown files as persistent context.
3. State which working mode applies: portfolio-slate discovery, case
   construction, rendered-case review, or an explicitly requested combination
   of construction and rendered review.
4. Attach one small task packet built with
   `04-EXTERNAL-AGENT-PACKET-GUIDE.md`.
5. When comparing agents, give each one the same base context and task packet.

No provider-specific model or interface is assumed. Keep
`PROJECT_INSTRUCTIONS.txt` below 8,000 characters. If a service has no
persistent instructions, attach it as another task file.

The external agent has no access to local files beyond what is explicitly
shared. Its complete context is the project instructions, these four base
files, and the current task packet.

## Keep the context selective

Do not upload raw conversation exports, private archives, test files, source
ledgers, or every available screenshot. They add noise and encourage the agent
to obey old decisions instead of finding the strongest story.

Supply the relationships that matter: company or team pressure, the relevant
initiative, Mason's role and decisions, candidate artifacts, and the strongest
supported ending. A story-library extract may contain several related items
when the task is to discover which combination makes the most complete case.

## Independence without amnesia

An outside agent should challenge existing case pages, drafts, titles, evidence
selections, and layouts. It should not ignore known facts or Mason's explicit
corrections. Rejected work is included only when the task is to diagnose it and
must be labelled as rejected rather than presented as a target.

Use one independent hiring-reader review and at most one focused repair. That
limit prevents endless polishing; it does not make the first concept, layout,
or reviewer preference binding after Mason rejects it.
