import Image from "next/image";
import Link from "next/link";
import type { CandidateStory } from "../work/DeepLProjectCase";
import { homepageProjects as defaultProjects } from "../work/deeplProjectData";

export default function DeepLProjectGrid({ projects = defaultProjects }: { projects?: CandidateStory[] }) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <article className="project-entry" key={project.href}>
          <Link className="project-card" href={project.href} aria-label={`Read ${project.cardTitle}`}>
            <div className="project-entry-heading">
              <h2>{project.cardTitle}</h2>
              <p>{project.context}</p>
            </div>
            <div className="project-entry-image">
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                width={project.cover.width}
                height={project.cover.height}
                sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 320px"
              />
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
