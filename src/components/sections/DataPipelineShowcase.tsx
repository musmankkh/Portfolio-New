import { dataPipelineShowcase } from "../../data/portfolio";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../motion/Reveal";
import { PipelineDiagram } from "../ui/PipelineDiagram";

export function DataPipelineShowcase() {
  return (
    <section className="border-rule/60 border-t px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-(--content-max)">
        <Reveal>
          <Eyebrow>The Data Lifecycle</Eyebrow>
          <h2 className="font-display max-w-4xl text-3xl text-balance">
            {dataPipelineShowcase.heading}
          </h2>
        </Reveal>

        <Reveal index={1}>
          <div className="border-rule/60 mt-14 overflow-x-auto border p-8 sm:p-12">
            <PipelineDiagram stages={dataPipelineShowcase.stages} className="min-w-[640px]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
