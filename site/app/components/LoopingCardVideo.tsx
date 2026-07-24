"use client";

import { useEffect, useRef } from "react";
import type { StoryVideo } from "../work/portfolioTypes";

export default function LoopingCardVideo({ height, poster, src, width }: StoryVideo) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isVisible = false;

    const updatePlayback = () => {
      if (reducedMotion.matches || !isVisible) {
        video.pause();
        if (reducedMotion.matches) video.currentTime = 0;
        return;
      }

      void video.play().catch(() => {
        // The poster remains visible if the browser declines autoplay.
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        updatePlayback();
      },
      { threshold: 0.1 },
    );

    observer.observe(video);
    reducedMotion.addEventListener("change", updatePlayback);

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", updatePlayback);
      video.pause();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="project-entry-video"
      width={width}
      height={height}
      poster={poster}
      preload="none"
      muted
      loop
      playsInline
      disablePictureInPicture
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
