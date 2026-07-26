import type { Metadata } from "next";
import PricingCase from "./PricingCase";
import { pricingEvolutionCase } from "./pricingEvolutionData";

export const metadata: Metadata = {
  title: "Simplifying pricing across four products — Mason Mitchel",
  description: "How competitor research, naming, and content rules supported pricing patterns across Translator, Write, Voice, and API.",
  alternates: { canonical: "/work/pricing-evolution" },
};

export default function PricingEvolutionPage() {
  return <PricingCase story={pricingEvolutionCase} />;
}
