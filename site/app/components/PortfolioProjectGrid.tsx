import Image from "next/image";
import Link from "next/link";
import type { PortfolioCard } from "../work/portfolioTypes";
import LoopingCardVideo from "./LoopingCardVideo";

export default function PortfolioProjectGrid({ projects }: { projects: PortfolioCard[] }) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <article className="project-entry" key={project.href}>
          <Link className="project-card" href={project.href} aria-label={`Read ${project.title}`}>
            <div
              className={[
                "project-entry-image",
                project.imageDisplay === "full-document"
                  ? "project-entry-image--full-document"
                  : "",
              ].filter(Boolean).join(" ")}
            >
              {project.textPreview ? (
                <div className="project-entry-text-preview">
                  <p>{project.textPreview.label}</p>
                  <strong>{project.textPreview.primary}</strong>
                  <span>{project.textPreview.alternative}</span>
                </div>
              ) : project.video ? (
                <LoopingCardVideo {...project.video} />
              ) : project.image ? (
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  sizes="(max-width: 600px) 100vw, (max-width: 820px) 50vw, 33vw"
                />
              ) : null}
            </div>
            <div className="project-entry-heading">
              <h3>{project.title}</h3>
              <p>{project.meta}</p>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
