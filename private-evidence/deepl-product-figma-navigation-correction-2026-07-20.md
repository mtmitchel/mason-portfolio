# DeepL product and Figma navigation correction

Date: 2026-07-20  
Status: canonical private routing correction for future portfolio evidence work

## Why this correction exists

The completed Figma reorganization is materially unreliable as a product
taxonomy. It improved some canvas structure, but it also grouped unrelated
product families under broad page labels, preserved cross-domain duplicates in
unrelated canonical files, and left important evidence discoverable only through
frame-level inspection. Future reviewers must not infer product ownership,
initiative boundaries, lifecycle, or portfolio relevance from a canonical file
or page name.

This was a severe and avoidable process failure, not a harmless naming issue. A
reviewer who trusts the resulting structure can misattribute work across four
products, merge distinct journeys into a false story, miss relevant evidence,
and publish claims the evidence does not support.

This is a navigation failure, not permission to edit Figma. The canonical and
source files remain read-only during portfolio review.

## Product model: historical truth and current truth

During the period represented by the recovered work, DeepL Translator, DeepL
Write, DeepL Voice, and DeepL API were treated as distinct products. Plans could
be sold separately or combined in bundles. Shared pricing, account, checkout,
and administration surfaces do not collapse those products into one user
journey.

The product model evolved:

- In January 2023, DeepL introduced Write beta as a distinct free writing
  companion inspired by behavior observed among Translator users.
- In April 2024, DeepL launched Write Pro as a separately positioned paid
  writing product. The Figma-era work must be read in that historical context.
- In May 2025, DeepL described a more integrated Pro homepage and navigation
  intended to bring multiple products together while preserving Translator as a
  familiar default workflow.
- In the current model, Translator, API, and Voice have distinct plan families.
  Write Pro can be configured as an add-on to a Translator plan that does not
  already include it. This current packaging is useful evolution context, but it
  must not be projected backward onto historical Figma screens.

First-party context:

- <https://www.deepl.com/en/blog/introducing-deepl-write>
- <https://www.deepl.com/en/blog/deepl-write-pro-overview>
- <https://www.deepl.com/en/blog/new-pro-experience>
- <https://www.deepl.com/en/pro#translator>
- <https://support.deepl.com/hc/en-us/articles/360019924499-About-DeepL-plans>
- <https://www.deepl.com/en/pro-license.html>

## Binding definition of a Pro Driver

A Pro Driver is a behavior, not a product name and not a synonym for DeepL
Write Pro. It is any product experience that attempts to move a free or
lower-tier user toward a paid purchase, upgrade, add-on, or higher plan.

Search for the behavior through:

- feature previews and paid-feature entry points;
- usage, character, document, file, or plan limits;
- free-account-to-paid prompts;
- upgrade, add-on, bundle, and cross-sell messages;
- trial eligibility and no-trial states;
- plan comparison and value communication;
- account-role and existing-subscription routing;
- checkout, payment timing, tax, cancellation, and verification;
- paid activation and the return to the product task.

Do not classify anonymous-to-free-account registration as a paid Pro Driver.
It can be adjacent acquisition-funnel evidence, but it is a different conversion
step unless the visible behavior also asks the user to spend money.

## The Figma taxonomy cannot be trusted

The review corpus contains ten documented Figma files: four canonical product
files, the Checkout copy file, and five restored/source files. The four
canonical files contain 75 named pages. A secondary text sweep of the existing
245-frame Monetization PDF export confirms that page names do not describe the
actual product distribution.

### Monetization — Canonical

- `01 — Pricing & packaging` is not one product page. It mixes plan and pricing
  work for Translator, Write, Voice, and API, plus Translator + Write bundles,
  add-on prompts, responsive variants, markets, currencies, tax, and account
  routes.
- `02 — Purchase & order summary` is shared commercial infrastructure. It must
  be mapped back to the product and account state represented by each frame.
- `03 — Plans, trials & eligibility` mixes plan lifecycle, trial eligibility,
  loss-of-trial, bundles, upgrade/downgrade, sub-accounts, opt-out, currencies,
  and existing-subscriber states.
- `04 — Translation limits & bundles` is primarily Translator-related limit and
  plan evidence. Inspect every frame; do not infer that all bundle content is
  Translator-only.
- `05 — Upgrade prompts & Pro drivers` contains direct monetization behavior,
  including a Translator usage-limit prompt. Its page label does not establish
  the initiative, winning variant, product lifecycle, or metric.
- `80 — Components & content patterns` is reusable/reference evidence.
- `90 — Source map & deferred` contains Write Pro provenance and is not a
  product or export page.

The existing PDF is a failed page-wide export and is not publication evidence.
It is useful only for navigation and text discovery. Within that export:

- Translator + Write bundle headings appear across dozens of frames;
- `Add Write Pro` appears on frames 41, 68–71, 80, and 199–200;
- Voice for Meetings/Conversations product content appears on frames 81–82,
  192–193, 222, and 243–244;
- API Free/Pro/Business content appears on frames 43, 89, 110, 113, 121, 174,
  179, 184, 194, 217, 223, 226, 231, and 245;
- account-routing copy such as `Want to add DeepL Write Pro to your
  subscription?` appears in multiple plan/account variants.

Those PDF frame numbers are routing aids only. They are not Figma node IDs and
must not be cited as exact design evidence.

### Write Pro — Canonical

This is a separate historical Write product lane, not the master Pro Driver
file. It contains Write-specific hard blocks, Pro Driver experiments, free/Pro/
Translator-Pro input patterns, plan/value variants, data-security messaging,
and paid Write activation. Treat existing Translator subscriptions as account
context for cross-sell or bundling, not as evidence that Write and Translator
were one product.

### Checkout — Experiments Copy and source

Checkout is shared purchase infrastructure. Trial terms, payment timing,
reassurance, verification, order summaries, and recovery must be assigned to the
product/plan visible in the individual frame. `Continue to Translator` is
Translator-specific evidence; it cannot substantiate a Write, Voice, or API
activation story.

### Misfiled cross-domain aliases

- Account Security page `86` contains `Plan Variations`.
- Account Security page `98` contains `Final-Write` and `Landed`.
- Team Administration page `90` repeats `Plan Variations`, `Final-Write`, and
  `Landed` among unrelated deferred material.
- The restored ATE, Account Security, Archive, and mixed `Mason Portfolio`
  boards repeat parts of the same plan/Write lineage.

These are provenance aliases. They are not Account Security or Team
Administration product work, and they do not create additional portfolio
candidates.

## Correct portfolio routing

- The current Pro Driver portfolio option groups the featured Translator and
  Write upgrade prompts because Mason confirmed that they belonged to the same
  experiment wave. Preserve each product's distinct task and value proposition
  within that shared wave; grouping the evidence does not make Translator and
  Write one product.
- Keep checkout as a separate visual option unless it is deliberately used as
  supporting infrastructure inside the selected Pro Driver story.
- Voice and API belong in the product/pricing architecture inventory because
  the Figma contains their plan surfaces. No recovered Mason achievement
  currently supports promoting either to a Mason-owned case study.
- Trial eligibility, plan routing, bundles, account state, and checkout are
  shared commercial infrastructure. They can support product-specific stories
  or become focused system mini cases, but they are not a fifth product.
- Enterprise Page program work is marketing work. Exclude it from this
  Figma-backed content-design review.

## Evidence and claim ceilings

- `MON-01` (DM-1523) supports collaborative post-signup Pro Driver messaging in
  2024, but the experiment canvas is missing. A surviving Translator or Write
  frame cannot be declared the winning variant.
- `MON-03` (DM-1417) concerns an anonymous-user soft block encouraging free
  account creation. It is adjacent funnel evidence, not automatically a paid
  Pro Driver.
- Mason confirmed that the `12%` paid-conversion lift and seven-figure ARR uplift
  came from DeepL business-intelligence reporting and apply to the overall Pro
  Driver/free-to-paid experiment wave. They may be used at that scope in career
  materials; do not attach them to any visible screen or variant.
- Voice and API plan frames prove artifact existence only. They do not prove
  Mason's contribution, experiment participation, shipment, lifecycle, or
  outcome.
- Figma proves artifact/state. Recovery evidence may prove contribution,
  initiative context, or an outcome. Neither source upgrades the other
  automatically.

## Required navigation method for future reviewers

1. Read this correction before opening Figma.
2. Start from all ten files and every page inventory; never route only by page
   title.
3. Inspect each relevant top-level cluster and frame for actual product,
   behavior, account state, plan, and lifecycle clues.
4. Classify first by product: Translator, Write, Voice, API, or shared
   commercial infrastructure.
5. Classify second by behavior: preview, limit, paid prompt, add-on, bundle,
   eligibility, plan change, checkout, verification, or activation.
6. Record exact file, page, node, source alias, relationship type, evidence
   level, confidentiality risk, and claim ceiling.
7. Search the achievement recovery in both directions. Record unmatched Figma
   artifacts and unmatched achievements rather than forcing a relationship.
8. Keep Figma and restored sources read-only unless Mason separately authorizes
   a new design-editing phase.
