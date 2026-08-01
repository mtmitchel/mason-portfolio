# External-agent packet guide

Shared-base version: `2026-08-01.2`

Create one small packet for the exact task. Do not make every packet imitate a
case-review bundle.

## How the shared base fits together

Mason's current task and explicit corrections govern case-specific decisions.
`01-AUDIENCE-AND-PORTFOLIO-GOAL.md` owns audience and hiring value;
`02-STORY-AND-READER-STANDARD.md` owns public narrative and prose quality;
`03-EVIDENCE-AND-ACCURACY-STANDARD.md` owns claim status; and this file owns
packet contents. Apply the detailed numbered standard when the compact project
instructions are less specific. Do not weaken one standard to solve a problem
owned by another.

## State the authorized operation

Every packet must name:

- the working mode;
- the authorized operation: review only, review and rewrite, construction,
  design critique, rendered review, or a named combination;
- explicit non-goals; and
- whether external research or browsing is allowed; and
- the required shared-base version.

If outside research is not explicitly allowed, treat the packet as the complete
source set. A request to review does not imply permission to rewrite, redesign,
implement, add agents, or expand the deliverables.

When a packet supplies any screenshot or captured interface state, put the
interface-state claim check before narrative or language review. Require one
state-ledger row per image, including known conditions and variants that limit
what it proves, and one claim-to-state row for every sentence, caption, or alt
text that uses or interprets visible labels, amounts, dates, conditions,
controls, or actions. Reject claims that merge states or treat one captured
state as universal, exhaustive, default, or guaranteed. Do not permit a revised
draft until no state or scope conflict remains.

Require the response to begin with a receipt stating the shared-base version,
every state checked, its conditions and limits, unresolved state or scope
conflicts, and whether rewriting was allowed or blocked. Record the writer
model and effort when the interface exposes them; otherwise write `unknown`
rather than inferring them.

## Mode A: portfolio-slate discovery

Supply a selective story-library extract containing:

- the strongest company or team goals, product pressures, and initiatives;
- Mason's role, collaborators, and important decisions;
- candidate artifacts with plain descriptions;
- attributable outcomes and their scope;
- relationships among items that may belong in one story; and
- material gaps or conflicts.

Include enough candidates to compare complete story clusters, not the whole
evidence archive. Ask the agent to recommend one roughly five-case slate,
explain what each case uniquely proves, and identify the best artifact
combination for each. Existing case pages and prior groupings are inputs, not
reserved slots.

## Mode B: case construction or reconstruction

Use these files when relevant:

### `CASE_CONTEXT.md`

Include the company, product, period, larger goal or pressure, relevant
initiative, Mason's role and collaborators, the central decisions, the
supported ending, and the case's possible role in the portfolio.

Do not prescribe a title, section order, or page template unless Mason has
explicitly fixed it.

### `FACTS_AND_LIMITS.md`

Separate supported facts, professional interpretations, discovery leads,
material gaps, and statements the public case must not make. A professional
interpretation may extrapolate a user benefit from the artifacts and established
UX writing, microcopy, or content-design practice; this is valid tradecraft, not
fabrication. Keep it concise. It is a factual boundary, not a proposed outline.

### `ASSET_INDEX.md`

For every supplied screenshot or excerpt, state:

- what it shows;
- whether it is historical, representative, reconstructed, or exact;
- the conditions shown and any known product, plan, offer, eligibility, account,
  or experiment variations that limit what it proves;
- which narrative jobs it could perform; and
- any claim it cannot support.

Supply the plausible evidence set, then ask the agent to select the smallest
combination that creates a complete story. Do not preselect one “central
exhibit” unless the task genuinely requires it.

### Optional current or rejected draft

Include a reader-facing draft only when it helps the task. Label a rejected
draft or page capture clearly and do not let it masquerade as the target
structure. Record the rejected layout family or defining traits; rejection
reopens divergence rather than authorizing cosmetic repair of that concept.

## Mode C: rendered-case review

Supply the current public copy plus a live URL or current desktop and mobile
page captures. Raw product screenshots alone do not show the portfolio page's
hierarchy, pacing, image scale, or responsive behavior.

Ask the agent to distinguish demonstrated comprehension or usability problems
from personal taste. A review may recommend replacing the composition rather
than repairing the existing one. Product screenshots alone do not prove the
rendered Portfolio page.

Also ask whether the page makes the business, customer, or organizational
stake legible and whether the work's supported value is visible. The review
should judge the written case and its visuals together. Apply the story and
reader standard to the introduction's function, causal transitions, headings,
body copy, punctuation, captions, and deliberate conclusion. Image scale and
evidence should help explain why the work mattered, not merely document
interface changes.

## Mode D: combined construction and rendered review

Use only when the task explicitly requests both. Include the Mode B context,
facts, asset index, and evidence plus the current reader-facing copy and an
accessible live page or current desktop and mobile captures. Label the current
page as a candidate. Ask for comprehensive written and design feedback followed
by one coherent replacement direction.

## Two reasoning passes for substantial work

1. Build a causal skeleton and map relationships among goals, initiatives,
   Mason's decisions, artifacts, and outcomes.
2. Turn the selected combination into one full narrative and visual plan.

These passes support judgment; they are not approval gates. Do not add more
rounds after the requested deliverable is complete.

## Adaptive design review budget

Use the global `frontend-design` adaptive workflow. Mason should describe the
request in ordinary language; do not ask for phase names, skill or profile
names, handoff formats, budgets, or routine thread changes. For a substantial
new design or redesign where materially different directions would change the
outcome, develop three genuinely structural directions and pause once for
Mason's choice. For clear, routine, reversible, faithful, or bug-fix work,
choose the strongest direction and proceed. A rejection abandons the rejected
layout family and defining traits, so pursue a materially different direction
instead of cosmetic repair. Implementation is one pass and rendered review
allows up to two focused visual repair passes. Make the rendered qualitative
decision before build or accessibility/conformance closure. Pure narrative
editing allows at most one review and one repair; neither is a required stage.
Do not add another reviewer, agent, or round unless Mason requests it.

Clearly mark provisional copy, hierarchy labels, length targets, and alternate
text structures. Mason retains final copy and claim approval; provisional text
cannot be published or represented as fact. Local rendered review may use
transient browser-page or viewport captures, resizing, and relevant interaction
or state checks. Do not retain, attach, or share captures unless Mason requests
that exact artifact, and never capture the surrounding desktop.

## Keep packets safe and useful

Add product history only when it changes the story. Add a source excerpt only
when exact wording, a decision record, or metric scope matters. Do not upload
raw private archives, credentials, personal data, or full conversation dumps.
