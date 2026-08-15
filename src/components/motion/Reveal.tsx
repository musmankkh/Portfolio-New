import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface RevealProps {
  children: ReactNode;
  /** Stagger index within a group; capped so long lists don't feel slow to settle. */
  index?: number;
  className?: string;
  y?: number;
}

/** Reveal-once-on-scroll wrapper. IntersectionObserver-backed via Motion's whileInView. */
export function Reveal({ children, index = 0, className, y = 16 }: RevealProps) {
  const reduced = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : y },
    visible: {
      opacity: 1,
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
