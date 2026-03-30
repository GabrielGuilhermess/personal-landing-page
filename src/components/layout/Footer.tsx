import { Linkedin, Mail } from "lucide-react";
import { PERSONAL, SOCIAL_LINKS } from "@/data/personal";
import GitHubMark from "@/design-system/components/GitHubMark";

const socialIcons = {
  github: GitHubMark,
  linkedin: Linkedin,
  mail: Mail,
} as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
      <div className="section-container flex flex-col items-center justify-between gap-8 py-10 text-center md:flex-row md:text-left">
        <div className="space-y-2">
          <a className="inline-flex items-center gap-3" href="#hero">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-500 font-display text-base font-bold text-white">
              G
            </span>
            <span className="font-display text-base font-semibold tracking-tight">{PERSONAL.name}</span>
          </a>
          <p className="text-sm text-[var(--text-secondary)]">Desenvolvimento full-stack para sistemas corporativos — {currentYear}</p>
        </div>

        <div className="flex flex-col items-center gap-5 md:items-end">
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => {
              const Icon = socialIcons[link.icon as keyof typeof socialIcons];

              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.platform}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-secondary)] transition-colors hover:border-brand-500 hover:text-brand-500"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
          <a className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-brand-500" href="#hero">
            Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  );
}
