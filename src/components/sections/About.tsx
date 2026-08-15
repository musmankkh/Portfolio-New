import { about } from "../../data/portfolio";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../motion/Reveal";

export function About() {
  return (
    <section id="about" className="border-rule/60 border-t px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-(--content-max)">
        <Reveal>
          <Eyebrow>About</Eyebrow>
          <h2 className="font-display max-w-4xl text-2xl text-balance sm:text-3xl">
            {about.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-14 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-5">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} index={index}>
                <p className="text-ink max-w-(--measure) text-sm sm:text-base">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal index={about.paragraphs.length}>
            <div className="border-rule/60 border-t pt-8 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-10">
              <p className="text-muted font-outlier mb-4 text-xs tracking-[0.08em] uppercase">
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
                        <span className="text-muted" aria-hidden="true">
                          {" "}
                          ↓
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
