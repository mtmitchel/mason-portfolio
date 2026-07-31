import type { Metadata } from "next";
import { ConceptShell, Evidence, checkoutImages } from "../_shared/checkoutConceptData";

export const metadata: Metadata = {
  title: "Same-scale silhouettes — checkout concept — Mason Mitchel",
  description: "Same-scale full-screen silhouettes for the DeepL checkout case.",
  robots: { index: false, follow: false },
};

export default function SameScaleSilhouettesPage() {
  return (
    <ConceptShell active="same-scale-silhouettes">
      <header className="concept-intro">
        <h1>Same-scale silhouettes</h1>
        <p>The uncropped sources show that Review was short while Details was already long.</p>
      </header>
      <div className="silhouette-figure" role="group" aria-label="Review and Details at one shared source-pixel scale">
        <Evidence
          className="silhouette-source silhouette-source--review"
          image={checkoutImages.reviewBefore}
          sizes="(max-width: 760px) calc((100vw - 32px) * .9192), 329px"
        />
        <Evidence
          className="silhouette-source silhouette-source--details"
          image={checkoutImages.detailsAfter}
          sizes="(max-width: 760px) calc(100vw - 32px), 358px"
        />
      </div>
      <p className="silhouette-caption">Both full screens use the same source-pixel-to-CSS-pixel scale. Their widths remain proportional to 2048:2228, including when they stack.</p>
      <p className="concept-disclaimer">These are reconstructed representative working states, not exact tested, winning, approved, shipped or production screens.</p>
    </ConceptShell>
  );
}
