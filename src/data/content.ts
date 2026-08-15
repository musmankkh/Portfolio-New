import type {
  ContactLink,
  ExperienceItem,
  NavItem,
  Profile,
  Project,
  SkillGroup,
} from "./types";

/**
 * Single source of truth for portfolio content. Every field below is a
 * placeholder — the layer components treat empty values as "not provided
 * yet" (rendering a muted placeholder) rather than inventing copy. Fill
 * this in with real content; nothing downstream needs to change shape.
 */

export const profile: Profile = {
  name: "",
  role: "",
  tagline: "",
  summary: "",
  location: "",
  resumeUrl: "",
};

/**
 * Sourced from environment variables (see .env.example) rather than
 * hardcoded here, so contact links can change per-deploy without a code
 * edit. Entries with no configured URL are simply omitted.
 */
const rawContactLinks: ContactLink[] = [
  { label: "LinkedIn", href: import.meta.env.VITE_LINKEDIN_URL ?? "", icon: "linkedin" },
  { label: "Instagram", href: import.meta.env.VITE_INSTAGRAM_URL ?? "", icon: "instagram" },
  { label: "WhatsApp", href: import.meta.env.VITE_WHATSAPP_URL ?? "", icon: "whatsapp" },
];

export const contactLinks: ContactLink[] = rawContactLinks.filter((link) => link.href);

export const projects: Project[] = [];

export const experience: ExperienceItem[] = [];

export const skills: SkillGroup[] = [];

export const nav: NavItem[] = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];
