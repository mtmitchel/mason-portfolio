import type { Metadata } from "next";
import Link from "next/link";
import { ConceptShell } from "./_shared/checkoutConceptData";

export const metadata: Metadata = {
  title: "Checkout visual concepts — Mason Mitchel",
  description: "Local visual concept studies for the DeepL checkout case.",
  robots: { index: false, follow: false },
};

const concepts = [
  ["four-jobs-map", "Four jobs map", "A step diagram and four-row decision map."],
  ["same-scale-silhouettes", "Same-scale silhouettes", "Two complete screens shown at one source-pixel scale."],
  ["six-question-map", "Six-question map", "A question-to-answer-location plan for the shorter flow."],
  ["price-tradeoff", "Price tradeoff", "Three typeset ways to order the trial and price facts."],
  ["summary-rail", "Summary rail", "One focused source crop showing value beside price."],
  ["consent-manuscript", "Consent manuscript", "Old and new consent constructions with writing notes."],
  ["counter-figure", "Counter figure", "The checkout argument expressed as four restrained counts."],
  ["traveling-spotlight", "Traveling spotlight", "A click-driven relationship between Review and Details."],
  ["scroll-camera", "Pinned scroll camera", "Nine scroll beats that move across two full sources."],
] as const;

export default function CheckoutConceptIndex() {
  return (
    <ConceptShell active="index">
      <header className="concept-intro">
        <h1>Checkout visual concepts</h1>
        <p>Nine focused ways to show the content decisions behind DeepL’s shorter checkout.</p>
      </header>
      <ul className="concept-index">
        {concepts.map(([slug, title, description]) => (
          <li key={slug}>
            <Link href={`/work/checkout/concepts/${slug}`}>
              <strong>{title}</strong>
              <span>{description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </ConceptShell>
  );
}
