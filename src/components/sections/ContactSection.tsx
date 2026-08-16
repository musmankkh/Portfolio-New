import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { contactLinks, contactSection } from "../../data/portfolio";
import type { ContactIcon } from "../../data/types";
import { GithubIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from "../ui/icons";
import { Eyebrow } from "../ui/Eyebrow";
import { GlowCard } from "../ui/GlowCard";
import { Reveal } from "../motion/Reveal";
import { Magnetic } from "../motion/Magnetic";

const iconComponents: Record<ContactIcon, typeof LinkedInIcon> = {
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  whatsapp: WhatsAppIcon,
  github: GithubIcon,
};

const fieldClass =
  "border-rule focus:border-accent text-ink placeholder:text-muted/50 mt-2 w-full border-b bg-transparent py-2.5 text-sm outline-none transition-colors duration-(--dur-short)";
const labelClass = "font-outlier text-muted text-xs tracking-[0.08em] uppercase";

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
    <section
      id="contact"
      className="border-rule/60 relative overflow-hidden border-t px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="grid-field pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-(--content-max) gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <Reveal>
          <Eyebrow>Get In Touch</Eyebrow>
          <h2 className="font-display text-3xl text-balance sm:text-4xl">
            {contactSection.heading}
          </h2>
          <p className="text-muted mt-4 max-w-(--measure) text-sm">{contactSection.text}</p>

          {/* Interests as chips rather than a sentence */}
          <ul className="mt-8 flex flex-wrap gap-2">
            {contactSection.interestTags.map((tag) => (
              <li
                key={tag}
                className="border-rule/60 text-muted hover:border-accent/60 hover:text-accent rounded-full border px-3.5 py-1.5 text-xs transition-colors duration-(--dur-short)"
              >
                {tag}
              </li>
            ))}
          </ul>

          {contactLinks.length > 0 && (
            <ul className="mt-10 flex flex-wrap items-center gap-3">
              {contactLinks.map((link) => {
                const Icon = link.icon ? iconComponents[link.icon] : null;
                return (
                  <li key={link.href}>
                    <Magnetic strength={6}>
                      <a
                        href={link.href}
                        aria-label={link.label}
                        title={link.label}
                        className="border-rule/60 text-ink hover:text-accent hover:border-accent hover:shadow-(--glow-accent) flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-(--dur-short)"
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
          <GlowCard lift={false} spotlight={false}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-8 sm:p-10">
              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className={fieldClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className={labelClass}>
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className={fieldClass}
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className={`${fieldClass} resize-none`}
                  placeholder="What are you looking to build?"
                />
              </div>

              {contactEmail ? (
                <Magnetic strength={6} className="mt-2 self-start">
                  <motion.button
                    type="submit"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="border-accent text-accent hover:bg-accent hover:text-paper hover:shadow-[0_0_28px_-6px_var(--color-accent)] rounded-full border px-6 py-3 text-sm font-medium transition-[color,background-color,box-shadow] duration-(--dur-short)"
                  >
                    {contactSection.primaryCta}
                  </motion.button>
                </Magnetic>
              ) : (
                <p className="text-muted font-outlier mt-2 text-xs">
                  Set VITE_CONTACT_EMAIL in .env to enable this form.
                </p>
              )}
            </form>
          </GlowCard>
        </Reveal>
      </div>
    </section>
  );
}
