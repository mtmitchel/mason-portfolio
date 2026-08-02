# Canonical external-agent portfolio base

This tracked directory is the source of truth for the provider-neutral context
shared with an outside model or agent. The persistent files are installed in
one external Portfolio project. Repository agents follow
[`../../external-agent-packets.md`](../../external-agent-packets.md). They may
inspect this base while assembling a packet, but must not copy its contents or
cite its filenames or paths inside a case-study task packet. A brief direction
to check the existing project-space instructions and files is enough.

The external agent receives this base through its project space and receives
case-specific files through a separate current task packet. It does not receive
repository access.

## How to use it

1. Install the complete contents of `PROJECT_INSTRUCTIONS.txt` as the external
   project or custom instructions.
2. Install `01` through `04` as the four core persistent files in that same
   Portfolio project.
3. Do not install `05-MASON-WRITING-VOICE.md` as persistent project knowledge.
   Attach it directly to an individual chat only after the task explicitly
   authorizes drafting, rewriting, editing, or line editing Mason's Portfolio
   prose. Do not attach it to a blind-reader or factual-validator chat.
4. In the separate case-study packet, state which working mode applies:
   portfolio-slate discovery, case
   construction, rendered-case review, or an explicitly requested combination
   of construction and rendered review.
5. Attach one task-specific packet built with
   `04-EXTERNAL-AGENT-PACKET-GUIDE.md`.
   Every new or refreshed case-study folder must contain no more than 10 files;
   combine its text sections when necessary and never include base copies.
6. Use separate chats for distinct drafting, review, or validation tasks when
   useful, but do not create separate role projects. Those chats share the
   project's persistent instructions and four core files.

After changing any base file, reinstall the four-file core wherever it is used
and replace the project instructions before sending another task packet. Attach
the current canonical `05` only when an authorized writing chat needs it. A
local repository change does not update the external project automatically.
Increment the shared-base version in `04-EXTERNAL-AGENT-PACKET-GUIDE.md` whenever
any installed base file changes, and require the next response to repeat that
version.

No provider-specific model or interface is assumed. Keep
`PROJECT_INSTRUCTIONS.txt` below 8,000 characters. If a service has no
persistent instructions, attach it as another task file.

## Instruction responsibilities

`PROJECT_INSTRUCTIONS.txt` contains compact non-negotiable behavior. The
numbered files expand it by responsibility: `01` owns audience and hiring value;
`02` owns story and prose quality; `03` owns evidence and accuracy; `04` owns
packet contents; and optional chat attachment `05` owns Mason-specific Portfolio
voice.
Mason's current task and explicit corrections govern case-specific decisions.
When the compact file is less specific, apply the detailed numbered standard
rather than inventing a compromise.

For design work, use the installed adaptive design guidance without asking
Mason to name phases or repeat internal workflow language. The Portfolio
profile is optional during exploration and binding only after selection.
Privacy, factual, accessibility, provenance, and publication limits remain
hard. Rejection abandons the rejected layout family rather than authorizing a
cosmetic repair.

The external agent has no access to local files beyond what is explicitly
shared. Every chat's persistent context is the project instructions and four
core base files; its task-specific context is the current packet. An authorized
writing chat may also receive `05`; review and factual-validation chats do not.

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

For pure narrative editing, one review and one repair are maximums, not required
stages. Do not add another reviewer, agent, or round unless Mason requests it.
Design work follows the adaptive budget in `04`. Clearly marked provisional
copy, hierarchy labels, length targets, and alternate text structures may
support exploration; Mason retains final copy and claim approval, and
provisional text cannot be published or stated as fact.

Local rendered review may use transient browser-page or viewport captures,
resizing, and relevant interaction or state checks. Do not retain, attach, or
share captures unless Mason requests that exact artifact, and never capture the
surrounding desktop. Product screenshots alone do not prove the rendered page.
This packet base does not authorize external disclosure or workstation actions.
