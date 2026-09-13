export const SUPPORTED_LOCALES = ["pt", "en"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export function isLocale(
  value: string | null | undefined,
): value is Locale {
  return value === "pt" || value === "en";
}

export function resolveLocaleFromAcceptLanguage(
  acceptLanguage: string | null | undefined,
): Locale {
  if (!acceptLanguage) {
    return "pt";
  }

  const candidates = acceptLanguage
    .split(",")
    .map((entry, index) => {
      const [rawTag, ...parameters] = entry.trim().split(";");
      const language = rawTag.toLowerCase().split("-")[0];

      if (!isLocale(language)) {
        return null;
      }

      const qualityParameter = parameters.find((parameter) =>
        parameter.trim().startsWith("q="),
      );
      const parsedQuality = qualityParameter
        ? Number.parseFloat(qualityParameter.trim().slice(2))
        : 1;
      const quality = Number.isFinite(parsedQuality) ? parsedQuality : 0;

      return { locale: language, quality, index };
    })
    .filter(
      (
        candidate,
      ): candidate is { locale: Locale; quality: number; index: number } =>
        candidate !== null,
    )
    .sort(
      (first, second) =>
        second.quality - first.quality || first.index - second.index,
    );

  return candidates[0]?.locale ?? "pt";
}

export function resolveRequestLocale(
  routeLocale: string | null | undefined,
  acceptLanguage: string | null | undefined,
): Locale {
  return isLocale(routeLocale)
    ? routeLocale
    : resolveLocaleFromAcceptLanguage(acceptLanguage);
}
