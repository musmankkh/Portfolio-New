import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { howIBuild, processSteps } from "../../data/portfolio";
import { Eyebrow } from "../ui/Eyebrow";
import { GlowCard } from "../ui/GlowCard";
import { Reveal } from "../motion/Reveal";
import { StaggerContainer, StaggerItem } from "../motion/Stagger";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function HowIBuild() {
  const gridRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start 0.85", "end 0.5"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (processSteps.length === 0) return null;

  return (
    <section className="border-rule/60 relative border-t px-6 py-24 sm:px-10 sm:py-32">
      <div className="grid-field pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-(--content-max)">
        <Reveal>
          <Eyebrow>How I Build</Eyebrow>
          <h2 className="font-display max-w-4xl text-3xl text-balance">{howIBuild.heading}</h2>
        </Reveal>

        {/* Scroll-drawn spine tying the stages together */}
        <div ref={gridRef} className="relative mt-14">
          <div
            className="bg-rule/50 absolute top-0 right-0 left-0 hidden h-px lg:block"
            aria-hidden="true"
          >
            <motion.div
              style={{ scaleX: reduced ? 1 : lineScale }}
              className="bg-accent h-px w-full origin-left"
            />
          </div>

          <StaggerContainer
            staggerDelay={0.07}
            className="grid gap-4 pt-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {processSteps.map((step) => (
              <StaggerItem key={step.index} className="h-full">
                <GlowCard ghost={step.index}>
                  <div className="flex h-full flex-col p-7">
                    <div className="flex items-center gap-3">
                      <span className="border-accent/40 text-accent font-outlier bg-paper group-hover:shadow-(--glow-accent) flex h-7 w-7 items-center justify-center rounded-full border text-[11px] transition-shadow duration-(--dur-long)">
                        {step.index}
                      </span>
                      <p className="text-muted font-outlier text-[11px] tracking-[0.1em] uppercase">
                        {step.label}
                      </p>
                    </div>

                    <h3 className="font-display group-hover:text-accent mt-5 text-xl transition-colors duration-(--dur-short)">
                      {step.title}
                    </h3>
                    <p className="text-muted mt-2 max-w-(--measure) text-sm">
                      {step.description}
                    </p>
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
