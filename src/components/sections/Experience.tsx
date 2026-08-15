import { experience } from "../../data/content";
import { Eyebrow } from "../ui/Eyebrow";
import { EmptyState } from "../ui/EmptyState";
import { Reveal } from "../motion/Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-rule/60 border-t px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-(--content-max)">
        <Eyebrow>Experience</Eyebrow>
        <h2 className="font-display text-3xl">Where I've worked.</h2>

        <div className="mt-14">
          {experience.length === 0 ? (
            <EmptyState>
              Add roles to the `experience` array in src/data/content.ts —
              organization, role, dates, and highlights.
            </EmptyState>
          ) : (
            <ol className="flex flex-col">
              {experience.map((item, index) => (
                <Reveal key={`${item.organization}-${item.start}`} index={index}>
                  <li className="border-rule/60 grid gap-2 border-t py-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
                    <div className="font-outlier text-muted text-xs tracking-[0.08em] uppercase">
                      {item.start} — {item.end || "Present"}
                    </div>
                    <div>
                      <h3 className="font-display text-lg">
                        {item.role}{" "}
                        <span className="text-muted font-body font-normal">
                          · {item.organization}
                        </span>
                      </h3>
                      {item.summary && (
                        <p className="text-muted mt-2 max-w-(--measure) text-sm">
                          {item.summary}
                        </p>
                      )}
                      {item.highlights && item.highlights.length > 0 && (
                        <ul className="mt-3 flex flex-col gap-1.5">
                          {item.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="text-ink flex gap-2 text-sm"
                            >
                              <span className="text-accent" aria-hidden="true">
                                —
                              </span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          )}
        </div>
      </div>
    </section>
  );
}
