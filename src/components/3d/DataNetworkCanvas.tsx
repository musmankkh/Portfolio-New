import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { DataNetwork } from "./DataNetwork";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { resolveCssColor } from "../../lib/resolveCssColor";
import { cn } from "../../lib/cn";

function useIsNarrow(breakpoint = 768) {
  const [narrow, setNarrow] = useState(
    () => typeof window !== "undefined" && window.innerWidth < breakpoint,
  );

  useEffect(() => {
    const onResize = () => setNarrow(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return narrow;
}

interface ThemeColors {
  accent: string;
  neutral: string;
  line: string;
}

function useThemeColors(): ThemeColors | null {
  const [colors, setColors] = useState<ThemeColors | null>(null);

  useEffect(() => {
    setColors({
      accent: resolveCssColor("--color-accent"),
      neutral: resolveCssColor("--color-muted"),
      line: resolveCssColor("--color-rule"),
    });
  }, []);

  return colors;
}

/**
 * The hero's primary interactive visual: a 3D data-node network with packets
 * traveling between nodes, mouse-parallax tilt, and slow autorotation. Scoped
 * to the hero only (not a page-wide fixed layer) to keep the WebGL cost
 * bounded. Skipped entirely under reduced-motion or before theme colors are
 * resolved (avoids a flash of default-black nodes).
 */
export function DataNetworkCanvas({ className }: { className?: string }) {
  const reduced = useReducedMotion();
  const narrow = useIsNarrow();
  const colors = useThemeColors();

  if (reduced || !colors) return null;

  const nodeCount = narrow ? 14 : 26;
  const particleCount = narrow ? 5 : 11;

  return (
    <div className={cn("pointer-events-none", className)} aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      >
        <Suspense fallback={null}>
          <DataNetwork
            nodeCount={nodeCount}
            particleCount={particleCount}
            accentColor={colors.accent}
            neutralColor={colors.neutral}
            lineColor={colors.line}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
