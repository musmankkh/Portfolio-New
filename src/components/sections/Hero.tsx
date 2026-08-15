import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { profile } from "../../data/content";
import { Eyebrow } from "../ui/Eyebrow";
import { EmptyState } from "../ui/EmptyState";
import { PipelineDiagram } from "../ui/PipelineDiagram";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const markY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 48]);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduced ? 0 : 0.09, delayChildren: reduced ? 0 : 0.05 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0.001 : 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={ref}
      className="relative flex min-h-[86dvh] flex-col justify-center overflow-hidden px-6 sm:px-10"
    >
      <motion.div
        style={{ y: markY }}
        aria-hidden="true"
        className="pointer-events-none absolute top-28 right-6 hidden w-72 opacity-80 sm:block lg:right-16 lg:w-96"
      >
        <PipelineDiagram />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="mx-auto w-full max-w-(--content-max)"
      >
        <motion.div variants={item}>
          <Eyebrow>{profile.role || "Role — pending"}</Eyebrow>
        </motion.div>

        <motion.h1 variants={item} className="font-display text-display max-w-4xl text-balance">
          {profile.name || "Your Name"}
        </motion.h1>

        {profile.tagline ? (
          <motion.p
            variants={item}
            className="text-muted font-body mt-6 max-w-(--measure) text-lg"
          >
            {profile.tagline}
          </motion.p>
        ) : (
          <motion.div variants={item} className="mt-6">
            <EmptyState>
              Add profile.tagline in src/data/content.ts — one sentence on what you do and why it matters.
            </EmptyState>
          </motion.div>
        )}

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <motion.a
            href="#work"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="border-accent text-accent hover:bg-accent hover:text-paper rounded-full border px-6 py-3 text-sm font-medium transition-colors duration-(--dur-short)"
          >
            View my work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-ink hover:text-accent border-rule/60 hover:border-accent flex items-center gap-2 border-b pb-1 text-sm font-medium transition-colors duration-(--dur-short)"
          >
            Get in touch
            <span aria-hidden="true">→</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
