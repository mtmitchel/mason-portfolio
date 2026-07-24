import Link from "next/link";
import ImageComparison from "../../components/ImageComparison";
import ImageLightbox from "../../components/ImageLightbox";
import { SiteFooter, SiteHeader } from "../../components/PortfolioChrome";
import type { StoryImage } from "../portfolioTypes";

const usageLimit: StoryImage = {
  label: "Usage-limit offer",
  src: "/work/upgrade-prompts/usage-limit.png",
  width: 1092,
  height: 1500,
  alt: "DeepL Translator usage-limit prompt with a paid offer, a 24-hour reset explanation, benefits and a trial action",
  caption: "Lead with the offer, then name the usage limit and its 24-hour reset before listing paid benefits.",
};

const documentSize: StoryImage = {
  label: "Document-size limit",
  src: "/work/upgrade-prompts/document-size.png",
  width: 1092,
  height: 1204,
  alt: "DeepL document translation prompt inserting the user's exact file-size limit into the explanation",
  caption: "Insert the user's exact file-size limit into the sentence that explains why the document cannot be translated.",
};

const documentAllowance: StoryImage = {
  label: "Document allowance",
  src: "/work/upgrade-prompts/remaining-documents.png",
  width: 546,
  height: 626,
  alt: "DeepL document translation prompt stating the remaining and monthly document allowances and when the limit resets",
  caption: "State the user's remaining and monthly document allowances, then say when the limit resets.",
};

const formality: StoryImage = {
  label: "Formality",
  src: "/work/upgrade-prompts/formality.png",
  width: 1092,
  height: 1150,
  alt: "DeepL Translator prompt for the formal and informal tone feature with a Pro trial action",
  caption: "Connect the paid offer to the tone control the user selected.",
};

const glossaries: StoryImage = {
  label: "More glossaries",
  src: "/work/upgrade-prompts/glossaries.png",
  width: 1092,
  height: 1388,
  alt: "DeepL Translator prompt for creating multiple glossaries with a Pro trial action",
  caption: "Connect the paid offer to terminology work and state the one-glossary limit.",
};

const writeFree: StoryImage = {
  label: "Write offer for a free account",
  src: "/work/upgrade-prompts/write-free-account-detail.png",
  width: 1520,
  height: 800,
  alt: "Detail of a DeepL Write Pro prompt for a free account with a 30-day trial and a return-later action",
  caption: "Offer a 30-day trial and keep the return-later route available.",
};

const writeTranslatorPro: StoryImage = {
  label: "Write offer for a Translator Pro account",
  src: "/work/upgrade-prompts/write-translator-pro-account-detail.png",
  width: 1520,
  height: 800,
  alt: "Matching detail of a DeepL Write Pro prompt for an existing Translator Pro account with an upgrade action",
  caption: "Replace the trial with an upgrade action for an existing Translator Pro customer.",
};

function EvidenceFigure({ image }: { image: StoryImage }) {
  return (
    <div className="chapter-figure">
      <ImageLightbox
        chrome="image"
        label={image.label}
        previewSrc={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        caption={image.caption}
        sizes="(max-width: 1160px) 100vw, 1120px"
      />
    </div>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="story-section-heading">
      <p>{label}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default function UpgradePromptsCase() {
  return (
    <main className="site-shell case-shell">
      <SiteHeader />
      <article className="story-page">
        <Link className="back-link" href="/">Back to selected work</Link>

        <header className="story-hero">
          <p className="story-context">DeepL · Monetization</p>
          <h1>Upgrade prompts across Translator and Write</h1>
          <div className="chapter-synopsis">
            <p>Free limits could interrupt work for different reasons: a translation allowance, a document that was too large or a Pro-only feature.</p>
            <p>With product design, content design and monetization, I contributed prompts that named why each task stopped, connected the paid offer to the interrupted task and adapted the next step to the product and account state.</p>
            <p>The prompts follow a repeatable reason, benefit and next-step pattern. The final Write pair changes the offer for free and Translator Pro accounts, while the wider wave also recorded a business result.</p>
          </div>
        </header>

        <section className="story-evidence" id="different-interruptions">
          <SectionHeading label="Usage limit" title="Different interruptions needed different explanations" />
          <div className="story-copy story-section-intro">
            <p>A free usage limit stops translation but leaves a wait-and-return route. The prompt pairs the Pro offer with a 24-hour reset.</p>
          </div>
          <EvidenceFigure image={usageLimit} />
        </section>

        <section className="story-evidence" id="why-the-task-stopped">
          <SectionHeading label="Document limits" title="Name why the task stopped" />
          <div className="story-copy story-section-intro">
            <p>The file-size sentence inserts the user’s exact limit.</p>
            <p>The allowance prompt states how many monthly document translations remain and when the limit resets.</p>
          </div>
          <div className="story-evidence-grid">
            {[documentSize, documentAllowance].map((image) => <EvidenceFigure image={image} key={image.src} />)}
          </div>
        </section>

        <section className="story-evidence" id="paid-value">
          <SectionHeading label="Feature access" title="Match the paid value to the task" />
          <div className="story-copy story-section-intro">
            <p>When the interruption comes from a Pro-only control, the offer names the capability the user selected instead of switching to a generic upgrade message.</p>
          </div>
          <div className="story-evidence-grid">
            {[formality, glossaries].map((image) => <EvidenceFigure image={image} key={image.src} />)}
          </div>
        </section>

        <section className="story-evidence" id="account-state">
          <SectionHeading label="Account state" title="Change the offer for the account state" />
          <div className="story-copy story-section-intro">
            <p>The same Write moment keeps its structure, but the trial promise and action change for someone who already pays for Translator Pro.</p>
          </div>
          <ImageComparison
            ariaLabel="Write Pro offers for free and Translator Pro accounts"
            items={[
              { label: "Free account", image: writeFree },
              { label: "Translator Pro account", image: writeTranslatorPro },
            ]}
          />
        </section>

        <section className="story-outcome" id="wave-result">
          <SectionHeading label="Wave result" title="The wider experiment wave" />
          <div className="story-copy">
            <p>Across the wider experiment wave, DeepL recorded a 12% rise in paid conversion and a seven-figure ARR increase.</p>
          </div>
        </section>

        <nav className="next-project" aria-label="Next project">
          <span>Next project</span>
          <Link href="/work/pricing-evolution">Simplifying pricing across four products<b aria-hidden="true">→</b></Link>
        </nav>
      </article>
      <SiteFooter />
    </main>
  );
}
