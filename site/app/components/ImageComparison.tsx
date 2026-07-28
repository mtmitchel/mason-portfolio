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
  dialogSizes?: string;
  items: [ComparisonItem, ComparisonItem];
  showCaptions?: boolean;
  showDialogCaptions?: boolean;
  sizes?: string;
};

export default function ImageComparison({
  ariaLabel,
  chrome = "image",
  dialogPresentation = "default",
  dialogSizes,
  items,
  showCaptions = true,
  showDialogCaptions = true,
  sizes,
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
            dialogSizes={dialogSizes}
            height={image.height}
            label={image.label}
            previewClassName={previewClassName}
            previewSrc={image.src}
            showCaption={showCaptions}
            showDialogCaption={showDialogCaptions}
            sizes={sizes}
            tallDialog={tallDialog}
            width={image.width}
          />
        </div>
      ))}
    </div>
  );
}
