import Link from "next/link";
import EvidenceSwitcher from "../../components/EvidenceSwitcher";
import ImageComparison from "../../components/ImageComparison";
import ImageLightbox from "../../components/ImageLightbox";
import { SiteFooter, SiteHeader } from "../../components/PortfolioChrome";
import type { StoryEvidenceView, StoryImage } from "../portfolioTypes";

type PricingBlock =
  | { kind: "prose"; paragraphs: string[] }
  | { kind: "figure"; image: StoryImage }
  | {
      kind: "switcher";
      ariaLabel: string;
      initialId?: string;
      showCaption?: boolean;
      showDialogCaption?: boolean;
      views: StoryEvidenceView[];
    }
  | {
      kind: "comparison";
      layout?: "stacked";
      ariaLabel: string;
      before: { tag: string; image: StoryImage };
      after: { tag: string; image: StoryImage };
    };

type PricingSection = {
  id: string;
  title: string;
  blocks: PricingBlock[];
};

export type PricingCaseStory = {
  title: string;
  synopsis: string[];
  chapters: PricingSection[];
  closing: {
    heading: string;
    paragraphs: string[];
  };
  next: { href: string; label: string };
};

function PricingBlockView({ block }: { block: PricingBlock }) {
  if (block.kind === "prose") {
    return (
      <div className="chapter-prose">
        {block.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    );
  }

  if (block.kind === "figure") {
    return (
      <div className="chapter-media">
        <ImageLightbox
          alt={block.image.alt}
          caption={block.image.caption}
          chrome="overlay"
          dialogPresentation="minimal"
          height={block.image.height}
          label={block.image.label}
          previewSrc={block.image.src}
          sizes="(max-width: 1160px) 100vw, 1120px"
          width={block.image.width}
        />
      </div>
    );
  }

  if (block.kind === "switcher") {
    return (
      <div className="chapter-media">
        <EvidenceSwitcher
          ariaLabel={block.ariaLabel}
          dialogPresentation="minimal"
          initialId={block.initialId}
          presentation="quiet"
          showCaption={block.showCaption}
          showDialogCaption={block.showDialogCaption}
          views={block.views}
        />
      </div>
    );
  }

  if (block.kind === "comparison") {
    const mediaClassName =
      block.layout === "stacked"
        ? "chapter-media chapter-media--comparison-stacked"
        : "chapter-media";

    return (
      <div className={mediaClassName}>
        <ImageComparison
          ariaLabel={block.ariaLabel}
          chrome="overlay"
          dialogPresentation="minimal"
          items={[
            { label: block.before.tag, image: block.before.image },
            { label: block.after.tag, image: block.after.image },
          ]}
        />
      </div>
    );
  }

  return null;
}

export default function PricingCase({ story }: { story: PricingCaseStory }) {
  return (
    <main className="site-shell case-shell">
      <SiteHeader />
      <article className="chapter-page pricing-page">
        <Link className="back-link" href="/">
          <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
            <path d="M20 12H5m6-6-6 6 6 6" />
          </svg>
          <span>Back</span>
        </Link>

        <header className="chapter-hero">
          <h1>{story.title}</h1>
          <div className="chapter-synopsis">
            {story.synopsis.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </header>

        {story.chapters.map((chapter) => (
          <section className="chapter-section" id={chapter.id} key={chapter.id}>
            <h2 className="chapter-heading">
              <span className="chapter-heading-title">{chapter.title}</span>
            </h2>
            <div className="chapter-blocks">
              {chapter.blocks.map((block, index) => (
                <PricingBlockView block={block} key={`${chapter.id}-${block.kind}-${index}`} />
              ))}
            </div>
          </section>
        ))}

        <section className="chapter-closing">
          <h2 className="chapter-heading chapter-heading--closing">{story.closing.heading}</h2>
          <div className="chapter-prose">
            {story.closing.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <nav className="next-project" aria-label="Next project">
          <span>Next project</span>
          <Link href={story.next.href}>{story.next.label}<b aria-hidden="true">→</b></Link>
        </nav>
      </article>
      <SiteFooter />
    </main>
  );
}
