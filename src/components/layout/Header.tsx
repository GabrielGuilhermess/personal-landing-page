import Container from "@/design-system/components/Container";
import GitHubMark from "@/design-system/components/GitHubMark";
import ThemeControl from "@/design-system/components/ThemeControl";

const NAV_ITEMS = [
  { href: "#competencias", label: "Competências" },
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
] as const;

function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-full w-full">
      <path d="M5.4 8.8H2.2V19h3.2V8.8ZM3.8 3.7A1.9 1.9 0 1 0 3.8 7.5a1.9 1.9 0 0 0 0-3.8ZM10.6 8.8H7.5V19h3.1v-5.1c0-1.4.3-2.7 2-2.7 1.7 0 1.7 1.6 1.7 2.8V19h3.2v-5.5c0-2.7-.6-4.9-3.8-4.9-1.5 0-2.6.8-3 1.6h-.1V8.8Z" />
    </svg>
  );
}

const externalLinkClass =
  "inline-flex h-[30px] w-[30px] items-center justify-center text-[var(--muted)] transition-colors duration-[var(--motion-fast)] hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";

export default function Header() {
  return (
    <header className="h-[68px] border-b border-[var(--divider)] bg-[var(--background)]">
      <Container className="grid h-full grid-cols-[1fr_auto] items-center gap-5 min-[1100px]:grid-cols-[1fr_auto_auto] min-[1100px]:gap-[30px]">
        <a
          href="#hero"
          className="w-fit text-[15px] font-semibold tracking-[-0.02em] text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        >
          Gabriel Guilherme
        </a>

        <nav aria-label="Navegação principal" className="hidden min-[1100px]:block">
          <ul className="flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[13px] text-[var(--muted)] underline-offset-4 transition-colors duration-[var(--motion-fast)] hover:text-[var(--text)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-[11px]">
          <div className="hidden items-center gap-[11px] min-[1100px]:flex">
            <a
              href="https://github.com/GabrielGuilhermess"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={externalLinkClass}
            >
              <GitHubMark className="h-[17px] w-[17px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/gabrielguilhermess/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={externalLinkClass}
            >
              <span className="h-[17px] w-[17px]">
                <LinkedInMark />
              </span>
            </a>
          </div>
          <ThemeControl className="h-[30px] w-[30px] border-0 hover:bg-[var(--surface)]" />
        </div>
      </Container>
    </header>
  );
}
