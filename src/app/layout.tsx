import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import { headers } from "next/headers";
import type { ReactNode } from "react";
import { PERSONAL } from "@/data/personal";
import ThemeProvider from "@/design-system/providers/ThemeProvider";
import ThemeScript from "@/design-system/providers/ThemeScript";
import { LANDING_COPY } from "@/i18n/landing";
import { resolveRequestLocale } from "@/i18n/locale";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const locale = resolveRequestLocale(
    requestHeaders.get("x-landing-locale"),
    requestHeaders.get("accept-language"),
  );
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

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const requestHeaders = await headers();
  const locale = resolveRequestLocale(
    requestHeaders.get("x-landing-locale"),
    requestHeaders.get("accept-language"),
  );

  return (
    <html
      lang={LANDING_COPY[locale].htmlLang}
      suppressHydrationWarning
      className={`${instrumentSans.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="font-body">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
