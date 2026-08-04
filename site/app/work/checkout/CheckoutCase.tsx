import Link from "next/link";
import { ChapterBackLink } from "../../components/ChapterCaseElements";
import ImageLightbox from "../../components/ImageLightbox";
import { SiteHeader } from "../../components/PortfolioChrome";
import type { StoryImage } from "../portfolioTypes";
import CheckoutFlowViewer from "./CheckoutFlowViewer";

const originalAccount: StoryImage = {
  label: "Account step, original checkout",
  src: "/work/checkout/original-account-flow-uniform.png",
  width: 2436,
  height: 1681,
  alt: "Representative original Account step with sign-up fields, an existing-account link, and a 30-day trial message, with Details and Review ahead.",
  caption: "The Account step let new users create an account and existing users sign in, but the form itself remained materially unchanged; the content work began in Details.",
};

const originalDetails: StoryImage = {
  label: "Details step, original checkout",
  src: "/work/checkout/original-details-controlled.px-9310aff5ce82.png",
  width: 2560,
  height: 3800,
  alt: "Checkout Details page with an annual card showing €24.99 per month per user and €299.88 billed annually, a monthly card showing €29.99 per month per user, billing-address and payment fields, a selected-plan summary showing €299.88 per year, an applicable trial explainer, and Continue.",
  caption: "Users entered billing and payment information on Details, then continued to Review.",
};

const originalReview: StoryImage = {
  label: "Review step, original checkout",
  src: "/work/checkout/original-review-flow-us-dates-spaced.px-02906a20ab17.png",
  width: 2048,
  height: 1811,
  alt: "Checkout Review page with trial and payment conditions, plan features, a payment method summary, a required terms checkbox, an optional marketing checkbox, and Buy now.",
  caption: "Users reviewed the subscription conditions, plan features, and payment method they had entered before accepting the required terms and selecting Buy now.",
};

const rebuiltDetails: StoryImage = {
  label: "Details step, shorter checkout",
  src: "/work/checkout/rebuilt-details-controlled.px-d69ba1ce5ada.png",
  width: 2560,
  height: 4158,
  alt: "Checkout Details page with billing-period options, billing-address and payment fields, a selected-plan summary, the rewritten plan-features list, terms text, Begin subscription, and the statements 30-day trial included, No payment until end of trial, and Cancel anytime beneath the button.",
  caption: "Users could review the rewritten feature list and accept the required terms by selecting Begin subscription, with trial timing and cancellation information beneath it.",
};

const rebuiltDetailsSummary: StoryImage = {
  label: "Rebuilt Details summary crop",
  src: "/work/checkout/rebuilt-details-summary-controlled.px-e59e20b8e9ff.png",
  width: 964,
  height: 1504,
  alt: "Selected-plan summary for an annual single-user trial showing Due today €0, Total price after trial €299.88 per year, and the plan-features card below.",
  caption: "This annual single-user trial example shows Due today €0 above Total price after trial €299.88 per year, with the selected plan’s features below. The experiment also covered monthly subscriptions.",
};

const rebuiltDetailsSummaryCaption = (
  <>
    This annual single-user trial example shows <strong>Due today €0</strong> above <strong>Total price after trial €299.88 per year</strong>, with the selected plan’s features below. The experiment also covered monthly subscriptions.
  </>
);

const originalSteps = [
  { id: "account", image: originalAccount, label: "Account", captionEmphasis: ["Account", "Details"] },
  { id: "details", image: originalDetails, label: "Details", captionEmphasis: ["Details", "Review"] },
  { id: "review", image: originalReview, label: "Review", captionEmphasis: ["Buy now"] },
];

const originalDetailsComparison: StoryImage = {
  ...originalDetails,
  caption: "Price figures appeared in the billing-period cards and again in the selected-plan summary, and users still had to continue to Review.",
};

const detailsComparisonStates = [
  {
    id: "original-details",
    image: originalDetailsComparison,
    label: "Original Details",
    captionEmphasis: ["Review"],
  },
  {
    id: "rebuilt-details",
    image: rebuiltDetails,
    label: "Rebuilt Details",
    captionEmphasis: ["Begin subscription"],
  },
];

export default function CheckoutCase() {
  return (
    <main className="site-shell case-shell chapter-shell checkout-shell">
      <SiteHeader />
      <article className="chapter-page chapter-case-page checkout-page">
        <ChapterBackLink />

        <header className="chapter-hero">
          <h1>How simplifying DeepL’s checkout helped add €2.4M ARR</h1>
          <p className="checkout-meta">DeepL · Monetization · 2025</p>
          <div className="chapter-synopsis">
            <p>The 2025 roadmap for DeepL’s Monetization team included a target to increase checkout conversion by 2%. To help achieve that goal, I worked with the product designer on a series of monetization experiments. One tested whether shortening the checkout flow from three steps to two would increase paid subscriptions.</p>
            <p>Across monthly and annual subscriptions, the experiment increased paid subscriptions by 3.02% and generated approximately €2.4 million in incremental annual recurring revenue.</p>
          </div>
        </header>

        <section className="chapter-section" id="original-flow">
          <h2 className="chapter-heading">Original three-step checkout</h2>
          <div className="chapter-prose">
            <p>Users selected a plan on DeepL’s pricing page before entering checkout. New users could create an account, while existing users could sign in. Both routes led to <strong>Details</strong>, where users selected a billing period and entered their billing and payment information.</p>
            <p>Users then continued to <strong>Review</strong>. That final step repeated the payment method they had just entered, but it also contained the trial and payment conditions, plan features, required terms acceptance, and <strong>Buy now</strong> action.</p>
            <p>The content design challenge was not simply to delete a page. It was to distinguish repeated information from the confirmation and authorization the shorter flow still needed.</p>
          </div>

          <CheckoutFlowViewer
            ariaLabel="Original checkout steps"
            heading="Original three-step checkout"
            initialStep="details"
            steps={originalSteps}
          />
        </section>

        <section className="chapter-section" id="strategy">
          <h2 className="chapter-heading">Strategy for a shorter, clearer flow</h2>
          <div className="chapter-prose">
            <p>The team agreed that a shorter checkout would only help if it preserved the information users needed to evaluate the subscription and the controls they needed to authorize it.</p>
            <p>Two principles guided my content work:</p>
            <ul>
              <li><strong>Remove effort, preserve context:</strong> Eliminate duplicated content and extra interactions without hiding the information users needed before committing.</li>
              <li><strong>Concentrate the decision:</strong> Bring plan value, price, reassurance, consent, and the primary action into <strong>Details</strong>, then use hierarchy and wording to clarify how they relate.</li>
            </ul>
            <p>These principles helped us decide what could disappear with <strong>Review</strong>, what had to move into <strong>Details</strong>, and what I needed to rewrite.</p>
          </div>
        </section>

        <section className="chapter-section" id="execution">
          <h2 className="chapter-heading">Changes to the flow and content</h2>
          <div className="chapter-prose">
            <p>The team left the <strong>Account</strong> form materially unchanged and focused the experiment on how <strong>Details</strong> and <strong>Review</strong> divided payment, confirmation, and authorization.</p>
            <div className="checkout-change-list">
              <div className="checkout-change">
                <h3>Removing the separate Review step</h3>
                <p>The team removed the separate <strong>Review</strong> step and moved final confirmation into <strong>Details</strong>.</p>
                <p>I mapped each element on <strong>Review</strong> to the job it performed. The payment method summary duplicated information users had just entered, so we removed it. Plan features, terms acceptance, and the primary action still had to appear in <strong>Details</strong>. The existing trial and price content also had to carry more of the confirmation work once <strong>Review</strong> disappeared.</p>
                <p>The rebuilt <strong>Details</strong> step let users enter payment information, review the subscription, and authorize it without leaving the page.</p>
              </div>
              <div className="checkout-change">
                <h3>Moving and rewriting plan features</h3>
                <p>The team moved plan features from <strong>Review</strong> into <strong>Details</strong>. I treated the list as confirmation rather than comparison: users had already selected a plan, so the content needed to help them recognize what it included rather than compare alternatives or recall the pricing page.</p>
                <p>I also reordered and rewrote the list. I moved “<strong>20</strong> document translations per month” from fifth to second and clarified the allowance as “<strong>20</strong> document translations per user / month.”</p>
                <p>I expanded the glossary item to “<strong>2,000 glossaries</strong> with <strong>5,000 entries</strong> each, shared with your team,” clarifying both the per-glossary limit and the sharing condition.</p>
                <p>These changes made the selected plan’s allowances easier to interpret while users considered its price and conditions.</p>
              </div>
              <div className="checkout-change">
                <h3>Connecting passive consent and reassurance to the final action</h3>
                <p>In the original flow, users had to select a required checkbox on <strong>Review</strong> before selecting <strong>Buy now</strong>. The checkbox stated that they accepted the <strong>Terms &amp; Conditions</strong> and <strong>Service Specification</strong> and confirmed that they had read and understood their <strong>Right of Withdrawal</strong> as consumers. The marketing checkbox was separate and optional.</p>
                <p>The experiment replaced the required checkbox with passive consent. I partnered with the Legal team to write the statement that took its place above <strong>Begin subscription</strong>.</p>
                <p>The new text explained that pressing the button meant accepting the <strong>DeepL Pro Terms and Conditions</strong>, including the <strong>Service Specifications</strong>. A separate sentence linked consumers to information about their <strong>14-day Right of Withdrawal</strong>.</p>
                <p>This tied acceptance directly to the primary action while keeping the agreements and consumer right explicit at the point where users committed.</p>
                <p>I also consolidated the trial reassurance into three short lines beneath the button:</p>
                <ul>
                  <li><strong>30-day trial included</strong></li>
                  <li><strong>No payment until end of trial</strong></li>
                  <li><strong>Cancel anytime</strong></li>
                </ul>
                <p>The original flow split these messages across the checkout. Placing them together beneath <strong>Begin subscription</strong> kept trial timing and cancellation information next to the action they qualified.</p>
              </div>
            </div>
          </div>

          <CheckoutFlowViewer
            ariaLabel="Original and rebuilt Details screens"
            heading="Original and rebuilt Details screens"
            initialStep="rebuilt-details"
            showArrows={false}
            steps={detailsComparisonStates}
          />

          <div className="chapter-prose">
            <div className="checkout-change-list">
              <div className="checkout-change">
                <h3>Clarifying price and payment timing</h3>
                <p>The original <strong>Details</strong> screen displayed price figures inside the billing-period cards and repeated the selected annual price in the plan summary.</p>
                <p>I removed the price figures from the billing-period cards and concentrated numerical price in the selected-plan summary.</p>
                <p>In the annual trial state, the summary placed <strong>Due today €0</strong> above <strong>Total price after trial €299.88 per year</strong>. This gave the immediate amount and later annual price distinct labels within one hierarchy instead of distributing price figures across the billing controls and summary.</p>
              </div>
            </div>
          </div>

          <div className="checkout-summary-figure">
            <ImageLightbox
              alt={rebuiltDetailsSummary.alt}
              caption={rebuiltDetailsSummary.caption}
              chrome="overlay"
              dialogCaption={rebuiltDetailsSummaryCaption}
              dialogPresentation="minimal"
              dialogSizes={`${rebuiltDetailsSummary.width}px`}
              fitDialogToSource
              height={rebuiltDetailsSummary.height}
              label={rebuiltDetailsSummary.label}
              previewCaption={rebuiltDetailsSummaryCaption}
              previewClassName="checkout-summary-preview"
              previewSrc={rebuiltDetailsSummary.src}
              sizes="(max-width: 560px) calc(100vw - 40px), 520px"
              width={rebuiltDetailsSummary.width}
            />
          </div>
        </section>

        <section className="chapter-closing" id="key-takeaway">
          <h2 className="chapter-heading">Lessons carried forward</h2>
          <div className="chapter-prose">
            <p>Shortening the flow forced a decision about every element on <strong>Review</strong>: did it repeat something users had already seen or entered, or did it help them evaluate and authorize the subscription? The payment method summary was repetition. The plan features, price and payment timing, terms, and final action still supported the decision.</p>
            <p>That distinction is the standard I bring to monetization work now: simplify the path, not the decision. In practice, the screen that remains still has to explain what users are paying, when, and what pressing the button commits them to. A shorter checkout can support conversion without asking users to trade understanding for speed.</p>
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
