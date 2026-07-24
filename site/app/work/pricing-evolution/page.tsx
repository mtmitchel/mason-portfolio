import type { Metadata } from "next";
import ChapteredCase from "../ChapteredCase";
import { pricingEvolutionCase } from "../pricingEvolutionCase";

export const metadata: Metadata = {
  title: "Simplifying pricing across four products — Mason Mitchel",
  description: "How DeepL pricing moved from one Translator grid to bundles, then to one page per product with cumulative tiers and add-ons.",
  alternates: { canonical: "/work/pricing-evolution" },
};

export default function PricingEvolutionPage() {
  return <ChapteredCase story={pricingEvolutionCase} />;
}
