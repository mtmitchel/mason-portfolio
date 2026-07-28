import Link from "next/link";
import { ChapterBackLink, ChapterFigure } from "../../components/ChapterCaseElements";
import EvidenceSwitcher from "../../components/EvidenceSwitcher";
import ImageComparison from "../../components/ImageComparison";
import { SiteFooter, SiteHeader } from "../../components/PortfolioChrome";
import type { StoryEvidenceView, StoryImage } from "../portfolioTypes";

const trialSignUpFull: StoryImage = {
  label: "Trial sign-up",
  src: "/work/checkout/start-my-free-trial.png",
  width: 3024,
  height: 1800,
  alt: "DeepL account-creation screen headed Start my 30-day free trial",
  caption: "Repeat the selected trial in the heading while keeping account creation as the button action.",
};

const bundleFull: StoryImage = {
  label: "Bundle checkout",
  src: "/work/checkout/bundle-checkout.png",
  width: 3024,
  height: 2864,
  alt: "DeepL checkout for a Translator and Write Pro bundle with plan, billing, payment and order summary",
  caption: "Keep both products, the combined price, trial timing and final commitment together in the order summary.",
};

const teamFull: StoryImage = {
  label: "Team purchase",
  src: "/work/checkout/team-license-checkout.png",
  width: 3024,
  height: 2864,
  alt: "DeepL checkout for twenty team licenses with seat-adjusted pricing and plan details",
  caption: "Keep 20 users consistent across the selector, order summary, savings and included allowances.",
};

const noTrialFull: StoryImage = {
  label: "No-trial checkout",
  src: "/work/checkout/no-trial-ultimate-checkout.png",
  width: 3024,
  height: 2738,
  alt: "DeepL checkout without a free trial showing the immediate charge and withdrawal acknowledgement",
  caption: "Remove the trial promise, show the amount due today and add the immediate-start acknowledgement.",
};

const trialSignUpDetail: StoryImage = {
  label: "Trial sign-up detail",
  src: "/work/checkout/trial-sign-up-detail.png",
  width: 1200,
  height: 1220,
  alt: "Detail of DeepL account creation showing the 30-day trial heading and account form",
  caption: "Repeat the selected 30-day trial in the page heading while keeping account creation as the button action.",
};

const bundleDetail: StoryImage = {
  label: "Bundle checkout detail",
  src: "/work/checkout/bundle-checkout-detail.png",
  width: 2500,
  height: 1500,
  alt: "Detail of a DeepL bundle checkout showing Translator and Write, trial timing and the order summary",
  caption: "Keep both products and one user visible beside €0 due today, the later charge and “Begin subscription.”",
};

const teamDetail: StoryImage = {
  label: "Team checkout detail",
  src: "/work/checkout/team-purchase-detail.png",
  width: 2500,
  height: 1500,
  alt: "Detail of a DeepL team checkout showing twenty users, price, savings and included allowances",
  caption: "Repeat 20 users in the selector and order summary, then update price, savings and allowances to match.",
};

const noTrialDetail: StoryImage = {
  label: "No-trial checkout detail",
  src: "/work/checkout/no-trial-checkout-detail.png",
  width: 2500,
  height: 1500,
  alt: "Detail of a DeepL no-trial checkout showing the immediate charge and withdrawal acknowledgement",
  caption: "Remove the trial promise, show the amount due today and add the immediate-start acknowledgement before purchase.",
};

const trialFaqCollapsed: StoryImage = {
  label: "Trial questions collapsed",
  src: "/work/checkout/trial-faq-collapsed.png",
  width: 1080,
  height: 1590,
  alt: "DeepL trial checkout summary with collapsed questions about cancellation, charge timing and included Pro features",
  caption: "Three questions surface the uncertainties most likely to block a trial decision without competing with the order summary.",
};

const trialFaqExpanded: StoryImage = {
  label: "Trial questions expanded",
  src: "/work/checkout/trial-faq-expanded.png",
  width: 1080,
  height: 1900,
  alt: "DeepL trial checkout summary with expanded answers about cancellation, credit-card charge timing and included Pro features",
  caption: "The expanded state answers cancellation first, then explains charge timing and what the trial includes.",
};

const completeStates: StoryEvidenceView[] = [
  {
    id: "bundle",
    label: "Bundle",
    summary: "Both products, the combined price, trial timing and the final commitment stay visible together.",
    image: bundleFull,
  },
  {
    id: "trial",
    label: "Trial sign-up",
    summary: "The selected trial promise carries into account creation without changing the immediate action.",
    image: trialSignUpFull,
  },
  {
    id: "team",
    label: "Team",
    summary: "Seat count updates the price, savings and included allowances as one connected state.",
    image: teamFull,
  },
  {
    id: "no-trial",
    label: "No trial",
    summary: "The trial promise disappears, the immediate charge becomes explicit and consent changes with it.",
    image: noTrialFull,
  },
];

function EvidenceSection({
  id,
  image,
  intro,
  title,
}: {
  id: string;
  image: StoryImage;
  intro: string;
  title: string;
}) {
  return (
    <section className="chapter-section" id={id}>
      <h2 className="chapter-heading">{title}</h2>
      <div className="chapter-blocks">
        <div className="chapter-prose"><p>{intro}</p></div>
        <ChapterFigure image={image} measure={id === "trial-sign-up" ? "compact" : "wide"} />
      </div>
    </section>
  );
}

export default function CheckoutCase() {
  return (
    <main className="site-shell case-shell chapter-shell">
      <SiteHeader />
      <article className="chapter-page chapter-case-page checkout-page">
        <ChapterBackLink />

        <header className="chapter-hero">
          <h1>Checkout across four purchase states</h1>
          <div className="chapter-synopsis">
            <p>A checkout cannot repeat one promise when the product mix, seat count, trial eligibility, and payment timing all change.</p>
            <p>Working on UX writing and checkout content iterations with product design, content design, and monetization, my job was to keep the offer coherent as each purchase condition changed.</p>
            <p>Across four parallel working states, the product, price, seats, timing, consent, and reassurance stay aligned—from account creation through the order summary.</p>
          </div>
        </header>

        <EvidenceSection
          id="trial-sign-up"
          title="Carry the trial into account creation"
          intro="Account creation appears after trial selection, so the selected offer remains visible during sign-up."
          image={trialSignUpDetail}
        />

        <EvidenceSection
          id="bundle-checkout"
          title="Keep a two-product offer visible at commitment"
          intro="The bundle state brings two products into a one-user order."
          image={bundleDetail}
        />

        <EvidenceSection
          id="team-purchase"
          title="Scale the order to a team"
          intro="Seat count changes several values at once: total price, savings and plan allowances."
          image={teamDetail}
        />

        <EvidenceSection
          id="no-trial-checkout"
          title="Change timing and consent when no trial applies"
          intro="Trial eligibility changes when payment starts and what the customer acknowledges."
          image={noTrialDetail}
        />

        <section className="chapter-section" id="trial-questions">
          <h2 className="chapter-heading">Answer the questions that can stop the purchase</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>In a separate trial-checkout exploration, the order summary already states price and timing, but a customer can still hesitate over cancellation, card charges, and what the trial includes. The FAQ keeps those questions inside the purchase context instead of sending the customer to the help center.</p>
              <p>The collapsed state makes all three concerns scannable. The expanded state answers directly, putting the temporary verification charge inside the payment answer instead of turning it into a competing warning.</p>
            </div>
            <div className="chapter-media">
              <ImageComparison
                ariaLabel="Collapsed and expanded trial questions beside the checkout order summary"
                chrome="overlay"
                dialogPresentation="minimal"
                dialogSizes="1440px"
                items={[
                  { label: "Questions visible", image: trialFaqCollapsed },
                  { label: "Answers visible", image: trialFaqExpanded },
                ]}
                sizes="(max-width: 928px) calc(100vw - 48px), 880px"
              />
            </div>
          </div>
        </section>

        <section className="chapter-section" id="complete-purchase-states">
          <h2 className="chapter-heading">Explore the complete purchase states</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>Choose a tab to follow product, price, timing, and consent through one complete working state. These are parallel purchase conditions, not a before-and-after sequence.</p>
            </div>
            <div className="chapter-media chapter-media--reading">
              <EvidenceSwitcher
                ariaLabel="Choose a complete checkout state"
                dialogPresentation="minimal"
                dialogSizes="1440px"
                initialId="bundle"
                presentation="quiet"
                sizes="(max-width: 928px) calc(100vw - 48px), 740px"
                views={completeStates}
              />
            </div>
          </div>
        </section>

        <section className="chapter-closing" id="observable-ending">
          <h2 className="chapter-heading chapter-heading--closing">Observable ending</h2>
          <div className="chapter-prose">
            <p>The selected working states keep the plan controls and order summary in agreement. Trial purchases show €0 due today and the later charge; the no-trial purchase shows the immediate charge and adds consent for service to start now.</p>
            <p>In a separate FAQ exploration, the collapsed view keeps the answer close to the order; expanding it explains both the free period and the later monthly charge without sending the customer elsewhere.</p>
          </div>
        </section>

        <nav className="next-project" aria-label="Next project">
          <span>Next project</span>
          <Link href="/work/account-team-security">
            Account recovery and team administration
            <b aria-hidden="true">→</b>
          </Link>
        </nav>
      </article>
      <SiteFooter />
    </main>
  );
}
