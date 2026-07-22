import type { Metadata } from "next";
import DeepLProjectCase from "../DeepLProjectCase";
import { customLogoProject } from "../deeplProjectData";

export const metadata: Metadata = {
  title: "Custom logo management — Mason Mitchel",
  description: "A content-design case study about choosing, validating, uploading and removing a team logo in DeepL.",
};

export default function CustomLogoPage() {
  return <DeepLProjectCase project={customLogoProject} />;
}
