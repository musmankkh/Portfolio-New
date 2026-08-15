import { useMemo } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { resolveCssColor } from "../../lib/resolveCssColor";

// Must be a stable reference across renders — ParticlesProvider throws if it changes.
async function initEngine(engine: Engine) {
  await loadSlim(engine);
}

/**
 * Site-wide ambient layer: sparse, slow-drifting data points with faint
 * short-range links — a lighter, page-wide companion to the hero's 3D
 * network. Low density on purpose ("avoid making the screen look like a
 * galaxy"). Skipped entirely under reduced-motion.
 */
export function AmbientBackground() {
  const reduced = useReducedMotion();

  const options: ISourceOptions = useMemo(() => {
    const accent = resolveCssColor("--color-accent");
    const neutral = resolveCssColor("--color-muted");
    const link = resolveCssColor("--color-rule");
    const narrow = window.innerWidth < 768;

    return {
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      particles: {
        number: { value: narrow ? 16 : 34 },
        color: { value: [accent, neutral] },
        shape: { type: "circle" },
        opacity: { value: { min: 0.08, max: 0.32 } },
        size: { value: { min: 1, max: 2 } },
        move: {
          enable: true,
          speed: 0.25,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
        links: {
          enable: true,
          distance: 130,
          color: link,
          opacity: 0.12,
          width: 1,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: !narrow, mode: "grab" },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.25 } },
        },
      },
      detectRetina: true,
    };
  }, []);

  if (reduced) return null;

  return (
    <ParticlesProvider init={initEngine}>
      <Particles id="ambient-particles" className="fixed inset-0 z-0" options={options} />
    </ParticlesProvider>
  );
}
