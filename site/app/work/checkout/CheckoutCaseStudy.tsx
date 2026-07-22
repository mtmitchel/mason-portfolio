import ImageLightbox from "../../components/ImageLightbox";

export default function CheckoutCaseStudy() {
  return (
    <main className="case-page refined-case">
      <header className="simple-header case-header">
        <a className="simple-name" href="/">Mason Mitchel</a>
        <nav aria-label="Case study navigation">
          <a href="/">Work</a>
          <a href="/mason-cv.pdf" target="_blank">Résumé</a>
        </nav>
      </header>

      <article className="case-article">
        <a className="back-link" href="/">← Selected work</a>

        <header className="case-title">
          <p>DeepL · Checkout experiments · 2024</p>
          <h1>Making a free-trial checkout feel safer</h1>
          <p className="case-summary">
            I reframed the final checkout action and its reassurance content so
            people could understand what they were agreeing to, when payment
            would begin and how much control they retained.
          </p>
        </header>

        <dl className="case-meta">
          <div><dt>Role</dt><dd>UX copywriter and content designer</dd></div>
          <div><dt>Partners</dt><dd>Product design, product management, engineering and analytics</dd></div>
          <div><dt>Contribution</dt><dd>Content hypothesis, CTA, reassurance pattern and experiment variant</dd></div>
        </dl>

        <aside className="case-note">
          These screens show the product when the work was completed in 2024.
          DeepL&apos;s interface has since evolved.
        </aside>

        <section className="case-section case-opening">
          <h2>The content problem</h2>
          <p>
            The review page ended with <q>Buy now</q>, even when the offer
            included a 30-day trial. A single line below the button said there
            would be no costs if the user cancelled within 30 days.
          </p>
          <p>
            That left three separate questions bundled together at the point of
            commitment: Am I paying now? What starts today? Can I cancel? The
            CTA also pulled in the opposite direction from the reassurance—the
            interface said both <q>buy now</q> and <q>no costs</q>.
          </p>
        </section>

        <section className="case-section visual-change">
          <div className="section-intro">
            <h2>The change at a glance</h2>
            <p>The portfolio labels sit outside the product screenshots. Open either image to inspect the complete historical frame.</p>
          </div>
          <div className="evidence-pair">
            <ImageLightbox
              label="Before"
              previewSrc="/checkout-before-detail.png"
              fullSrc="/checkout-before.png"
              alt="Original checkout with a Buy now button and one cancellation reassurance line"
              caption="Original checkout: “Buy now” followed by “No costs if you cancel your subscription within 30 days.”"
            />
            <ImageLightbox
              label="After"
              previewSrc="/checkout-after-detail.png"
              fullSrc="/checkout-after.png"
              alt="Revised checkout with a Begin subscription button and three reassurance points"
              caption="Variant: “Begin subscription” followed by separate trial, payment and cancellation assurances."
            />
          </div>
        </section>

        <section className="case-section">
          <h2>What changed and why</h2>
          <div className="copy-comparison">
            <div className="copy-comparison-head"><span>Element</span><span>Before</span><span>After</span></div>
            <div><strong>Primary action</strong><span>Buy now</span><span>Begin subscription</span></div>
            <div><strong>Trial</strong><span>Implied inside a conditional sentence</span><span>30-day trial included</span></div>
            <div><strong>Payment timing</strong><span>Not stated directly</span><span>No payment until end of trial</span></div>
            <div><strong>Control</strong><span>Cancel within 30 days to avoid costs</span><span>Cancel anytime</span></div>
          </div>
        </section>

        <section className="case-section">
          <h2>My content decisions</h2>
          <div className="rationale-list">
            <div>
              <h3>Name the commitment accurately</h3>
              <p>
                <q>Buy now</q> suggested an immediate transaction. <q>Start free
                trial</q> would have sounded friendlier, but it would understate
                that the user was entering an ongoing subscription. <q>Begin
                subscription</q> described the real action without implying an
                immediate charge.
              </p>
            </div>
            <div>
              <h3>Turn one conditional sentence into three answers</h3>
              <p>
                The original reassurance made the reader interpret cost,
                cancellation and timing through an if-clause. The variant gives
                each concern its own line, so people can scan for the answer
                they need instead of decoding the policy.
              </p>
            </div>
            <div>
              <h3>Order the assurances around the decision</h3>
              <p>
                The sequence first establishes the offer, then removes the fear
                of an immediate charge, then confirms ongoing control: trial
                included, no payment until the trial ends, cancel anytime.
              </p>
            </div>
            <div>
              <h3>Keep the pattern clear across languages</h3>
              <p>
                Short, parallel statements reduce grammatical dependency and
                avoid idioms. The check icons support scanning, but the words
                carry the meaning so the pattern does not rely on color or
                icon recognition alone.
              </p>
            </div>
            <div>
              <h3>Treat trial status as content logic</h3>
              <p>
                Trial reassurance could not be reused blindly across checkout.
                A no-trial state needed separate wording so the experience never
                promised delayed payment or a trial where neither applied.
              </p>
            </div>
          </div>
        </section>

        <section className="case-section">
          <h2>Alternatives and trade-offs</h2>
          <div className="option-list">
            <div><strong>Start free trial</strong><p>Clear about the immediate benefit, but too quiet about the subscription commitment.</p></div>
            <div><strong>Continue</strong><p>Low-friction language, but too vague for a consequential final action.</p></div>
            <div><strong>Buy now</strong><p>Familiar commerce language, but inconsistent with delayed payment.</p></div>
            <div><strong>Begin subscription</strong><p>Less promotional, but the most accurate description of what the action does.</p></div>
          </div>
        </section>

        <section className="case-section">
          <h2>Collaboration and iteration</h2>
          <p>
            I worked with product design to keep the assurance visually tied to
            the primary action, with product management and analytics to frame
            the experiment, and with engineering to account for trial and
            no-trial states. The content was part of the experiment definition,
            not a final polish pass after the interaction had been decided.
          </p>
        </section>

        <section className="case-section">
          <h2>Outcome</h2>
          <p>
            The variant turned a broad goal—build trust—into a specific set of
            content changes that the team could review and test. It also made
            the relationship between CTA language, payment timing and trial
            status explicit.
          </p>
          <p className="case-result">
            <strong>12% lift in paid conversion</strong> was reported across the
            wider free-to-paid conversion work. I do not attribute that result
            to this experiment alone.
          </p>
        </section>

        <section className="case-section">
          <h2>What I would add now</h2>
          <p>
            I would pair the experiment readout with a short usability study to
            identify which assurance resolves which concern, then review the
            pattern with localization partners in languages that expand more
            than English.
          </p>
        </section>

        <footer className="case-footer"><a href="/">← Back to selected work</a></footer>
      </article>
    </main>
  );
}
