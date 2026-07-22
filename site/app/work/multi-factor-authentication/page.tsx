import type { Metadata } from "next";
import DeepLProjectCase from "../DeepLProjectCase";
import { multiFactorAuthenticationProject } from "../deeplProjectData";

export const metadata: Metadata = {
  title: "MFA account recovery — Mason Mitchel",
  description: "A content-design case study about recovery from failed authentication to restored MFA at DeepL.",
};

export default function MultiFactorAuthenticationPage() {
  return <DeepLProjectCase project={multiFactorAuthenticationProject} />;
}
