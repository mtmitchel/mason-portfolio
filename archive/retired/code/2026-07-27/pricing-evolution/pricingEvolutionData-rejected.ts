// Rejected four-product pricing story preserved on 2026-07-27.
import type { PricingCaseStory } from "../../../../../site/app/work/pricing-evolution/PricingCase";

export const pricingEvolutionCase: PricingCaseStory = {
 title: "Simplifying pricing across four products",
 synopsis: [
 "As DeepL’s pricing expanded from one Translator plan grid into four product and packaging models, the work stopped being a matter of writing one clear card.",
 "I turned competitor research and messaging analysis into naming and content rules that gave cumulative tiers, parallel offers, prices, and limits a clear place.",
 ],
 movements: [
 {
 id: "buying-systems",
 title: "One grid became several buying systems",
 blocks: [
 {
 kind: "prose",
 paragraphs: [
 "The earlier pricing page put Translator’s Free, Starter, Advanced, Ultimate, and Enterprise offers in one individual-and-team grid. API had a separate route for developers, but it did not compete for space inside that grid.",
 "Write changed the problem. It introduced a combined Translator and Write route, a standalone Write page, and an account-page upgrade route. Across those routes, the product appeared as DeepL Write, DeepL Write Pro, and Write Pro. The page now had to explain not just how tiers differed, but how products related.",
 ],
 },
 {
 kind: "figure",
 image: {
 label: "Translator’s original plan grid",
 src: "/work/pricing-evolution/legacy-two-tab-grid.png",
 width: 1602,
 height: 900,
 alt: "DeepL pricing page with a Translate Pro tab for Individuals and Teams and a Translate API tab for developers above Free, Starter, Advanced, Ultimate, and Enterprise cards.",
 caption: "Translator fills the individual-and-team plan grid while API keeps a separate developer route.",
 },
 },
 {
 kind: "figure",
 image: {
 label: "The combined product route",
 src: "/work/pricing-evolution/bundle-era-selector-in-context.png",
 width: 3204,
 height: 1208,
 alt: "DeepL pricing page headed Find your perfect plan with tabs for DeepL Translator, DeepL Translator plus DeepL Write, and DeepL API above combined product cards.",
 caption: "A new middle route places Translator and Write inside the same offer.",
 },
 },
 {
 kind: "figure",
 image: {
 label: "Standalone Write and account upgrade",
 src: "/work/pricing-evolution/bundle-era-write-grid.png",
 width: 2482,
 height: 705,
 alt: "Standalone Write pricing page with Free, Write Pro, and Enterprise cards beneath a banner that links existing subscribers to an account-page upgrade.",
 caption: "Write also has its own Free, Write Pro, and Enterprise offers, plus a separate account-page upgrade route.",
 },
 },
 ],
 },
 {
 id: "commercial-relationship",
 title: "Define the relationship before writing the card",
 blocks: [
 {
 kind: "prose",
 paragraphs: [
 "Working with Monetization, I researched how competitors organized products, packages, tiers, incentives, and offer messages. I translated the pricing-page findings into content work: exploring value propositions, shaping product and plan naming rules, and preparing headline and copy variations for testing.",
 "My pivotal judgment was to define the commercial relationship first. Was the offer a tier in a ladder, a parallel choice, an add-on, or a usage-based product? Once that was clear, the name, price, limit, and action could each do one job.",
 "The project’s add-on control brought the Write question into Translator’s grid. My content had to support both states: combined names, prices, and discounts when Write Pro was included; Translator names and prices when it was not. The control itself was a project decision, not my interaction-design decision.",
 ],
 },
 {
 kind: "switcher",
 ariaLabel: "Compare the selected pricing states with and without DeepL Write Pro",
 initialId: "write-pro-included",
 views: [
 {
 id: "write-pro-included",
 label: "Write Pro included",
 image: {
 label: "Write Pro included",
 src: "/work/pricing-evolution/addon-on-cards.png",
 width: 2772,
 height: 915,
 alt: "Pricing cards with Add DeepL Write Pro switched on. Starter, Advanced, and Ultimate use combined product names, combined prices, and discount badges; Enterprise remains a sales offer.",
 caption: "The included state uses combined names and prices, with the bundle discount beside each self-serve price.",
 },
 },
 {
 id: "translator-only",
 label: "Translator only",
 image: {
 label: "Translator only",
 src: "/work/pricing-evolution/addon-off-cards.png",
 width: 2772,
 height: 915,
 alt: "Pricing cards with Add DeepL Write Pro switched off. Starter, Advanced, and Ultimate use Translator names and prices; Enterprise remains a sales offer.",
 caption: "The other state keeps Translator names and prices on the three self-serve cards.",
 },
 },
 ],
 },
 ],
 },
 {
 id: "shared-information",
 title: "State shared information once",
 blocks: [
 {
 kind: "prose",
 paragraphs: [
 "The combined Starter, Advanced, and Ultimate cards each restated the same DeepL Write Pro group. A reader had to scan every list to discover that this part of the offer did not change.",
 "I used a simple content rule: shared information belongs in one place; changing information needs a consistent pattern. One selected Translator state shows the rule as cumulative headings. Starter establishes what is included, Advanced states what it adds to Starter, and Ultimate states what it adds to Advanced.",
 ],
 },
 {
 kind: "figure",
 image: {
 label: "Repeated bundle content",
 src: "/work/pricing-evolution/cards-bundle-repeated.png",
 width: 2048,
 height: 1953,
 alt: "Starter plus Write Pro, Advanced plus Write Pro, and Ultimate plus Write Pro cards. Each card contains a Translator feature group and repeats the same DeepL Write Pro feature group.",
 caption: "Starter, Advanced, and Ultimate each restate the same Write Pro group beneath the Translator features.",
 },
 },
 {
 kind: "figure",
 image: {
 label: "Cumulative Translator headings",
 src: "/work/pricing-evolution/cards-cumulative-tiers.png",
 width: 2208,
 height: 1350,
 alt: "Starter, Advanced, and Ultimate Translator cards using What’s included, Everything in Starter plus, and Everything in Advanced plus headings.",
 caption: "Starter establishes the offer; Advanced and Ultimate state only their additions.",
 },
 },
 {
 kind: "prose",
 paragraphs: [
 "The comparison table needed the same separation. When every value repeated “per user,” the qualifier belonged in the row label. When every glossary value repeated “glossary,” the noun belonged in the label. Cells could then keep only the changing value, plus an intrinsic unit such as MB when the unit was part of the value.",
 ],
 },
 {
 kind: "switcher",
 ariaLabel: "Compare shared wording in table values and row labels",
 initialId: "shared-words-in-values",
 views: [
 {
 id: "shared-words-in-values",
 label: "Shared words in values",
 image: {
 label: "Shared words in values",
 src: "/work/pricing-evolution/table-values-repeat-label.png",
 width: 2768,
 height: 1167,
 alt: "Comparison table where file translation values repeat per user and glossary values repeat the word glossary across the plan columns.",
 caption: "The values repeat nouns and qualifiers that do not change between plans.",
 },
 },
 {
 id: "shared-words-in-labels",
 label: "Shared words in labels",
 image: {
 label: "Shared words in labels",
 src: "/work/pricing-evolution/table-labels-own-qualifier.png",
 width: 2768,
 height: 1167,
 alt: "Comparison table where File translations per user per month and Glossaries carry the shared wording in row labels, leaving changing numbers in the cells.",
 caption: "The labels carry shared wording; cells retain the changing value and any intrinsic unit.",
 },
 },
 ],
 },
 ],
 },
 {
 id: "product-patterns",
 title: "Let each commercial model use the right pattern",
 blocks: [
 {
 kind: "prose",
 paragraphs: [
 "The rule was consistent, but the card pattern was not universal. Translator used a cumulative tier ladder. Write combined a free offer, a self-serve paid offer, and a separately named business offer. Voice presented two parallel use cases. API combined a free tier, subscription and usage pricing, and a custom business offer.",
 "Write and API both use cumulative headings, but for different relationships. Voice does not use them: Meetings and Conversations sit side by side because neither offer is the next rung above the other.",
 ],
 },
 {
 kind: "switcher",
 ariaLabel: "Compare the selected pricing patterns for Write, Voice, and API",
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
 alt: "DeepL Write cards for Free, Write Pro, and DeepL Write for Business. The paid offers use cumulative headings and the business offer keeps a separate name.",
 caption: "Write uses a cumulative ladder for its self-serve offer and a separately named business offer.",
 },
 },
 {
 id: "voice",
 label: "Voice",
 image: {
 label: "Voice",
 src: "/work/pricing-evolution/product-voice-cards.png",
 width: 1700,
 height: 1358,
 alt: "DeepL Voice for Meetings and DeepL Voice for Conversations cards side by side, each with its own description, sales action, and feature list.",
 caption: "Voice presents Meetings and Conversations as parallel use-case offers.",
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
 alt: "DeepL API Free, DeepL API Pro with a monthly subscription and usage price, and DeepL API for Business with custom pricing.",
 caption: "API combines a free tier, subscription and usage pricing, and a custom business offer.",
 },
 },
 ],
 },
 ],
 },
 ],
 closing: {
 heading: "One content rule, several pricing models",
 paragraphs: [
 "The selected work demonstrates a content model that can hold cumulative ladders, parallel offers, add-ons, subscription pricing, and usage pricing without forcing every product into the same card template.",
 "The common decision was not a template. It was defining the commercial relationship first, then giving shared information one place and changing information a consistent pattern.",
 ],
 },
 next: { href: "/work/checkout", label: "Checkout across four purchase states" },
};
