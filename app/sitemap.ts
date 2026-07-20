import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { localeUrl, siteUrl } from "@/lib/site";
import { getPosts } from "@/lib/blog";

/** Logical pages, addressed by the route slug ("" = home). */
const pages = ["", "services", "about", "contact", "blog"] as const;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const dict = getDictionary(locale);
    const slugs: Record<(typeof pages)[number], string> = {
      "": "",
      services: dict.routes.services,
      about: dict.routes.about,
      contact: dict.routes.contact,
      blog: dict.routes.blog,
    };

    for (const page of pages) {
      const path = slugs[page];
      // hreflang alternates across locales for this logical page.
      const languages: Record<string, string> = {};
      for (const alt of locales) {
        const altDict = getDictionary(alt);
        const altSlug =
          page === ""
            ? ""
            : altDict.routes[page as Exclude<(typeof pages)[number], "">];
        languages[alt] = localeUrl(alt, altSlug);
      }

      entries.push({
        url: localeUrl(locale, path),
        lastModified: new Date(),
        changeFrequency: page === "" || page === "blog" ? "weekly" : "monthly",
        priority: page === "" ? 1 : 0.8,
        alternates: { languages },
      });
    }

    // Blog posts — per-locale slugs, per-post dates.
    for (const { post, content } of getPosts(locale)) {
      const languages: Record<string, string> = {};
      for (const alt of locales) {
        const altDict = getDictionary(alt);
        languages[alt] = localeUrl(
          alt,
          `${altDict.routes.blog}/${post.locales[alt].slug}`,
        );
      }

      entries.push({
        url: localeUrl(locale, `${dict.routes.blog}/${content.slug}`),
        lastModified: new Date(post.updatedAt ?? post.publishedAt),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages },
      });
    }
  }

  // Language-neutral link-in-bio hub.
  entries.push({
    url: `${siteUrl}/links`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.3,
  });

  return entries;
}
