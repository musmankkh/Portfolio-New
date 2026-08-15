import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { heroKeywords, profile } from "../../data/portfolio";
import { Magnetic } from "../motion/Magnetic";
import { useReducedMotion } from "../../hooks/useReducedMotion";

// Three.js/R3F is a heavy dependency — keep it out of the main bundle entirely.
const DataNetworkCanvas = lazy(() =>
  import("../3d/DataNetworkCanvas").then((m) => ({ default: m.DataNetworkCanvas })),
);

/** Vertical word-swap: one keyword at a time rides in as the previous rides out. */
function RotatingKeyword() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced || heroKeywords.length < 2) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % heroKeywords.length);
    }, 2400);
    return () => clearInterval(id);
  }, [reduced]);

  if (reduced) {
    return <span className="font-display text-accent text-base">{heroKeywords[0]}</span>;
  }

  return (
    <span className="relative block h-6 flex-1 overflow-hidden">
      {heroKeywords.map((word, i) => (
        <motion.span
          key={word}
          className="font-display text-accent absolute left-0 text-base whitespace-nowrap"
          initial={false}
          animate={index === i ? { y: 0, opacity: 1 } : { y: index > i ? -26 : 26, opacity: 0 }}
          transition={{ type: "spring", stiffness: 90, damping: 16 }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

function splitHeadline(text: string) {
  const commaIndex = text.indexOf(",");
  if (commaIndex === -1) return { lead: text, emphasis: "" };
  return {
    lead: text.slice(0, commaIndex + 1),
    emphasis: text.slice(commaIndex + 1).trim(),
  };
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 40]);
  const { lead, emphasis } = splitHeadline(profile.tagline);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduced ? 0 : 0.1, delayChildren: reduced ? 0 : 0.05 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0.001 : 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={ref}
      className="relative flex min-h-[92dvh] flex-col justify-center overflow-hidden px-6 sm:px-10"
    >
      {!reduced && (
        <Suspense fallback={null}>
          <DataNetworkCanvas className="absolute inset-0 -z-10" />
        </Suspense>
      )}

      <motion.div
        style={{ y: contentY }}
        initial="hidden"
        animate="visible"
        variants={container}
        className="mx-auto w-full max-w-(--content-max)"
      >
        {profile.microLine && (
          <motion.div
            variants={item}
            className="border-rule/60 bg-paper/60 text-muted mb-8 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-xs backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="bg-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
              <span className="bg-accent relative inline-flex h-1.5 w-1.5 rounded-full" />
            </span>
            {profile.microLine}
          </motion.div>
        )}

        <motion.h1
          variants={item}
          className="font-display text-display-s max-w-4xl text-balance"
        >
          {lead}
          {emphasis && (
            <>
              <br />
              <span className="text-accent">{emphasis}</span>
            </>
          )}
        </motion.h1>

        <motion.p
          variants={item}
          className="text-muted font-body mt-6 max-w-(--measure) text-lg"
        >
          {profile.subheadline}
        </motion.p>

        {/* Decorative reinforcement — the subheadline above already states this in prose. */}
        <motion.div
          variants={item}
          aria-hidden="true"
          className="mt-7 flex max-w-sm items-center gap-3"
        >
          <span className="font-outlier text-muted shrink-0 text-xs tracking-[0.1em] uppercase">
            Building
          </span>
          <RotatingKeyword />
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <Magnetic strength={8}>
            <motion.a
              href="#work"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="border-accent text-accent hover:bg-accent hover:text-paper hover:shadow-[0_0_28px_-6px_var(--color-accent)] inline-block rounded-full border px-6 py-3 text-sm font-medium transition-[color,background-color,box-shadow] duration-(--dur-short)"
            >
              View My Work
            </motion.a>
          </Magnetic>
          <Magnetic strength={6}>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-ink hover:text-accent border-rule/60 hover:border-accent inline-flex items-center gap-2 border-b pb-1 text-sm font-medium transition-colors duration-(--dur-short)"
            >
              Start a Conversation
              <span aria-hidden="true">→</span>
            </motion.a>
          </Magnetic>
        </motion.div>
      </motion.div>

      {!reduced && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="border-rule flex h-9 w-5.5 justify-center rounded-full border pt-1.5"
          >
            <span className="bg-accent h-1.5 w-1 rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
