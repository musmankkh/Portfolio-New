import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Spotlight } from "../motion/Spotlight";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { cn } from "../../lib/cn";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  /** Oversized translucent numeral watermarked into the corner. */
  ghost?: string;
  /** Lift the card toward the viewer on hover. */
  lift?: boolean;
  /** Cursor-following accent wash. Disable on dense/text-heavy cards. */
  spotlight?: boolean;
}

/**
 * The site's standard surface: layered paper fill, hairline rule, an accent
 * gradient edge that ignites on hover, and an optional ghost numeral. Composed
 * rather than duplicated so every card in the site shares one hover language.
 */
export function GlowCard({
  children,
  className,
  ghost,
  lift = true,
  spotlight = true,
}: GlowCardProps) {
  const reduced = useReducedMotion();

  const card = (
    <div
      className={cn(
        "edge-glow group border-rule/60 bg-paper-2/40 hover:border-accent/40 relative h-full overflow-hidden rounded-(--radius-lg) border backdrop-blur-[2px] transition-colors duration-(--dur-long)",
        className,
      )}
    >
      {ghost && (
        <span
          aria-hidden="true"
          className="font-display text-ink/[0.045] pointer-events-none absolute -top-6 -right-3 text-[8rem] leading-none font-semibold select-none"
        >
          {ghost}
        </span>
      )}
      <div className="relative z-[2] h-full">{children}</div>
    </div>
  );

  const withSpotlight = spotlight ? <Spotlight className="h-full">{card}</Spotlight> : card;

  if (reduced || !lift) {
    return <div className="h-full">{withSpotlight}</div>;
  }

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="h-full"
    >
      {withSpotlight}
    </motion.div>
  );
}
