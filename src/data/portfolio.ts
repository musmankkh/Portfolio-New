import type {
  ContactLink,
  ExperienceItem,
  FocusArea,
  NavItem,
  ProcessStep,
  Profile,
  Project,
  SkillGroup,
} from "./types";

/**
 * Single source of truth for portfolio content, sourced from ContentPortfolio.md.
 * Placeholder fields render a muted "not provided yet" state rather than
 * fabricated copy — fill in real values here, nothing downstream changes shape.
 */

export const profile: Profile = {
  name: "Muhammad Usman Asghar",
  role: "Data Engineer",
  tagline: "Engineering Data-Driven AI, Automation & Cloud Systems",
  subheadline:
    "I build data pipelines, AI-powered applications, and automation systems that turn business data and repetitive processes into reliable, scalable workflows.",
  microLine: "Currently building AI and data-driven solutions at Kavtech Solutions.",
  location: "Lahore, Punjab, Pakistan",
  resumeUrl: "",
};

const rawContactLinks: ContactLink[] = [
  { label: "LinkedIn", href: import.meta.env.VITE_LINKEDIN_URL ?? "", icon: "linkedin" },
  { label: "GitHub", href: import.meta.env.VITE_GITHUB_URL ?? "", icon: "github" },
  { label: "Instagram", href: import.meta.env.VITE_INSTAGRAM_URL ?? "", icon: "instagram" },
  { label: "WhatsApp", href: import.meta.env.VITE_WHATSAPP_URL ?? "", icon: "whatsapp" },
];

export const contactLinks: ContactLink[] = rawContactLinks.filter((link) => link.href);

// ---- What I Do ----
export const whatIDo = {
  heading: "Turning Business Data Into Intelligent Systems",
  supporting:
    "I work at the intersection of data engineering, AI, cloud infrastructure, and automation — building systems that move data reliably, reduce manual work, and help businesses make better use of their information.",
};

export const focusAreas: FocusArea[] = [
  {
    title: "Data Engineering",
    description:
      "Building reliable systems for collecting, transforming, and delivering business data.",
    body: "I work with data pipelines, APIs, databases, ETL/ELT workflows, cloud services, and backend systems to move data from its source to where it can create value.",
    icon: "data",
  },
  {
    title: "Data-Driven AI",
    description:
      "Connecting business data with AI to create more useful and context-aware applications.",
    body: "I build AI-powered solutions using APIs, retrieval-based approaches, prompt engineering, and business data to support knowledge management, analysis, content workflows, and intelligent decision-making.",
    icon: "ai",
  },
  {
    title: "Business Automation",
    description: "Turning repetitive operational processes into automated workflows.",
    body: "I automate tasks such as reporting, lead workflows, content generation, data processing, notifications, and system-to-system processes using APIs, workflow automation platforms, and serverless services.",
    icon: "automation",
  },
  {
    title: "Cloud & System Integration",
    description: "Connecting cloud infrastructure, APIs, and business tools into reliable systems.",
    body: "I work with AWS services, REST and WebSocket APIs, third-party integrations, and serverless architectures to connect applications and data across the systems businesses already use.",
    icon: "cloud",
  },
];

// ---- Hero rotating keywords (vertical-swap accent under the micro line) ----
export const heroKeywords: string[] = [
  "Data Pipelines",
  "AI Systems",
  "Automation",
  "Cloud Infrastructure",
];

// ---- About ----
export const about = {
  heading: "I Build Systems Where Data, AI & Automation Meet.",
  paragraphs: [
    "I'm a Data Engineer focused on building data-driven applications, AI systems, cloud infrastructure, and automation workflows that solve real business problems.",
    "I care less about using technology simply because it's new and more about whether the system actually makes a process faster, more reliable, easier to understand, or easier to scale.",
    "The problems I find most interesting sit between business requirements and technical possibilities — taking messy data, repetitive processes, disconnected systems, or unclear requirements and turning them into software and workflows that people can actually use.",
    "At Kavtech Solutions, I work across data, cloud, AI, backend systems, frontend applications, and integrations. My work involves connecting different pieces of a system — from data sources and APIs to cloud services, automation workflows, and AI capabilities — and turning them into production-ready solutions.",
  ],
  approach: "Understand the data → Build the pipeline → Automate the process → Apply intelligence → Deliver measurable value.",
};

export const positioningStatement =
  "I don't just build applications. I build the data, cloud, AI, and automation systems behind useful business solutions.";

// ---- Skills / Stack ----
export const skills: SkillGroup[] = [
  {
    category: "Data Engineering & Backend",
    icon: "data",
    items: ["Python", "FastAPI", "SQL", "APIs", "ETL / ELT", "Data Pipelines", "Data Processing", "Backend Services"],
  },
  {
    category: "Cloud & Serverless",
    icon: "cloud",
    items: ["AWS Lambda", "API Gateway", "S3", "Step Functions", "DynamoDB", "EventBridge", "AWS Amplify", "Serverless Architecture"],
  },
  {
    category: "AI & Data-Driven Automation",
    icon: "ai",
    items: ["OpenAI APIs", "Claude API", "Vector Search / RAG", "Prompt Engineering", "n8n", "Make", "Zapier"],
  },
  {
    category: "Frontend & Applications",
    icon: "app",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Material UI", "Redux Toolkit", "RTK Query", "TanStack Query", "Zustand"],
  },
  {
    category: "Integrations",
    icon: "automation",
    items: ["Google Cloud APIs", "Gmail", "Slack", "Jira", "REST APIs", "WebSockets", "AWS S3"],
  },
];

// ---- How I Build ----
export const howIBuild = {
  heading: "From Raw Data to Intelligent Automation",
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Understand",
    label: "Business Problem",
    description: "Understand the operational problem, available data, existing systems, and desired outcome.",
  },
  {
    index: "02",
    title: "Connect",
    label: "Data & Integrations",
    description: "Connect APIs, databases, cloud services, third-party platforms, and business systems.",
  },
  {
    index: "03",
    title: "Engineer",
    label: "Pipelines & Processing",
    description: "Build reliable workflows for collecting, transforming, validating, and delivering data.",
  },
  {
    index: "04",
    title: "Automate",
    label: "Workflows",
    description: "Remove repetitive manual processes using APIs, serverless services, and automation platforms.",
  },
  {
    index: "05",
    title: "Apply AI",
    label: "Intelligence Layer",
    description: "Use AI, retrieval, business context, and structured data to make applications more useful and capable.",
  },
  {
    index: "06",
    title: "Deliver",
    label: "Production System",
    description: "Turn the workflow into a maintainable application or system that people can actually use.",
  },
];

// ---- Visual data pipeline showcase ----
export const dataPipelineShowcase = {
  heading: "Where Data Becomes Action",
  stages: ["Sources", "Ingestion", "Processing", "Storage", "Intelligence", "Automation", "Insights"],
};

// ---- Projects ----
export const workSection = {
  heading: "Selected Work",
  supporting: "A selection of systems, data workflows, AI applications, and automation solutions I've worked on.",
};

export const projects: Project[] = [];

// ---- Experience ----
export const experienceSection = {
  heading: "Experience",
  supporting: "Building practical systems across data engineering, AI, cloud infrastructure, automation, and modern web applications.",
};

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

// ---- Contact ----
export const contactSection = {
  heading: "Let's Build Something With Data.",
  text: "Whether you have a data pipeline to build, a repetitive process to automate, an AI application to develop, a cloud system to design, or a business workflow that needs untangling — I'd like to hear about it.",
  interests:
    "I'm interested in working on data engineering, AI applications, business automation, cloud systems, integrations, and data-driven products.",
  primaryCta: "Start a Conversation",
};

export const nav: NavItem[] = [
  { label: "What I Do", href: "/#what-i-do" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];
