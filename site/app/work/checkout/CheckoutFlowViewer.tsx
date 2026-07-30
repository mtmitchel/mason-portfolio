"use client";

import { useId, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent, ReactNode } from "react";
import ImageLightbox from "../../components/ImageLightbox";
import type { StoryImage } from "../portfolioTypes";

type FlowView = "account" | "details" | "review";

type FlowPreview = {
  dialogMaxWidth?: number;
  displayWidth?: string;
  height: number;
  src: string;
  tallDialog?: boolean;
  width: number;
};

type CheckoutFlowViewerProps = {
  accountBefore: StoryImage;
  detailsBefore: StoryImage;
  reviewBefore: StoryImage;
};

type RebuiltCheckoutFlowViewerProps = {
  accountAfter: StoryImage;
  detailsAfter: StoryImage;
};

type FlowTab = {
  id: string;
  image: StoryImage;
  label: string;
  preview: FlowPreview;
};

type TabbedCheckoutFlowViewerProps = {
  accessibleDescription?: string;
  ariaLabel: string;
  caption: ReactNode;
  heading?: string;
  kind?: "comparison" | "flow";
  tabs: FlowTab[];
};

type CheckoutComparisonViewerProps = {
  accessibleDescription: string;
  afterDisplayWidth?: string;
  afterDialogMaxWidth?: number;
  afterImage: StoryImage;
  afterLabel: string;
  ariaLabel: string;
  beforeDisplayWidth?: string;
  beforeDialogMaxWidth?: number;
  beforeImage: StoryImage;
  beforeLabel: string;
  caption: ReactNode;
  heading?: string;
};

const originalFlowPreviews: Record<FlowView, FlowPreview> = {
  account: {
    dialogMaxWidth: 800,
    src: "/work/checkout/original-account-flow-uniform.png",
    width: 2436,
    height: 1681,
  },
  details: {
    dialogMaxWidth: 800,
    src: "/work/checkout/original-details-flow-uniform.png",
    tallDialog: true,
    width: 2438,
    height: 3461,
  },
  review: {
    dialogMaxWidth: 800,
    src: "/work/checkout/original-review-flow-spaced.png",
    width: 2048,
    height: 1811,
  },
};

const originalJourneyCaption = (
  <>
    Checkout ran in three steps. Review assembled the subscription decision —
    trial terms, annual price, payment date, consent and the final action —
    after Details had collected billing and payment.
  </>
);

const rebuiltJourneyCaption = (
  <>
    The shorter flow kept Account as the first step. Details then carried the
    plan summary, billing, payment, consent and final action.
  </>
);

function FlowScreen({
  caption,
  image,
  preview,
}: {
  caption: ReactNode;
  image: StoryImage;
  preview: FlowPreview;
}) {
  const screenStyle = preview.displayWidth
    ? { "--checkout-preview-width": preview.displayWidth } as CSSProperties
    : undefined;

  return (
    <div className="checkout-flow-viewer__screen" style={screenStyle}>
      <ImageLightbox
        alt={image.alt}
        caption={image.caption}
        chrome="overlay"
        dialogHeight={preview.height}
        dialogMaxWidth={preview.dialogMaxWidth}
        dialogPresentation="minimal"
        dialogSizes={preview.dialogMaxWidth
          ? `${preview.dialogMaxWidth}px`
          : "1440px"}
        dialogSrc={preview.src}
        dialogWidth={preview.width}
        height={preview.height}
        label={image.label}
        previewCaption={caption}
        previewSrc={preview.src}
        showDialogCaption={false}
        sizes="(max-width: 720px) calc(100vw - 40px), 720px"
        tallDialog={preview.tallDialog}
        width={preview.width}
      />
    </div>
  );
}

function TabbedCheckoutFlowViewer({
  accessibleDescription,
  ariaLabel,
  caption,
  heading,
  kind = "flow",
  tabs,
}: TabbedCheckoutFlowViewerProps) {
  const [activeView, setActiveView] = useState(tabs[0].id);
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
    <div className={`checkout-flow-viewer checkout-flow-viewer--${kind}`}>
      {heading ? <h3 className="checkout-flow-heading">{heading}</h3> : null}
      <div className="checkout-flow-viewer__tabs" role="tablist" aria-label={ariaLabel}>
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
          <FlowScreen
            caption={caption}
            image={tab.image}
            preview={tab.preview}
          />
        </div>
      ))}
      {accessibleDescription ? (
        <p className="visually-hidden">{accessibleDescription}</p>
      ) : null}
    </div>
  );
}

export function CheckoutComparisonViewer({
  accessibleDescription,
  afterDisplayWidth,
  afterDialogMaxWidth,
  afterImage,
  afterLabel,
  ariaLabel,
  beforeDisplayWidth,
  beforeDialogMaxWidth,
  beforeImage,
  beforeLabel,
  caption,
  heading,
}: CheckoutComparisonViewerProps) {
  const maxSourceWidth = Math.max(beforeImage.width, afterImage.width);
  const tabs: FlowTab[] = [
    {
      id: "before",
      image: beforeImage,
      label: `1. ${beforeLabel}`,
      preview: {
        dialogMaxWidth: beforeDialogMaxWidth,
        displayWidth: beforeDisplayWidth
          ?? `${((beforeImage.width / maxSourceWidth) * 100).toFixed(1)}%`,
        height: beforeImage.height,
        src: beforeImage.src,
        width: beforeImage.width,
      },
    },
    {
      id: "after",
      image: afterImage,
      label: `2. ${afterLabel}`,
      preview: {
        dialogMaxWidth: afterDialogMaxWidth,
        displayWidth: afterDisplayWidth
          ?? `${((afterImage.width / maxSourceWidth) * 100).toFixed(1)}%`,
        height: afterImage.height,
        src: afterImage.src,
        width: afterImage.width,
      },
    },
  ];

  return (
    <TabbedCheckoutFlowViewer
      accessibleDescription={accessibleDescription}
      ariaLabel={ariaLabel}
      caption={caption}
      heading={heading}
      kind="comparison"
      tabs={tabs}
    />
  );
}

export function RebuiltCheckoutFlowViewer({
  accountAfter,
  detailsAfter,
}: RebuiltCheckoutFlowViewerProps) {
  const tabs: FlowTab[] = [
    {
      id: "account",
      image: accountAfter,
      label: "1. Account",
      preview: {
        dialogMaxWidth: 800,
        src: "/work/checkout/rebuilt-account-flow-uniform-v2.png",
        width: 2436,
        height: 1652,
      },
    },
    {
      id: "details",
      image: detailsAfter,
      label: "2. Details",
      preview: {
        dialogMaxWidth: 800,
        src: "/work/checkout/rebuilt-details-flow-logo-cleaned.px-23599eb66f02.png",
        tallDialog: true,
        width: 2228,
        height: 3618,
      },
    },
  ];

  return (
    <TabbedCheckoutFlowViewer
      ariaLabel="Rebuilt checkout steps"
      caption={rebuiltJourneyCaption}
      heading="Rebuilt two-step checkout"
      tabs={tabs}
    />
  );
}

export default function CheckoutFlowViewer({
  accountBefore,
  detailsBefore,
  reviewBefore,
}: CheckoutFlowViewerProps) {
  const tabs: FlowTab[] = [
    {
      id: "account",
      image: accountBefore,
      label: "1. Account",
      preview: originalFlowPreviews.account,
    },
    {
      id: "details",
      image: detailsBefore,
      label: "2. Details",
      preview: originalFlowPreviews.details,
    },
    {
      id: "review",
      image: reviewBefore,
      label: "3. Review",
      preview: originalFlowPreviews.review,
    },
  ];

  return (
    <TabbedCheckoutFlowViewer
      ariaLabel="Original checkout steps"
      caption={originalJourneyCaption}
      heading="Original three-step checkout"
      tabs={tabs}
    />
  );
}
