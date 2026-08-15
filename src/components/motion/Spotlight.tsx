import { useRef, type PointerEvent, type ReactNode } from "react";
import { cn } from "../../lib/cn";

/**
 * Cursor-reactive highlight: a soft accent-tinted glow that follows the
 * pointer within the wrapped element. Position is written directly to CSS
 * custom properties on the DOM node (no React state) so it stays cheap on
 * every pointermove.
 */
export function Spotlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      className={cn("group/spot relative", className)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(280px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in oklch, var(--color-accent) 14%, transparent), transparent 70%)",
        }}
      />
      {children}
    </div>
  );
}
