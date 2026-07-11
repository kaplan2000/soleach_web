export const locales = ["tr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const localeLabels: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
};

/** BCP-47 language tags used for <html lang> and hreflang. */
export const localeHtmlLang: Record<Locale, string> = {
  tr: "tr-TR",
  en: "en",
};
