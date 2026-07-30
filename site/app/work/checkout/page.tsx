import type { Metadata } from "next";
import CheckoutCase from "./CheckoutCase";

export const metadata: Metadata = {
  title: "How simplifying DeepL’s checkout helped add €2.4M ARR — Mason Mitchel",
  description: "How Mason worked with DeepL’s Monetization team to simplify checkout from three steps to two in an experiment that increased paid subscriptions and incremental ARR.",
  alternates: { canonical: "/work/checkout" },
};

export default function CheckoutPage() {
  return <CheckoutCase />;
}
