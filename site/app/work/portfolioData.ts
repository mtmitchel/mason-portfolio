import type {
  PortfolioCard,
  WritingEntry,
} from "./portfolioTypes";

const upgradePromptsCover = {
  label: "Upgrade to DeepL Pro",
  src: "/work/home-covers/deepl-upgrade-to-pro.png",
  width: 1728,
  height: 1728,
  alt: "DeepL illustration of a person approaching an Upgrade to DeepL Pro sign across a multilingual language platform",
  caption: "DeepL upgrade illustration used as a homepage cover; the case page contains the upgrade-prompt evidence.",
};

const accountTeamSecurityCover = {
  label: "Account security illustration",
  src: "/work/home-covers/account-security-cards-loop-poster.png",
  width: 1280,
  height: 1280,
  alt: "Isometric lock beside stacked cards for account and security features",
  caption: "Animated account-security illustration used as a homepage cover; the case page contains the account and team-writing evidence.",
};

const accountTeamSecurityVideo = {
  src: "/work/home-covers/account-security-cards-loop.mp4",
  poster: accountTeamSecurityCover.src,
  width: accountTeamSecurityCover.width,
  height: accountTeamSecurityCover.height,
};

const pricingEvolutionCover = {
  label: "Language cube illustration",
  src: "/work/home-covers/pricing-language-cubes-loop-poster.png",
  width: 1280,
  height: 1280,
  alt: "Blue language-symbol cubes hovering above a stacked group",
  caption: "Animated language-cube illustration used as a homepage cover; the case page contains the pricing-system evidence.",
};

const pricingEvolutionVideo = {
  src: "/work/home-covers/pricing-language-cubes-loop.mp4",
  poster: pricingEvolutionCover.src,
  width: pricingEvolutionCover.width,
  height: pricingEvolutionCover.height,
};

const checkoutCover = {
  label: "Global ecommerce",
  src: "/work/home-covers/deepl-retail-ecommerce.svg",
  width: 575,
  height: 575,
  alt: "DeepL illustration of a shopping cart, payment card and multilingual buy labels",
  caption: "Current DeepL ecommerce artwork used as a homepage cover; the case page contains the checkout evidence.",
};

const productNamingPreview = {
  label: "Follow the API convention",
  primary: "DeepL Write Pro",
  alternative: "Not DeepL Pro Write",
};

const voiceProductCover = {
  label: "DeepL Voice offer comparison",
  src: "/work/voice-product/voice-offer-comparison.png",
  width: 3024,
  height: 2654,
  alt: "DeepL pricing surface comparing Voice for Meetings and Voice for Conversations",
  caption: "The comparison gives DeepL Voice for Meetings and Conversations distinct use cases inside one product family.",
};

const reportCover = {
  label: "Report cover",
  src: "/work/report-campaign/report-cover.png",
  width: 978,
  height: 1369,
  alt: "Full cover of DeepL's state of translation and localization report for 2023 and 2024",
  caption: "The full report cover frames localization as a business question for marketing leaders.",
};

const localyzeCover = {
  label: "Passport and travel illustration",
  src: "/work/home-covers/localyze-passport-loop-poster.png",
  width: 1280,
  height: 1280,
  alt: "Line illustration of a passport, airplane route and clouds",
  caption: "Passport and travel animation used as a homepage cover; the case page contains the published writing evidence.",
};

const localyzeVideo = {
  src: "/work/home-covers/localyze-passport-loop.mp4",
  poster: localyzeCover.src,
  width: localyzeCover.width,
  height: localyzeCover.height,
};

export const selectedWorkCards: PortfolioCard[] = [
  { href: "/work/upgrade-prompts", title: "Upgrade prompts across Translator and Write", meta: "DeepL · Monetization", image: upgradePromptsCover },
  { href: "/work/pricing-evolution", title: "Making the more expensive plan explain itself", meta: "DeepL · Pricing evolution", image: pricingEvolutionCover, video: pricingEvolutionVideo },
  { href: "/work/checkout", title: "How simplifying DeepL’s checkout helped add €2.4M ARR", meta: "DeepL · Monetization experiment", image: checkoutCover },
  { href: "/work/account-team-security", title: "Account recovery and team administration", meta: "DeepL · Account and team journeys", image: accountTeamSecurityCover, video: accountTeamSecurityVideo },
  {
    href: "/work/report-campaign",
    title: "Turning localization research into a multi-format campaign",
    meta: "DeepL · Research and editorial",
    image: reportCover,
    imageDisplay: "full-document",
  },
  { href: "/work/localyze-executive-ghostwriting", title: "Executive ghostwriting on global mobility", meta: "Localyze · CEO thought leadership", image: localyzeCover, video: localyzeVideo },
  { href: "/work/product-naming", title: "A working naming framework for a growing product portfolio", meta: "DeepL · Product naming", textPreview: productNamingPreview },
  { href: "/work/voice-product", title: "Giving DeepL Voice two clear jobs", meta: "DeepL · Product positioning", image: voiceProductCover },
];

export const writingEntries: WritingEntry[] = [
  {
    id: "localyze-product-guidance",
    employer: "Localyze",
    format: "Product announcement and beginner's guide",
    title: "Introducing Localyze 2.0 and explaining global mobility",
    context: "Two pieces move from a platform announcement to an introduction for readers new to global mobility.",
    samples: [
      {
        kind: "quote",
        text: "We didn't choose to refashion our platform simply because we thought it needed a new look or wanted to strengthen our position in the marketplace.",
      },
      {
        kind: "quote",
        text: "In this article, we’ll cover the basics of Global Mobility: what it is, why it’s beneficial, and what to keep in mind when building out a Global Mobility strategy.",
      },
    ],
    decision: "I led the announcement with the reason for change; in the guide, I defined the category and previewed a clear route through it.",
    links: [
      { href: "https://www.localyze.com/blog/meet-localyze-2-0-the-next-generation-of-global-mobility-technology", label: "Read the Localyze 2.0 announcement" },
      { href: "https://www.localyze.com/blog/the-beginners-guide-to-global-mobility", label: "Read the beginner's guide" },
    ],
  },
  {
    id: "smartrecruiters-hiring-success",
    employer: "SmartRecruiters",
    format: "Methodology guide",
    title: "The Definitive Guide to Hiring Success",
    context: "A methodology guide organizes hiring transformation into four connected stages.",
    samples: [{ kind: "structure", text: "Four parts: Evaluate, Strategize, Transform, Optimize." }],
    decision: "I used four parts to give readers a stable route from evaluating the current state to improving it.",
    publicationContext: "I wrote the 2019 edition; the linked guide has since been replaced by a newer gated edition.",
    links: [{ href: "https://www.smartrecruiters.com/hiring-success-guide/", label: "View the current SmartRecruiters guide" }],
  },
  {
    id: "smartrecruiters-onboarding",
    employer: "SmartRecruiters",
    format: "Long-form instructional article",
    title: "Connecting candidate and employee experience",
    context: "A long-form guide connects the end of recruiting with the start of employment.",
    samples: [{ kind: "quote", text: "The onboarding process is what bridges the gap between the candidate and employee experience." }],
    decision: "I started with the journey transition, then expanded into definitions, checklists, costs and implementation guidance.",
    publicationContext: "I wrote the original 2020 article; the live page now has a later title and SmartRecruiters Team byline.",
    links: [{ href: "https://www.smartrecruiters.com/resources/article/everything-you-need-to-know-about-onboarding-in-2020/", label: "Read the onboarding guide" }],
  },
  {
    id: "joblift-renewable-energy",
    employer: "Joblift",
    format: "Data-led press release",
    title: "Turning job-market analysis into a regional news angle",
    context: "A press release turns job-market data into a national finding and a regional news angle.",
    samples: [{ kind: "headline", text: "Renewable Energy: Wind Power Adds Close to 50,000 Jobs to U.S. Economy and Spurs Growth in Midwest" }],
    decision: "I combined the national finding with a regional angle, giving editors two clear routes into the data.",
    publicationContext: "The figures belong to the release’s original reporting period.",
    links: [{ href: "https://media.journoportfolio.com/users/48175/uploads/6a3f5ea4-c513-411c-beaa-662f289fe14d.pdf", label: "Read the press release" }],
  },
  {
    id: "kitchen-stories-french-recipes",
    employer: "Kitchen Stories",
    format: "Consumer editorial",
    title: "Making French cooking feel approachable",
    context: "A short recipe blurb introduces French cooking to a consumer audience.",
    samples: [{ kind: "quote", text: "French cuisine is often reputed for being overly fancy and expensive, when, in fact, so much of it is simple, honest, and affordable—coq au vin exemplifies this." }],
    decision: "I named French cuisine’s intimidating reputation, then undercut it with the dish’s simplicity.",
    links: [{ href: "https://www.kitchenstories.com/en/stories/7-unforgettable-french-recipes", label: "Read the article" }],
  },
];
