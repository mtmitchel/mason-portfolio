import type { Metadata } from "next";
import { ConceptShell } from "../_shared/checkoutConceptData";

export const metadata: Metadata = {
  title: "Six-question map — checkout concept — Mason Mitchel",
  description: "A question-to-answer-location map for the DeepL checkout case.",
  robots: { index: false, follow: false },
};

const questions = [
  ["Which subscription was the customer starting?", "Summary rail"],
  ["What was due today?", "Highlighted price line"],
  ["What would they pay after the trial?", "Highlighted price line"],
  ["When would payment begin?", "Trial explainer"],
  ["Could they cancel?", "Beside the action"],
  ["What did the final action authorize?", "Beside the action"],
] as const;

export default function SixQuestionMapPage() {
  return (
    <ConceptShell active="six-question-map">
      <header className="concept-intro">
        <h1>Six-question map</h1>
        <p>The rebuilt Details step gave every checkout question a deliberate answer location.</p>
      </header>
      <dl className="question-map">
        {questions.map(([question, location]) => (
          <div key={question}>
            <dt>{question}</dt>
            <dd><span aria-hidden="true">→</span>{location}</dd>
          </div>
        ))}
      </dl>
    </ConceptShell>
  );
}
