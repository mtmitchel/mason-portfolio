import type { Metadata } from "next";
import { redirect } from "next/navigation";
import {
  CaseIntro,
  HistoricalNote,
  NextCase,
  SiteHeader,
} from "../../components/PortfolioChrome";

export const metadata: Metadata = {
  title: "UX copy examples — Mason Mitchel",
  description: "Three focused DeepL examples covering limits, administration and upgrade moments.",
};

export default function UxCopyCollection() {
  redirect("/writing");

  return (
    <main className="site-shell case-shell">
      <SiteHeader />
      <article className="case-article">
        <CaseIntro
          context="DeepL · Focused UX copy examples"
          title="Designing clear copy for limits, administration and upgrade moments"
          summary="These smaller examples show how I approached constrained interface moments where people needed a clear explanation and a useful next step."
        >
          <HistoricalNote />
        </CaseIntro>

        <section className="case-section mini-case" id="bulk-translation-limits">
          <p className="mini-case-context">Bulk translation limits</p>
          <h2>Making a technical limit understandable</h2>
          <p>
            A document limit is not just a number. People need to understand whether the limit
            applies to one upload, a recurring allowance or the team as a whole—and what they
            can do when they reach it.
          </p>
          <dl className="mini-case-details">
            <div>
              <dt>Constraint</dt>
              <dd>The explanation had to stay useful beside compact plan and administration controls.</dd>
            </div>
            <div>
              <dt>Copy decision</dt>
              <dd>Name the unit and scope near the value, then keep the recovery action separate from the explanation.</dd>
            </div>
          </dl>
          <div className="mini-visual" aria-label="Reconstructed content model for a translation limit">
            <p>Content model reconstructed from the historical product frame.</p>
            <div className="mini-visual-sequence">
              <div><span>Allowance</span><strong>Name the number and unit</strong></div>
              <div><span>Scope</span><strong>Per license, team or billing period</strong></div>
              <div><span>Recovery</span><strong>Explain the available next action</strong></div>
            </div>
          </div>
          <p className="mini-reflection">
            The frame establishes the context and content hierarchy. It does not provide evidence
            of a measured reduction in limit-related errors or support contacts.
          </p>
        </section>

        <section className="case-section mini-case" id="team-administration">
          <p className="mini-case-context">Team administration at scale</p>
          <h2>Helping admins predict the effect of an action</h2>
          <p>
            Administrative copy must stay brief without hiding scope. Inviting people, managing
            access and changing team-wide settings can affect more than the person clicking the control.
          </p>
          <dl className="mini-case-details">
            <div>
              <dt>Constraint</dt>
              <dd>Related actions appear in one dense settings area, but they affect different audiences and timeframes.</dd>
            </div>
            <div>
              <dt>Copy decision</dt>
              <dd>Use specific action labels, name who is affected and place irreversible consequences before confirmation.</dd>
            </div>
          </dl>
          <div className="mini-visual" aria-label="Reconstructed content model for an administrative action">
            <p>Content model reconstructed from the historical administration explorations.</p>
            <div className="mini-visual-sequence">
              <div><span>Action</span><strong>Use a specific verb</strong></div>
              <div><span>Audience</span><strong>Name who is affected</strong></div>
              <div><span>Consequence</span><strong>Put the effect before confirmation</strong></div>
            </div>
          </div>
          <p className="mini-reflection">
            The source frames show the breadth of the administration surface. They do not
            establish a measured outcome for this example.
          </p>
        </section>

        <section className="case-section mini-case" id="write-pro-hard-block">
          <p className="mini-case-context">DeepL Write Pro hard block</p>
          <h2>Explaining why work cannot continue</h2>
          <p>
            A hard block interrupts somebody at the moment they want to keep working. The copy
            has to explain the condition without sounding punitive, distinguish what is unavailable
            from what still works and offer a relevant path forward.
          </p>
          <dl className="mini-case-details">
            <div>
              <dt>Constraint</dt>
              <dd>The message had to support a commercial upgrade without disguising the product limitation.</dd>
            </div>
            <div>
              <dt>Copy decision</dt>
              <dd>Lead with the current state, explain the consequence, then present the next available action.</dd>
            </div>
          </dl>
          <div className="content-reconstruction" aria-label="Reconstructed content structure for a hard block">
            <p>Content structure reconstructed from the historical exploration—not a shipped screen.</p>
            <div className="content-pattern">
              <div><span>What happened</span><strong>State the limit</strong></div>
              <div><span>What is affected</span><strong>Explain what pauses and what stays available</strong></div>
              <div><span>What comes next</span><strong>Offer the relevant plan or reset path</strong></div>
            </div>
          </div>
          <p className="mini-reflection">
            This example demonstrates the content sequence, not a claim that the reconstructed
            wording shipped or produced a measured upgrade result.
          </p>
        </section>

        <NextCase href="/work/checkout" label="Subscription checkout" />
      </article>
    </main>
  );
}
