import Link from "next/link";
import ImageLightbox from "./ImageLightbox";
import { SiteFooter, SiteHeader } from "./PortfolioChrome";
import type { ArtifactCollection } from "../work/portfolioTypes";

export default function ArtifactCollectionCase({ collection }: { collection: ArtifactCollection }) {
  return (
    <main className="site-shell case-shell">
      <SiteHeader />
      <article className="story-page artifact-collection">
        <Link className="back-link" href="/">Back to selected work</Link>

        <header className="story-hero">
          <p className="story-context">{collection.context}</p>
          <h1>{collection.title}</h1>
          <p className="story-hook">{collection.hook}</p>
          <dl className="story-facts">
            <div><dt>My role</dt><dd>{collection.role}</dd></div>
            <div><dt>Worked with</dt><dd>{collection.collaborators}</dd></div>
            <div><dt>Why it mattered</dt><dd>{collection.stakes}</dd></div>
          </dl>
        </header>

        {collection.sections.map((section) => (
          <section className="story-evidence artifact-collection-section" id={section.id} key={section.id}>
            <div className="story-section-heading">
              <p>{section.label}</p>
              <h2>{section.title}</h2>
            </div>
            <div className="story-copy">
              {section.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="story-evidence-grid">
              {section.images.map((image) => (
                <ImageLightbox
                  key={image.src}
                  label={image.label}
                  previewSrc={image.src}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                  caption={image.caption}
                />
              ))}
            </div>
          </section>
        ))}

        <section className="story-outcome">
          <div className="story-section-heading"><p>Evidence boundary</p><h2>What this collection establishes</h2></div>
          <div className="story-copy"><p>{collection.evidenceNote}</p></div>
        </section>

        <nav className="next-project" aria-label="Next project">
          <span>Next project</span>
          <Link href={collection.next.href}>{collection.next.label}<b aria-hidden="true">→</b></Link>
        </nav>
      </article>
      <SiteFooter />
    </main>
  );
}
