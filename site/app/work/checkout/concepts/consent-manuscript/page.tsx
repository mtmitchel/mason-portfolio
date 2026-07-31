import type { Metadata } from "next";
import { ConceptShell } from "../_shared/checkoutConceptData";

export const metadata: Metadata = {
  title: "Consent manuscript — checkout concept — Mason Mitchel",
  description: "A marked-up consent manuscript for the DeepL checkout case.",
  robots: { index: false, follow: false },
};

function ManuscriptRow({ children, note }: { children: React.ReactNode; note: string }) {
  return (
    <div className="consent-row">
      <div>{children}</div>
      <aside>{note}</aside>
    </div>
  );
}

export default function ConsentManuscriptPage() {
  return (
    <ConceptShell active="consent-manuscript">
      <header className="concept-intro">
        <h1>Consent manuscript</h1>
        <p>The old and new constructions show how consent and the final checkout action changed together.</p>
      </header>
      <figure className="consent-manuscript">
        <section aria-labelledby="consent-review">
          <h2 id="consent-review">Review construction</h2>
          <ManuscriptRow note="Required consent sat in a checkbox before the final action.">
            <p><span aria-hidden="true">☐</span> I accept the <u>Terms &amp; Conditions</u>, <u>Service Specification</u>, and confirm that I have read and understood my <u>Right of Withdrawal</u> as a consumer.</p>
          </ManuscriptRow>
          <ManuscriptRow note="The optional product email remained separate from the subscription decision.">
            <p><span aria-hidden="true">☐</span> Please send me occasional emails about DeepL products and services. You can unsubscribe at any time.</p>
          </ManuscriptRow>
          <ManuscriptRow note="The label described a purchase even though payment began after the trial.">
            <p className="consent-action">Buy now</p>
          </ManuscriptRow>
          <ManuscriptRow note="Reassurance sat beneath the action.">
            <p>No costs if you cancel your subscription within 30 days</p>
          </ManuscriptRow>
        </section>
        <section aria-labelledby="consent-details">
          <h2 id="consent-details">Details construction</h2>
          <ManuscriptRow note="The sentence makes pressing the action the subject of consent.">
            <p>By pressing the &quot;Begin subscription&quot; button, you accept the DeepL Pro <u>Terms and Conditions</u> including the Service Specifications. Consumers have a 14-day <u>Right of Withdrawal</u>.</p>
          </ManuscriptRow>
          <ManuscriptRow note="The label names the commitment customers are starting.">
            <p className="consent-action">Begin subscription</p>
          </ManuscriptRow>
          <ManuscriptRow note="Trial, payment timing and cancellation stay immediately beside the decision.">
            <p>30-day trial included · No payment until end of trial · Cancel anytime</p>
          </ManuscriptRow>
        </section>
        <figcaption><strong>Buy now</strong><span aria-hidden="true">→</span><strong>Begin subscription</strong></figcaption>
      </figure>
    </ConceptShell>
  );
}
