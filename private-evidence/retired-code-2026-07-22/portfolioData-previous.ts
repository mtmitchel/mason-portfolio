import type {
  EditorialMiniCase,
  PortfolioCard,
  WritingEntry,
} from "./portfolioTypes";

const hardBlockerCover = {
  label: "Usage limit",
  src: "/work/hard-blockers/usage-limit.png",
  width: 1092,
  height: 1500,
  alt: "DeepL Translator usage-limit blocker explaining when free access returns and offering a paid route",
  caption: "The blocker explains when free access returns before presenting the paid route to continue translating.",
};

const bulkDeletionCover = {
  label: "Deletion confirmation",
  src: "/work/bulk-administration/bulk-delete-05-confirmation.png",
  width: 2880,
  height: 2828,
  alt: "Bulk-delete confirmation explaining that selected demo users will lose DeepL subscription access",
  caption: "The confirmation names the access consequence before the admin commits.",
};

const reportCover = {
  label: "Report cover",
  src: "/work/localization-report/report-cover.png",
  width: 1488,
  height: 1100,
  alt: "Cover of DeepL's state of translation and localization report for 2023 and 2024",
  caption: "The cover frames localization as a business question for marketing leaders.",
};

const hiringSuccessCover = {
  label: "Hiring Success guide",
  src: "/work/editorial/smartrecruiters-hiring-success.jpg",
  width: 1000,
  height: 562,
  alt: "SmartRecruiters Definitive Guide to Hiring Success shown as two blue and green books",
  caption: "The public guide organizes Hiring Success as a practical methodology, from strategy through optimization.",
};

const localyzeCover = {
  label: "Forbes Council article artwork",
  src: "/work/editorial/localyze-forbes-ghostwriting.jpg",
  width: 1024,
  height: 682,
  alt: "Forbes Council article photograph of a professional working beside the Arno in Florence",
  caption: "Public article artwork from Mason's existing Localyze writing archive.",
};

export const selectedWorkCards: PortfolioCard[] = [
  { href: "/work/pro-driver-experiments", title: "Hard blockers", meta: "DeepL · Monetization", image: hardBlockerCover },
  { href: "/work/bulk-administration", title: "Bulk user deletion", meta: "DeepL · Destructive admin actions", image: bulkDeletionCover },
  { href: "/work/report-campaign", title: "Localization report campaign", meta: "DeepL · Research and editorial", image: reportCover },
  { href: "/work/hiring-success-methodology", title: "Hiring Success methodology", meta: "SmartRecruiters · Content strategy", image: hiringSuccessCover },
  { href: "/work/localyze-executive-ghostwriting", title: "Executive ghostwriting", meta: "Localyze · CEO thought leadership", image: localyzeCover },
];

export const hiringSuccessCase: EditorialMiniCase = {
  context: "SmartRecruiters · Content strategy",
  title: "Writing a practical Hiring Success methodology",
  hook: "I wrote a comprehensive manual that turned SmartRecruiters' Hiring Success framework into guidance talent-acquisition teams could follow from evaluation through optimization.",
  role: "Writer of the Hiring Success manual",
  collaborators: "SmartRecruiters content and subject-matter stakeholders",
  stakes: "A broad talent-acquisition philosophy needed enough structure to become useful guidance, not just a positioning statement.",
  cover: hiringSuccessCover,
  problem: [
    "The guide had to serve readers at very different levels of maturity. Some needed a definition of Hiring Success; others needed a way to assess their current state, align stakeholders or improve an established operating model.",
    "The published structure makes that breadth navigable by treating the methodology as a sequence: establish the principles, evaluate the current state, define a strategy, transform the operating model and continue optimizing it.",
  ],
  decisions: [
    { title: "Make the framework navigable", text: "The guide is divided into Evaluate, Strategize, Transform and Optimize, giving readers a stable route through a large subject." },
    { title: "Move from principle to application", text: "High-level ideas are followed by scorecards, stakeholder alignment, operating-model and implementation guidance." },
    { title: "Keep the ending operational", text: "The final section returns to measurement, engagement, analytics and extensibility instead of ending on a promotional summary." },
  ],
  pieces: [
    {
      title: "A Proven Methodology That Delivers Recruiting Outcomes",
      excerpt: "Evaluate · Strategize · Transform · Optimize",
      href: "https://www.smartrecruiters.com/hiring-success-guide/",
    },
  ],
  evidenceNote: "The live resource and Mason's existing public archive establish the artifact and his writing contribution. This case does not claim sole ownership, readership, adoption or a measured business result.",
  next: { href: "/work/localyze-executive-ghostwriting", label: "Executive ghostwriting" },
};

export const localyzeGhostwritingCase: EditorialMiniCase = {
  context: "Localyze · Executive ghostwriting",
  title: "Ghostwriting executive perspectives on global mobility",
  hook: "I ghostwrote three Forbes Business Council articles for Localyze co-founder and CEO Hanna Marie Asmussen, translating global-mobility expertise into practical first-person guidance.",
  role: "Executive ghostwriter",
  collaborators: "Localyze co-founder and CEO Hanna Marie Asmussen and content stakeholders",
  stakes: "The articles needed to sound like one informed executive voice while making policy, mobility and international-work questions useful to business leaders.",
  cover: localyzeCover,
  problem: [
    "The set covers three connected but distinct leadership questions: building international hybrid workplaces, choosing locations through a public-policy lens and developing mobility policy during the Great Resignation.",
    "Because the public byline belongs to Hanna Marie Asmussen, the portfolio has to make Mason's behind-the-scenes writing contribution explicit without confusing ghostwriting with public authorship.",
  ],
  decisions: [
    { title: "Anchor advice in an executive point of view", text: "Each piece opens with a workplace tension, establishes a first-person perspective and then moves into recommendations for other leaders." },
    { title: "Keep complexity visible", text: "The writing acknowledges legal, tax, policy and employee-experience trade-offs rather than presenting international work as a simple benefit." },
    { title: "Adapt one voice across related topics", text: "The articles share a measured, practical tone while changing structure to fit a guide, an argument and an experience-led reflection." },
  ],
  pieces: [
    {
      title: "Considering an international hybrid setup?",
      excerpt: "Hybrid working on a global scale adds several layers of logistical complexity.",
      href: "https://www.forbes.com/councils/forbesbusinesscouncil/2021/11/10/considering-an-international-hybrid-setup-what-business-leaders-need-to-know/",
    },
    {
      title: "Why public policy should determine location",
      excerpt: "The best locations will be those where public policies support wellbeing, training, research and social safety nets.",
      href: "https://www.forbes.com/councils/forbesbusinesscouncil/2021/12/06/why-public-policy-should-determine-the-location-of-your-international-entity/",
    },
    {
      title: "Five tips for developing a global mobility policy",
      excerpt: "Before long, hybrid or remote work arrangements will be the rule rather than the exception.",
      href: "https://www.forbes.com/councils/forbesbusinesscouncil/2022/01/06/five-tips-for-developing-a-global-mobility-policy-during-the-great-resignation/",
    },
  ],
  evidenceNote: "The three articles remain live under Hanna Marie Asmussen's public byline. Mason's existing public portfolio records that he wrote them on her behalf; no performance outcome is claimed.",
  next: { href: "/writing", label: "Writing" },
};

export const writingEntries: WritingEntry[] = [
  {
    id: "deepl-data-security",
    employer: "DeepL",
    format: "Technical B2B article",
    title: "Explaining data-security safeguards through behavior",
    context: "A historical editorial example about data handling, encryption, reliability and account controls.",
    excerpt: "Pro texts are deleted after translation and are not used to train DeepL's AI models.",
    observation: "The sentence replaces a broad security promise with two concrete, inspectable behaviors.",
    links: [],
    evidenceNote: "Published in May 2023. The excerpt preserves the historical wording; current product and technical details require a fresh accuracy review before publication.",
  },
  {
    id: "localyze-product-guidance",
    employer: "Localyze",
    format: "Product announcement and instructional guide",
    title: "Introducing a product release and explaining the category",
    context: "Two pieces that move from a redesigned mobility platform to practical global-mobility guidance.",
    excerpt: "We didn't choose to refashion our platform simply because we thought it needed a new look.",
    observation: "The product announcement leads with the reason for change, while the guide gives readers a durable route into an unfamiliar category.",
    links: [
      { href: "https://www.localyze.com/blog/meet-localyze-2-0-the-next-generation-of-global-mobility-technology", label: "Read the Localyze 2.0 announcement" },
      { href: "https://www.localyze.com/blog/the-beginners-guide-to-global-mobility", label: "Read the beginner's guide" },
    ],
    evidenceNote: "Both articles remain live on Localyze's site. This entry demonstrates writing range, not sole product strategy or a measured launch result.",
  },
  {
    id: "smartrecruiters-onboarding",
    employer: "SmartRecruiters",
    format: "Long-form instructional article",
    title: "Connecting candidate and employee experience",
    context: "A practical guide to the value, structure and operational details of employee onboarding.",
    excerpt: "The onboarding process is what bridges the gap between the candidate and employee experience.",
    observation: "The article starts with the journey transition, then expands into definitions, checklists, costs and implementation guidance.",
    links: [{ href: "https://www.smartrecruiters.com/resources/article/everything-you-need-to-know-about-onboarding-in-2020/", label: "Read the onboarding guide" }],
    evidenceNote: "The live article carries Mason's byline. Its title has been updated since the original 2020 publication.",
  },
  {
    id: "joblift-renewable-energy",
    employer: "Joblift",
    format: "Data-led press release",
    title: "Turning job-market analysis into a regional news angle",
    context: "A two-page press release about renewable-energy employment growth in the United States.",
    excerpt: "Wind power adds close to 50,000 jobs to the U.S. economy and spurs growth in the Midwest.",
    observation: "The headline combines the national finding with a regional angle, giving editors two clear routes into the data.",
    links: [{ href: "https://media.journoportfolio.com/users/48175/uploads/6a3f5ea4-c513-411c-beaa-662f289fe14d.pdf", label: "Read the press release" }],
    evidenceNote: "The historical PDF is hosted in Mason's existing public writing archive. The figures are presented as period-specific reporting, not current labor-market data.",
  },
  {
    id: "kitchen-stories-french-recipes",
    employer: "Kitchen Stories",
    format: "Consumer editorial",
    title: "Writing an inviting route into French cooking",
    context: "A concise collection introduction and recipe descriptions for a consumer food audience.",
    excerpt: "French cuisine is often reputed for being overly fancy and expensive when so much of it is simple, honest and affordable.",
    observation: "The introduction acknowledges the category's intimidating reputation, then counters it with approachable examples and sensory description.",
    links: [{ href: "https://www.kitchenstories.com/en/stories/7-unforgettable-french-recipes", label: "Read the article" }],
    evidenceNote: "The live article identifies Mason as a contributor and records its original publication date.",
  },
];
