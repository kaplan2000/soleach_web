import type { Locale } from "./i18n";

/** Canonical production origin (no trailing slash). */
export const siteUrl = "https://soleach.com";

export const siteConfig = {
  name: "Soleach",
  legalName: "Soleach Dijital Ajans",
  email: "hello@soleach.com",
  /** Welcome / brief form collected from prospective brands. */
  formUrl: "https://forms.gle/UoVu24YimCn4U5AD7",
  formEmbedUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLScIJpH84oZPedMOseIgi1gm4v8p4iDTZ1gmn7vViyx1juENnQ/viewform?embedded=true",
  social: {
    youtube: "https://www.youtube.com/@soleachagency",
    instagram: "https://www.instagram.com/soleachagency/",
    tiktok: "https://www.tiktok.com/@soleach.digitalagency",
    facebook: "https://www.facebook.com/profile.php?id=61591831880038",
  },
} as const;

/** Absolute URL for a given locale + path (e.g. localeUrl("tr", "/services")). */
export function localeUrl(locale: Locale, path = ""): string {
  const clean = path.replace(/^\/+/, "");
  return `${siteUrl}/${locale}${clean ? `/${clean}` : ""}`;
}
