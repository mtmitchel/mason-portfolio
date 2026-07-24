import Link from "next/link";
import EvidenceSwitcher from "../../components/EvidenceSwitcher";
import ImageLightbox from "../../components/ImageLightbox";
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

function EvidenceFigure({ image }: { image: StoryImage }) {
  return (
    <div className="chapter-figure">
      <ImageLightbox
        chrome="image"
        label={image.label}
        previewSrc={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        caption={image.caption}
        sizes="(max-width: 1160px) 100vw, 1120px"
      />
    </div>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="story-section-heading">
      <p>{label}</p>
      <h2>{title}</h2>
    </div>
  );
}

function EvidenceSection({
  id,
  image,
  intro,
  label,
  title,
}: {
  id: string;
  image: StoryImage;
  intro: string;
  label: string;
  title: string;
}) {
  return (
    <section className="story-evidence" id={id}>
      <SectionHeading label={label} title={title} />
      <div className="story-copy story-section-intro"><p>{intro}</p></div>
      <EvidenceFigure image={image} />
    </section>
  );
}

export default function CheckoutCase() {
  return (
    <main className="site-shell case-shell">
      <SiteHeader />
      <article className="story-page">
        <Link className="back-link" href="/">Back to selected work</Link>

        <header className="story-hero">
          <p className="story-context">DeepL · Purchase journeys</p>
          <h1>Checkout across four purchase states</h1>
          <div className="chapter-synopsis">
            <p>Checkout content changed when the product mix, seat count, trial eligibility or payment timing changed.</p>
            <p>I contributed content iterations across sign-up and checkout with product design, content design and monetization.</p>
            <p>Across four parallel states—trial sign-up, a Translator and Write bundle, a twenty-seat team purchase and a purchase with no trial—the offer appears at account creation, and product, price, seats, timing and consent change with the purchase conditions.</p>
          </div>
        </header>

        <EvidenceSection
          id="trial-sign-up"
          label="Trial sign-up"
          title="Carry the trial into account creation"
          intro="Account creation appears after trial selection, so the selected offer remains visible during sign-up."
          image={trialSignUpDetail}
        />

        <EvidenceSection
          id="bundle-checkout"
          label="Bundle"
          title="Keep a two-product offer visible at commitment"
          intro="The bundle state brings two products into a one-user order."
          image={bundleDetail}
        />

        <EvidenceSection
          id="team-purchase"
          label="Team purchase"
          title="Scale the order to a team"
          intro="Seat count changes several values at once: total price, savings and plan allowances."
          image={teamDetail}
        />

        <EvidenceSection
          id="no-trial-checkout"
          label="No trial"
          title="Change timing and consent when no trial applies"
          intro="Trial eligibility changes when payment starts and what the customer acknowledges."
          image={noTrialDetail}
        />

        <section className="story-evidence" id="complete-purchase-states">
          <SectionHeading label="Complete states" title="Explore the complete purchase states" />
          <div className="story-copy story-section-intro">
            <p>Choose a tab to follow product, price, timing and consent through one complete state.</p>
            <p>These are parallel purchase conditions.</p>
          </div>
          <EvidenceSwitcher
            ariaLabel="Choose a complete checkout state"
            initialId="bundle"
            views={completeStates}
          />
        </section>

        <section className="story-outcome" id="observable-ending">
          <SectionHeading label="Ending state" title="Observable ending" />
          <div className="story-copy">
            <p>Plan controls and order summaries carry the same product and seat information.</p>
            <p>Trial states show €0 due today and a later charge after the trial.</p>
            <p>The no-trial state shows an immediate charge and adds consent for the service to start immediately.</p>
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
