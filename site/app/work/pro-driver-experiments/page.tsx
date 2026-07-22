import type { Metadata } from "next";
import DeepLProjectCase from "../DeepLProjectCase";
import { proDriverExperimentsProject } from "../deeplProjectData";

export const metadata: Metadata = {
  title: "Hard blockers — Mason Mitchel",
  description: "A product-content case study about hard-blocker experiments across DeepL Translator and Write.",
  robots: { follow: false, index: false },
};

export default function ProDriverExperimentsPage() {
  return <DeepLProjectCase project={proDriverExperimentsProject} />;
}
