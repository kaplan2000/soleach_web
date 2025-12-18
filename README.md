# Soleach Digital Solutions

A clean, modern freelance website built with Next.js 16, TypeScript, and Tailwind CSS 4.

## Features

- ✨ Modern, professional design
- 🌓 Dark/light theme with system preference detection
- 📱 Fully responsive
- ⚡ Static site generation (SSG)
- 🔍 SEO-optimized with proper metadata
- ♿ Semantic HTML for accessibility
- 🚀 Cloudflare Pages compatible

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist Sans & Geist Mono

## Project Structure

```
app/
├── layout.tsx          # Root layout with SEO metadata
├── page.tsx            # Homepage
├── globals.css         # Global styles
├── robots.ts           # Robots.txt configuration
└── sitemap.ts          # Sitemap configuration

components/
├── layout/
│   ├── header.tsx      # Header with navigation and theme toggle
│   └── footer.tsx      # Footer with links
├── sections/
│   ├── hero.tsx        # Hero section
│   ├── services.tsx    # Services section
│   └── contact.tsx     # Contact section
└── ui/
    └── theme-toggle.tsx # Theme switcher component
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Building for Production

Build the static site:

```bash
npm run build
```

The site will be optimized and ready for deployment. All pages are statically generated at build time.

## Deployment

### Cloudflare Pages

1. Push your code to GitHub
2. Connect your repository to Cloudflare Pages
3. Set build command: `npm run build`
4. Set output directory: `.next`
5. Deploy!

The site is fully compatible with Cloudflare Pages and requires no special configuration.

## Customization

### Update Content

- **Company name**: Edit `components/layout/header.tsx` and `app/layout.tsx`
- **Hero section**: Edit `components/sections/hero.tsx`
- **Services**: Edit the services array in `components/sections/services.tsx`
- **Contact info**: Edit `components/sections/contact.tsx` and `components/layout/footer.tsx`

### Update SEO

Edit the metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your description",
  // ...
};
```

Update the sitemap URL in `app/robots.ts` and `app/sitemap.ts`.

## Theme System

The site supports both light and dark modes:

- Automatically detects system preference
- Manual toggle button in header
- Preference saved to localStorage
- No flash of wrong theme on page load

## License

MIT
