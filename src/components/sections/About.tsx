import { profile, skills } from "../../data/content";
import { Eyebrow } from "../ui/Eyebrow";
import { EmptyState } from "../ui/EmptyState";
import { Reveal } from "../motion/Reveal";

export function About() {
  return (
    <section id="about" className="border-rule/60 border-t px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto grid max-w-(--content-max) gap-14 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <Reveal>
          <Eyebrow>About</Eyebrow>
          {profile.summary ? (
            <p className="font-display text-2xl text-balance sm:text-3xl">
              {profile.summary}
            </p>
          ) : (
            <EmptyState>
              Add profile.summary in src/data/content.ts — a few sentences
              on your background, focus, and what drives your work.
            </EmptyState>
          )}
        </Reveal>

        <Reveal index={1}>
          <p className="text-muted font-outlier mb-6 text-xs tracking-[0.1em] uppercase">
            Skills
          </p>
          {skills.length === 0 ? (
            <EmptyState>
              Add skill groups to the `skills` array in src/data/content.ts.
            </EmptyState>
          ) : (
            <dl className="flex flex-col gap-5">
              {skills.map((group) => (
                <div key={group.category}>
                  <dt className="text-muted font-outlier text-xs tracking-[0.08em] uppercase">
                    {group.category}
                  </dt>
                  <dd className="text-ink mt-1.5 text-sm">
                    {group.items.join(" · ")}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </Reveal>
      </div>
    </section>
  );
}
