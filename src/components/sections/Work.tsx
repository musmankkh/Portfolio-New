import { projects } from "../../data/content";
import { Eyebrow } from "../ui/Eyebrow";
import { EmptyState } from "../ui/EmptyState";
import { Reveal } from "../motion/Reveal";
import { ProjectCard } from "./ProjectCard";

export function Work() {
  return (
    <section id="work" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-(--content-max)">
        <Eyebrow>Selected Work</Eyebrow>
        <h2 className="font-display text-3xl">Things I've built.</h2>

        <div className="mt-14">
          {projects.length === 0 ? (
            <EmptyState>
              Add projects to the `projects` array in src/data/content.ts —
              title, summary, tags, and optionally a cover image and case
              study details. Each one renders here and gets its own
              /work/:slug page automatically.
            </EmptyState>
          ) : (
            <div className="flex flex-col gap-10">
              {projects.map((project, index) => (
                <Reveal key={project.slug} index={index}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
