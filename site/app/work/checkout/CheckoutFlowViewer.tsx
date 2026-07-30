"use client";

import { useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import ImageLightbox from "../../components/ImageLightbox";
import type { StoryImage } from "../portfolioTypes";

type FlowView = "original" | "rebuilt";

type CheckoutFlowViewerProps = {
  detailsAfter: StoryImage;
  detailsBefore: StoryImage;
  reviewBefore: StoryImage;
};

function FlowScreen({
  heading,
  image,
}: {
  heading: string;
  image: StoryImage;
}) {
  return (
    <div className="checkout-flow-viewer__screen">
      <h3>{heading}</h3>
      <ImageLightbox
        alt={image.alt}
        caption={image.caption}
        chrome="overlay"
        dialogPresentation="minimal"
        dialogSizes="1440px"
        height={image.height}
        label={image.label}
        previewSrc={image.src}
        showCaption={false}
        sizes="(max-width: 767px) calc(100vw - 40px), 520px"
        width={image.width}
      />
    </div>
  );
}

export default function CheckoutFlowViewer({
  detailsAfter,
  detailsBefore,
  reviewBefore,
}: CheckoutFlowViewerProps) {
  const tabs: Array<{ id: FlowView; label: string }> = [
    { id: "original", label: "Original flow" },
    { id: "rebuilt", label: "Rebuilt flow" },
  ];
  const [activeView, setActiveView] = useState<FlowView>("original");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const instanceId = useId().replaceAll(":", "");

  const selectTab = (index: number) => {
    setActiveView(tabs[index].id);
    tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | undefined;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    if (nextIndex === undefined) return;

    event.preventDefault();
    selectTab(nextIndex);
  };

  return (
    <div className="checkout-flow-viewer">
      <div className="checkout-flow-viewer__desktop">
        <div className="checkout-flow-viewer__tabs" role="tablist" aria-label="Checkout before and after">
          {tabs.map((tab, index) => {
            const selected = activeView === tab.id;
            return (
              <button
                ref={(node) => { tabRefs.current[index] = node; }}
                aria-controls={`${instanceId}-${tab.id}`}
                aria-selected={selected}
                id={`${instanceId}-${tab.id}-tab`}
                key={tab.id}
                onClick={() => setActiveView(tab.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                role="tab"
                tabIndex={selected ? 0 : -1}
                type="button"
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          aria-labelledby={`${instanceId}-original-tab`}
          className="checkout-flow-viewer__panel checkout-flow-viewer__panel--original"
          hidden={activeView !== "original"}
          id={`${instanceId}-original`}
          role="tabpanel"
        >
          <FlowScreen heading="Old Details" image={detailsBefore} />
          <FlowScreen heading="Old Review" image={reviewBefore} />
        </div>

        <div
          aria-labelledby={`${instanceId}-rebuilt-tab`}
          className="checkout-flow-viewer__panel checkout-flow-viewer__panel--rebuilt"
          hidden={activeView !== "rebuilt"}
          id={`${instanceId}-rebuilt`}
          role="tabpanel"
        >
          <FlowScreen heading="New Details" image={detailsAfter} />
        </div>
      </div>

      <div className="checkout-flow-viewer__mobile" aria-label="Checkout before and after">
        <FlowScreen heading="Old Details" image={detailsBefore} />
        <FlowScreen heading="Old Review" image={reviewBefore} />
        <FlowScreen heading="New Details" image={detailsAfter} />
      </div>

      <p className="checkout-flow-viewer__caption">
        Removing Review shortened checkout from three steps to two and moved the full subscription decision into Details.
      </p>
      <p className="checkout-flow-viewer__note">
        These annual screens come from separate working iterations. They show the product change, not one continuous customer session.
      </p>
    </div>
  );
}
