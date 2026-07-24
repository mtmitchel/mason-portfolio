import type { Metadata } from "next";
import AccountTeamSecurityCase from "./AccountTeamSecurityCase";

export const metadata: Metadata = {
  title: "Account recovery and team administration — Mason Mitchel",
  description: "UX writing for multi-factor authentication recovery and high-impact team administration at DeepL.",
  alternates: { canonical: "/work/account-team-security" },
};

export default function AccountTeamSecurityPage() {
  return <AccountTeamSecurityCase />;
}
