# Figma work brief: pricing evolution exhibits — REVISION 4

**Created:** 2026-07-23 · **Revision 4:** 2026-07-23 (post peer review)
**For:** Codex GPT 5.6 Sol, operating Figma through Mason's logged-in Chrome profile
**Authorized by:** Mason, for this task only

## Purpose and philosophy (read first)

These exhibits are for Mason's UX-writing and content-design portfolio. The
audience is recruiters and hiring managers. The goal is a clear
beginning-to-end story: DeepL's pricing page evolved from bundles and
standalone products (confusing) to one product per page with Write and Voice
as add-ons (simpler), ending with a consistent four-product pattern
(Translator / Write / Voice / API).

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

- Work only in Mason's logged-in Chrome profile. Do not use the Figma MCP,
  any Figma API, plugins, Playwright, or another browser for edits or exports.
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

## Cleanup of earlier revisions (do first, idempotent)

Save a named checkpoint `rev4 pre-cleanup` before deleting anything.

In `Portfolio exhibits 2026-07`, if present:

- Delete **every** exhibit duplicate from earlier revisions (all `EXHIBIT — …`
  frames and any `BEFORE EXPORT — …` duplicates). The `rev4 pre-cleanup`
  checkpoint and version history preserve them. Every cluster below starts
  from a **fresh duplicate of its canonical source node**, so no stale
  revision-2 or revision-3 edits leak into the new exhibits.
- In `~/Projects/Mason Portfolio/private-evidence/figma-exports-pricing-2026-07/`,
  move any stale exports into `superseded/`.
- Checkpoint: `rev4 cleanup done`.

## File and node inventory

File: `https://www.figma.com/design/fdxAxs14RUKijGsznWusF3/Pricing-Grid`
(open a node with `?node-id=<id with dash>`)

| Node / location | Name | Role |
|---|---|---|
| Section `Pricing Pages` (top of canvas; node IDs not yet recorded — identify by content and log them) | Full pricing pages moved in by Mason from the Monetization file | **Cluster D base** lives here: the tall bundle-era page (~1512x8442) matching `~/Projects/Mason Portfolio/Monetization/Bundles@2x.png` — hero "Fast, accurate, and secure translations", "Add DeepL Write Pro" toggle, bundle cards, complete comparison table, FAQ |
| `13:17289` | `Pro on Translate` (1512x4975) | Cluster A base. Its `Main Navigation` child (`13:17296`) is already hidden — leave hidden |
| `13:17485` | `Pro on Write` (1512x1427) | Cluster B base |
| `13:17681` / `13:17852` | Both named `Pro on Voice` (1512x1427) | One is the true Voice page (hero "Real-time voice translations for global collaboration", Voice tab active, Meetings/Conversations cards). The other is the **API page** (hero "Scale multilingual workflows with the DeepL API") — that one is the **Cluster E base**. Verify by content; log which is which |
| `3:2782` / `3:4695` | `Translate Tab` / `Bundle Tab` sections | Not used. Their comparison tables are clipped by construction; never export tables from them |

Reference images (expected content of each base, from Mason):

- `Monetization/Bundles@2x.png` (3024x16883) = Cluster D base
- `figma screenshots/Pro on Translate.png` = Cluster A base
- `figma screenshots/Pro on Write.png` = Cluster B base
- `figma screenshots/Pro on Voice (2).png` = Cluster C base
- `figma screenshots/Pro on Voice.png` = Cluster E base (API content)
- `Monetization/….png` = "Copy island" Voice copy drafts (source for Cluster C wording; no edits there)
- `Monetization/API.png` = historical API pricing page (source for the Cluster E Pro card content)

### Source precedence

When sources conflict: the base frame owns layout and design generation;
`Monetization/Bundles@2x.png` owns bundle-era tier facts and terminology;
Mason's red candidate copy (including the Copy island) owns wording;
`Monetization/API.png` owns the API Pro card content. The older-generation
`figma screenshots/1440px.png` / `1920px.png` are used **only** for the
annual-discount figure — import no other facts or thresholds from them.

Before mutating anything, record in the completion log the node IDs of: the
Cluster D base inside `Pricing Pages`, both `Pro on Voice` frames (which is
Voice, which is API), and every fresh exhibit duplicate.

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
   ipsum; no placeholder prices.** Delete every `€49.99` +
   `per user/month, billed annually *` placeholder block. Real historical
   prices (bundle page: €15.49 / €30.99 / €53.99) stay.
4. **Standard security line everywhere:** `Maximum data security` — never
   "Enterprise-grade security protection."
5. **Feature-line style:** green check; bold the differentiating quantity or
   key phrase, which may fall mid-line (`Translate files up to **10 MB**`);
   rest regular (match each card's existing styling).
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
10. **CTA logic (Clusters C, D, E only):** Start free trial (trial-eligible
    tiers), Buy now (highest self-serve tier), Contact Sales
    (Enterprise/sales-led). Where a comparison table exists (Cluster D),
    grid and table must agree. Clusters A and B are subscriber-view frames
    with **no card CTAs** — that is intentional; do not add buttons.
11. **Nav rule (Clusters A, B, C, E):** `Main Navigation` hidden; the product
    tab bar (DeepL Translator / Write / Voice / API) stays visible.
12. **Bottom crop rule (Clusters A, B, C, E):** perform the crop **last**,
    after all copy and layout edits have settled. First delete every layer
    below the card row (testimonial and logo strips, banners, comparison
    tables, FAQ, footer) **regardless of whether it starts inside the
    intended bounds** — layers like "Join 500,000+ professionals…" begin
    within 64px of the cards and would otherwise export partially clipped.
    Then resize the frame to end 64px below the card row and verify the
    final 64px band contains background only. Cluster D stays a full page.
13. **Edit sequence (every cluster):** change text and visibility through
    instance overrides first; detach only the smallest affected instance
    when an override is impossible — never detach the card grid or a shared
    component. Insert header lines as rows above the first feature line.
    Finish all list edits, let auto layout settle, then crop (rule 12).

## Cluster D — Bundle-era page, cleaned (the "beginning")

Base: duplicate of the bundle-era full page in `Pricing Pages`, renamed
`EXHIBIT — Bundle era pricing (refined)`.
Checkpoints: `rev4 cluster D start` / `rev4 cluster D done`.

This page has no `Main Navigation` layer — nothing to hide. Keep the full
page: hero, toggle bar, cards, logo strip, quotes, "DeepL Pro for large
teams" banner, "Pro features for professional workflows", comparison table,
FAQ, footer.

### Toggle bar

- Keep the `Add DeepL Write Pro` toggle.
- Fix the incomplete label `Save % with annual` → `Save 16% with annual`
  (16% is the figure shown in `Monetization/Translator@2x.png` and
  `figma screenshots/1920px.png`; cite both in the completion log).

### Cards

Keep: titles, descriptions, real prices (€15.49 / €30.99 / €53.99 /
"Let's talk"), CTAs (see Ultimate fix below), Recommended badge.

**Starter + Write Pro**
- Audience `Up to 5 users`: keep.
- Keep the two product groups. Group 1 `DeepL Pro Starter`, resolve red lines
  to standard styling, wording unchanged:
  - **Maximum** data security
  - **1 million** characters per user/month
  - **5** file translations per user/month
  - Translate files up to **10 MB**
  - **1 glossary** with unlimited entries
- Group 2 `DeepL Write Pro` (delete its `Save 20%` badge — the discount
  becomes a list line so all three tiers express it identically). Replace
  the six lines with these five (dedupe data security — it is already in
  group 1 — and tighten):
  - **20% off** DeepL Write Pro
  - **Unlimited** text improvements
  - **Unlimited** alternatives
  - **All** writing styles and tones
  - Set terms to never edit

**Advanced + Write Pro**
- Audience: resolve red `For individuals and teams` to black, wording
  unchanged.
- Delete both group lists and their group headers ("DeepL Pro Advanced",
  "DeepL Write Pro" + Save 40% badge). Replace with header
  `Everything in Starter + Write Pro, plus:` and this single list:
  - **40% off** DeepL Write Pro
  - **Unlimited** text translation
  - **20** file translations per user/month
  - Translate files up to **20 MB**
  - **2,000** shared glossaries
  - Single sign-on (SSO)
  - CAT tool integration

**Ultimate + Write Pro**
- Audience: replace the duplicated red `For individuals and teams` with
  `For teams and businesses` (black). Log as a reconstruction decision.
- Replace both groups with header `Everything in Advanced + Write Pro, plus:`
  and:
  - **60% off** DeepL Write Pro
  - **100** file translations per user/month
  - Translate files up to **30 MB**
- CTA stays `Buy now`.

**Enterprise**
- Add header `Tailor to your enterprise needs:`; keep all five lines and the
  account-executive footer.

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
- FAQ: delete the two placeholder subsections whose rows are all titled
  `Question` (`Changes to your plan` and `Using DeepL`); keep the real
  `Trials and purchases` questions. Do not write replacement questions.
- Footer stays as-is.

## Cluster A — Translator cumulative (rebuilt on `Pro on Translate`)

Base: fresh duplicate of `13:17289`, renamed
`EXHIBIT — Translator cumulative (refined)`.
Checkpoints: `rev4 cluster A start` / `rev4 cluster A done`.

Keep: product tab bar, hero, chips, blue account banner, currency selector,
card titles, Recommended badge, all four descriptions. Delete all four
placeholder price blocks. Apply nav + bottom-crop rules.

**Starter** — audience `Up to 5 users` keep. Header `What's included:`.
Resolve red lines, wording unchanged:
- **Maximum** data security
- **1 million** characters per user/month
- **5** file translations per user/month
- Translate files up to **10 MB**
- **1 glossary** with unlimited entries

**Advanced** — audience: resolve red `For individuals and teams` to black.
Header `Everything in Starter, plus:`. Delete `Maximum data security` row.
Merge the two glossary rows (`2,000 glossaries with unlimited entries` +
`Share glossaries with your team`) into one. Final list:
- **Unlimited** text translation
- **20** file translations per user/month
- Translate files up to **20 MB**
- **2,000** shared glossaries
- Single sign-on (SSO)
- CAT tool integration

**Ultimate** — audience: replace duplicated red row with
`For teams and businesses` (black). Header `Everything in Advanced, plus:`.
Delete every feature row except:
- **100** file translations per user/month
- Translate files up to **30 MB**

**Enterprise** — audience `Available from 1,000 users` keep. Header
`Tailor to your enterprise needs:`. Keep all lines and footer.

## Cluster B — Write add-on page, cleaned

Base: fresh duplicate of `13:17485`, renamed
`EXHIBIT — Write add-on (refined)`.
Checkpoints: `rev4 cluster B start` / `rev4 cluster B done`.

Keep: hero, chips, product tab bar, account banner, currency selector,
titles, Recommended badge. Delete all three placeholder price blocks. Apply
nav + bottom-crop rules.

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
  - **Daily** character limit
  - **Limited** text length
  - **Limited** writing styles and tones
  - Set terms to never edit

**Write Pro card**
- Description: `Unlimited writing improvements with maximum data security`
- Audience: resolve red `For individuals and teams` to black.
- Header `Everything in Free, plus:`.
- Replace the six existing lines with these four (`Set terms to never edit`
  moved to Free — see the correction above):
  - **Maximum** data security
  - **Unlimited** text improvements
  - **Unlimited** alternatives
  - **All** writing styles and tones

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

Base: fresh duplicate of the true Voice frame (log its node ID), renamed
`EXHIBIT — Voice add-on (refined)`.
Checkpoints: `rev4 cluster C start` / `rev4 cluster C done`.

Keep: hero, chips, tab bar, card illustrations, titles, descriptions,
Contact Sales buttons, Play video links. Delete both placeholder price
blocks. Apply nav + bottom-crop rules. No cumulative headers (parallel
products, not tiers).

Wording draws on Mason's own Copy island drafts (`Monetization/….png`).

**DeepL Voice for Meetings** — replace the seven existing lines with these
eight (one line, one fact — the previously merged lines are split, and the
SSO threshold from the Copy island is restored):
- **Maximum** data security
- **Unlimited** voice translation
- **Live captions** in **30+ languages**
- Speaks **13 languages**
- Works with team members and guests
- **Automatically generated** transcripts
- Single sign-on (SSO) for **50+ users**
- Native Microsoft Teams integration

**DeepL Voice for Conversations** — replace the five existing lines with:
- **Maximum** data security
- **Unlimited** hours of voice translation
- **Live on-screen** translation for one-on-one conversations
- **Automatically generated** transcripts
- Available on **iOS and Android**
- Single sign-on (SSO) for **50+ users**

## Cluster E — API page, light touch (the end-state fourth tab)

Base: duplicate of the API-content frame (whichever of `13:17681` /
`13:17852` shows "Scale multilingual workflows with the DeepL API"), renamed
`EXHIBIT — API pricing (refined)`.
Checkpoints: `rev4 cluster E start` / `rev4 cluster E done`.

Keep: hero, the Translator API / Write API selector, chips, banner, titles,
Recommended badge, CTAs (Sign up for free / Buy now / Contact Sales). Delete
placeholder price blocks. Apply nav + bottom-crop rules.

- **Free card:** add header `What's included:`. Delete the line
  `Access to all features immediately` if present — it directly contradicts
  the `Does not include:` block beneath it. Keep the remaining lines. In the
  `Does not include:` block, resolve the red `Access to the web translator`
  line to the standard muted styling of its sibling.
- **Pro card (resolved in rev 4):** the WIP card is copy-identical to Free.
  Rebuild it from the historical API page (`Monetization/API.png`), which
  shows distinct Pro content. Add header `Everything in DeepL API Free,
  plus:`, delete the duplicated Free lines (including the 500,000-character
  line and `Access to all features immediately`), and build this list:
  - Create and manage up to **25 API keys**
  - **No volume** restrictions
  - Pay as you go (**€20.00** per 1,000,000 characters) — real historical
    price from the API page, keep it
  - **Prioritized** execution of requests

  If the card keeps a `Does not include:` block, resolve its red
  `Access to the web translator` line as on the Free card.
- **Business card:** keep its existing header `Everything in DeepL API Pro,
  plus:` (this card is the one place the cumulative pattern already existed —
  do not restyle it away). Resolve the red `Dedicated Customer Success
  Manager` and `Onboarding planning and support` lines to black.

## Exports

Destination:
`/home/mason/Projects/Mason Portfolio/private-evidence/figma-exports-pricing-2026-07/`

PNG at **2x**, exact frame node only, no canvas artifacts. Verify pixel size
= 2x frame size.

Before-evidence: **already covered by Mason's own exports** in
`~/Projects/Mason Portfolio/Monetization/` and `figma screenshots/` — do not
re-export the originals unless a specific file below fails.

| File | Source |
|---|---|
| `pricing-bundle-era-clean.png` | Cluster D exhibit (full page) |
| `pricing-translator-cumulative.png` | Cluster A exhibit |
| `pricing-write-addon-clean.png` | Cluster B exhibit |
| `pricing-voice-clean.png` | Cluster C exhibit |
| `pricing-api-clean.png` | Cluster E exhibit |

Final consistency check across A, B, C, E exports: same 1512px family,
product tab bar at top, no main navigation, no red text, no lorem ipsum, no
placeholder prices, clean bottom edge below the card row. Cluster D: full
page, no red text anywhere, table and cards use identical plan names and
CTAs.

## Completion log

Create or update `export-log.md` in the destination folder:

- Node IDs: Cluster D base within `Pricing Pages`; which `Pro on Voice` node
  is Voice vs API; all five exhibit frames; the section.
- Reconstruction decisions applied (Ultimate audience rows, merged glossary
  lines, Voice list rebuild with split lines and SSO threshold, Write Pro
  delta tightened to four lines with `Set terms to never edit` on Free,
  `DeepL Write for Business` rename, uniform discount lines, `Save 16%`
  fill-in with its two image sources, FAQ placeholder removal, API Pro
  rebuild from `Monetization/API.png`).
- Checkpoint names; exported files with pixel dimensions and source node IDs;
  override-vs-detach decisions; anything not completed exactly as specified.

Do not touch `site/`, do not commit anything, and do not publish, share, or
change access on the Figma file.
