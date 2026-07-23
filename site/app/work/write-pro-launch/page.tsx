import type { Metadata } from "next";
import DeepLProjectCase from "../DeepLProjectCase";
import { writeProLaunchProject } from "../deeplProjectData";

export const metadata: Metadata = {
  title: "Write Pro launch, pricing and feature awareness — Mason Mitchel",
  description: "A UX writing case about explaining DeepL Translator, Write Pro and bundles across pricing and reusable feature-awareness modules.",
  alternates: { canonical: "/work/write-pro-launch" },
};

export default function WriteProLaunchPage() {
  return <DeepLProjectCase project={writeProLaunchProject} />;
}
