import type { Metadata } from "next";
import VoiceProductCase from "./VoiceProductCase";

export const metadata: Metadata = {
  title: "Giving DeepL Voice two clear jobs — Mason Mitchel",
  description: "A product-content mini case about positioning DeepL Voice for Meetings and Conversations.",
  alternates: { canonical: "/work/voice-product" },
};

export default function VoiceProductPage() {
  return <VoiceProductCase />;
}
