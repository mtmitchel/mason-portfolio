import type { Metadata } from "next";
import DeepLProjectCase from "../DeepLProjectCase";
import { bulkAdministrationProject } from "../deeplProjectData";

export const metadata: Metadata = {
  title: "Bulk user deletion — Mason Mitchel",
  description: "A content-design case study about scoping, confirming and completing bulk user deletion in DeepL Team Administration.",
};

export default function BulkAdministrationPage() {
  return <DeepLProjectCase project={bulkAdministrationProject} />;
}
