"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import type {
  CSSProperties,
  MouseEvent as ReactMouseEvent,
  ReactNode,
} from "react";

type ImageLightboxProps = {
  alt: string;
  caption: string;
  /** "full" shows text chrome; "footer" puts a persistent action below the image; "overlay" uses an expand icon; "image" shows only the preview; "link" is a text trigger. */
  chrome?: "footer" | "full" | "image" | "link" | "overlay";
  dialogHeight?: number;
  dialogCaption?: ReactNode;
  dialogMaxWidth?: number;
  dialogPresentation?: "default" | "minimal";
  dialogSrc?: string;
  dialogWidth?: number;
  showDialogCaption?: boolean;
  showCaption?: boolean;
  height: number;
  label: string;
  linkLabel?: string;
  /** Fit the high-resolution dialog image to the pane without enlarging it beyond its source width. */
  fitDialogToSource?: boolean;
  previewCaption?: ReactNode;
  previewClassName?: string;
  previewSrc: string;
  /** Fetch hint for the preview image; defaults to the legacy 760px story column. */
  sizes?: string;
  /** Fetch hint for the dialog image; defaults to the legacy viewport-sized dialog. */
  dialogSizes?: string;
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
  dialogHeight,
  dialogCaption,
  dialogMaxWidth,
  dialogPresentation = "default",
  dialogSrc,
  dialogWidth,
  height,
  label,
  linkLabel,
  fitDialogToSource = false,
  previewCaption,
  previewClassName = "",
  previewSrc,
  showDialogCaption = true,
  showCaption = true,
  sizes = "(max-width: 760px) 100vw, 760px",
  dialogSizes = "94vw",
  tallDialog = false,
  triggerClassName = "",
  width,
}: ImageLightboxProps) {
  const minimalDialog = dialogPresentation === "minimal";
  const showFooterChrome = chrome === "footer";
  const showChrome = chrome === "full";
  const showExpandIndicator = chrome === "overlay";
  const linkOnly = chrome === "link";
  const [open, setOpen] = useState(false);
  const captionId = useId();
  const titleId = useId();
  const closeButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const returnFocusTarget = useRef<HTMLButtonElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panelClassName = [
    "lightbox-panel",
    tallDialog ? "lightbox-panel--tall" : "",
    dialogMaxWidth ? "lightbox-panel--image-capped" : "",
    minimalDialog ? "lightbox-panel--minimal" : "",
  ].filter(Boolean).join(" ");
  const panelStyle = dialogMaxWidth
    ? { "--lightbox-image-max-width": `${dialogMaxWidth}px` } as CSSProperties
    : undefined;
  const dialogImageStyle = fitDialogToSource
    ? {
        height: "auto",
        maxWidth: `${dialogWidth ?? width}px`,
        width: "100%",
      } as CSSProperties
    : undefined;

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const triggerElement = returnFocusTarget.current ?? trigger.current;
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
      triggerElement?.focus({ preventScroll: true });
    };
  }, [open]);

  const openFrom = (event: ReactMouseEvent<HTMLButtonElement>) => {
    returnFocusTarget.current = event.currentTarget;
    setOpen(true);
  };

  const expandAction = (
    <button
      aria-label={`Expand: ${label}`}
      className="evidence-expand-action"
      type="button"
      onClick={openFrom}
    >
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
        <path d="M14 4h6v6M20 4l-7 7M10 20H4v-6M4 20l7-7" />
      </svg>
      <span>Expand</span>
    </button>
  );

  return (
    <figure className="evidence-figure">
      <button
        ref={trigger}
        className={linkOnly ? `evidence-link-trigger ${triggerClassName}`.trim() : `evidence-button ${triggerClassName}`.trim()}
        type="button"
        onClick={openFrom}
        aria-label={linkOnly ? (linkLabel ?? label) : `Expand: ${label}`}
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
      {showFooterChrome && !linkOnly ? (
        showCaption ? (
          <figcaption className="evidence-footer">
            <span>{previewCaption ?? caption}</span>
            {expandAction}
          </figcaption>
        ) : (
          <div className="evidence-footer evidence-footer--action-only">
            {expandAction}
          </div>
        )
      ) : (
        showCaption && !linkOnly && <figcaption>{previewCaption ?? caption}</figcaption>
      )}

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
          <div ref={panel} className={panelClassName} style={panelStyle}>
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
                src={dialogSrc ?? previewSrc}
                alt={alt}
                width={dialogWidth ?? width}
                height={dialogHeight ?? height}
                sizes={dialogSizes}
                style={dialogImageStyle}
              />
            </div>
            {showDialogCaption ? <p id={captionId}>{dialogCaption ?? caption}</p> : null}
          </div>
        </div>
      )}
    </figure>
  );
}
