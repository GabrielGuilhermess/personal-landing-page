import type { Metadata } from "next";
import { JetBrains_Mono, Outfit, Sora } from "next/font/google";
import type { ReactNode } from "react";
import { PERSONAL } from "@/data/personal";
import ThemeProvider from "@/design-system/providers/ThemeProvider";
import ThemeScript from "@/design-system/providers/ThemeScript";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gabrielguilhermess.github.io"),
  title: `${PERSONAL.name} | ${PERSONAL.role}`,
  description: "Portfólio de Gabriel Guilherme Santos da Silva com foco em desenvolvimento full-stack, projetos reais, integrações, APIs e sistemas corporativos.",
  keywords: [
    "gabriel guilherme santos da silva",
    "desenvolvedor de software",
    "full-stack",
    "projetos",
    "integrações",
    "apis",
    "sistemas corporativos",
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
    description: "Portfólio de Gabriel Guilherme Santos da Silva com foco em desenvolvimento full-stack, projetos reais, integrações, APIs e sistemas corporativos.",
    url: "https://gabrielguilhermess.github.io",
    siteName: PERSONAL.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: PERSONAL.name }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL.name} | ${PERSONAL.role}`,
    description: "Portfólio de Gabriel Guilherme Santos da Silva com foco em desenvolvimento full-stack, projetos reais, integrações, APIs e sistemas corporativos.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${sora.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body">
        <ThemeScript />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
