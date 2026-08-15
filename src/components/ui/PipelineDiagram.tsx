import { motion } from "motion/react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { cn } from "../../lib/cn";

const DEFAULT_STAGES = ["Ingest", "Transform", "Store", "Insight"];

/**
 * Original signature visual: a small data-pipeline diagram with flowing
 * connector lines. Not derived from any reference site — built specifically
 * for the data-engineering framing of this portfolio. The flowing dashes are
 * a deliberate exception to the "no infinite loops" rule: it's the single
 * orchestrated motion signature for the whole site, kept slow and subtle,
 * and fully disabled under prefers-reduced-motion.
 */
export function PipelineDiagram({
  className,
  stages = DEFAULT_STAGES,
}: {
  className?: string;
  stages?: string[];
}) {
  const reduced = useReducedMotion();
  const width = Math.max(stages.length * 160, 480);
  const step = width / stages.length;
  const nodeX = stages.map((_, i) => step * i + step / 2);
  const nodeY = 60;

  return (
    <svg
      viewBox={`0 0 ${width} 120`}
      className={cn("w-full", className)}
      aria-hidden="true"
      role="presentation"
    >
      {nodeX.slice(0, -1).map((x, i) => {
        const nextX = nodeX[i + 1];
        const d = `M ${x + 14} ${nodeY} L ${nextX - 14} ${nodeY}`;
        return (
          <g key={x}>
            <path d={d} stroke="var(--color-rule)" strokeWidth="1" fill="none" />
            {!reduced && (
              <motion.path
                d={d}
                stroke="var(--color-accent)"
                strokeWidth="1.5"
                strokeDasharray="5 13"
                fill="none"
                strokeLinecap="round"
                animate={{ strokeDashoffset: [0, -36] }}
                transition={{
                  duration: 2.6,
                  ease: "linear",
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            )}
          </g>
        );
      })}

      {nodeX.map((x, i) => (
        <g key={x}>
          <circle
            cx={x}
            cy={nodeY}
            r="14"
            fill="var(--color-paper)"
            stroke="var(--color-rule)"
            strokeWidth="1.5"
          />
          <circle cx={x} cy={nodeY} r="3.5" fill="var(--color-accent)" />
          <text
            x={x}
            y={nodeY + 34}
            textAnchor="middle"
            fontFamily="var(--font-outlier)"
            fontSize="11"
            letterSpacing="0.06em"
            fill="var(--color-muted)"
          >
            {stages[i].toUpperCase()}
          </text>
        </g>
      ))}
    </svg>
  );
}
