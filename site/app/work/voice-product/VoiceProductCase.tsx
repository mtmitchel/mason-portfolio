import Link from "next/link";
import { ChapterBackLink, ChapterFigure } from "../../components/ChapterCaseElements";
import { SiteHeader } from "../../components/PortfolioChrome";
import type { StoryImage } from "../portfolioTypes";

const voiceHeader: StoryImage = {
  label: "DeepL Voice positioning",
  src: "/work/voice-product/voice-positioning-header.png",
  width: 3024,
  height: 614,
  alt: "DeepL Voice headline promising real-time voice translation with three supporting benefit statements",
  caption: "One headline establishes the category; three supporting statements cover performance, translation quality, and security.",
};

const voiceOffers: StoryImage = {
  label: "DeepL Voice offer comparison",
  src: "/work/voice-product/voice-offer-comparison.png",
  width: 3024,
  height: 2654,
  alt: "DeepL pricing surface comparing Voice for Meetings and Voice for Conversations with distinct use cases, benefits, and sales actions",
  caption: "The shared structure makes the products comparable while the headlines, illustrations, and benefit lists give each one a distinct job.",
};

export default function VoiceProductCase() {
  return (
    <main className="site-shell case-shell chapter-shell">
      <SiteHeader />
      <article className="chapter-page chapter-case-page voice-product-page">
        <ChapterBackLink />

        <header className="chapter-hero">
          <h1>Giving DeepL Voice two clear jobs</h1>
          <div className="chapter-synopsis">
            <p>Adding Voice to a portfolio already containing Translator, Write, and API created two content problems: establish the new category, then explain why meetings and in-person conversations needed different offers.</p>
            <p>I contributed product content within the wider Voice and pricing work. The central content decision was to establish one category, then separate meetings and in-person conversations into distinct offers.</p>
            <p>The working surface moves from one shared value proposition to two concrete buying conversations without making the customer decode the product structure.</p>
          </div>
        </header>

        <section className="chapter-section" id="establish-the-category">
          <h2 className="chapter-heading">Establish the category before the offers</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>“Real-time voice translations for global collaboration” gives the product one clear category promise. The supporting line then reduces three enterprise concerns—performance, translation quality, and security—to a scannable set.</p>
            </div>
            <ChapterFigure image={voiceHeader} />
          </div>
        </section>

        <section className="chapter-section" id="two-buying-decisions">
          <h2 className="chapter-heading">Turn one technology into two buying decisions</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>The comparison keeps a shared card structure, but it does not force both offers through the same description.</p>
              <p>Meetings centers inclusive virtual collaboration. Conversations centers frontline, in-person interactions. Product-specific illustrations and benefit lists reinforce the difference, while “Let’s talk” and “Contact Sales” keep the next step consistent.</p>
            </div>
            <ChapterFigure image={voiceOffers} measure="reading" />
          </div>
        </section>

        <section className="chapter-closing">
          <h2 className="chapter-heading chapter-heading--closing">A coherent offer, not just another tab</h2>
          <div className="chapter-prose">
            <p>The strongest part of the work is the hierarchy: define Voice once, separate it into two recognizable jobs, then keep each offer’s detail attached to the relevant use case.</p>
            <p>The working comparison demonstrates that hierarchy in one place: a shared category, two recognizable jobs, and details attached to the relevant use case.</p>
          </div>
        </section>

        <nav className="next-project" aria-label="Next project">
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
