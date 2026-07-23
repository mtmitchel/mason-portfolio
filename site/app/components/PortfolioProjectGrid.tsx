import Image from "next/image";
import Link from "next/link";
import type { PortfolioCard } from "../work/portfolioTypes";

export default function PortfolioProjectGrid({ projects }: { projects: PortfolioCard[] }) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <article className="project-entry" key={project.href}>
          <Link className="project-card" href={project.href} aria-label={`Read ${project.title}`}>
            <div className="project-entry-heading">
              <h3>{project.title}</h3>
              <p>{project.meta}</p>
            </div>
            <div className="project-entry-image">
              {project.previewImages ? (
                <div className="project-entry-montage" aria-hidden="true">
                  {project.previewImages.map((image) => (
                    <div className="project-entry-montage-frame" key={image.src}>
                      <Image
                        src={image.src}
                        alt=""
                        width={image.width}
                        height={image.height}
                        sizes="(max-width: 600px) 100vw, (max-width: 820px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  sizes="(max-width: 600px) 100vw, (max-width: 820px) 50vw, 33vw"
                />
              )}
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
