import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import { LANDING_COPY, type Locale } from "@/i18n/landing";

interface LandingPageProps {
  locale: Locale;
}

export default function LandingPage({ locale }: LandingPageProps) {
  const copy = LANDING_COPY[locale];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-50 rounded-[var(--radius-control)] bg-[var(--surface)] px-4 py-3 text-sm font-medium text-[var(--text)] shadow-[var(--elevation-raised)] focus:not-sr-only focus:fixed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
      >
        {copy.skipToContent}
      </a>

      <Header locale={locale} />
      <main
        id="main-content"
        tabIndex={-1}
        className="overflow-x-hidden focus:outline-none"
      >
        <HeroSection locale={locale} />
        <SkillsSection locale={locale} />
        <ProjectsSection locale={locale} />
        <AboutSection locale={locale} />
        <ContactSection locale={locale} />
      </main>
      <Footer />
    </>
  );
}
