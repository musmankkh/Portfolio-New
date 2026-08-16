import { projects, workSection } from "../../data/portfolio";
import { Eyebrow } from "../ui/Eyebrow";
import { GlowCard } from "../ui/GlowCard";
import { Reveal } from "../motion/Reveal";
import { PipelineDiagram } from "../ui/PipelineDiagram";
import { ProjectCard } from "./ProjectCard";

function WorkInProgress() {
  return (
    <Reveal>
      <GlowCard lift={false} spotlight={false}>
        <div className="flex flex-col items-center gap-8 py-16 text-center">
          <PipelineDiagram className="max-w-xl px-6" />
          <div className="px-6">
            <p className="font-display text-xl">Case studies in progress.</p>
            <p className="text-muted mx-auto mt-2 max-w-md text-sm">
              The pipelines above are running — the write-ups aren't published yet.
            </p>
            <a
              href="#contact"
              className="border-accent text-accent hover:bg-accent hover:text-paper mt-6 inline-block rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-(--dur-short)"
            >
              Ask me about the work
            </a>
          </div>
        </div>
      </GlowCard>
    </Reveal>
  );
}

export function Work() {
  return (
    <section id="work" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-(--content-max)">
        <Eyebrow>Selected Work</Eyebrow>
        <h2 className="font-display text-3xl">{workSection.heading}</h2>
        <p className="text-muted mt-4 max-w-(--measure) text-sm">{workSection.supporting}</p>

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
