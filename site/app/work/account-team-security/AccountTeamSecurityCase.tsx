import Link from "next/link";
import { ChapterBackLink, ChapterFigure } from "../../components/ChapterCaseElements";
import ImageComparison from "../../components/ImageComparison";
import { SiteHeader } from "../../components/PortfolioChrome";
import { authenticationStates, recoverySections } from "./accountTeamSecurityData";

export default function AccountTeamSecurityCase() {
  return (
    <main className="site-shell case-shell chapter-shell">
      <SiteHeader />
      <article className="chapter-page chapter-case-page account-team-security-page">
        <ChapterBackLink />

        <header className="chapter-hero">
          <h1>Account recovery and team administration</h1>
          <div className="chapter-synopsis">
            <p>Account recovery and team deletion are different journeys, but both become risky when the interface hides the consequence or leaves the ending ambiguous.</p>
            <p>As the UX writer for the selected recovery and administration states, I worked on the interface copy for recovering access after multi-factor authentication fails and for deleting users from a team subscription.</p>
            <p>The writing separates retry from recovery, explains what a reset or deletion changes, and ends on a state the customer or administrator can verify.</p>
          </div>
        </header>

        <section className="chapter-section" id="account-security">
          <h2 className="chapter-heading">Separate an incorrect code from lost access</h2>
          <div className="chapter-blocks">
            <div className="chapter-prose">
              <p>The first state asks for a six-digit code and keeps recovery code and recovery email routes visible. The error state names the incorrect code, invites a retry, and offers a recovery email or administrator support.</p>
            </div>
            <div className="chapter-media">
              <ImageComparison
                ariaLabel="Authentication code and incorrect-code states"
                chrome="overlay"
                dialogPresentation="minimal"
                dialogSizes="1440px"
                items={[
                  { label: "Enter the code", image: authenticationStates[0] },
                  { label: "Incorrect code", image: authenticationStates[1] },
                ]}
                sizes="(max-width: 928px) calc(100vw - 48px), 880px"
              />
            </div>
          </div>
        </section>

        {recoverySections.map((section) => (
          <section className="chapter-section" id={section.id} key={section.id}>
            <h2 className="chapter-heading">{section.title}</h2>
            <div className="chapter-blocks">
              <div className="chapter-prose">
                <p>{section.text}</p>
              </div>
              <ChapterFigure image={section.image} />
            </div>
          </section>
        ))}

        <section className="chapter-closing" id="verifiable-ending">
          <h2 className="chapter-heading chapter-heading--closing">Make the system say what changed</h2>
          <div className="chapter-prose">
            <p>Recovery ends with an Active status after setup, giving the account owner a visible security state to check.</p>
            <p>Bulk deletion ends with both a success toast and zero matching users in the filtered table, giving the administrator two signals that the selected action completed.</p>
          </div>
        </section>

        <nav className="next-project" aria-label="Next project">
          <span>Next project</span>
          <Link href="/work/report-campaign">
            Turning localization research into a multi-format campaign
            <b aria-hidden="true">→</b>
          </Link>
        </nav>
      </article>
    </main>
  );
}
