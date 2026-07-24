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
  items: [ComparisonItem, ComparisonItem];
};

export default function ImageComparison({ ariaLabel, items }: ImageComparisonProps) {
  return (
    <div className="story-comparison" role="group" aria-label={ariaLabel}>
      {items.map(({ image, label, previewClassName, tallDialog }) => (
        <div className="story-comparison-item" key={label}>
          <h3>{label}</h3>
          <ImageLightbox
            alt={image.alt}
            caption={image.caption}
            chrome="image"
            height={image.height}
            label={image.label}
            previewClassName={previewClassName}
            previewSrc={image.src}
            tallDialog={tallDialog}
            width={image.width}
          />
        </div>
      ))}
    </div>
  );
}
