import Link from "next/link";
import ImageComparison from "../../components/ImageComparison";
import ImageLightbox from "../../components/ImageLightbox";
import { SiteFooter, SiteHeader } from "../../components/PortfolioChrome";
import { authenticationStates, recoverySections } from "./accountTeamSecurityData";

export default function AccountTeamSecurityCase() {
  return (
    <main className="site-shell case-shell">
      <SiteHeader />
      <article className="story-page">
        <Link className="back-link" href="/">Back to selected work</Link>

        <header className="story-hero">
          <p className="story-context">DeepL · Account recovery and team administration</p>
          <h1>Account recovery and team administration</h1>
          <p className="story-hook">
            I worked on the interface copy for two journeys: recovering access after
            multi-factor authentication fails and deleting users from a team subscription.
          </p>
        </header>

        <section className="story-evidence" id="account-security">
          <div className="story-section-heading">
            <p>Account recovery</p>
            <h2>Separate an incorrect code from lost access</h2>
          </div>
          <div className="story-copy">
            <p>
              The first state asks for a six-digit code and keeps recovery code and recovery
              email routes visible. The error state names the incorrect code, invites a retry,
              and offers a recovery email or administrator support.
            </p>
          </div>
          <ImageComparison
            ariaLabel="Authentication code and incorrect-code states"
            items={[
              { label: "Enter the code", image: authenticationStates[0] },
              { label: "Incorrect code", image: authenticationStates[1] },
            ]}
          />
        </section>

        {recoverySections.map((section, index) => (
          <section className="story-evidence" id={section.id} key={section.id}>
            <div className="story-section-heading">
              <p>{index < 2 ? "Account recovery" : "Team administration"}</p>
              <h2>{section.title}</h2>
            </div>
            <div className="story-copy">
              <p>{section.text}</p>
            </div>
            <div className="story-evidence-grid">
              <ImageLightbox
                label={section.image.label}
                previewSrc={section.image.src}
                width={section.image.width}
                height={section.image.height}
                alt={section.image.alt}
                caption={section.image.caption}
              />
            </div>
          </section>
        ))}

        <nav className="next-project" aria-label="Next project">
          <span>Next project</span>
          <Link href="/work/report-campaign">
            Turning localization research into a multi-format campaign
            <b aria-hidden="true">→</b>
          </Link>
        </nav>
      </article>
      <SiteFooter />
    </main>
  );
}
