import type { Metadata } from "next";
import ImageLightbox from "../../components/ImageLightbox";
import { SiteFooter, SiteHeader } from "../../components/PortfolioChrome";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Localization report campaign — Mason Mitchel",
  description: "An editorial case study about turning one localization study into a report, article and customer stories.",
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
          <p className="story-hook">I structured survey findings into a report, rebuilt the argument for a shorter article and shaped webinar material into customer stories.</p>
          <dl className="story-facts">
            <div><dt>My role</dt><dd>Writer and editor across report, blog and customer-story formats</dd></div>
            <div><dt>Worked with</dt><dd>Content marketing, research, design, webinar producers and customer speakers</dd></div>
            <div><dt>Why it mattered</dt><dd>One survey had to feed a 17-page report, a five-minute article and two customer stories without the numbers drifting.</dd></div>
          </dl>
        </header>

        <section className="story-cover" aria-label="Published report">
          <div className="story-section-heading"><p>The publication</p><h2>A 17-page report built around business questions</h2></div>
          <ImageLightbox
            label="Report cover"
            previewSrc="/work/localization-report/report-cover.png"
            width={1488}
            height={1100}
            alt="Cover of DeepL's state of translation and localization report for 2023 and 2024"
            caption="The cover frames localization as a business question for marketing leaders."
          />
        </section>

        <section className="story-narrative">
          <div className="story-section-heading"><p>The editorial problem</p><h2>Make the evidence useful at different depths</h2></div>
          <div className="story-copy">
            <p>The survey contained strong statistics across four markets, but a sequence of charts would not explain why the findings belonged together. The report needed a clear argument about value, obstacles, technology choices and human review.</p>
            <p>Publishing the report once would also leave most of the material inside a single long-form asset. The derivative pieces needed distinct purposes while remaining faithful to the same evidence.</p>
            <aside className="constraint-note"><strong>Constraint</strong><span>The formats could change their pacing and entry point, but not the survey scope, definitions or supporting figures.</span></aside>
          </div>
        </section>

        <section className="editorial-excerpts">
          <div className="story-section-heading"><p>The writing</p><h2>Let readers assess the argument, not thumbnails of it</h2></div>
          <div className="excerpt-grid">
            <div><span>Report finding</span><blockquote><p>96% of respondents report positive ROI from localization efforts, suggesting the significant value of these initiatives.</p></blockquote></div>
            <div><span>Article finding</span><blockquote><p>AI-assisted writing tools are used by 77% of respondents, and machine translation by an astonishing 98%.</p></blockquote></div>
            <div><span>Customer context</span><blockquote><p>HubSpot owns and manages over 75,000 web assets like landing pages, blog posts, and more.</p></blockquote></div>
          </div>
        </section>

        <section className="story-decisions">
          <div className="story-section-heading"><p>Key editorial decisions</p><h2>One evidence base, three different jobs</h2></div>
          <div className="decision-list">
            <div><div><h3>Lead the report with the business case</h3><p>The executive summary establishes ROI, engagement and adoption before moving into workflow problems.</p></div></div>
            <div><div><h3>Rebuild, rather than abridge</h3><p>The article reorganizes the strongest findings for a time-poor marketing reader instead of copying and shortening the report.</p></div></div>
            <div><div><h3>Turn webinar chronology into stories</h3><p>The HubSpot and Phrase material is edited into challenge, operating model and practical lesson.</p></div></div>
          </div>
        </section>

        <section className="format-sequence">
          <div className="story-section-heading"><p>The adaptation</p><h2>How the same research changes shape</h2></div>
          <ol>
            <li><span>Report</span><strong>Full research narrative</strong><p>Findings, tension, examples and recommendations.</p></li>
            <li><span>Article</span><strong>Fast entry point</strong><p>A shorter argument organized around the most useful findings.</p></li>
            <li><span>Customer stories</span><strong>Operating examples</strong><p>HubSpot and Phrase make the workflow implications concrete.</p></li>
          </ol>
        </section>

        <section className="story-evidence">
          <div className="story-section-heading"><p>The evidence</p><h2>Report, article and customer-story adaptations</h2></div>
          <div className="story-evidence-grid">
            <ImageLightbox label="Executive summary" previewSrc="/work/localization-report/key-findings.png" width={1488} height={2105} alt="Executive summary page showing five findings from DeepL's localization survey" caption="Five findings give the reader the report's full business shape before the deeper analysis." />
            <ImageLightbox label="Recommendations" previewSrc="/work/localization-report/recommendations.png" width={1488} height={2105} alt="Report page with five recommendations for translation and localization workflows" caption="The closing recommendations translate the research into choices for marketing and localization leaders." />
            <ImageLightbox label="Article adaptation" previewSrc="/work/report-campaign/ai-content-generation.png" width={1488} height={1100} alt="DeepL article section titled The rise of AI in content generation with localization survey findings" caption="The article rebuilds two survey findings as a focused trend story for a shorter reading path." />
            <ImageLightbox label="HubSpot story" previewSrc="/work/report-campaign/hubspot-case-study.png" width={1488} height={2105} alt="Report page presenting HubSpot's localization challenge and machine-translation workflow" caption="The HubSpot story converts webinar material into a compact account of scale, workflow and localization operations." />
            <ImageLightbox label="Phrase story" previewSrc="/work/report-campaign/phrase-case-study.png" width={1488} height={2105} alt="Report page closing the HubSpot story and opening the Phrase customer story" caption="Page nine closes the HubSpot story and opens Phrase's." />
          </div>
        </section>

        <section className="published-writing">
          <div className="story-section-heading"><p>Published work</p><h2>Read the shorter routes into the research</h2></div>
          <div className="published-links">
            <a href="https://www.deepl.com/en/blog/navigating-localization-challanges-report" target="_blank" rel="noreferrer">Read the localization report summary <span aria-hidden="true">↗</span></a>
            <a href="https://www.deepl.com/en/blog/how-hubspot-streamlines-localization-with-machine-translation" target="_blank" rel="noreferrer">Read the HubSpot article <span aria-hidden="true">↗</span></a>
          </div>
          <p className="integrated-evidence-note">The report and both articles are public; Mason&apos;s contribution was the writing, editing and restructuring across the three formats. Together, they show one evidence base adapted into a report, a shorter article and customer stories.</p>
        </section>

        <nav className="next-project" aria-label="Next project"><span>Next project</span><Link href="/work/localyze-executive-ghostwriting">Executive ghostwriting<b aria-hidden="true">→</b></Link></nav>
      </article>
      <SiteFooter />
    </main>
  );
}
