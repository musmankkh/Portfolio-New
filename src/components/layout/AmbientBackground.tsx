import { useEffect, useRef } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  accent: boolean;
}

/**
 * Full-viewport ambient motion: a handful of slow-drifting points, extending
 * the site's data-flow motif into the background rather than a generic
 * particles.js network. No connecting lines (that's the recognizable
 * off-the-shelf look this deliberately avoids). Canvas-based, capped particle
 * count, single rAF loop — cheap regardless of page length. Disabled entirely
 * under prefers-reduced-motion.
 */
export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const styles = getComputedStyle(document.documentElement);
    const accentColor = styles.getPropertyValue("--color-accent").trim() || "#7dd3a0";
    const neutralColor = styles.getPropertyValue("--color-muted").trim() || "#9a9a9a";

    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      width = canvas!.width = window.innerWidth * dpr;
      height = canvas!.height = window.innerHeight * dpr;
      canvas!.style.width = `${window.innerWidth}px`;
      canvas!.style.height = `${window.innerHeight}px`;

      const count = Math.min(60, Math.round((window.innerWidth * window.innerHeight) / 26000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.1 * dpr,
        vy: (Math.random() - 0.5) * 0.1 * dpr,
        r: (Math.random() * 1.1 + 0.5) * dpr,
        accent: Math.random() > 0.8,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -5) p.x = width + 5;
        if (p.x > width + 5) p.x = -5;
        if (p.y < -5) p.y = height + 5;
        if (p.y > height + 5) p.y = -5;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = p.accent ? accentColor : neutralColor;
        ctx!.globalAlpha = p.accent ? 0.4 : 0.16;
        ctx!.fill();
      }
      frame = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
    />
  );
}
