export interface Profile {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  location?: string;
  resumeUrl?: string;
  avatarUrl?: string;
}

export interface ContactLink {
  label: string;
  href: string;
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
  approach?: string;
  outcome?: string;
  metrics?: ProjectMetric[];
  links?: ProjectLink[];
  featured?: boolean;
}

export interface ExperienceItem {
  organization: string;
  role: string;
  start: string;
  end?: string;
  summary?: string;
  highlights?: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
