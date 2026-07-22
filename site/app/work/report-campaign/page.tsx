import type { Metadata } from "next";
import DeepLProjectCase from "../DeepLProjectCase";
import { reportCampaignProject } from "../deeplProjectData";

export const metadata: Metadata = {
  title: "Research-led editorial campaign — Mason Mitchel",
  description: "An editorial case study about extending one research asset across a report, blog and customer stories.",
  robots: { follow: false, index: false },
};

export default function ReportCampaignPage() {
  return <DeepLProjectCase project={reportCampaignProject} />;
}
