import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  /** Seconds between each child's entrance. */
  staggerDelay?: number;
}

/** Scroll-triggered parent that cascades its `StaggerItem` children in as a group. */
export function StaggerContainer({ children, className, staggerDelay = 0.08 }: StaggerContainerProps) {
  const reduced = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduced ? 0 : staggerDelay },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, y = 16 }: { children: ReactNode; className?: string; y?: number }) {
  const reduced = useReducedMotion();

  const item: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0.001 : 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
