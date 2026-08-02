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
  caption: "Customers created an account or used the existing-account link, entered their billing and payment information, and then moved to a separate Review step to confirm and authorize the subscription.",
};

const originalDetails: StoryImage = {
  label: "Details step, original checkout",
  src: "/work/checkout/original-details-flow-uniform.png",
  width: 2438,
  height: 3461,
  alt: "Representative original Details step with Annual subscription selected, billing and payment fields, a selected plan summary, an applicable trial explainer, and Review ahead.",
  caption: originalAccount.caption,
};

const originalReview: StoryImage = {
  label: "Review step, original checkout",
  src: "/work/checkout/original-review-flow-spaced.png",
  width: 2048,
  height: 1811,
  alt: "Representative original Review step with trial conditions, the annual price and first payment date, a payment method summary, plan features, consent checkboxes, and Buy now.",
  caption: originalAccount.caption,
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
  src: "/work/checkout/rebuilt-details-flow-logo-cleaned.px-23599eb66f02.png",
  width: 2228,
  height: 3618,
  alt: "Representative two-step Details state combining billing and payment fields with the selected plan summary. It shows Due today €0, Total price after trial €299.88 per year, plan features, consent text, and Begin subscription.",
  caption: "The remaining step combined payment entry with the information and consent customers needed to authorize the subscription.",
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
          <p className="checkout-meta">DeepL · Monetization · 2024</p>
          <div className="chapter-synopsis">
            <p>DeepL’s 2024 Monetization roadmap included a target to increase checkout conversion by 2%. I worked with the team’s product manager and product designer on a series of experiments intended to advance that goal.</p>
            <p>One experiment tested shortening subscription checkout from three steps to two. The hypothesis was that removing a step, along with the payment method summary restating information customers had just entered, would make checkout easier to finish. My contribution focused on the UX writing and content design for the shorter flow.</p>
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
            <p>That summary made <strong>Review</strong> look like a step the flow could do without. It was the material the experiment treated as redundant: it showed customers what they had entered a moment earlier. The selected plan, the price, and the trial terms had also been shown in <strong>Details</strong>.</p>
            <p>But <strong>Review</strong> was also where customers confirmed the subscription and authorized the charge, and the shorter flow still needed that. So the experiment separated the step’s two jobs. The team removed <strong>Review</strong> as a separate screen, dropped the payment method summary, and moved confirmation, authorization, and the final action into <strong>Details</strong>.</p>
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
            <p>The questions separated what customers still needed to know from what they had already supplied. To answer them, I helped reorganize <strong>Details</strong>:</p>
            <ul>
              <li>The selected plan and price stayed beside the entry fields, showing customers what they were subscribing to.</li>
              <li>The <strong>Features of your plan</strong> block moved from <strong>Review</strong> into the <strong>Details</strong> rail, showing what the subscription included beside those fields. The representative states show it in both places.</li>
              <li>In the trial state shown, the trial terms sat across several elements. The explainer gave the 30-day trial and the date to cancel by, and the price summary showed <strong>Due today €0</strong>, with the total price applying after the trial. Beneath the button, three lines named the trial, said payment would not begin until it ended, and offered cancellation at any time.</li>
            </ul>
            <p>Structure answered the first two questions. The third came down to wording: several elements described what continuing would do, and with the final action now in <strong>Details</strong>, they all had to describe the same outcome.</p>
          </div>
        </section>

        <section className="chapter-section" id="trial-consistency">
          <h2 className="chapter-heading">The trial price, action, and consent had to agree</h2>
          <div className="chapter-prose">
            <p>In the original <strong>Review</strong> screen, the final action was <strong>Buy now</strong>, and that screen showed no <strong>Due today</strong> line. In the rebuilt <strong>Details</strong> screen, the summary showed <strong>Due today €0</strong> and <strong>Total price after trial €299.88 per year</strong>. Both are representative states.</p>
            <p>In the trial state shown, nothing was due that day, so <strong>Begin subscription</strong> described the action more accurately than <strong>Buy now</strong>: the button would start the subscription, and payment would follow the trial unless the customer canceled.</p>
          </div>

          <CheckoutFlowViewer
            ariaLabel="Shorter checkout steps"
            heading="Shorter two-step checkout"
            initialStep="details"
            steps={rebuiltSteps}
          />

          <div className="chapter-prose">
            <p>Consent followed the same logic. I helped replace the terms-acceptance checkbox with acceptance language tied to the final action, so that accepting the terms became part of pressing <strong>Begin subscription</strong> rather than a separate interaction before it.</p>
            <p>In that trial state, the price summary, the trial lines, the acceptance language, and the button pointed to one outcome: begin the subscription now, pay the annual price when the trial ends, or cancel before then and pay nothing.</p>
          </div>
        </section>

        <section className="chapter-closing" id="experiment-result">
          <h2 className="chapter-heading">The shorter checkout had to carry the full subscription decision</h2>
          <div className="chapter-prose">
            <p>Removing <strong>Review</strong> changed where customers confirmed the subscription, but not what they were being asked to authorize. I treated the plan context, trial price, payment timing, consent, and final action as parts of that one decision inside <strong>Details</strong>. That was the content-design judgment I brought to the experiment: organize the remaining step around the subscription itself, so the team was evaluating a complete two-step checkout.</p>
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
