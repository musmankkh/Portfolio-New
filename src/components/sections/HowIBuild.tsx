import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { howIBuild, processSteps } from "../../data/portfolio";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../motion/Reveal";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function HowIBuild() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (processSteps.length === 0) return null;

  return (
    <section className="border-rule/60 border-t px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-(--content-max)">
        <Eyebrow>How I Build</Eyebrow>
        <h2 className="font-display max-w-4xl text-3xl text-balance">{howIBuild.heading}</h2>

        <ol ref={listRef} className="relative mt-16 flex flex-col gap-10 sm:pl-16">
          <div
            className="border-rule/60 absolute top-2 bottom-2 left-3 hidden w-px border-l sm:block"
            aria-hidden="true"
          >
            <motion.div
              style={{ scaleY: reduced ? 1 : lineScale }}
              className="bg-accent h-full w-px origin-top"
            />
          </div>

          {processSteps.map((step, index) => (
            <Reveal key={step.index} index={index}>
              <li className="relative grid gap-2 sm:grid-cols-[minmax(0,auto)_minmax(0,1fr)] sm:items-baseline sm:gap-6">
                <span
                  className="border-accent bg-paper text-accent font-outlier absolute -left-16 hidden h-6 w-6 items-center justify-center rounded-full border text-[10px] sm:flex"
                  aria-hidden="true"
                >
                  {step.index}
                </span>
                <span className="font-outlier text-accent text-xs sm:hidden">{step.index}</span>
                <h3 className="font-display text-xl">{step.title}</h3>
                <div className="sm:col-start-2">
                  <p className="text-muted font-outlier text-xs tracking-[0.08em] uppercase">
                    {step.label}
                  </p>
                  <p className="text-ink mt-1.5 max-w-(--measure) text-sm">{step.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
