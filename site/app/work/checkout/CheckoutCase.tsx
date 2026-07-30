import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ChapterBackLink } from "../../components/ChapterCaseElements";
import ImageLightbox from "../../components/ImageLightbox";
import { SiteHeader } from "../../components/PortfolioChrome";
import type { StoryImage } from "../portfolioTypes";
import CheckoutFlowViewer, { RebuiltCheckoutFlowViewer } from "./CheckoutFlowViewer";

const accountBefore: StoryImage = {
  label: "Account step, original checkout",
  src: "/work/checkout/original-account.png",
  width: 2880,
  height: 1960,
  alt: "DeepL checkout, original Account step — sign-up form with a three-step progress indicator.",
  caption: "Customers created an account before entering their subscription details.",
};

const detailsBefore: StoryImage = {
  label: "Details step, original checkout",
  src: "/work/checkout/original-details.png",
  width: 2880,
  height: 3720,
  alt: "DeepL checkout, original Details step — plan selection, billing address and payment method, with Continue.",
  caption: "Customers entered their plan, billing and payment details, then continued to Review.",
};

const reviewBefore: StoryImage = {
  label: "Review step, original checkout",
  src: "/work/checkout/original-review-flow-spaced.png",
  width: 2048,
  height: 1811,
  alt: "DeepL checkout, original Review step — plan conditions, features, two consent checkboxes and Buy now.",
  caption: "",
};

const accountAfter: StoryImage = {
  label: "Account step, representative shorter checkout",
  src: "/work/checkout/rebuilt-account-flow-uniform-v2.png",
  width: 2436,
  height: 1652,
  alt: "Representative DeepL Account step — the retained sign-up form with a two-step progress indicator.",
  caption: "The Account form remained the first step of the shorter flow.",
};

const detailsAfter: StoryImage = {
  label: "Details step, rebuilt checkout",
  src: "/work/checkout/details-after-full.png",
  width: 2560,
  height: 4058,
  alt: "DeepL checkout, rebuilt Details step — plan selection, billing, payment, a plan summary panel, a consent statement and Begin subscription, with a two-step progress indicator.",
  caption: "With Review gone, the plan summary, billing, payment, consent and the final action all had to work on one screen.",
};

const oldPrice: StoryImage = {
  label: "Review plan conditions, before the change",
  src: "/work/checkout/review-plan-conditions.png",
  width: 1444,
  height: 616,
  alt: "Review plan conditions showing a 30-day trial, €299.88 annual price, VAT, first payment date and masked credit card.",
  caption: "Review plan conditions before the change.",
};

const newPrice: StoryImage = {
  label: "Details plan summary, after the change",
  src: "/work/checkout/due-today-summary.png",
  width: 800,
  height: 736,
  alt: "Details plan summary showing €0 due today and €299.88 per year after the trial.",
  caption: "Details plan summary after the change.",
};

const oldConsent: StoryImage = {
  label: "Review consent and final action, before the change",
  src: "/work/checkout/review-consent-action-tight.png",
  width: 1444,
  height: 624,
  alt: "Review region showing required and optional consent checkboxes, Back, Buy now and cancellation reassurance.",
  caption: "Review consent and final action before the change.",
};

const newConsent: StoryImage = {
  label: "Details consent and final action, after the change",
  src: "/work/checkout/details-consent-action-tight.png",
  width: 1147,
  height: 520,
  alt: "Details region showing a consent statement, Begin subscription and three trial reassurance lines.",
  caption: "Details consent and final action after the change.",
};

function CheckoutPair({
  accessibleDescription,
  ariaLabel,
  caption,
  leftImage,
  leftDescriptor,
  leftScreen,
  rightImage,
  rightDescriptor,
  rightScreen,
  rightWidth,
}: {
  accessibleDescription: string;
  ariaLabel: string;
  caption: ReactNode;
  leftImage: StoryImage;
  leftDescriptor: string;
  leftScreen: string;
  rightImage: StoryImage;
  rightDescriptor: string;
  rightScreen: string;
  rightWidth: number;
}) {
  const rightPanelStyle = {
    "--checkout-caption-width": `${(10000 / rightWidth).toFixed(3)}%`,
    "--checkout-panel-width": `${rightWidth}%`,
  } as CSSProperties;

  const renderPanel = (
    image: StoryImage,
    screen: string,
    descriptor: string,
    style?: CSSProperties,
    previewCaption?: ReactNode,
  ) => (
    <div className="checkout-pair__item" style={style}>
      <h3>
        <strong>{screen}</strong>
        <span>{descriptor}</span>
      </h3>
      <ImageLightbox
        alt={image.alt}
        caption={image.caption}
        chrome="footer"
        dialogPresentation="minimal"
        dialogSizes="1440px"
        height={image.height}
        label={image.label}
        previewCaption={previewCaption}
        previewSrc={image.src}
        showCaption={previewCaption !== undefined}
        sizes="(max-width: 720px) calc(100vw - 40px), 720px"
        width={image.width}
      />
    </div>
  );

  return (
    <div
      className="checkout-pair"
      role="group"
      aria-label={ariaLabel}
    >
      <div className="checkout-pair__stack">
        {renderPanel(leftImage, leftScreen, leftDescriptor)}
        {renderPanel(rightImage, rightScreen, rightDescriptor, rightPanelStyle, caption)}
      </div>
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
            <p>One experiment removed the separate Review step, reducing checkout from three steps to two. The flow became shorter, but the Details step had to explain the subscription without that final checkpoint.</p>
            <p>My contribution was reorganizing and rewriting how the shorter flow explained the selected plan, price, trial, payment timing, consent and final action, so that removing a step did not remove the information customers needed to understand the commitment. The experiment delivered <strong>+3.02% paid subscriptions</strong> and approximately <strong>+€2.4M incremental annual recurring revenue</strong>.</p>
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
              accountBefore={accountBefore}
              detailsBefore={detailsBefore}
              reviewBefore={reviewBefore}
            />
          </div>
        </section>

        <section className="chapter-section" id="rebuilding-details">
          <h2 className="chapter-heading">I reorganized the Details step around the commitment customers were making</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>The Details step needed to answer six questions before the final action:</p>
              <ul className="checkout-question-list">
                <li>Which subscription was the customer starting?</li>
                <li>What was due today?</li>
                <li>What would they pay after the trial?</li>
                <li>When would payment begin?</li>
                <li>Could they cancel?</li>
                <li>What did the final action authorize?</li>
              </ul>
              <p>Rather than paste the old Review content into a longer page, I changed its hierarchy and wording. The selected plan, price, trial, billing, payment, consent, and action became one decision path.</p>
            </div>
            <RebuiltCheckoutFlowViewer
              accountAfter={accountAfter}
              detailsAfter={detailsAfter}
            />
          </div>
        </section>

        <section className="chapter-section" id="payment-timing">
          <h2 className="chapter-heading">The price hierarchy separated starting the trial from paying for the plan</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>A free trial creates two financial moments: what the customer owes when starting and what they will owe if the subscription continues.</p>
              <p>Giving the annual price and today’s charge equal weight would have made a free trial look like an immediate €299.88 purchase. Emphasizing only €0 would have made the later commitment too easy to overlook.</p>
              <p>I structured the hierarchy to answer the immediate question first with <strong>€0 due today</strong>, while keeping <strong>€299.88 per year after the trial</strong> directly beneath it.</p>
            </div>
            <CheckoutPair
              accessibleDescription="Review before the change: the 30-day trial, annual price, VAT, first payment date and payment method appeared in one text block. Details after the change: €0 due today appears above €299.88 per year after the trial."
              ariaLabel="Price and trial hierarchy before and after"
              caption="Review ran the trial dates, the annual fee, the VAT and the first payment date together as one block of text. The summary answered what was due today first, then what the subscription cost after the trial. These are two working examples, not two views of one session — the summary panel kept iterating after the screen shown above."
              leftImage={oldPrice}
              leftDescriptor="plan conditions, before the change"
              leftScreen="Review"
              rightImage={newPrice}
              rightDescriptor="plan summary, after the change"
              rightScreen="Details"
              rightWidth={55.4}
            />
          </div>
        </section>

        <section className="chapter-section" id="consent-and-action">
          <h2 className="chapter-heading">The final action had to start a trial and communicate consent</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>In the old flow, customers accepted the terms through a required checkbox on Review before pressing <strong>Buy now</strong>. Once the purchase began with a 30-day trial, that label no longer described the action accurately.</p>
              <p>I rewrote the consent statement to explain what pressing the button authorized and replaced <strong>Buy now</strong> with <strong>Begin subscription</strong>. The action matched the commitment being made, and the surrounding content kept the trial, payment timing and cancellation visible at the point of action.</p>
            </div>
            <CheckoutPair
              accessibleDescription={"Old consent: I accept the Terms & Conditions, Service Specification, and confirm that I have read and understood my Right of Withdrawal as a consumer. Old action: Buy now. New consent: By pressing the \"Begin subscription\" button, you accept the DeepL Pro Terms and Conditions including the Service Specifications. Consumers have a 14-day Right of Withdrawal. New action: Begin subscription."}
              ariaLabel="Consent and final action before and after"
              caption={<>Review put consent in a required checkbox above <strong>Buy now</strong>. Details moved it into a statement naming the action, and kept the trial, the payment timing and cancellation beside <strong>Begin subscription</strong>.</>}
              leftImage={oldConsent}
              leftDescriptor="consent and final action, before the change"
              leftScreen="Review"
              rightImage={newConsent}
              rightDescriptor="consent and final action, after the change"
              rightScreen="Details"
              rightWidth={79.4}
            />
            <p className="checkout-transition">The plan summary, the price hierarchy and the consent statement all answered one question that the Review step used to answer on its own: what the customer was agreeing to, and when it would start costing them.</p>
          </div>
        </section>

        <section className="chapter-closing" id="experiment-result">
          <h2 className="chapter-heading chapter-heading--closing">Two steps converted better than three</h2>
          <div className="chapter-prose checkout-result-summary">
            <p>The experiment ran across monthly and annual subscriptions and delivered <strong>+3.02% paid subscriptions</strong>, roughly <strong>+€2.4M in incremental annual recurring revenue</strong>. The shorter flow did not tell customers less. It told them the same things in the place where they were already deciding.</p>
            <p>The judgment was in deciding what could go. I removed what Review genuinely repeated. The trial terms, the payment date, the price after the trial and the consent statement could not go — and none of them could simply be pasted into a screen that was already collecting an address and a card number. Each had to be rewritten to work at a different point in the decision.</p>
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
