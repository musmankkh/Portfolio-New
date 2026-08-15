import { contactLinks, profile } from "../../data/content";
import type { ContactIcon } from "../../data/types";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "../ui/icons";

const iconComponents: Record<ContactIcon, typeof LinkedInIcon> = {
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  whatsapp: WhatsAppIcon,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-rule/60 border-t">
      <div className="mx-auto max-w-(--content-max) px-6 py-16 sm:px-10 sm:py-24">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-muted mb-3 text-xs tracking-[0.1em] uppercase">
              Get in touch
            </p>
            <h2 className="font-display text-2xl">
              {profile.name ? `Let's talk, ${profile.name.split(" ")[0]}.` : "Let's talk."}
            </h2>
          </div>

          <ul className="flex flex-wrap items-center gap-4">
            {contactLinks.length === 0 && (
              <li className="text-muted font-outlier text-xs">
                {/* TODO: add contact links (email, GitHub, LinkedIn, etc.) to data/content.ts */}
                Contact links pending
              </li>
            )}
            {contactLinks.map((link) => {
              const Icon = link.icon ? iconComponents[link.icon] : null;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-label={link.label}
                    title={link.label}
                    className="border-rule/60 text-ink hover:text-accent hover:border-accent flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-(--dur-short)"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {Icon ? <Icon className="h-[18px] w-[18px]" /> : link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="text-muted font-outlier mt-16 text-xs">
          © {year} {profile.name || "—"}
        </p>
      </div>
    </footer>
  );
}
