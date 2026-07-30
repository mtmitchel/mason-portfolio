import Link from "next/link";
import { ChapterBackLink, ChapterFigure } from "../../components/ChapterCaseElements";
import { SiteHeader } from "../../components/PortfolioChrome";
import type { StoryImage } from "../portfolioTypes";
import CheckoutFlowViewer from "./CheckoutFlowViewer";

const detailsBefore: StoryImage = {
  label: "Old checkout Details screen",
  src: "/work/checkout/details-before-full.png",
  width: 2880,
  height: 2608,
  alt: "Old Details screen showing plan selection, billing information, payment entry, and a three-step progress indicator leading to Review",
  caption: "Customers entered their plan, billing and payment details, then continued to Review.",
};

const reviewBefore: StoryImage = {
  label: "Old checkout Review screen",
  src: "/work/checkout/review-before-full.png",
  width: 2880,
  height: 2608,
  alt: "Old Review screen showing subscription conditions, consent checkboxes, the Buy now action, and cancellation reassurance",
  caption: "Customers checked the subscription terms, accepted required consent and selected Buy now.",
};

const detailsAfter: StoryImage = {
  label: "New checkout Details screen",
  src: "/work/checkout/details-after-full.png",
  width: 2560,
  height: 4058,
  alt: "New two-step Details screen showing the selected annual plan, trial and price summary, billing and payment entry, consent statement, and Begin subscription action",
  caption: "The new Details step brought plan, billing, payment, consent and the subscription action together.",
};

const oldPrice: StoryImage = {
  label: "Price and trial terms on the old Review screen",
  src: "/work/checkout/review-plan-conditions.png",
  width: 1100,
  height: 650,
  alt: "Old Review detail showing the 30-day trial, cancellation date, annual subscription fee, VAT, first payment date, and masked credit card",
  caption: "Review bundled the trial length, annual price, billing date and payment method in one text block.",
};

const newPrice: StoryImage = {
  label: "New price and trial hierarchy",
  src: "/work/checkout/due-today-summary.png",
  width: 800,
  height: 736,
  alt: "DeepL order summary showing zero euros due today and 299 euros 88 cents per year after the trial",
  caption: "The new hierarchy leads with €0 due today and keeps the annual price directly beneath it.",
};

const oldConsent: StoryImage = {
  label: "Consent and action on the old Review screen",
  src: "/work/checkout/review-consent-action-tight.png",
  width: 1300,
  height: 570,
  alt: "Old Review detail showing required and optional consent checkboxes, the Buy now button, and cancellation reassurance",
  caption: "The old Review step separated required consent from the Buy now action.",
};

const newConsent: StoryImage = {
  label: "Consent and action on the new Details screen",
  src: "/work/checkout/details-consent-action-tight.png",
  width: 1220,
  height: 530,
  alt: "New Details detail showing consent linked to the action, the Begin subscription button, and trial reassurance",
  caption: "The new Details step links consent to Begin subscription and keeps the trial reassurance beside the action.",
};

function CheckoutPair({
  accessibleDescription,
  ariaLabel,
  caption,
  leftImage,
  leftLabel,
  rightImage,
  rightLabel,
  wide = false,
}: {
  accessibleDescription: string;
  ariaLabel: string;
  caption: string;
  leftImage: StoryImage;
  leftLabel: string;
  rightImage: StoryImage;
  rightLabel: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`checkout-pair${wide ? " checkout-pair--wide" : ""}`}
      role="group"
      aria-label={ariaLabel}
    >
      <div className="checkout-pair__grid">
        <div className="checkout-pair__item">
          <h3>{leftLabel}</h3>
          <ChapterFigure image={leftImage} measure="reading" />
        </div>
        <div className="checkout-pair__item">
          <h3>{rightLabel}</h3>
          <ChapterFigure image={rightImage} measure="reading" />
        </div>
      </div>
      <p className="checkout-pair__caption">{caption}</p>
      <p className="visually-hidden">{accessibleDescription}</p>
    </div>
  );
}

export default function CheckoutCase() {
  return (
    <main className="site-shell case-shell chapter-shell checkout-shell">
      <SiteHeader />
      <article className="chapter-page chapter-case-page checkout-page">
        <ChapterBackLink />

        <header className="chapter-hero">
          <h1>How simplifying DeepL’s checkout helped add €2.4M&nbsp;ARR</h1>
          <p className="checkout-meta">DeepL · Monetization · 2024</p>
          <div className="chapter-synopsis">
            <p>DeepL’s Monetization roadmap included measurable commercial goals, including a <strong>+2% checkout-conversion target</strong>. Our product manager, product designer, and I worked on a series of experiments intended to advance those goals.</p>
            <p>One experiment removed the separate Review step, reducing checkout from three steps to two. The flow became shorter, but the remaining Details screen now had to explain the subscription without that final checkpoint.</p>
            <p>My contribution was reorganizing and rewriting how the shorter flow explained the selected plan, price, trial, payment timing, consent, and final action—so removing a step did not remove the information customers needed to understand the commitment. The experiment delivered <strong>+3.02% paid subscriptions</strong> and approximately <strong>+€2.4M incremental annual recurring revenue</strong>.</p>
          </div>
        </header>

        <section className="chapter-section" id="harder-content-problem">
          <h2 className="chapter-heading">Removing Review meant rebuilding the decision</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>The old Details step collected the selected plan, billing information, and payment details. Review then brought together the trial conditions and annual price, showed when payment would begin, collected required consent, and presented the final <strong>Buy now</strong> action.</p>
              <p>Removing Review eliminated a checkpoint. It did not eliminate the decisions that checkpoint supported. Its content had to move forward, change form, or be removed as genuine repetition.</p>
            </div>

            <CheckoutFlowViewer
              detailsAfter={detailsAfter}
              detailsBefore={detailsBefore}
              reviewBefore={reviewBefore}
            />
          </div>
        </section>

        <section className="chapter-section" id="rebuilding-details">
          <h2 className="chapter-heading">I reorganized Details around the commitment customers were making</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>The remaining step needed to answer six questions before the final action: which subscription the customer was starting, what was due today, what they would pay after the trial, when payment would begin, whether they could cancel, and what the final action authorized.</p>
              <p>Rather than paste the old Review content into a longer page, I changed its hierarchy and wording. The selected plan, price, trial, billing, payment, consent, and action became one decision path.</p>
            </div>
          </div>
        </section>

        <section className="chapter-section" id="payment-timing">
          <h2 className="chapter-heading">The price hierarchy separated starting the trial from paying for the plan</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>A free trial creates two financial moments: what the customer owes when starting and what they will owe if the subscription continues.</p>
              <p>Giving the annual price and today’s charge equal weight could make a free trial look like an immediate €299.88 purchase. Emphasizing only €0 could make the later commitment too easy to overlook.</p>
              <p>I structured the hierarchy to answer the immediate question first with <strong>€0 due today</strong>, while keeping <strong>€299.88 per year after the trial</strong> directly beneath it.</p>
            </div>
            <CheckoutPair
              accessibleDescription="Old Review: the 30-day trial, annual price, VAT, first payment date and payment method appeared in one text block. New hierarchy: €0 due today appears above €299.88 per year after the trial."
              ariaLabel="Price and trial hierarchy before and after"
              caption="The old Review text bundled timing and price. The new hierarchy answered what was due today without hiding the annual cost. The new example comes from a separate checkout iteration."
              leftImage={oldPrice}
              leftLabel="Old Review"
              rightImage={newPrice}
              rightLabel="New price summary"
            />
          </div>
        </section>

        <section className="chapter-section" id="consent-and-action">
          <h2 className="chapter-heading">The final action had to start a trial and communicate consent</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>In the old flow, customers accepted the terms through a required checkbox on Review before pressing <strong>Buy now</strong>. Once the purchase began with a 30-day trial, that label no longer described the action accurately.</p>
              <p>I rewrote the consent statement to explain what pressing the button authorized and replaced <strong>Buy now</strong> with <strong>Begin subscription</strong>. The action now matched the commitment being made, while the surrounding content kept the trial, payment timing, and cancellation visible at the point of action.</p>
            </div>
            <CheckoutPair
              accessibleDescription={"Old consent: I accept the Terms & Conditions, Service Specification, and confirm that I have read and understood my Right of Withdrawal as a consumer. Old action: Buy now. New consent: By pressing the \"Begin subscription\" button, you accept the DeepL Pro Terms and Conditions including the Service Specifications. Consumers have a 14-day Right of Withdrawal. New action: Begin subscription."}
              ariaLabel="Consent and final action before and after"
              caption="The old Review step used a required checkbox and Buy now. The new Details step tied consent to Begin subscription and kept trial reassurance beside the action."
              leftImage={oldConsent}
              leftLabel="Old Review"
              rightImage={newConsent}
              rightLabel="New Details"
              wide
            />
          </div>
        </section>

        <section className="chapter-closing" id="experiment-result">
          <h2 className="chapter-heading chapter-heading--closing">The simpler checkout increased paid subscriptions</h2>
          <div className="chapter-prose checkout-result-summary">
            <p>The team removed an entire purchase step while keeping the information customers needed at the point of commitment. My contribution was restructuring that decision inside Details: separating today’s charge from the later annual price, aligning the final action with starting a trial, and keeping consent explicit.</p>
          </div>
        </section>

        <nav className="next-project next-project--compact" aria-label="Next project">
          <Link href="/work/account-team-security">
            Next
            <b aria-hidden="true">→</b>
          </Link>
        </nav>
      </article>
    </main>
  );
}
