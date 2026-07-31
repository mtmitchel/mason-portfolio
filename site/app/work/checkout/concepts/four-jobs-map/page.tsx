import type { Metadata } from "next";
import { ConceptShell } from "../_shared/checkoutConceptData";

export const metadata: Metadata = {
  title: "Four jobs map — checkout concept — Mason Mitchel",
  description: "A four-job map for the DeepL checkout case.",
  robots: { index: false, follow: false },
};

const jobs = [
  ["Price and trial", "Changed form", "Two financial moments needed a hierarchy, not a pasted block."],
  ["Plan features", "Moved", "The selected plan’s value needed to remain beside its price."],
  ["Consent and final action", "Rewritten", "Starting a trial changed both the consent construction and the action label."],
  ["Lines Details already showed", "Removed", "Only genuine repetition could disappear with the checkpoint."],
] as const;

export default function FourJobsMapPage() {
  return (
    <ConceptShell active="four-jobs-map">
      <header className="concept-intro">
        <h1>Four jobs map</h1>
        <p>The removed Review step became four different content jobs inside DeepL’s shorter checkout.</p>
      </header>
      <figure className="jobs-figure">
        <div className="jobs-flow" aria-label="Checkout changed from three steps to two">
          <ol>
            <li>Account</li>
            <li>Details</li>
            <li className="jobs-flow__removed"><span>Review</span><small>Removed</small></li>
          </ol>
          <span className="jobs-flow__arrow" aria-hidden="true">→</span>
          <ol>
            <li>Account</li>
            <li>Details</li>
          </ol>
        </div>
        <figcaption>Removing Review eliminated a checkpoint, not the decisions it supported.</figcaption>
      </figure>
      <table className="jobs-table">
        <caption>What happened to each job</caption>
        <thead>
          <tr><th scope="col">Job</th><th scope="col">Treatment</th><th scope="col">Why it couldn’t be pasted forward</th></tr>
        </thead>
        <tbody>
          {jobs.map(([job, treatment, reason]) => (
            <tr key={job}><th scope="row">{job}</th><td>{treatment}</td><td>{reason}</td></tr>
          ))}
        </tbody>
      </table>
    </ConceptShell>
  );
}
