import type {
  ArtifactCollection,
  EditorialMiniCase,
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

const reportCover = {
  label: "Report cover",
  src: "/work/localization-report/report-cover.png",
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
  { href: "/work/pricing-evolution", title: "Simplifying pricing across four products", meta: "DeepL · Pricing evolution", image: pricingEvolutionCover, video: pricingEvolutionVideo },
  { href: "/work/checkout", title: "Subscription checkout", meta: "DeepL · Purchase journeys", image: checkoutCover },
  { href: "/work/account-team-security", title: "Account, team and security writing", meta: "DeepL · Account and team journeys", image: accountTeamSecurityCover, video: accountTeamSecurityVideo },
  { href: "/work/report-campaign", title: "Localization report campaign", meta: "DeepL · Research and editorial", image: reportCover },
  { href: "/work/localyze-executive-ghostwriting", title: "Executive ghostwriting", meta: "Localyze · CEO thought leadership", image: localyzeCover, video: localyzeVideo },
];

export const accountTeamSecurityCollection: ArtifactCollection = {
  context: "DeepL · Account and team administration",
  title: "Writing account, team and security journeys",
  hook: "A collection of account access, recovery and team-administration work: helping people recover when authentication fails and making high-impact actions clear before they affect many users.",
  role: "UX copywriter and content designer across account and team administration",
  collaborators: "Enterprise product, account security, product design and engineering",
  stakes: "Small interface states could change subscription access, affect an entire team or determine whether someone could get back into an account.",
  sections: [
    {
      id: "account-security",
      label: "Account security",
      title: "Giving people a recovery path when authentication fails",
      intro: [
        "Authentication copy has to distinguish an incorrect code from lost access. The login states keep retry, recovery email and administrator support available without treating them as the same problem.",
        "The sequence then explains what a security reset changes and confirms when multi-factor authentication is active again. The public selection excludes authenticator secrets, private email addresses and account identifiers.",
      ],
      images: [
        { label: "Authentication entry", src: "/work/account-team-security/account-security-login.png", width: 2880, height: 1950, alt: "DeepL login screen asking for a six-digit authentication code and offering a recovery email route", caption: "The default state explains the required code and keeps recovery visible without competing with the main login action." },
        { label: "Authentication error", src: "/work/account-team-security/account-security-authentication-error.png", width: 2880, height: 1938, alt: "DeepL login error explaining that the authentication code is incorrect and offering recovery email or administrator support", caption: "The error separates an incorrect code from lost access, then gives each problem a relevant next step." },
        { label: "Reset acknowledgement", src: "/work/account-team-security/account-security-reset-required.png", width: 1176, height: 720, alt: "Dialog explaining that multi-factor authentication was reset and must be set up again", caption: "After recovery, the acknowledgement states both the protection goal and the consequence: the old authenticator entry no longer works." },
        { label: "Protection restored", src: "/work/account-team-security/account-security-protection-restored.png", width: 2360, height: 734, alt: "DeepL account settings showing personal multi-factor authentication with Active status", caption: "The final account state makes restored protection visible as an explicit status." },
      ],
    },
    {
      id: "bulk-user-deletion",
      label: "Team administration",
      title: "Making a high-impact team action explicit",
      intro: [
        "Bulk deletion is one representative pattern within the wider account and team collection, not a standalone portfolio story. The confirmation keeps the affected users visible and names the access consequence before the destructive action.",
        "The frames use fictional domain.com accounts. The result crop keeps the Users deleted toast and zero-result footer while excluding the contradictory celebratory empty-state sentence.",
      ],
      images: [
        { label: "Deletion confirmation", src: "/work/bulk-administration/bulk-delete-confirmation-card.png", width: 2000, height: 1500, alt: "Close crop of a bulk-delete confirmation over selected fictional user rows", caption: "The focused crop connects the destructive action, affected users and loss of subscription access without repeating the full table journey." },
        { label: "Visible result", src: "/work/bulk-administration/bulk-delete-06-result-detail.png", width: 2600, height: 500, alt: "Users deleted toast above a zero-result table footer reading Displaying 0-0 of 0", caption: "The completion toast and zero-result footer make the result verifiable." },
      ],
    },
  ],
  evidenceNote: "The security sequence and team-administration frames establish the visible designed states and Mason's supported content contribution. They do not claim that Mason owned every visible string, that every treatment shipped or that the work changed security adoption, support volume or business performance. The MFA evidence is not presented as evidence of SSO work.",
  next: { href: "/work/report-campaign", label: "Localization report campaign" },
};

export const localyzeGhostwritingCase: EditorialMiniCase = {
  context: "Localyze · Executive ghostwriting",
  title: "Ghostwriting executive perspectives on global mobility",
  hook: "I ghostwrote three Forbes Business Council articles for Localyze co-founder and CEO Hanna Marie Asmussen, translating global-mobility expertise into practical first-person guidance.",
  role: "Executive ghostwriter",
  collaborators: "Localyze co-founder and CEO Hanna Marie Asmussen and content stakeholders",
  stakes: "The articles needed to sound like one informed executive voice while making policy, mobility and international-work questions useful to business leaders.",
  assignmentTitle: "Three leadership questions, one consistent voice",
  problem: [
    "The set covers three connected but distinct questions: building international hybrid workplaces, choosing locations through a public-policy lens and developing mobility policy during the Great Resignation.",
    "I wrote the articles for Hanna Marie Asmussen. Forbes published them under her name, so the public byline and my ghostwriting contribution are separate parts of the record.",
  ],
  decisionsTitle: "How the published articles carry the executive voice",
  decisions: [
    { title: "Anchor advice in an executive point of view", text: "Each piece opens with a workplace tension, establishes a first-person perspective and then moves into recommendations for other leaders." },
    { title: "Keep complexity visible", text: "The writing acknowledges legal, tax, policy and employee-experience trade-offs rather than presenting international work as a simple benefit." },
    { title: "Adapt one voice across related topics", text: "The articles share a measured, practical tone while changing structure to fit a guide, an argument and an experience-led reflection." },
  ],
  pieces: [
    {
      title: "Considering An International Hybrid Setup? What Business Leaders Need To Know",
      sample: { kind: "quote", text: "Without a doubt, hybrid working on a global scale adds several layers of logistical complexity." },
      href: "https://www.forbes.com/councils/forbesbusinesscouncil/2021/11/10/considering-an-international-hybrid-setup-what-business-leaders-need-to-know/",
      linkLabel: "Read the international hybrid setup article",
    },
    {
      title: "Why Public Policy Should Determine The Location Of Your International Entity",
      sample: { kind: "quote", text: "The best locations will be those where public policies ensure well-being, support for ongoing training and research and social safety nets." },
      href: "https://www.forbes.com/councils/forbesbusinesscouncil/2021/12/06/why-public-policy-should-determine-the-location-of-your-international-entity/",
      linkLabel: "Read the public policy article",
    },
    {
      title: "Five Tips For Developing A Global Mobility Policy During The Great Resignation",
      sample: { kind: "quote", text: "But before long, hybrid or remote work arrangements will be the rule rather than the exception, and flexibility is only a part of the Great Resignation equation." },
      href: "https://www.forbes.com/councils/forbesbusinesscouncil/2022/01/06/five-tips-for-developing-a-global-mobility-policy-during-the-great-resignation/",
      linkLabel: "Read the global mobility policy article",
    },
  ],
  evidenceNote: "The three Forbes articles are public under Hanna Marie Asmussen's byline. Mason's public writing archive identifies them as work he wrote on her behalf. Together, those artifacts support the ghostwriting contribution, the public-byline distinction and the published lifecycle.",
  next: { href: "/writing", label: "Writing" },
};

export const writingEntries: WritingEntry[] = [
  {
    id: "localyze-product-guidance",
    employer: "Localyze",
    format: "Product announcement and beginner's guide",
    title: "Introducing Localyze 2.0 and explaining global mobility",
    context: "Two pieces that move from the reason for a platform redesign to practical guidance for readers new to global mobility.",
    sample: { kind: "quote", text: "We didn't choose to refashion our platform simply because we thought it needed a new look or wanted to strengthen our position in the marketplace." },
    observation: "The announcement leads with the reason for change; the guide assumes the category is unfamiliar and builds the reader's understanding from the beginning.",
    links: [
      { href: "https://www.localyze.com/blog/meet-localyze-2-0-the-next-generation-of-global-mobility-technology", label: "Read the Localyze 2.0 announcement" },
      { href: "https://www.localyze.com/blog/the-beginners-guide-to-global-mobility", label: "Read the beginner's guide" },
    ],
    evidenceNote: "Both articles remain live on Localyze's site and show Mason's product-announcement and instructional writing.",
  },
  {
    id: "smartrecruiters-hiring-success",
    employer: "SmartRecruiters",
    format: "Methodology guide",
    title: "The Definitive Guide to Hiring Success",
    context: "Mason wrote the 2019 edition of this guide, turning the Hiring Success methodology into a route from evaluation through ongoing optimization.",
    sample: { kind: "structure", text: "Four parts: Evaluate, Strategize, Transform, Optimize." },
    observation: "The four-part structure gives readers at different stages a stable route through the methodology, from assessing the current state to improving it.",
    links: [{ href: "https://www.smartrecruiters.com/hiring-success-guide/", label: "View the current SmartRecruiters guide" }],
    evidenceNote: "SmartRecruiters has updated the guide since the 2019 edition Mason wrote. The current resource is gated behind a short form and now contains newer material.",
  },
  {
    id: "smartrecruiters-onboarding",
    employer: "SmartRecruiters",
    format: "Long-form instructional article",
    title: "Connecting candidate and employee experience",
    context: "A practical guide to the value, structure and operational details of employee onboarding.",
    sample: { kind: "quote", text: "The onboarding process is what bridges the gap between the candidate and employee experience." },
    observation: "The article starts with the journey transition, then expands into definitions, checklists, costs and implementation guidance.",
    links: [{ href: "https://www.smartrecruiters.com/resources/article/everything-you-need-to-know-about-onboarding-in-2020/", label: "Read the onboarding guide" }],
    evidenceNote: "Mason's public archive records his authorship of the original 2020 article. SmartRecruiters has since retitled the live page and now credits SmartRecruiters Team.",
  },
  {
    id: "joblift-renewable-energy",
    employer: "Joblift",
    format: "Data-led press release",
    title: "Turning job-market analysis into a regional news angle",
    context: "A two-page press release about renewable-energy employment growth in the United States.",
    sample: { kind: "headline", text: "Renewable Energy: Wind Power Adds Close to 50,000 Jobs to U.S. Economy and Spurs Growth in Midwest" },
    observation: "The headline combines the national finding with a regional angle, giving editors two clear routes into the data.",
    links: [{ href: "https://media.journoportfolio.com/users/48175/uploads/6a3f5ea4-c513-411c-beaa-662f289fe14d.pdf", label: "Read the press release" }],
    evidenceNote: "The historical PDF is hosted in Mason's public writing archive; its figures are period-specific reporting, not current labor-market data.",
  },
  {
    id: "kitchen-stories-french-recipes",
    employer: "Kitchen Stories",
    format: "Consumer editorial",
    title: "Making French cooking feel approachable",
    context: "A concise recipe blurb for a consumer food audience.",
    sample: { kind: "quote", text: "French cuisine is often reputed for being overly fancy and expensive, when, in fact, so much of it is simple, honest, and affordable—coq au vin exemplifies this." },
    observation: "The coq au vin blurb takes the category's reputation head-on, then undercuts it with the dish.",
    links: [{ href: "https://www.kitchenstories.com/en/stories/7-unforgettable-french-recipes", label: "Read the article" }],
    evidenceNote: "The live article identifies Mason as a contributor and records its original publication date.",
  },
];
