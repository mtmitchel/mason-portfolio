export type StoryImage = {
  alt: string;
  caption: string;
  height: number;
  label: string;
  src: string;
  width: number;
};

export type StoryVideo = {
  height: number;
  poster: string;
  src: string;
  width: number;
};

export type StoryEvidenceView = {
  id: string;
  image: StoryImage;
  label: string;
  summary: string;
};

export type PortfolioCard = {
  href: string;
  image: StoryImage;
  imageDisplay?: "natural" | "full-document";
  meta: string;
  title: string;
  video?: StoryVideo;
};

export type WritingSample = {
  kind: "quote" | "headline" | "structure";
  text: string;
};

export type WritingEntry = {
  context: string;
  decision: string;
  employer: string;
  format: string;
  id: string;
  links: Array<{ href: string; label: string }>;
  publicationContext?: string;
  samples: WritingSample[];
  title: string;
};
