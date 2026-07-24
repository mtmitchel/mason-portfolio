# Changelog

This file records meaningful local portfolio changes and separates implemented
work from publication state.

## Unreleased

Status: the six-entry information architecture, combined account collection
and four-product pricing-evolution case are implemented locally. Repository
checkpoints remain distinct from public site publication and deployment.

### Added

- Rebuilt `/work/pricing-evolution` as a chaptered case with a synopsis, four
  era chapters, comparison blocks, an inline offer-architecture diagram and
  eight detail crops; removed feature-awareness from the public page and parked
  its copy and 2x original for later.
- Canonical, indexable `/work/upgrade-prompts` case for the Translator and Write
  experiment wave.
- Restored `/work/checkout` case with sign-up, bundle, team and no-trial states.
- Added a three-act pricing-evolution case covering the 2023 starting point,
  the Write Pro bundle launch, the add-on direction and the four-product
  pricing family, with an explicit no-metric boundary.
- Added nine approved pricing exhibits to the deployable surface: the
  three-tab bundle selector, two complete grid/table crop pairs and one page
  each for Translator, Write, Voice and API.
- Added all five finalized feature-awareness messages as selectable HTML; the
  unordered feature set uses responsive five-, two- and
  one-column layouts instead of implying a step-by-step sequence.
- Added one account, team and security collection led by account access and MFA
  recovery; bulk deletion is one supporting section and its complete flow is
  preserved privately.
- Restored AI-content-generation evidence for the report-to-article adaptation.
- Private asset-manifest records for selected assets, derivatives, preserved
  originals and relocated unused material.
- Added a private seven-file 2x pricing evidence set covering the untouched
  bundle, Write and Voice states, the bundle comparison table, and the finished
  Translator, Write and Voice exhibits.
- Rendered-HTML coverage for canonical routes, one-hop redirects, exact source
  wording, quotation semantics, assets, row-major order, responsive image sizes
  and computed WCAG contrast.

### Changed

- Replaced the Localyze homepage still with a sharper, square
  passport-and-travel animation so its subject matches the visual size of the
  other covers. Its ending blends into its beginning, it plays only while
  visible, and it stays on the poster frame when reduced motion is enabled.
- Replaced the pricing and account-security homepage stills with silent square
  animations. Both play forward and then reverse for a calm loop without a
  visible reset, and they reuse the same visible-only and reduced-motion
  behavior as the Localyze cover. The account-security crop removes a stray
  source line and centers the complete lock-and-cards shape. The pricing crop
  removes the source's white frame so the blue field meets the card edge
  cleanly.
- Refined the homepage into media-first, natural-height project cards while
  preserving row-major navigation. The four DeepL cards use current DeepL
  artwork as topic-matching covers; their case pages retain the complete,
  uncropped interface evidence. Increased the card metadata to 16px for easier
  reading, and gave mouse hover and keyboard focus the same clear green colour
  change.

- Recomposed `/work/pricing-evolution` on a single left rail inside the 1120px
  site measure: prose holds a 740px measure and evidence renders edge-to-edge
  at full width, all aligned to the same left edge. The scrolling filmstrip
  became a stacked sequence of full-width figures; side-by-side decision
  moments stack above their evidence; the toggle states form a clean pair with
  the Translator-only page behind a text link; comparison tables stack
  vertically at readable size; captions are plain muted text without the accent
  bar; the boxed era diagram is a quiet text timeline; and the role meta block
  left the hero. The 2023 chapter gains a dated Arquivo.pt capture of the
  pre-Write DeepL Pro page as its exhibit. Wide figures also fetch
  retina-appropriate image sizes.

- Rebalanced the homepage to six selected entries in this order: upgrade
  prompts; pricing evolution across four products; subscription checkout;
  account, team and security writing; localization report campaign; and
  executive ghostwriting.
- Replaced `/work/write-pro-launch` with the canonical
  `/work/pricing-evolution` case and retained the old URL as a one-hop
  redirect.
- Extended the shared product-case renderer with ordered evidence sections and
  an optional linked coda while preserving the existing upgrade-prompt and
  checkout layouts.
- Removed count-based homepage framing so the selected index does not imply
  that Mason's broader work is reducible to a fixed number of artifact types.
- Replaced the sparse authentication-error homepage thumbnail with an
  uncropped three-frame preview of restored protection, reset guidance and one
  representative team-administration confirmation.
- Updated the existing Translator pricing rows to the current pricing-page
  wording where the same features still exist, without adding plans, rows or
  features; the historical prices and comparison structure remain intact.
- Reconstructed a duplicate of the historical Translator grid as cumulative
  tier deltas, removed placeholder prices from duplicate Write and Voice pages,
  and resolved their proposal copy while preserving the original Figma frames.
- Rebuilt the homepage card layout as a row-major three-, two- and one-column
  grid so DOM, visual, keyboard and screen-reader order match.
- Kept the route-backed Selected work/Writing switcher as quiet text navigation;
  both links are underlined and active state uses ink and weight.
- Curated `/writing` as Localyze product guidance, SmartRecruiters' 2019 Hiring
  Success guide, SmartRecruiters onboarding, Joblift renewable-energy press
  release and Kitchen Stories coq au vin editorial.
- Restored exact validated wording for all quoted excerpts and full Forbes and
  Joblift headlines. Headlines and chapter structures are labelled text rather
  than blockquotes.
- Reframed evidence notes positively around artifact, contribution, lifecycle,
  outcome and permission.
- Kept the 12% conversion lift and seven-figure ARR uplift at the complete
  experiment-wave scope.
- Corrected usage-limit alt text, caption and decision copy to describe the
  visible offer-first headline and explanatory body.
- Explained `{5}`, `{1}` and `{16}` as design-file variables replaced with
  user-specific values.
- Removed the stock-art cover from the Localyze case while retaining its public
  archive thumbnail on the homepage.
- Expanded About with evidenced work at Localyze, SmartRecruiters, Joblift and
  Kitchen Stories; Airy remains omitted.
- Consolidated the CSS into one current style system, restored passing quiet
  text colour and kept About visible in mobile navigation.
- Renamed the shared index component to `PortfolioProjectGrid.tsx` and reduced
  the active DeepL data source to the three selected product cases.

### Removed from the deployable surface

- Unsupported DeepL data-security writing entry.
- SmartRecruiters Hiring Success case route; it now redirects directly to the
  anchored writing entry.
- Placeholder-grade Write surfaces and the contradictory complete bulk-result
  frame. All originals remain preserved privately.
- Retired project arrays, exhaustive team-administration source data and unused
  portfolio-template components.
- Obsolete CSS layers and selectors that no current component uses.

### Preserved behavior

- Header placement, homepage About opening, résumé delivery and accessible
  lightbox focus, Escape, scroll-lock and focus-restoration behavior.
- One-hop redirect discipline for all retired routes.
- Natural image sizing without forced crop, cover fill or arbitrary aspect
  ratios.

### Publication state

- The approved feature-awareness copy edits and exact frame export were made in
  Mason's logged-in Chrome/Figma session. No other Figma changes were made.
- The pricing exhibits are integrated into the local deployable surface, but
  publication permission remains unresolved and no publication or deployment
  has occurred.
- The GitHub repository is private. A commit or push is a source-control
  checkpoint only; it does not publish or deploy the site.
- No public site publication, deployment or access change has occurred.
- Before publication, Mason still needs to check factual accuracy, confidential
  information, employer permission, wording and any redactions. Those checks do
  not block local implementation.
