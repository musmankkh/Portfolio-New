import { focusAreas, whatIDo } from "../../data/portfolio";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../motion/Reveal";
import { Spotlight } from "../motion/Spotlight";

export function FocusAreas() {
  if (focusAreas.length === 0) return null;

  return (
    <section
      id="what-i-do"
      className="border-rule/60 border-t px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-(--content-max)">
        <Eyebrow>What I Do</Eyebrow>
        <h2 className="font-display max-w-4xl text-3xl text-balance">{whatIDo.heading}</h2>
        <p className="text-muted mt-4 max-w-(--measure) text-sm">{whatIDo.supporting}</p>

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
                  <p className="text-ink mt-3 max-w-(--measure) text-sm font-medium">
                    {area.description}
                  </p>
                  <p className="text-muted mt-2 max-w-(--measure) text-sm">{area.body}</p>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
