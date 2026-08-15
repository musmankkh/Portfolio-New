import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface RevealProps {
  children: ReactNode;
  /** Stagger index within a group; capped so long lists don't feel slow to settle. */
  index?: number;
  className?: string;
  y?: number;
  /** Edge the content settles in from. Defaults to "up" (existing behavior). */
  direction?: "up" | "down" | "left" | "right";
}

const AXIS_OFFSETS: Record<NonNullable<RevealProps["direction"]>, (distance: number) => { x: number; y: number }> = {
  up: (distance) => ({ x: 0, y: distance }),
  down: (distance) => ({ x: 0, y: -distance }),
  left: (distance) => ({ x: distance, y: 0 }),
  right: (distance) => ({ x: -distance, y: 0 }),
};

/** Reveal-once-on-scroll wrapper. IntersectionObserver-backed via Motion's whileInView. */
export function Reveal({ children, index = 0, className, y = 16, direction = "up" }: RevealProps) {
  const reduced = useReducedMotion();
  const offset = AXIS_OFFSETS[direction](reduced ? 0 : y);

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: reduced ? 0.001 : 0.42,
        ease: [0.16, 1, 0.3, 1],
        delay: reduced ? 0 : Math.min(index * 0.06, 0.42),
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
