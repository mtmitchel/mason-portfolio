import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout reassurance — Mason Mitchel",
  description: "A UX copywriting and content design case study from DeepL.",
};

export default function CheckoutCaseStudy() {
  return (
    <main className="case-page">
      <header className="simple-header case-header">
        <a className="simple-name" href="/">Mason Mitchel</a>
        <nav aria-label="Case study navigation">
          <a href="/">Work</a>
          <a href="/mason-cv.pdf" target="_blank">CV</a>
        </nav>
      </header>

      <article className="case-article">
        <a className="back-link" href="/">← Selected work</a>

        <header className="case-title">
          <p>DeepL · Checkout experiments · 2024</p>
          <h1>Making a high-stakes checkout feel safer</h1>
          <p className="case-summary">
            How I used UX copy and experimentation to address uncertainty in a
            free-trial checkout journey.
          </p>
        </header>

        <dl className="case-meta">
          <div><dt>Role</dt><dd>UX copywriter / content designer</dd></div>
          <div><dt>Worked with</dt><dd>Product design, PM, engineering and analytics</dd></div>
          <div><dt>Contribution</dt><dd>Journey copy, variants and experiment content</dd></div>
        </dl>

        <aside className="case-note">
          These screens show the product when the work was completed in 2024.
          DeepL&apos;s interface has since evolved.
        </aside>

        <figure className="case-figure">
          <img src="/checkout-comparison.png" alt="Experiment board comparing current checkout, a reassurance variant and an intervention" />
          <figcaption>Current, variant and intervention states from the experiment file.</figcaption>
        </figure>

        <section className="case-section">
          <h2>The problem</h2>
          <p>
            A free trial still required payment details. At the moment of
            highest commitment, people had to reconcile two apparently
            conflicting ideas: start for free and enter your card.
          </p>
          <p>
            The content needed to explain why the card was required, clarify
            when payment would begin and remain accurate across different
            checkout states.
          </p>
        </section>

        <section className="case-section">
          <h2>The hypothesis</h2>
          <p>
            If we answered the payment question beside the primary action,
            people would have the information they needed to continue with
            greater confidence.
          </p>
          <figure className="case-figure">
            <img src="/checkout-hypothesis.png" alt="Working Figma area showing the checkout hypothesis and free-trial payment screen" />
            <figcaption>Working hypothesis and checkout exploration.</figcaption>
          </figure>
        </section>

        <section className="case-section">
          <h2>My content decisions</h2>
          <ol className="decision-list">
            <li>
              <strong>Put reassurance where the doubt happens.</strong>
              <p>The message sits beside the payment action instead of relying on generic trust language elsewhere.</p>
            </li>
            <li>
              <strong>Explain what happens next.</strong>
              <p>The content clarifies payment timing and gives people a usable mental model of the trial.</p>
            </li>
            <li>
              <strong>Write for exceptions as well as the main path.</strong>
              <p>The no-trial experience needed its own accurate version, rather than inheriting reassurance that could become misleading.</p>
            </li>
          </ol>
        </section>

        <section className="case-section">
          <h2>Collaboration and iteration</h2>
          <p>
            I worked with product design and product management to define the
            concern the variant should address, with engineering on trial states
            and implementation constraints, and with analytics partners on the
            experiment definition and readout.
          </p>
          <p>
            Localization was part of the content constraint: the reassurance
            needed to remain clear and adaptable across languages without
            becoming too long for the payment step.
          </p>
        </section>

        <section className="case-section">
          <h2>Outcome</h2>
          <p>
            The work turned a broad instruction—build trust—into specific,
            reviewable content choices that could be tested in the journey.
            It also established trial and no-trial checkout as a small content
            system rather than a single reusable string.
          </p>
          <p className="case-result">
            <strong>12% lift in paid conversion</strong> across the wider
            free-to-paid conversion work. This figure is not attributed to this
            experiment alone.
          </p>
        </section>

        <section className="case-section">
          <h2>Reflection</h2>
          <p>
            If I presented this work again, I would add a concise research
            readout showing which concern each version resolved and include
            localization feedback from longer-language variants.
          </p>
        </section>

        <footer className="case-footer">
          <a href="/">← Back to selected work</a>
        </footer>
      </article>
    </main>
  );
}
