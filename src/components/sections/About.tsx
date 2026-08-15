import { profile } from "../../data/content";
import { Eyebrow } from "../ui/Eyebrow";
import { EmptyState } from "../ui/EmptyState";
import { Reveal } from "../motion/Reveal";

export function About() {
  return (
    <section id="about" className="border-rule/60 border-t px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-(--content-max)">
        <Reveal>
          <Eyebrow>About</Eyebrow>
          {profile.summary ? (
            <p className="font-display max-w-3xl text-2xl text-balance sm:text-3xl">
              {profile.summary}
            </p>
          ) : (
            <EmptyState>
              Add profile.summary in src/data/content.ts — a few sentences
              on your background, focus, and what drives your work.
            </EmptyState>
          )}
        </Reveal>
      </div>
    </section>
  );
}
