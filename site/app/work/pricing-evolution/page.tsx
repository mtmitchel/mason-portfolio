import type { Metadata } from "next";
import PricingCase from "./PricingCase";
import { pricingEvolutionCase } from "./pricingEvolutionData";

export const metadata: Metadata = {
  title: "Simplifying pricing across four products — Mason Mitchel",
  description: "How DeepL pricing moved from tabs and repeated bundles to one page per product, with cumulative tiers and add-ons.",
  alternates: { canonical: "/work/pricing-evolution" },
};

export default function PricingEvolutionPage() {
  return <PricingCase story={pricingEvolutionCase} />;
}
