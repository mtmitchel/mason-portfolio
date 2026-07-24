import type { Metadata } from "next";
import ImageLightbox from "../../components/ImageLightbox";
import { SiteFooter, SiteHeader } from "../../components/PortfolioChrome";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Turning localization research into a multi-format campaign — Mason Mitchel",
  description: "An editorial case study about turning one localization study into a report, article and customer stories.",
  alternates: { canonical: "/work/report-campaign" },
};

export default function ReportCampaignPage() {
  return (
    <main className="site-shell case-shell">
      <SiteHeader />
      <article className="story-page editorial-case">
        <Link className="back-link" href="/">Back to selected work</Link>

        <header className="story-hero">
          <p className="story-context">DeepL · Research and editorial</p>
          <h1>Turning localization research into a multi-format campaign</h1>
          <p className="story-hook">Survey findings became a 17-page report and a shorter article. Separate webinar material became HubSpot and Phrase customer stories. I wrote, edited, structured and repurposed the content across these formats.</p>
        </header>

        <section className="story-cover" aria-label="Report structure">
          <div className="story-section-heading"><p>Report structure</p><h2>Build the report around marketers’ questions</h2></div>
          <div className="story-evidence-grid">
            <ImageLightbox
              label="Report cover"
              previewSrc="/work/report-campaign/report-cover.png"
              width={978}
              height={1369}
              alt="Cover of DeepL's state of translation and localization report for 2023 and 2024"
              caption="The 17-page report opens with the state of translation and localization for marketing leaders."
            />
            <ImageLightbox
              label="Executive summary"
              previewSrc="/work/report-campaign/key-findings.png"
              width={1488}
              height={2105}
              alt="Executive summary showing five findings from DeepL's localization survey"
              caption="The executive summary puts ROI, adoption, terminology risk and integration friction on one page before the report expands each finding."
            />
          </div>
        </section>

        <section className="story-narrative" aria-label="Report and article comparison">
          <div className="story-section-heading"><p>Report to article</p><h2>Change the entry point, keep the figures</h2></div>
          <div className="language-comparison" role="group" aria-label="The same adoption figures in the report and article">
            <div>
              <span>Report</span>
              <ImageLightbox
                label="Report adoption finding"
                previewSrc="/work/report-campaign/report-ai-findings-source.png"
                width={608}
                height={340}
                alt="Report finding stating that 77 percent use AI-assisted writing tools and 98 percent use machine translation"
                caption="The report groups both adoption figures into one finding."
              />
            </div>
            <div>
              <span>Article</span>
              <p>AI-assisted writing tools are used by 77% of respondents, and machine translation by an astonishing 98%.</p>
            </div>
          </div>
          <div className="story-evidence-grid">
            <ImageLightbox
              label="Article adaptation"
              previewSrc="/work/report-campaign/ai-content-generation.png"
              width={1488}
              height={1100}
              alt="DeepL article section titled The rise of AI in content generation with localization survey findings"
              caption="The report groups the adoption figures; the article turns them into one sentence at the start of the shorter argument."
            />
          </div>
        </section>

        <section className="story-evidence" aria-label="Customer story adaptations">
          <div className="story-section-heading"><p>Webinar to customer stories</p><h2>Turn webinar material into operating stories</h2></div>
          <div className="story-evidence-grid">
            <ImageLightbox
              label="HubSpot customer story"
              previewSrc="/work/report-campaign/hubspot-story-focus.png"
              width={1348}
              height={1300}
              alt="HubSpot customer story with company context, challenge and solution sections"
              caption="Challenge and solution labels turn HubSpot’s operational detail into a route the reader can scan."
            />
            <ImageLightbox
              label="Phrase customer story"
              previewSrc="/work/report-campaign/phrase-story-focus.png"
              width={1348}
              height={760}
              alt="Phrase customer story with company context and challenge section"
              caption="The Phrase story reuses the same structure while changing the technical detail."
            />
          </div>
        </section>

        <section className="published-writing">
          <div className="story-section-heading"><p>Campaign result</p><h2>Published work and campaign result</h2></div>
          <div className="published-links">
            <a href="https://www.deepl.com/en/blog/navigating-localization-challanges-report" target="_blank" rel="noreferrer">Read the localization report summary <span aria-hidden="true">↗</span></a>
            <a href="https://www.deepl.com/en/blog/how-hubspot-streamlines-localization-with-machine-translation" target="_blank" rel="noreferrer">Read the HubSpot article <span aria-hidden="true">↗</span></a>
          </div>
          <p>DeepL recorded a six-figure lead-generation pipeline for the campaign. My contribution was the writing, editing, structure, and repurposing across the report, article, and customer stories.</p>
        </section>

        <nav className="next-project" aria-label="Next project"><span>Next project</span><Link href="/work/localyze-executive-ghostwriting">Executive ghostwriting on global mobility<b aria-hidden="true">→</b></Link></nav>
      </article>
      <SiteFooter />
    </main>
  );
}
