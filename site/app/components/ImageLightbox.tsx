"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

type ImageLightboxProps = {
  alt: string;
  caption: string;
  /** "full" shows text chrome; "overlay" uses an expand icon; "image" shows only the preview; "link" is a text trigger. */
  chrome?: "full" | "image" | "link" | "overlay";
  dialogPresentation?: "default" | "minimal";
  showDialogCaption?: boolean;
  showCaption?: boolean;
  height: number;
  label: string;
  linkLabel?: string;
  previewClassName?: string;
  previewSrc: string;
  /** Fetch hint for the preview image; defaults to the legacy 760px story column. */
  sizes?: string;
  /** When true, the dialog image pane scrolls tall sources inside a capped viewport. */
  tallDialog?: boolean;
  triggerClassName?: string;
  width: number;
};

const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ImageLightbox({
  alt,
  caption,
  chrome = "full",
  dialogPresentation = "default",
  height,
  label,
  linkLabel,
  previewClassName = "",
  previewSrc,
  showDialogCaption = true,
  showCaption = true,
  sizes = "(max-width: 760px) 100vw, 760px",
  tallDialog = false,
  triggerClassName = "",
  width,
}: ImageLightboxProps) {
  const minimalDialog = dialogPresentation === "minimal";
  const showChrome = chrome === "full";
  const showExpandIndicator = chrome === "overlay";
  const linkOnly = chrome === "link";
  const [open, setOpen] = useState(false);
  const captionId = useId();
  const titleId = useId();
  const closeButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panelClassName = [
    "lightbox-panel",
    tallDialog ? "lightbox-panel--tall" : "",
    minimalDialog ? "lightbox-panel--minimal" : "",
  ].filter(Boolean).join(" ");

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const triggerElement = trigger.current;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panel.current) return;
      const focusable = Array.from(panel.current.querySelectorAll<HTMLElement>(focusableSelector));
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      triggerElement?.focus();
    };
  }, [open]);

  return (
    <figure className="evidence-figure">
      <button
        ref={trigger}
        className={linkOnly ? `evidence-link-trigger ${triggerClassName}`.trim() : `evidence-button ${triggerClassName}`.trim()}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={linkOnly ? (linkLabel ?? label) : `View ${label.toLowerCase()} at full size`}
      >
        {linkOnly ? (
          <span className="evidence-link-label">{linkLabel ?? label}</span>
        ) : (
          <>
            {showChrome && <span className="evidence-label">{label}</span>}
            <span className={`evidence-preview ${previewClassName}`.trim()}>
              <Image src={previewSrc} alt={alt} width={width} height={height} sizes={sizes} />
              {showExpandIndicator && (
                <span className="evidence-expand-indicator" aria-hidden="true">
                  <svg focusable="false" viewBox="0 0 24 24">
                    <path d="M14 4h6v6M20 4l-7 7M10 20H4v-6M4 20l7-7" />
                  </svg>
                </span>
              )}
            </span>
            {showChrome && <span className="evidence-action">View larger</span>}
          </>
        )}
      </button>
      {showCaption && !linkOnly && <figcaption>{caption}</figcaption>}

      {open && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={showDialogCaption ? captionId : undefined}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div ref={panel} className={panelClassName}>
            <div className="lightbox-header">
              <h2 className={minimalDialog ? "visually-hidden" : undefined} id={titleId}>{label}</h2>
              <button
                aria-label={minimalDialog ? "Close image viewer" : undefined}
                ref={closeButton}
                type="button"
                onClick={() => setOpen(false)}
              >
                {minimalDialog ? (
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                ) : "Close"}
              </button>
            </div>
            <div className={`lightbox-image${tallDialog ? " lightbox-image--tall" : ""}`}>
              <Image
                src={previewSrc}
                alt={alt}
                width={width}
                height={height}
                sizes="94vw"
              />
            </div>
            {showDialogCaption ? <p id={captionId}>{caption}</p> : null}
          </div>
        </div>
      )}
    </figure>
  );
}
