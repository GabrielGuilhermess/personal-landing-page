import Container from "@/design-system/components/Container";
import GitHubMark from "@/design-system/components/GitHubMark";
import ThemeControl from "@/design-system/components/ThemeControl";
import { LANDING_COPY, type Locale } from "@/i18n/landing";

interface HeaderProps {
  locale: Locale;
}

function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-full w-full">
      <path d="M5.4 8.8H2.2V19h3.2V8.8ZM3.8 3.7A1.9 1.9 0 1 0 3.8 7.5a1.9 1.9 0 0 0 0-3.8ZM10.6 8.8H7.5V19h3.1v-5.1c0-1.4.3-2.7 2-2.7 1.7 0 1.7 1.6 1.7 2.8V19h3.2v-5.5c0-2.7-.6-4.9-3.8-4.9-1.5 0-2.6.8-3 1.6h-.1V8.8Z" />
    </svg>
  );
}

const externalLinkClass =
  "inline-flex h-9 w-9 items-center justify-center text-[var(--muted)] transition-colors duration-[var(--motion-fast)] hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";

export default function Header({ locale }: HeaderProps) {
  const copy = LANDING_COPY[locale];
  const navigationItems = [
    { href: "#competencias", label: copy.navigation.competencies },
    { href: "#projetos", label: copy.navigation.projects },
    { href: "#sobre", label: copy.navigation.about },
  ] as const;

  return (
    <header className="h-[68px] bg-[var(--background)]">
      <Container className="grid h-full grid-cols-[1fr_auto] items-center gap-5 md:grid-cols-[1fr_auto_auto] md:gap-6 min-[1100px]:gap-[30px]">
        <a
          href="#hero"
          className="inline-flex min-h-9 w-fit items-center text-[15px] font-semibold tracking-[-0.02em] text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        >
          Gabriel Guilherme
        </a>

        <nav aria-label={copy.navigation.ariaLabel} className="hidden md:block">
          <ul className="flex items-center gap-5 min-[1100px]:gap-7">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-9 items-center text-[13px] text-[var(--muted)] underline-offset-4 transition-colors duration-[var(--motion-fast)] hover:text-[var(--text)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-[11px]">
          <div className="hidden items-center gap-[11px] min-[1100px]:flex">
            <a href="https://github.com/GabrielGuilhermess" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={externalLinkClass}>
              <GitHubMark className="h-[17px] w-[17px]" />
            </a>
            <a href="https://www.linkedin.com/in/gabrielguilhermess/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={externalLinkClass}>
              <span className="h-[17px] w-[17px]"><LinkedInMark /></span>
            </a>
          </div>
          <ThemeControl labels={copy.theme} className="h-9 w-9 border-0 hover:bg-[var(--surface)]" />
        </div>
      </Container>
    </header>
  );
}
