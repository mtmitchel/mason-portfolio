"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";
import { FullSourceLink, checkoutImages } from "../_shared/checkoutConceptData";

type Region = readonly [number, number, number, number];

const focuses = [
  {
    id: "all-four",
    label: "All four",
    review: [0, 0, 100, 62] as Region,
    details: [0, 0, 100, 34] as Region,
    was: "Review gathered price, features, consent and the final action at one checkpoint.",
    became: "Details had to carry those four jobs inside an already dense form.",
  },
  {
    id: "price",
    label: "Price",
    review: [1.5, 17.5, 58, 25] as Region,
    details: [61.5, 25.2, 37.5, 11.4] as Region,
    was: "Review gave the trial, annual price, VAT and payment timing one text weight.",
    became: "Details leads with €0 due today and keeps €299.88 per year after the trial directly beneath it.",
  },
  {
    id: "features",
    label: "Features",
    review: [1.5, 42, 58, 24] as Region,
    details: [61.5, 38, 37.5, 13.4] as Region,
    was: "The selected plan’s feature list appeared on Review.",
    became: "The list moved beside the plan and price in the Details summary rail.",
  },
  {
    id: "consent",
    label: "Consent",
    review: [1.5, 65, 58, 18] as Region,
    details: [1.5, 83.2, 58, 8.5] as Region,
    was: "A required checkbox collected consent before the final action.",
    became: "A statement explains what pressing Begin subscription authorizes.",
  },
  {
    id: "final-action",
    label: "Final action",
    review: [1.5, 82, 58, 12] as Region,
    details: [1.5, 91.4, 58, 5.8] as Region,
    was: "Buy now described an immediate purchase.",
    became: "Begin subscription names the commitment that starts with a 30-day trial.",
  },
] as const;

const sources = {
  review: checkoutImages.reviewBefore,
  details: checkoutImages.detailsAfter,
} as const;

function regionStyle([x, y, width, height]: Region): CSSProperties {
  return { left: `${x}%`, top: `${y}%`, width: `${width}%`, height: `${height}%` };
}

function SourceFrame({
  region,
  source,
}: {
  region: Region;
  source: keyof typeof sources;
}) {
  const image = sources[source];
  return (
    <figure className="spotlight-source">
      <figcaption>{source === "review" ? "Review source" : "Details source"}</figcaption>
      <div className="spotlight-source__frame">
        <Image
          alt={image.alt}
          height={image.height}
          sizes="(max-width: 760px) calc(100vw - 64px), 680px"
          src={image.src}
          width={image.width}
        />
        <span aria-hidden="true" className="spotlight-box" style={regionStyle(region)} />
      </div>
    </figure>
  );
}

export default function TravelingSpotlight() {
  const [active, setActive] = useState(0);
  const focus = focuses[active];
  const reviewCenter = focus.review[0] + focus.review[2] / 2;
  const detailsCenter = focus.details[0] + focus.details[2] / 2;

  return (
    <section className="spotlight-demo" aria-label="Review to Details evidence spotlight">
      <div className="spotlight-controls" role="group" aria-label="Content job">
        {focuses.map((item, index) => (
          <button
            aria-pressed={index === active}
            key={item.id}
            onClick={() => setActive(index)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="spotlight-panel">
        <SourceFrame region={focus.review} source="review" />
        <svg aria-hidden="true" className="spotlight-connector" preserveAspectRatio="none" viewBox="0 0 100 40">
          <line x1={reviewCenter} x2={detailsCenter} y1="0" y2="40" />
        </svg>
        <SourceFrame region={focus.details} source="details" />
        <div aria-live="polite" className="spotlight-note">
          <p><strong>Was</strong><span>{focus.was}</span></p>
          <p><strong>Became</strong><span>{focus.became}</span></p>
        </div>
        <div className="spotlight-source-links">
          <FullSourceLink image={sources.review} label="View full Review source" />
          <FullSourceLink image={sources.details} label="View full Details source" />
        </div>
      </div>
    </section>
  );
}
