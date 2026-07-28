import type { Metadata } from "next";
import ProductNamingCase from "./ProductNamingCase";

export const metadata: Metadata = {
  title: "A working naming framework for a growing product portfolio — Mason Mitchel",
  description: "A content-design case study about product, plan, bundle, and shorthand naming at DeepL.",
  alternates: { canonical: "/work/product-naming" },
};

export default function ProductNamingPage() {
  return <ProductNamingCase />;
}
