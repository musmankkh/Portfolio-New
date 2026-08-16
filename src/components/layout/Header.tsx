import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { nav, profile } from "../../data/portfolio";
import { Magnetic } from "../motion/Magnetic";
import { cn } from "../../lib/cn";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((item) => item.href.split("#")[1]).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const top = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
        );
        setActiveHref(`/#${top.target.id}`);
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-(--content-max) rounded-full border transition-colors duration-(--dur-long)",
        scrolled
          ? "bg-paper/75 border-rule/60 shadow-[0_10px_30px_-14px_rgba(0,0,0,0.7)] backdrop-blur-xl"
          : "border-transparent",
      )}
    >
      <div className="flex items-center justify-between px-5 py-2.5 sm:px-6">
        <Link
          to="/"
          onClick={() => setActiveHref("")}
          aria-label={profile.name || "Home"}
          className="shrink-0 opacity-90 transition-opacity duration-(--dur-short) hover:opacity-100"
        >
          {/* Square mark on phones — the wordmark's text renders ~9px tall at
              this height and eats ~44% of a 375px header. */}
          <img
            src="/logo-mark.png"
            alt=""
            width={512}
            height={512}
            className="h-7 w-7 sm:hidden"
          />
          <img
            src="/logo-wordmark.png"
            alt=""
            width={1000}
            height={158}
            className="hidden h-7 w-auto sm:block"
          />
        </Link>

        {/* lg, not sm: the centred nav is ~510px wide, so below 1024px it
            overlaps the wordmark on the left and the CTA on the right. */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
          {nav.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveHref(item.href)}
                className={cn(
                  "font-outlier relative rounded-full px-4 py-1.5 text-xs tracking-[0.1em] uppercase transition-colors duration-(--dur-short)",
                  isActive ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="bg-accent/10 border-accent/30 absolute inset-0 rounded-full border"
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Magnetic strength={6} className="hidden lg:block">
            <motion.a
              href="/#contact"
              whileHover={{ y: -1 }}
              whileTap={{ y: 0, scale: 0.97 }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="border-accent text-accent hover:bg-accent hover:text-paper inline-block rounded-full border px-4 py-1.5 text-xs font-medium transition-colors duration-(--dur-short)"
            >
              Contact
            </motion.a>
          </Magnetic>
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}
