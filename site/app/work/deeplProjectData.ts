import type { ProductCaseStory } from "./portfolioTypes";

export const upgradePromptsProject: ProductCaseStory = {
  context: "DeepL · Monetization",
  href: "/work/upgrade-prompts",
  cardTitle: "Upgrade prompts across Translator and Write",
  title: "Writing upgrade prompts across DeepL Translator and Write",
  hook: "Free plans end mid-task: a usage cap, a file that is too large or a Pro-only feature. I wrote the prompts for those moments across Translator and Write—why work stopped, when the free path returns and what Pro adds to the task at hand.",
  role: "UX copywriter for every blocker in the experiment wave",
  collaborators: "Monetization, product design, product management and engineering",
  stakes: "Each interruption had to explain its reason and make the paid route relevant to the task in progress.",
  problemTitle: "One commercial goal, several different interruptions",
  constraints: "The wave covered different limits, products, surfaces and account states. The structure needed to stay reusable without turning every block into the same generic Pro pitch.",
  experienceTitle: "An offer-first headline with the limit explained in the body",
  cover: {
    label: "Usage-limit offer",
    src: "/work/hard-blockers/usage-limit.png",
    width: 1092,
    height: 1500,
    alt: "DeepL Translator usage-limit prompt with an offer-first headline, explanatory body copy, paid benefits and a trial action",
    caption: "The headline carries the offer; the body names the usage limit and its 24-hour reset before the benefit list.",
  },
  problem: [
    "Reaching a translation limit, exhausting a document allowance and losing access to a paid Write feature each needed a different explanation. The user should not have to infer why the product interrupted them.",
    "Across the wave, the repeated jobs stayed the same: name the block, connect paid value to the interrupted task, identify the relevant product and give the user an accurate next step.",
  ],
  transformation: {
    label: "Replace a generic upgrade pitch with a specific reason",
    before: "Upgrade to Pro",
    after: "You've reached your free usage limit",
  },
  decisions: [
    { title: "State the reason for the block", text: "Every blocker names its reason—usage, file size or feature access—in the first line of body copy, so the interruption is never unexplained." },
    { title: "Match benefits to the task", text: "Translator prompts lead with continued translation; Write prompts lead with writing quality, style and product-specific access." },
    { title: "Account for existing subscriptions", text: "The paired Write modals show why a free user and a Translator Pro customer need different commercial promises for the same added product." },
    { title: "Make the available routes explicit", text: "Where waiting or reducing the task remains possible, the content says so. Where upgrading is the only route forward, the blocker does not imply otherwise." },
  ],
  decisionsTitle: "Four decisions that kept the paid promise accurate",
  tradeoff: "A single generic modal would be easier to maintain. A shared structure with product- and limit-specific content takes more work, but keeps the upgrade request accurate.",
  sequence: [
    { label: "Formality", src: "/work/hard-blockers/formality.png", width: 1092, height: 1150, alt: "DeepL Translator prompt for the formal and informal tone feature with a Pro trial action", caption: "The prompt connects the paid offer to the tone control the user was trying to access." },
    { label: "More glossaries", src: "/work/hard-blockers/glossaries.png", width: 1092, height: 1388, alt: "DeepL Translator prompt for creating multiple glossaries with a Pro trial action", caption: "The glossary prompt explains the product limit and keeps its benefits specific to terminology work." },
    { label: "Larger documents", src: "/work/hard-blockers/document-size.png", width: 1092, height: 1204, alt: "DeepL document translation prompt explaining the file-size limit and paid route", caption: "In the design file, {5} is a variable replaced with the user's file-size limit; the sentence ties the offer to the document that exceeded it." },
    { label: "Document allowance", src: "/work/hard-blockers/remaining-documents.png", width: 546, height: 626, alt: "DeepL document translation prompt explaining the remaining monthly document allowance and Pro trial route", caption: "In the design file, {1} and {16} are variables replaced with the user's remaining and total document allowances." },
    { label: "Network usage", src: "/work/hard-blockers/network-usage-limit.png", width: 1092, height: 1600, alt: "DeepL Translator network-usage prompt with an enterprise account note and Pro trial action", caption: "The network variant adds account context while preserving the same reason, value and next-step structure." },
    { label: "Write · Free account", src: "/work/hard-blockers/write-pro-illustrated-free.png", width: 1648, height: 1504, alt: "Illustrated DeepL Write Pro prompt for a free account with benefits, a 30-day trial and a return-later option", caption: "The free-account version offers a trial while keeping the wait-and-return route explicit." },
    { label: "Write · Translator Pro account", src: "/work/hard-blockers/write-pro-illustrated-translator-pro.png", width: 1648, height: 1504, alt: "Illustrated DeepL Write Pro prompt for an existing Translator Pro customer with benefits and an upgrade action", caption: "The paired Translator Pro version keeps the structure but changes the commercial promise and action for the account state." },
  ],
  outcome: [
    "The prompts became a coherent conversion system: each one names the interruption, makes the paid value contextual and carries a clear product promise into the next step.",
    "Across the whole experiment wave, paid conversion rose 12% and ARR rose by seven figures. That result belongs to the wave, not to any single screen here.",
  ],
  outcomeTitle: "A reusable system with a wave-level result",
  evidenceNote: "The selected frames document the writing pattern across Translator and Write. The conversion and ARR result is recorded at the scope of the complete experiment wave.",
  next: { href: "/work/pricing-evolution", label: "Pricing evolution" },
};

export const checkoutProject: ProductCaseStory = {
  context: "DeepL · Subscription checkout",
  href: "/work/checkout",
  cardTitle: "Subscription checkout",
  title: "Writing checkout for trial, no-trial, bundle and team purchases",
  hook: "I wrote the sign-up, plan, billing, payment, consent and confirmation copy across four purchase states whose product, price, timing and eligibility changed.",
  role: "UX copywriter and content designer across sign-up and checkout",
  collaborators: "Growth, product design, legal, localization and engineering",
  stakes: "Each route had to make the product, price, timing, eligibility and commitment accurate before confirmation.",
  problemTitle: "One checkout structure carried four different promises",
  constraints: "Product combinations, trial eligibility, seat count, billing cadence and customer type all changed the visible commitment without changing the basic route.",
  experienceTitle: "A bundle summary that keeps both products and the payment timeline together",
  cover: {
    label: "Bundle checkout",
    src: "/work/subscription-checkout/fresh/bundle-checkout.png",
    width: 3024,
    height: 2864,
    alt: "DeepL checkout for a Translator and Write Pro bundle with plan, billing, payment and order summary",
    caption: "The bundle state keeps both products, the combined price, trial timing and final commitment in one summary.",
  },
  problem: [
    "Sign-up needed to confirm the offer the customer had chosen; checkout needed to keep product, plan, seat count, billing cadence, payment timing and consent consistent with it.",
    "A single condition could change the promise. A no-trial account owed money immediately, a bundle included two products and a team order multiplied price and entitlements by seat count.",
  ],
  transformation: {
    label: "Turn a fixed checkout into a conditional content system",
    before: "One generic purchase message",
    after: "Update product, price, seats, trial timing, consent and confirmation together",
  },
  decisions: [
    { title: "Carry the offer into sign-up", text: "Start my 30-day free trial confirms the selected offer while account creation remains the immediate action." },
    { title: "Make the summary the source of truth", text: "Product, quantity, amount due today, later charge and billing cadence remain visible beside the final action." },
    { title: "Treat eligibility as a content state", text: "Trial language, the due-today amount, activation timing, consent and reassurance change together when an account is ineligible." },
    { title: "Keep variables consistent", text: "Bundle contents and seat count update product names, totals, savings and included features as one linked state." },
  ],
  decisionsTitle: "Four decisions that kept each commitment accurate",
  tradeoff: "Reusing one structure keeps the route familiar; the content still has to make bundle, team and no-trial states materially different.",
  sequence: [
    { label: "Sign-up continuity", src: "/work/subscription-checkout/fresh/start-my-free-trial.png", width: 3024, height: 1800, alt: "DeepL account-creation screen headed Start my 30-day free trial", caption: "The heading carries the selected trial into account creation while the button still creates the account." },
    { label: "Team purchase", src: "/work/subscription-checkout/fresh/team-license-checkout.png", width: 3024, height: 2864, alt: "DeepL checkout for twenty team licenses with seat-adjusted pricing and plan details", caption: "The team state keeps 20 users consistent across the selector, order summary, savings and included allowances." },
    { label: "No-trial checkout", src: "/work/subscription-checkout/fresh/no-trial-ultimate-checkout.png", width: 3024, height: 2738, alt: "DeepL checkout without a free trial showing the immediate charge and withdrawal acknowledgement", caption: "The no-trial state removes the trial promise, shows the amount due today and adds the immediate-start acknowledgement." },
  ],
  outcome: ["The result is one content model that carries the offer from account creation into checkout and changes product, price, seat, eligibility and consent content as linked states."],
  outcomeTitle: "Four coherent states from one purchase model",
  evidenceNote: "The four design-file frames document sign-up continuity plus complete bundle, team and no-trial purchase states.",
  next: { href: "/work/account-team-security", label: "Account, team and security writing" },
};

export const projects: ProductCaseStory[] = [
  upgradePromptsProject,
  checkoutProject,
];

export const projectsByPath = Object.fromEntries(projects.map((project) => [project.href, project]));
