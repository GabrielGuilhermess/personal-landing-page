"use client";

import { useEffect } from "react";
import { resolveLocaleFromAcceptLanguage } from "@/i18n/locale";

export default function LocaleRedirectPage() {
  useEffect(() => {
    const browserLanguages =
      navigator.languages?.length > 0
        ? navigator.languages.join(",")
        : navigator.language;
    const locale = resolveLocaleFromAcceptLanguage(browserLanguages);
    window.location.replace(`/${locale}`);
  }, []);

  return (
    <main className="mx-auto flex min-h-screen max-w-[720px] items-center px-5 text-[var(--text)]">
      <p className="text-sm text-[var(--muted)]" aria-live="polite">
        Abrindo o portfólio…
      </p>
      <noscript>
        <p className="ml-3 text-sm">
          <a className="underline underline-offset-4" href="/pt">
            Continuar em português
          </a>
          {" · "}
          <a className="underline underline-offset-4" href="/en">
            Continue in English
          </a>
        </p>
      </noscript>
    </main>
  );
}
