import Container from "@/design-system/components/Container";
import { LANDING_COPY, type Locale } from "@/i18n/landing";
import HeroVisual from "./HeroVisual";

interface HeroSectionProps {
  locale: Locale;
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const copy = LANDING_COPY[locale];

  return (
    <section id="hero" className="border-t border-[var(--divider)]">
      <Container className="grid min-h-0 items-center gap-[42px] py-[66px] pb-[52px] min-[640px]:py-[72px] min-[640px]:pb-[60px] min-[1100px]:min-h-[600px] min-[1100px]:grid-cols-[500px_1fr] min-[1100px]:gap-[62px] min-[1100px]:py-[84px] min-[1100px]:pb-[72px]">
        <div>
          <p className="mb-[18px] font-mono text-xs tracking-[0.04em] text-[var(--muted)] min-[1100px]:mb-5">Software Engineer</p>
          <h1 className="m-0 text-[40px] font-semibold leading-[1.03] tracking-[-0.05em] text-[var(--text)] min-[640px]:max-w-[650px] min-[640px]:text-5xl min-[1100px]:text-[54px] min-[1100px]:leading-[1.02] min-[1100px]:tracking-[-0.052em]">{copy.hero.heading}</h1>
          <p className="mt-[22px] max-w-[332px] text-[16.5px] leading-[1.5] text-[var(--muted)] min-[640px]:max-w-[540px] min-[1100px]:mt-6 min-[1100px]:max-w-[460px] min-[1100px]:text-[17px]">{copy.hero.description}</p>
        </div>
        <HeroVisual className="w-full max-w-full min-[640px]:mx-auto min-[640px]:max-w-[620px] min-[1100px]:max-w-none" />
      </Container>
    </section>
  );
}
