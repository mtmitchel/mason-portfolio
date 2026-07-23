import Link from "next/link";

export function SiteHeader({ homeHeading = false, summary }: { homeHeading?: boolean; summary?: string }) {
  return (
    <header className="site-header">
      <div className="site-identity">
        {homeHeading ? (
          <h1 className="site-name"><Link href="/">Mason Mitchel</Link></h1>
        ) : (
          <Link className="site-name" href="/">Mason Mitchel</Link>
        )}
        {summary && <p>{summary}</p>}
      </div>
      <nav aria-label="Primary navigation">
        <Link href={homeHeading ? "#work" : "/#work"}>Work</Link>
        <Link href={homeHeading ? "#about" : "/#about"}>About</Link>
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
