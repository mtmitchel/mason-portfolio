"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { checkoutImages } from "../_shared/checkoutConceptData";

const sourceImages = { review: checkoutImages.reviewBefore, details: checkoutImages.detailsAfter } as const;
type Screen = keyof typeof sourceImages;
type Region = readonly [number, number, number, number];

const beats = [
  { id: 0, screen: "review" as Screen, region: [0, 0, 100, 62] as Region, label: "Step 3 · Review — removed", tag: "the checkpoint", chapter: 0 },
  { id: 1, screen: "details" as Screen, region: [0, 0, 100, 34] as Region, label: "Step 2 · Details — rebuilt", tag: "already dense", chapter: 0 },
  { id: 2, screen: "review" as Screen, region: [1.5, 17.5, 58, 25] as Region, label: "Step 3 · Review", tag: "was", chapter: 1 },
  { id: 3, screen: "details" as Screen, region: [61.5, 25.2, 37.5, 11.4] as Region, label: "Step 2 · Details", tag: "became", chapter: 1 },
  { id: 4, screen: "review" as Screen, region: [1.5, 42, 58, 24] as Region, label: "Step 3 · Review", tag: "was", chapter: 2 },
  { id: 5, screen: "details" as Screen, region: [61.5, 38, 37.5, 13.4] as Region, label: "Step 2 · Details", tag: "became", chapter: 2 },
  { id: 6, screen: "review" as Screen, region: [1.5, 65, 58, 29] as Region, label: "Step 3 · Review", tag: "was", chapter: 3 },
  { id: 7, screen: "details" as Screen, region: [1.5, 83.2, 58, 14] as Region, label: "Step 2 · Details", tag: "became", chapter: 3 },
  { id: 8, screen: "details" as Screen, region: [1.5, 83.2, 58, 14] as Region, label: "Step 2 · Details", tag: "the result", chapter: 4 },
] as const;

const natural = {
  review: [checkoutImages.reviewBefore.width, checkoutImages.reviewBefore.height],
  details: [checkoutImages.detailsAfter.width, checkoutImages.detailsAfter.height],
} as const;

function regionBox(screen: Screen, region: Region, width: number) {
  const [naturalWidth, naturalHeight] = natural[screen];
  const [x, y, regionWidthPercent, regionHeightPercent] = region;
  const imageHeight = width * naturalHeight / naturalWidth;
  return {
    rw: regionWidthPercent / 100 * width,
    rh: regionHeightPercent / 100 * imageHeight,
    cx: (x + regionWidthPercent / 2) / 100 * width,
    cy: (y + regionHeightPercent / 2) / 100 * imageHeight,
  };
}

function cameraStyle(screen: Screen, region: Region, width: number, height: number): CSSProperties {
  const box = regionBox(screen, region, width);
  const scale = width / box.rw;
  const tx = width / 2 - box.cx * scale;
  const ty = height / 2 - box.cy * scale;
  return { transform: `translate(${tx.toFixed(1)}px, ${ty.toFixed(1)}px) scale(${scale.toFixed(4)})` };
}

function clamp(low: number, value: number, high: number) {
  return Math.max(low, Math.min(high, value));
}

function focusedFrameStyle(screen: Screen, region: Region): CSSProperties {
  const [naturalWidth, naturalHeight] = natural[screen];
  const [, , width, height] = region;
  return { aspectRatio: `${width * naturalWidth} / ${height * naturalHeight}` };
}

function focusedImageStyle(region: Region): CSSProperties {
  const [x, y, width, height] = region;
  return {
    width: `${10000 / width}%`,
    height: "auto",
    left: `${-(x / width) * 100}%`,
    top: `${-(y / height) * 100}%`,
  };
}

function FourJobsTable() {
  return (
    <table className="camera-jobs">
      <tbody>
        <tr><th scope="row">Price and trial</th><td>Changed form</td></tr>
        <tr><th scope="row">Plan features</th><td>Moved</td></tr>
        <tr><th scope="row">Consent and final action</th><td>Rewritten</td></tr>
        <tr><th scope="row">Lines Details already showed</th><td>Removed</td></tr>
      </tbody>
    </table>
  );
}

function BeatCopy({ id }: { id: number }) {
  if (id === 0) return <><h2>Removing Review meant rebuilding the decision</h2><p>The old Details step collected the selected plan, billing information, and payment details. Review then brought together the trial conditions and annual price, showed when payment would begin, collected required consent, and presented the final <strong>Buy now</strong> action.</p><p>Removing Review eliminated a checkpoint. It did not eliminate the decisions that checkpoint supported.</p></>;
  if (id === 1) return <><p>Its content had to move forward, change form, or be removed as genuine repetition — into a step that was already collecting an address and a card number.</p><FourJobsTable /></>;
  if (id === 2) return <><h2>The price hierarchy separated starting the trial from paying for the plan</h2><p>A free trial creates two financial moments: what the customer owes when starting, and what they will owe if the subscription continues.</p><p>Review answered both in one block, at one weight. Giving the annual price and today’s charge equal weight would have made a free trial look like an immediate €299.88 purchase.</p></>;
  if (id === 3) return <p>Emphasizing only €0 would have made the later commitment too easy to overlook. I structured the hierarchy to answer the immediate question first with <strong>€0 due today</strong>, while keeping <strong>€299.88 per year after the trial</strong> directly beneath it.</p>;
  if (id === 4) return <><h2>The plan features moved forward with the subscription summary</h2><p>Review also showed customers what their selected plan included. The exact feature list depended on the plan. Removing Review could not mean removing the product value and limits that helped customers confirm their choice.</p></>;
  if (id === 5) return <p>I moved the selected plan’s feature list into the Details summary column, keeping what the customer would get beside what they would pay — a standing reference while the form was being filled in, instead of a module on a screen they were about to leave.</p>;
  if (id === 6) return <><h2>The final action had to start a trial and communicate consent</h2><p>In the old flow, customers accepted the terms through a required checkbox on Review before pressing <strong>Buy now</strong>. Once the purchase began with a 30-day trial, that label no longer described the action accurately.</p></>;
  if (id === 7) return <><p>I rewrote the consent statement to explain what pressing the button authorized, and replaced <strong>Buy now</strong> with <strong>Begin subscription</strong>. The trial, payment timing and cancellation stayed visible at the point of action.</p><p className="camera-action">Buy now <span aria-hidden="true">→</span> <strong>Begin subscription</strong></p></>;
  return <><h2>Two steps converted better than three</h2><p>The shorter flow did not tell customers less. It told them the same things in the place where they were already deciding.</p><div className="camera-result"><p><strong>+3.02%</strong><span>paid subscriptions</span></p><p><strong>≈ +€2.4M</strong><span>incremental annual recurring revenue</span></p></div><p className="camera-attribution">Experiment-level result across monthly and annual subscriptions, attributed to the experiment and the team.</p></>;
}

function MobileBeatImage({ beat }: { beat: (typeof beats)[number] }) {
  const image = sourceImages[beat.screen];
  return (
    <figure className="camera-mobile-visual">
      <div className="camera-mobile-frame" style={focusedFrameStyle(beat.screen, beat.region)}>
        <Image
          alt={image.alt}
          className="camera-mobile-crop"
          height={image.height}
          sizes="calc(100vw - 32px)"
          src={image.src}
          style={focusedImageStyle(beat.region)}
          width={image.width}
        />
      </div>
      <figcaption>{beat.label}<span>{beat.tag}</span></figcaption>
    </figure>
  );
}

export default function ScrollCamera() {
  const cameraRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 720, viewportHeight: 800 });
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 761px) and (min-height: 641px)");
    const update = () => setInteractive(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const measure = () => {
      const width = cameraRef.current?.getBoundingClientRect().width || 720;
      setDimensions({ width, viewportHeight: window.innerHeight });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (!interactive) return undefined;
    let queued = false;
    const update = () => {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(() => {
        queued = false;
        const line = window.innerHeight * .62;
        const atEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
        let next = atEnd ? beats.length - 1 : 0;
        if (!atEnd) {
          for (const item of beats) {
            const element = document.querySelector<HTMLElement>(`[data-camera-beat="${item.id}"]`);
            if (element && element.getBoundingClientRect().top < line) next = item.id;
          }
        }
        setActive((current) => current === next ? current : next);
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [interactive]);

  const beat = beats[interactive ? active : 0];
  const box = regionBox(beat.screen, beat.region, dimensions.width);
  const frameHeight = Math.round(clamp(
    240,
    dimensions.width * box.rh / box.rw,
    Math.min(620, dimensions.viewportHeight * .78),
  ));

  return (
    <section className="camera-story" aria-label="Pinned scroll camera evidence">
      <figure className="camera-sticky" ref={cameraRef}>
        <div className="camera-window" style={{ height: frameHeight }}>
          {(["review", "details"] as const).map((screen) => {
            const image = sourceImages[screen];
            const region = screen === beat.screen ? beat.region : [0, 0, 100, 40] as Region;
            const visible = screen === beat.screen;
            return (
              <div aria-hidden={!visible} className="camera-layer" data-active={visible} key={screen}>
                <div className="camera-image" style={cameraStyle(screen, region, dimensions.width, frameHeight)}>
                  <Image alt={image.alt} height={image.height} priority={screen === "review"} sizes="720px" src={image.src} width={image.width} />
                </div>
              </div>
            );
          })}
        </div>
        <figcaption aria-live="polite" className="camera-caption">
          <span>{beat.label}</span><span>{beat.tag}</span>
        </figcaption>
        <div aria-hidden="true" className="camera-progress">
          {[0, 1, 2, 3, 4].map((chapter) => <span data-active={chapter === beat.chapter} key={chapter} />)}
        </div>
      </figure>
      <div className="camera-beats">
        {beats.map((item) => (
          <article className="camera-beat" data-camera-beat={item.id} key={item.id}>
            <MobileBeatImage beat={item} />
            <div className="camera-beat-copy"><BeatCopy id={item.id} /></div>
          </article>
        ))}
      </div>
      <p className="concept-disclaimer">Both screens are reconstructed representative working states, not exact tested, winning, approved, shipped or production screens.</p>
    </section>
  );
}
