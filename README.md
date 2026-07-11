# Soleach — Digital Advertising Agency Website

Bilingual (TR/EN) marketing website for **Soleach**, a digital advertising
agency focused on beauty, cosmetics and women's product brands. Built with
Next.js 16, TypeScript and Tailwind CSS 4, statically exported for Cloudflare
Pages.

## Highlights

- 🌸 Brand palette (dusty pink · lilac · violet) derived from the Soleach icon
- 🌍 Bilingual routing under `/tr` and `/en` (Turkish is the default)
- 🌓 Light/dark theme with system detection
- ⚡ Fully static (SSG) — Cloudflare Pages compatible
- 🔍 SEO **and GEO** ready: per-page metadata, hreflang alternates, JSON-LD
  (Organization, WebSite, ProfessionalService, FAQPage, Breadcrumb), sitemap,
  robots and `llms.txt` for generative AI engines

## Tech Stack

- **Framework**: Next.js 16 (App Router, `output: "export"`)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Fraunces (display) + Manrope (body)

## Project Structure

```
app/
├── layout.tsx              # Root layout (fonts, theme, <html>)
├── page.tsx                # "/" -> "/tr" redirect (static-export safe)
├── icon.svg                # Favicon (brand mark)
├── robots.ts / sitemap.ts  # Generated robots.txt & sitemap.xml (+ hreflang)
├── globals.css             # Design tokens + brand utilities
└── [lang]/                 # tr | en (generateStaticParams)
    ├── layout.tsx          # Header/Footer + Organization/WebSite JSON-LD
    ├── page.tsx            # Home
    ├── services/page.tsx
    ├── about/page.tsx
    └── contact/page.tsx    # Embedded Google "welcome" form

lib/
├── i18n.ts                 # Locales, default, helpers
├── site.ts                 # Site constants (URL, email, form URL, socials)
├── dictionaries.ts         # All TR/EN copy (single source of truth)
├── metadata.ts             # Canonical + hreflang + OG builder
└── schema.ts               # JSON-LD builders

components/
├── layout/                 # header, footer
├── home/                   # hero, services-overview, process, why-us, faq
├── sections/               # cta-band (shared)
├── ui/                     # logo, service-icon, section-heading, toggles
└── seo/                    # json-ld

public/
├── _headers                # Security + CSP (allows Google Forms embed)
├── _redirects              # "/" -> "/tr/" at the edge
└── llms.txt                # Agency description for AI crawlers (GEO)
```

## Editing content

All copy lives in [`lib/dictionaries.ts`](lib/dictionaries.ts) under the `tr`
and `en` objects, which share the same `Dictionary` type — so both languages
stay in sync. Site-wide constants (email, contact form URL, social links) are in
[`lib/site.ts`](lib/site.ts).

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000  (redirects to /tr)
```

## Build & Deploy

```bash
npm run build    # static export to ./out
```

Deploy `./out` to Cloudflare Pages (build command `npm run build`, output
directory `out`). `_headers` and `_redirects` are picked up automatically.
