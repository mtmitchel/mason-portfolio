import type { Metadata } from "next";
import DeepLProjectCase from "../DeepLProjectCase";
import { checkoutProject } from "../deeplProjectData";

export const metadata: Metadata = {
  title: "Subscription checkout — Mason Mitchel",
  description: "A content-design case study about trial, no-trial, bundle and team-purchase checkout states.",
};

export default function CheckoutPage() {
  return <DeepLProjectCase project={checkoutProject} />;
}
