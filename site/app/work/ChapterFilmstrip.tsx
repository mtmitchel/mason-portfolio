"use client";

import { useRef } from "react";
import ImageLightbox from "../components/ImageLightbox";
import type { CaseImage } from "./ChapteredCase";

export default function ChapterFilmstrip({
  items,
  label,
}: {
  items: CaseImage[];
  label: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBySlide = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector<HTMLElement>(".chapter-strip-slide");
    const delta = (slide?.offsetWidth ?? 320) + 16;
    track.scrollBy({ left: direction * delta, behavior: "smooth" });
  };

  return (
    <div className="chapter-media">
      <div className="chapter-strip" role="group" aria-label={label}>
        <div className="chapter-strip-controls">
          <button
            type="button"
            className="chapter-strip-button"
            aria-label="Show previous slide"
            onClick={() => scrollBySlide(-1)}
          >
            Previous
          </button>
          <button
            type="button"
            className="chapter-strip-button"
            aria-label="Show next slide"
            onClick={() => scrollBySlide(1)}
          >
            Next
          </button>
        </div>
        <div className="chapter-strip-track" ref={trackRef}>
          {items.map((image) => (
            <div className="chapter-strip-slide" key={image.src}>
              <div className="chapter-figure chapter-figure--strip">
                <ImageLightbox
                  chrome="image"
                  label={image.alt}
                  previewSrc={image.src}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                  caption={image.caption}
                  showCaption
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
