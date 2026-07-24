import type { ChapteredCaseStory } from "./ChapteredCase";

export const pricingEvolutionCase: ChapteredCaseStory = {
  context: "DeepL · Pricing evolution",
  title: "Simplifying pricing across four products",
  synopsis: [
    "DeepL pricing started as one Translator grid. When Write Pro launched, that simple structure opened into standalone products plus bundles — three ways to buy, with the same Write Pro story repeated on every tier. I wrote the pricing content as the offer moved toward one page per product across Translator, Write, Voice and API, with cumulative tiers and add-ons.",
    "This case follows that arc: what buying looked like when the catalog was small, where the language got tangled, and how the content settled into a clearer system.",
  ],
  chapters: [
    {
      id: "one-product",
      era: "2023",
      title: "One product, one grid",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "At the start of 2023, DeepL pricing centered on Translator: Starter, Advanced and Ultimate in a single grid. API sat on its own path. Write was free. Pricing read as simple because the product family was simple — one commercial choice, described once.",
          ],
        },
        {
          kind: "figure",
          image: {
            src: "/work/pricing-evolution/pricing-2023-pro-page.png",
            width: 2650,
            height: 1760,
            alt: "DeepL Pro page from March 2023, before Write Pro: a single Translator offer with four product benefits above the plan grid",
            caption: "The 2023 pricing page, captured 11 March 2023: one Translator offer — no tabs, no bundles, no Write Pro.",
          },
        },
        { kind: "diagram" },
      ],
    },
    {
      id: "write-pro-arrival",
      era: "2024",
      title: "A second product made buying complicated",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "When Write Pro launched, the public pricing page grew a three-tab selector: DeepL Translator, DeepL Translator + DeepL Write, and DeepL API. People could buy Translator alone, Write alone or a bundle — three routes to what was still one writing product. Each bundle tier carried the same Write Pro feature block. And “Pro” meant different things depending on which tab you were on.",
          ],
        },
        {
          kind: "figure",
          image: {
            src: "/work/pricing-evolution/pricing-bundle-tabs.png",
            width: 3840,
            height: 2826,
            alt: "DeepL pricing page with three tabs for Translator, Translator plus Write and API, showing the Translator plus Write bundle grid",
            caption: "The selector made the three buying routes explicit — and put the bundle on equal footing with the standalone products.",
          },
        },
        {
          kind: "strip",
          label: "Three grids, three ways to buy",
          items: [
            {
              src: "/work/pricing-evolution/pricing-translator.png",
              width: 3840,
              height: 1459,
              alt: "DeepL Translator pricing grid comparing Free, Starter, Advanced, Ultimate and Enterprise plans",
              caption: "Translator kept its own full grid, including the free tier, as if Write did not exist.",
            },
            {
              src: "/work/pricing-evolution/pricing-write-pro.png",
              width: 2482,
              height: 1233,
              alt: "DeepL Write pricing grid comparing Free, Write Pro and Enterprise offers",
              caption: "Write had a separate page with its own free, paid and sales-led offers.",
            },
            {
              src: "/work/pricing-evolution/pricing-bundle.png",
              width: 2880,
              height: 2099,
              alt: "DeepL bundle pricing grid comparing Starter plus Write, Advanced plus Write and Ultimate plus Write",
              caption: "The bundle grid stacked Translator tiers with Write Pro — a third place to make the same purchase.",
            },
          ],
        },
        {
          kind: "moment",
          heading: "The same block, three times",
          text: "Because Write Pro had no tiers of its own, every bundle card repeated the identical Write Pro group. Scanning the row meant reading the same four benefits again and again.",
          image: {
            src: "/work/pricing-evolution/detail-bundle-repetition.png",
            width: 2080,
            height: 465,
            alt: "Three side-by-side DeepL Write Pro feature groups with identical headings and bullets",
            caption: "Identical Write Pro groups on Starter, Advanced and Ultimate bundles — repetition with no new information.",
          },
        },
        {
          kind: "moment",
          heading: "Every fact arrived in a sentence",
          text: "Limits lived inside long bullets: file translations “per user / month in total,” glossaries “with 5,000 entries each.” The numbers were there, but they were hard to compare across cards.",
          image: {
            src: "/work/pricing-evolution/detail-wordy-bullets.png",
            width: 650,
            height: 800,
            displayWidth: 325,
            alt: "Advanced plus Write Pro feature list with long bullets describing file translations and shared team glossaries",
            caption: "Period bullets wrapped every limit in a full phrase, so the numbers never lined up cleanly.",
          },
        },
      ],
    },
    {
      id: "folding-the-choice",
      era: "2024–2025",
      title: "Folding the choice into the page",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "As Voice arrived, the direction shifted: stop sending people through tabs to buy Write. Keep one Translator page and let Write Pro become a toggle — add it or leave it — instead of a separate bundle grid.",
          ],
        },
        {
          kind: "comparison",
          beforeTag: "Write Pro added",
          afterTag: "Translator only",
          before: {
            src: "/work/pricing-evolution/detail-toggle-on.png",
            width: 830,
            height: 150,
            alt: "Add DeepL Write Pro toggle switched on, shown in teal",
            caption: "Write Pro added with the toggle on.",
          },
          after: {
            src: "/work/pricing-evolution/detail-toggle-off.png",
            width: 830,
            height: 150,
            alt: "Add DeepL Write Pro toggle switched off, shown in gray",
            caption: "Translator only with the toggle off.",
          },
          note: "One control replaces the bundle tab: Write Pro is present or not, on the same Translator page.",
        },
        {
          kind: "figure",
          image: {
            src: "/work/pricing-evolution/pricing-bundle-era-grid.png",
            width: 3024,
            height: 3300,
            alt: "DeepL pricing page with Add DeepL Write Pro toggle on and three Translator plus Write Pro plan cards",
            caption: "One Translator page serves both states — Write Pro added or Translator only — without a separate bundle route.",
          },
        },
        {
          kind: "tableLink",
          linkLabel: "Open the same page with Translator only",
          image: {
            src: "/work/pricing-evolution/pricing-translator-transition-grid.png",
            width: 3024,
            height: 2790,
            alt: "DeepL pricing page with Add DeepL Write Pro toggle off and three Translator plan cards",
            caption: "Toggle off, and the same page shows Translator alone.",
          },
        },
        {
          kind: "moment",
          heading: "Discounts live with the price",
          text: "Savings belong next to the number someone pays, not buried in the feature list. The badge sits beside the price so the commercial claim stays with the commercial fact.",
          image: {
            src: "/work/pricing-evolution/detail-price-block.png",
            width: 700,
            height: 520,
            displayWidth: 350,
            alt: "Starter plus Write Pro card showing title, description, price of 15.49 euros with a Save 20 percent badge and a Start free trial button",
            caption: "Price, billing line and Save badge stay in one block above the CTA.",
          },
        },
        {
          kind: "comparison",
          beforeTag: "Values repeat the label",
          afterTag: "Labels own the qualifiers",
          before: {
            src: "/work/pricing-evolution/detail-table-before.png",
            width: 2864,
            height: 1335,
            alt: "Comparison table File translation and Glossary sections with bold values such as 3 per user and 1 glossary",
            caption: "Table cells repeat units inside every value.",
          },
          after: {
            src: "/work/pricing-evolution/detail-table-after.png",
            width: 2864,
            height: 1335,
            alt: "Comparison table File translation and Glossary sections with bare values such as 3, 5, 20, 100 and 1, 1, 2,000, 2,000",
            caption: "Row labels carry the units; cells stay bare.",
          },
          note: "Qualifiers move into the row label so each cell states the value once — no bold noise, no repeated units.",
          orientation: "vertical",
        },
        {
          kind: "tableLink",
          linkLabel: "Open the full Write Pro comparison table",
          image: {
            src: "/work/pricing-evolution/pricing-bundle-era-table.png",
            width: 3024,
            height: 5300,
            alt: "Full DeepL comparison table for Translator and Write Pro bundle tiers",
            caption: "The full comparison for Translator and Write Pro bundle tiers.",
          },
        },
        {
          kind: "tableLink",
          linkLabel: "Open the full Translator comparison table",
          image: {
            src: "/work/pricing-evolution/pricing-translator-transition-table.png",
            width: 3024,
            height: 4800,
            alt: "Full DeepL comparison table for Translator Starter, Advanced and Ultimate plans",
            caption: "The full Translator-only comparison table.",
          },
        },
      ],
    },
    {
      id: "the-system",
      era: "The system",
      title: "One page per product, cumulative tiers",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "The settled pattern is a page for each product. Translator, Write and API describe tiers as additions — what you already have, plus what you gain. Write can attach as an add-on. Voice stays sales-led.",
          ],
        },
        {
          kind: "moment",
          heading: "Each tier states only what it adds",
          text: "Starter opens with “What’s included.” Advanced answers with “Everything in Starter, plus.” The reader builds a picture instead of re-reading the same checklist.",
        },
        {
          kind: "figure",
          image: {
            src: "/work/pricing-evolution/detail-cumulative-pair.png",
            width: 1480,
            height: 1415,
            displayWidth: 880,
            alt: "Starter and Advanced cards using cumulative What's included and Everything in Starter, plus headers",
            caption: "Repetition across bundle cards gives way to a single progression: each tier names only its delta.",
          },
        },
        {
          kind: "figure",
          image: {
            src: "/work/pricing-evolution/pricing-translator-cumulative.png",
            width: 3024,
            height: 2392,
            alt: "DeepL Translator pricing page comparing Starter, Advanced, Ultimate and Enterprise with cumulative feature descriptions",
            caption: "Translator carries the clearest cumulative grid: four tiers, each building on the last.",
          },
        },
        {
          kind: "strip",
          label: "Write, Voice and API product pages",
          items: [
            {
              src: "/work/pricing-evolution/pricing-write-addon-clean.png",
              width: 3024,
              height: 2208,
              alt: "DeepL Write pricing page comparing Free, Write Pro and DeepL Write for Business",
              caption: "Write stands alone as free, paid add-on and sales-led business — not as another Translator column.",
            },
            {
              src: "/work/pricing-evolution/pricing-voice-clean.png",
              width: 3024,
              height: 2654,
              alt: "DeepL Voice pricing page showing Voice for Meetings and Voice for Conversations as sales-led offers",
              caption: "Voice for Meetings and Voice for Conversations stay parallel use cases, each with a path to Sales — not forced into a tier ladder.",
            },
            {
              src: "/work/pricing-evolution/pricing-api-clean.png",
              width: 3024,
              height: 2776,
              alt: "DeepL API pricing page comparing API Free, API Pro and API Business",
              caption: "API keeps free entry, usage-priced Pro and a custom business route in the same cumulative family.",
            },
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "A pricing system people can scan",
    paragraphs: [
      "A reader can open one product page, see what each tier adds and understand whether Write is included or available beside Translator. Prices, discounts and actions stay with the price block; comparison tables state values once.",
      "The catalog still has four products — but the content no longer asks someone to assemble the offer from three tabs and a repeated feature wall.",
    ],
  },
  coda: {
    prefix: "See DeepL pricing at ",
    href: "https://www.deepl.com/pro",
    linkLabel: "deepl.com/pro",
    suffix: ".",
  },
  next: { href: "/work/checkout", label: "Subscription checkout" },
};
