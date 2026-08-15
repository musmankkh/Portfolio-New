import { motion } from "motion/react";
import { focusAreas, whatIDo } from "../../data/portfolio";
import { glyphs } from "../ui/glyphs";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../motion/Reveal";
import { Spotlight } from "../motion/Spotlight";
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
                <Tilt strength={5} className="h-full">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="h-full"
                  >
                    <Spotlight className="h-full">
                      <div className="border-rule/60 group hover:border-accent/60 relative z-10 flex h-full flex-col rounded-(--radius-md) border p-8 transition-colors duration-(--dur-short)">
                        <div className="flex items-start justify-between">
                          <span className="border-rule/60 bg-paper-2 text-accent group-hover:border-accent/40 flex h-11 w-11 items-center justify-center rounded-(--radius-md) border transition-colors duration-(--dur-short)">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="font-outlier text-muted group-hover:text-accent text-xs transition-colors duration-(--dur-short)">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <h3 className="font-display group-hover:text-accent mt-6 text-xl transition-colors duration-(--dur-short)">
                          {area.title}
                        </h3>
                        <p className="text-ink mt-3 max-w-(--measure) text-sm font-medium">
                          {area.description}
                        </p>
                        <p className="text-muted mt-2 max-w-(--measure) text-sm">{area.body}</p>
                      </div>
                    </Spotlight>
                  </motion.div>
                </Tilt>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
