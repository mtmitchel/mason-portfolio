import Link from "next/link";
import ImageLightbox from "../components/ImageLightbox";
import { SiteFooter, SiteHeader } from "../components/PortfolioChrome";

export type StoryImage = {
  alt: string;
  caption: string;
  height: number;
  label: string;
  src: string;
  width: number;
};

export type CandidateStory = {
  cardTitle: string;
  collaborators: string;
  constraints: string;
  context: string;
  cover: StoryImage;
  decisions: Array<{ title: string; text: string }>;
  evidenceNote: string;
  evidenceSectionLabel?: string;
  evidenceSectionTitle?: string;
  experienceTitle: string;
  experienceSectionLabel?: string;
  href: string;
  flow?: Array<{ label: string; title: string; text: string }>;
  flowTitle?: string;
  hook: string;
  next: { href: string; label: string };
  outcome: string[];
  problem: string[];
  role: string;
  sequence: StoryImage[];
  stakes: string;
  title: string;
  tradeoff: string;
  transformation?: {
    after: string;
    before: string;
    label: string;
  };
};

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

export default function DeepLProjectCase({ project }: { project: CandidateStory }) {
  return (
    <main className="site-shell case-shell">
      <SiteHeader />
      <article className="story-page">
        <Link className="back-link" href="/work/candidate-review">Back to DeepL work</Link>

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
            <p>01 · {project.experienceSectionLabel ?? "The experience"}</p>
            <h2>{project.experienceTitle}</h2>
          </div>
          <EvidenceFigure image={project.cover} />
        </section>

        <section className="story-narrative">
          <div className="story-section-heading">
            <p>02 · The problem</p>
            <h2>{project.stakes}</h2>
          </div>
          <div className="story-copy">
            {project.problem.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <aside className="constraint-note"><strong>Constraint</strong>{project.constraints}</aside>
          </div>
        </section>

        {project.transformation && (
          <section className="language-turn">
            <div className="story-section-heading">
              <p>03 · The language turn</p>
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
            <p>04 · The judgment</p>
            <h2>The decisions doing the work</h2>
          </div>
          <div className="decision-list">
            {project.decisions.map((decision, index) => (
              <div key={decision.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{decision.title}</h3><p>{decision.text}</p></div>
              </div>
            ))}
          </div>
          <p className="tradeoff"><strong>The trade-off:</strong> {project.tradeoff}</p>
        </section>

        {project.flow && (
          <section className="state-sequence" aria-label="Content sequence">
            <div className="story-section-heading">
              <p>05 · The sequence</p>
              <h2>{project.flowTitle ?? "The decision, state by state"}</h2>
            </div>
            <ol>
              {project.flow.map((step) => (
                <li key={step.label}><span>{step.label}</span><h3>{step.title}</h3><p>{step.text}</p></li>
              ))}
            </ol>
          </section>
        )}

        <section className="story-evidence">
          <div className="story-section-heading">
            <p>{project.flow ? "06" : "05"} · {project.evidenceSectionLabel ?? "The interface"}</p>
            <h2>{project.evidenceSectionTitle ?? "How the language changes the experience"}</h2>
          </div>
          <div className="story-evidence-grid">
            {project.sequence.map((image) => <EvidenceFigure image={image} key={image.src} />)}
          </div>
        </section>

        <section className="story-outcome">
          <div className="story-section-heading">
            <p>{project.flow ? "07" : "06"} · The outcome</p>
            <h2>What the work made possible</h2>
          </div>
          <div className="story-copy">
            {project.outcome.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <aside className="evidence-limit"><strong>What this shows</strong>{project.evidenceNote}</aside>
          </div>
        </section>

        <nav className="next-project" aria-label="Next project">
          <span>Next project</span>
          <Link href={project.next.href}>{project.next.label}<b aria-hidden="true">↗</b></Link>
        </nav>
      </article>
      <SiteFooter />
    </main>
  );
}
