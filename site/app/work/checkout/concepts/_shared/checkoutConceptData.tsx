import Link from "next/link";
import type { ReactNode } from "react";
import ImageLightbox from "../../../../components/ImageLightbox";
import { ChapterBackLink } from "../../../../components/ChapterCaseElements";
import { SiteHeader } from "../../../../components/PortfolioChrome";
import type { StoryImage } from "../../../portfolioTypes";

export const checkoutImages = {
  reviewBefore: {
    label: "Review step, original checkout",
    src: "/work/checkout/original-review-flow-spaced.png",
    width: 2048,
    height: 1811,
    alt: "DeepL checkout, original Review step — plan conditions, features, two consent checkboxes and Buy now.",
    caption: "Review assembled the subscription decision after Details collected billing and payment.",
  },
  detailsAfter: {
    label: "Details step, rebuilt checkout",
    src: "/work/checkout/rebuilt-details-flow-logo-cleaned.px-23599eb66f02.png",
    width: 2228,
    height: 3618,
    alt: "DeepL checkout, rebuilt Details step — plan selection, billing, payment, a plan summary panel, a consent statement and Begin subscription, with a two-step progress indicator.",
    caption: "With Review gone, the plan summary, billing, payment, consent and final action had to work on one screen.",
  },
  oldPrice: {
    label: "Review plan conditions, before the change",
    src: "/work/checkout/review-plan-conditions.px-318ab1239763.png",
    width: 1605,
    height: 980,
    alt: "Review plan conditions showing a 30-day trial, €299.88 annual price, VAT, first payment date and masked credit card.",
    caption: "Review plan conditions before the change.",
  },
  newPrice: {
    label: "Details plan summary, after the change",
    src: "/work/checkout/due-today-summary.png",
    width: 800,
    height: 736,
    alt: "Details plan summary showing €0 due today and €299.88 per year after the trial.",
    caption: "Details plan summary after the change.",
  },
  reviewFeatures: {
    label: "Plan features in Review",
    src: "/work/checkout/checkout-review-plan-features.px-f09888002e2c.png",
    width: 820,
    height: 460,
    alt: "Review feature module with a plain heading and a grey vertical rule beside the selected plan’s feature list.",
    caption: "The selected plan’s feature list appeared in Review.",
  },
  detailsFeatures: {
    label: "Plan features in Details",
    src: "/work/checkout/checkout-details-plan-features.px-d583f6ecfa18.png",
    width: 840,
    height: 540,
    alt: "Details feature card with a dark blue top rule and green checks beside the selected plan’s feature list.",
    caption: "The selected plan’s feature list moved into the Details summary rail.",
  },
} satisfies Record<string, StoryImage>;

const conceptLinks = [
  ["four-jobs-map", "Four jobs map"],
  ["same-scale-silhouettes", "Same-scale silhouettes"],
  ["six-question-map", "Six-question map"],
  ["price-tradeoff", "Price tradeoff"],
  ["summary-rail", "Summary rail"],
  ["consent-manuscript", "Consent manuscript"],
  ["counter-figure", "Counter figure"],
  ["traveling-spotlight", "Traveling spotlight"],
  ["scroll-camera", "Pinned scroll camera"],
] as const;

export function ConceptNav({ active }: { active: string }) {
  return (
    <nav className="checkout-concept__nav" aria-label="Checkout concepts">
      <Link aria-current={active === "index" ? "page" : undefined} href="/work/checkout/concepts">
        Concept index
      </Link>
      {conceptLinks.map(([slug, label]) => (
        <Link aria-current={slug === active ? "page" : undefined} href={`/work/checkout/concepts/${slug}`} key={slug}>
          {label}
        </Link>
      ))}
    </nav>
  );
}

export function ConceptShell({ active, children }: { active: string; children: ReactNode }) {
  return (
    <main className={`site-shell checkout-concept checkout-concept--${active}`}>
      <SiteHeader />
      <article className="checkout-concept__page">
        <ChapterBackLink />
        <ConceptNav active={active} />
        {children}
      </article>
    </main>
  );
}

export function Evidence({
  image,
  className = "",
  sizes = "(max-width: 760px) calc(100vw - 32px), 720px",
}: {
  image: StoryImage;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`checkout-concept__evidence ${className}`.trim()}>
      <ImageLightbox
        alt={image.alt}
        caption={image.caption}
        chrome="overlay"
        dialogPresentation="minimal"
        dialogSizes="1440px"
        height={image.height}
        label={image.label}
        previewSrc={image.src}
        sizes={sizes}
        width={image.width}
      />
    </div>
  );
}

export function FullSourceLink({ image, label = "View full source" }: { image: StoryImage; label?: string }) {
  return (
    <ImageLightbox
      alt={image.alt}
      caption={image.caption}
      chrome="link"
      dialogPresentation="minimal"
      dialogSizes="1440px"
      height={image.height}
      label={image.label}
      linkLabel={label}
      previewSrc={image.src}
      showCaption={false}
      showDialogCaption={false}
      width={image.width}
    />
  );
}
