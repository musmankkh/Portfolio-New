import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { profile } from "../../data/content";
import { Eyebrow } from "../ui/Eyebrow";
import { EmptyState } from "../ui/EmptyState";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const markY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 48]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[86dvh] flex-col justify-center overflow-hidden px-6 sm:px-10"
    >
      <motion.div
        style={{ y: markY }}
        aria-hidden="true"
        className="border-rule/70 pointer-events-none absolute top-24 right-6 hidden h-64 w-64 rounded-full border sm:block lg:right-24"
      />

      <div className="mx-auto w-full max-w-(--content-max)">
        <Eyebrow>{profile.role || "Role — pending"}</Eyebrow>

        <h1 className="font-display text-display max-w-4xl text-balance">
          {profile.name || "Your Name"}
        </h1>

        {profile.tagline ? (
          <p className="text-muted font-body mt-6 max-w-(--measure) text-lg">
            {profile.tagline}
          </p>
        ) : (
          <div className="mt-6">
            <EmptyState>
              Add profile.tagline in src/data/content.ts — one sentence on what you do and why it matters.
            </EmptyState>
          </div>
        )}
      </div>
    </section>
  );
}
