# Changelog

## Unreleased — 2026-08-01

### Checkout working state

- Removed the superseded local-only `/work/checkout/concepts/*` exploration
  routes, their dedicated stylesheets, and the worker and test scaffolding that
  existed only to hide and verify those routes.
- Promoted the approved Camera Preview 2 structure and five full-screen assets
  to `/work/checkout`, and replaced the older focused comparison modules with
  the externally revised reader-facing draft.
- Added captured-state limits for the five checkout images, including the plan,
  billing-period, trial, payment-method, action, and result-attribution
  boundaries that must be checked before external copy is accepted.

### Repository maintenance

- Removed obsolete ignored prompts, logs, external-run output, duplicate
  workshop files, generated build output, and empty scratch directories while
  preserving the active checkout preview and external-review packet.
- Pruned eight extraneous packages and their stale lockfile entries; the
  installed top-level dependency tree now matches `package.json`.
- Kept intentional archive duplicates whose retired path or misleading
  filename is itself provenance, and clarified that exception in the archive
  index.

## Unreleased — 2026-07-30

### Checkout case

- Rebuilt the opening around DeepL's Monetization roadmap, the experiment
  program, Mason's collaboration with the product manager and product designer,
  his content-design contribution, and the experiment-level result.
- Replaced the rejected diagram and crowded evidence modules with a coherent
  reconstructed Account, Details, and Review journey, the rebuilt Details
  screen, a focused price comparison, and an exact typeset consent and
  final-action comparison.
- Reduced the original journey viewer to three numbered steps and added a
  separate two-tab Account and Details viewer for the rebuilt two-step flow.
- Replaced CSS-positioned journey crops with pixel-preserving inline assets
  that remove the repeated DeepL header and balance the outer canvas while
  retaining each complete progress indicator and checkout card. All five tabs
  use balanced left, right, and bottom insets from the solid screen group, and
  their enlargements use the same headerless presentation crops.
- Applied the approved Review presentation with additional spacing above
  “Features of your plan” to both the inline tab and its enlargement.
- Added a consistent two-step progress indicator to both rebuilt-viewer tabs.
  The Details crop retains the genuine two-step indicator and complete
  interface. Because no separate two-step Account export is retained, its tab
  is documented as a representative composite of the unchanged Account form
  and a reconstructed two-step indicator.
- Removed the stray partial DeepL logo at the extreme upper-left edge of the
  rebuilt Details image with a localized background-color replacement, without
  altering the checkout interface or the image dimensions.
- Replaced the rejected stacked detail comparisons with accessible two-tab
  viewers that show one Review or Details state at a time. The consent viewer
  now typesets the exact source wording, actions, and reassurance instead of
  forcing them into mismatched raster crops. The high-resolution Review price
  crop retains the dark blue top rule while removing unnecessary right-side
  canvas.
- Added a dedicated section for the supported move of the plan features from
  Review into the rebuilt Details summary. Its accessible two-tab comparison
  pairs a simple location map with tight, lossless source crops. The map makes
  the move from Review’s main column into Details’ summary rail visible without
  adding neighboring plan content to the evidence crops. Mason subsequently
  rejected this locator-map composition; it remains an unapproved checkpoint,
  not a direction to refine or reuse.
- Moved the comparison expand controls into the images, removed the repeated
  state descriptors, and assigned new URLs to the rebuilt Details preview and
  enlargement so the `€0 due today` repair cannot be hidden by cached bytes.
- Removed visible caption text from every enlarged checkout image.
- Preserved each focused crop's source scale on desktop instead of forcing both
  tabs to the same width; mobile still uses the full text gutter for legibility.
- Replaced the fixed-resolution Review crop with Mason's selected
  high-resolution working image.
- Constrained every checkout visual, label, tab row, caption, and mobile
  treatment to the same 720px maximum width and gutters as the body text.
- Kept enlargement controls inside their images and tightened captions to a
  consistent 14px system. The lightbox supports touch panning and pinch zoom.
- Removed decorative borders from complete checkout screens while retaining
  the restrained comparison-panel border, and aligned all checkout image
  controls and focus rings with the final accessibility specification.
- Kept `+3.02% paid subscriptions` and approximately `+€2.4M incremental annual
  recurring revenue` together in the opening; removed the public 35-day result
  and the “Pro purchases” terminology.
- Kept the reconstructed original journey distinct from the rebuilt Details
  screen without presenting either as the exact tested or production variant.
  Updated the representative rebuilt screen to incorporate the separately
  retained `€0 due today` working summary, then rewrote the ending to return to
  the experiment result and close on the content judgment.
- Recorded the comparison repair without treating the checkpoint as visually
  approved. The current route still includes working-placeholder copy in the
  focused price and consent viewers, and Mason's explicit visual sign-off
  remains outstanding.
- Discarded the separate `/work/checkout-concept` experiment after Mason
  rejected it in full. Its research input remains private background only and
  does not define the next visual direction.

### Site and repository

- Removed the email and LinkedIn footer from the homepage, writing index, and
  case routes. LinkedIn remains available in the primary navigation.
- Added a repository-wide sentence-case rule for reader-facing text and removed
  all-caps styling from the live application.
- Added repository layout rules that prohibit decorative numeric section
  prefixes and the tiny-left-label/large-right-headline pattern.
- Retired superseded checkout public assets, recorded the corrected
  reconstruction and focused crop provenance, and aligned the route, claim
  review, current direction, candidate queue, and asset manifest.
- Removed four unreferenced `Bundles` and `Translator` PDF/PNG exports from the
  private pricing-page screenshot set during the requested asset cleanup.
- Made manifest date validation use the repository machine's local calendar
  date so valid documentation updates are not rejected around midnight.
- Documented that visible public-image replacements require a new URL during
  live review, because hot reload does not invalidate a browser-cached asset
  served from an unchanged path.

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
