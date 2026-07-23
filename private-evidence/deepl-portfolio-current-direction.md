# Current portfolio direction

**Updated:** 2026-07-23

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
  rebuilds from `Monetization/API.png`; the bundle toggle label completes
  as `Save 16% with annual`. The old-design `Translate Tab` /
  `Bundle Tab` frames are not exhibit bases and their clipped comparison
  tables must never be exported as table evidence; complete tables exist in
  the bundle-era full page and node `12:13311` inside
  `Pages / 1512px Translator`.
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
  low effort, "Comparison table change", "Unified pricing page"). Public
  wording may say the reconstruction "extends the simplification direction
  the team had prioritized" and may show the current public page as a
  reference.
- Placeholder prices (€49.99 across the add-on-era WIP cards) are not real.
  Cleaned exhibits omit the price rows and captions say prices were unset in
  the working file. Bundle-era and Translator-grid prices (€0 / €7.49 /
  €24.99 / €49.99) are real historical prices and stay, labeled historical.
- Figma execution instructions live in
  `private-evidence/figma-pricing-exhibit-brief.md` (Codex, via Mason's
  logged-in Chrome). Exports land in
  `private-evidence/figma-exports-pricing-2026-07/`; Mason approves them
  before any site integration. Edits and exports go through the authorized
  Figma tooling on the executing machine (Chrome here; the desktop app plus
  MCP on the Windows machine).
- Use American English in public feature copy and preserve the approved
  light-touch revisions recorded in the working Figma file.

#### Outstanding exact export queue

Use Mason's logged-in Chrome profile and the historical Monetization source
file `0JYwhKhRAliGBhyl2kBnEu`. Export product frames at 2x; never export canvas
headings, notes, selection borders or neighboring frames.

- Pricing source `5:269002`: prefer the clean Translator pricing grid candidate
  `5:269713` after confirming the selected frame contains no red proposal text.
  Target filename: `pricing-translator.png`.
- Pricing source `5:270915`: prefer the clean bundle pricing grid candidate
  `5:271012` after confirming the selected frame contains no red proposal text.
  Target filename: `pricing-bundle.png`.
- Locate the matching standalone Write Pro grid in the same pricing cluster.
  It must match the selected Translator and bundle frames in viewport,
  completeness and visual treatment. Target filename: `pricing-write-pro.png`.
- Feature-awareness source `5:315615`: the exact security-expanded frame is
  already exported as `feature-awareness-security.png`.
- Detailed feature-awareness source `5:313906`: export the matching expanded
  Clarify, file-translation, formality and glossary product frames as
  `feature-awareness-clarify.png`, `feature-awareness-file-translation.png`,
  `feature-awareness-formality.png` and `feature-awareness-glossaries.png`.

Before every export, check all visible copy for American English. Red text in
these frames is Mason's suggested copy revisions (see the red-text meaning
note above), not disposable content: for these unedited evidence exports,
prefer a frame without red styling, but never discard or avoid a frame's
content merely because a suggestion is in red — escalate to Mason instead. If
the selected bundle frame uses `organisation`, the authorized light edit is
`organization`.

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

The site remains local, uncommitted and unpublished. Publication still
requires Mason's approval, followed by separate authorization for commit,
push, access changes and deployment.
