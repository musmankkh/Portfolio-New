import { motion, useScroll, useSpring } from "motion/react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 40,
    restDelta: 0.001,
  });

  if (reduced) return null;

  return (
    <motion.div
      style={{ scaleX }}
      className="bg-accent fixed top-0 right-0 left-0 z-[60] h-[2px] origin-left"
      aria-hidden="true"
    />
  );
}
