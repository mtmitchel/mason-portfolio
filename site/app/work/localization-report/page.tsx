import type { Metadata } from "next";
import DeepLProjectCase from "../DeepLProjectCase";
import { localizationReportProject } from "../deeplProjectData";

export const metadata: Metadata = {
  title: "Localization research report — Mason Mitchel",
  description: "An editorial case study about turning global localization research into a clear long-form narrative.",
  robots: { follow: false, index: false },
};

export default function LocalizationReportPage() {
  return <DeepLProjectCase project={localizationReportProject} />;
}
