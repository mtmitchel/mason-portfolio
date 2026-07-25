import type { PricingCaseStory } from "./PricingCase";

export const pricingEvolutionCase: PricingCaseStory = {
  title: "Simplifying pricing across four products",
  synopsis: [
    "DeepL's pricing page had to keep selling while the catalogue underneath it changed shape. Write became a paid product, then Voice arrived, and each addition was absorbed the same way: by bolting on another way to buy rather than by rethinking what the page said. By mid-2024 a single writing product was on sale in three places and described three different ways.",
    "I wrote the pricing content across those releases. This case follows the decisions that stopped the page repeating itself — what a tier is allowed to say, where a discount belongs, which words live in a row label instead of in every cell — and why four products ended up in four shapes rather than one.",
  ],
  chapters: [
    {
      id: "one-product",
      title: "When there was one product to buy",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "At the start of 2023 the pricing page sold one subscription. DeepL Pro meant Translator, offered as Starter, Advanced and Ultimate against a free tier, with Enterprise handled by sales. A second tab led to the developer API, which a different audience bought on a different model, so it never competed with the plan grid for a reader's attention.",
            "That left the writing on the page with one job. Each tier needed one description, one set of limits and one price. No card had to say which product it belonged to, no line had to explain how two products combined, and the tab above the grid separated two audiences rather than two things one buyer had to choose between.",
          ],
        },
        {
          kind: "figure",
          image: {
            label: "The one-product pricing grid",
            src: "/work/pricing-evolution/legacy-two-tab-grid.png",
            width: 1650,
            height: 904,
            alt: "DeepL pricing page with two tabs, Translate Pro for individuals and teams and Translate API for developers, above Free, Starter, Advanced, Ultimate and Enterprise plan cards.",
            caption: "One subscription for individuals and teams, with the developer API on its own tab. Everything a buyer had to weigh sat in a single row of cards.",
          },
        },
      ],
    },
    {
      id: "three-routes",
      title: "A second paid product opened three ways to buy",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "DeepL Write Pro launched as a paid product in April 2024, and the commercial surface had two paid products to sell instead of one. The page answered by adding routes rather than by reorganising. A selector appeared above the grid offering DeepL Translator, DeepL Translator + DeepL Write, and DeepL API. Write also kept a page of its own, with its own free, paid and enterprise offers. Anyone who wanted Write could now arrive at it three different ways.",
            "The words broke before the layout did. “Pro” was carrying three meanings at once: DeepL Pro was the paid Translator line, Write Pro was a product, and a bundle was neither. I worked on the naming rules for the launch — Write Pro as the short form of DeepL Write Pro, and “Pro” alone only where Write was already established; bundle as a description of two plans sold together, never as the name of a plan; and the free version never called a plan at all. Those rules are what let a card state what it was selling in a single line.",
          ],
        },
        {
          kind: "figure",
          image: {
            label: "The selector that opened a third route",
            src: "/work/pricing-evolution/bundle-era-selector-in-context.png",
            width: 3280,
            height: 1208,
            alt: "DeepL pricing page headed Find your perfect plan with three tabs, DeepL Translator, DeepL Translator plus DeepL Write, and DeepL API, above the top of the Starter, Advanced, Ultimate and Enterprise bundle cards.",
            caption: "Choosing the middle tab swapped the Translator grid for a bundle grid, so Write was now sold here as well as on its own page.",
          },
        },
        {
          kind: "switcher",
          ariaLabel: "Compare Translator-alone and Write-alone pricing grids",
          initialId: "translator-alone",
          views: [
            {
              id: "translator-alone",
              label: "Translator on its own",
              image: {
                label: "Translator on its own",
                src: "/work/pricing-evolution/bundle-era-translator-grid.png",
                width: 3216,
                height: 1458,
                alt: "DeepL Translator pricing grid with Free, Starter, Advanced, Ultimate and Enterprise plans and their monthly prices.",
                caption: "The Translator grid carried on as though Write did not exist.",
              },
            },
            {
              id: "write-alone",
              label: "Write on its own",
              image: {
                label: "Write on its own",
                src: "/work/pricing-evolution/bundle-era-write-grid.png",
                width: 2482,
                height: 1219,
                alt: "DeepL Write pricing page with Free, Write Pro and Enterprise cards below a banner offering to add Write Pro from the account page.",
                caption: "Write sold itself separately, and a banner offered a fourth way in, through the account page.",
              },
            },
          ],
        },
      ],
    },
    {
      id: "card-problems",
      title: "Two problems inside every bundle card",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "Because Write Pro had no tiers of its own, every bundle card carried the same Write Pro block. Reading across Starter, Advanced and Ultimate meant reading five identical lines three times, and not one of those repetitions helped anyone choose between the tiers they sat under.",
            "The Translator half of the same card had the opposite fault. Every limit arrived inside a sentence — five editable file translations per user / month in total; one glossary with 5,000 entries — so the numbers that actually distinguished the tiers sat mid-phrase and never formed a column. The rule I set was one line, one fact: lead with the number that decides the choice, and move the exact conditions down into the comparison table.",
          ],
        },
        {
          kind: "switcher",
          ariaLabel: "Compare repeated Write Pro blocks and limits written inside sentences",
          initialId: "repeated-block",
          views: [
            {
              id: "repeated-block",
              label: "The same block, three times",
              image: {
                label: "The same block, three times",
                src: "/work/pricing-evolution/bundle-era-repeated-write-block.png",
                width: 2048,
                height: 485,
                alt: "Three DeepL Write Pro feature groups side by side under the Starter, Advanced and Ultimate bundle cards, each listing the identical five lines.",
                caption: "Identical Write Pro groups on three tiers. Nothing here helps anyone tell one plan from another.",
              },
            },
            {
              id: "limits-in-sentences",
              label: "Limits inside sentences",
              image: {
                label: "Limits inside sentences",
                src: "/work/pricing-evolution/bundle-era-limits-in-sentences.png",
                width: 2048,
                height: 570,
                alt: "Translator feature groups on the Starter, Advanced and Ultimate bundle cards, with limits written as phrases such as five editable file translations per user per month in total.",
                caption: "Every deciding number is here, and every one of them is buried mid-sentence.",
              },
            },
          ],
        },
      ],
    },
    {
      id: "addon-control",
      title: "Put the add-on choice on the Translator page",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "The bundle route was the one that cost most to maintain. A whole second grid existed to ask a single question: do you want Write Pro with this plan? Moving that question onto the Translator page turned the third grid into a control. Switched on, each card names both products and shows one combined price. Switched off, the same grid is Translator alone.",
            "Two writing decisions followed the control. A discount moved next to the number it reduces — a Save 20% badge beside €15.49, rather than a sentence further down the card — because a saving is a fact about the price, not a feature. And the separate Write Pro heading survives only on the first card; above it the tiers read “Everything in Starter + Write Pro, plus”, because the toggle has already established that Write Pro is part of the purchase.",
          ],
        },
        {
          kind: "switcher",
          ariaLabel: "Translator pricing with and without Write Pro",
          initialId: "write-pro-added",
          views: [
            {
              id: "write-pro-added",
              label: "Write Pro added",
              image: {
                label: "Write Pro added",
                src: "/work/pricing-evolution/addon-on-cards.png",
                width: 2832,
                height: 2187,
                alt: "DeepL pricing cards with the Add DeepL Write Pro toggle on, showing Starter plus Write Pro at 15.49 euros with a Save 20 percent badge, Advanced plus Write Pro, Ultimate plus Write Pro and Enterprise.",
                caption: "Toggle on: each card names both products, and the saving sits beside the price it reduces.",
              },
            },
            {
              id: "translator-only",
              label: "Translator only",
              image: {
                label: "Translator only",
                src: "/work/pricing-evolution/addon-off-cards.png",
                width: 2832,
                height: 1675,
                alt: "The same DeepL pricing grid with the Add DeepL Write Pro toggle off, showing Starter, Advanced, Ultimate and Enterprise Translator plans.",
                caption: "Toggle off: one grid, no second route, and nothing about Write left on the card.",
              },
            },
          ],
        },
      ],
    },
    {
      id: "cumulative-tiers",
      title: "Replace repetition with progression",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "Repetition was still the biggest thing on a card. Each bundle card listed everything the plan contained, so anyone weighing Advanced against Starter had to find the differences buried inside two nearly identical lists.",
            "Cumulative tiers turn that list into a progression. The first paid card opens with “What's included” and states what you get. Every card above it names the plan beneath it — “Everything in Starter, plus” — and states only what it adds, so Ultimate needs two lines, because two lines is all that changes. Enterprise breaks the pattern deliberately: it is not the next rung, so it opens with “Tailor to your enterprise needs” and describes itself. The point is not that the cards got shorter. The point is that the difference between two tiers became the only thing written down.",
          ],
        },
        {
          kind: "comparison",
          layout: "stacked",
          ariaLabel: "Compare repeated bundle cards with cumulative tiers",
          before: {
            tag: "Before — every card repeats",
            image: {
              label: "Before — every card repeats",
              src: "/work/pricing-evolution/cards-bundle-repeated.png",
              width: 2736,
              height: 1953,
              alt: "Four bundle cards, Starter plus Write Pro, Advanced plus Write Pro, Ultimate plus Write Pro and Enterprise, each listing a full Translator group and an identical Write Pro group.",
              caption: "Every bundle card states the whole offer, so two tiers can only be told apart line by line.",
            },
          },
          after: {
            tag: "After — each tier states its addition",
            image: {
              label: "After — each tier states its addition",
              src: "/work/pricing-evolution/cards-cumulative-tiers.png",
              width: 2976,
              height: 1350,
              alt: "Four Translator cards, Starter, Advanced, Ultimate and Enterprise, using What's included, Everything in Starter plus, Everything in Advanced plus, and Tailor to your enterprise needs.",
              caption: "Starter states what is included, Advanced and Ultimate state only what they add, and Enterprise steps out of the ladder.",
            },
          },
        },
      ],
    },
    {
      id: "table-labels",
      title: "Move qualifiers into row labels",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "The comparison table repeated itself in a smaller way. Every value restated the noun and the qualifier already sitting in its row label: the glossary row read 1 glossary, 1 glossary, 2,000 glossaries; the file row read 3 per user, 5 per user, 20 per user. Bold ran inside those values too, so the emphasis landed on the repeated word instead of on the number.",
            "I moved the qualifier up into the label and left the values bare. “Glossaries” now reads 1, 1, 2,000, 2,000. “File translations (per user/month)” reads 3, 5, 20, 100. Units stay only where they genuinely belong to the value, as in 10 MB. Each fact is stated once, at the level where it applies, and anyone scanning a row compares numbers instead of rereading a noun four times.",
          ],
        },
        {
          kind: "switcher",
          ariaLabel: "Compare qualifier placement in the comparison table",
          initialId: "values-repeat-label",
          views: [
            {
              id: "values-repeat-label",
              label: "Values repeat the row label",
              image: {
                label: "Values repeat the row label",
                src: "/work/pricing-evolution/table-values-repeat-label.png",
                width: 2768,
                height: 1167,
                alt: "Comparison table File translation and Glossary sections with values such as 3 per user, 5 per user, 1 glossary and 2,000 glossaries, with the numbers in bold.",
                caption: "Each value restates the noun or the qualifier already in its own row label.",
              },
            },
            {
              id: "labels-own-qualifier",
              label: "Row labels own the qualifier",
              image: {
                label: "Row labels own the qualifier",
                src: "/work/pricing-evolution/table-labels-own-qualifier.png",
                width: 2768,
                height: 1167,
                alt: "The same comparison table sections with labels File translations per user per month and Glossaries, and bare values 3, 5, 20, 100 and 1, 1, 2,000, 2,000.",
                caption: "The label carries the noun and the qualifier, so each column states only its number.",
              },
            },
          ],
        },
      ],
    },
    {
      id: "product-patterns",
      title: "Three products the ladder did not fit",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "Translator's ladder works because its tiers genuinely stack. The other three products do not, and forcing them into the same shape would have been the easy mistake. Write sells an addition to something a buyer already has, so it runs Free, Write Pro and DeepL Write for Business, and reaches Translator customers through the add-on control rather than as a tier of Translator. Voice has two parallel use cases and no self-serve price, so Meetings and Conversations sit side by side with a route to sales; a ladder there would imply a progression that does not exist. API sells consumption, so the Pro card states the usage price on the card instead of hiding it in a table.",
            "The decision that took longest was smaller than any of those. “Set terms to never edit” sits on the Write Free card rather than under “Everything in Free, plus”, because the free product already had it. Listing it as a paid addition would have claimed a difference that was not real, and the comparison table was the source that settled it.",
          ],
        },
        {
          kind: "switcher",
          ariaLabel: "Compare Write, Voice and API card rows",
          initialId: "write",
          views: [
            {
              id: "write",
              label: "Write",
              image: {
                label: "Write",
                src: "/work/pricing-evolution/product-write-cards.png",
                width: 2244,
                height: 1166,
                alt: "DeepL Write plan cards: Free, Write Pro at 10 euros per user per month, and DeepL Write for Business with a contact sales route.",
                caption: "Write is an addition, so its middle card is a product rather than a tier, and the free card keeps what the free product already did.",
              },
            },
            {
              id: "voice",
              label: "Voice",
              image: {
                label: "Voice",
                src: "/work/pricing-evolution/product-voice-cards.png",
                width: 1790,
                height: 1780,
                alt: "DeepL Voice cards for Voice for Meetings and Voice for Conversations, side by side, both routing to sales with no self-serve price.",
                caption: "Voice presents two parallel use cases rather than a ladder, because neither one is an upgrade of the other.",
              },
            },
            {
              id: "api",
              label: "API",
              image: {
                label: "API",
                src: "/work/pricing-evolution/product-api-cards.png",
                width: 2244,
                height: 1312,
                alt: "DeepL API cards: API Free, API Pro at 4.99 euros per month plus usage-based price, and API for Business with custom pricing.",
                caption: "API sells consumption, so the Pro card carries the usage price itself instead of deferring it to a table.",
              },
            },
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "One page per product, one job for each line",
    paragraphs: [
      "Each product now has one page. A tier states what it adds to the one below it, a discount sits beside the price it reduces, a limit appears once at the level where it applies, and Write attaches to Translator through a control instead of a second grid.",
      "The catalogue is larger than it was in 2023, but nobody has to assemble one offer out of three grids and a wall of repeated features.",
    ],
  },
  next: { href: "/work/checkout", label: "Checkout across four purchase states" },
};
