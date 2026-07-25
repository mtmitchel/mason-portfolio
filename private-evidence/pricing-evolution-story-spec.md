# Pricing evolution story spec

**Created:** 2026-07-25
**Revised:** 2026-07-25 (revision 2, after Mason's review of the rendered page)
**Status:** Current build spec for `/work/pricing-evolution`
**Owners it obeys:** [`deepl-portfolio-current-direction.md`](deepl-portfolio-current-direction.md),
[`claim-review.md`](claim-review.md), [`../site/AGENTS.md`](../site/AGENTS.md)

This file is the source of truth for the pricing case: chapter order, final
public copy, evidence selection, crop geometry, and the claim behind every
sentence. The implementation follows this file. If the implementation and this
file disagree, this file wins and the implementation changes.

## What revision 2 fixes

Mason reviewed the rendered page and rejected it. The defects, and the fix for
each:

1. **The synopsis was juvenile and vague.** "DeepL sold one paid thing when this
   work started" names no date and no subject. "It did that by adding routes"
   has no antecedent. Rewritten below with concrete dates and named subjects.
2. **The synopsis retold chapter 1.** It walked through the same beats in the
   same order. The synopsis now states the problem and the work; chapter 1 owns
   the 2023 condition alone.
3. **Chapter 1 showed the wrong evidence.** An archived marketing page with a
   hero and four benefit tiles proves nothing about a pricing grid. Replaced
   with the Translate Pro / Translate API grid, which is the actual
   one-product-era pricing page and was already exported.
4. **The chapter 2 selector crop was out of context and jammed to the frame
   edge.** Replaced with a crop that keeps the heading, the three tabs, and the
   top of the grid the selector controls.
5. **"What three routes did to the words" was badly written.** Retitled.
6. **Evidence had no breathing room.** Content touched the frame on every side.
   Fixed in CSS, not by padding the images: crops stay trimmed to content and
   the preview frame supplies uniform inset.
7. **Product pages carried dead hero space and rendered illegibly small.**
   Chapter 7 now shows card rows only, at full media width.
8. **Chapter 7 repeated chapter 5.** Its Translator view showed the cumulative
   grid the reader had just studied. Chapter 7 is now about the three products
   the ladder did not fit, which is also what its argument is actually about.

## Structural rules

1. The initial condition appears before the complication.
2. Every chapter adds a turn: a new pressure, a decision, or a consequence.
3. Every chapter explains reasoning, not only the visible change.
4. Mason's contribution is stated in normal prose, inside the claim ceilings.
5. One evidence file per evidence instance. No `fullSrc`; the preview and the
   expanded view are the same crop.
6. No public file is used twice, and no chapter shows evidence the reader has
   already studied in an earlier chapter.
7. Paired evidence shares a `crop_scope` and, where the sources allow, a width.
8. Before-and-after appears once, for repetition to progression. Every other
   pair is a neutral two-state switcher.
9. **Every crop is trimmed to its own content.** Build each file as a crop
   followed by `-trim +repage`, so recorded `trim_margin` is zero on all four
   edges. Breathing room is the frame's job, supplied once in CSS, never baked
   into an image.
10. No sentence begins with a pronoun whose antecedent is in an earlier
    paragraph. No sentence uses "it" where the subject could be either the page,
    the product, or the company.

## Claim ceilings applied

From [`claim-review.md`](claim-review.md), "Simplifying pricing across four
products":

- Allowed: observable differences between the tabbed bundle offer, add-on
  states, shorter comparison values, cumulative tiers, and the product offer
  patterns.
- Allowed: Mason's writing and content-design contribution in normal prose.
- Not allowed: that a specific version shipped, improved conversion, caused
  revenue, or was later adopted.
- Not allowed: sole ownership of product strategy or interaction design.
- Not allowed: any metric. `Save 20%` and `Save 16%` appear inside evidence and
  in one quoted description of a badge; they are offer content, not results.

Dates and structural facts come from
[`../archive/research/pricing-evolution/deep-research-report.md`](../archive/research/pricing-evolution/deep-research-report.md):
Translator-only baseline in early 2023 at €7.49 / €24.99 / €49.99 with API Free
and API Pro on a separate commercial path; DeepL Write free beta 17 January
2023; DeepL Write Pro paid 25 April 2024; Voice launched as a business product
in late 2024 and appeared in the web pricing selector by April 2026.
Terminology and content-rule claims come from
[`../archive/research/pricing-evolution/write-pro-launch-reconstruction.md`](../archive/research/pricing-evolution/write-pro-launch-reconstruction.md)
and
[`../archive/research/pricing-evolution/figma-exhibit-brief.md`](../archive/research/pricing-evolution/figma-exhibit-brief.md).

## Page title and synopsis

Title: `Simplifying pricing across four products`

Synopsis paragraph 1:

> DeepL's pricing page had to keep selling while the catalogue underneath it
> changed shape. Write became a paid product, then Voice arrived, and each
> addition was absorbed the same way: by bolting on another way to buy rather
> than by rethinking what the page said. By mid-2024 a single writing product was on
> sale in three places and described three different ways.

Synopsis paragraph 2:

> I wrote the pricing content across those releases. This case follows the
> decisions that stopped the page repeating itself — what a tier is allowed to
> say, where a discount belongs, which words live in a row label instead of in
> every cell — and why four products ended up in four shapes rather than one.

## Chapter 1 — When there was one product to buy

Turn: establishes the starting condition, so the complication has something to
complicate.

Paragraph 1:

> At the start of 2023 the pricing page sold one subscription. DeepL Pro meant
> Translator, offered as Starter, Advanced and Ultimate against a free tier,
> with Enterprise handled by sales. A second tab led to the developer API, which
> a different audience bought on a different model, so it never competed with
> the plan grid for a reader's attention.

Paragraph 2:

> That left the writing on the page with one job. Each tier needed one
> description, one set of limits and one price. No card had to say which product
> it belonged to, no line had to explain how two products combined, and the tab
> above the grid separated two audiences rather than two things one buyer had to
> choose between.

Evidence: single figure, `legacy-two-tab-grid.png`.

- Label: `The one-product pricing grid`
- Alt: `DeepL pricing page with two tabs, Translate Pro for individuals and
  teams and Translate API for developers, above Free, Starter, Advanced,
  Ultimate and Enterprise plan cards.`
- Caption: `One subscription for individuals and teams, with the developer API
  on its own tab. Everything a buyer had to weigh sat in a single row of cards.`

## Chapter 2 — A second paid product opened three ways to buy

Turn: the complication. A second paid product arrives and the page answers by
adding routes instead of reorganising.

Paragraph 1:

> DeepL Write Pro launched as a paid product in April 2024, and the commercial
> surface had two paid products to sell instead of one. The page answered by
> adding routes rather than by reorganising. A selector appeared above the grid
> offering DeepL Translator, DeepL Translator + DeepL Write, and DeepL API.
> Write also kept a page of its own, with its own free, paid and enterprise
> offers. Anyone who wanted Write could now arrive at it three different ways.

Paragraph 2:

> The words broke before the layout did. "Pro" was carrying three meanings at
> once: DeepL Pro was the paid Translator line, Write Pro was a product, and a
> bundle was neither. I worked on the naming rules for the launch — Write Pro as
> the short form of DeepL Write Pro, and "Pro" alone only where Write was
> already established; bundle as a description of two plans sold together, never
> as the name of a plan; and the free version never called a plan at all. Those
> rules are what let a card state what it was selling in a single line.

Evidence A: single figure, `bundle-era-selector-in-context.png`.

- Label: `The selector that opened a third route`
- Alt: `DeepL pricing page headed Find your perfect plan with three tabs, DeepL
  Translator, DeepL Translator plus DeepL Write, and DeepL API, above the top of
  the Starter, Advanced, Ultimate and Enterprise bundle cards.`
- Caption: `Choosing the middle tab swapped the Translator grid for a bundle
  grid, so Write was now sold here as well as on its own page.`

Evidence B: two-state switcher, scope `plan-grid`.

- View `translator-alone`, label `Translator on its own`, file
  `bundle-era-translator-grid.png`.
  Alt: `DeepL Translator pricing grid with Free, Starter, Advanced, Ultimate and
  Enterprise plans and their monthly prices.`
  Caption: `The Translator grid carried on as though Write did not exist.`
- View `write-alone`, label `Write on its own`, file
  `bundle-era-write-grid.png`.
  Alt: `DeepL Write pricing page with Free, Write Pro and Enterprise cards below
  a banner offering to add Write Pro from the account page.`
  Caption: `Write sold itself separately, and a banner offered a fourth way in,
  through the account page.`

## Chapter 3 — Two problems inside every bundle card

Turn: the consequence. Names the two content failures the structure produced.

Paragraph 1:

> Because Write Pro had no tiers of its own, every bundle card carried the same
> Write Pro block. Reading across Starter, Advanced and Ultimate meant reading
> five identical lines three times, and not one of those repetitions helped
> anyone choose between the tiers they sat under.

Paragraph 2:

> The Translator half of the same card had the opposite fault. Every limit
> arrived inside a sentence — five editable file translations per user / month
> in total; one glossary with 5,000 entries — so the numbers that actually
> distinguished the tiers sat mid-phrase and never formed a column. The rule I
> set was one line, one fact: lead with the number that decides the
> choice, and move the exact conditions down into the comparison table.

Evidence: two-state switcher, scope `feature-group-row`.

- View `repeated-block`, label `The same block, three times`, file
  `bundle-era-repeated-write-block.png`.
  Alt: `Three DeepL Write Pro feature groups side by side under the Starter,
  Advanced and Ultimate bundle cards, each listing the identical five lines.`
  Caption: `Identical Write Pro groups on three tiers. Nothing here helps anyone
  tell one plan from another.`
- View `limits-in-sentences`, label `Limits inside sentences`, file
  `bundle-era-limits-in-sentences.png`.
  Alt: `Translator feature groups on the Starter, Advanced and Ultimate bundle
  cards, with limits written as phrases such as five editable file translations
  per user per month in total.`
  Caption: `Every deciding number is here, and every one of them is buried
  mid-sentence.`

## Chapter 4 — Put the add-on choice on the Translator page

Turn: the pivot. The bundle route collapses into a control on the page that
already existed.

Paragraph 1:

> The bundle route was the one that cost most to maintain. A whole second grid
> existed to ask a single question: do you want Write Pro with this plan? Moving that question
> onto the Translator page turned the third grid into a control. Switched on,
> each card names both products and shows one combined price. Switched off, the
> same grid is Translator alone.

Paragraph 2:

> Two writing decisions followed the control. A discount moved next to the
> number it reduces — a Save 20% badge beside €15.49, rather than a sentence
> further down the card — because a saving is a fact about the price, not a
> feature. And the separate Write Pro heading survives only on the first card;
> above it the tiers read "Everything in Starter + Write Pro, plus", because the
> toggle has already established that Write Pro is part of the purchase.

Evidence: two-state switcher, scope `addon-state`.

- View `write-pro-added`, label `Write Pro added`, file `addon-on-cards.png`.
  Alt: `DeepL pricing cards with the Add DeepL Write Pro toggle on, showing
  Starter plus Write Pro at 15.49 euros with a Save 20 percent badge, Advanced
  plus Write Pro, Ultimate plus Write Pro and Enterprise.`
  Caption: `Toggle on: each card names both products, and the saving sits beside
  the price it reduces.`
- View `translator-only`, label `Translator only`, file `addon-off-cards.png`.
  Alt: `The same DeepL pricing grid with the Add DeepL Write Pro toggle off,
  showing Starter, Advanced, Ultimate and Enterprise Translator plans.`
  Caption: `Toggle off: one grid, no second route, and nothing about Write left
  on the card.`

## Chapter 5 — Replace repetition with progression

Turn: the structural rewrite of card content. This is the only before and after
on the page.

Paragraph 1:

> Repetition was still the biggest thing on a card. Each bundle card listed
> everything the plan contained, so anyone weighing Advanced against Starter had
> to find the differences buried inside two nearly identical lists.

Paragraph 2:

> Cumulative tiers turn that list into a progression. The first paid card opens
> with "What's included" and states what you get. Every card above it names the
> plan beneath it — "Everything in Starter, plus" — and states only what it
> adds, so Ultimate needs two lines, because two lines is all that changes.
> Enterprise breaks the pattern deliberately: it is not the next rung, so it
> opens with "Tailor to your enterprise needs" and describes itself. The point
> is not that the cards got shorter. The point is that the difference between
> two tiers became the only thing written down.

Evidence: before-and-after comparison, scope `plan-card-row`. Both states show
every tier in their grid.

- Before, tag `Before — every card repeats`, file `cards-bundle-repeated.png`.
  Alt: `Four bundle cards, Starter plus Write Pro, Advanced plus Write Pro,
  Ultimate plus Write Pro and Enterprise, each listing a full Translator group
  and an identical Write Pro group.`
  Caption: `Every bundle card states the whole offer, so two tiers can only be
  told apart line by line.`
- After, tag `After — each tier states its addition`, file
  `cards-cumulative-tiers.png`.
  Alt: `Four Translator cards, Starter, Advanced, Ultimate and Enterprise, using
  What's included, Everything in Starter plus, Everything in Advanced plus, and
  Tailor to your enterprise needs.`
  Caption: `Starter states what is included, Advanced and Ultimate state only
  what they add, and Enterprise steps out of the ladder.`

## Chapter 6 — Move qualifiers into row labels

Turn: the same principle applied one level down, in the comparison table.

Paragraph 1:

> The comparison table repeated itself in a smaller way. Every value restated
> the noun and the qualifier already sitting in its row label: the glossary row
> read 1 glossary, 1 glossary, 2,000 glossaries; the file row read 3 per user, 5
> per user, 20 per user. Bold ran inside those values too, so the emphasis
> landed on the repeated word instead of on the number.

Paragraph 2:

> I moved the qualifier up into the label and left the values bare. "Glossaries"
> now reads 1, 1, 2,000, 2,000. "File translations (per user/month)" reads 3, 5,
> 20, 100. Units stay only where they genuinely belong to the value, as in
> 10 MB. Each fact is stated once, at the level where it applies, and anyone
> scanning a row compares numbers instead of rereading a noun four times.

Evidence: two-state switcher, scope `table-section`. Both crops are the same
region of the same page, so they share exact dimensions.

- View `values-repeat-label`, label `Values repeat the row label`, file
  `table-values-repeat-label.png`.
  Alt: `Comparison table File translation and Glossary sections with values such
  as 3 per user, 5 per user, 1 glossary and 2,000 glossaries, with the numbers
  in bold.`
  Caption: `Each value restates the noun or the qualifier already in its own row
  label.`
- View `labels-own-qualifier`, label `Row labels own the qualifier`, file
  `table-labels-own-qualifier.png`.
  Alt: `The same comparison table sections with labels File translations per
  user per month and Glossaries, and bare values 3, 5, 20, 100 and 1, 1, 2,000,
  2,000.`
  Caption: `The label carries the noun and the qualifier, so each column states
  only its number.`

## Chapter 7 — Three products the ladder did not fit

Turn: the resolution, and the judgment that the pattern from chapter 5 is not
universal. Translator is deliberately not shown again here; the reader studied
its grid one section earlier, and repeating it would be the same redundancy this
case is about.

Paragraph 1:

> Translator's ladder works because its tiers genuinely stack. The other three
> products do not, and forcing them into the same shape would have been the easy
> mistake. Write sells an addition to something a buyer already has, so it runs
> Free, Write Pro and DeepL Write for Business, and reaches Translator customers
> through the add-on control rather than as a tier of Translator. Voice has two
> parallel use cases and no self-serve price, so Meetings and Conversations sit
> side by side with a route to sales; a ladder there would imply a progression
> that does not exist. API sells consumption, so the Pro card states the usage
> price on the card instead of hiding it in a table.

Paragraph 2:

> The decision that took longest was smaller than any of those. "Set terms to
> never edit" sits on the Write Free card rather than under "Everything in Free,
> plus", because the free product already had it. Listing it as a paid addition
> would have claimed a difference that was not real, and the comparison table
> was the source that settled it.

Evidence: three-state switcher, scope `product-card-row`. Each view is one
product's complete card row, cropped to the cards themselves.

- View `write`, label `Write`, file `product-write-cards.png`.
  Alt: `DeepL Write plan cards: Free, Write Pro at 10 euros per user per month,
  and DeepL Write for Business with a contact sales route.`
  Caption: `Write is an addition, so its middle card is a product rather than a
  tier, and the free card keeps what the free product already did.`
- View `voice`, label `Voice`, file `product-voice-cards.png`.
  Alt: `DeepL Voice cards for Voice for Meetings and Voice for Conversations,
  side by side, both routing to sales with no self-serve price.`
  Caption: `Voice presents two parallel use cases rather than a ladder, because
  neither one is an upgrade of the other.`
- View `api`, label `API`, file `product-api-cards.png`.
  Alt: `DeepL API cards: API Free, API Pro at 4.99 euros per month plus
  usage-based price, and API for Business with custom pricing.`
  Caption: `API sells consumption, so the Pro card carries the usage price
  itself instead of deferring it to a table.`

## Closing — One page per product, one job for each line

> Each product now has one page. A tier states what it adds to the one below it,
> a discount sits beside the price it reduces, a limit appears once at the level
> where it applies, and Write attaches to Translator through a control instead
> of a second grid.

> The catalogue is larger than it was in 2023, but nobody has to assemble one
> offer out of three grids and a wall of repeated features.

Next project link: `/work/checkout`, `Checkout across four purchase states`.

## Presentation rules

These are page-level and belong in `globals.css`, not in any image.

1. Every evidence block on this page renders at the full `.chapter-media` width
   of 1120px. The `--wide` (960px) and `--compact` (820px) modifiers are not
   used by this case; delete them if nothing else uses them. The stacked
   comparison also renders at 1120px.
2. `.pricing-page .evidence-preview` gets a uniform inset of 24px so no crop
   touches its frame, and the expanded dialog gets the same 24px, because the
   crops are trimmed flush to their content on purpose. These two rules are the
   only place breathing room is added.
3. A switcher caption aligns to the left edge of its media, matching the figure
   captions, rather than sitting centred under the image.

## Evidence build sheet

Every public file is produced once, as an ImageMagick crop followed by
`-trim +repage`. No border is ever added and nothing is resized.

`-trim` is not always idempotent: where a crop's outer band and the content's
own background are two slightly different near-white or lavender greys, one pass
removes the outer band and stops. Trim is therefore repeated until the result
stops changing, so every file reports `WxH+0+0` for `magick <file> -format '%@'
info:` and every recorded `trim_margin` is zero on all four edges.

Sources, relative to the repository root:

- `A` = `private-evidence/source-exports/figma/pricing-page-screenshots/1920px (2).png`
  (note the space and parentheses in the file name)
- `B` = `private-evidence/source-exports/figma/pricing-evolution/pricing-bundle-tabs.png`
- `C` = `private-evidence/source-exports/figma/write-pro-launch/pricing-translator-2x.png`
- `D` = `private-evidence/source-exports/figma/write-pro-launch/pricing-write-pro-2x.png`
- `E` = `private-evidence/source-exports/figma/write-pro-launch/pricing-bundle-2x.png`
- `F` = `private-evidence/source-exports/figma/pricing-evolution/pricing-translator-cumulative.png`
- `G` = `private-evidence/source-exports/figma/pricing-evolution/site-display/pricing-bundle-era-grid.png`
- `H` = `private-evidence/source-exports/figma/pricing-evolution/site-display/pricing-translator-transition-grid.png`
- `I` = `private-evidence/source-exports/figma/pricing-evolution/pricing-write-addon-clean.png`
- `J` = `private-evidence/source-exports/figma/pricing-evolution/pricing-voice-clean.png`
- `K` = `private-evidence/source-exports/figma/pricing-evolution/pricing-api-clean.png`
- `L` = `archive/retired/figma-exports/pricing-evolution-superseded-2026-07/rev6-round3-pricing-translator-transition-clean.png`
- `M` = `private-evidence/source-exports/figma/pricing-evolution/pricing-translator-transition-clean.png`

Build list. Every expected size below was produced and measured on 2026-07-25
and must be confirmed against the file that is actually written:

| # | File | Source | Crop before trim | Expect | `crop_scope` |
|---|---|---|---|---|---|
| 1 | `legacy-two-tab-grid.png` | `A` | `1650x1025+140+25` | 1650x904 | `plan-grid` |
| 2 | `bundle-era-selector-in-context.png` | `B` | `3280x1260+280+40` | 3280x1208 | `selector-in-context` |
| 3 | `bundle-era-translator-grid.png` | `C` | none, trim only | 3216x1458 | `plan-grid` |
| 4 | `bundle-era-write-grid.png` | `D` | none, trim only | 2482x1219 | `plan-grid` |
| 5 | `bundle-era-repeated-write-block.png` | `E` | `2058x485+72+1575` | 2048x485 | `feature-group-row` |
| 6 | `bundle-era-limits-in-sentences.png` | `E` | `2058x570+72+820` | 2048x570 | `feature-group-row` |
| 7 | `addon-on-cards.png` | `G` | `2832x2224+96+836` | 2832x2187 | `addon-state` |
| 8 | `addon-off-cards.png` | `H` | `2832x1707+96+838` | 2832x1675 | `addon-state` |
| 9 | `cards-bundle-repeated.png` | `E` | `2736x1953+72+145` | 2736x1953 | `plan-card-row` |
| 10 | `cards-cumulative-tiers.png` | `F` | `2976x1388+24+900` | 2976x1350 | `plan-card-row` |
| 11 | `table-values-repeat-label.png` | `L` | `2864x1335+80+8305` | 2768x1167 | `table-section` |
| 12 | `table-labels-own-qualifier.png` | `M` | `2864x1335+80+8305` | 2768x1167 | `table-section` |
| 13 | `product-write-cards.png` | `I` | `2320x1230+355+880` | 2244x1166 | `product-card-row` |
| 14 | `product-voice-cards.png` | `J` | `1790x1840+620+720` | 1790x1780 | `product-card-row` |
| 15 | `product-api-cards.png` | `K` | `2320x1380+355+1305` | 2244x1312 | `product-card-row` |

Pair widths that must match, and do: 5 and 6 at 2048; 7 and 8 at 2832; 11 and 12
identical at 2768x1167; 13 and 15, the two three-card product rows, at 2244.
Items 9 and 10 come from different sources and cannot share a width; their
equivalence is the shared `crop_scope` `plan-card-row` and the fact that both
show every tier in their grid. Item 14 is narrower than 13 and 15 because Voice
has two cards where Write and API have three; its equivalence is the shared
`crop_scope` `product-card-row`.

Retirement, from the current sixteen public files:

- `pro-page-2023.png`, `bundle-era-tab-selector.png`, `product-translator.png`,
  `product-write.png`, `product-voice.png` and `product-api.png` leave the
  public directory for
  `archive/retired/public-assets/2026-07-25/work/pricing-evolution/`.
- `bundle-era-limits-in-sentences.png`, `bundle-era-repeated-write-block.png`,
  `addon-on-cards.png`, `addon-off-cards.png`, `cards-cumulative-tiers.png`,
  `table-values-repeat-label.png` and `table-labels-own-qualifier.png` are
  rebuilt in place, because revision 2 trims them where revision 1 did not.
- `cards-bundle-repeated.png`, `bundle-era-translator-grid.png` and
  `bundle-era-write-grid.png` are unchanged by the new build rule but must still
  be reproduced and re-measured.
- `private-evidence/source-exports/web-archive/deepl-pricing/pro-page-2023-03-11.png`
  stays as a private source. It is no longer published.

## Acceptance conditions and the checks that hold them

- Initial condition before the complication — chapter order assertion.
- No pronoun without a nearby antecedent — reviewed by hand, sentence by
  sentence, against rule 10 above.
- Synopsis does not retell chapter 1 — reviewed by hand.
- Complication fully explained — chapter 2 and chapter 3 word floors.
- Contribution explicit and supported — first-person sentence count.
- Reasoning, not only visible change — per-chapter prose word floor of 90.
- Equivalent scope in paired evidence — shared `crop_scope` per pair, shared
  width for pairs 5/6, 7/8 and 11/12.
- Cumulative comparison includes every tier — tier names asserted in the alt
  text of `cards-cumulative-tiers.png`.
- No evidence repeats across chapters — unique `src` values, and Translator's
  grid appears in chapter 5 only.
- Preview and expanded use one crop — no `fullSrc` in the case data.
- No dead space — every recorded `trim_margin` is zero, verified against the
  file by `scripts/check-repository.mjs`.
- Breathing room — the 24px preview inset asserted in the CSS test.
- No metric — page asserted free of outcome claims.
