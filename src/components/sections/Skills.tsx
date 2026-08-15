import { skills } from "../../data/portfolio";
import { Eyebrow } from "../ui/Eyebrow";
import { EmptyState } from "../ui/EmptyState";
import { Reveal } from "../motion/Reveal";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { cn } from "../../lib/cn";

function MarqueeRow({ items, reverse }: { items: string[]; reverse: boolean }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="border-rule text-ink rounded-full border px-3.5 py-1.5 text-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }

  const loopItems = [...items, ...items];
  const duration = Math.max(items.length * 3, 14);

  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className={cn(
          "flex w-max gap-3 py-1",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
        style={{ animationDuration: `${duration}s` }}
      >
        {loopItems.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="border-rule text-ink hover:border-accent/60 hover:text-accent shrink-0 rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-(--dur-short)"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="border-rule/60 border-t px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-(--content-max)">
        <Eyebrow>Skills</Eyebrow>
        <h2 className="font-display text-3xl">Tools I reach for.</h2>

        <div className="mt-14">
          {skills.length === 0 ? (
            <EmptyState>
              Add skill groups to the `skills` array in src/data/portfolio.ts.
            </EmptyState>
          ) : (
            <div className="flex flex-col">
              {skills.map((group, index) => (
                <Reveal key={group.category} index={index}>
                  <div className="border-rule/60 grid gap-4 border-t py-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] sm:items-center">
                    <p className="font-outlier text-muted text-xs tracking-[0.08em] uppercase">
                      {group.category}
                    </p>
                    <MarqueeRow items={group.items} reverse={index % 2 === 1} />
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
