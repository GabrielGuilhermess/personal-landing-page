import type { Metadata } from "next";
import { PERSONAL } from "@/data/personal";
import { LANDING_COPY, type Locale } from "@/i18n/landing";

export function createLandingMetadata(locale: Locale): Metadata {
  const copy = LANDING_COPY[locale];

  return {
    metadataBase: new URL("https://gabrielguilhermess.github.io"),
    title: `${PERSONAL.name} | ${PERSONAL.role}`,
    description: copy.metadata.description,
    keywords: [
      "gabriel guilherme santos da silva",
      "software engineer",
      "desenvolvedor de software",
      "full-stack",
      "projetos",
      "integrações",
      "apis",
      "aplicações corporativas",
      "portfolio",
      "java",
      "postgresql",
    ],
    authors: [{ name: PERSONAL.name }],
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "pt-BR": "/pt",
        en: "/en",
      },
    },
    openGraph: {
      title: `${PERSONAL.name} | ${PERSONAL.role}`,
      description: copy.metadata.description,
      url: `/${locale}`,
      siteName: PERSONAL.name,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: PERSONAL.name }],
      locale: copy.metadata.openGraphLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${PERSONAL.name} | ${PERSONAL.role}`,
      description: copy.metadata.description,
      images: ["/og-image.png"],
    },
    robots: { index: true, follow: true },
  };
}
