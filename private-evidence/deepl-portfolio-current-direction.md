# Current portfolio direction

**Updated:** 2026-07-24

**Status:** Current-decision owner

This file records the current portfolio selection, route, evidence and claim
decisions. Current disk evidence and the private asset manifest remain the
source of truth for the actual implementation and provenance details.

## Selected work

The homepage contains six selected entries in this order:

1. **Upgrade prompts across Translator and Write** — `/work/upgrade-prompts`
2. **Write Pro launch, pricing and feature awareness** — `/work/write-pro-launch`
3. **Subscription checkout** — `/work/checkout`
4. **Account, team and security writing** — `/work/account-team-security`
5. **Localization report campaign** — `/work/report-campaign`
6. **Executive ghostwriting** — `/work/localyze-executive-ghostwriting`

The homepage is a curated index rather than a claim that Mason's work can be
reduced to six artifacts. Upgrade prompts and the Write Pro website launch are
separate stories. Account access, team administration and account security are
one collection; bulk user deletion is one supporting example inside it, never
a standalone homepage case. The homepage uses a row-major grid, so visual, DOM,
keyboard and screen-reader order all follow this list.

`Selected work` and `Writing` are underlined route-backed links. They are not a
client-side tab control and there is no `All` view or collection tile.

## Writing collection

`/writing` contains five readable entries:

1. Localyze 2.0 announcement and beginner's guide
2. SmartRecruiters' **The Definitive Guide to Hiring Success**
3. SmartRecruiters onboarding guide
4. Joblift renewable-energy press release
5. Kitchen Stories coq au vin editorial

The unsupported DeepL data-security entry is omitted. The Hiring Success entry
identifies Mason as writer of the 2019 edition, labels its chapter sequence as
structure rather than quotation and explains that the current gated guide has
since been updated. Airy remains omitted.

Quotation styling is reserved for exact source text. Headlines and chapter
structures are labelled text. The published Forbes, Localyze, SmartRecruiters,
Joblift, Kitchen Stories and report-campaign samples must remain identical to
their validated source wording unless a visible ellipsis or other editorial
notation makes a change explicit.

## Product-case notes

### Upgrade prompts

- The canonical route is `/work/upgrade-prompts` and is indexable.
- `/work/pro-driver-experiments`, `/work/translator-upgrade` and
  `/work/write-pro` redirect directly to it.
- The Translator and Write prompts belong to the same Pro Driver experiment
  wave and can be presented as one case.
- The 12% paid-conversion lift and seven-figure ARR uplift belong to the whole
  experiment wave.
- The public Write comparison uses the cleaner illustrated Free and Translator
  Pro pair. The placeholder-grade full surfaces remain preserved.
- `{5}`, `{1}` and `{16}` in the document frames are design-file variables that
  are replaced with user-specific values; captions must say so.

### Write Pro launch, pricing and feature awareness

- Keep this work separate from the upgrade-prompt experiment case.
- **Scope decision 2026-07-23:** the case is being restructured around the
  pricing-evolution arc — Translator + Write Pro bundles and standalone
  products (confusing), then Write sold as an add-on with one product per
  pricing page, then Voice as an enterprise add-on sold through Contact
  Sales, ending at the consistent four-product family (Translator / Write /
  Voice / API). The API page is in scope as the end-state fourth tab.
  Feature awareness remains a secondary section of the same case.
- **Polish decision (Mason, 2026-07-23):** exhibits are portfolio material
  for recruiters, not historical preservation. All exhibits — including the
  bundle-era "beginning" — are refined in duplicated frames: red text
  resolved, lorem ipsum replaced, placeholder prices removed, copy tightened,
  consistency fixed. Exhibits need not be 100% faithful to WIP states; they
  must tell the true transition story and look professional. Duplicates-only
  editing is working hygiene, not a preservation rule. The repo-wide preservation, no-invention and
  claim-ceiling rules were removed on 2026-07-23 at Mason's direction; do
  not reintroduce them.
- **Narrative spine (evidence-grounded):** the bundle cards repeat an
  identical DeepL Write Pro feature block across all three tiers because
  Write Pro had no tiers; the cumulative pattern makes that redundancy
  visible, and the add-on model resolved it. The API Business card already
  used "Everything in DeepL API Pro, plus:" — the cumulative pattern existed
  in embryo in the working file.
- `Terms to never edit` is a real Write feature, checkmarked in the **Free**
  column of the bundle-era comparison table — so it appears on the Free
  card, never in a `plus:` delta list. Public copy uses the polished form
  `Set terms to never edit`.
- Voice for Meetings and Voice for Conversations are parallel use-case
  products, not tiers. The case may say the cumulative tier pattern does not
  apply to them; it must not force them into a tier comparison.
- **Exhibit consistency rule (rev 3, 2026-07-23):** the four product-page
  exhibits use the `Pro Subscribers` 1512px add-on-era frames
  (`Pro on Translate` `13:17289`, `Pro on Write` `13:17485`, the true
  `Pro on Voice`, and the API-content frame), each with `Main Navigation`
  hidden (mis-sized in one frame, shows an account avatar in the others),
  the product tab bar visible, and the frame cropped just below its card
  row. The bundle-era exhibit stays a full page. The cumulative Translator
  exhibit shows the Pro-subscriber view (Starter / Advanced / Ultimate /
  Enterprise, no Free column). Recorded reconstruction decisions: Ultimate
  audience rows become `For teams and businesses`; glossary lines merge into
  `2,000 shared glossaries`; Voice lists rebuild from Mason's Copy island
  drafts with one fact per line and the 50+-user SSO threshold; the Write
  Pro delta tightens to four lines (`Set terms to never edit` sits on Free);
  the Write Business card is `DeepL Write for Business`; the API Pro card
  rebuilds from `Monetization/API.png`; discounts follow the discount
  decision below. The old-design `Translate Tab` /
  `Bundle Tab` frames are not exhibit bases and their clipped comparison
  tables must never be exported as table evidence; complete tables exist in
  the bundle-era full page and node `12:13311` inside
  `Pages / 1512px Translator`. The Bundle Tab **grid region** (tabs plus
  cards, above the clipped table) is legitimate shipped-era before-evidence
  and is already exported as `pricing-bundle-tabs.png` (3840x2826, clean
  edges, real prices, discounts as price subtext) — promoted back from
  `superseded/` on 2026-07-24.
- **Bundle-era history correction (Mason, 2026-07-24):** the shipped bundle
  rollout used the "Find your perfect plan" **three-tab selector** — DeepL
  Translator / DeepL Translator + DeepL Write / DeepL API — attested by
  `figma screenshots/1920px.png`, `1440px.png` and the research's June 2024
  `Starter/Advanced/Ultimate + Write` plan types in the live pricing code.
  The "Add DeepL Write Pro" toggle pages are **not** the rollout state:
  their four-product tab bar includes DeepL Voice, which postdates the
  bundle rollout, and Mason confirms they are the later internal
  simplification direction (Write still a separate product; the team wanted
  a cleaner way to sell it as an add-on). The toggle pages therefore slot
  as the pivot beat between the shipped bundle era and the add-on era —
  never presented as the bundle rollout itself.
- Provenance (updated 2026-07-23): the full bundle-era pricing pages
  originated in the main Monetization Figma file and were moved by Mason into
  the Pricing Grid file (`fdxAxs14RUKijGsznWusF3`), section `Pricing Pages`.
  Mason's own 2x exports live in `Monetization/` at the repository root
  (tracked): `Bundles@2x.png` (3024x16883, complete bundle grid with the
  "Add DeepL Write Pro" toggle, complete comparison table, real bundle prices
  €15.49 / €30.99 / €53.99), `Translator@2x.png` (3024x15679, complete
  transition-era Translator page and comparison table), plus 1x `Write.png`,
  `Voice.png`, `API.png` and the `….png` "Copy island" Voice copy iterations.
  The bundle-page toggle is period evidence that the add-on model emerged on
  the bundle grid itself. **Red text meaning (Mason, 2026-07-23):** red text
  in these working files is Mason's own suggested copy revisions — candidate
  copy he authored, not disposable WIP. The default is to adopt red
  suggestions in the exhibits (restyled to standard colors), and red content
  must never be discarded merely for being red. Exhibits still display no
  red styling.
- DeepL's current public pricing page uses a cumulative "Everything in X,
  plus" tier pattern. The team's improvement board documents a simplification
  backlog ("Reduce number of features in pricing grid" rated high impact /
  low effort, "Comparison table change", "Unified pricing page"). This is
  internal context that anchors the narrative; none of it enters public copy.
- **Discount decision (Mason, 2026-07-23):** discounts are price information,
  never feature bullets. The three bundle cards carry matching `Save 20%` /
  `Save 40%` / `Save 60%` badges next to the price; no `X% off` line ever
  appears inside a feature list. The bundle toggle label completes as
  `Save 16% with annual`.
- **Price display (revised by Mason, 2026-07-24):** every exhibit shows its
  real, attested prices; omitting prices was rejected as absurd. Attested
  values: Translator Starter/Advanced/Ultimate €7.49 / €24.99 / €49.99
  per user/month billed annually (deep-research report 2023 baseline and
  `Monetization/Translator@2x.png`); Write Free €0, Write Pro €10 per
  user/month billed annually, Write for Business "Let's talk"
  (`Monetization/Write.png`, toggle `Save 33% with annual`); API Free €0,
  API Pro €4.99 "per month + usage-based price" (`Monetization/API.png`
  and the research's €4.99 + €0.00002/character baseline), API Business
  "Custom pricing available"; bundles €15.49 / €30.99 / €53.99. The €49.99
  on the API Free card in `Monetization/API.png` is a placeholder error —
  API Free is free. Voice web prices were never public (research: not
  established); Voice cards use the sales-led "Let's talk" + "Our Sales
  team is ready for your call." block instead of a price. Captions never
  call a price historical or current.
- **Style system (Mason, 2026-07-24):**
  - Feature bullets carry no bold anywhere — entire lines regular weight.
    Mixed bolding reads as sloppy. List headers stay semibold.
  - Feature bullets never say "per user" — `per user/month` becomes
    `per month`; per-user billing lives in the price subtext only.
  - No feature bullet or audience row may wrap to a second line. Fix text
    box width first, shorten copy second.
  - Card anatomy is uniform: title → description → price block → CTA →
    audience row → divider → feature list, with CTAs on a shared baseline
    across each grid. The subscriber account banners on the Translator,
    Write and API frames are removed; the currency selector stays.
  - CTA logic applies to every exhibit: Start free trial (trial-eligible),
    Buy now (highest self-serve), Contact Sales (sales-led), Sign up for
    free (API Free), no CTA on Write Free (source-attested).
  - **Comparison-table style (Mason, 2026-07-24):** table values carry no
    bold — same reasoning as the bullets. Row labels own the qualifiers and
    values never repeat the label's noun or unit, matching DeepL's current
    public table pattern: `Glossaries` → `1 / 1 / 2,000 / 2,000` (not
    "1 glossary / 2,000 glossaries"); `Entries per glossary` → `10 /
    Unlimited / …`; `File translations (per user/month)` → `3 / 5 / 20 /
    100`; `Characters (per user/month)` → `Daily limit / 1 million /
    Unlimited / Unlimited`. Applies to both toggle-page tables (bundle and
    transition) — they are one internal design direction whose point was
    simplification; the verbose "before" lives in the shipped-era tabbed
    asset.
  - **Enterprise bullet fix (Mason, 2026-07-24):** `Multilingual AI-powered
    business writing at scale` runs to the card edge as one line; the
    approved string is `AI-powered business writing at scale` wherever the
    Enterprise card appears (Translator cumulative, bundle page, transition
    page).
- Figma execution instructions live in
  `private-evidence/figma-pricing-exhibit-brief.md` (single execution owner
  for all exhibit edits and exports; the older Chrome-profile export queue is
  retired). Exports land in
  `private-evidence/figma-exports-pricing-2026-07/`; Mason approves them
  before any site integration. Edits and exports go through the authorized
  Figma tooling on the executing machine (Chrome here; the desktop app plus
  MCP on the Windows machine).
- Use American English in public feature copy and preserve the approved
  light-touch revisions recorded in the working Figma file.

#### Public presentation model (Mason, 2026-07-23)

- Public captions describe content and design decisions only — what a card,
  list or page communicates and why. No public copy addresses artifact
  provenance, status or lifecycle. Banned anywhere in `site/` user-visible
  copy for this case: reconstruction, recreated, historical, internal, WIP,
  work-in-progress, working file, not shipped, proof, mockup.
- The case narrative is Mason's first-person professional account of the
  work, dated loosely in prose ("When Write Pro launched…", "As Voice
  arrived…"). No forensic dates, no citations, no side-by-side
  internal-versus-shipped comparisons.
- `deep-research-report.md` is the accuracy backstop for every dated or
  factual statement in the narrative; it stays in the repo and none of its
  citations or archive references enter public copy.
- The live DeepL pricing page gets exactly one closing line with a link to
  deepl.com/pro — no comparison screenshot, no causal claim, no "they later
  adopted" framing.
- If provenance ever comes up in conversation, that is Mason's verbal layer,
  not the site's job.

#### Exhibit set (three acts; expanded by Mason, 2026-07-24)

Build the robust, complete set first; Mason cuts back later if he wants.

- **Act 1 (2023) — narrative only, no exhibit:** one Translator grid, API
  priced separately, Write free. Pricing was simple because the product was.
  No 2023-era artifact exists in the working files; Act 1 stays prose.
- **Act 2 (the problem) — six exhibits in two beats (re-slotted
  2026-07-24 per the bundle-era history correction):**
  - *Shipped bundle era:* the three existing public grids
    (`pricing-translator.png`, `pricing-write-pro.png`,
    `pricing-bundle.png`, originally exported from Monetization file
    `0JYwhKhRAliGBhyl2kBnEu` nodes `5:269713`, the matching Write Pro grid,
    and `5:271012`) presented as coexisting grids, plus
    `pricing-bundle-tabs.png` — the shipped "Find your perfect plan"
    three-tab selector with the bundle tab active. This beat carries the
    multiplicity story: three tabs, three ways to buy, verbose period copy
    left verbatim as before-evidence.
  - *Internal simplification direction (the pivot):* the cleaned full
    bundle page (`pricing-bundle-era-clean.png`, toggle ON) as the density
    centerpiece — the same Write Pro block repeated across three tiers —
    and the cleaned transition-era Translator full page
    (`pricing-translator-transition-clean.png`, Cluster F, toggle OFF).
    One design direction, polished as Mason's work: the add-on model
    emerging on the grid itself, real prices, complete label-once
    comparison tables.
- **Act 3 (the simplification) — four exhibits:** the cleaned 1512px add-on
  era frames — Translator cumulative, Write add-on, Voice, API — one page
  per product, cumulative tiers, add-ons, real prices and CTAs restored
  per the style system above.
- **Comparison tables:** only two exist in the sources — on the bundle full
  page and the transition-era Translator full page. The Write, Voice and
  API source pages have none (verified against `Monetization/Write.png`,
  `Voice.png`, `API.png`: cards → logos → quotes → FAQ → footer). The case
  never fabricates a table for a product that had none.
- **Coda:** one line plus the deepl.com/pro link. Feature awareness stays a
  secondary section of the same case with its existing image.
- **Rename decision (pending Phase 2 implementation):** the case moves to
  `/work/pricing-evolution` with card title
  `Simplifying pricing across four products`; `/work/write-pro-launch`
  becomes a redirect stub following the existing retired-route pattern.

#### Phase 2 implementation decisions (Mason approved scope, 2026-07-24)

- **Full pages are not shipped to the site.** The bundle page (3024x15231)
  and transition page (3024x14159) are unusable as inline `StoryImage`s and
  the site rules ban aspect-ratio tricks that hide evidence. Each full page
  ships as two display crops cut on verified blank bands (generated
  2026-07-24, in `private-evidence/figma-exports-pricing-2026-07/
  site-display/`): a grid crop (nav, hero, toggle, complete card row) and a
  complete "Find the right plan" comparison-table crop. The full-page PNGs
  remain repository evidence.
- **Public asset mapping** — new folder `site/public/work/pricing-evolution/`;
  the old `write-pro-launch/` assets that stay in use move there and the
  folder retires with the redirect stub:

  | Public file | Source | Size |
  |---|---|---|
  | `pricing-translator.png` | existing site asset (moves) | 3840x1459 |
  | `pricing-write-pro.png` | existing site asset (moves) | 2482x1233 |
  | `pricing-bundle.png` | existing site asset (moves) | 2880x2099 |
  | `pricing-bundle-tabs.png` | exports folder | 3840x2826 |
  | `pricing-bundle-era-grid.png` | `site-display/` | 3024x3300 |
  | `pricing-bundle-era-table.png` | `site-display/` | 3024x5300 |
  | `pricing-translator-transition-grid.png` | `site-display/` | 3024x2790 |
  | `pricing-translator-transition-table.png` | `site-display/` | 3024x4800 |
  | `pricing-translator-cumulative.png` | exports folder | 3024x2392 |
  | `pricing-write-addon-clean.png` | exports folder | 3024x2208 |
  | `pricing-voice-clean.png` | exports folder | 3024x2654 |
  | `pricing-api-clean.png` | exports folder | 3024x2776 |
  | `feature-awareness-security.png` | existing site asset (moves) | 3024x1431 |

- **Cover proposal:** the Translator cumulative grid (Act 3) — the cleanest
  single expression of the craft. Mason judges on the built page and may
  swap it.
- **Case context line:** `DeepL · Pricing evolution`.
- **Next-chain updates:** `upgradePromptsProject.next` →
  `/work/pricing-evolution`; the pricing case's `next` stays
  `/work/checkout`.
- **Exhibit order on the page** follows the three acts: Act 2 beat one
  (three grids + tabbed view), Act 2 beat two (bundle grid/table +
  transition grid/table crops), Act 3 (four product pages), then the
  feature-awareness secondary section, then the coda link.

#### Feature awareness parked (Mason, 2026-07-24)

Cut from the `/work/pricing-evolution` case on 2026-07-24 (Mason's decision).
The five flow strings are preserved here verbatim for a future home:

1. **Maximum data security** — Keep your sensitive information protected. DeepL Pro safeguards your data with enterprise-grade encryption, and your texts are never stored without your consent.
2. **Clarify** — Clarify improves translations by asking questions when your text is ambiguous, then adjusting based on your answers. Currently available for German ↔ English translations.
3. **Translate entire files in a single click** — Say goodbye to endless copy and paste. Translate entire files in just a few clicks — formatting included.
4. **Set the right tone for every message** — Not every conversation sounds the same. Set your translation to formal or informal to match the situation.
5. **Glossaries** — Consistency matters in translation. Create and manage a personal glossary so key terms are translated your way, every time. With DeepL Pro, upload glossaries of up to 10 MB.

The single exported visual previously published as
`site/public/work/pricing-evolution/feature-awareness-security.png` was
removed from the public folder; the 2x original remains at
`private-evidence/figma-exports-2026-07-22/write-pro-launch/feature-awareness-security-2x.png`.
Figma node `5:313906` holds four unexported expanded states for a future home.

### Account, team and security writing

- Lead with account access and MFA recovery, not bulk deletion.
- Keep account security and team administration together as a focused writing
  collection. Bulk deletion is one team-administration section inside it.
- The selected security sequence shows code entry, an unsuccessful-code state,
  reset acknowledgement and restored protection.
- The bulk-deletion example uses fictional `domain.com` accounts and only the
  documented confirmation and result crops.

### Subscription checkout

- The public case contains four preserved product frames: sign-up continuity,
  bundle checkout, twenty-seat team checkout and no-trial checkout.
- The artifact supports the conditional content model across product, price,
  seats, eligibility, timing and consent.
- Trial-eligibility and global-pricing aliases redirect directly to checkout.

## Editorial-case notes

### Localization report campaign

- Keep the report, article and customer-story formats in the sequence
  `report → article → customer stories`.
- The restored AI-content-generation page is the visual evidence for the
  article adaptation.
- Report, article and HubSpot excerpts use the exact validated source wording.
- Mason's supported contribution is writing, editing, structuring and
  repurposing across the formats.

### Localyze executive ghostwriting

- Mason ghostwrote three Forbes Business Council articles for Localyze CEO
  Hanna Marie Asmussen.
- The public byline belongs to Hanna Marie Asmussen.
- Use the complete published headlines and exact article excerpts.
- Keep the public archive thumbnail on the homepage only; the case page is led
  by the published writing, not stock artwork or a decorative collage.

## Evidence and publication boundary

`private-evidence/portfolio-asset-manifest.json` records public paths, source
originals, dimensions, crops, permissions, captions, alt text and relocated
unused material. Retired source code and assets remain preserved under
`private-evidence/` and are not deployable.

The repository is private and synced across Mason's machines; the site is not
deployed. Publication still requires Mason's approval, followed by separate
authorization for access changes and deployment.
