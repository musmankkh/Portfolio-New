import { about, experience, profile } from "../../data/portfolio";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../motion/Reveal";
import { StaggerContainer, StaggerItem } from "../motion/Stagger";

const CARD = "border-rule/60 bg-paper-2/50 h-full rounded-(--radius-md) border p-8";

export function About() {
  const current = experience[0];

  return (
    <section id="about" className="border-rule/60 border-t px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-(--content-max)">
        <Reveal>
          <Eyebrow>About</Eyebrow>
          <h2 className="font-display max-w-4xl text-2xl text-balance sm:text-3xl">
            {about.heading}
          </h2>
        </Reveal>

        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-6">
          {/* Narrative — the wide anchor of the bento */}
          <StaggerItem className="sm:col-span-4">
            <div className={CARD}>
              <div className="flex flex-col gap-5">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="text-ink max-w-(--measure) text-sm sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* Approach — tall rail down the right */}
          <StaggerItem className="sm:col-span-2 sm:row-span-2">
            <div className={CARD}>
              <p className="text-muted font-outlier mb-6 text-xs tracking-[0.08em] uppercase">
                My approach
              </p>
              <ol className="flex flex-col gap-3">
                {about.approach.split("→").map((step, index, arr) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="font-outlier text-accent text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-ink text-base leading-snug">
                      {step.trim()}
                      {index < arr.length - 1 && (
                        <span className="text-muted" aria-hidden="true"> ↓</span>
                      )}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </StaggerItem>

          {/* Two small stat tiles closing the grid */}
          {current && (
            <StaggerItem className="sm:col-span-2">
              <div className={CARD}>
                <p className="text-muted font-outlier text-xs tracking-[0.08em] uppercase">Now</p>
                <p className="font-display text-ink mt-3 text-lg leading-snug">{current.role}</p>
                <p className="text-muted mt-1 text-sm">{current.organization}</p>
              </div>
            </StaggerItem>
          )}

          <StaggerItem className="sm:col-span-2">
            <div className={CARD}>
              <p className="text-muted font-outlier text-xs tracking-[0.08em] uppercase">Based in</p>
              <p className="font-display text-ink mt-3 text-lg leading-snug">
                {profile.location || "—"}
              </p>
              <p className="text-muted mt-1 text-sm">{profile.role}</p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
