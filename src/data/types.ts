export interface Profile {
  name: string;
  role: string;
  tagline: string;
  subheadline: string;
  microLine?: string;
  location?: string;
  resumeUrl?: string;
  avatarUrl?: string;
}

export type ContactIcon = "linkedin" | "instagram" | "whatsapp" | "github";

export interface ContactLink {
  label: string;
  href: string;
  icon?: ContactIcon;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  role?: string;
  year?: string;
  tags: string[];
  coverImage?: string;
  gallery?: string[];
  problem?: string;
  dataSources?: string;
  architecture?: string;
  engineering?: string;
  automation?: string;
  outcome?: string;
  metrics?: ProjectMetric[];
  links?: ProjectLink[];
  featured?: boolean;
}

export interface ExperienceItem {
  organization: string;
  role: string;
  employmentType?: string;
  start: string;
  end?: string;
  location?: string;
  summary?: string;
  highlights?: string[];
  skills?: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
  icon: GlyphKey;
}

/** Keys into the glyph registry in components/ui/icons.tsx. */
export type GlyphKey = "data" | "ai" | "automation" | "cloud" | "app";

export interface FocusArea {
  title: string;
  description: string;
  body: string;
  icon: GlyphKey;
}

export interface ProcessStep {
  index: string;
  title: string;
  label: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
