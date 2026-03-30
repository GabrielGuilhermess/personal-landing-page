import { PERSONAL, SOCIAL_LINKS } from "@/data/personal";
import GitHubMark from "@/design-system/components/GitHubMark";
import { LinkButton } from "@/design-system/components";

export default function HeroSection() {
  const githubLink = SOCIAL_LINKS.find((link) => link.platform === "GitHub");
  const bioExcerpt = PERSONAL.bio.split("\n\n")[0];

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20 md:pt-40">
      <div className="absolute inset-0 grid-background" />
      <div
        className="absolute inset-x-0 top-0 h-[32rem]"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(34, 169, 113, 0.12), transparent 62%)",
        }}
      />

      <div className="section-container relative z-10 text-center">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
          <p className="font-mono text-sm text-brand-500 animate-fade-in">{"projetos publicados | integrações | sistemas corporativos"}</p>
          <h1 className="font-display text-display-sm font-bold tracking-tight animate-slide-up md:text-display-xl">
            {PERSONAL.name}
          </h1>
          <p className="text-gradient text-xl font-medium animate-slide-up animate-delay-100 md:text-2xl">
            {PERSONAL.role}
          </p>
          <p className="max-w-xl text-base leading-8 text-[var(--text-secondary)] animate-slide-up animate-delay-200 md:text-lg">
            {bioExcerpt}
          </p>
          <div className="flex flex-col justify-center gap-4 animate-slide-up animate-delay-300 sm:flex-row">
            <LinkButton href="#projetos" variant="primary" size="lg">
              Ver Projetos
            </LinkButton>
            <LinkButton
              href={githubLink?.url ?? "#"}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="lg"
              icon={<GitHubMark className="h-4 w-4" />}
            >
              GitHub
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
