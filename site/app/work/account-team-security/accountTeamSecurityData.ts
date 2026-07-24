import type { StoryImage } from "../portfolioTypes";

type AccountStorySection = {
  id: string;
  image: StoryImage;
  text: string;
  title: string;
};

export const authenticationStates: [StoryImage, StoryImage] = [
  {
    label: "Authentication code",
    src: "/work/account-team-security/account-security-login-detail.png",
    width: 1080,
    height: 1250,
    alt: "DeepL login form asking for a six-digit authentication code with a separate link for lost access",
    caption: "The prompt asks for a six-digit code while keeping recovery code and recovery email routes visible.",
  },
  {
    label: "Incorrect authentication code",
    src: "/work/account-team-security/account-security-authentication-error-detail.png",
    width: 1080,
    height: 1250,
    alt: "DeepL login form showing an incorrect authentication code error and a separate link for lost access",
    caption: "The error names the incorrect code, keeps retry available, and offers recovery email or administrator support.",
  },
];

export const recoverySections: AccountStorySection[] = [
  {
    id: "reset-changes",
    title: "Explain what the reset changes",
    text: "The reset confirmation says that the old authenticator entry will no longer work and that multi-factor authentication must be set up again.",
    image: {
      label: "Reset required",
      src: "/work/account-team-security/account-security-reset-required.png",
      width: 1176,
      height: 720,
      alt: "Dialog explaining that multi-factor authentication was reset and must be set up again",
      caption: "The confirmation names both the reset and the required setup that follows.",
    },
  },
  {
    id: "visible-account-state",
    title: "End on a visible account state",
    text: "The account page completes the recovery sequence with a status the user can check.",
    image: {
      label: "MFA active",
      src: "/work/account-team-security/account-security-protection-restored.png",
      width: 2360,
      height: 734,
      alt: "DeepL account settings showing multi-factor authentication with an Active status",
      caption: "The visible Active status confirms the account's current multi-factor authentication state.",
    },
  },
  {
    id: "bulk-user-deletion",
    title: "Name the consequence before deleting users",
    text: "The confirmation keeps the selected users visible and states that deleting them removes their access to any DeepL subscriptions.",
    image: {
      label: "Delete users confirmation",
      src: "/work/account-team-security/bulk-delete-confirmation-detail.png",
      width: 2530,
      height: 1480,
      alt: "DeepL team administration confirmation listing selected users and warning that they will lose access to any DeepL subscriptions",
      caption: "The confirmation connects the selected users, the destructive action and the loss of access to any DeepL subscriptions.",
    },
  },
  {
    id: "filtered-result",
    title: "Confirm the filtered result",
    text: "After deletion, the toast confirms the action and the filtered table shows that no matching users remain.",
    image: {
      label: "Filtered deletion result",
      src: "/work/account-team-security/bulk-delete-06-result-detail.png",
      width: 2600,
      height: 500,
      alt: "Users deleted toast above a filtered team table displaying zero matching users",
      caption: "The confirmation toast and zero-result footer show the completed filtered state.",
    },
  },
];
