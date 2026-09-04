import type { ReactNode } from "react";
import RootDocument from "@/components/RootDocument";
import { createLandingMetadata } from "@/i18n/metadata";
import "@/app/globals.css";

export const metadata = createLandingMetadata("en");

export default function EnglishRootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
