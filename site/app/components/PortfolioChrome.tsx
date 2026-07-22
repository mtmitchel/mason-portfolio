import Link from "next/link";
import type { ReactNode } from "react";

export function SiteHeader({ summary }: { summary?: string }) {
  return (
    <header className="site-header">
      <div className="site-identity">
        <Link className="site-name" href="/">
          Mason Mitchel
        </Link>
        {summary && <p>{summary}</p>}
      </div>
      <nav aria-label="Primary navigation">
        <Link href="/#work">Work</Link>
        <Link href="/#about">About</Link>
        <a href="/mason-cv.pdf" target="_blank" rel="noreferrer">
          Résumé
        </a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a href="mailto:mtmitchel@gmail.com">mtmitchel@gmail.com</a>
      <a href="https://www.linkedin.com/in/mtmitchel" target="_blank" rel="noreferrer">
        LinkedIn
      </a>
    </footer>
  );
}

type CaseIntroProps = {
  children: ReactNode;
  context: string;
  summary: string;
  title: string;
};

export function CaseIntro({ children, context, summary, title }: CaseIntroProps) {
  return (
    <>
      <Link className="back-link" href="/">
        Back to selected work
      </Link>
      <header className="case-intro">
        <p className="case-context">{context}</p>
        <h1>{title}</h1>
        <p className="case-summary">{summary}</p>
      </header>
      {children}
    </>
  );
}

type HistoricalNoteProps = {
  year?: string;
};

export function HistoricalNote({ year }: HistoricalNoteProps = {}) {
  return (
    <aside className="historical-note">
      Historical product record{year ? `, ${year}` : ""}. These screens reflect DeepL when the work was completed; the interface has since evolved.
    </aside>
  );
}

type NextCaseProps = {
  href: string;
  label: string;
};

export function NextCase({ href, label }: NextCaseProps) {
  return (
    <footer className="next-case">
      <span>Next case study</span>
      <Link href={href}>{label}</Link>
    </footer>
  );
}
