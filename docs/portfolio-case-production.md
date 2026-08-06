# Portfolio case production

This is the canonical local runbook for producing a Portfolio case after the
shared [build-content-design-portfolio skill](/home/mason/.agents/skills/build-content-design-portfolio/SKILL.md)
has selected the artifact route and editorial source. The skill owns the
current default writer route and source-selection method. This runbook owns
local stage order, candidate validity, shared case-page presentation guardrails,
and the handoff back to implementation. It is a guide, not a universal story
template: each case may choose its own argument, structure, order, length, and
visual form.

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

## Production sequence and ownership

Follow these stages in order. The selected writer returns a candidate; it does
not edit the repository.

1. One selected response-only writer produces the candidate using the live
   route owned by the shared skill, or an exact route Mason explicitly chose.
   Verify that route before use and never silently substitute a provider,
   model, effort, role, or destination.
2. Factual and screenshot/interface-state QA diagnoses the candidate against
   the bounded evidence, claim limits, and visible conditions. It reports
   defects; it does not rewrite.
3. When the case argument depends on multiple related UI states, a distinct
   interface/content-system review checks state progression, terminology,
   offer and action logic, cross-product consistency, and whether the visuals
   actually prove the story.
4. A fresh hiring-reader review receives only the assembled reader-facing
   candidate, the intended reader outcome, and the visuals in reading order.
   Require this independent review for a substantial full-case creation or a
   material full-case revision. A small edit may use the root-owned
   hiring-reader pass; do not call that pass independent.
5. One total same-writer repair is the maximum across factual, interface-state,
   interface-system, and reader failures. Reviewers diagnose; the selected
   writer makes the one repair, and the affected reviewers recheck it.
6. Integrate accepted copy locally. Meaning-preserving mechanical normalization
   is integration, not a new writer attempt.
7. Review the exact integrated route at desktop and mobile sizes against the
   chosen Portfolio presentation baseline. This rendered review is the last
   presentation check before the case is called complete.

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
- Use the checkout case as the current presentation baseline for case-page
  display, heading, body, and caption type roles; the centered reading measure;
  image, text, and caption alignment; readable full-screen scale;
  focused-crop treatment; and spacing rhythm. This does not authorize copying
  checkout's story, headings, section order, components, or visual
  construction.
- Captions stay concise and visually subordinate. Do not put a long caption
  beneath an unreadably small two-up pair of complete screens; use a full-width,
  tabbed, sequential, or focused-crop presentation when needed.
- Every case footer uses the compact bottom-right “Next →” treatment. Do not
  use “Next project” or a next-case title.

Case-specific story and structure remain free to change when they serve the
reader. Shared chrome and readable media rules should not become a universal
outline.
