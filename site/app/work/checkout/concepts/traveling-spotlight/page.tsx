import type { Metadata } from "next";
import { ConceptShell } from "../_shared/checkoutConceptData";
import TravelingSpotlight from "./TravelingSpotlight";

export const metadata: Metadata = {
  title: "Traveling spotlight — checkout concept — Mason Mitchel",
  description: "A click-driven evidence spotlight for the DeepL checkout case.",
  robots: { index: false, follow: false },
};

export default function TravelingSpotlightPage() {
  return (
    <ConceptShell active="traveling-spotlight">
      <header className="concept-intro">
        <h1>Traveling spotlight</h1>
        <p>Five controls trace each checkout content job from Review into the rebuilt Details step.</p>
      </header>
      <TravelingSpotlight />
      <p className="concept-disclaimer">Both screens are reconstructed representative working states, not exact tested, winning, approved, shipped or production screens.</p>
    </ConceptShell>
  );
}
