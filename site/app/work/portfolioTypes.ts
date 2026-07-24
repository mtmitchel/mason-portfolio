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

export type StoryFlowItem = {
  label: string;
  text: string;
  title: string;
};

export type StoryEvidenceSection = {
  flow?: StoryFlowItem[];
  flowAriaLabel?: string;
  flowIsOrdered?: boolean;
  id: string;
  images: StoryImage[];
  intro?: string[];
  label: string;
  title: string;
};

export type StoryCoda = {
  href: string;
  linkLabel: string;
  prefix: string;
  suffix?: string;
};

export type PortfolioCard = {
  href: string;
  image: StoryImage;
  meta: string;
  title: string;
  video?: StoryVideo;
};

export type ArtifactCollectionSection = {
  id: string;
  images: StoryImage[];
  intro: string[];
  label: string;
  title: string;
};

export type ArtifactCollection = {
  collaborators: string;
  context: string;
  evidenceNote: string;
  hook: string;
  next: { href: string; label: string };
  role: string;
  sections: ArtifactCollectionSection[];
  stakes: string;
  title: string;
};

export type ProductCaseStory = {
  cardTitle: string;
  collaborators: string;
  constraints: string;
  context: string;
  cover: StoryImage;
  coda?: StoryCoda;
  decisions: Array<{ title: string; text: string }>;
  decisionsTitle?: string;
  evidenceNote?: string;
  evidenceSections?: StoryEvidenceSection[];
  evidenceSectionLabel?: string;
  evidenceSectionTitle?: string;
  experienceTitle: string;
  experienceSectionLabel?: string;
  flow?: StoryFlowItem[];
  flowAriaLabel?: string;
  flowIsOrdered?: boolean;
  flowSectionLabel?: string;
  flowTitle?: string;
  hook: string;
  href: string;
  next: { href: string; label: string };
  outcome?: string[];
  outcomeTitle?: string;
  problem: string[];
  problemTitle?: string;
  role: string;
  sequence: StoryImage[];
  stakes: string;
  title: string;
  tradeoff: string;
  transformation?: {
    after: string;
    before: string;
    label: string;
  };
};

export type EditorialPiece = {
  href: string;
  linkLabel: string;
  sample: WritingSample;
  title: string;
};

export type EditorialMiniCase = {
  assignmentTitle: string;
  collaborators: string;
  context: string;
  cover?: StoryImage;
  decisionsTitle: string;
  decisions: Array<{ title: string; text: string }>;
  evidenceNote: string;
  hook: string;
  next: { href: string; label: string };
  pieces: EditorialPiece[];
  problem: string[];
  role: string;
  stakes: string;
  title: string;
};

export type WritingSample = {
  kind: "quote" | "headline" | "structure";
  text: string;
};

export type WritingEntry = {
  context: string;
  employer: string;
  evidenceNote: string;
  format: string;
  id: string;
  links: Array<{ href: string; label: string }>;
  observation: string;
  sample: WritingSample;
  title: string;
};
