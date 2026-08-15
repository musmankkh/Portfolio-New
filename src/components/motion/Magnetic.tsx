import { useRef, type PointerEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** Max pixel offset the element travels toward the cursor. */
  strength?: number;
}

/** Wraps an element so it drifts gently toward the cursor within its own bounds. */
export function Magnetic({ children, className, strength = 10 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 });

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = event.clientX - rect.left - rect.width / 2;
    const relY = event.clientY - rect.top - rect.height / 2;
    x.set((relX / (rect.width / 2)) * strength);
    y.set((relY / (rect.height / 2)) * strength);
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={reduced ? undefined : { x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
