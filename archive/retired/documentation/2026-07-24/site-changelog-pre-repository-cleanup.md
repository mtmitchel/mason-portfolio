# Changelog

This file records meaningful local portfolio changes and separates implemented
work from publication state.

## Unreleased

Status: the six selected cases, writing collection, homepage and About copy are
rebuilt locally as story-specific pages. Repository checkpoints remain distinct
from public site publication and deployment.

### Added

- Rebuilt `/work/pricing-evolution` as a pricing-specific story with two real
  comparison pairs, visible add-on states and a four-product switcher.
- Canonical, indexable `/work/upgrade-prompts` case for the Translator and Write
  experiment wave.
- Restored `/work/checkout` case with sign-up, bundle, team and no-trial states.
- Added one account recovery and team administration case with focused
  authentication, reset, active-state, deletion-confirmation and result
  evidence.
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

- Rewrote all six case studies around their own evidence-led story order
  instead of forcing every project into the same problem, constraint,
  decisions, trade-off and outcome template.
- Moved each important content claim beside the image or excerpt that supports
  it, removed public claim-management notes and limited results to the wider
  Upgrade experiment wave and the full localization campaign.
- Reworked the writing collection around selectable samples and first-person
  writing decisions, aligned all homepage card titles with their case pages,
  and shortened About to two direct paragraphs.
- Added documented detail crops for the Upgrade, Checkout, account recovery,
  bulk deletion, report finding and customer-story evidence while preserving
  every source image unchanged.

- Combined the four subscription-checkout states into one keyboard-accessible
  switcher. Bundle, trial sign-up, team and no-trial views now share one
  full-width evidence area, load one large image at a time and use a short,
  reduced-motion-safe transition between states.
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
  site measure. The page now moves from the tabbed bundle and separate Write
  offer through add-on states, label-once tables, cumulative tiers and one
  complete offer pattern per product.

- Rebalanced the homepage to six selected entries in this order: upgrade
  prompts; pricing across four products; checkout across four purchase states;
  account recovery and team administration; localization research campaign;
  and executive ghostwriting on global mobility.
- Replaced `/work/write-pro-launch` with the canonical
  `/work/pricing-evolution` case and retained the old URL as a one-hop
  redirect.
- Replaced the universal product, collection and editorial templates with
  route-owned stories and a small shared image-comparison component.
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
- Removed visible claim-management and evidence notes from public pages;
  unsupported claims are now omitted without a reader-facing disclaimer.
- Kept the 12% conversion lift and seven-figure ARR uplift at the complete
  experiment-wave scope.
- Corrected usage-limit alt text, caption and decision copy to describe the
  visible offer-first headline and explanatory body.
- Kept Figma variables such as `{5}`, `{1}` and `{16}` in private
  documentation rather than public caption text.
- Kept the animated passport cover on the homepage and removed artwork from
  the Localyze case page.
- Expanded About with evidenced work at Localyze, SmartRecruiters, Joblift and
  Kitchen Stories; Airy remains omitted.
- Consolidated the CSS into one current style system, restored passing quiet
  text colour and kept About visible in mobile navigation.
- Renamed the shared index component to `PortfolioProjectGrid.tsx` and moved
  case-specific story data beside each route.

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
