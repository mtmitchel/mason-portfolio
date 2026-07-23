import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./PortfolioChrome";
import type { EditorialMiniCase as EditorialMiniCaseData } from "../work/portfolioTypes";

export default function EditorialMiniCase({ project }: { project: EditorialMiniCaseData }) {
  return (
    <main className="site-shell case-shell">
      <SiteHeader />
      <article className="story-page editorial-case">
        <Link className="back-link" href="/">Back to selected work</Link>

        <header className="story-hero">
          <p className="story-context">{project.context}</p>
          <h1>{project.title}</h1>
          <p className="story-hook">{project.hook}</p>
          <dl className="story-facts">
            <div><dt>My role</dt><dd>{project.role}</dd></div>
            <div><dt>Worked with</dt><dd>{project.collaborators}</dd></div>
            <div><dt>Why it mattered</dt><dd>{project.stakes}</dd></div>
          </dl>
        </header>

        {project.cover && (
          <figure className="editorial-cover">
            <Image src={project.cover.src} width={project.cover.width} height={project.cover.height} alt={project.cover.alt} sizes="(max-width: 600px) 100vw, 820px" />
            <figcaption>{project.cover.caption}</figcaption>
          </figure>
        )}

        <section className="story-narrative">
          <div className="story-section-heading"><p>The assignment</p><h2>{project.assignmentTitle}</h2></div>
          <div className="story-copy">
            {project.problem.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className="story-decisions">
          <div className="story-section-heading"><p>Key decisions</p><h2>{project.decisionsTitle}</h2></div>
          <div className="decision-list">
            {project.decisions.map((decision) => (
              <div key={decision.title}><div><h3>{decision.title}</h3><p>{decision.text}</p></div></div>
            ))}
          </div>
        </section>

        <section className="published-writing">
          <div className="story-section-heading"><p>Published writing</p><h2>Read the work in context</h2></div>
          <div className="published-piece-list">
            {project.pieces.map((piece) => (
              <article key={piece.href}>
                <h3>{piece.title}</h3>
                {piece.sample.kind === "quote" ? (
                  <blockquote>{piece.sample.text}</blockquote>
                ) : (
                  <p className={`published-sample published-sample--${piece.sample.kind}`}>
                    <span>{piece.sample.kind === "headline" ? "Headline:" : "Structure:"}</span>{" "}
                    {piece.sample.text}
                  </p>
                )}
                <a href={piece.href} target="_blank" rel="noreferrer">{piece.linkLabel} <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
          <p className="integrated-evidence-note">{project.evidenceNote}</p>
        </section>

        <nav className="next-project" aria-label="Next project">
          <span>Next</span>
          <Link href={project.next.href}>{project.next.label}<b aria-hidden="true">→</b></Link>
        </nav>
      </article>
      <SiteFooter />
    </main>
  );
}
