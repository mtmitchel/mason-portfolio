import Link from "next/link";
import DeepLProjectGrid from "./components/DeepLProjectGrid";
import { SiteFooter, SiteHeader } from "./components/PortfolioChrome";

export default function Home() {
  return (
    <main className="site-shell">
      <SiteHeader summary="UX writer and content designer across product, growth and enterprise." />

      <section className="home-section" id="work">
        <div className="portfolio-section-heading">
          <h1>Selected work</h1>
          <Link className="section-link" href="/work/candidate-review">
            View all 10 DeepL projects
          </Link>
        </div>
        <DeepLProjectGrid />
      </section>

      <section className="home-section about" id="about">
        <h2>About</h2>
        <div>
          <p>I use language, product context and experimentation to clarify what is happening, what people can do next and what a decision means.</p>
          <p>At DeepL, I worked across Translator and Write, subscriptions, enterprise administration, integrations, desktop and mobile experiences.</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
