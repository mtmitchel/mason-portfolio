import type { Metadata } from "next";
import EditorialMiniCase from "../../components/EditorialMiniCase";
import { localyzeGhostwritingCase } from "../portfolioData";

export const metadata: Metadata = {
  title: "Executive ghostwriting for Localyze — Mason Mitchel",
  description: "An artifact-led editorial case about ghostwriting global-mobility perspectives for Localyze's CEO.",
};

export default function LocalyzeExecutiveGhostwritingPage() {
  return <EditorialMiniCase project={localyzeGhostwritingCase} />;
}
