# External-agent packet guide

Create one small packet for the exact task. Do not make every packet imitate a
case-review bundle.

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

Separate supported facts, discovery leads, material gaps, and statements the
public case must not make. Keep it concise. It is a factual boundary, not a
proposed outline.

### `ASSET_INDEX.md`

For every supplied screenshot or excerpt, state:

- what it shows;
- whether it is historical, representative, reconstructed, or exact;
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
should judge the written case and its visuals together: transitions,
terminology, headings, captions, image scale, and evidence should explain why
the work mattered, not merely document interface changes.

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
editing may use one independent hiring-reader review and one bounded reader
repair.

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
