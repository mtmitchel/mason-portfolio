import type { Metadata } from "next";
import DeepLProjectCase from "../DeepLProjectCase";
import { customDomainProject } from "../deeplProjectData";

export const metadata: Metadata = {
  title: "Custom domain management — Mason Mitchel",
  description: "A content-design case study about requesting, changing, approving and removing a DeepL team domain.",
};

export default function CustomDomainPage() {
  return <DeepLProjectCase project={customDomainProject} />;
}
