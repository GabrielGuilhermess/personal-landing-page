import type { ReactNode } from "react";
import RootDocument from "@/components/RootDocument";
import { createLandingMetadata } from "@/i18n/metadata";
import "@/app/globals.css";

export const metadata = createLandingMetadata("pt");

export default function PortugueseRootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <RootDocument lang="pt-BR">{children}</RootDocument>;
}
