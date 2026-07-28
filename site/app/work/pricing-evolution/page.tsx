import type { Metadata } from "next";
import PricingCase from "./PricingCase";
import { pricingEvolutionCase } from "./pricingEvolutionData";

export const metadata: Metadata = {
 title: "Making the more expensive plan explain itself — Mason Mitchel",
 description: "How Mason restructured DeepL Translator plan cards around cumulative tier differences—and restored the line that made the shorter lists work.",
  alternates: { canonical: "/work/pricing-evolution" },
};

export default function PricingEvolutionPage() {
  return <PricingCase story={pricingEvolutionCase} />;
}
