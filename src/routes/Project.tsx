import type { CSSProperties } from "react";
import { Navigate, useParams } from "react-router-dom";
import { projects } from "../data/content";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Reveal } from "../components/motion/Reveal";
import { TransitionLink } from "../components/motion/TransitionLink";

export function Project() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const imageStyle: CSSProperties = {
    viewTransitionName: `project-cover-${project.slug}`,
  };

  return (
    <article className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-(--content-max)">
        <TransitionLink
          to="/#work"
          className="font-outlier text-muted hover:text-ink mb-10 inline-block text-xs tracking-[0.1em] uppercase transition-colors duration-(--dur-micro)"
        >
          ← Back to work
        </TransitionLink>

        <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] sm:items-end">
          <div className="font-outlier text-muted flex gap-4 text-xs">
            {project.year && <span>{project.year}</span>}
            {project.role && <span>{project.role}</span>}
          </div>
          <h1 className="font-display text-3xl sm:text-4xl">{project.title}</h1>
        </div>

        {project.tags.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="border-rule text-muted font-outlier hover:border-accent/60 hover:text-accent rounded-full border px-3 py-1 text-xs transition-colors duration-(--dur-short)"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {project.coverImage && (
          <div className="bg-paper-2 mt-12 aspect-16/9 overflow-hidden rounded-(--radius-md)">
            <img
              src={project.coverImage}
              alt=""
              style={imageStyle}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="mt-16 grid gap-14 sm:grid-cols-3">
          {project.problem && (
            <Reveal index={0}>
              <Eyebrow>Problem</Eyebrow>
              <p className="text-ink text-sm">{project.problem}</p>
            </Reveal>
          )}
          {project.approach && (
            <Reveal index={1}>
              <Eyebrow>Approach</Eyebrow>
              <p className="text-ink text-sm">{project.approach}</p>
            </Reveal>
          )}
          {project.outcome && (
            <Reveal index={2}>
              <Eyebrow>Outcome</Eyebrow>
              <p className="text-ink text-sm">{project.outcome}</p>
            </Reveal>
          )}
        </div>

        {project.metrics && project.metrics.length > 0 && (
          <div className="border-rule/60 mt-16 grid gap-8 border-t pt-10 sm:grid-cols-4">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-outlier text-accent text-2xl">{metric.value}</p>
                <p className="text-muted mt-1 text-xs">{metric.label}</p>
              </div>
            ))}
          </div>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {project.gallery.map((src) => (
              <div
                key={src}
                className="bg-paper-2 aspect-4/3 overflow-hidden rounded-(--radius-md)"
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        )}

        {project.links && project.links.length > 0 && (
          <div className="mt-16 flex flex-wrap gap-6">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-ink hover:text-accent border-rule/60 hover:border-accent border-b pb-0.5 text-sm transition-colors duration-(--dur-micro)"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
