import Link from "next/link";
import { ChapterBackLink, ChapterFigure } from "../../components/ChapterCaseElements";
import ImageComparison from "../../components/ImageComparison";
import { SiteFooter, SiteHeader } from "../../components/PortfolioChrome";
import type { StoryImage } from "../portfolioTypes";

const detailsBefore: StoryImage = {
  label: "Checkout Details before Review was removed",
  src: "/work/checkout/details-before-full.png",
  width: 2880,
  height: 2608,
  alt: "Three-step DeepL checkout with Account completed, Details active, and Review still ahead",
  caption: "Customers chose billing and entered payment here, but the progress indicator still sent them onward before they could subscribe.",
};

const reviewBefore: StoryImage = {
  label: "Separate Review step before checkout was shortened",
  src: "/work/checkout/review-before-full.png",
  width: 2880,
  height: 2608,
  alt: "DeepL Review screen repeating the selected plan, trial, price, payment details, features, consent, and purchase action",
  caption: "A separate page repeated the plan, trial, price, and payment details before collecting consent and the final action.",
};

const detailsAfter: StoryImage = {
  label: "Consolidated Details step in the two-step checkout",
  src: "/work/checkout/details-after-full.png",
  width: 2560,
  height: 4058,
  alt: "Two-step DeepL checkout with plan information, payment entry, consent, and the Begin subscription action consolidated in Details",
  caption: "In the two-step flow, Details carries the offer, payment entry, consent, and subscription action on one screen.",
};

const reviewConsent: StoryImage = {
  label: "Consent and purchase action on the old Review screen",
  src: "/work/checkout/review-consent-action.png",
  width: 1600,
  height: 629,
  alt: "Required acceptance checkbox followed by a Buy now button and trial cancellation reassurance",
  caption: "Consent required a separate checkbox before customers could press Buy now.",
};

const detailsConsent: StoryImage = {
  label: "Consent and subscription action in the new Details screen",
  src: "/work/checkout/details-consent-action.png",
  width: 1500,
  height: 590,
  alt: "Consent statement above a Begin subscription button and three trial reassurance messages",
  caption: "The action area explains what Begin subscription authorizes and keeps the trial terms beside the button.",
};

const dueTodaySummary: StoryImage = {
  label: "Trial price summary",
  src: "/work/checkout/due-today-summary.png",
  width: 800,
  height: 736,
  alt: "DeepL order summary showing zero euros due today and 299 euros 88 cents per year after the trial",
  caption: "€0 due today answers the immediate question first; the annual price remains visible as the later commitment.",
};

export default function CheckoutCase() {
  return (
    <main className="site-shell case-shell chapter-shell">
      <SiteHeader />
      <article className="chapter-page chapter-case-page checkout-page">
        <ChapterBackLink />

        <header className="chapter-hero">
          <h1>How shortening DeepL&apos;s checkout flow added €2.4M ARR</h1>
          <p className="checkout-meta">DeepL · Monetization team · 2024</p>
          <div className="chapter-synopsis">
            <p>I partnered with a product designer on DeepL&apos;s Monetization team to remove the final <strong>Review</strong> step while keeping pricing, trial, payment, and consent clear inside <strong>Details</strong>.</p>
            <p>The experiment shortened checkout from three steps to two across monthly and annual subscriptions. It increased both immediate purchases and subscriptions still active at the later 35-day measurement point.</p>
          </div>
          <dl className="checkout-impact" aria-label="Two-step checkout experiment results">
            <div className="checkout-impact-item checkout-impact-item--primary">
              <dt>Incremental ARR</dt>
              <dd>+€2.4M</dd>
            </div>
            <div className="checkout-impact-item">
              <dt>Pro purchases</dt>
              <dd>+3.02%</dd>
            </div>
            <div className="checkout-impact-item">
              <dt>35-day net subscriptions</dt>
              <dd>+3.07%</dd>
            </div>
          </dl>
        </header>

        <section className="chapter-section" id="harder-content-problem">
          <h2 className="chapter-heading">One less step created a harder content problem</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>The old checkout divided the purchase across three steps. Customers selected a plan and entered payment information in <strong>Details</strong>, then continued to <strong>Review</strong> to confirm the price, trial, payment timing, consent, and final action.</p>
              <p>Removing <strong>Review</strong> made the journey faster, but it also placed more responsibility on the remaining screen. <strong>Details</strong> now had to collect payment and explain the complete subscription commitment at the same time.</p>
              <p>The task was not simply to delete what <strong>Review</strong> repeated. It was to decide what still mattered, where customers needed it, and what form it should take in the shorter flow.</p>
              <p className="checkout-evidence-note">These representative working states come from different iterations. They show how the purchase was divided between <strong>Details</strong> and <strong>Review</strong>, rather than one continuous customer session.</p>
            </div>
            <div className="chapter-media checkout-structure-comparison">
              <ImageComparison
                ariaLabel="The old Details and Review screens"
                chrome="overlay"
                dialogPresentation="minimal"
                dialogSizes="1440px"
                items={[
                  { label: "Before: Details", image: detailsBefore, tallDialog: true },
                  { label: "Before: Review", image: reviewBefore, tallDialog: true },
                ]}
                sizes="(max-width: 720px) calc(100vw - 48px), 424px"
              />
            </div>
          </div>
        </section>

        <section className="chapter-section" id="rebuilding-details">
          <h2 className="chapter-heading">Rebuilding the purchase decision inside Details</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>Working with the product designer, I reorganized the purchase information around the questions customers needed answered before committing: What am I starting? What will I pay today? What will I pay after the trial? When does the trial end? What does pressing the final button authorize?</p>
              <p>I treated the work as a redistribution problem: move decision-critical information forward, change its form when the old interaction no longer made sense, and remove only genuine repetition.</p>
            </div>
            <ChapterFigure image={detailsAfter} measure="reading" />
            <dl className="checkout-decision-list">
              <div>
                <dt>Moved forward</dt>
                <dd>The selected plan, trial, price, and features stayed visible before commitment.</dd>
              </div>
              <div>
                <dt>Changed form</dt>
                <dd>Consent moved into the final action area, and <strong>Buy now</strong> became <strong>Begin subscription</strong>.</dd>
              </div>
              <div>
                <dt>Consolidated</dt>
                <dd>The repeated Review page disappeared without stripping out the decision it carried.</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="chapter-section" id="payment-timing">
          <h2 className="chapter-heading">Making a free trial feel free—without hiding the annual price</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>A 30-day trial creates two financial moments: what the customer owes now and what they will owe if they continue after the trial.</p>
              <p>Giving both numbers equal prominence could make a free trial feel like an immediate €299.88 purchase. Emphasizing only €0 could make the later commitment too easy to miss.</p>
              <p>The revised hierarchy answered the immediate question first—<strong>€0 due today</strong>—while keeping the annual charge directly beneath it as the next financial obligation. This working order-summary treatment shows that hierarchy in isolation.</p>
            </div>
            <ChapterFigure image={dueTodaySummary} measure="compact" />
            <div className="chapter-prose checkout-transition">
              <p>Clarifying the price settled what the customer would pay. The final action still had to explain what they were agreeing to.</p>
            </div>
          </div>
        </section>

        <section className="chapter-section" id="consent-and-action">
          <h2 className="chapter-heading">Turning consent into a clearer final action</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>In the old flow, customers accepted the terms through a required checkbox on <strong>Review</strong>, then pressed <strong>Buy now</strong>. That label no longer matched the redesigned experience: customers were beginning a 30-day trial, not making an immediate payment.</p>
              <p>In the shorter flow, I rewrote the action area so the consent statement explained what pressing the button meant. <strong>Begin subscription</strong> described the action more accurately, while the supporting lines answered the final questions about payment, cancellation, and the trial period.</p>
            </div>

            <div className="checkout-copy-comparison" role="group" aria-label="Consent and subscription action before and after checkout simplification">
              <div className="checkout-copy-column">
                <h3>Before: consent on Review</h3>
                <div className="checkout-copy-panel checkout-copy-panel--before">
                  <blockquote>
                    I accept the Terms &amp; Conditions, Service Specification, and confirm that I have read and understood my Right of Withdrawal as a consumer.
                  </blockquote>
                  <span className="checkout-copy-action checkout-copy-action--before">Buy now</span>
                </div>
              </div>
              <div className="checkout-copy-column">
                <h3>After: consent in Details</h3>
                <div className="checkout-copy-panel checkout-copy-panel--after">
                  <blockquote>
                    By pressing the &quot;Begin subscription&quot; button, you accept the DeepL Pro Terms and Conditions including the Service Specifications. Consumers have a 14-day Right of Withdrawal.
                  </blockquote>
                  <span className="checkout-copy-action checkout-copy-action--after">Begin subscription</span>
                  <ul className="checkout-copy-reassurance" aria-label="Trial reassurance">
                    <li>30-day trial included</li>
                    <li>No payment until end of trial</li>
                    <li>Cancel anytime</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="chapter-media checkout-action-comparison">
              <ImageComparison
                ariaLabel="The consent and action area before and after checkout simplification"
                chrome="overlay"
                dialogPresentation="minimal"
                dialogSizes="1440px"
                items={[
                  { label: "Before: separate acceptance", image: reviewConsent },
                  { label: "After: integrated consent", image: detailsConsent },
                ]}
                sizes="(max-width: 720px) calc(100vw - 48px), 424px"
              />
            </div>
          </div>
        </section>

        <section className="chapter-closing" id="experiment-result">
          <h2 className="chapter-heading chapter-heading--closing">The simpler checkout increased purchases—and the lift held</h2>
          <div className="chapter-prose checkout-result-summary">
            <p>The two-step checkout increased Pro purchases by 3.02%. The 3.07% increase in 35-day net subscriptions showed that the lift remained at a later measurement point, not only at purchase.</p>
            <p>My contribution was making the shorter flow easier to understand at the point of commitment: clarifying the trial and price, aligning the action with what customers were actually doing, and keeping consent explicit without restoring another step.</p>
          </div>
        </section>

        <nav className="next-project next-project--compact" aria-label="Next project">
          <Link href="/work/account-team-security">
            Next
            <b aria-hidden="true">→</b>
          </Link>
        </nav>
      </article>
      <SiteFooter />
    </main>
  );
}
