import ImageLightbox from "./ImageLightbox";
import type { StoryImage } from "../work/portfolioTypes";

type ComparisonItem = {
  image: StoryImage;
  label: string;
  previewClassName?: string;
  tallDialog?: boolean;
};

type ImageComparisonProps = {
  ariaLabel: string;
  /** "image" shows only the preview; "overlay" adds the expand indicator. */
  chrome?: "image" | "overlay";
  dialogPresentation?: "default" | "minimal";
  items: [ComparisonItem, ComparisonItem];
  showCaptions?: boolean;
  showDialogCaptions?: boolean;
};

export default function ImageComparison({
  ariaLabel,
  chrome = "image",
  dialogPresentation = "default",
  items,
  showCaptions = true,
  showDialogCaptions = true,
}: ImageComparisonProps) {
  return (
    <div className="story-comparison" role="group" aria-label={ariaLabel}>
      {items.map(({ image, label, previewClassName, tallDialog }) => (
        <div className="story-comparison-item" key={label}>
          <h3>{label}</h3>
          <ImageLightbox
            alt={image.alt}
            caption={image.caption}
            chrome={chrome}
            dialogPresentation={dialogPresentation}
            height={image.height}
            label={image.label}
            previewClassName={previewClassName}
            previewSrc={image.src}
            showCaption={showCaptions}
            showDialogCaption={showDialogCaptions}
            tallDialog={tallDialog}
            width={image.width}
          />
        </div>
      ))}
    </div>
  );
}
