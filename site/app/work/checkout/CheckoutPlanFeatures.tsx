"use client";

import { useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import ImageLightbox from "../../components/ImageLightbox";
import type { StoryImage } from "../portfolioTypes";

type FeatureView = "review" | "details";

type FeatureState = {
  id: FeatureView;
  image: StoryImage;
  label: string;
  locationDescription: string;
  stepCount: number;
};

const reviewFeatures: StoryImage = {
  label: "Plan features in Review",
  src: "/work/checkout/checkout-review-plan-features.px-f09888002e2c.png",
  width: 820,
  height: 460,
  alt: "Review feature module with a plain heading and a grey vertical rule beside the selected plan’s feature list.",
  caption: "",
};

const detailsFeatures: StoryImage = {
  label: "Plan features in Details",
  src: "/work/checkout/checkout-details-plan-features.px-d583f6ecfa18.png",
  width: 840,
  height: 540,
  alt: "Details feature card with a dark blue top rule and green checks beside the selected plan’s feature list.",
  caption: "",
};

const featureStates: FeatureState[] = [
  {
    id: "review",
    image: reviewFeatures,
    label: "1. Review",
    locationDescription:
      "In the three-step checkout, the feature module sat inside Review’s main content column.",
    stepCount: 3,
  },
  {
    id: "details",
    image: detailsFeatures,
    label: "2. Details",
    locationDescription:
      "In the two-step checkout, the feature module moved into Details’ summary rail.",
    stepCount: 2,
  },
];

export default function CheckoutPlanFeatures() {
  const [activeView, setActiveView] = useState<FeatureView>("review");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const instanceId = useId().replaceAll(":", "");
  const activeState =
    featureStates.find((state) => state.id === activeView) ?? featureStates[0];

  const selectTab = (index: number) => {
    setActiveView(featureStates[index].id);
    tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex: number | undefined;
    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % featureStates.length;
    }
    if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + featureStates.length) % featureStates.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = featureStates.length - 1;
    if (nextIndex === undefined) return;

    event.preventDefault();
    selectTab(nextIndex);
  };

  return (
    <div
      className={`checkout-feature-viewer checkout-feature-viewer--${activeView}`}
    >
      <div
        aria-label="Plan feature treatment in Review and Details"
        className="checkout-flow-viewer__tabs"
        role="tablist"
      >
        {featureStates.map((state, index) => {
          const selected = activeView === state.id;
          return (
            <button
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              aria-controls={`${instanceId}-feature-panel`}
              aria-selected={selected}
              id={`${instanceId}-${state.id}-tab`}
              key={state.id}
              onClick={() => setActiveView(state.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              role="tab"
              tabIndex={selected ? 0 : -1}
              type="button"
            >
              {state.label}
            </button>
          );
        })}
      </div>

      <div
        aria-labelledby={`${instanceId}-${activeView}-tab`}
        className="checkout-feature-viewer__panel"
        id={`${instanceId}-feature-panel`}
        role="tabpanel"
      >
        <div className="checkout-feature-story">
          <div className="checkout-feature-story__location">
            <p className="checkout-feature-story__label">Where it lived</p>
            <div
              aria-label={activeState.locationDescription}
              className="checkout-feature-locator"
              role="img"
            >
              <div aria-hidden="true" className="checkout-feature-locator__map">
                <div className="checkout-feature-locator__stepper">
                  {Array.from({ length: activeState.stepCount }).map(
                    (_, index) => (
                      <span
                        className={
                          index === activeState.stepCount - 1
                            ? "is-active"
                            : undefined
                        }
                        key={index}
                      />
                    ),
                  )}
                </div>
                <div className="checkout-feature-locator__page">
                  <span className="checkout-feature-locator__main" />
                  <span className="checkout-feature-locator__rail" />
                  <span className="checkout-feature-locator__highlight">
                    <i />
                    <i />
                    <i />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="checkout-feature-story__evidence">
            <p className="checkout-feature-story__label">What customers saw</p>
            <ImageLightbox
              alt={activeState.image.alt}
              caption=""
              chrome="overlay"
              dialogHeight={activeState.image.height}
              dialogMaxWidth={720}
              dialogPresentation="minimal"
              dialogSizes="720px"
              dialogSrc={activeState.image.src}
              dialogWidth={activeState.image.width}
              height={activeState.image.height}
              key={activeState.id}
              label={activeState.image.label}
              previewSrc={activeState.image.src}
              showCaption={false}
              showDialogCaption={false}
              sizes="(max-width: 660px) calc(100vw - 40px), 410px"
              width={activeState.image.width}
            />
          </div>
        </div>
      </div>

      <p className="checkout-feature-caption">
        Review kept the selected plan’s features in the final step. Details
        moved them into the summary rail beside the plan and price.
      </p>
      <p className="visually-hidden">
        The feature list changed with the selected plan.
      </p>
    </div>
  );
}
