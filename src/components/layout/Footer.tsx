import { contactLinks, nav, profile } from "../../data/portfolio";
import type { ContactIcon } from "../../data/types";
import { GithubIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from "../ui/icons";

const iconComponents: Record<ContactIcon, typeof LinkedInIcon> = {
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  whatsapp: WhatsAppIcon,
  github: GithubIcon,
};

export function Footer() {
  const year = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="border-rule/60 border-t">
      <div className="mx-auto max-w-(--content-max) px-6 py-10 sm:px-10">
        {/* Single row: identity · nav · socials */}
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="shrink-0">
            <img
              src="/logo-wordmark.png"
              alt={profile.name}
              width={1000}
              height={158}
              className="h-8 w-auto"
            />
            <p className="text-muted font-outlier mt-2 text-xs tracking-[0.08em] uppercase">
              {profile.role}
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted hover:text-accent text-xs transition-colors duration-(--dur-short)"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {contactLinks.length > 0 && (
            <ul className="flex items-center gap-3">
              {contactLinks.map((link) => {
                const Icon = link.icon ? iconComponents[link.icon] : null;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-label={link.label}
                      title={link.label}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      className="border-rule/60 text-muted hover:text-accent hover:border-accent flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-(--dur-short)"
                    >
                      {Icon ? <Icon className="h-4 w-4" /> : link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Bottom bar */}
        <div className="border-rule/60 mt-8 flex items-center justify-between border-t pt-5">
          <p className="text-muted font-outlier text-xs">
            © {year} {profile.name || "—"}
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="group text-muted hover:text-accent font-outlier flex items-center gap-1.5 text-xs transition-colors duration-(--dur-short)"
          >
            Back to top
            <span
              aria-hidden="true"
              className="transition-transform duration-(--dur-short) ease-(--ease-out) group-hover:-translate-y-0.5"
            >
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
