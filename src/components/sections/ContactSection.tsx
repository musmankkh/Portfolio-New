import { useState, type FormEvent } from "react";
import { contactLinks, profile } from "../../data/content";
import type { ContactIcon } from "../../data/types";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "../ui/icons";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../motion/Reveal";
import { Magnetic } from "../motion/Magnetic";

const iconComponents: Record<ContactIcon, typeof LinkedInIcon> = {
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  whatsapp: WhatsAppIcon,
};

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL ?? "";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!contactEmail) return;

    const subject = encodeURIComponent(`Portfolio contact from ${name || "website"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ""}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="border-rule/60 border-t px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto grid max-w-(--content-max) gap-14 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <Reveal>
          <Eyebrow>Get In Touch</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl">
            {profile.name ? `Let's talk, ${profile.name.split(" ")[0]}.` : "Let's talk."}
          </h2>
          <p className="text-muted mt-4 max-w-(--measure) text-sm">
            Have a project, a role, or just a question about data pipelines?
            Send a message, or reach out directly below.
          </p>

          {contactLinks.length > 0 && (
            <ul className="mt-10 flex flex-wrap items-center gap-4">
              {contactLinks.map((link) => {
                const Icon = link.icon ? iconComponents[link.icon] : null;
                return (
                  <li key={link.href}>
                    <Magnetic strength={6}>
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
                    </Magnetic>
                  </li>
                );
              })}
            </ul>
          )}
        </Reveal>

        <Reveal index={1}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label htmlFor="contact-name" className="font-outlier text-muted text-xs tracking-[0.08em] uppercase">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="border-rule focus:border-accent text-ink mt-2 w-full border-b bg-transparent py-2 text-sm outline-none transition-colors duration-(--dur-short)"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="font-outlier text-muted text-xs tracking-[0.08em] uppercase">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="border-rule focus:border-accent text-ink mt-2 w-full border-b bg-transparent py-2 text-sm outline-none transition-colors duration-(--dur-short)"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="font-outlier text-muted text-xs tracking-[0.08em] uppercase">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="border-rule focus:border-accent text-ink mt-2 w-full resize-none border-b bg-transparent py-2 text-sm outline-none transition-colors duration-(--dur-short)"
                placeholder="What are you looking to build?"
              />
            </div>

            {contactEmail ? (
              <button
                type="submit"
                className="border-accent text-accent hover:bg-accent hover:text-paper mt-2 self-start rounded-full border px-6 py-3 text-sm font-medium transition-colors duration-(--dur-short)"
              >
                Send message
              </button>
            ) : (
              <p className="text-muted font-outlier mt-2 text-xs">
                Set VITE_CONTACT_EMAIL in .env to enable this form.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
