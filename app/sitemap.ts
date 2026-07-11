import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { localeUrl } from "@/lib/site";

/** Logical pages, addressed by the route slug ("" = home). */
const pages = ["", "services", "about", "contact"] as const;

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
    };

    for (const page of pages) {
      const path = slugs[page];
      // hreflang alternates across locales for this logical page.
      const languages: Record<string, string> = {};
      for (const alt of locales) {
        const altDict = getDictionary(alt);
        const altSlug =
          page === "" ? "" : altDict.routes[page as "services" | "about" | "contact"];
        languages[alt] = localeUrl(alt, altSlug);
      }

      entries.push({
        url: localeUrl(locale, path),
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1 : 0.8,
        alternates: { languages },
      });
    }
  }

  return entries;
}
