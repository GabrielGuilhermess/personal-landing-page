import type { Skill, SkillCategory } from "@/types";

export const SKILLS: Skill[] = [
  { name: "Java", icon: "backend", category: "backend" },
  { name: "Spring Boot", icon: "backend", category: "backend" },
  { name: "APIs REST", icon: "integration", category: "backend" },
  { name: "Integrações", icon: "integration", category: "backend" },
  { name: "PostgreSQL", icon: "database", category: "database" },
  { name: "JasperReports", icon: "reporting", category: "tools" },
  { name: "ZK", icon: "frontend", category: "frontend" },
  { name: "Jenkins", icon: "delivery", category: "devops" },
  { name: "GitLab CI/CD", icon: "delivery", category: "devops" },
  { name: "React", icon: "frontend", category: "frontend" },
  { name: "Node.js", icon: "backend", category: "backend" },
  { name: "JavaScript", icon: "frontend", category: "frontend" },
];

export const SKILL_CATEGORIES: Record<SkillCategory | "all", string> = {
  all: "Todos",
  frontend: "Interfaces",
  backend: "Back-end",
  database: "Banco de Dados",
  devops: "DevOps",
  tools: "Ferramentas",
};
