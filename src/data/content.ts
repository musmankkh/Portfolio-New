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
  // Inferred from the linkedin.com/in/muhammad-usman-asghar URL you shared — confirm/correct casing if needed.
  name: "Muhammad Usman Asghar",
  role: "Data Engineer",
  tagline:
    "I build reliable data pipelines and infrastructure that turn raw, messy data into decisions businesses can trust.",
  summary:
    "I'm a data engineer who builds the pipelines and infrastructure behind analytics people can actually trust — cleaning, structuring, and moving data so the insight built on top of it holds up. My work spans ETL/ELT, cloud infrastructure, and applied machine learning on real production datasets, where accuracy, clarity, and speed all have to hold at once.",
  location: "Lahore, Punjab, Pakistan",
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

export const experience: ExperienceItem[] = [
  {
    organization: "Kavtech Solutions (Private) Ltd.",
    role: "Associate Data Engineer",
    employmentType: "Full-time",
    start: "Apr 2026",
    end: "Present",
    location: "Lahore, Punjab, Pakistan · On-site",
  },
  {
    organization: "ZAPTA Technologies (Pvt.) Limited",
    role: "Associate Data Analyst",
    employmentType: "Full-time",
    start: "Feb 2026",
    end: "Apr 2026",
    location: "Lahore, Punjab, Pakistan · On-site",
    skills: ["AWS Lambda", "Extract, Transform, Load (ETL)"],
  },
  {
    organization: "ZAPTA Technologies (Pvt.) Limited",
    role: "Data Analyst Intern",
    employmentType: "Internship",
    start: "Dec 2025",
    end: "Feb 2026",
    location: "Lahore, Punjab, Pakistan · On-site",
    skills: [
      "Machine Learning",
      "Computer Vision",
      "Extract, Transform, Load (ETL)",
      "Microsoft Excel",
      "Web Scraping",
      "SQL",
      "Deep Learning",
      "Python (Programming Language)",
      "Microsoft Power BI",
      "OpenCV",
      "Amazon S3",
      "Google BigQuery",
      "Extract, Load, Transform (ELT)",
      "Tableau",
      "AWS Lambda",
      "n8n",
      "OpenAI API",
      "MLOps",
      "Amazon EC2",
      "Docker",
      "Apache Airflow",
    ],
  },
];

// Derived from the tools/skills already listed against each role in `experience` above.
export const skills: SkillGroup[] = [
  { category: "Languages", items: ["Python", "SQL"] },
  {
    category: "Data Engineering",
    items: ["ETL / ELT", "Apache Airflow", "n8n", "Web Scraping"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS Lambda", "Amazon EC2", "Amazon S3", "Google BigQuery", "Docker"],
  },
  { category: "Analytics & BI", items: ["Power BI", "Tableau", "Excel"] },
  {
    category: "Machine Learning",
    items: ["Machine Learning", "Deep Learning", "Computer Vision", "OpenCV", "MLOps", "OpenAI API"],
  },
];

export const nav: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];
