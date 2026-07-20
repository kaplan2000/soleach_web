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
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      contactType: "sales",
      availableLanguage: ["Turkish", "English"],
    },
    sameAs: [
      siteConfig.social.youtube,
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
      siteConfig.social.facebook,
    ],
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
  return faqSchemaFromItems(dict.home.faq.items);
}

/** FAQPage schema from an arbitrary Q&A list (home page, blog posts). */
export function faqSchemaFromItems(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** Blog schema for the blog index page. */
export function blogSchema(locale: Locale) {
  const dict = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${localeUrl(locale, dict.routes.blog)}#blog`,
    url: localeUrl(locale, dict.routes.blog),
    name: dict.meta.blog.title,
    description: dict.meta.blog.description,
    inLanguage: localeHtmlLang[locale],
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

/** BlogPosting schema for a single article. */
export function blogPostingSchema(
  locale: Locale,
  args: {
    slug: string;
    title: string;
    description: string;
    publishedAt: string;
    updatedAt?: string;
    tags: string[];
    categoryTitle: string;
    sources?: { label: string; url: string; publisher?: string }[];
  },
) {
  const dict = getDictionary(locale);
  const url = localeUrl(locale, `${dict.routes.blog}/${args.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    url,
    headline: args.title,
    description: args.description,
    datePublished: args.publishedAt,
    dateModified: args.updatedAt ?? args.publishedAt,
    inLanguage: localeHtmlLang[locale],
    articleSection: args.categoryTitle,
    keywords: args.tags.join(", "),
    author: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` },
    isPartOf: { "@id": `${localeUrl(locale, dict.routes.blog)}#blog` },
    ...(args.sources && args.sources.length > 0
      ? {
          citation: args.sources.map((s) => ({
            "@type": "CreativeWork",
            name: s.label,
            url: s.url,
            ...(s.publisher ? { publisher: s.publisher } : {}),
          })),
        }
      : {}),
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
