import Link from "next/link";
import { ChapterBackLink, ChapterFigure } from "../../components/ChapterCaseElements";
import EvidenceSwitcher from "../../components/EvidenceSwitcher";
import ImageComparison from "../../components/ImageComparison";
import { SiteHeader } from "../../components/PortfolioChrome";
import type { StoryEvidenceView, StoryImage } from "../portfolioTypes";

const usageLimit: StoryImage = {
  label: "Usage-limit offer",
  src: "/work/upgrade-prompts/usage-limit.png",
  width: 1092,
  height: 1500,
  alt: "DeepL Translator usage-limit prompt with a paid offer, a 24-hour reset explanation, benefits and a trial action",
  caption: "Lead with the offer, then name the usage limit and its 24-hour reset before listing paid benefits.",
};

const documentSize: StoryImage = {
  label: "Document-size message template",
  src: "/work/upgrade-prompts/document-size.png",
  width: 1092,
  height: 1204,
  alt: "Working DeepL document translation prompt with a variable placeholder for the user's file-size limit",
  caption: "Working template: place the account-specific file-size value inside the sentence that explains why the document cannot be translated.",
};

const documentAllowance: StoryImage = {
  label: "Document-allowance message template",
  src: "/work/upgrade-prompts/remaining-documents.png",
  width: 546,
  height: 626,
  alt: "Working DeepL document translation prompt with variable placeholders for the remaining and monthly document allowances",
  caption: "Working template: pair the account-specific remaining and monthly allowances with the date the limit resets.",
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

const featureAwarenessViews: StoryEvidenceView[] = [
  {
    id: "clarify",
    label: "Clarify",
    summary: "Explain an unfamiliar capability in one sentence, then show the exact ambiguity it resolves.",
    image: {
      label: "Clarify feature awareness",
      src: "/work/upgrade-prompts/feature-awareness-clarify.png",
      width: 3024,
      height: 1198,
      alt: "DeepL feature-awareness panel explaining Clarify beside a translation example that asks the user to resolve gender ambiguity",
      caption: "The explanation names the behavior; the product example shows the question Clarify asks before adjusting the translation.",
    },
  },
  {
    id: "tone",
    label: "Tone",
    summary: "Connect a short benefit statement to the controls a customer would actually use.",
    image: {
      label: "Tone feature awareness",
      src: "/work/upgrade-prompts/feature-awareness-tone.png",
      width: 3024,
      height: 1240,
      alt: "DeepL feature-awareness panel explaining tone controls beside formal, informal and writing-style options",
      caption: "The copy explains when tone matters, while the product view makes the available choices concrete.",
    },
  },
  {
    id: "files",
    label: "Files",
    summary: "Turn a broad feature label into a task and show the formats it covers.",
    image: {
      label: "File translation feature awareness",
      src: "/work/upgrade-prompts/feature-awareness-files.png",
      width: 3024,
      height: 1185,
      alt: "DeepL feature-awareness panel explaining whole-file translation beside supported document formats",
      caption: "The copy replaces a feature noun with the task—translate an entire file—then the visual supplies the format detail.",
    },
  },
  {
    id: "glossary",
    label: "Glossary",
    summary: "Frame terminology control as a consistency benefit rather than an internal product feature.",
    image: {
      label: "Glossary feature awareness",
      src: "/work/upgrade-prompts/feature-awareness-glossary.png",
      width: 3024,
      height: 1185,
      alt: "DeepL feature-awareness panel explaining personal glossaries beside terminology and writing examples",
      caption: "The explanation leads with consistency and connects it to a visible term pair and writing correction.",
    },
  },
];

const writeAllowance: StoryImage = {
  label: "Write Pro allowance states",
  src: "/work/upgrade-prompts/write-pro-allowance-comparison.png",
  width: 2468,
  height: 788,
  alt: "DeepL Write showing an inline message with nine alternatives remaining beside a full limit state offering a 30-day Write Pro trial",
  caption: "The inline state preserves the task while alternatives remain; the hard stop expands the offer, action and reassurance.",
};

export default function UpgradePromptsCase() {
  return (
    <main className="site-shell case-shell chapter-shell">
      <SiteHeader />
      <article className="chapter-page chapter-case-page upgrade-prompts-page">
        <ChapterBackLink />

        <header className="chapter-hero">
          <h1>Upgrade prompts across Translator and Write</h1>
          <div className="chapter-synopsis">
            <p>People could hit a free limit for very different reasons: an exhausted allowance, an oversized document, or a paid feature they had just tried to use.</p>
            <p>As the UX writer and content designer working with product design and monetization, I helped turn those interruptions into a repeatable system: explain what happened, connect the paid benefit to the task, then offer the next action that account could take.</p>
            <p>The same logic extended from hard stops to feature awareness and account-specific offers. Across the wider experiment wave, it also sat inside a measurable free-to-paid result.</p>
          </div>
        </header>

        <section className="chapter-section" id="different-interruptions">
          <h2 className="chapter-heading">Different interruptions needed different explanations</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>A free usage limit stops translation but leaves a wait-and-return route. The prompt pairs the Pro offer with a 24-hour reset.</p>
            </div>
            <ChapterFigure image={usageLimit} measure="compact" />
          </div>
        </section>

        <section className="chapter-section" id="why-the-task-stopped">
          <h2 className="chapter-heading">Name why the task stopped</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>These working templates keep the variable where it does the most explanatory work. The file-size value completes the sentence about why the document stopped.</p>
              <p>The allowance values show what remains, the monthly total, and when the limit resets. The unresolved braces visible in these artifacts are template variables, not final customer values.</p>
            </div>
            <div className="chapter-media">
              <ImageComparison
                ariaLabel="Working document-size and document-allowance message templates"
                chrome="overlay"
                dialogPresentation="minimal"
                dialogSizes="1440px"
                items={[
                  { label: "File-size limit", image: documentSize },
                  { label: "Monthly allowance", image: documentAllowance },
                ]}
                sizes="(max-width: 928px) calc(100vw - 48px), 880px"
              />
            </div>
          </div>
        </section>

        <section className="chapter-section" id="paid-value">
          <h2 className="chapter-heading">Match the paid value to the task</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>When the interruption comes from a Pro-only control, the offer names the capability the user selected instead of switching to a generic upgrade message.</p>
            </div>
            <div className="chapter-media">
              <ImageComparison
                ariaLabel="Upgrade prompts for two paid Translator capabilities"
                chrome="overlay"
                dialogPresentation="minimal"
                dialogSizes="1440px"
                items={[
                  { label: "Formality", image: formality },
                  { label: "More glossaries", image: glossaries },
                ]}
                sizes="(max-width: 928px) calc(100vw - 48px), 880px"
              />
            </div>
          </div>
        </section>

        <section className="chapter-section" id="feature-awareness">
          <h2 className="chapter-heading">Show the value before the hard stop</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>A paid feature cannot rely on its label alone. Each awareness state pairs a plain-language benefit with a product example, so the customer can see the task before deciding whether the feature matters.</p>
            </div>
            <div className="chapter-media">
              <EvidenceSwitcher
                ariaLabel="Choose a DeepL feature-awareness state"
                dialogPresentation="minimal"
                dialogSizes="1440px"
                initialId="clarify"
                presentation="quiet"
                sizes="(max-width: 928px) calc(100vw - 48px), 880px"
                views={featureAwarenessViews}
              />
            </div>
          </div>
        </section>

        <section className="chapter-section" id="account-state">
          <h2 className="chapter-heading">Change the offer for the account state</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>The same Write moment keeps its structure, but the trial promise and action change for someone who already pays for Translator Pro.</p>
            </div>
            <div className="chapter-media">
              <ImageComparison
                ariaLabel="Write Pro offers for free and Translator Pro accounts"
                chrome="overlay"
                dialogPresentation="minimal"
                dialogSizes="1440px"
                items={[
                  { label: "Free account", image: writeFree },
                  { label: "Translator Pro account", image: writeTranslatorPro },
                ]}
                sizes="(max-width: 928px) calc(100vw - 48px), 880px"
              />
            </div>
          </div>
        </section>

        <section className="chapter-section" id="allowance-state">
          <h2 className="chapter-heading">Escalate the ask with the interruption</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>While nine alternatives remain, the offer stays inline and the writing task continues. At the hard stop, the message takes over the surface, names the unlimited benefit, offers a 30-day trial, and adds “Cancel anytime” as reassurance.</p>
            </div>
            <ChapterFigure image={writeAllowance} />
          </div>
        </section>

        <section className="chapter-closing" id="wave-result">
          <h2 className="chapter-heading chapter-heading--closing">The wider experiment wave</h2>
          <div className="chapter-prose">
            <p>Across the wider experiment wave, DeepL recorded a 12% rise in paid conversion and a seven-figure ARR increase.</p>
          </div>
        </section>

        <nav className="next-project" aria-label="Next project">
          <span>Next project</span>
          <Link href="/work/pricing-evolution">Making the more expensive plan explain itself<b aria-hidden="true">→</b></Link>
        </nav>
      </article>
    </main>
  );
}
