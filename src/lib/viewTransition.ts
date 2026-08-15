import { flushSync } from "react-dom";

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { finished: Promise<void> };
};

/**
 * Runs `callback` inside the native View Transitions API when available,
 * falling back to a plain synchronous call. Stable-React compatible —
 * deliberately avoids React's experimental `<ViewTransition>` component,
 * which requires `react@canary`.
 */
export function withViewTransition(callback: () => void) {
  const doc = document as ViewTransitionDocument;
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (!doc.startViewTransition || prefersReduced) {
    callback();
    return;
  }

  doc.startViewTransition(() => {
    flushSync(callback);
  });
}
