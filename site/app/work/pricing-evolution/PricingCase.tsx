import Link from "next/link";
import EvidenceSwitcher from "../../components/EvidenceSwitcher";
import ImageLightbox from "../../components/ImageLightbox";
import { SiteHeader } from "../../components/PortfolioChrome";
import type { StoryEvidenceView, StoryImage } from "../portfolioTypes";

const pricingImageSizes = "(max-width: 928px) calc(100vw - 48px), 880px";
const pricingDialogSizes = "1440px";

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
    };

type PricingMovement = {
  id: string;
  title: string;
  blocks: PricingBlock[];
};

export type PricingCaseStory = {
  title: string;
  synopsis: string[];
  movements: PricingMovement[];
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
          dialogSizes={pricingDialogSizes}
          height={block.image.height}
          label={block.image.label}
          previewSrc={block.image.src}
          sizes={pricingImageSizes}
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
          dialogSizes={pricingDialogSizes}
          initialId={block.initialId}
          presentation="quiet"
          showCaption={block.showCaption}
          showDialogCaption={block.showDialogCaption}
          sizes={pricingImageSizes}
          views={block.views}
        />
      </div>
    );
  }

  return null;
}

export default function PricingCase({ story }: { story: PricingCaseStory }) {
  return (
    <main className="site-shell case-shell pricing-shell">
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

        {story.movements.map((movement) => (
          <section className="chapter-section" id={movement.id} key={movement.id}>
            <h2 className="chapter-heading">
              <span className="chapter-heading-title">{movement.title}</span>
            </h2>
            <div className="chapter-blocks">
              {movement.blocks.map((block, index) => (
                <PricingBlockView block={block} key={`${movement.id}-${block.kind}-${index}`} />
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
    </main>
  );
}
