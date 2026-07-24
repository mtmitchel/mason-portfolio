import type { Metadata } from "next";
import LocalyzeGhostwritingCase from "./LocalyzeGhostwritingCase";

export const metadata: Metadata = {
  title: "Executive ghostwriting on global mobility — Mason Mitchel",
  description: "Three Forbes Business Council articles ghostwritten for Localyze co-founder and CEO Hanna Marie Asmussen.",
  alternates: { canonical: "/work/localyze-executive-ghostwriting" },
};

export default function LocalyzeExecutiveGhostwritingPage() {
  return <LocalyzeGhostwritingCase />;
}
