import type { Metadata } from "next";
import DeepLProjectCase from "../DeepLProjectCase";
import { teamAccessProject } from "../deeplProjectData";

export const metadata: Metadata = {
  title: "Team access and permissions — Mason Mitchel",
  description: "A content-design case study about authority, status and access language in DeepL Team Administration.",
};

export default function TeamAccessPage() {
  return <DeepLProjectCase project={teamAccessProject} />;
}
