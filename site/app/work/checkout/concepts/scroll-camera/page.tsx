import type { Metadata } from "next";
import { ConceptShell } from "../_shared/checkoutConceptData";
import ScrollCamera from "./Camera";

export const metadata: Metadata = {
  title: "Pinned scroll camera — checkout concept — Mason Mitchel",
  description: "A scroll-led evidence concept for the DeepL checkout case study.",
  robots: { index: false, follow: false },
};

export default function ScrollCameraPage() {
  return (
    <ConceptShell active="scroll-camera">
      <header className="concept-intro">
        <h1>Pinned scroll camera</h1>
        <p>Nine scroll beats move across the Review and Details sources as the checkout decision is rebuilt.</p>
      </header>
      <ScrollCamera />
    </ConceptShell>
  );
}
