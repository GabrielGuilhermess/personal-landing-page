export interface ProjectShowcase {
  id: "devtoolbox" | "economia-brasil";
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  deployUrl: string;
  githubUrl: string;
}

export const PROJECTS: ProjectShowcase[] = [
  {
    id: "devtoolbox",
    title: "DevToolbox",
    description: "Conjunto de ferramentas utilitárias para desenvolvimento.",
    imageUrl: "/images/projects/devtoolbox-2026-09-02.png",
    imageAlt: "Tela real do DevToolbox com navegação lateral e ferramentas de desenvolvimento.",
    deployUrl: "https://dev-toolbox-sigma.vercel.app/",
    githubUrl: "https://github.com/GabrielGuilhermess/dev-toolbox",
  },
  {
    id: "economia-brasil",
    title: "Economia Brasil",
    description: "Aplicação voltada à organização e visualização de dados econômicos brasileiros.",
    imageUrl: "/images/projects/economia-brasil-2026-09-02.png",
    imageAlt: "Dashboard real do Economia Brasil com indicadores e visualizações de dados econômicos.",
    deployUrl: "https://dashboard-economia-brasil.vercel.app/dashboard",
    githubUrl: "https://github.com/GabrielGuilhermess/dashboard-economia-brasil",
  },
];
