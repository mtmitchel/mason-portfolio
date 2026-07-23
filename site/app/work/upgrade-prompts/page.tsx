import type { Metadata } from "next";
import DeepLProjectCase from "../DeepLProjectCase";
import { upgradePromptsProject } from "../deeplProjectData";

export const metadata: Metadata = {
  title: "Upgrade prompts across Translator and Write — Mason Mitchel",
  description: "A product-content case study about upgrade prompts across DeepL Translator and Write.",
  alternates: { canonical: "/work/upgrade-prompts" },
};

export default function UpgradePromptsPage() {
  return <DeepLProjectCase project={upgradePromptsProject} />;
}
