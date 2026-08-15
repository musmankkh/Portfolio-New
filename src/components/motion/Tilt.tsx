import { useRef, useState, type PointerEvent, type ReactNode } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface TiltProps {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees at the pointer's furthest reach from center. */
  strength?: number;
}

/** Wraps an element so it tilts in 3D toward the pointer, springing back on leave. */
export function Tilt({ children, className, strength = 6 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;
    setTransform({ rotateX: -relY * strength, rotateY: relX * strength });
  }

  function handlePointerLeave() {
    setTransform({ rotateX: 0, rotateY: 0 });
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      animate={transform}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      // `transformPerspective` (not the `perspective` property, which applies to
      // children) is what gives this element's own rotation real depth.
      style={{ transformPerspective: 800, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
