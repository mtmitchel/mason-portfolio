"use client";

import { useEffect, useRef, useState } from "react";

type ImageLightboxProps = {
  alt: string;
  caption: string;
  fullSrc: string;
  label: string;
  previewSrc: string;
};

export default function ImageLightbox({ alt, caption, fullSrc, label, previewSrc }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button className="evidence-image-button" type="button" onClick={() => setOpen(true)} aria-label={`Open ${label.toLowerCase()} image in detail`}>
        <span className="evidence-image-label">{label}</span>
        <img src={previewSrc} alt={alt} />
        <span className="evidence-image-hint">Open image</span>
      </button>

      {open && (
        <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={`${label} checkout image`} onMouseDown={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}>
          <div className="image-lightbox-panel">
            <button ref={closeButton} className="image-lightbox-close" type="button" onClick={() => setOpen(false)} aria-label="Close image">
              Close
            </button>
            <img src={fullSrc} alt={alt} />
            <p>{caption}</p>
          </div>
        </div>
      )}
    </>
  );
}
