"use client";

import { useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import ImageLightbox from "../../components/ImageLightbox";
import type { StoryImage } from "../portfolioTypes";

type FlowView = "account" | "details" | "review" | "rebuilt";

type CheckoutFlowViewerProps = {
  accountBefore: StoryImage;
  detailsAfter: StoryImage;
  detailsBefore: StoryImage;
  reviewBefore: StoryImage;
};

function FlowScreen({ image }: { image: StoryImage }) {
  return (
    <div className="checkout-flow-viewer__screen">
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
  accountBefore,
  detailsAfter,
  detailsBefore,
  reviewBefore,
}: CheckoutFlowViewerProps) {
  const tabs: Array<{ id: FlowView; image: StoryImage; label: string }> = [
    { id: "account", image: accountBefore, label: "Account" },
    { id: "details", image: detailsBefore, label: "Details" },
    { id: "review", image: reviewBefore, label: "Review" },
    { id: "rebuilt", image: detailsAfter, label: "Rebuilt" },
  ];
  const [activeView, setActiveView] = useState<FlowView>("account");
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
      <div className="checkout-flow-viewer__tabs" role="tablist" aria-label="Checkout steps before and after">
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

      {tabs.map((tab) => (
        <div
          aria-labelledby={`${instanceId}-${tab.id}-tab`}
          className="checkout-flow-viewer__panel"
          hidden={activeView !== tab.id}
          id={`${instanceId}-${tab.id}`}
          key={tab.id}
          role="tabpanel"
        >
          <FlowScreen image={tab.image} />
        </div>
      ))}

      <p className="checkout-flow-viewer__caption">
        Removing Review shortened checkout from three steps to two and moved the full subscription decision into Details.
      </p>
    </div>
  );
}
