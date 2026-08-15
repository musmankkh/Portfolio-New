import { lazy, Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useLenis } from "../../hooks/useLenis";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";

// tsParticles is a heavy dependency — keep it out of the main bundle entirely.
const AmbientBackground = lazy(() =>
  import("./AmbientBackground").then((m) => ({ default: m.AmbientBackground })),
);

export function Layout() {
  useLenis();
  const reduced = useReducedMotion();
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return (
    <div className="flex min-h-dvh flex-col">
      {!reduced && (
        <Suspense fallback={null}>
          <AmbientBackground />
        </Suspense>
      )}
      <ScrollProgress />
      <Header />
      <main className="relative z-10 flex-1">
        <Outlet />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
