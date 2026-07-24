import Link from "next/link";
import type { CSSProperties } from "react";
import ImageLightbox from "../components/ImageLightbox";
import { SiteFooter, SiteHeader } from "../components/PortfolioChrome";
import EraDiagram from "./pricing-evolution/EraDiagram";

export type CaseImage = {
  alt: string;
  caption: string;
  /** Rendered CSS max-width in px (typically half the 2x source width). */
  displayWidth?: number;
  height: number;
  src: string;
  width: number;
};

export type ChapterBlock =
  | { kind: "prose"; paragraphs: string[] }
  | { kind: "figure"; image: CaseImage }
  | {
      kind: "comparison";
      before: CaseImage;
      after: CaseImage;
      beforeTag: string;
      afterTag: string;
      note?: string;
      /** "vertical" stacks the pair at full media width instead of two columns. */
      orientation?: "vertical";
    }
  | {
      kind: "moment";
      heading: string;
      text: string;
      image?: CaseImage;
    }
  | { kind: "strip"; label: string; items: CaseImage[] }
  | { kind: "tableLink"; image: CaseImage; linkLabel: string }
  | { kind: "diagram" };

export type Chapter = {
  id: string;
  era: string;
  title: string;
  blocks: ChapterBlock[];
};

export type ChapteredCaseStory = {
  context: string;
  title: string;
  synopsis: string[];
  chapters: Chapter[];
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

/** Images wider than this render on the wide media tier; smaller ones stay with the text column. */
const wideMomentThreshold = 740;

function imageStyle(image: CaseImage): CSSProperties | undefined {
  if (!image.displayWidth) return undefined;
  return { ["--chapter-img-max" as string]: `${image.displayWidth}px` };
}

function ChapterFigure({
  image,
  showCaption = true,
}: {
  image: CaseImage;
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

function ChapterBlockView({ block }: { block: ChapterBlock }) {
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
        <ChapterFigure image={block.image} />
      </div>
    );
  }

  if (block.kind === "diagram") {
    return (
      <div className="chapter-media">
        <EraDiagram />
      </div>
    );
  }

  if (block.kind === "strip") {
    return (
      <div className="chapter-media">
        <div className="chapter-strip" role="group" aria-label={block.label}>
          <p className="chapter-strip-label">{block.label}</p>
          {block.items.map((image) => (
            <ChapterFigure key={image.src} image={image} />
          ))}
        </div>
      </div>
    );
  }

  if (block.kind === "tableLink") {
    return (
      <div className="chapter-media chapter-table-link-row">
        <ImageLightbox
          chrome="link"
          linkLabel={block.linkLabel}
          triggerClassName="chapter-table-link"
          label={block.image.alt}
          previewSrc={block.image.src}
          width={block.image.width}
          height={block.image.height}
          alt={block.image.alt}
          caption={block.image.caption}
          showCaption={false}
          tallDialog
        />
      </div>
    );
  }

  if (block.kind === "comparison") {
    const note = block.note ?? block.before.caption;
    return (
      <div className="chapter-media">
        <div
          className={`chapter-comparison${
            block.orientation === "vertical" ? " chapter-comparison--vertical" : ""
          }`}
        >
          <div className="chapter-comparison-grid">
            <div>
              <p className="chapter-comparison-tag">{block.beforeTag}</p>
              <ChapterFigure image={block.before} showCaption={false} />
            </div>
            <div>
              <p className="chapter-comparison-tag">{block.afterTag}</p>
              <ChapterFigure image={block.after} showCaption={false} />
            </div>
          </div>
          {note && <p className="chapter-caption">{note}</p>}
        </div>
      </div>
    );
  }

  if (block.kind === "moment") {
    const copy = (
      <div className="chapter-moment-copy">
        <h3>{block.heading}</h3>
        <p>{block.text}</p>
      </div>
    );

    if (!block.image) {
      return <div className="chapter-moment chapter-moment--text">{copy}</div>;
    }

    const wide = (block.image.displayWidth ?? Infinity) > wideMomentThreshold;

    return (
      <div className={`chapter-moment${wide ? "" : " chapter-moment--text"}`}>
        {copy}
        <div className="chapter-media">
          <ChapterFigure image={block.image} />
        </div>
      </div>
    );
  }

  return null;
}

export default function ChapteredCase({ story }: { story: ChapteredCaseStory }) {
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
              <span className="chapter-era">{chapter.era}</span>
              <span className="chapter-heading-sep" aria-hidden="true"> · </span>
              <span className="chapter-heading-title">{chapter.title}</span>
            </h2>
            <div className="chapter-blocks">
              {chapter.blocks.map((block, index) => (
                <ChapterBlockView block={block} key={`${chapter.id}-${block.kind}-${index}`} />
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
