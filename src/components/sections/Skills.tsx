import { skills } from "../../data/portfolio";
import { glyphs } from "../ui/glyphs";
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
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
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
        <Reveal>
          <Eyebrow>Skills</Eyebrow>
          <h2 className="font-display text-3xl">Tools I reach for.</h2>
        </Reveal>

        <div className="mt-14">
          {skills.length === 0 ? (
            <EmptyState>
              Add skill groups to the `skills` array in src/data/portfolio.ts.
            </EmptyState>
          ) : (
            <div className="flex flex-col gap-4">
              {skills.map((group, index) => {
                const Icon = glyphs[group.icon];

                return (
                  <Reveal key={group.category} index={index}>
                    <div className="border-rule/60 bg-paper-2/40 group hover:border-accent/40 rounded-(--radius-md) border px-6 py-6 transition-colors duration-(--dur-short)">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="border-rule/60 bg-paper text-accent flex h-8 w-8 items-center justify-center rounded-(--radius-md) border">
                          <Icon className="h-4 w-4" />
                        </span>
                        <p className="font-outlier text-muted text-xs tracking-[0.08em] uppercase">
                          {group.category}
                        </p>
                      </div>

                      <MarqueeRow items={group.items} reverse={index % 2 === 1} />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
