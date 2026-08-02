import Link from "next/link";
import { ChapterBackLink } from "../../components/ChapterCaseElements";
import { SiteHeader } from "../../components/PortfolioChrome";
import type { StoryImage } from "../portfolioTypes";
import CheckoutFlowViewer from "./CheckoutFlowViewer";

const originalAccount: StoryImage = {
  label: "Account step, original checkout",
  src: "/work/checkout/original-account-flow-uniform.png",
  width: 2436,
  height: 1681,
  alt: "Representative original Account step with sign-up fields, an existing-account link, and a 30-day trial message, with Details and Review ahead.",
  caption: "Original step 1 of 3: account entry, displaying an unsubmitted registration form alongside an existing-account sign-in link.",
};

const originalDetails: StoryImage = {
  label: "Details step, original checkout",
  src: "/work/checkout/original-details-flow-us-dates.px-59d78ad59f44.png",
  width: 2438,
  height: 3461,
  alt: "Representative original Details step with Annual subscription selected, billing and payment fields, a selected plan summary, an applicable trial explainer, and Review ahead.",
  caption: "Original step 2 of 3: checkout details, showing billing period options, empty address and payment fields, plan pricing with 30-day trial terms, and the Continue action.",
};

const originalReview: StoryImage = {
  label: "Review step, original checkout",
  src: "/work/checkout/original-review-flow-us-dates-spaced.px-02906a20ab17.png",
  width: 2048,
  height: 1811,
  alt: "Representative original Review step with trial conditions, the annual price and first payment date, a payment method summary, plan features, consent checkboxes, and Buy now.",
  caption: "The third step summarized the payment method entered on the previous screen alongside trial conditions, plan features, two consent checkboxes, and the Buy now button.",
};

const rebuiltAccount: StoryImage = {
  label: "Account step, shorter checkout",
  src: "/work/checkout/rebuilt-account-flow-uniform-v2.png",
  width: 2436,
  height: 1652,
  alt: "Representative two-step Account state with the materially unchanged sign-up form, a 30-day trial message, an existing-account link, and only Details ahead.",
  caption: "The sign-up form was materially unchanged; what changed came next. Whether customers created an account or used the existing-account link, the next step in checkout was the one where they would subscribe.",
};

const rebuiltDetails: StoryImage = {
  label: "Details step, shorter checkout",
  src: "/work/checkout/rebuilt-details-flow-us-dates.px-c2b5cedba63e.png",
  width: 2228,
  height: 3618,
  alt: "Representative two-step Details state combining billing and payment fields with the selected plan summary. It shows Due today €0, Total price after trial €299.88 per year, plan features, consent text, and Begin subscription.",
  caption: "Rebuilt step 2 of 2: final details screen combining billing and payment inputs with trial pricing, plan features, passive terms acceptance, and the Begin subscription action.",
};

const originalSteps = [
  { id: "account", image: originalAccount, label: "Account" },
  { id: "details", image: originalDetails, label: "Details" },
  { id: "review", image: originalReview, label: "Review" },
];

const rebuiltSteps = [
  { id: "account", image: rebuiltAccount, label: "Account" },
  { id: "details", image: rebuiltDetails, label: "Details" },
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
            <p>DeepL’s 2025 Monetization roadmap included a target to increase checkout conversion by 2%. I worked with the team’s product manager and product designer on a series of experiments intended to advance that goal.</p>
            <p>One experiment tested shortening subscription checkout from three steps to two by removing the separate Review step and its repeated payment method summary. I partnered with the product designer on the information structure, content iterations, and clarity improvements for the shorter flow.</p>
            <p>Across monthly and annual subscriptions, that experiment increased paid subscriptions by 3.02% and generated approximately €2.4 million in incremental annual recurring revenue.</p>
          </div>
        </header>

        <section className="chapter-section" id="original-flow">
          <h2 className="chapter-heading">Review summarized the payment method customers had entered, but it was also the final checkpoint</h2>
          <div className="chapter-prose">
            <p>Customers selected a plan on DeepL’s pricing page before entering checkout. The original journey then moved through three steps: <strong>Account</strong>, <strong>Details</strong>, and <strong>Review</strong>.</p>
            <p>In <strong>Account</strong>, customers created an account or used the existing-account link. In <strong>Details</strong>, they chose a billing period and entered their billing and payment information, with the selected plan and price shown alongside those fields. They then continued to <strong>Review</strong>.</p>
            <p><strong>Review</strong> displayed a summary of the payment method customers had just entered. It also showed subscription conditions, payment timing, plan features, consent checkboxes, and the <strong>Buy now</strong> action.</p>
          </div>

          <CheckoutFlowViewer
            ariaLabel="Original checkout steps"
            heading="Original three-step checkout"
            initialStep="account"
            steps={originalSteps}
          />

          <div className="chapter-prose">
            <p>The payment method summary made <strong>Review</strong> look redundant by repeating card details customers had entered moments earlier on <strong>Details</strong>, where the selected plan, price, and trial terms were already visible in the right-hand plan-and-price area.</p>
            <p>However, <strong>Review</strong> was also where customers confirmed the subscription and authorized the charge. To shorten checkout, the team separated those two roles: we removed <strong>Review</strong> as a standalone screen, dropped the repeated payment method summary, and moved confirmation, terms acceptance, and the final action into <strong>Details</strong>.</p>
          </div>
        </section>

        <section className="chapter-section" id="rebuilding-details">
          <h2 className="chapter-heading">Details still had to answer three questions</h2>
          <div className="chapter-prose">
            <p><strong>Details</strong> remained a form, but it now had to carry the subscription decision alongside the billing and payment fields. Customers would commit on a screen they were still filling in. Before they did, <strong>Details</strong> had to answer three questions:</p>
            <ul>
              <li>What am I subscribing to?</li>
              <li>What will I pay, and when?</li>
              <li>What happens when I continue?</li>
            </ul>
            <p>The questions separated what customers needed to know before committing from what they had already supplied. To answer them, I reorganized the content in the right-hand plan-and-price summary:</p>
            <ul>
              <li>The right-hand plan-and-price summary established a clearer price hierarchy beside the entry fields, making the selected plan and billing terms visible while customers filled in their information.</li>
              <li>The <strong>Features of your plan</strong> block moved from <strong>Review</strong> into the right-hand summary. In the representative rebuilt state, the list was reworded to clarify per-user pricing and shared glossary scope, reordered, and formatted with bold quantities to emphasize key limits.</li>
              <li>In the representative trial state shown, the trial terms were aligned across the screen. The explainer gave the 30-day duration and cancellation date, the summary displayed <strong>Due today €0</strong> above the post-trial total, and three lines beneath the button confirmed that payment would not begin until the trial ended.</li>
            </ul>
            <p>Structure answered what customers were buying and what they would pay. The final question came down to alignment: with the commitment now happening on <strong>Details</strong>, every element had to describe the exact same outcome.</p>
          </div>
        </section>

        <section className="chapter-section" id="trial-consistency">
          <h2 className="chapter-heading">The trial price, action, and consent had to agree</h2>
          <div className="chapter-prose">
            <p>In the original <strong>Review</strong> screen, the final action was <strong>Buy now</strong>, on a step that showed no breakdown of immediate versus post-trial charges. In the rebuilt <strong>Details</strong> screen, the right-hand summary explicitly separated immediate charges from future commitments, displaying <strong>Due today €0</strong> above <strong>Total price after trial €299.88 per year</strong>. Both screens represent annual trial states.</p>
            <p>Because nothing was due on the day of checkout, changing the action label to <strong>Begin subscription</strong> described the transaction more accurately than <strong>Buy now</strong>: pressing the button started the trial subscription, with payment following only if the customer did not cancel before the trial ended.</p>
          </div>

          <CheckoutFlowViewer
            ariaLabel="Shorter checkout steps"
            heading="Shorter two-step checkout"
            initialStep="details"
            steps={rebuiltSteps}
          />

          <div className="chapter-prose">
            <p>Consent followed the same alignment logic. The original <strong>Review</strong> step required selecting a terms-acceptance checkbox alongside a separate, optional marketing-email checkbox. In the rebuilt <strong>Details</strong> step, required terms acceptance was integrated into a passive consent statement tied directly to the main action—stating that by pressing <strong>Begin subscription</strong>, customers accepted the terms.</p>
            <p>In the trial state shown, the price breakdown, trial explainer, passive consent statement, and button text worked together toward a single outcome: start the trial immediately, pay after 30 days, or cancel before then without being charged.</p>
          </div>
        </section>

        <section className="chapter-closing" id="experiment-result">
          <h2 className="chapter-heading">Preserving decision clarity in a shorter flow</h2>
          <div className="chapter-prose">
            <p>Removing the <strong>Review</strong> step was more than deleting a screen; it required restructuring content and information hierarchy so the shorter flow preserved a complete, clear subscription decision, creating a coherent two-step experiment for the team to evaluate.</p>
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
