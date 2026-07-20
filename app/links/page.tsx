import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { siteConfig, siteUrl } from "@/lib/site";

/**
 * Link-in-bio hub — the single URL to put in every social profile
 * (soleach.com/links). Standalone by design: no header/footer, loads fast.
 */

export const metadata: Metadata = {
  title: "Soleach | Bağlantılar / Links",
  description:
    "Soleach'in tüm kanalları tek yerde: web sitesi, YouTube, Instagram, TikTok, Facebook ve iletişim.",
  alternates: { canonical: `${siteUrl}/links` },
};

interface LinkItem {
  label: string;
  sub?: string;
  href: string;
  external?: boolean;
  icon: React.ReactNode;
}

const iconClass = "h-5 w-5";

const links: LinkItem[] = [
  {
    label: "soleach.com",
    sub: "Web sitemiz · Our website",
    href: "/tr",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    sub: "@soleachagency",
    href: siteConfig.social.youtube,
    external: true,
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 7.5s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.6 4 12 4 12 4s-4.6 0-7.7.2c-.5.1-1.5.1-2.4 1-.7.7-.9 2.3-.9 2.3S.8 9.4.8 11.3v1.4c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.9.2 7.6.2 7.6.2s4.6 0 7.7-.2c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.4c0-1.9-.2-3.8-.2-3.8zM9.8 15.3V8.7l6.2 3.3-6.2 3.3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    sub: "@soleachagency",
    href: siteConfig.social.instagram,
    external: true,
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    sub: "@soleach.digitalagency",
    href: siteConfig.social.tiktok,
    external: true,
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.6 3c.4 1.9 1.6 3.4 3.4 3.9v3.1c-1.3 0-2.5-.4-3.6-1v6.4c0 3.6-2.6 6.1-6 6.1-3.2 0-5.9-2.4-5.9-5.9 0-3.4 2.7-6 6.2-5.8v3.2c-.3-.1-.6-.1-.9-.1-1.5.1-2.5 1.3-2.4 2.8.1 1.4 1.2 2.5 2.7 2.5 1.6 0 2.8-1.2 2.8-2.9V3h3.7z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    sub: "Soleach",
    href: siteConfig.social.facebook,
    external: true,
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.2-1.5 1.5-1.5h1.4V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8v3h2.5v7h3z" />
      </svg>
    ),
  },
  {
    label: "hello@soleach.com",
    sub: "E-posta · Email",
    href: `mailto:${siteConfig.email}`,
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
];

export default function LinksPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-background px-4 py-14">
      {/* Soft brand glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
        aria-hidden
      />
      <div className="grain pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative w-full max-w-md">
        <div className="flex flex-col items-center text-center">
          <Logo withWordmark={false} markClassName="h-16 w-16" priority />
          <h1 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground">
            Soleach
          </h1>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
            Güzellik markaları için dijital reklam ajansı
            <span className="block text-xs opacity-80">
              Digital advertising agency for beauty brands
            </span>
          </p>
        </div>

        <ul className="mt-8 space-y-3">
          {links.map((l) => {
            const Anchor = l.external ? "a" : Link;
            return (
            <li key={l.label}>
              <Anchor
                href={l.href}
                {...(l.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="card-hover group flex items-center gap-4 rounded-2xl border border-border bg-surface px-5 py-4 transition-colors hover:border-accent/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl brand-gradient text-white">
                  {l.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-foreground">
                    {l.label}
                  </span>
                  {l.sub && (
                    <span className="block truncate text-xs text-muted">
                      {l.sub}
                    </span>
                  )}
                </span>
                <svg
                  className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </Anchor>
            </li>
            );
          })}
        </ul>

        <Link
          href="/tr/contact"
          className="brand-gradient mt-6 block rounded-2xl px-5 py-4 text-center text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
        >
          Markanı konuşalım → Ücretsiz tanışma görüşmesi
        </Link>

        <p className="mt-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} Soleach
        </p>
      </div>
    </main>
  );
}
