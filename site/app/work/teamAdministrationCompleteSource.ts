import type { StoryImage } from "./DeepLProjectCase";

function sourceImage(
  label: string,
  src: string,
  width: number,
  height: number,
  caption: string,
): StoryImage {
  return {
    label,
    src,
    width,
    height,
    alt: `${label} from the complete Team Administration source flow`,
    caption,
  };
}

function numberedName(base: string, index: number) {
  return `${base}${index === 0 ? "" : `-${index}`}.png`;
}

export const addManageUserCompleteSource: StoryImage[] = [
  ...Array.from({ length: 24 }, (_, index) =>
    sourceImage(
      `Groups flow · ${String(index + 1).padStart(2, "0")}`,
      `/work/csv-import/complete-source/product/${numberedName("groups", index)}`,
      2880,
      index >= 3 && index <= 6 ? 3674 : 2126,
      "Complete exported state from the groups and add-users reference flow.",
    ),
  ),
  ...Array.from({ length: 18 }, (_, index) =>
    sourceImage(
      `Users flow · ${String(index + 1).padStart(2, "0")}`,
      `/work/csv-import/complete-source/product/${numberedName("users", index)}`,
      2880,
      index >= 13 && index <= 16 ? 2292 : 2126,
      "Complete exported state from the users-tab reference flow.",
    ),
  ),
  sourceImage(
    "Complete user-list state",
    "/work/csv-import/complete-source/product/user.png",
    2880,
    4480,
    "Complete long-form user-list export from the reference flow.",
  ),
  sourceImage(
    "Settings state",
    "/work/csv-import/complete-source/product/settings.png",
    2880,
    2126,
    "Complete settings export included in the source cluster.",
  ),
  ...[
    448, 544, 448, 448, 400, 576, 672, 400, 448, 400, 400, 400, 400, 400,
    400, 400, 400, 400, 400, 400, 400, 400, 448, 400, 400, 400, 400, 400,
    400, 400, 400, 448, 400, 496, 400,
  ].map((height, index) =>
    sourceImage(
      `Source note · ${String(index + 1).padStart(2, "0")}`,
      `/work/csv-import/complete-source/process-notes/${numberedName("User Cards", index)}`,
      978,
      height,
      "Exported source note retained in the complete pre-selection review.",
    ),
  ),
  sourceImage(
    "Source label",
    "/work/csv-import/complete-source/non-product/Adding new users from users tab.png",
    2961,
    194,
    "Exported source label retained in the complete pre-selection review.",
  ),
  sourceImage(
    "Source arrow",
    "/work/csv-import/complete-source/non-product/Arrow 84.png",
    1739,
    116,
    "Exported source connector retained in the complete pre-selection review.",
  ),
  sourceImage(
    "Source frame",
    "/work/csv-import/complete-source/non-product/Frame 427326141.png",
    248,
    88,
    "Exported source frame retained in the complete pre-selection review.",
  ),
  sourceImage(
    "Source connector · 01",
    "/work/csv-import/complete-source/non-product/Untitled.png",
    752,
    194,
    "Exported source connector retained in the complete pre-selection review.",
  ),
  sourceImage(
    "Source connector · 02",
    "/work/csv-import/complete-source/non-product/Untitled-1.png",
    790,
    194,
    "Exported source connector retained in the complete pre-selection review.",
  ),
];

const customDomainDialogHeights = [876, 876, 934, 934, 972, 972, 640];

export const customDomainCompleteSource: StoryImage[] = [
  ...customDomainDialogHeights.map((height, index) =>
    sourceImage(
      `Custom-domain dialog · ${String(index + 1).padStart(2, "0")}`,
      `/work/custom-domain/${numberedName("custom-url-dialog", index)}`,
      1176,
      height,
      "Complete exported dialog state from the custom-domain source flow.",
    ),
  ),
  sourceImage("Customer domain state", "/work/custom-domain/complete-source/security.png", 2880, 2124, "Complete exported customer-facing domain state."),
  sourceImage("Approval email", "/work/custom-domain/complete-source/Frame 427322354.png", 2880, 2124, "Complete exported first-domain approval email."),
  sourceImage("Replacement email", "/work/custom-domain/complete-source/Frame 427322355.png", 2880, 2368, "Complete exported replacement-domain approval email."),
  sourceImage("Operations state · 01", "/work/custom-domain/complete-source/Frame 427322357.png", 2880, 2124, "Complete exported operations state from the source flow."),
  sourceImage("Operations state · 02", "/work/custom-domain/complete-source/Frame 427322358.png", 2880, 2124, "Complete exported operations state from the source flow."),
  ...Array.from({ length: 3 }, (_, index) =>
    sourceImage(
      `Internal communication · ${String(index + 1).padStart(2, "0")}`,
      `/work/custom-domain/complete-source/${numberedName("Figma", index)}`,
      2944,
      2188,
      "Complete exported internal communication state from the custom-domain source flow.",
    ),
  ),
  ...Array.from({ length: 4 }, (_, index) =>
    sourceImage(
      `Administration state · ${String(index + 1).padStart(2, "0")}`,
      `/work/custom-domain/complete-source/${numberedName("Phoenix Page", index)}`,
      2880,
      2124,
      "Complete exported administration state from the custom-domain source flow.",
    ),
  ),
];

export const customLogoCompleteSource: StoryImage[] = [
  ...Array.from({ length: 4 }, (_, index) =>
    sourceImage(
      `File-picker state · ${String(index + 1).padStart(2, "0")}`,
      `/work/custom-logo/Frame ${427322349 + index}.png`,
      1960,
      1200,
      "Complete exported file-picker state from the custom-logo source flow.",
    ),
  ),
  ...Array.from({ length: 5 }, (_, index) =>
    sourceImage(
      `Logo settings state · ${String(index + 1).padStart(2, "0")}`,
      `/work/custom-logo/${numberedName("security", index)}`,
      2880,
      9508,
      "Complete exported settings state from the custom-logo source flow.",
    ),
  ),
];
