import Link from "next/link";
import { ChapterBackLink } from "../../components/ChapterCaseElements";
import NamingDecision from "../../components/NamingDecision";
import { SiteHeader } from "../../components/PortfolioChrome";

export default function ProductNamingCase() {
  return (
    <main className="site-shell case-shell chapter-shell">
      <SiteHeader />
      <article className="chapter-page chapter-case-page product-naming-page">
        <ChapterBackLink />

        <header className="chapter-hero">
          <h1>A working naming framework for a growing product portfolio</h1>
          <div className="chapter-synopsis">
            <p>DeepL had grown from Translator into a portfolio that also included Write, API, and Voice. Product names, paid offers, bundles, and shorthand could no longer share one loose convention.</p>
            <p>I was assigned to draft, and contributed draft content to, the Content Design System&rsquo;s product-and-plan-names section. The work drew on a UX Writing terminology source reviewed with Product Marketing and a naming-order decision for Write.</p>
          </div>
        </header>

        <section className="chapter-section" id="what-needed-naming">
          <h2 className="chapter-heading">Define what each name is doing</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>The draft separated five jobs that a name could perform: product, paid offer, collective label, free version, and bundle. That distinction made it possible to discuss a label without quietly treating it as a plan tier.</p>
              <p>The section heading <strong>Product and plan names (Mason)</strong> made my responsibility clear: this was my section to draft within the shared system work.</p>
            </div>
          </div>
        </section>

        <section className="chapter-section" id="the-name-was-taken">
          <h2 className="chapter-heading">The name was already spoken for</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>DeepL Pro already worked as a collective label for paid Translator offers. It was not a safe name to reuse as though it described one new Write tier.</p>
              <p>The API naming pattern put the product first: API Free and API Pro. The Translator convention put Pro before the product shorthand. The working session compared those two orders directly.</p>
            </div>
            <div className="chapter-prose">
              <p>Write made the ambiguity visible. <strong>DeepL Write Pro</strong> reads as a paid offer within the Write product. <strong>DeepL Pro Write</strong> reads more like a writing variant of DeepL Pro.</p>
              <p>The decision therefore affected product comprehension, not just surface consistency: the order tells a reader which product the offer belongs to.</p>
            </div>
          </div>
        </section>

        <section className="chapter-section" id="which-convention-wins">
          <h2 className="chapter-heading">Two ways to go, and one of them buries the product</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>The choice looked cosmetic written down. It stops looking cosmetic the moment you read the second option as a customer would.</p>
            </div>
            <div className="chapter-media">
              <NamingDecision />
            </div>
            <div className="chapter-prose">
              <p>The selected API convention gave the working section a repeatable test: establish the product first, then let the offer qualify it.</p>
            </div>
          </div>
        </section>

        <section className="chapter-section" id="corrections">
          <h2 className="chapter-heading">Test the rules against real exceptions</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>The draft also worked through cases that a simple product-plus-tier formula could not explain on its own.</p>
            </div>
            <div className="chapter-prose">
              <p><strong>Free access and paid offers needed different labels.</strong> Price alone did not make every state a plan.</p>
              <p><strong>Bundles needed to stay distinct from plan families.</strong> Combining products did not create another tier.</p>
              <p><strong>DeepL Pro remained a collective Translator label.</strong> A specific offer name was needed when the distinction mattered.</p>
              <p><strong>Shorthand depended on context.</strong> A shorter form could follow the full name after the product had been established.</p>
            </div>
          </div>
        </section>

        <section className="chapter-closing">
          <h2 className="chapter-heading chapter-heading--closing">A defensible draft contribution</h2>
          <div className="chapter-prose">
            <p>My contribution was the draft section: rules and examples connected to the Write naming decision and the existing terminology source.</p>
            <p>The content-design judgment was in separating the naming jobs, comparing the competing conventions, and testing a rule against the exceptions it needed to handle.</p>
          </div>
        </section>

        <nav className="next-project" aria-label="Next project">
          <span>Next project</span>
          <Link href="/work/voice-product">
            Giving DeepL Voice two clear jobs
            <b aria-hidden="true">&rarr;</b>
          </Link>
        </nav>
      </article>
    </main>
  );
}
