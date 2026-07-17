const work = [
  {
    company: "DeepL",
    title: "Checkout reassurance",
    description: "UX copy and experimentation for a high-stakes subscription journey.",
    year: "2024",
    href: "/work/checkout",
    available: true,
  },
  {
    company: "DeepL",
    title: "Bank-transfer verification",
    description: "Content design for an unfamiliar, multi-step payment process.",
    year: "2024",
    href: "#",
    available: false,
  },
  {
    company: "DeepL",
    title: "Plans and pricing",
    description: "UX copy that clarifies features, limits and upgrade choices.",
    year: "2024",
    href: "#",
    available: false,
  },
];

export default function SimpleHome() {
  return (
    <main className="simple-site">
      <header className="simple-header">
        <a className="simple-name" href="/">Mason Mitchel</a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="/mason-cv.pdf" target="_blank">CV</a>
        </nav>
      </header>

      <section className="simple-intro">
        <p className="simple-role">UX copywriter and content designer</p>
        <h1>I make complex products easier to understand and use.</h1>
        <p className="simple-lede">
          I&apos;ve worked across Language AI, subscriptions, enterprise software
          and multilingual experiences—most recently at DeepL.
        </p>
      </section>

      <section className="simple-section" id="work">
        <h2>Selected work</h2>
        <div className="work-index">
          {work.map((item) => item.available ? (
            <a className="work-row" href={item.href} key={item.title}>
              <span className="work-company">{item.company}</span>
              <span className="work-main"><strong>{item.title}</strong><small>{item.description}</small></span>
              <span className="work-year">{item.year} <span aria-hidden="true">↗</span></span>
            </a>
          ) : (
            <div className="work-row work-muted" key={item.title}>
              <span className="work-company">{item.company}</span>
              <span className="work-main"><strong>{item.title}</strong><small>{item.description}</small></span>
              <span className="work-year">In progress</span>
            </div>
          ))}
        </div>
      </section>

      <section className="simple-section simple-about" id="about">
        <h2>About</h2>
        <div>
          <p>
            I use research, language and experimentation to design content for
            complete user journeys—not just individual interface strings.
          </p>
          <p>
            My background in editorial and marketing writing helps me connect
            product clarity with business goals, while staying precise about
            user needs, accessibility and localization.
          </p>
        </div>
      </section>

      <footer className="simple-footer">
        <a href="mailto:mtmitchel@gmail.com">mtmitchel@gmail.com</a>
        <a href="https://www.linkedin.com/in/mtmitchel" target="_blank">LinkedIn ↗</a>
      </footer>
    </main>
  );
}
