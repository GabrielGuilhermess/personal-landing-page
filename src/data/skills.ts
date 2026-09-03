import type { Skill, SkillCategory } from "@/types";

export interface CompetencyGroup {
  title: string;
  terms: string[];
  detail: string;
}

export const COMPETENCIES: CompetencyGroup[] = [
  {
    title: "Desenvolvimento",
    terms: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "React",
      "Next.js",
      "NestJS",
      "Java",
      "C# / .NET",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
    detail:
      "Construção e evolução de aplicações web, APIs, integrações, regras de negócio e persistência, com testes unitários, de integração, E2E e TDD conforme o contexto.",
  },
  {
    title: "Arquitetura & Engenharia",
    terms: [
      "REST APIs",
      "API Design",
      "Integrações",
      "Modelagem de domínio",
      "Sistemas distribuídos",
      "Mensageria",
      "Segurança",
      "Performance",
    ],
    detail:
      "Desenho de APIs e domínios, integração entre serviços e tratamento de retries, timeouts e falhas parciais. Segurança envolve autenticação, autorização, controle de acesso e validação; performance envolve análise de gargalos, consultas e tempo de resposta.",
  },
  {
    title: "Observabilidade & Operação",
    terms: ["Troubleshooting", "Incident Investigation", "Log Analysis", "Kibana", "Elasticsearch / Elastic"],
    detail:
      "Investigação de incidentes, análise de logs, reprodução de falhas e diagnóstico de comportamento inesperado em produção, usando observabilidade para chegar da evidência à causa.",
  },
  {
    title: "Delivery & CI/CD",
    terms: ["Docker", "Jenkins", "GitHub Actions", "Argo CD", "GitOps", "Scrum", "Kanban", "Code Review"],
    detail:
      "Automação e operação do fluxo de entrega, da integração contínua ao deploy e sincronização de ambientes, combinando práticas de GitOps, revisão de código e organização do trabalho.",
  },
  {
    title: "IA aplicada ao desenvolvimento",
    terms: ["AI Agents", "Multi-Agent Systems", "Context Engineering", "SDD / Spec-Driven Development"],
    detail:
      "Uso de agentes e contexto estruturado para apoiar investigação, planejamento e implementação de software, mantendo IA como ferramenta de engenharia e não como identidade principal.",
  },
];

// Legacy data remains available until all old consumers are removed in the cleanup card.
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
