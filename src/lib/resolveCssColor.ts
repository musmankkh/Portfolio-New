/**
 * Resolves a CSS custom property (which may be an OKLCH string) to a plain
 * "rgb(r, g, b)" string. Modern Chromium no longer downgrades
 * getComputedStyle().color to rgb() — it preserves the original color
 * function (oklch stays oklch), which libraries like Three.js and
 * tsParticles can't parse. Canvas 2D's fillStyle parser understands OKLCH
 * natively and getImageData always yields raw sRGB bytes, so painting a 1x1
 * pixel and reading it back sidesteps the serialization issue entirely.
 */
export function resolveCssColor(varName: string): string {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();

  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  const ctx = canvas.getContext("2d");
  if (!ctx) return raw;

  ctx.fillStyle = raw;
  ctx.fillRect(0, 0, 1, 1);
  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
  return `rgb(${r}, ${g}, ${b})`;
}
