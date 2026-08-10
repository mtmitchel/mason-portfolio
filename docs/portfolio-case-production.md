# Portfolio case production

This is the canonical local runbook for producing a Portfolio case after the
shared [build-content-design-portfolio skill](/home/mason/.agents/skills/build-content-design-portfolio/SKILL.md)
has selected the artifact route and editorial source. Repository
[`AGENTS.md`](../AGENTS.md) owns the current Portfolio writer route. This
runbook is the sole local owner of the four-stage review order, candidate validity and
invalidation, and the same-writer repair budget across that sequence. It also
owns shared case-page presentation guardrails and the handoff back to
implementation. It is a guide, not a universal story template: each case may
choose its own argument, structure, order, length, and visual form.

## Before case work resumes

- The primary checkout returned by Git is the only ordinary Portfolio write
  location. Use the saved checkout and its local environment; do not use an
  auto-generated worktree for ordinary implementation.
- Exactly one case study may be active at a time, including drafting or writing,
  factual and interface review, reader review, implementation, rendered review,
  and repair. Keep every other case parked and read-only until the active case
  reaches a terminal pause or finish.
- A linked or generated worktree is review-only by default. It may become
  writable only with Mason's explicit task-specific authorization, a current
  instruction-alignment pass, a disjoint write set, and an explicit
  integration or retirement plan.
- The ordinary linked-worktree path is fail-closed: the normal pre-commit
  check blocks a linked case commit even when every canonical owner byte-matches
  the primary checkout.
- Mason's only named linked-write exception is
  `PORTFOLIO_AUTHORIZED_LINKED_WRITE=1` for the exact task-specific command.
  It may pass only when every canonical owner exists, has no local owner edits,
  and byte-matches the primary checkout. This is never the ordinary path and
  does not replace the disjoint-write-set or integration/retirement conditions.
- After instruction sync and before any case resumes, run
  `node scripts/check-worktree-alignment.mjs --audit-linked` from the primary
  checkout. It checks every registered linked worktree. Refresh or hand off
  stale worktrees, or retire them, before resuming case work; the audit does not
  grant linked-write permission.
- Author instruction changes only in the primary checkout. A detached commit
  or worktree-only edit is not complete. Before case work resumes, validate the
  instruction change, commit it, and synchronize it to the canonical branch or
  remote under the applicable commit and push authorization; then have active
  tasks refresh or hand off. Never copy instruction text independently into
  several worktrees.

## Hiring outcome and artifact repair

Every case is a hiring artifact, not an archive display. Its primary job is to
help Mason win interviews and a job by showing the strongest truthful,
defensible version of his contribution. When a displayed artifact contains a
correctable copy, visual, crop, framing, or presentation defect, repair the
public derivative or truthful reconstruction, replace it, or remove it before
the case advances. Do not substitute an explanation, provenance note, or
historical-fidelity argument for a repair.

Preserve original evidence unchanged and record material transformations in
the private evidence owner. Keep that bookkeeping out of the public case unless
the distinction changes what a hiring reader must understand. A reconstructed
artifact must remain truthful and must not be presented as an exact historical
capture.

## Production sequence and ownership

Follow these stages in order. The selected writer returns a candidate; it does
not edit the repository.

1. One selected response-only writer produces the candidate using the live
   route owned by repository `AGENTS.md`, or an exact route Mason explicitly chose.
   Verify that route before use and never silently substitute a provider,
   model, effort, role, or destination.
2. A guided comprehensive external-agent review checks the complete hiring
   story, structure, content system, visual argument, and presentation. When
   the case depends on multiple related UI states, this stage also checks state
   progression, terminology, offer and action logic, cross-product consistency,
   and whether the visuals prove the story. When a case depends on upgrade
   prompts, paywalls, or feature gates, apply the upgrade-copy guidance in
   [file 02](external-agent/base/02-STORY-AND-READER-STANDARD.md) during this
   existing review; do not add a separate review round.
3. A targeted editorial external-agent review addresses only the specific copy,
   structure, caption, or presentation problems identified by the comprehensive
   review. If writing or repair is authorized, finish and integrate that work
   before moving on.
4. A factual and claim external-agent review checks the revised candidate
   against the bounded evidence, claim limits, attribution, and visible
   screenshot or interface conditions. It reports defects and does not rewrite
   unless writing is explicitly authorized.
5. A blind hiring-reader external-agent review receives only the fact-checked
   reader-facing candidate, the intended reader outcome, and the visuals in
   reading order in a fresh context.
   Require this independent review for a substantial full-case creation or a
   material full-case revision. A small edit may use the root-owned
   hiring-reader pass; do not call that pass independent.
6. A material failure stops progression. Use the one total same-writer repair
   allowed across the sequence, have the affected reviewer recheck it, and
   update the current candidate before preparing any downstream packet.
7. Integrate accepted copy locally. Meaning-preserving mechanical normalization
   is integration, not a new writer attempt.
8. Review the exact integrated route at desktop and mobile sizes against the
   chosen Portfolio presentation baseline. This rendered review is the last
   presentation check before the case is called complete.

### Screenshot-heavy integration gate

When screenshot work implicates source or derivative pixels or bytes in
inspection, selection, transformation, optimization, integration, or
verification, route image-byte mechanics through the
[crop-optimize-web-images skill](/home/mason/.agents/skills/crop-optimize-web-images/SKILL.md).
Route page-level measure, gutters, and rhythm through the global
[frontend-design skill](/home/mason/.agents/skills/frontend-design/SKILL.md).
CSS-only caption gaps, spacing, alignment, text or container measure, viewer
layout, and browser-only review stay with the frontend/page owner and do not
trigger the crop skill. Keep those owners separate: the crop skill handles
source selection,
coordinates, pixels, lossless optimization, and byte verification; the
repository/page owner handles CSS, copying, references and manifests, browser
review, repository checks, and cleanup. Never crop pixels to compensate for
the page's CSS measure or gutters.

Before writing individual crop specs or choosing coordinates for two or more
related screenshots, make one ephemeral set-level decision in working notes.
Group only genuinely comparable visual families (for example, full screens
versus modals). For each family, state the intended rendered width, common
boundary or intentional-whitespace rule, comparable anchor when one exists,
and any justified exceptions. A comparison case is evidence only for the exact
property Mason named or demonstrated; do not import its wider layout. When a
family has a genuine common UI anchor, require
its group `image_verify.py scale` check; compare no unrelated families, and if
no anchor exists, state why and rely on rendered review.

1. Stage selected, cropped, and optimized outputs outside `site/public`.
2. Run local mechanical checks there for source, bounds, required regions,
   pixel budget, and lossless output, plus required family scale checks.
3. Copy and integrate approved outputs under new cache-safe names, updating
   every relevant component, reference, and manifest entry accurately.
4. Run `image_verify.py file` against each served URL after integration.
5. Inspect the exact integrated route at desktop and mobile sizes.
6. Only then may downstream review packets advance or completion be claimed.

A rejection of the framing or treatment family invalidates that family; a
correction of one named property does not. Keep these working notes ephemeral:
do not create a permanent ledger, receipt, hash record, or other artifact.

Mason's qualitative rejection reopens the affected reader-facing decision. Do
not defend a rejected direction with a narrow mechanical fix. Stop when a
required route, decision, evidence boundary, reviewer, or repair is missing.

## Candidate boundary and review validity

The candidate is the complete reader-facing surface: prose, headings,
conclusions, captions, meaning-bearing alt text, the ordered visual set, each
crop or treatment, reading order and emphasis, and the rendered layout. Name
the candidate in plain terms (for example, “the assembled copy with its
ordered visuals at the integrated route”). Do not invent a ledger, receipt,
hash bureaucracy, or packet ceremony.

A review result is valid only for the surfaces it inspected. A material change
invalidates the affected downstream reviews. Apply these rules:

- A prose, heading, or conclusion change requires the relevant factual review
  again and a reader review again.
- A caption, alt-text, or visible-state claim change requires factual and
  interface-state review again, plus reader review when the meaning changes.
- An ordered visual set, crop, or visual-treatment change requires
  interface-system review, reader review, and rendered review again.
- A layout, type, alignment, or footer change requires rendered review again,
  plus reader review when reading order or emphasis changes.
- Meaning-preserving mechanical normalization does not invalidate semantic
  review.

Never claim COMPLETE using a review of an older candidate. The final proof must
refer to the exact integrated route and its current candidate surfaces.

## Shared presentation baseline

These are stable case-page chrome, type, and media guardrails—not a universal
story or section template. A direct Mason instruction may intentionally
override a rule for a named case; otherwise the baseline holds.

- The byline identifies the company plus the team or workstream, never
  Mason's role. Put his role in the introduction. For DeepL monetization cases,
  use “DeepL · Monetization” unless Mason explicitly chooses another workstream
  label.
- Omit years from case-study bylines portfolio-wide unless Mason explicitly
  changes that portfolio-wide policy.
- Keep private provenance and blanket historical-state or terms disclaimers
  out of public copy. Qualify only the specific claim or caption whose state
  limit changes the reader's understanding.
- There is no universal comparison-case layout. When Mason cites another case,
  match only the named or demonstrated property at the same viewport and state.
  Do not transfer its viewer structure, width, alignment, crop, spacing, or
  component geometry unless that exact property is the task.
- Captions stay concise and visually subordinate. Do not put a long caption
  beneath an unreadably small two-up pair of complete screens; use a full-width,
  tabbed, sequential, or focused-crop presentation when needed.
- Every case footer uses the compact bottom-right “Next →” treatment. Do not
  use “Next project” or a next-case title.

Case-specific story and structure remain free to change when they serve the
reader. Shared chrome and readable media rules should not become a universal
outline.
