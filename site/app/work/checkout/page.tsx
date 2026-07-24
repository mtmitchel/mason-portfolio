import type { Metadata } from "next";
import CheckoutCase from "./CheckoutCase";

export const metadata: Metadata = {
  title: "Checkout across four purchase states — Mason Mitchel",
  description: "A content-design case study about trial, no-trial, bundle and team-purchase checkout states.",
  alternates: { canonical: "/work/checkout" },
};

export default function CheckoutPage() {
  return <CheckoutCase />;
}
