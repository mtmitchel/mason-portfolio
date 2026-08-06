"use client";

import { useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import ImageLightbox from "../../components/ImageLightbox";
import type { StoryImage } from "../portfolioTypes";

export type CheckoutFlowStep = {
  captionEmphasis?: string[];
  id: string;
  image: StoryImage;
  label: string;
};

type CheckoutFlowViewerProps = {
  ariaLabel: string;
  heading: string;
  initialStep: string;
  showArrows?: boolean;
  steps: CheckoutFlowStep[];
};

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const formatCaption = (caption: string, emphasis: string[] = []) => {
  if (emphasis.length === 0) return caption;

  const matcher = new RegExp(`(${emphasis.map(escapeRegExp).join("|")})`, "g");
  return caption.split(matcher).map((part, index) => (
    emphasis.includes(part) ? <strong key={`${part}-${index}`}>{part}</strong> : part
  ));
};

export default function CheckoutFlowViewer({
  ariaLabel,
  heading,
  initialStep,
  showArrows = true,
  steps,
}: CheckoutFlowViewerProps) {
  const [activeStep, setActiveStep] = useState(initialStep);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const instanceId = useId().replaceAll(":", "");

  const selectStep = (index: number, moveFocus = false) => {
    setActiveStep(steps[index].id);
    if (moveFocus) tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex: number | undefined;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % steps.length;
    if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + steps.length) % steps.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = steps.length - 1;
    if (nextIndex === undefined) return;

    event.preventDefault();
    selectStep(nextIndex, true);
  };

  return (
    <section className="checkout-flow" aria-labelledby={`${instanceId}-heading`}>
      <h3 className="visually-hidden" id={`${instanceId}-heading`}>{heading}</h3>

      <div className="checkout-flow__tabs" role="tablist" aria-label={ariaLabel}>
        {steps.map((step, index) => {
          const selected = activeStep === step.id;
          return (
            <div className="checkout-flow__tab-item" key={step.id}>
              {showArrows && index > 0 ? (
                <span className="checkout-flow__arrow" aria-hidden="true">→</span>
              ) : null}
              <button
                ref={(node) => { tabRefs.current[index] = node; }}
                aria-controls={`${instanceId}-${step.id}-panel`}
                aria-selected={selected}
                id={`${instanceId}-${step.id}-tab`}
                onClick={() => selectStep(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                role="tab"
                tabIndex={selected ? 0 : -1}
                type="button"
              >
                {step.label}
              </button>
            </div>
          );
        })}
      </div>

      {steps.map((step) => (
          <div
            aria-labelledby={`${instanceId}-${step.id}-tab`}
            className="checkout-flow__panel"
            hidden={activeStep !== step.id}
            id={`${instanceId}-${step.id}-panel`}
            key={step.id}
            role="tabpanel"
            tabIndex={0}
          >
            <ImageLightbox
              alt={step.image.alt}
              caption={step.image.caption}
              chrome="overlay"
              dialogCaption={formatCaption(step.image.caption, step.captionEmphasis)}
              dialogPresentation="minimal"
              dialogSizes={`${step.image.width}px`}
              fitDialogToSource
              height={step.image.height}
              label={step.image.label}
              previewCaption={formatCaption(step.image.caption, step.captionEmphasis)}
              previewClassName="checkout-flow__preview"
              previewSrc={step.image.src}
              sizes="(max-width: 760px) calc(100vw - 40px), 720px"
              triggerClassName="checkout-flow__image-trigger"
              width={step.image.width}
            />
          </div>
      ))}
    </section>
  );
}
