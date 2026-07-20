import type { Metadata } from "next";
import { locales, type Locale, localeHtmlLang } from "./i18n";
import { localeUrl, siteConfig } from "./site";

interface BuildMetadataArgs {
  locale: Locale;
  /** Path after the locale segment, e.g. "" for home or "services". */
  path?: string;
  /** Per-locale paths for pages whose slug differs by language (blog posts). */
  pathByLocale?: Partial<Record<Locale, string>>;
  title: string;
  description: string;
  /** Open Graph type — blog posts use "article". */
  ogType?: "website" | "article";
}

/**
 * Produces canonical + hreflang alternates and Open Graph tags for a page,
 * so every page ships correct bilingual SEO signals.
 */
export function buildMetadata({
  locale,
  path = "",
  pathByLocale,
  title,
  description,
  ogType = "website",
}: BuildMetadataArgs): Metadata {
  const pathFor = (l: Locale) => pathByLocale?.[l] ?? path;
  const canonical = localeUrl(locale, pathFor(locale));

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[localeHtmlLang[l]] = localeUrl(l, pathFor(l));
  }
  // x-default points at the primary (Turkish) locale.
  languages["x-default"] = localeUrl("tr", pathFor("tr"));

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
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
