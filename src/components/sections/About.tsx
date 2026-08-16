import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { about, experience, profile } from "../../data/portfolio";
import { Eyebrow } from "../ui/Eyebrow";
import { GlowCard } from "../ui/GlowCard";
import { Reveal } from "../motion/Reveal";
import { StaggerContainer, StaggerItem } from "../motion/Stagger";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function About() {
  const [expanded, setExpanded] = useState(false);
  const reduced = useReducedMotion();
  const current = experience[0];

  return (
    <section id="about" className="border-rule/60 relative border-t px-6 py-24 sm:px-10 sm:py-32">
      <div className="grid-field pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-(--content-max)">
        <Reveal>
          <Eyebrow>About</Eyebrow>
          <h2 className="font-display max-w-4xl text-2xl text-balance sm:text-3xl">
            {about.heading}
          </h2>
        </Reveal>

        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-6">
          {/* Lead + progressive disclosure */}
          <StaggerItem className="sm:col-span-4">
            <GlowCard ghost="01" spotlight={false}>
              <div className="p-8 sm:p-10">
                <p className="text-ink max-w-(--measure) text-lg leading-relaxed text-balance sm:text-xl">
                  {about.lead}
                </p>

                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      key="detail"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduced ? 0.001 : 0.42, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-4 pt-6">
                        {about.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph.slice(0, 24)}
                            className="text-muted max-w-(--measure) text-sm"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setExpanded((value) => !value)}
                  className="group text-accent font-outlier mt-6 flex items-center gap-2 text-xs tracking-[0.08em] uppercase"
                >
                  {expanded ? "Less" : "More about how I work"}
                  <motion.span
                    aria-hidden="true"
                    animate={{ rotate: expanded ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block"
                  >
                    ↓
                  </motion.span>
                </button>
              </div>
            </GlowCard>
          </StaggerItem>

          {/* Approach rail */}
          <StaggerItem className="sm:col-span-2 sm:row-span-2">
            <GlowCard>
              <div className="p-8">
                <p className="text-muted font-outlier mb-6 text-xs tracking-[0.08em] uppercase">
                  My approach
                </p>
                <ol className="flex flex-col gap-4">
                  {about.approach.split("→").map((step, index, arr) => (
                    <li key={step} className="group/step relative flex items-start gap-3">
                      <span className="border-accent/40 text-accent font-outlier bg-paper mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px]">
                        {index + 1}
                      </span>
                      <span className="font-display text-ink text-base leading-snug">
                        {step.trim().replace(/\.$/, "")}
                      </span>
                      {index < arr.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="bg-rule/60 absolute top-6 left-2.5 h-4 w-px"
                        />
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </GlowCard>
          </StaggerItem>

          {/* Now / Based-in tiles */}
          {current && (
            <StaggerItem className="sm:col-span-2">
              <GlowCard>
                <div className="p-8">
                  <p className="text-muted font-outlier flex items-center gap-2 text-xs tracking-[0.08em] uppercase">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="bg-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
                      <span className="bg-accent relative inline-flex h-1.5 w-1.5 rounded-full" />
                    </span>
                    Now
                  </p>
                  <p className="font-display text-ink mt-3 text-lg leading-snug">{current.role}</p>
                  <p className="text-muted mt-1 text-sm">{current.organization}</p>
                </div>
              </GlowCard>
            </StaggerItem>
          )}

          <StaggerItem className="sm:col-span-2">
            <GlowCard>
              <div className="p-8">
                <p className="text-muted font-outlier text-xs tracking-[0.08em] uppercase">
                  Based in
                </p>
                <p className="font-display text-ink mt-3 text-lg leading-snug">
                  {profile.location || "—"}
                </p>
                <p className="text-muted mt-1 text-sm">{profile.role}</p>
              </div>
            </GlowCard>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
