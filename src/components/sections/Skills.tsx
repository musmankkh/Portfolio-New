import { skills } from "../../data/content";
import { Eyebrow } from "../ui/Eyebrow";
import { EmptyState } from "../ui/EmptyState";
import { Reveal } from "../motion/Reveal";

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
              Add skill groups to the `skills` array in src/data/content.ts.
            </EmptyState>
          ) : (
            <div className="flex flex-col">
              {skills.map((group, index) => (
                <Reveal key={group.category} index={index}>
                  <div className="border-rule/60 grid gap-4 border-t py-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] sm:items-center">
                    <p className="font-outlier text-muted text-xs tracking-[0.08em] uppercase">
                      {group.category}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="border-rule text-ink hover:border-accent/60 hover:text-accent rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-(--dur-short)"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
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
