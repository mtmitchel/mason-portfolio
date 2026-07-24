"use client";

import { useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import type { StoryEvidenceView } from "../work/portfolioTypes";
import ImageLightbox from "./ImageLightbox";

type EvidenceSwitcherProps = {
  ariaLabel: string;
  initialId?: string;
  views: StoryEvidenceView[];
};

export default function EvidenceSwitcher({
  ariaLabel,
  initialId,
  views,
}: EvidenceSwitcherProps) {
  const initialIndex = Math.max(0, views.findIndex((view) => view.id === initialId));
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const instanceId = useId().replaceAll(":", "");

  const selectTab = (index: number) => {
    setActiveIndex(index);
    tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | undefined;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % views.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + views.length) % views.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = views.length - 1;
    if (nextIndex === undefined) return;

    event.preventDefault();
    selectTab(nextIndex);
  };

  return (
    <div className="evidence-switcher">
      <div className="evidence-switcher-tabs" role="tablist" aria-label={ariaLabel}>
        {views.map((view, index) => {
          const selected = index === activeIndex;

          return (
            <button
              ref={(node) => { tabRefs.current[index] = node; }}
              className="evidence-switcher-tab"
              id={`${instanceId}-tab-${view.id}`}
              key={view.id}
              type="button"
              role="tab"
              aria-controls={`${instanceId}-panel-${view.id}`}
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {view.label}
            </button>
          );
        })}
      </div>

      {views.map((view, index) => {
        const selected = index === activeIndex;

        return (
          <div
            className="evidence-switcher-panel"
            id={`${instanceId}-panel-${view.id}`}
            key={view.id}
            role="tabpanel"
            aria-labelledby={`${instanceId}-tab-${view.id}`}
            hidden={!selected}
          >
            {selected && (
              <>
                <p className="evidence-switcher-summary">{view.summary}</p>
                <ImageLightbox
                  label={view.image.label}
                  previewSrc={view.image.src}
                  width={view.image.width}
                  height={view.image.height}
                  alt={view.image.alt}
                  caption={view.image.caption}
                  sizes="(max-width: 820px) calc(100vw - 32px), 1120px"
                />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
