import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-outlier text-accent mb-4 flex items-center gap-2 text-xs tracking-[0.14em] uppercase",
        className,
      )}
    >
      <span className="bg-accent inline-block h-1.5 w-1.5" aria-hidden="true" />
      {children}
    </p>
  );
}
