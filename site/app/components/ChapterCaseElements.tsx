import Link from "next/link";
import ImageLightbox from "./ImageLightbox";
import type { StoryImage } from "../work/portfolioTypes";

const chapterImageSizes = "(max-width: 928px) calc(100vw - 48px), 880px";
const chapterDialogSizes = "1440px";

export function ChapterBackLink() {
  return (
    <Link className="back-link" href="/">
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
        <path d="M20 12H5m6-6-6 6 6 6" />
      </svg>
      <span>Back</span>
    </Link>
  );
}

export function ChapterFigure({
  image,
  measure = "wide",
}: {
  image: StoryImage;
  measure?: "compact" | "reading" | "wide";
}) {
  return (
    <div className={`chapter-media chapter-media--${measure}`}>
      <ImageLightbox
        alt={image.alt}
        caption={image.caption}
        chrome="overlay"
        dialogPresentation="minimal"
        dialogSizes={chapterDialogSizes}
        height={image.height}
        label={image.label}
        previewSrc={image.src}
        sizes={chapterImageSizes}
        width={image.width}
      />
    </div>
  );
}
