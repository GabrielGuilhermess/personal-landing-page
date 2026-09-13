import { PERSONAL, SOCIAL_LINKS } from "@/data/personal";
import { Container } from "@/design-system/components";
import { LANDING_COPY, type Locale } from "@/i18n/landing";

interface ContactSectionProps {
  locale: Locale;
}

const externalLinkClass =
  "inline-flex min-h-9 items-center text-[15px] text-[var(--muted)] underline decoration-[var(--divider)] underline-offset-4 transition-colors duration-[var(--motion-fast)] hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";

export default function ContactSection({ locale }: ContactSectionProps) {
  const copy = LANDING_COPY[locale];
  const githubLink = SOCIAL_LINKS.find((link) => link.platform === "GitHub");
  const linkedInLink = SOCIAL_LINKS.find((link) => link.platform === "LinkedIn");

  return (
    <section id="contato" aria-labelledby="contato-title" className="border-t border-[var(--divider)] py-[72px] md:py-[88px]">
      <Container>
        <div className="max-w-[760px]">
          <h2 id="contato-title" className="text-[30px] font-semibold leading-[1.1] tracking-[-0.035em] text-[var(--text)] md:text-[34px]">{copy.contact.title}</h2>
          <a href={`mailto:${PERSONAL.email}`} className="mt-7 inline-flex min-h-11 items-center break-all text-[18px] text-[var(--text)] underline decoration-[var(--divider)] underline-offset-[6px] transition-colors duration-[var(--motion-fast)] hover:text-[var(--brand-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] md:text-[20px]">{PERSONAL.email}</a>
          <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-3" aria-label={copy.contact.externalLinksAriaLabel}>
            {githubLink ? (<a href={githubLink.url} target="_blank" rel="noopener noreferrer" className={externalLinkClass}>GitHub</a>) : null}
            {linkedInLink ? (<a href={linkedInLink.url} target="_blank" rel="noopener noreferrer" className={externalLinkClass}>LinkedIn</a>) : null}
          </nav>
        </div>
      </Container>
    </section>
  );
}
