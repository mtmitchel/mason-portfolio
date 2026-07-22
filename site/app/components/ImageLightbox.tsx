"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

type ImageLightboxProps = {
  alt: string;
  caption: string;
  fullSrc?: string;
  height: number;
  label: string;
  previewClassName?: string;
  previewSrc: string;
  width: number;
};

const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ImageLightbox({
  alt,
  caption,
  fullSrc,
  height,
  label,
  previewClassName = "",
  previewSrc,
  width,
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const captionId = useId();
  const titleId = useId();
  const closeButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

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
        className="evidence-button"
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View ${label.toLowerCase()} at full size`}
      >
        <span className="evidence-label">{label}</span>
        <span className={`evidence-preview ${previewClassName}`.trim()}>
          <Image src={previewSrc} alt={alt} width={width} height={height} sizes="(max-width: 760px) 100vw, 760px" />
        </span>
        <span className="evidence-action">View larger</span>
      </button>
      <figcaption>{caption}</figcaption>

      {open && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={captionId}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div ref={panel} className="lightbox-panel">
            <div className="lightbox-header">
              <h2 id={titleId}>{label}</h2>
              <button ref={closeButton} type="button" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>
            <div className="lightbox-image">
              <Image
                src={fullSrc ?? previewSrc}
                alt={alt}
                width={width}
                height={height}
                sizes="94vw"
              />
            </div>
            <p id={captionId}>{caption}</p>
          </div>
        </div>
      )}
    </figure>
  );
}
