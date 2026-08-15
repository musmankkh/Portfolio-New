import { focusAreas, whatIDo } from "../../data/portfolio";
import { glyphs } from "../ui/glyphs";
import { Eyebrow } from "../ui/Eyebrow";
import { GlowCard } from "../ui/GlowCard";
import { Reveal } from "../motion/Reveal";
import { Tilt } from "../motion/Tilt";
import { StaggerContainer, StaggerItem } from "../motion/Stagger";

export function FocusAreas() {
  if (focusAreas.length === 0) return null;

  return (
    <section
      id="what-i-do"
      className="border-rule/60 border-t px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-(--content-max)">
        <Reveal>
          <Eyebrow>What I Do</Eyebrow>
          <h2 className="font-display max-w-4xl text-3xl text-balance">{whatIDo.heading}</h2>
          <p className="text-muted mt-4 max-w-(--measure) text-sm">{whatIDo.supporting}</p>
        </Reveal>

        <StaggerContainer className="mt-14 grid gap-4 sm:grid-cols-2">
          {focusAreas.map((area, index) => {
            const Icon = glyphs[area.icon];

            return (
              <StaggerItem key={area.title} className="h-full">
                <Tilt strength={4} className="h-full">
                  <GlowCard ghost={String(index + 1).padStart(2, "0")}>
                    <div className="flex h-full flex-col p-8 sm:p-9">
                      <span className="border-rule/60 bg-paper text-accent group-hover:border-accent/50 group-hover:shadow-(--glow-accent) flex h-12 w-12 items-center justify-center rounded-(--radius-md) border transition-all duration-(--dur-long)">
                        <Icon className="h-6 w-6" />
                      </span>

                      <h3 className="font-display group-hover:text-accent mt-6 text-xl transition-colors duration-(--dur-short)">
                        {area.title}
                      </h3>
                      <p className="text-ink mt-3 max-w-(--measure) text-sm font-medium">
                        {area.description}
                      </p>

                      {/* Detail folds away on pointer devices; always open on touch. */}
                      <div className="fold">
                        <div>
                          <p className="text-muted mt-3 max-w-(--measure) text-sm">{area.body}</p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </Tilt>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
