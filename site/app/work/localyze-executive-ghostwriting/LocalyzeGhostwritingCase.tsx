import Link from "next/link";
import { SiteHeader } from "../../components/PortfolioChrome";
import { publishedArguments } from "./localyzeGhostwritingData";

export default function LocalyzeGhostwritingCase() {
  return (
    <main className="site-shell case-shell">
      <SiteHeader />
      <article className="story-page editorial-case">
        <Link className="back-link" href="/">Back to selected work</Link>

        <header className="story-hero">
          <p className="story-context">Localyze · Executive ghostwriting</p>
          <h1>Executive ghostwriting on global mobility</h1>
          <p className="story-hook">
            Localyze co-founder and CEO Hanna Marie Asmussen needed three perspectives on
            global mobility for Forbes Business Council. Mason wrote on her behalf, and Forbes
            published each article under her byline.
          </p>
        </header>

        <section className="published-writing">
          <div className="story-section-heading">
            <p>Published writing</p>
            <h2>One voice, three arguments</h2>
          </div>
          <div className="published-piece-list">
            {publishedArguments.map((piece) => (
              <article key={piece.href}>
                <h3>{piece.title}</h3>
                <blockquote>{piece.excerpt}</blockquote>
                <p>{piece.annotation}</p>
                <a href={piece.href} target="_blank" rel="noreferrer">
                  {piece.linkLabel} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="story-outcome">
          <div className="story-section-heading">
            <p>Across the series</p>
            <h2>A measured first-person voice</h2>
          </div>
          <div className="story-copy">
            <p>
              The first-person voice stays measured and practical. The structure changes from
              a guide to a thesis-led argument to a five-point policy article.
            </p>
          </div>
        </section>

        <nav className="next-project" aria-label="Next">
          <span>Next</span>
          <Link href="/writing">
            Writing
            <b aria-hidden="true">→</b>
          </Link>
        </nav>
      </article>
    </main>
  );
}
