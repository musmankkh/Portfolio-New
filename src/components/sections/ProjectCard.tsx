import type { CSSProperties } from "react";
import type { Project } from "../../data/types";
import { TransitionLink } from "../motion/TransitionLink";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const imageStyle: CSSProperties = {
    viewTransitionName: `project-cover-${project.slug}`,
  };

  return (
    <TransitionLink
      to={`/work/${project.slug}`}
      className="group border-rule/60 hover:border-accent/60 block border-t pt-6 transition-colors duration-(--dur-short)"
    >
      <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:items-start">
        <div className="text-muted font-outlier flex items-center gap-4 text-xs">
          <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
          {project.year && <span>{project.year}</span>}
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div>
          <h3 className="font-display text-ink group-hover:text-accent text-xl transition-colors duration-(--dur-short)">
            {project.title}
          </h3>
          <p className="text-muted mt-2 max-w-(--measure) text-sm">
            {project.summary}
          </p>
        </div>
      </div>

      {project.coverImage && (
        <div className="bg-paper-2 mt-6 aspect-16/9 overflow-hidden rounded-(--radius-md)">
          <img
            src={project.coverImage}
            alt=""
            style={imageStyle}
            className="h-full w-full object-cover transition-transform duration-500 ease-(--ease-out) group-hover:scale-[1.02]"
          />
        </div>
      )}
    </TransitionLink>
  );
}
