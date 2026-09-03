import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { resolveLocaleFromAcceptLanguage } from "@/i18n/locale";

export default async function HomePage() {
  const requestHeaders = await headers();
  const locale = resolveLocaleFromAcceptLanguage(
    requestHeaders.get("accept-language"),
  );

  redirect(`/${locale}`);
}
