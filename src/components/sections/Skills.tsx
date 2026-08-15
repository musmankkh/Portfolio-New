import { skills } from "../../data/portfolio";
import { glyphs } from "../ui/glyphs";
import { Eyebrow } from "../ui/Eyebrow";
import { EmptyState } from "../ui/EmptyState";
import { GlowCard } from "../ui/GlowCard";
import { TechIcon } from "../ui/TechIcon";
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
            className="border-rule text-ink flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm"
          >
            <TechIcon name={item} />
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
            className="border-rule text-ink hover:border-accent/60 hover:text-accent flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-(--dur-short)"
          >
            <TechIcon name={item} />
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
                    <GlowCard lift={false} spotlight={false}>
                      <div className="px-6 py-6">
                        <div className="mb-4 flex items-center gap-3">
                          <span className="border-rule/60 bg-paper text-accent group-hover:border-accent/50 group-hover:shadow-(--glow-accent) flex h-9 w-9 items-center justify-center rounded-(--radius-md) border transition-all duration-(--dur-long)">
                            <Icon className="h-5 w-5" />
                          </span>
                          <p className="font-outlier text-muted group-hover:text-ink text-xs tracking-[0.08em] uppercase transition-colors duration-(--dur-short)">
                            {group.category}
                          </p>
                          <span className="text-muted/50 font-outlier ml-auto text-[11px]">
                            {String(group.items.length).padStart(2, "0")}
                          </span>
                        </div>

                        <MarqueeRow items={group.items} reverse={index % 2 === 1} />
                      </div>
                    </GlowCard>
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
