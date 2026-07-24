# Figma work brief: pricing evolution exhibits — REVISION 7

**Created:** 2026-07-23 · **Revision 5:** 2026-07-23 (post round-1 QA) ·
**Revision 6:** 2026-07-24 (post round-2 QA) ·
**Revision 7:** 2026-07-24 (post round-3 QA by Mason)
**For:** the executing agent — the Figma desktop app plus MCP server on the
Windows machine, or Mason's logged-in Chrome profile
**Authorized by:** Mason, for this task only

**Revision 7 is a small, targeted pass — three fix categories, three
re-exports.** The round-2 defects are repaired and the round-3 exports are
structurally sound (clean edges, prices and CTAs restored, bullets
unbolded and single-line, Cluster F built correctly). Mason's round-3
review found three remaining defects: one crammed Enterprise bullet, bold
still inside comparison-table values, and table values repeating their row
label's noun. Only Clusters A, D and F change; **Clusters B, C and E are
approved as exported — do not touch their frames or re-export them.**

## Purpose and philosophy (read first)

These exhibits are for Mason's UX-writing and content-design portfolio. The
audience is recruiters and hiring managers. The goal is a clear
beginning-to-end story with three beats (history corrected by Mason,
2026-07-24): the **shipped bundle rollout** used a three-tab selector
(DeepL Translator / DeepL Translator + DeepL Write / DeepL API) with
bundles and standalone products coexisting (confusing); the **toggle
pages** — the bundle page with `Add DeepL Write Pro` ON and the Translator
page with it OFF — are the later internal simplification direction, not
the rollout state; the story ends at one product per page with Write and
Voice as add-ons and a consistent four-product pattern (Translator /
Write / Voice / API).

Accordingly: **polish is the point.** The historical frames are works in
progress — lorem ipsum, placeholder prices, duplicated copy, and unfinished
styling. Every exhibit gets finished and refined so it looks professional and
consistent. Exhibits do not need to be 100% faithful to the WIP state; they
need to tell the true story of the transition clearly and look well-crafted.

**What red text means:** red text in these files is Mason's own suggested
copy revisions — his authored candidate copy, not disposable noise. The
default is to **adopt** red suggestions: restyle them to the standard text
color and weight, keeping the wording (or the polished wording specified
below). Never delete or skip content merely because it is red. If a red line
conflicts with this brief's spec, the brief wins; log the conflict.

One working rule, for hygiene only: **edit duplicates, never the original
frames.** Duplicating keeps the raw sources available if a decision needs to
be revisited. It is not a preservation doctrine.

## Hard safety rules

- Work only through Mason's authorized Figma tooling on the executing
  machine: the Figma desktop app plus its MCP server on the Windows machine,
  or Mason's logged-in Chrome profile. Never direct Figma REST APIs,
  unrelated plugins, Playwright, or another browser.
- All edits happen inside duplicated frames in the `Portfolio exhibits
  2026-07` section. Do not edit source frames in place.
- Never run page-wide Tidy Up, Auto Layout, auto-distribute, or whole-page
  selection.
- Keep one Figma tab open; work one cluster at a time.
- Save a named version checkpoint before the first edit of each cluster and
  after finishing it (names given per cluster).
- After each bounded change: wait for save state to settle, navigate away and
  back, inspect at overview and readable zoom for overlap, clipping, or
  hidden content. If save state is uncertain, stop and recover from the last
  checkpoint.
- Do not screenshot or record anything except the specified frame exports.

## Cleanup and bases (do first, idempotent)

Record checkpoint `rev7 pre-pass` before changing anything (see the
checkpoint fallback below).

In `Portfolio exhibits 2026-07`:

- The six existing `EXHIBIT — …` frames are the rev-7 bases. Keep them; do
  not delete or re-duplicate them. If one is missing or structurally broken,
  recreate only that one as a fresh duplicate of its canonical source node
  and apply its full cluster spec.
- Only Clusters A, D and F are edited in this revision. In
  `private-evidence/source-exports/figma/pricing-evolution/` in the repository clone
  on the executing machine, move **only** the three affected round-3
  exports (`pricing-translator-cumulative.png`,
  `pricing-bundle-era-clean.png`,
  `pricing-translator-transition-clean.png`) into `superseded/` as
  `rev6-round3-*.png` before re-exporting. Leave the B, C and E exports in
  place.
- `pricing-bundle-tabs.png` (the shipped three-tab bundle view) was
  promoted from `superseded/` back into the exports folder in the repo on
  2026-07-24. It needs **no Figma action** — do not re-export it.
- Checkpoint: `rev7 cleanup done`.

**Checkpoint fallback:** round 2 established that the tooling exposes no
named-version operation. Where a named checkpoint cannot be created, record
an ISO timestamp against the checkpoint name in the completion log instead,
and never claim a checkpoint was created when it was not.

## Round-3 QA register (Mason, 2026-07-24 — every item must be fixed)

The round-1 and round-2 defects are repaired and stay repaired (bullets are
all-regular, `per month`, single-line; prices, CTAs and spacing are
restored; Cluster F is built). Mason's review of the round-3 exports found
three remaining defects:

1. **Enterprise bullet crammed to the card edge** (Clusters A, D, F). The
   no-wrap rule forced `Multilingual AI-powered business writing at scale`
   onto one line that runs into the card's right edge. The approved
   replacement string is `AI-powered business writing at scale` — apply it
   on every Enterprise card that carries the line.
2. **Bold still inside comparison-table values** (Clusters D and F tables:
   `1 million` per user, `3/5/20/100` per user, `5/10/20/30 MB`, `2,000`
   glossaries, `1` glossary). Remove all bold from table **values** —
   entire values regular weight, same reasoning as the bullets. Section
   headers (`Text translation`, `Glossary`, …) and row labels keep their
   existing weight.
3. **Table values repeat the row label's noun or qualifier** (Clusters D
   and F tables). Adopt the label-once pattern DeepL's current public
   table uses — the row label owns the noun and the qualifier; values are
   bare. Exact transforms in rule 16.

No structural change anywhere. Clusters B, C and E are approved; their
frames and exports stay untouched.

## File and node inventory

File: `https://www.figma.com/design/fdxAxs14RUKijGsznWusF3/Pricing-Grid`
(open a node with `?node-id=<id with dash>`)

| Node / location | Name | Role |
|---|---|---|
| Section `Pricing Pages` (top of canvas; round 2 logged the bundle page as `35:25257` — identify the rest by content and log them) | Full pricing pages moved in by Mason from the Monetization file | **Cluster D base** lives here: the tall bundle-era page (`35:25257`, ~1512x8442) matching `~/Projects/Mason Portfolio/private-evidence/source-exports/figma/monetization-pricing-pages/Bundles@2x.png` — toggle ON, bundle cards, complete comparison table, FAQ. **Cluster F base** lives here too: the transition-era Translator page matching `private-evidence/source-exports/figma/monetization-pricing-pages/Translator@2x.png` — same hero, toggle OFF, Translator cards €7.49 / €24.99 / €49.99, complete comparison table |
| `13:17289` | `Pro on Translate` (1512x4975) | Cluster A base. Its `Main Navigation` child (`13:17296`) is already hidden — leave hidden |
| `13:17485` | `Pro on Write` (1512x1427) | Cluster B base |
| `13:17681` / `13:17852` | Both named `Pro on Voice` (1512x1427) | One is the true Voice page (hero "Real-time voice translations for global collaboration", Voice tab active, Meetings/Conversations cards). The other is the **API page** (hero "Scale multilingual workflows with the DeepL API") — that one is the **Cluster E base**. Verify by content; log which is which |
| `3:2782` / `3:4695` | `Translate Tab` / `Bundle Tab` sections | Shipped-rollout evidence only (the "Find your perfect plan" three-tab selector). The bundle-tab grid region is already exported as `pricing-bundle-tabs.png` — no further export needed. Their comparison tables are clipped by construction; never export tables from them, and never use these frames as exhibit bases |

Reference images (expected content of each base, from Mason):

- `private-evidence/source-exports/figma/monetization-pricing-pages/Bundles@2x.png` (3024x16883) = Cluster D base
- `private-evidence/source-exports/figma/pricing-page-screenshots/Pro on Translate.png` = Cluster A base
- `private-evidence/source-exports/figma/pricing-page-screenshots/Pro on Write.png` = Cluster B base
- `private-evidence/source-exports/figma/pricing-page-screenshots/Pro on Voice (2).png` = Cluster C base
- `private-evidence/source-exports/figma/pricing-page-screenshots/Pro on Voice.png` = Cluster E base (API content)
- `private-evidence/source-exports/figma/monetization-pricing-pages/….png` = "Copy island" Voice copy drafts (source for Cluster C wording; no edits there)
- `private-evidence/source-exports/figma/monetization-pricing-pages/API.png` = historical API pricing page (source for the Cluster E Pro card content)

### Source precedence

When sources conflict: the base frame owns layout and design generation;
`private-evidence/source-exports/figma/monetization-pricing-pages/Bundles@2x.png` owns bundle-era tier facts and terminology;
Mason's red candidate copy (including the Copy island) owns wording;
`private-evidence/source-exports/figma/monetization-pricing-pages/API.png` owns the API Pro card content. The older-generation
`private-evidence/source-exports/figma/pricing-page-screenshots/1440px.png` / `1920px.png` are used **only** for the
annual-discount figure — import no other facts or thresholds from them.

Before mutating anything, record in the completion log the node IDs of: the
Cluster D base inside `Pricing Pages`, both `Pro on Voice` frames (which is
Voice, which is API), and every exhibit frame (carry them forward from the
round-1 log where already recorded and correct).

## System-wide content rules (all clusters)

These rules define the exhibit "content system." Apply them everywhere; they
are the visible evidence of Mason's craft:

1. **Cumulative tiers:** first paid card gets `What's included:`; each higher
   tier gets `Everything in <previous plan>, plus:` and lists **only its
   deltas**. Enterprise gets `Tailor to your enterprise needs:`. Parallel
   products that are not tiers (Voice Meetings vs. Conversations) get no
   cumulative headers.
2. **One line, one fact.** Cards carry the headline value ("2,000 shared
   glossaries"); exact quantities and edge details live in the comparison
   table.
3. **Sentence case; no periods on short list items; no red text; no lorem
   ipsum; no placeholder prices.** Every placeholder price block is
   replaced by its real, attested price block per rule 14 — never left
   deleted and never left as a placeholder.
4. **Standard security line everywhere:** `Maximum data security` — never
   "Enterprise-grade security protection."
5. **Feature-line style (revised rev 6):** green check; the entire line
   regular weight — no bold anywhere inside a bullet. List headers stay
   semibold. Bullets never say "per user": write `per month`. No bullet or
   audience row wraps to a second line — widen the text layer to the
   card's content width first; shorten copy only where this brief
   specifies the exact string.
6. **New header lines:** duplicate an existing feature-line text layer in the
   same card, remove the check icon, set the line semibold in the standard
   dark color, end with a colon.
7. **"Resolve red text"** = adopt Mason's red suggestion: set the layer to
   the fill and weight of its black siblings, using the exact wording
   specified below (which keeps or lightly polishes the red wording — never
   discards it).
8. **Row deletions:** remove the whole row (icon + text + tooltip) and let
   auto layout close the gap; otherwise move remaining rows up.
9. **Audience rows must differ between tiers.** Never repeat "For individuals
   and teams" on two cards.
10. **CTA logic (revised rev 6 — all clusters):** Start free trial
    (trial-eligible tiers), Buy now (highest self-serve tier), Contact
    Sales (sales-led), Sign up for free (API Free only), and no CTA on
    Write Free (source-attested). Where a comparison table exists
    (Clusters D, F), grid and table must agree. CTAs sit on one shared
    baseline across each grid.
11. **Nav rule (Clusters A, B, C, E):** `Main Navigation` hidden; the product
    tab bar (DeepL Translator / Write / Voice / API) stays visible.
12. **Bottom crop rule (Clusters A, B, C, E):** perform the crop **last**,
    after all copy and layout edits have settled. First delete every layer
    below the card row (testimonial and logo strips, banners, comparison
    tables, FAQ, footer) **regardless of whether it starts inside the
    intended bounds** — layers like "Join 500,000+ professionals…" begin
    within 64px of the cards and would otherwise export partially clipped.
    Then resize the frame to end 64px below the card row and verify the
    final 64px band contains background only. Clusters D and F stay full
    pages.
13. **Edit sequence (every cluster):** change text and visibility through
    instance overrides first; detach only the smallest affected instance
    when an override is impossible — never detach the card grid or a shared
    component. Insert header lines as rows above the first feature line.
    Finish all list edits, let auto layout settle, then crop (rule 12).
14. **Price blocks (restored, Mason 2026-07-24):** every card shows its
    attested price block between description and CTA, styled like the
    bundle-page cards (`€15.49` + `per user/month, billed annually *`).
    Attested values:
    - Translator (A, F): Starter `€7.49`, Advanced `€24.99`, Ultimate
      `€49.99`, each with `per user/month, billed annually *`; Enterprise
      `Let's talk` + `Our Sales team is ready for your call.`
      (`private-evidence/source-exports/figma/monetization-pricing-pages/Translator@2x.png`).
    - Write (B): Free `€0` (no subtext, no CTA); Write Pro `€10` +
      `per user/month, billed annually *`; Business `Let's talk` +
      `Our Sales team is ready for your call.` (`private-evidence/source-exports/figma/monetization-pricing-pages/Write.png`).
    - API (E): Free `€0` with no subtext — the `€49.99` on the source's
      Free card is a placeholder error; API Free is free. Pro `€4.99` +
      `per month + usage-based price`; Business `Custom pricing available`
      as large text, no subtext (`private-evidence/source-exports/figma/monetization-pricing-pages/API.png`).
    - Voice (C): no public price ever existed; both cards get `Let's talk`
      + `Our Sales team is ready for your call.` above Contact Sales.
    No other prices may be introduced anywhere.
15. **Card anatomy and spacing (rev 6):** title → description → price block
    → CTA → audience row → divider → feature list, using the bundle page's
    vertical rhythm. CTAs align on one shared baseline across each grid;
    where a card has no CTA (Write Free), align its audience row with its
    siblings through spacing, exactly as `private-evidence/source-exports/figma/monetization-pricing-pages/Write.png` does.
    Delete the blue account/support banner row on Clusters A, B and E
    (`Want to change your plan…`, `Want to add DeepL Write Pro…`,
    `Want DeepL API…`); keep the currency selector aligned right.
16. **Comparison-table style (new rev 7 — Clusters D and F tables):**
    - No bold anywhere inside a table **value** — entire values regular
      weight. Section headers and row labels keep their existing weight.
    - Label-once pattern: the row label owns the noun and the qualifier;
      values are bare. Exact transforms (apply in both tables wherever the
      row exists):
      - Row `Number of glossaries` → rename label to `Glossaries`; values
        `1 glossary / 1 glossary / 2,000 glossaries / 2,000 glossaries` →
        `1 / 1 / 2,000 / 2,000`
      - Row `Entries per glossary`: values `10 entries / Unlimited / …` →
        `10 / Unlimited / …`
      - Row `Monthly file translations` → rename label to
        `File translations (per user/month)`; values
        `3 per user / 5 per user / 20 per user / 100 per user` →
        `3 / 5 / 20 / 100`
      - Row `Monthly characters` → rename label to
        `Characters (per user/month)`; values `Daily limit /
        1 million per user / Unlimited / Unlimited` → `Daily limit /
        1 million / Unlimited / Unlimited` (both the Text translation and
        Text improvements sections where present)
    - `Maximum file size` values (`5 MB`, `10 MB`, …) keep their units —
      units are not label repetition — but lose their bold.
    - Check every remaining row for the same pattern; if a value repeats
      its label's noun or a per-user qualifier, strip it and log the row.

## Cluster D — Bundle-era page, cleaned (the "beginning")

Base: the existing `EXHIBIT — Bundle era pricing (refined)` frame
(originally duplicated from the bundle-era full page in `Pricing Pages`).
Checkpoints: `rev7 cluster D start` / `rev7 cluster D done`.

This page has no `Main Navigation` layer — nothing to hide. Keep the full
page: hero, toggle bar, cards, logo strip, quotes, "DeepL Pro for large
teams" banner, "Pro features for professional workflows", comparison table,
FAQ, footer.

### Toggle bar

- Keep the `Add DeepL Write Pro` toggle.
- Fix the incomplete label `Save % with annual` → `Save 16% with annual`
  (16% is the figure shown in `private-evidence/source-exports/figma/monetization-pricing-pages/Translator@2x.png` and
  `private-evidence/source-exports/figma/pricing-page-screenshots/1920px.png`; cite both in the completion log).

### Cards

Keep: titles, descriptions, real prices (€15.49 / €30.99 / €53.99 /
"Let's talk"), CTAs (see Ultimate fix below), Recommended badge.

**Discount badges (rev 5):** the `Save 20%` badge on the Starter card's
`DeepL Write Pro` group is the style template. For each of the three bundle
cards, reuse its existing `Save X%` badge where the group header has one;
otherwise duplicate the Starter badge and edit the text. Final state: three
matching badges — `Save 20%` (Starter), `Save 40%` (Advanced), `Save 60%`
(Ultimate) — placed identically on all three cards, adjacent to the price
block. Discounts never appear inside a feature list.

Every card list in this cluster follows rule 5: regular weight throughout,
`per month` phrasing, no wrapped lines.

**Starter + Write Pro**
- Audience `Up to 5 users`: keep.
- Keep the two product groups. Group 1 `DeepL Pro Starter`:
  - Maximum data security
  - 1 million characters per month
  - 5 file translations per month
  - Translate files up to 10 MB
  - 1 glossary with unlimited entries
- Group 2 `DeepL Write Pro` (its `Save 20%` badge moves next to the price —
  see Discount badges above). Four lines (data security is deduped — it is
  already in group 1):
  - Unlimited text improvements
  - Unlimited alternatives
  - All writing styles and tones
  - Set terms to never edit

**Advanced + Write Pro**
- Audience: resolve red `For individuals and teams` to black, wording
  unchanged.
- Delete both group lists and their group headers ("DeepL Pro Advanced",
  "DeepL Write Pro"; move its `Save 40%` badge next to the price — see
  Discount badges above). Replace with header
  `Everything in Starter + Write Pro, plus:` and this single list:
  - Unlimited text translation
  - 20 file translations per month
  - Translate files up to 20 MB
  - 2,000 shared glossaries
  - Single sign-on (SSO)
  - CAT tool integration

**Ultimate + Write Pro**
- Audience: replace the duplicated red `For individuals and teams` with
  `For teams and businesses` (black), on one line — widen the layer so it
  does not wrap.
- Replace both groups with header `Everything in Advanced + Write Pro, plus:`
  and (the `Save 60%` badge sits next to the price — see Discount badges
  above):
  - 100 file translations per month
  - Translate files up to 30 MB
- CTA stays `Buy now`.

**Enterprise**
- Header `Tailor to your enterprise needs:` (added in rev 6); keep all five
  lines (regular weight, no wraps) and the account-executive footer.
- **Rev 7:** replace `Multilingual AI-powered business writing at scale`
  with `AI-powered business writing at scale` — the old string runs into
  the card's right edge.

### Below the grid

- Resolve the red `Compare all features` link to standard link styling.

### Comparison table ("Find the right plan")

- Recolor **every** red text (section labels, row labels, values) to the
  color and weight of its black siblings. Wording changes only where
  specified:
  - Row `Terms to never edit` → `Set terms to never edit`
  - Column headers `Starter + Write` / `Advanced + Write` / `Ultimate + Write`
    → `Starter + Write Pro` / `Advanced + Write Pro` / `Ultimate + Write Pro`
    (cards and table must use the same plan names)
  - Ultimate column CTA `Contact Sales` → `Buy now` (must match the card)
  - Team size row, Ultimate column: `For individuals and teams` →
    `For teams and businesses` (match the card)
- **Rev 7:** apply rule 16 to the whole table — unbold every value and
  apply the label-once transforms.
- FAQ: delete the two placeholder subsections whose rows are all titled
  `Question` (`Changes to your plan` and `Using DeepL`); keep the real
  `Trials and purchases` questions. Do not write replacement questions.
- Footer stays as-is.

## Cluster A — Translator cumulative (rebuilt on `Pro on Translate`)

Base: the existing `EXHIBIT — Translator cumulative (refined)` frame
(originally duplicated from `13:17289`).
Checkpoints: `rev7 cluster A start` / `rev7 cluster A done`.

Keep: product tab bar, hero, chips, currency selector, card titles,
Recommended badge, all four descriptions. Delete the blue account banner
(rule 15). Replace the deleted placeholder price blocks with real price
blocks and CTAs (rule 14), exactly the treatment in
`private-evidence/source-exports/figma/monetization-pricing-pages/Translator@2x.png`: Starter `€7.49` + Start free trial,
Advanced `€24.99` + Start free trial (dark, Recommended), Ultimate `€49.99`
+ Buy now, Enterprise `Let's talk` + Contact Sales. Apply nav +
bottom-crop rules. All lists regular weight, `per month`, no wraps
(rule 5).

**Starter** — audience `Up to 5 users` keep. Header `What's included:`.
- Maximum data security
- 1 million characters per month
- 5 file translations per month
- Translate files up to 10 MB
- 1 glossary with unlimited entries

**Advanced** — audience `For individuals and teams` (black).
Header `Everything in Starter, plus:`. Final list:
- Unlimited text translation
- 20 file translations per month
- Translate files up to 20 MB
- 2,000 shared glossaries
- Single sign-on (SSO)
- CAT tool integration

**Ultimate** — audience `For teams and businesses` (black, one line).
Header `Everything in Advanced, plus:`. Only:
- 100 file translations per month
- Translate files up to 30 MB

**Enterprise** — audience `Available from 1,000 users` keep. Header
`Tailor to your enterprise needs:`. Keep all lines (regular weight, no
wraps) and footer. **Rev 7:** replace `Multilingual AI-powered business
writing at scale` with `AI-powered business writing at scale` — the old
string runs into the card's right edge.

## Cluster B — Write add-on page, cleaned

**Rev 7: approved as exported — no action. Spec kept for reference only.**

Base: the existing `EXHIBIT — Write add-on (refined)` frame
(originally duplicated from `13:17485`).
Checkpoints: `rev6 cluster B start` / `rev6 cluster B done`.

Keep: hero, chips, product tab bar, currency selector, titles, Recommended
badge. Delete the blue account banner (rule 15). Replace the deleted
placeholder price blocks with real price blocks and CTAs (rule 14), exactly
the treatment in `private-evidence/source-exports/figma/monetization-pricing-pages/Write.png`: Free `€0` (no subtext, no CTA);
Write Pro `€10` + `per user/month, billed annually *` + Start free trial
(dark, Recommended); Business `Let's talk` + `Our Sales team is ready for
your call.` + Contact Sales. Align Free's audience row with its siblings
through spacing (rule 15). Apply nav + bottom-crop rules. All lists regular
weight, no wraps (rule 5).

**Important correction (rev 4):** `Terms to never edit` is a real product
feature, and the bundle-era comparison table checkmarks it **in the Free
column**. It therefore belongs on the Free card — listing it under
`Everything in Free, plus:` would assert a delta the Free plan already has.
Keep the polished wording `Set terms to never edit`.

**Free card**
- Description (replaces lorem ipsum): `Basic writing improvements with daily
  limits`
- Audience `1 user only`: keep.
- Header `What's included:`.
- Replace the single wrong line `Limited text translation` with four lines
  (facts from the bundle-era table's Free column):
  - Daily character limit
  - Limited text length
  - Limited writing styles and tones
  - Set terms to never edit

**Write Pro card**
- Description: `Unlimited writing improvements with maximum data security`
- Audience: resolve red `For individuals and teams` to black.
- Header `Everything in Free, plus:`.
- Replace the six existing lines with these four (`Set terms to never edit`
  moved to Free — see the correction above):
  - Maximum data security
  - Unlimited text improvements
  - Unlimited alternatives
  - All writing styles and tones

**Business card**
- Card title: rename `Write Pro for Business` → `DeepL Write for Business`
  (the launch-era materials support `DeepL Write for Business`;
  `Write Pro for Business` is not an attested plan name).
- Description: `Manage Write access across your organization`
- Audience: resolve red `Available from 50 users` to black.
- Header `Everything in Write Pro, plus:`.
- Delete all rows except:
  - Team administration
  - Single sign-on (SSO)

## Cluster C — Voice page, cleaned

**Rev 7: approved as exported — no action. Spec kept for reference only.**

Base: the existing `EXHIBIT — Voice add-on (refined)` frame
(originally duplicated from the true Voice frame; log its node ID).
Checkpoints: `rev6 cluster C start` / `rev6 cluster C done`.

Keep: hero, chips, tab bar, card illustrations, titles, descriptions,
Contact Sales buttons, Play video links. Apply nav + bottom-crop rules. No
cumulative headers (parallel products, not tiers).

**Sales-led block (rule 14, fixes the round-2 spacing defect):** Voice
never had a public price, so both cards get `Let's talk` + `Our Sales team
is ready for your call.` in the price-block slot between the description
and the Contact Sales button, matching the Enterprise and Write for
Business cards. This restores the card's vertical rhythm — the round-2
export had Contact Sales crammed under the description because the deleted
placeholder price left a collapsed gap. Verify both cards share one CTA
baseline.

Wording draws on Mason's own Copy island drafts (`private-evidence/source-exports/figma/monetization-pricing-pages/….png`).
All lines regular weight, one line each (rule 5).

**DeepL Voice for Meetings** — eight lines (one line, one fact):
- Maximum data security
- Unlimited voice translation
- Live captions in 30+ languages
- Speaks 13 languages
- Works with team members and guests
- Automatically generated transcripts
- Single sign-on (SSO) for 50+ users
- Native Microsoft Teams integration

**DeepL Voice for Conversations** — six lines:
- Maximum data security
- Unlimited hours of voice translation
- Live on-screen translation for one-on-one conversations
- Automatically generated transcripts
- Available on iOS and Android
- Single sign-on (SSO) for 50+ users

If `Live on-screen translation for one-on-one conversations` cannot fit one
line at the card's content width, the authorized shorter string is
`Live translation for one-on-one conversations`.

## Cluster E — API page, light touch (the end-state fourth tab)

**Rev 7: approved as exported — no action. Spec kept for reference only.**

Base: the existing `EXHIBIT — API pricing (refined)` frame (originally
duplicated from the API-content frame — whichever of `13:17681` / `13:17852`
shows "Scale multilingual workflows with the DeepL API").
Checkpoints: `rev6 cluster E start` / `rev6 cluster E done`.

Keep: hero, the Translator API / Write API selector, chips, titles,
Recommended badge, CTAs (Sign up for free / Buy now / Contact Sales).
Delete the blue support banner (rule 15). Restore real price blocks
(rule 14), the treatment in `private-evidence/source-exports/figma/monetization-pricing-pages/API.png` with one correction:
Free `€0` with no subtext (the source's `€49.99` + `per user/month` on the
Free card is a placeholder error — API Free is free); Pro `€4.99` +
`per month + usage-based price`; Business `Custom pricing available` as
large text. Apply nav + bottom-crop rules. All lists regular weight, no
wraps (rule 5).

- **Free card:** header `What's included:` stays. `Access to all features
  immediately` stays deleted. List (regular weight): Access to the DeepL
  REST API / Create and manage up to 2 API keys / 500,000 character
  limit/month / 1,000 glossaries (for specific languages). The
  `Does not include:` block keeps its standard muted styling.
- **Pro card:** header `Everything in DeepL API Free, plus:` stays. List
  (regular weight):
  - Create and manage up to 25 API keys
  - No volume restrictions
  - Pay as you go (€20.00 per 1,000,000 characters) — real usage price,
    keep; must fit one line
  - Prioritized execution of requests

  The `Does not include:` block keeps its standard muted styling.
- **Business card:** keep its existing header `Everything in DeepL API Pro,
  plus:` (this card is the one place the cumulative pattern already existed
  — do not restyle it away). All five lines regular weight.

## Cluster F — Translator transition page, cleaned (built in rev 6)

Base: the existing `EXHIBIT — Translator transition (refined)` frame built
in rev 6 from the transition-era Translator full page in `Pricing Pages`
(the page matching `private-evidence/source-exports/figma/monetization-pricing-pages/Translator@2x.png`): hero
"Fast, accurate, and secure translations", `Add DeepL Write Pro` toggle set
OFF, Translator cards with real prices and CTAs, complete comparison table,
FAQ, footer.
Checkpoints: `rev7 cluster F start` / `rev7 cluster F done`.

This is the Act 2 pivot exhibit: the add-on model emerging on the grid
itself. Keep the full page — nav, tab bar, hero, toggle bar, cards, logo
strip, quotes, banner, comparison table, FAQ, footer. **This is a styling
pass, not a restructure.** Rule 1 (cumulative tiers) does **not** apply
here: the full, repetitive per-card lists are period evidence of the
density problem and must stay.

- Toggle bar: keep `Add DeepL Write Pro` OFF. If the annual label is
  incomplete (`Save % with annual`), complete it to `Save 16% with annual`.
- Cards: keep real prices (€7.49 / €24.99 / €49.99 / `Let's talk`) and CTAs
  (Start free trial / Start free trial / Buy now / Contact Sales).
- Resolve every red line to standard styling, adopting Mason's wording.
- Apply rule 5 styling to all card lists: regular weight, `per month`
  phrasing, no wrapped lines. Make no other list content change except the
  rev-7 Enterprise fix: replace `Multilingual AI-powered business writing
  at scale` with `AI-powered business writing at scale`.
- Comparison table: recolor all red text to the color and weight of its
  black siblings, wording preserved. Table and cards must agree on plan
  names, prices and CTAs. **Rev 7:** apply rule 16 to the whole table —
  unbold every value and apply the label-once transforms.
- FAQ: delete placeholder subsections whose rows are all titled `Question`;
  keep the real questions. Footer stays.
- Export as `pricing-translator-transition-clean.png` (full page).

## Exports

Destination: `private-evidence/source-exports/figma/pricing-evolution/` in the
repository clone on the executing machine.

PNG at **2x**, exact frame node only, no canvas artifacts. Verify pixel size
= 2x frame size.

**Export verification rule:** no claim goes into the log without opening
the exported PNG itself. For every export, inspect the actual file at
readable zoom and record pass/fail per check:

- Top edge: no `Main Navigation` on A / B / C / E; product tab bar present.
  D and F are full pages and keep their site nav.
- All four edges: no dark bands, columns, or slivers; clean page background.
- Every card: headers present and correctly positioned, feature lists
  complete per spec, no red text, no lorem ipsum, no placeholder prices.
- Rev-6 style checks on every card: no bold inside any bullet; no
  "per user" inside any bullet; no bullet or audience row wrapped to a
  second line; price block present with its exact attested value (rule
  14); CTAs on one shared baseline per grid; consistent
  description-to-price-to-CTA spacing; no blue account/support banner on
  A / B / E.
- Cluster D additionally: comparison table fully recolored, table and cards
  use identical plan names and CTAs, FAQ placeholders gone, three matching
  `Save X%` badges next to the prices.
- Cluster F additionally: toggle OFF with `Save 16% with annual`, full
  per-card lists retained (no cumulative headers), comparison table fully
  recolored and consistent with the cards, FAQ placeholders gone.
- Rev-7 checks (A, D, F): Enterprise card reads `AI-powered business
  writing at scale` with visible breathing room to the card edge; no bold
  anywhere inside a comparison-table value; no table value repeats its row
  label's noun or a per-user qualifier (rule 16 transforms applied —
  `Glossaries` row shows bare `1 / 1 / 2,000 / 2,000`, file-translation and
  character rows show bare values under qualified labels).

A failed check blocks that export from being listed as complete; fix the
frame and re-export instead of logging the failure as done.

Before-evidence: **already covered by Mason's own exports** in
`~/Projects/Mason Portfolio/private-evidence/source-exports/figma/monetization-pricing-pages/` and `private-evidence/source-exports/figma/pricing-page-screenshots/` — do not
re-export the originals unless a specific file below fails.

| File | Source | Rev 7 action |
|---|---|---|
| `pricing-bundle-era-clean.png` | Cluster D exhibit (full page) | **Re-export** after fixes |
| `pricing-translator-transition-clean.png` | Cluster F exhibit (full page) | **Re-export** after fixes |
| `pricing-translator-cumulative.png` | Cluster A exhibit | **Re-export** after fixes |
| `pricing-write-addon-clean.png` | Cluster B exhibit | Approved — leave as-is |
| `pricing-voice-clean.png` | Cluster C exhibit | Approved — leave as-is |
| `pricing-api-clean.png` | Cluster E exhibit | Approved — leave as-is |
| `pricing-bundle-tabs.png` | Bundle Tab grid region (shipped rollout) | Already in repo — no Figma action |

Final consistency check across A, B, C, E exports: same 1512px family,
product tab bar at top, no main navigation, real prices and CTAs per rules
14–15, no red text, no lorem ipsum, no placeholder prices, clean bottom
edge below the card row. Clusters D and F: full pages, no red text
anywhere, tables and cards use identical plan names, prices and CTAs.

## Completion log

Create or update `export-log.md` in the destination folder:

- Node IDs: Cluster D base within `Pricing Pages`; which `Pro on Voice` node
  is Voice vs API; all six exhibit frames; the section.
- Reconstruction decisions applied (Ultimate audience rows, merged glossary
  lines, Voice list rebuild with split lines and SSO threshold, Write Pro
  delta tightened to four lines with `Set terms to never edit` on Free,
  `DeepL Write for Business` rename, `Save 20% / 40% / 60%` price-adjacent
  badges with no discount feature lines, `Save 16%` fill-in with its two
  image sources, FAQ placeholder removal, API Pro rebuild from
  `private-evidence/source-exports/figma/monetization-pricing-pages/API.png`).
- Rev-6 style decisions applied (all-regular bullets, `per month` phrasing,
  wrap fixes with any authorized shorter strings used, restored price
  blocks with their attested values and sources, Voice and Enterprise
  `Let's talk` blocks, banner removals, shared CTA baselines) and the
  Cluster F source node ID.
- Rev-7 decisions applied: the Enterprise string replacement on A, D and F;
  table-value unbolding; every rule-16 label-once transform, including any
  additional rows found repeating their label and logged per rule 16.
- Checkpoint names; exported files with pixel dimensions and source node IDs;
  override-vs-detach decisions; anything not completed exactly as specified.

Do not touch `site/`, do not commit anything, and do not publish, share, or
change access on the Figma file.
