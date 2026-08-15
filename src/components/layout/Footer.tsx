import { contactLinks, profile } from "../../data/content";

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

          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {contactLinks.length === 0 && (
              <li className="text-muted font-outlier text-xs">
                {/* TODO: add contact links (email, GitHub, LinkedIn, etc.) to data/content.ts */}
                Contact links pending
              </li>
            )}
            {contactLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-ink hover:text-accent border-rule/60 hover:border-accent border-b pb-0.5 text-sm transition-colors duration-(--dur-micro)"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-muted font-outlier mt-16 text-xs">
          © {year} {profile.name || "—"}
        </p>
      </div>
    </footer>
  );
}
