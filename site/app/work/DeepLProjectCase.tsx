import Link from "next/link";
import ImageLightbox from "../components/ImageLightbox";
import { SiteFooter, SiteHeader } from "../components/PortfolioChrome";
import type { ProductCaseStory, StoryImage } from "./portfolioTypes";

export type { ProductCaseStory, StoryImage } from "./portfolioTypes";

function EvidenceFigure({ image }: { image: StoryImage }) {
  const previewClassName = image.height / image.width > 2 ? "evidence-preview--tall-page" : undefined;

  return (
    <ImageLightbox
      label={image.label}
      previewSrc={image.src}
      previewClassName={previewClassName}
      width={image.width}
      height={image.height}
      alt={image.alt}
      caption={image.caption}
    />
  );
}

export default function DeepLProjectCase({ project }: { project: ProductCaseStory }) {
  const FlowList = project.flowIsOrdered === false ? "ul" : "ol";

  return (
    <main className="site-shell case-shell">
      <SiteHeader />
      <article className="story-page">
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

        <section className="story-cover" aria-label="Final experience">
          <div className="story-section-heading">
            <p>{project.experienceSectionLabel ?? "The experience"}</p>
            <h2>{project.experienceTitle}</h2>
          </div>
          <EvidenceFigure image={project.cover} />
        </section>

        <section className="story-narrative">
          <div className="story-section-heading">
            <p>The problem</p>
            <h2>{project.problemTitle ?? "The content problem behind the interface"}</h2>
          </div>
          <div className="story-copy">
            {project.problem.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <aside className="constraint-note"><strong>Constraint</strong>{project.constraints}</aside>
          </div>
        </section>

        {project.transformation && (
          <section className="language-turn">
            <div className="story-section-heading">
              <p>Before and after</p>
              <h2>{project.transformation.label}</h2>
            </div>
            <div className="language-comparison">
              <div><span>Before</span><p>{project.transformation.before}</p></div>
              <div><span>After</span><p>{project.transformation.after}</p></div>
            </div>
          </section>
        )}

        <section className="story-decisions">
          <div className="story-section-heading">
            <p>Key content decisions</p>
            <h2>{project.decisionsTitle ?? "The choices that shaped the experience"}</h2>
          </div>
          <div className="decision-list">
            {project.decisions.map((decision) => (
              <div key={decision.title}>
                <div><h3>{decision.title}</h3><p>{decision.text}</p></div>
              </div>
            ))}
          </div>
          <p className="tradeoff"><strong>The trade-off:</strong> {project.tradeoff}</p>
        </section>

        {project.flow && (
          <section className="state-sequence" aria-label={project.flowAriaLabel ?? "Content sequence"}>
            <div className="story-section-heading">
              <p>{project.flowSectionLabel ?? "The sequence"}</p>
              <h2>{project.flowTitle ?? "The decision, state by state"}</h2>
            </div>
            <FlowList>
              {project.flow.map((step) => (
                <li key={step.label}><span>{step.label}</span><h3>{step.title}</h3><p>{step.text}</p></li>
              ))}
            </FlowList>
          </section>
        )}

        {project.sequence.length > 0 && (
          <section className="story-evidence">
            <div className="story-section-heading">
              <p>{project.evidenceSectionLabel ?? "The interface"}</p>
              <h2>{project.evidenceSectionTitle ?? "How the language changes the experience"}</h2>
            </div>
            <div className="story-evidence-grid">
              {project.sequence.map((image) => <EvidenceFigure image={image} key={image.src} />)}
            </div>
          </section>
        )}

        <section className="story-outcome">
          <div className="story-section-heading">
            <p>The outcome</p>
            <h2>{project.outcomeTitle ?? "The result of the content system"}</h2>
          </div>
          <div className="story-copy">
            {project.outcome.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p className="integrated-evidence-note">{project.evidenceNote}</p>
          </div>
        </section>

        <nav className="next-project" aria-label="Next project">
          <span>Next project</span>
          <Link href={project.next.href}>{project.next.label}<b aria-hidden="true">→</b></Link>
        </nav>
      </article>
      <SiteFooter />
    </main>
  );
}
