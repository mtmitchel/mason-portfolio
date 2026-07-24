import Link from "next/link";
import PortfolioProjectGrid from "./PortfolioProjectGrid";
import { SiteFooter, SiteHeader } from "./PortfolioChrome";
import { selectedWorkCards, writingEntries } from "../work/portfolioData";

function WorkSwitcher({ active }: { active: "selected" | "writing" }) {
  return (
    <nav className="work-switcher" aria-label="Portfolio view">
      <Link href="/" aria-current={active === "selected" ? "page" : undefined}>Selected work</Link>
      <Link href="/writing" aria-current={active === "writing" ? "page" : undefined}>Writing</Link>
    </nav>
  );
}

function AboutSection() {
  return (
    <section className="home-section about" id="about">
      <h2>About</h2>
      <div>
        <p>I write explanations, limits, prices and confirmations so people understand what happened, what to do next and what a decision means.</p>
        <p>At DeepL, I worked across Translator, Write, subscriptions, pricing and enterprise accounts. Earlier, I worked on product and editorial writing for Localyze, SmartRecruiters, Joblift and Kitchen Stories.</p>
      </div>
    </section>
  );
}

function WritingCollection() {
  return (
    <div className="writing-list">
      {writingEntries.map((entry) => (
        <article className="writing-entry" id={entry.id} key={entry.id}>
          <header>
            <p>{entry.employer} · {entry.format}</p>
            <h3>{entry.title}</h3>
          </header>
          <div className="writing-entry-body">
            <p>{entry.context}</p>
            {entry.samples.map((sample) => (
              sample.kind === "quote" ? (
                <blockquote key={sample.text}>{sample.text}</blockquote>
              ) : (
                <p className={`writing-sample writing-sample--${sample.kind}`} key={sample.text}>
                  <span>{sample.kind === "headline" ? "Headline:" : "Structure:"}</span>{" "}
                  {sample.text}
                </p>
              )
            ))}
            <p className="writing-observation">{entry.decision}</p>
            {entry.publicationContext && (
              <p className="writing-publication-context">
                <strong>Publication context:</strong> {entry.publicationContext}
              </p>
            )}
            {entry.links.length > 0 && (
              <div className="writing-links">
                {entry.links.map((link) => (
                  <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label}<span aria-hidden="true">↗</span></a>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export default function WorkIndexPage({ active }: { active: "selected" | "writing" }) {
  const isSelected = active === "selected";

  return (
    <main className="site-shell">
      <SiteHeader homeHeading summary="UX copywriter and content designer across product, growth and enterprise." />

      <section className="home-section" id="work" aria-labelledby="work-view-title">
        <h2 className="visually-hidden" id="work-view-title">{isSelected ? "Selected work" : "Writing"}</h2>
        <div className="portfolio-section-heading">
          <WorkSwitcher active={active} />
          <p>
            {isSelected
              ? "Product, growth, account and editorial work"
              : "Five published examples show how I change structure, tone, and level of detail for product announcements, methodology, instruction, data-led press releases, and consumer writing."}
          </p>
        </div>
        {isSelected ? <PortfolioProjectGrid projects={selectedWorkCards} /> : <WritingCollection />}
      </section>

      <AboutSection />
      <SiteFooter />
    </main>
  );
}
