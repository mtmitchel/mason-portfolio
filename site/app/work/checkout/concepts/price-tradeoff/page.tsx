import type { Metadata } from "next";
import { ConceptShell } from "../_shared/checkoutConceptData";

export const metadata: Metadata = {
  title: "Price tradeoff — checkout concept — Mason Mitchel",
  description: "Three typeset price-hierarchy specimens for the DeepL checkout case.",
  robots: { index: false, follow: false },
};

export default function PriceTradeoffPage() {
  return (
    <ConceptShell active="price-tradeoff">
      <header className="concept-intro">
        <h1>Price tradeoff</h1>
        <p>Three typeset specimens make the trial-and-price hierarchy decision visible.</p>
      </header>
      <figure className="price-figure">
        <div className="price-specimens">
          <article className="price-specimen price-specimen--flat">
            <h2>Review’s five facts</h2>
            <div className="price-facts">
              <p>30-day free trial</p>
              <p>Cancel before 30/04/2023 and you won’t pay anything.</p>
              <p>Annual subscription for 1 user: €299.88 per year, including VAT.</p>
              <p>Your first payment is due on 01/05/2023.</p>
              <p>Payment by credit card · Visa •••• 4242</p>
            </div>
            <p className="price-consequence">Everything was present, but every fact carried the same weight.</p>
          </article>
          <article className="price-specimen price-specimen--hypothetical">
            <h2>Hypothetical: today only</h2>
            <div className="price-facts">
              <p className="price-primary">€0 due today</p>
              <p className="price-fine">30-day trial</p>
              <p className="price-fine">€299.88 per year after the trial, including VAT</p>
            </div>
            <p className="price-consequence">Making only €0 prominent would hide the later commitment.</p>
          </article>
          <article className="price-specimen price-specimen--chosen">
            <h2>Chosen: now, then later</h2>
            <div className="price-facts">
              <p className="price-primary">€0 due today</p>
              <p className="price-secondary">€299.88 per year after the trial</p>
              <p className="price-fine">Including VAT · No payment until end of trial</p>
            </div>
            <p className="price-consequence">The immediate answer leads while the future charge stays adjacent.</p>
          </article>
        </div>
        <figcaption>The middle specimen is a hypothetical reasoning alternative, not a tested or rejected screenshot.</figcaption>
      </figure>
    </ConceptShell>
  );
}
