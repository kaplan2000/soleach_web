import type { Metadata } from "next";
import { locales, type Locale, localeHtmlLang } from "./i18n";
import { localeUrl, siteConfig } from "./site";

interface BuildMetadataArgs {
  locale: Locale;
  /** Path after the locale segment, e.g. "" for home or "services". */
  path?: string;
  title: string;
  description: string;
}

/**
 * Produces canonical + hreflang alternates and Open Graph tags for a page,
 * so every page ships correct bilingual SEO signals.
 */
export function buildMetadata({
  locale,
  path = "",
  title,
  description,
}: BuildMetadataArgs): Metadata {
  const canonical = localeUrl(locale, path);

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[localeHtmlLang[l]] = localeUrl(l, path);
  }
  // x-default points at the primary (Turkish) locale.
  languages["x-default"] = localeUrl("tr", path);

  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: localeHtmlLang[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
