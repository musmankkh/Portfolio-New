import { projects } from "../../data/content";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../motion/Reveal";
import { PipelineDiagram } from "../ui/PipelineDiagram";
import { ProjectCard } from "./ProjectCard";

function WorkInProgress() {
  return (
    <Reveal>
      <div className="border-rule/60 flex flex-col items-center gap-8 border py-16 text-center">
        <PipelineDiagram className="max-w-xl px-6" />
        <div>
          <p className="font-display text-xl">Case studies in progress.</p>
          <p className="text-muted mt-2 max-w-(--measure) text-sm">
            The pipelines above are running — the write-ups aren't published
            yet. Check back soon, or reach out directly in the meantime.
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export function Work() {
  return (
    <section id="work" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-(--content-max)">
        <Eyebrow>Selected Work</Eyebrow>
        <h2 className="font-display text-3xl">Things I've built.</h2>

        <div className="mt-14">
          {projects.length === 0 ? (
            <WorkInProgress />
          ) : (
            <div className="flex flex-col gap-10">
              {projects.map((project, index) => (
                <Reveal key={project.slug} index={index}>
                  <ProjectCard project={project} index={index} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
