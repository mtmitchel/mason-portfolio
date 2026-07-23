import type { Metadata } from "next";
import ArtifactCollectionCase from "../../components/ArtifactCollectionCase";
import { accountTeamSecurityCollection } from "../portfolioData";

export const metadata: Metadata = {
  title: "Account, team and security writing — Mason Mitchel",
  description: "A collection of UX writing across DeepL account administration, team management and account security.",
  alternates: { canonical: "/work/account-team-security" },
};

export default function AccountTeamSecurityPage() {
  return <ArtifactCollectionCase collection={accountTeamSecurityCollection} />;
}
