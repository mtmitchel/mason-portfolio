import type { Metadata } from "next";
import DeepLProjectCase from "../DeepLProjectCase";
import { csvImportProject } from "../deeplProjectData";

export const metadata: Metadata = {
  title: "Adding users at scale — Mason Mitchel",
  description: "A content-design case study about manual entry, CSV import, validation and completion in DeepL Team Administration.",
};

export default function CsvImportPage() {
  return <DeepLProjectCase project={csvImportProject} />;
}
