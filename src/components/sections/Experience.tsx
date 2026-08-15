import { experience, experienceSection } from "../../data/portfolio";
import { Eyebrow } from "../ui/Eyebrow";
import { EmptyState } from "../ui/EmptyState";
import { GlowCard } from "../ui/GlowCard";
import { Reveal } from "../motion/Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-rule/60 border-t px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-(--content-max)">
        <Reveal>
          <Eyebrow>Experience</Eyebrow>
          <h2 className="font-display text-3xl">{experienceSection.heading}</h2>
          <p className="text-muted mt-4 max-w-(--measure) text-sm">
            {experienceSection.supporting}
          </p>
        </Reveal>

        <div className="mt-14">
          {experience.length === 0 ? (
            <EmptyState>
              Add roles to the `experience` array in src/data/portfolio.ts —
              organization, role, dates, and highlights.
            </EmptyState>
          ) : (
            /* Timeline: a continuous rule with a node per role. */
            <ol className="border-rule/50 relative flex flex-col gap-4 sm:border-l sm:pl-10">
              {experience.map((item, index) => {
                const isCurrent = !item.end || item.end === "Present";

                return (
                  <Reveal key={`${item.organization}-${item.start}`} index={index}>
                    <li className="relative">
                      <span
                        aria-hidden="true"
                        className="bg-paper border-accent/50 absolute top-8 -left-[3.1rem] hidden h-3 w-3 rounded-full border-2 sm:block"
                      >
                        {isCurrent && (
                          <span className="bg-accent absolute inset-0 animate-ping rounded-full opacity-50" />
                        )}
                      </span>

                      <GlowCard ghost={String(experience.length - index).padStart(2, "0")}>
                        <div className="grid gap-3 p-7 sm:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] sm:p-8">
                          <div className="font-outlier text-muted flex flex-col gap-1.5 text-xs tracking-[0.08em] uppercase">
                            <span className={isCurrent ? "text-accent" : undefined}>
                              {item.start} — {item.end || "Present"}
                            </span>
                            {item.location && (
                              <span className="text-muted/70 normal-case tracking-normal">
                                {item.location}
                              </span>
                            )}
                          </div>

                          <div>
                            <h3 className="font-display group-hover:text-accent text-lg transition-colors duration-(--dur-short)">
                              {item.role}
                            </h3>
                            <p className="text-muted mt-1 text-sm">{item.organization}</p>
                            {item.employmentType && (
                              <span className="border-rule/60 text-muted font-outlier mt-3 inline-block rounded-full border px-2.5 py-0.5 text-[10px] tracking-[0.06em] uppercase">
                                {item.employmentType}
                              </span>
                            )}
                            {item.summary && (
                              <p className="text-muted mt-3 max-w-(--measure) text-sm">
                                {item.summary}
                              </p>
                            )}
                            {item.highlights && item.highlights.length > 0 && (
                              <ul className="mt-3 flex flex-col gap-1.5">
                                {item.highlights.map((highlight) => (
                                  <li key={highlight} className="text-ink flex gap-2 text-sm">
                                    <span className="text-accent" aria-hidden="true">
                                      —
                                    </span>
                                    {highlight}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </GlowCard>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          )}
        </div>
      </div>
    </section>
  );
}
