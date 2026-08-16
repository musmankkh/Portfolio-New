import { brandPaths } from "./brandPaths.generated";
import { conceptGlyphs } from "./conceptGlyphMap";
import { cn } from "../../lib/cn";

/**
 * Resolves a skill label to a mark: a real brand path first (generated from
 * simple-icons), then a hand-drawn concept glyph, then a neutral dot so an
 * unmapped skill still aligns with its neighbours instead of jumping.
 * Always currentColor — the pill's hover state carries it to the accent.
 */
export function TechIcon({ name, className }: { name: string; className?: string }) {
  const size = cn("h-3.5 w-3.5 shrink-0", className);

  const brand = brandPaths[name];
  if (brand) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={size}>
        <path d={brand} />
      </svg>
    );
  }

  const Glyph = conceptGlyphs[name];
  if (Glyph) return <Glyph className={size} />;

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={size}>
      <circle cx="12" cy="12" r="3.5" opacity="0.55" />
    </svg>
  );
}
