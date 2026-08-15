import { Link } from "react-router-dom";
import { nav, profile } from "../../data/portfolio";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const initials = profile.name
    ? profile.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "—";

  return (
    <header className="border-rule/60 bg-paper/80 sticky top-0 z-50 border-b backdrop-blur-sm">
      <div className="mx-auto flex max-w-(--content-max) items-center justify-between px-6 py-4 sm:px-10">
        <Link
          to="/"
          className="font-outlier text-ink hover:text-accent text-sm font-medium tracking-[0.08em] transition-colors duration-(--dur-micro)"
        >
          {initials}
        </Link>

        <nav className="hidden gap-8 sm:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-outlier text-muted hover:text-ink text-xs tracking-[0.1em] uppercase transition-colors duration-(--dur-micro)"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
