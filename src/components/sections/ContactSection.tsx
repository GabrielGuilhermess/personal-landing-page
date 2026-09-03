import { PERSONAL, SOCIAL_LINKS } from "@/data/personal";
import { Container } from "@/design-system/components";

const externalLinkClass =
  "text-[15px] text-[var(--muted)] underline decoration-[var(--divider)] underline-offset-4 transition-colors duration-[var(--motion-fast)] hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";

export default function ContactSection() {
  const githubLink = SOCIAL_LINKS.find((link) => link.platform === "GitHub");
  const linkedInLink = SOCIAL_LINKS.find((link) => link.platform === "LinkedIn");

  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="border-t border-[var(--divider)] py-[72px] md:py-[88px]"
    >
      <Container>
        <div className="max-w-[760px]">
          <h2
            id="contato-title"
            className="text-[30px] font-semibold leading-[1.1] tracking-[-0.035em] text-[var(--text)] md:text-[34px]"
          >
            Vamos conversar.
          </h2>

          <a
            href={`mailto:${PERSONAL.email}`}
            className="mt-7 inline-block break-all text-[18px] text-[var(--text)] underline decoration-[var(--divider)] underline-offset-[6px] transition-colors duration-[var(--motion-fast)] hover:text-[var(--brand-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] md:text-[20px]"
          >
            {PERSONAL.email}
          </a>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3" aria-label="Links externos">
            {githubLink ? (
              <a href={githubLink.url} target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
                GitHub
              </a>
            ) : null}
            {linkedInLink ? (
              <a href={linkedInLink.url} target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
                LinkedIn
              </a>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
