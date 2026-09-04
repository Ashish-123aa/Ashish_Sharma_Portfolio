export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
  tech: string[];
}

export interface ProjectEntry {
  name: string;
  description: string;
  features: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  date: string;
  detail?: string;
  isPrimary?: boolean;
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  date: string;
}

export interface SkillCategory {
  label: string;
  items: string[];
}

export interface ExploringCategory {
  label: string;
  items: string[];
}

export interface StatEntry {
  label: string;
  value: string;
}

export interface ResumeData {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumeFile: string;
  profileImage: string;
  summaryIntro: string;
  summaryPoints: string[];
  stats: StatEntry[];
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  education: EducationEntry[];
  certifications: CertificationEntry[];
  skills: SkillCategory[];
  exploring: ExploringCategory[];
}
