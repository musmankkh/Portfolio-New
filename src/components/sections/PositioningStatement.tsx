import { positioningStatement } from "../../data/portfolio";
import { Reveal } from "../motion/Reveal";

export function PositioningStatement() {
  if (!positioningStatement) return null;

  return (
    <section className="border-rule/60 border-t px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-(--content-max)">
        <Reveal>
          <p className="font-display max-w-4xl text-2xl text-balance sm:text-3xl">
            {positioningStatement}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
