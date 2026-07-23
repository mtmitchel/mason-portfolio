import type { Metadata } from "next";
import WorkIndexPage from "../components/WorkIndexPage";

export const metadata: Metadata = {
  title: "Writing — Mason Mitchel",
  description: "Selected B2B, technical, executive, data-led and consumer writing by Mason Mitchel.",
};

export default function WritingPage() {
  return <WorkIndexPage active="writing" />;
}
