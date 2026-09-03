import { Container } from "@/design-system/components";
import { LANDING_COPY, type Locale } from "@/i18n/landing";

interface AboutSectionProps {
  locale: Locale;
}

export default function AboutSection({ locale }: AboutSectionProps) {
  const copy = LANDING_COPY[locale];
  const paragraphs = copy.about.bio.split("\n\n");

  return (
    <section id="sobre" aria-labelledby="sobre-title" className="border-t border-[var(--divider)] py-[72px] md:py-[88px]">
      <Container>
        <header className="mb-8 md:mb-10">
          <h2 id="sobre-title" className="text-[30px] font-semibold leading-[1.1] tracking-[-0.035em] text-[var(--text)] md:text-[34px]">{copy.about.title}</h2>
        </header>
        <div className="max-w-[760px] space-y-5 text-[17px] leading-[1.7] text-[var(--muted)] md:text-[18px]">
          {paragraphs.map((paragraph) => (<p key={paragraph}>{paragraph}</p>))}
        </div>
      </Container>
    </section>
  );
}
