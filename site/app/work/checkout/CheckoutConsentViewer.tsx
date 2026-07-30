"use client";

import { useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

type ConsentView = "review" | "details";

const consentTabs: Array<{ id: ConsentView; label: string }> = [
  { id: "review", label: "1. Review" },
  { id: "details", label: "2. Details" },
];

function ReviewConsent() {
  return (
    <div className="checkout-consent-card checkout-consent-card--review">
      <div className="checkout-consent-statements">
        <div className="checkout-consent-statement checkout-consent-statement--checkbox">
          <span className="checkout-consent-checkbox" aria-hidden="true" />
          <p>
            I accept the{" "}
            <span className="checkout-consent-link">Terms &amp; Conditions</span>,
            {" "}<span className="checkout-consent-link">Service Specification</span>, and
            confirm that I have read and understood my{" "}
            <span className="checkout-consent-link">Right of Withdrawal</span> as a consumer.
          </p>
        </div>
        <div className="checkout-consent-statement checkout-consent-statement--checkbox">
          <span className="checkout-consent-checkbox" aria-hidden="true" />
          <p>
            Please send me occasional emails about DeepL products and services.
            You can unsubscribe at any time.
          </p>
        </div>
      </div>
      <div className="checkout-consent-actions checkout-consent-actions--review">
        <span className="checkout-consent-back">Back</span>
        <span className="checkout-consent-button checkout-consent-button--review">
          Buy now
        </span>
      </div>
      <p className="checkout-consent-reassurance checkout-consent-reassurance--review">
        No costs if you cancel your subscription within 30 days
      </p>
    </div>
  );
}

function DetailsConsent() {
  return (
    <div className="checkout-consent-card checkout-consent-card--details">
      <p className="checkout-consent-statement">
        By pressing the &quot;Begin subscription&quot; button, you accept the DeepL Pro{" "}
        <span className="checkout-consent-link">Terms and Conditions</span> including the
        Service Specifications. Consumers have a 14-day{" "}
        <span className="checkout-consent-link">Right of Withdrawal</span>.
      </p>
      <span className="checkout-consent-button checkout-consent-button--details">
        Begin subscription
      </span>
      <ul className="checkout-consent-benefits">
        <li>30-day trial included</li>
        <li>No payment until end of trial</li>
        <li>Cancel anytime</li>
      </ul>
    </div>
  );
}

export default function CheckoutConsentViewer() {
  const [activeView, setActiveView] = useState<ConsentView>("review");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const instanceId = useId().replaceAll(":", "");

  const selectTab = (index: number) => {
    setActiveView(consentTabs[index].id);
    tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex: number | undefined;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % consentTabs.length;
    if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + consentTabs.length) % consentTabs.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = consentTabs.length - 1;
    if (nextIndex === undefined) return;

    event.preventDefault();
    selectTab(nextIndex);
  };

  return (
    <div className="checkout-consent-viewer">
      <h3 className="checkout-flow-heading">Working placeholder headline</h3>
      <div
        aria-label="Consent and final action before and after"
        className="checkout-flow-viewer__tabs"
        role="tablist"
      >
        {consentTabs.map((tab, index) => {
          const selected = activeView === tab.id;
          return (
            <button
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
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

      {consentTabs.map((tab) => (
        <div
          aria-labelledby={`${instanceId}-${tab.id}-tab`}
          className="checkout-consent-viewer__panel"
          hidden={activeView !== tab.id}
          id={`${instanceId}-${tab.id}`}
          key={tab.id}
          role="tabpanel"
        >
          {tab.id === "review" ? <ReviewConsent /> : <DetailsConsent />}
        </div>
      ))}

      <p className="checkout-consent-caption">
        Review put consent in a required checkbox above <strong>Buy now</strong>.
        Details moved it into a statement naming the action, and kept the trial,
        the payment timing and cancellation beside{" "}
        <strong>Begin subscription</strong>.
      </p>
    </div>
  );
}
