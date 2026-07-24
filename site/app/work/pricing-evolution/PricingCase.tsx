import Link from "next/link";
import type { CSSProperties } from "react";
import EvidenceSwitcher from "../../components/EvidenceSwitcher";
import ImageComparison from "../../components/ImageComparison";
import ImageLightbox from "../../components/ImageLightbox";
import { SiteFooter, SiteHeader } from "../../components/PortfolioChrome";
import type { StoryEvidenceView } from "../portfolioTypes";

type PricingImage = {
  alt: string;
  caption: string;
  /** Rendered CSS max-width in px (typically half the 2x source width). */
  displayWidth?: number;
  height: number;
  src: string;
  width: number;
};

type PricingBlock =
  | { kind: "prose"; paragraphs: string[] }
  | { kind: "figure"; image: PricingImage }
  | {
      kind: "comparison";
      before: PricingImage;
      after: PricingImage;
      beforeTag: string;
      afterTag: string;
      note?: string;
    }
  | { kind: "strip"; label: string; items: PricingImage[] }
  | {
      kind: "stack";
      ariaLabel: string;
      items: Array<{ image: PricingImage; label: string }>;
    }
  | {
      kind: "switcher";
      ariaLabel: string;
      initialId?: string;
      views: StoryEvidenceView[];
    };

type PricingSection = {
  id: string;
  title: string;
  blocks: PricingBlock[];
};

export type PricingCaseStory = {
  context: string;
  title: string;
  synopsis: string[];
  chapters: PricingSection[];
  closing: {
    heading: string;
    paragraphs: string[];
  };
  coda: {
    prefix: string;
    href: string;
    linkLabel: string;
    suffix?: string;
  };
  next: { href: string; label: string };
};

/** Preview fetch hint matching the chapter media column (1120px max). */
const chapterImageSizes = "(max-width: 1160px) 100vw, 1120px";

function imageStyle(image: PricingImage): CSSProperties | undefined {
  if (!image.displayWidth) return undefined;
  return { ["--chapter-img-max" as string]: `${image.displayWidth}px` };
}

function PricingFigure({
  image,
  showCaption = true,
}: {
  image: PricingImage;
  showCaption?: boolean;
}) {
  return (
    <div className="chapter-figure" style={imageStyle(image)}>
      <ImageLightbox
        chrome="image"
        label={image.alt}
        previewSrc={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        caption={image.caption}
        showCaption={showCaption && Boolean(image.caption)}
        sizes={chapterImageSizes}
      />
    </div>
  );
}

function PricingLabeledFigure({
  image,
  label,
}: {
  image: PricingImage;
  label: string;
}) {
  return (
    <div className="chapter-figure" style={imageStyle(image)}>
      <p className="chapter-strip-label">{label}</p>
      <ImageLightbox
        chrome="image"
        label={image.alt}
        previewSrc={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        caption={image.caption}
        showCaption={Boolean(image.caption)}
        sizes={chapterImageSizes}
      />
    </div>
  );
}

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
        <PricingFigure image={block.image} />
      </div>
    );
  }

  if (block.kind === "strip") {
    return (
      <div className="chapter-media">
        <div className="chapter-strip" role="group" aria-label={block.label}>
          <p className="chapter-strip-label">{block.label}</p>
          {block.items.map((image) => (
            <PricingFigure key={image.src} image={image} />
          ))}
        </div>
      </div>
    );
  }

  if (block.kind === "stack") {
    return (
      <div className="chapter-media">
        <div className="chapter-strip" role="group" aria-label={block.ariaLabel}>
          {block.items.map((item) => (
            <PricingLabeledFigure image={item.image} key={item.label} label={item.label} />
          ))}
        </div>
      </div>
    );
  }

  if (block.kind === "switcher") {
    return (
      <div className="chapter-media">
        <EvidenceSwitcher
          ariaLabel={block.ariaLabel}
          initialId={block.initialId}
          views={block.views}
        />
      </div>
    );
  }

  if (block.kind === "comparison") {
    return (
      <div className="chapter-media">
        <ImageComparison
          ariaLabel={`${block.beforeTag} compared with ${block.afterTag}`}
          items={[
            {
              label: block.beforeTag,
              image: { ...block.before, label: block.beforeTag },
            },
            {
              label: block.afterTag,
              image: { ...block.after, label: block.afterTag },
            },
          ]}
        />
        {block.note && <p className="chapter-caption">{block.note}</p>}
      </div>
    );
  }

  return null;
}

export default function PricingCase({ story }: { story: PricingCaseStory }) {
  return (
    <main className="site-shell case-shell">
      <SiteHeader />
      <article className="chapter-page">
        <Link className="back-link" href="/">Back to selected work</Link>

        <header className="chapter-hero">
          <p className="chapter-context">{story.context}</p>
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

        <section className="story-coda">
          <p>
            {story.coda.prefix}
            <a href={story.coda.href}>{story.coda.linkLabel}</a>
            {story.coda.suffix}
          </p>
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
