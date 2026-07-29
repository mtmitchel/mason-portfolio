import type { Metadata } from "next";
import CheckoutCase from "./CheckoutCase";

export const metadata: Metadata = {
  title: "How shortening DeepL's checkout flow added €2.4M ARR — Mason Mitchel",
  description: "How DeepL's Monetization team shortened checkout from three steps to two in an experiment that added about €2.4M in incremental ARR.",
  alternates: { canonical: "/work/checkout" },
};

export default function CheckoutPage() {
  return <CheckoutCase />;
}
