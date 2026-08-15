import { focusAreas } from "../../data/content";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../motion/Reveal";
import { Spotlight } from "../motion/Spotlight";

export function FocusAreas() {
  if (focusAreas.length === 0) return null;

  return (
    <section className="border-rule/60 border-t px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-(--content-max)">
        <Eyebrow>What I Work On</Eyebrow>
        <h2 className="font-display text-3xl">Where I focus.</h2>

        <div className="mt-14 grid gap-px sm:grid-cols-2">
          {focusAreas.map((area, index) => (
            <Reveal key={area.title} index={index}>
              <Spotlight className="h-full">
                <div className="border-rule/60 group hover:border-accent/60 relative z-10 h-full border p-8 transition duration-(--dur-short) ease-(--ease-out) hover:-translate-y-1">
                  <span className="font-outlier text-accent text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display group-hover:text-accent mt-4 text-xl transition-colors duration-(--dur-short)">
                    {area.title}
                  </h3>
                  <p className="text-muted mt-3 max-w-(--measure) text-sm">
                    {area.description}
                  </p>
                  {area.tags.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {area.tags.map((tag) => (
                        <li
                          key={tag}
                          className="border-rule text-muted font-outlier rounded-full border px-3 py-1 text-xs"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
