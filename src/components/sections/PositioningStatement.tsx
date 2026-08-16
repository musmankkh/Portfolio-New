import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { positioningStatement } from "../../data/portfolio";
import { TextReveal } from "../motion/TextReveal";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function PositioningStatement() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], ["25%", "-25%"]);

  if (!positioningStatement) return null;

  return (
    <section
      ref={ref}
      className="border-rule/60 relative overflow-hidden border-t px-6 py-28 sm:px-10 sm:py-36"
    >
      {/* Scroll-linked accent bloom drifting behind the statement. */}
      {!reduced && (
        <motion.div
          aria-hidden="true"
          style={{ y: glowY }}
          className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-[26rem] max-w-[48rem] -translate-y-1/2 rounded-full opacity-[0.13] blur-[110px]"
        >
          <div className="from-accent to-accent-strong h-full w-full bg-gradient-to-br" />
        </motion.div>
      )}

      <div className="relative mx-auto max-w-(--content-max)">
        <span
          aria-hidden="true"
          className="font-display text-accent/25 block text-6xl leading-none"
        >
          &ldquo;
        </span>
        <TextReveal
          text={positioningStatement}
          className="font-display mt-2 max-w-5xl text-2xl text-balance sm:text-4xl"
        />
      </div>
    </section>
  );
}
