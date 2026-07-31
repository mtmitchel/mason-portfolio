import type { Metadata } from "next";
import { ConceptShell } from "../_shared/checkoutConceptData";

export const metadata: Metadata = {
  title: "Counter figure — checkout concept — Mason Mitchel",
  description: "A typographic counter figure for the DeepL checkout experiment.",
  robots: { index: false, follow: false },
};

export default function CounterFigurePage() {
  return (
    <ConceptShell active="counter-figure">
      <header className="concept-intro">
        <h1>Counter figure</h1>
        <p>The shorter DeepL checkout told the same commitment in fewer steps.</p>
      </header>
      <figure className="counter-figure">
        <div className="counter-line"><span>Steps</span><strong>3 <i aria-hidden="true">→</i> 2</strong></div>
        <div className="counter-line"><span>Questions answered before the final action</span><strong>6 <i aria-hidden="true">→</i> 6</strong></div>
        <div className="counter-result">
          <p><strong>+3.02%</strong><span>paid subscriptions</span></p>
          <p><strong>≈ +€2.4M</strong><span>incremental annual recurring revenue</span></p>
        </div>
        <figcaption>Experiment-level result across monthly and annual subscriptions, attributed to the experiment and the team.</figcaption>
      </figure>
    </ConceptShell>
  );
}
