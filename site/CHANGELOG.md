# Changelog

## Unreleased — 2026-07-30

### Checkout case

- Rebuilt the opening around DeepL's Monetization roadmap, the experiment
  program, Mason's collaboration with the product manager and product designer,
  his content-design contribution, and the experiment-level result.
- Replaced the rejected diagram and crowded evidence modules with the real old
  Details and Review screens, the rebuilt Details screen, a focused price
  comparison, and a source-faithful consent and final-action comparison.
- Kept `+3.02% paid subscriptions` and approximately `+€2.4M incremental annual
  recurring revenue` together in the opening; removed the public 35-day result
  and the “Pro purchases” terminology.
- Documented that the annual screens and `€0 due today` summary come from
  separate working iterations and do not represent one continuous session or
  necessarily the exact tested variant.

### Site and repository

- Removed the email and LinkedIn footer from the homepage, writing index, and
  case routes. LinkedIn remains available in the primary navigation.
- Added a repository-wide sentence-case rule for reader-facing text and removed
  all-caps styling from the live application.
- Retired the superseded checkout crops, recorded the corrected reconstruction
  and focused crop provenance, and aligned the route, claim review, current
  direction, candidate queue, and asset manifest.
- Made manifest date validation use the repository machine's local calendar
  date so valid documentation updates are not rejected around midnight.

## Unreleased — 2026-07-29

### Portfolio process

- Reframed the candidate queue as a story-material database for discovering
  relationships among DeepL experience, Figma artifacts, strategic goals, and
  attributable outcomes.
- Replaced the old rank-and-approval pipeline with a suggested slate-to-case
  workflow: compare complete story combinations, select the strongest overall
  portfolio slate, then develop each case's narrative and visual form together.
- Kept one independent reader review and at most one focused repair while
  removing automated checks that froze editorial or layout choices.
- Added a provider-neutral external-agent packet workflow with a canonical
  shared base, explicit no-repository-access assumptions, and separate modes
  for slate discovery, case construction, rendered review, or a combined task.

### Repository guardrails

- Split the production stylesheet into responsibility-based modules without
  changing its cascade.
- Added tracked commit hooks and repository checks that reject production
  source files over 500 physical lines in the full staged snapshot.

## Unreleased — 2026-07-24

### Changed

- Rebuilt all six case studies around story-specific structures and placed each
  important claim beside the visual or excerpt that supports it.
- Rewrote the writing page, homepage titles, metadata, and About copy in plain,
  direct language.
- Kept the Checkout and pricing state switchers, accessible image viewer,
  restrained card grid, and reduced-motion behavior.
- Made the localization-report homepage card show the complete `978 × 1369`
  report cover at its natural proportions.
- Replaced universal case templates with route-owned case components and a small
  set of presentation-only shared components.

### Removed

- Public claim-management language, process notes, generic decision cards,
  unsupported outcomes, fake before-and-after examples, and repeated
  explanations.
- Obsolete universal case templates, the pricing era diagram, retired public
  assets, and redirect-only case route folders.
- The old Claude/Fable review packet from the application tree.

### Repository

- Consolidated private source documents, Figma exports, and original homepage
  media under `private-evidence/`.
- Moved completed research, old reviews, retired code, superseded exports,
  rejected cover candidates, and removed public assets under `archive/`.
- Replaced long mixed-purpose direction and claim documents with short current
  owners; preserved the full historical versions in the archive.
- Added a repository check for structure, local documentation links, active
  routes, selected assets, manifest paths, and tracked generated files.

### Publication state

The repository and site remain private. No deployment or access change is
included.
