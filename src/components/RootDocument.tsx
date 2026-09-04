import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import type { ReactNode } from "react";
import ThemeProvider from "@/design-system/providers/ThemeProvider";
import ThemeScript from "@/design-system/providers/ThemeScript";

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

interface RootDocumentProps {
  children: ReactNode;
  lang: string;
}

export default function RootDocument({ children, lang }: RootDocumentProps) {
  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${instrumentSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="font-body">
        <ThemeScript />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
