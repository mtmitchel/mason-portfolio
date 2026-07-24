import type { Metadata } from "next";
import WorkIndexPage from "../components/WorkIndexPage";

export const metadata: Metadata = {
  title: "Writing — Mason Mitchel",
  description: "Five published examples across product announcements, methodology, instruction, data-led press releases and consumer writing.",
  alternates: { canonical: "/writing" },
};

export default function WritingPage() {
  return <WorkIndexPage active="writing" />;
}
