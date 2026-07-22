import type { Metadata } from "next";
import DeepLProjectGrid from "../../components/DeepLProjectGrid";
import { SiteFooter, SiteHeader } from "../../components/PortfolioChrome";
import {
  bulkAdministrationProject,
  checkoutProject,
  csvImportProject,
  customDomainProject,
  customLogoProject,
  dataSecurityProject,
  localizationReportProject,
  multiFactorAuthenticationProject,
  proDriverExperimentsProject,
  reportCampaignProject,
} from "../deeplProjectData";

export const metadata: Metadata = {
  title: "DeepL projects — Mason Mitchel",
  description: "Selected UX writing and content-design projects from DeepL.",
  robots: { follow: false, index: false },
};

export default function DeepLProjectsIndex() {
  const candidateProjects = [
    { ...proDriverExperimentsProject, context: "Product option 1 · Hard blockers" },
    { ...checkoutProject, context: "Product option 2 · Checkout" },
    { ...multiFactorAuthenticationProject, context: "Admin option 1 · Account security" },
    { ...bulkAdministrationProject, context: "Admin option 2 · Bulk deletion" },
    { ...csvImportProject, context: "Admin option 3 · Add users" },
    { ...customDomainProject, context: "Admin option 4 · Custom domain" },
    { ...customLogoProject, context: "Admin option 5 · Custom logo" },
    { ...localizationReportProject, context: "Marketing option 1 · Research report" },
    { ...reportCampaignProject, context: "Marketing option 2 · Editorial campaign" },
    { ...dataSecurityProject, context: "Marketing option 3 · Data security" },
  ];

  return (
    <main className="site-shell">
      <SiteHeader summary="UX writing, content design and editorial work at DeepL." />
      <article className="project-index-page">
        <header className="index-intro">
          <h1>DeepL work</h1>
          <p>Ten projects under review</p>
        </header>
        <section aria-label="DeepL portfolio options">
          <DeepLProjectGrid projects={candidateProjects} />
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
