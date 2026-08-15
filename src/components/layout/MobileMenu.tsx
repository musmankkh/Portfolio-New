import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { nav } from "../../data/content";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="text-ink relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[5px]"
      >
        <motion.span
          animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="bg-ink block h-px w-5"
        />
        <motion.span
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ duration: 0.15 }}
          className="bg-ink block h-px w-5"
        />
        <motion.span
          animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="bg-ink block h-px w-5"
        />
      </button>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              id={panelId}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12, transition: { duration: 0.165, ease: [0.7, 0, 0.84, 0] } }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="bg-paper fixed inset-0 z-40 flex flex-col justify-center px-6"
            >
              <nav className="flex flex-col gap-6">
                {nav.map((item, index) => (
                  <a
                    key={item.href}
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-ink hover:text-accent text-3xl transition-colors duration-(--dur-micro)"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </div>
  );
}
