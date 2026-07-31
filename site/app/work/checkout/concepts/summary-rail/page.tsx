import type { Metadata } from "next";
import Image from "next/image";
import { ConceptShell, FullSourceLink, checkoutImages } from "../_shared/checkoutConceptData";

export const metadata: Metadata = {
  title: "Summary rail — checkout concept — Mason Mitchel",
  description: "A focused source crop of the rebuilt DeepL checkout summary rail.",
  robots: { index: false, follow: false },
};

const details = checkoutImages.detailsAfter;

export default function SummaryRailPage() {
  return (
    <ConceptShell active="summary-rail">
      <header className="concept-intro">
        <h1>Summary rail</h1>
        <p>The rebuilt Details rail kept the selected plan’s value beside its price while the form was filled in.</p>
      </header>
      <figure className="summary-figure">
        <div className="summary-crop">
          <Image
            alt="Focused crop of the representative Details summary rail showing the selected plan, due-today price, annual price after the trial, and plan features together."
            className="summary-crop__source"
            height={details.height}
            sizes="(max-width: 760px) calc(100vw - 32px), 720px"
            src={details.src}
            width={details.width}
          />
        </div>
        <figcaption>Plan, price and features stay adjacent in one truthful crop of the full Details source.</figcaption>
      </figure>
      <dl className="summary-notes">
        <div><dt>In Review</dt><dd>The feature list sat on the checkpoint customers were about to leave.</dd></div>
        <div><dt>In Details</dt><dd>The selected plan’s features moved beside the subscription summary and price.</dd></div>
        <div><dt>Unchanged</dt><dd>The exact feature list still depended on the selected plan.</dd></div>
      </dl>
      <FullSourceLink image={details} label="View the full Details source" />
      <p className="concept-disclaimer">This is a representative working state, not the exact tested, winning, approved, shipped or production screen.</p>
    </ConceptShell>
  );
}
