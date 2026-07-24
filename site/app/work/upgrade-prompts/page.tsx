import type { Metadata } from "next";
import UpgradePromptsCase from "./UpgradePromptsCase";

export const metadata: Metadata = {
  title: "Upgrade prompts across Translator and Write — Mason Mitchel",
  description: "A content-design case study about upgrade prompts across DeepL Translator and Write.",
  alternates: { canonical: "/work/upgrade-prompts" },
};

export default function UpgradePromptsPage() {
  return <UpgradePromptsCase />;
}
