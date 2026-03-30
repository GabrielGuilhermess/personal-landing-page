export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  deployUrl: string;
  githubUrl: string;
  status: "live" | "development" | "planned";
}

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
}

export type SkillCategory = "frontend" | "backend" | "database" | "devops" | "tools";

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  location: string;
  email: string;
}
