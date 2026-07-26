# Pricing evolution recovery and portfolio evidence work plan

Status: Active; Steps 1–20 complete; public pricing
implementation frozen

Last updated: 2026-07-26

This is the canonical work-status plan for recovering, organizing, and applying
the pricing and Write Pro evidence. It does not own public claims, narrative
decisions, or asset provenance. Those remain with the claim review, current
direction, story brief, achievement recovery package, and asset manifest.

The evidence, repository, and continuation context behind this plan is recorded
in
[`pricing-evolution-recovery-audit-2026-07-26.md`](pricing-evolution-recovery-audit-2026-07-26.md).

Update this file whenever work begins, finishes, changes order, or becomes
blocked:

- change the relevant checkbox in the same change as the work;
- update `Last updated`;
- add a short note only when the checkbox alone would conceal a material
  decision, dependency, or unresolved risk;
- preserve superseded material through the archive rather than deleting it;
- do not mark a qualitative stage complete merely because mechanical checks
  pass.

## Current boundary

- The pricing page, current public assets, and current private pricing drafts
  remain frozen until the evidence and organization gates below pass.
- The paused pricing candidate is preserved on
  `pricing-case-presentation-wip` at `05df5d0`. Evidence recovery proceeds on
  `pricing-evidence-recovery` without changing that candidate or its linked
  signoff worktree.
- Figma inspection is read-only by default.
- Figma edits, exports, mockup creation, destructive cleanup, commits, pushes,
  publication, and deployment each require separate approval.
- The full GPT export must remain outside the repository. Curate only selected,
  necessary evidence.

## Execution and delegation strategy

Start phase 1 in a fresh chat rooted at this repository. The new chat should
read the repository instructions, this plan, and the live Git state rather than
depending on a pasted summary of this conversation. Its first authorized slice
should be steps 1-3 only.

Use one primary agent for:

- preserving the dirty candidate;
- deciding current and archived ownership;
- chronology and contribution reconstruction;
- manifest and repository-check repairs;
- maintaining the running Figwright inventory;
- integrating evidence and implementing the eventual page.

Do not split the live Figwright page scan across agents. One agent must retain
the complete page-and-batch coverage list because final asset decisions are
deferred until all relevant pages have been reviewed.

Subagents are optional and require explicit approval for the bounded task. The
two useful points are:

- after step 18, one read-only reviewer may compare the completed Figma
  inventory and challenge finalist classifications without editing files;
- after step 27, one read-only page reviewer may assess the frozen candidate's
  claims, accessibility, and first-reader comprehension before the primary
  agent makes the single allowed repair.

Subagents must not reorganize evidence, edit Figma, make independent public
copy changes, delegate again, or decide the final disposition. The primary
agent owns the complete diff and final judgment.

## Phase 1: Preserve and establish ownership

- [x] 1. Preserve the current dirty pricing implementation, assets, and private
  drafts as one dated paused/rejected candidate without deleting or
  overwriting anything.

  Completed 2026-07-26 through a local checkpoint on
  `pricing-case-presentation-wip`. The checkpoint is intentionally not pushed.
- [x] 2. Create one active pricing-project index that states the work is paused
  and identifies the owners for chronology, contributions, claims, sources,
  assets, and archived drafts.

  Completed 2026-07-26. The index now routes every pricing evidence role while
  keeping the rejected story specification and public implementation paused.
- [x] 3. Move the Write Pro launch reconstruction back into active project
  evidence and cross-reference it from the pricing index.

  Completed 2026-07-26. The reconstruction moved byte-for-byte into the active
  project directory and retained SHA-256
  `51ba1e7b2254563f9341856c14613f5290949accb76ccc07419fa0e56758a84f`.

Gate: the paused candidate is recoverable, and a reader can find every active
pricing owner from one index.

## Phase 2: Reconstruct chronology and contribution

- [x] 4. Build one corrected direct-source chronology covering the
  Translator/API baseline, Write beta, Write Pro paid launch, bundles, the 2024
  grid revisions, later pricing-page work, and the eventual add-on state.

  Completed 2026-07-26. The active chronology now separates public product
  states, private work evidence, later page changes, and bounded unknowns.
- [x] 5. Build a contribution map separating Write Pro launch work, June/July
  2024 grid simplification, naming and terminology work, repeatable review
  tooling, and 2025 Pricing Page V2 work.

  Completed 2026-07-26. Each workstream now has independent artifact,
  contribution, lifecycle, outcome, publication, and claim boundaries.
- [x] 6. Add the missing achievement records and claim ceilings to the recovery
  ledger without implying sole ownership, shipment, adoption, testing,
  causation, or measured results.

  Completed 2026-07-26. The ledger now adds `MON-05`, `MON-06`, and `SYS-04`,
  strengthens the `SYS-01` source trail, and gives every pricing-related
  workstream an explicit claim ceiling.
- [x] 7. Correct the current claim review where it conflates chronological
  product names, buying routes, and tiers. Preserve superseded wording in the
  archive.

  Completed 2026-07-26. The current claim owner now distinguishes dated product
  states and contributions; the replaced pricing section is preserved in the
  pricing research archive.

Gate: every proposed public contribution has a direct source, evidence class,
chronological position, and factual ceiling.

## Phase 3: Consolidate documents and selected raw evidence

- [x] 8. Consolidate the pricing deep-research report, correction addendum,
  PDF, and old story specifications into clearly dated current or superseded
  document families.

  Completed 2026-07-26. A pricing archive-family index now separates the
  active project owners from superseded research, its correction history, the
  undated PDF derivative, rejected story specifications, execution history,
  and prior claim wording.
- [x] 9. Consolidate ambiguous performance-review variants and other
  near-duplicate evidence documents into explicit version families with one
  active owner.

  Completed 2026-07-26. Four ambiguous reflection drafts were renamed
  byte-for-byte by content and routed to the existing performance-review
  master. The two full claim-review snapshots now form one dated archive family
  with the current claim review as its sole active owner.
- [x] 10. Split the monolithic Figma evidence map into project-level
  crosswalks. Archive execution logs, troubleshooting notes, and obsolete
  selection history.

  Completed 2026-07-26 without opening Figma. The active index now routes
  Account Security, Team Administration, Write Pro, Monetization, and the
  pricing overlay to focused crosswalks. The intact pre-split map preserves
  execution checkpoints, troubleshooting, aliases, and old selection history
  in the archive. `Canonical` now means an organizing destination only; no
  Figma state is treated as final, untouchable, or the ultimate source of
  truth.
- [x] 11. Curate only relevant GPT-export conversations and attachments into
  project evidence using conversation IDs, dates, hashes, provenance, and
  redacted excerpts. Do not copy the full export into the repository.

  Completed 2026-07-26. The pricing project now contains a 24-conversation
  provenance index, 13 redacted user-authored excerpts, and 17 byte-for-byte
  private attachment copies. The full export and broader internal source
  documents remain outside the repository. Feedback, rewrite, and variant
  conversations are classified as workshop evidence by default; assistant
  suggestions are not attributed to Mason.

Gate: current evidence is discoverable without treating archived research,
execution logs, or the raw GPT export as active owners.

## Phase 4: Repair assets, duplicates, and repository checks

- [x] 12. Repair the asset manifest by moving live originals out of archive
  paths, replacing public-file self-sources where possible, adding missing
  hashes and provenance, and marking genuinely missing sources honestly.

  Completed 2026-07-26. Eight selected originals moved into active private
  source folders. All 39 public-file records now have verified hashes and an
  explicit source status: 20 verified private sources, five recorded
  derivatives, and 14 honestly missing independent sources.
- [x] 13. Classify exact duplicates as intentional copies, source-internal
  duplicates, superseded history, or archive-cleanup candidates. Preserve
  material and request separate approval before destructive cleanup.

  Completed 2026-07-26. The live-file audit classified 15 exact-hash groups
  containing 31 files as three intentional-copy groups, four source-internal
  groups, and eight superseded-history groups. Every copy remains preserved;
  none is currently approved as an archive-cleanup candidate.
- [x] 14. Repair repository checks so they ignore runtime mounts
  appropriately, avoid hard-coded dates and project counts, require
  hashes/provenance, and reject archived paths as active evidence sources.

  Completed 2026-07-26. The checker now handles `.agents` and `.codex` as
  runtime mounts, validates dates and reports route counts without fixed
  literals, verifies public and source hashes, enforces explicit provenance
  states, and rejects archived or self-referential active sources.

Gate: every active public asset has a valid source record, and the repository
checks enforce the same archive and provenance boundaries described by the
documentation.

## Phase 5: Complete the page-by-page Figwright inventory

Figwright exposes selected objects and scoped node reads. Coverage therefore
starts with a selected top-level page manifest, followed by bounded raw
extraction for every recorded root. Do not treat a manifest or raw extraction
as analysis, visual verification, or a completed page review. Do not select
final portfolio evidence until the later analysis pass has reviewed every
relevant page.

- [x] 15. Create one running Figwright inventory with fields for Figma file,
  page, batch, selected frame range, frame/node ID, visual description, likely
  project, chronology, contribution relationship, editability, provenance,
  provisional value, and follow-up need.

  Completed 2026-07-26. The inventory structure records page-and-batch coverage
  and every required candidate-frame field. At that point no Figma page or
  batch had been reviewed; step 16 started later the same day.
- [x] 16. For each relevant Figma page, capture a Figwright manifest of the
  selected top-level roots, then preserve bounded raw extraction records for
  every manifest root. Record exact copy/text, structure, node IDs, exposed
  visibility and locked state, dimensions, relevant style/layout/component
  fields, and opaque image-fill references without analysis or final selection.

  Completed 2026-07-26 for the three approved source files. The compressed raw
  ledger contains 69 page records, 1,190 selected top-level roots, 185,501 text
  nodes, 182,628 structural nodes, and 2,984 image-fill references with no
  unresolved extraction limitation. The earlier fourteen interpreted
  `Monetization` / `Experiments` batches covering 108 exact selected nodes remain
  provisional legacy history. At the step 16 extraction gate, no page had
  completed saved-data analysis, no final asset selection had occurred, and
  neither step 18 nor any later phase had started.
- [x] 17. Track unreviewed pages and frame batches so work can resume across
  sessions without rescanning completed material or losing provisional
  candidates.

  Completed 2026-07-26. The inventory now tracks all 69 pages as 99
  deterministic review batches of at most 20 manifest roots, plus 12
  zero-root page records requiring an explicit later disposition. All 99
  review batches remain unreviewed in the fresh pass. The raw ledger was also
  normalized losslessly into strict one-object-per-line JSONL; all 655 objects,
  parsed-record hashes, and extraction totals remained unchanged.
- [x] 18. Review all 99 saved batches and the 12 zero-root records. Add
  provisional candidates to the inventory without making final selection
  decisions. After the complete review, compare and classify every candidate
  as:
  - current-asset replacement;
  - genuinely new evidence;
  - contextual evidence;
  - private-only evidence;
  - unresolved;
  - reject.

  Saved-ledger coverage completed 2026-07-26. All 99 deterministic batches and
  1,190 manifest roots have been reviewed, and all 12 zero-root page records
  have explicit dispositions. The inventory records provisional artifact
  families, repeated-family accounting, raster limits, and unresolved
  chronology, contribution, lifecycle, outcome, and permission questions.
  Candidate comparison and classification completed 2026-07-26. The inventory
  assigns every provisional candidate family to one Step 18 class, records its
  evidence ceiling, and routes only focused finalists or unresolved
  relationships to Step 19. Classification does not approve an asset,
  publication, or replacement. The approved Step 19 pass below later inspected
  only those routed candidates.
- [x] 19. Run focused second Figwright passes only on finalists or unresolved
  clusters to verify exact frame relationships, chronology, readable text,
  editability, and whether they improve on current portfolio assets.

  Focused read-only verification completed 2026-07-26 in Figma Desktop. The
  pass checked only the explicit focused and priority routes from Step 18. The
  inventory records exact live nodes, repeated-family relationships,
  native/unlocked and raster boundaries, readability, current-asset
  comparisons, and conditional Step 20 dispositions. The pass did not resolve
  authorship, approval, implementation, shipment, testing, adoption,
  causation, outcomes, or publication permission. `CO-01A` was not inspected
  because checkout replacement was outside the approved Step 19 scope. No
  Figma edit, export, public selection, or asset replacement occurred.
- [x] 20. Update project crosswalks and the asset manifest from the final Figma
  dispositions. Request separate approval before any Figma edit, export, or
  mockup creation.

  Completed 2026-07-26 as a records-only disposition pass. Exact private node
  relationships were added to the pricing, Write Pro, and Monetization
  crosswalks. Three source-equivalent upgrade-prompt frames were added to the
  asset manifest as candidates while provenance correctly remains `missing`
  because export lineage is unproved. No Figma edit, export, public selection,
  asset replacement, or site change was made.

### Figwright coverage tracker

The detailed running inventory is
[`projects/pricing-evolution/figwright-inventory.md`](projects/pricing-evolution/figwright-inventory.md).
Steps 16–20 are complete. The raw extraction is preserved. Step 18 reviewed all
99 fresh batches, dispositioned all 12 zero-root records, and classified every
candidate family. Step 19 completed only the routed live checks and recorded
conditional dispositions. Step 20 allocated those dispositions to the private
crosswalks and asset manifest without changing Figma or public assets.

| Figma file | Page scope | Manifest roots | Raw roots extracted | Legacy reviewed batches | Fresh review progress | Next cursor |
| --- | --- | ---: | ---: | ---: | --- | --- |
| `Monetization` | `Experiments` | 231 | 231 | 14 | 12 of 12 batches | Complete; legacy batches remain provisional history |
| `Monetization` | `Pricing page` | 174 | 174 | 0 | 9 of 9 batches | Complete |
| `Monetization` | `Write Pro` | 81 | 81 | 0 | 5 of 5 batches | Complete |
| `_Archive — Misc (pre-cleanup)` | `Page 1` | 17 | 17 | 0 | 1 of 1 batch | Complete |
| `_Archive — Misc (pre-cleanup)` | `ATE` | 82 | 82 | 0 | 5 of 5 batches | Complete |
| `Checkout — Experiments (Copy)` | 64 pages | 605 | 605 | 0 | 67 of 67 batches; 12 of 12 zero-root records dispositioned | Complete |

Step 18 gate passed: every approved page and planned batch was reviewed, all
empty records were dispositioned, and every candidate family has one
classification and evidence ceiling. The focused Step 19 live verification is
complete, and the Step 20 private records allocation is complete. Figma edits,
exports, public selection, and public-page work have not started.

## Phase 6: Allocate the recovered work across the portfolio

- [ ] 21. Allocate recovered material across the pricing narrative,
  upgrade-prompts improvements, a possible Write Pro launch sample,
  naming/content-system evidence, CV or achievement support, and private-only
  records. Avoid overlapping cases.
- [ ] 22. Reconsider the pricing case's subject, title, and scope from the
  corrected evidence, including whether Translator and Write should form the
  spine and Voice/API should be reduced to context or removed.

Gate: each selected experience has one clear portfolio job and does not depend
on weakly supported ownership.

## Phase 7: Rebuild the pricing story

- [ ] 23. Draft a new pricing narrative and evidence sequence with corrected
  chronology, clear Mason contribution, the genuine 2024 same-offer grid
  change, truthful captions, and no unsupported outcome claims.
- [ ] 24. Review the narrative and evidence sequence as a hiring reader before
  rebuilding the page. Reopen the subject or structure if it still reads as a
  screen inventory.
- [ ] 25. Rebuild the pricing route and assets only after narrative approval.
  Address image placement, crops, visibly distinct captions, missing switcher
  images, stable controls, lightbox scale, responsive overflow, keyboard
  access, focus behavior, and reduced motion.
- [ ] 26. Rewrite tests around source integrity, privacy, accessibility,
  interaction safety, dimensions, provenance, and narrow claim ceilings rather
  than exact prose, fixed asset counts, or narrative geometry.

Gate: the route tells a complete, evidence-supported story and does not require
private provenance notes to understand it.

## Phase 8: Verify, review, and update current owners

- [ ] 27. Run ESLint, the production build, rendered-HTML tests, repository
  checks, `git diff --check`, and a full diff review. Inspect the live route
  without creating screenshots unless explicitly requested.
- [ ] 28. Conduct a page-only first-reader review and make at most one focused
  structural repair if acceptance is not met.
- [ ] 29. Only after the revised page passes reader review, update the current
  direction, pricing story specification, and any factual classification that
  genuinely changed.
- [ ] 30. Keep commit, push, deployment, publication, Figma writes, and
  destructive cleanup as separate approval-gated phases.

Completion means the reorganized evidence has clear owners, the Figma inventory
has complete relevant-page coverage, the selected portfolio work has defensible
claims and provenance, and the rebuilt page passes both mechanical checks and
reader review.
