import type { Metadata } from "next";
import DeepLProjectCase from "../DeepLProjectCase";
import { dataSecurityProject } from "../deeplProjectData";

export const metadata: Metadata = {
  title: "Data-security editorial case — Mason Mitchel",
  description: "An editorial case study about explaining DeepL's data-protection approach to a business audience.",
  robots: { follow: false, index: false },
};

export default function DataSecurityPage() {
  return <DeepLProjectCase project={dataSecurityProject} />;
}
