import type { PricingCaseStory } from "./PricingCase";

export const pricingEvolutionCase: PricingCaseStory = {
  context: "DeepL · Pricing evolution",
  title: "Simplifying pricing across four products",
  synopsis: [
    "When Write Pro launched, DeepL’s tabbed pricing page added a Translator + Write bundle while Write also had its own paid offer. The same Write Pro block then appeared in every bundle tier. I rewrote the offer as one page per product: Translator and API tiers state only what they add, Write works as an add-on, and Voice stays sales-led.",
  ],
  chapters: [
    {
      id: "tabbed-offer",
      title: "A tabbed pricing page plus a separate Write offer",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "The pricing page presented Translator, Translator + Write and API as three parallel tabs. Write also had its own page, so the same writing product appeared as both a standalone offer and part of every bundle tier.",
          ],
        },
        {
          kind: "figure",
          image: {
            src: "/work/pricing-evolution/pricing-bundle-tabs.png",
            width: 3840,
            height: 2826,
            alt: "DeepL pricing page with tabs for Translator, Translator plus Write and API",
            caption: "The tabbed page made the bundle a separate route alongside Translator and API.",
          },
        },
        {
          kind: "figure",
          image: {
            src: "/work/pricing-evolution/pricing-write-pro.png",
            width: 2482,
            height: 1233,
            alt: "DeepL Write pricing page comparing Free, Write Pro and Enterprise offers",
            caption: "Write also had its own free, paid and sales-led offers.",
          },
        },
      ],
    },
    {
      id: "translator-add-on",
      title: "Put the add-on choice on the Translator page",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "Instead of asking readers to leave Translator for a separate bundle, the revised page keeps the choice beside the plans. The toggle changes the offer in place.",
          ],
        },
        {
          kind: "stack",
          ariaLabel: "Translator pricing with and without Write Pro",
          items: [
            {
              label: "Write Pro added",
              image: {
                src: "/work/pricing-evolution/pricing-bundle-era-grid.png",
                width: 3024,
                height: 3300,
                alt: "DeepL pricing page with the Add DeepL Write Pro toggle on and three Translator plus Write Pro plan cards",
                caption: "With Write Pro added, each card names both products and their combined price.",
              },
            },
            {
              label: "Translator only",
              image: {
                src: "/work/pricing-evolution/pricing-translator-transition-grid.png",
                width: 3024,
                height: 2790,
                alt: "DeepL pricing page with the Add DeepL Write Pro toggle off and three Translator plan cards",
                caption: "With the toggle off, the same grid returns to Translator-only plans.",
              },
            },
          ],
        },
      ],
    },
    {
      id: "comparison-labels",
      title: "Move qualifiers into labels",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "The comparison table had another repetition problem: each plan value carried its own unit. Moving the qualifier into the row label made the columns easier to compare.",
          ],
        },
        {
          kind: "comparison",
          beforeTag: "Before — values repeat the unit",
          afterTag: "After — labels carry the unit",
          before: {
            src: "/work/pricing-evolution/detail-table-before.png",
            width: 2864,
            height: 1335,
            alt: "Comparison table with units repeated inside plan values",
            caption: "Each cell repeats the unit alongside its value.",
          },
          after: {
            src: "/work/pricing-evolution/detail-table-after.png",
            width: 2864,
            height: 1335,
            alt: "Comparison table with units in row labels and bare values in plan columns",
            caption: "The row labels carry the units and the plan columns contain only values.",
          },
          note: "The row label now carries the unit once; every plan column can state the value alone.",
        },
      ],
    },
    {
      id: "progression",
      title: "Replace repetition with progression",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "The bundle repeated one Write Pro block under every Translator tier. The revised cards use a cumulative pattern instead: each tier states only what it adds.",
          ],
        },
        {
          kind: "comparison",
          beforeTag: "Repeated in every bundle",
          afterTag: "Each tier states its addition",
          before: {
            src: "/work/pricing-evolution/detail-bundle-repetition.png",
            width: 2080,
            height: 465,
            alt: "The same DeepL Write Pro feature group repeated under three Translator bundle tiers",
            caption: "The same Write Pro block appears under every Translator tier.",
          },
          after: {
            src: "/work/pricing-evolution/detail-cumulative-pair.png",
            width: 1480,
            height: 1415,
            alt: "Starter and Advanced cards using cumulative What's included and Everything in Starter, plus labels",
            caption: "The next tier names its additions instead of repeating the full list.",
          },
        },
      ],
    },
    {
      id: "product-patterns",
      title: "Give each product its own offer pattern",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "The resulting system does not force four products into one pricing pattern. Translator and API can show progression between tiers, Write can work as an add-on, and Voice can stay focused on two sales-led use cases.",
          ],
        },
        {
          kind: "switcher",
          ariaLabel: "Compare complete pricing pages for Translator, Write, Voice and API",
          initialId: "translator",
          views: [
            {
              id: "translator",
              label: "Translator",
              summary: "Translator uses a cumulative grid: each tier states what it adds to the one before.",
              image: {
                label: "Translator pricing page",
                src: "/work/pricing-evolution/pricing-translator-cumulative.png",
                width: 3024,
                height: 2392,
                alt: "DeepL Translator pricing page with cumulative Starter, Advanced, Ultimate and Enterprise tiers",
                caption: "Translator uses a cumulative grid: each tier states what it adds to the one before.",
              },
            },
            {
              id: "write",
              label: "Write",
              summary: "Write presents a free offer, a paid add-on and a sales-led business offer.",
              image: {
                label: "Write pricing page",
                src: "/work/pricing-evolution/pricing-write-addon-clean.png",
                width: 3024,
                height: 2208,
                alt: "DeepL Write pricing page comparing Free, Write Pro and DeepL Write for Business",
                caption: "Write presents a free offer, a paid add-on and a sales-led business offer.",
              },
            },
            {
              id: "voice",
              label: "Voice",
              summary: "Voice keeps two parallel, sales-led offers instead of a tier ladder.",
              image: {
                label: "Voice pricing page",
                src: "/work/pricing-evolution/pricing-voice-clean.png",
                width: 3024,
                height: 2654,
                alt: "DeepL Voice pricing page showing Voice for Meetings and Voice for Conversations as sales-led offers",
                caption: "Voice keeps two parallel, sales-led offers instead of a tier ladder.",
              },
            },
            {
              id: "api",
              label: "API",
              summary: "API separates free entry, usage-priced Pro and a custom business offer.",
              image: {
                label: "API pricing page",
                src: "/work/pricing-evolution/pricing-api-clean.png",
                width: 3024,
                height: 2776,
                alt: "DeepL API pricing page comparing API Free, API Pro and API Business",
                caption: "API separates free entry, usage-priced Pro and a custom business offer.",
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
      "Each product has one page. Tier additions are stated once, discounts sit beside prices, and actions sit beside the commitment they start.",
    ],
  },
  coda: {
    prefix: "See DeepL pricing at ",
    href: "https://www.deepl.com/pro",
    linkLabel: "deepl.com/pro",
    suffix: ".",
  },
  next: { href: "/work/checkout", label: "Checkout across four purchase states" },
};
