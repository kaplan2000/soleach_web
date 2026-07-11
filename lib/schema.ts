import type { Locale } from "./i18n";
import { localeHtmlLang } from "./i18n";
import { getDictionary } from "./dictionaries";
import { localeUrl, siteConfig, siteUrl } from "./site";

/** Organization schema — describes the agency for search + AI engines. */
export function organizationSchema(locale: Locale) {
  const dict = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteUrl,
    email: siteConfig.email,
    description: dict.brandTagline,
    logo: `${siteUrl}/icon.svg`,
    sameAs: [siteConfig.social.instagram, siteConfig.social.linkedin],
    areaServed: "TR",
    knowsAbout: [
      "Beauty marketing",
      "Cosmetics advertising",
      "Social media advertising",
      "Performance marketing",
      "Content creation",
      "SEO",
      "Generative Engine Optimization",
    ],
  };
}

/** WebSite schema with the site's language. */
export function websiteSchema(locale: Locale) {
  const dict = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteConfig.name,
    description: dict.meta.home.description,
    inLanguage: localeHtmlLang[locale],
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

/** ProfessionalService + itemList of the three service pillars. */
export function servicesSchema(locale: Locale) {
  const dict = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: localeUrl(locale, dict.routes.services),
    description: dict.servicesPage.hero.subtitle,
    provider: { "@id": `${siteUrl}/#organization` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: dict.nav.services,
      itemListElement: dict.services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.summary,
        },
      })),
    },
  };
}

/** FAQPage schema — strongly favored by generative engines. */
export function faqSchema(locale: Locale) {
  const dict = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.home.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** BreadcrumbList for a sub-page. */
export function breadcrumbSchema(
  locale: Locale,
  crumbs: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: localeUrl(locale, c.path),
    })),
  };
}
