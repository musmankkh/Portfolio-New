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

export const contactLinks: ContactLink[] = [];

export const projects: Project[] = [];

export const experience: ExperienceItem[] = [];

export const skills: SkillGroup[] = [];

export const nav: NavItem[] = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];
