import type { Locale } from "./locale";

export type { Locale } from "./locale";

export interface ThemeControlLabels {
  toggle: string;
  activateLight: string;
  activateDark: string;
}

export interface CompetencyCopy {
  title: string;
  terms: string[];
  detail: string;
}

interface LandingCopy {
  htmlLang: string;
  metadata: {
    description: string;
    openGraphLocale: string;
  };
  skipToContent: string;
  navigation: {
    ariaLabel: string;
    competencies: string;
    projects: string;
    about: string;
  };
  theme: ThemeControlLabels;
  hero: {
    heading: string;
    description: string;
  };
  competencies: {
    title: string;
    items: CompetencyCopy[];
  };
  projects: {
    title: string;
    openProject: string;
    items: {
      devtoolbox: {
        description: string;
        imageAlt: string;
      };
      "economia-brasil": {
        description: string;
        imageAlt: string;
      };
    };
  };
  about: {
    title: string;
    bio: string;
  };
  contact: {
    title: string;
    externalLinksAriaLabel: string;
  };
}

export const LANDING_COPY: Record<Locale, LandingCopy> = {
  pt: {
    htmlLang: "pt-BR",
    metadata: {
      description:
        "Portfólio de Gabriel Guilherme Santos da Silva com foco em desenvolvimento de software, projetos reais, integrações, APIs e aplicações corporativas.",
      openGraphLocale: "pt_BR",
    },
    skipToContent: "Ir para o conteúdo principal",
    navigation: {
      ariaLabel: "Navegação principal",
      competencies: "Competências",
      projects: "Projetos",
      about: "Sobre",
    },
    theme: {
      toggle: "Alternar tema",
      activateLight: "Ativar tema claro",
      activateDark: "Ativar tema escuro",
    },
    hero: {
      heading: "Construção e evolução de software, pensando além da implementação.",
      description:
        "Sistemas bem projetados, observáveis e confiáveis, com foco em impacto real e evolução contínua.",
    },
    competencies: {
      title: "Competências",
      items: [
        {
          title: "Desenvolvimento",
          terms: ["TypeScript", "JavaScript", "Node.js", "React", "Next.js", "NestJS", "Java", "C# / .NET", "SQL", "PostgreSQL", "MongoDB", "Redis"],
          detail:
            "Construção e evolução de aplicações web, APIs, integrações, regras de negócio e persistência, com testes unitários, de integração, E2E e TDD conforme o contexto.",
        },
        {
          title: "Arquitetura & Engenharia",
          terms: ["REST APIs", "API Design", "Integrações", "Modelagem de domínio", "Sistemas distribuídos", "Mensageria", "Segurança", "Performance"],
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
      ],
    },
    projects: {
      title: "Projetos",
      openProject: "Abrir projeto",
      items: {
        devtoolbox: {
          description: "Conjunto de ferramentas utilitárias para desenvolvimento.",
          imageAlt: "Tela real do DevToolbox com navegação lateral e ferramentas de desenvolvimento.",
        },
        "economia-brasil": {
          description: "Aplicação voltada à organização e visualização de dados econômicos brasileiros.",
          imageAlt: "Dashboard real do Economia Brasil com indicadores e visualizações de dados econômicos.",
        },
      },
    },
    about: {
      title: "Sobre",
      bio: "Construo software com interesse tanto na engenharia por trás da aplicação quanto na experiência final de quem a utiliza.\n\nTenho especial interesse em sistemas que precisam ser evoluídos, observados e mantidos ao longo do tempo.",
    },
    contact: {
      title: "Vamos conversar.",
      externalLinksAriaLabel: "Links externos",
    },
  },
  en: {
    htmlLang: "en",
    metadata: {
      description: "Gabriel Guilherme Santos da Silva's portfolio, focused on software development, real-world projects, integrations, APIs, and enterprise applications.",
      openGraphLocale: "en_US",
    },
    skipToContent: "Skip to main content",
    navigation: {
      ariaLabel: "Main navigation",
      competencies: "Expertise",
      projects: "Projects",
      about: "About",
    },
    theme: {
      toggle: "Toggle theme",
      activateLight: "Enable light theme",
      activateDark: "Enable dark theme",
    },
    hero: {
      heading: "Building and evolving software, thinking beyond implementation.",
      description: "Well-designed, observable, reliable systems, focused on real impact and continuous evolution.",
    },
    competencies: {
      title: "Expertise",
      items: [
        {
          title: "Development",
          terms: ["TypeScript", "JavaScript", "Node.js", "React", "Next.js", "NestJS", "Java", "C# / .NET", "SQL", "PostgreSQL", "MongoDB", "Redis"],
          detail: "Building and evolving web applications, APIs, integrations, business rules, and persistence, using unit, integration, E2E, and TDD practices when appropriate.",
        },
        {
          title: "Architecture & Engineering",
          terms: ["REST APIs", "API Design", "Integrations", "Domain Modeling", "Distributed Systems", "Messaging", "Security", "Performance"],
          detail: "Designing APIs and domains, integrating services, and handling retries, timeouts, and partial failures. Security covers authentication, authorization, access control, and validation; performance covers bottleneck analysis, queries, and response time.",
        },
        {
          title: "Observability & Operations",
          terms: ["Troubleshooting", "Incident Investigation", "Log Analysis", "Kibana", "Elasticsearch / Elastic"],
          detail: "Investigating incidents, analyzing logs, reproducing failures, and diagnosing unexpected production behavior, using observability to move from evidence to root cause.",
        },
        {
          title: "Delivery & CI/CD",
          terms: ["Docker", "Jenkins", "GitHub Actions", "Argo CD", "GitOps", "Scrum", "Kanban", "Code Review"],
          detail: "Automating and operating the delivery flow from continuous integration through deployment and environment synchronization, combining GitOps, code review, and work-management practices.",
        },
        {
          title: "AI for Software Development",
          terms: ["AI Agents", "Multi-Agent Systems", "Context Engineering", "SDD / Spec-Driven Development"],
          detail: "Using agents and structured context to support software investigation, planning, and implementation, while keeping AI as an engineering tool rather than a primary professional identity.",
        },
      ],
    },
    projects: {
      title: "Projects",
      openProject: "Open project",
      items: {
        devtoolbox: {
          description: "A collection of practical utilities for software development.",
          imageAlt: "Real DevToolbox screen showing side navigation and development utilities.",
        },
        "economia-brasil": {
          description: "An application for organizing and visualizing Brazilian economic data.",
          imageAlt: "Real Economia Brasil dashboard showing economic indicators and data visualizations.",
        },
      },
    },
    about: {
      title: "About",
      bio: "I build software with equal interest in the engineering behind the application and the experience of the people who use it.\n\nI am particularly interested in systems that need to evolve, be observed, and remain maintainable over time.",
    },
    contact: {
      title: "Let's talk.",
      externalLinksAriaLabel: "External links",
    },
  },
};
