const projects = [
  {
    number: "01",
    label: "Checkout experiments",
    title: "Making a high-stakes checkout feel safer",
    summary:
      "Reworked reassurance, plan details and calls to action across a subscription journey—then tested the content in live experiments.",
    tags: ["UX copy", "Experimentation", "Monetization"],
    image: "/checkout-comparison.png",
    href: "#checkout",
    status: "Full case study",
  },
  {
    number: "02",
    label: "Payment verification",
    title: "Explaining a complex bank-transfer process",
    summary:
      "A journey-focused content approach for expectations, next steps and failure states in an unfamiliar payment flow.",
    tags: ["Content design", "Complex journeys", "Error prevention"],
    href: "#next-work",
    status: "Case study in progress",
  },
  {
    number: "03",
    label: "Plans and pricing",
    title: "Helping people choose the right plan",
    summary:
      "Content that makes limits, feature differences and upgrade choices easier to understand across pricing and in-product surfaces.",
    tags: ["Information design", "UX copy", "Localization"],
    href: "#next-work",
    status: "Case study in progress",
  },
];

const decisions = [
  {
    number: "01",
    title: "Put reassurance where the doubt happens",
    text: "Instead of relying on generic trust language, the variant answers the question raised by the payment form itself: why card details are needed during a free trial.",
  },
  {
    number: "02",
    title: "Describe the next event",
    text: "The content explains payment timing and what happens after the trial. That gives people a usable mental model—not simply a promise that nothing happens today.",
  },
  {
    number: "03",
    title: "Write the exception with the main path",
    text: "The no-trial experience needed its own accurate reassurance. Treating it as part of the content system reduced the risk of a reassuring message becoming misleading in another state.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Mason Mitchel, home">
          MM<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="/mason-cv.pdf" target="_blank">
            CV <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>

      <header className="hero shell" id="top">
        <p className="eyebrow">UX copywriter &amp; content designer · Berlin</p>
        <h1>
          I make complex products <em>clearer, calmer</em> and easier to use.
        </h1>
        <div className="hero-bottom">
          <p className="hero-intro">
            I use research, language and experimentation to shape end-to-end
            experiences—especially for multilingual, AI and subscription
            products.
          </p>
          <a className="round-link" href="#work" aria-label="See selected work">
            <span>Selected<br />work</span>
            <b aria-hidden="true">↓</b>
          </a>
        </div>
        <div className="expertise" aria-label="Areas of experience">
          <span>Language AI</span><span>Monetization</span>
          <span>Multilingual UX</span><span>Enterprise software</span>
        </div>
      </header>

      <section className="work shell" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <p>Case studies in UX copywriting and content design.</p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <a className={`project-card project-${index + 1}`} href={project.href} key={project.number}>
              <div className="project-copy">
                <div className="project-meta">
                  <span>{project.number}</span><span>{project.label}</span>
                </div>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-status">{project.status} <b aria-hidden="true">↘</b></div>
              </div>
              {index === 0 ? (
                <div className="project-image"><img src={project.image} alt="DeepL checkout experiment showing current and variant content approaches" /></div>
              ) : (
                <div className="project-placeholder" aria-hidden="true">
                  <span>{index === 1 ? "01 → 02 → 03" : "Free · Starter · Advanced"}</span>
                </div>
              )}
            </a>
          ))}
        </div>
      </section>

      <article className="case-study" id="checkout">
        <header className="case-hero shell">
          <p className="eyebrow light">Case study 01 · DeepL · 2024</p>
          <h2>Making a high-stakes checkout feel safer</h2>
          <p className="case-deck">
            How I used UX copy and experimentation to address uncertainty in
            the free-trial checkout journey.
          </p>
          <div className="historical-note">
            <strong>A dated record, not a reconstruction.</strong>
            <span>These screens reflect the product when this work was completed. DeepL&apos;s interface has since evolved.</span>
          </div>
        </header>

        <section className="snapshot shell">
          <div><span>My role</span><strong>UX copywriter / content designer</strong></div>
          <div><span>Team</span><strong>Product designer, PM, engineers, analysts</strong></div>
          <div><span>Work</span><strong>Journey copy, variants, experiment content</strong></div>
          <div><span>Stage</span><strong>Designed and tested in product</strong></div>
        </section>

        <nav className="case-nav shell" aria-label="Checkout case study sections">
          <span>On this page</span>
          <a href="#case-problem">Problem</a>
          <a href="#case-decisions">Decisions</a>
          <a href="#case-experiment">Experiment</a>
          <a href="#case-outcome">Outcome</a>
        </nav>

        <section className="story shell narrow" id="case-problem">
          <div className="story-label">01 / The problem</div>
          <div className="story-content">
            <h3>A free trial still asked for payment details. The page did not adequately explain why.</h3>
            <p>
              At the moment of highest commitment, people had to reconcile two
              apparently conflicting ideas: <em>start for free</em> and <em>enter
              your card</em>. The content needed to reduce uncertainty without
              making claims the product could not support.
            </p>
            <blockquote>
              The content question was not “How do we make checkout sound nicer?”
              It was “What does someone need to know before they can confidently continue?”
            </blockquote>
          </div>
        </section>

        <section className="evidence-block shell">
          <div className="evidence-image">
            <img src="/checkout-hypothesis.png" alt="Figma working area showing the checkout hypothesis and a free-trial payment screen" />
          </div>
          <div className="evidence-copy">
            <p className="eyebrow">02 / Hypothesis</p>
            <h3>Answer the payment question at the point of action.</h3>
            <p>
              I explored content that connected the request for card details to
              the trial, stated when payment would begin and kept the assurance
              close to the primary call to action.
            </p>
            <div className="artifact-caption">
              <span>Working artifact</span>
              Hypothesis and checkout exploration preserved from the 2024 Figma file.
            </div>
          </div>
        </section>

        <section className="decisions shell narrow" id="case-decisions">
          <div className="story-label">03 / Content decisions</div>
          <div className="decisions-list">
            {decisions.map((decision) => (
              <div className="decision" key={decision.number}>
                <span>{decision.number}</span>
                <div><h3>{decision.title}</h3><p>{decision.text}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="content-model shell">
          <div className="model-intro">
            <p className="eyebrow">The content model</p>
            <h3>Every line had a job.</h3>
            <p>The approach mapped a real user question to a specific content response while respecting product and localization constraints.</p>
          </div>
          <div className="model-table" role="table" aria-label="Checkout content model">
            <div className="model-row model-header" role="row"><span>User question</span><span>Content response</span><span>Constraint</span></div>
            <div className="model-row" role="row"><span>Why do you need my card?</span><span>Connect it directly to starting the trial.</span><span>Keep it brief at the payment step.</span></div>
            <div className="model-row" role="row"><span>Will I be charged today?</span><span>State when payment begins.</span><span>Adapt accurately for no-trial states.</span></div>
            <div className="model-row" role="row"><span>Can I come back later?</span><span>Avoid instructions that rely on a persistent checkout state.</span><span>The page might not refresh or restore predictably.</span></div>
          </div>
        </section>

        <section className="final-experience shell" id="case-experiment">
          <div className="final-heading">
            <div><p className="eyebrow">04 / The experiment</p><h3>Compare the content approaches, not just the screens.</h3></div>
            <p>Current, variant and intervention states made the content change—and its intended effect—reviewable by the wider team.</p>
          </div>
          <figure>
            <img src="/checkout-comparison.png" alt="Figma experiment board comparing current checkout, a reassurance variant and an intervention" />
            <figcaption><span>Experiment board · 2024</span><span>Historical product UI shown as delivered</span></figcaption>
          </figure>
        </section>

        <section className="collaboration shell narrow">
          <div className="story-label">05 / Collaboration</div>
          <div className="story-content">
            <h3>The copy was part of the experiment design.</h3>
            <p>
              I worked with product design and product management to define the
              concern the variant should address, with engineering on state and
              implementation constraints, and with analytics partners on how the
              change would be evaluated. The Figma file preserves alternative
              approaches and implementation discussion—not only the polished end state.
            </p>
            <div className="collab-grid">
              <div><span>Product design</span><p>Placement, hierarchy and interaction context</p></div>
              <div><span>Engineering</span><p>Trial states, page behavior and implementation limits</p></div>
              <div><span>Analytics / PM</span><p>Hypothesis, variant definition and experiment readout</p></div>
              <div><span>Localization</span><p>Clarity and adaptability across languages</p></div>
            </div>
          </div>
        </section>

        <section className="outcome shell" id="case-outcome">
          <div className="outcome-copy">
            <p className="eyebrow light">06 / Outcome &amp; reflection</p>
            <h3>The work made reassurance testable—not decorative.</h3>
            <p>
              The variant translated a broad goal—build trust—into specific,
              reviewable content choices tied to a moment in the journey. It
              also exposed the need to treat trial and no-trial checkout as a
              small content system rather than a single string.
            </p>
          </div>
          <aside className="metric-card">
            <span>Broader program result</span>
            <strong>12%</strong>
            <p>conversion uplift across the wider free-to-paid checkout program</p>
            <small>Reported across the wider free-to-paid conversion work; not attributed to this experiment alone.</small>
          </aside>
          <div className="reflection">
            <span>What I would add now</span>
            <p>A concise research readout showing which concern each version resolved, plus localization feedback on how the reassurance behaved in longer-language variants.</p>
          </div>
        </section>
      </article>

      <section className="next-work shell" id="next-work">
        <p className="eyebrow">Next case studies to build</p>
        <h2>This is the portfolio system—not a one-off mockup.</h2>
        <div className="next-grid">
          <div><span>02</span><h3>Bank-transfer verification</h3><p>Lead with the journey map, show expectation-setting and errors, then explain the content pattern across states.</p></div>
          <div><span>03</span><h3>Pricing and plans</h3><p>Show how terminology, feature hierarchy and limitations help people compare plans and choose with confidence.</p></div>
          <div><span>Craft</span><h3>UX copy gallery</h3><p>A smaller supporting collection of errors, dialogs, settings and onboarding examples—each with one sentence of context.</p></div>
        </div>
      </section>

      <section className="about shell" id="about">
        <p className="eyebrow">About</p>
        <div><h2>I bring a writer&apos;s precision to complex product journeys.</h2><p>I&apos;m a UX copywriter and content designer with experience in Language AI, monetization and multilingual products. I work with research and product teams to turn ambiguity into useful, human language—from the first hypothesis to the final interface.</p></div>
      </section>

      <footer className="footer shell">
        <h2>Have a complicated thing that needs to feel simple?</h2>
        <div><a href="mailto:mtmitchel@gmail.com">Let&apos;s talk <span>↗</span></a><p>Portfolio prototype · 2026<br />DeepL work shown as a dated record</p></div>
      </footer>
    </main>
  );
}
