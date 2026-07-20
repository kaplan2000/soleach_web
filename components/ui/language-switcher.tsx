"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { locales, isLocale, type Locale } from "@/lib/i18n";

/** Swaps the leading locale segment of the current path (e.g. /tr/... <-> /en/...). */
function swapLocale(pathname: string, target: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = target;
  } else {
    segments.unshift(target);
  }
  return "/" + segments.join("/");
}

/**
 * Blog post slugs are localized, so a plain prefix swap would 404. As a safe
 * static fallback, blog post paths point at the blog index instead.
 * (The "blog" segment is the same in both locales.)
 */
function safeSwap(pathname: string, target: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length >= 3 && segments[1] === "blog") {
    return `/${target}/blog`;
  }
  return swapLocale(pathname, target);
}

/**
 * The page's hreflang alternates in <head> always carry the exact localized
 * URL (including per-locale blog slugs) — resolve from them at click time.
 */
function hreflangAlternate(target: Locale): string | null {
  const el = document.querySelector(
    `link[rel="alternate"][hreflang^="${target}"]`,
  );
  const href = el?.getAttribute("href");
  return href ? new URL(href, window.location.origin).pathname : null;
}

export function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() || `/${current}`;
  const router = useRouter();

  return (
    <div className="inline-flex items-center rounded-full border border-border p-0.5 text-xs font-semibold">
      {locales.map((l) => {
        const active = l === current;
        return (
          <Link
            key={l}
            href={safeSwap(pathname, l)}
            onClick={(e) => {
              const exact = hreflangAlternate(l);
              if (exact && exact !== safeSwap(pathname, l)) {
                e.preventDefault();
                router.push(exact);
              }
            }}
            hrefLang={l}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
              active
                ? "brand-gradient text-white"
                : "text-muted hover:text-accent"
            }`}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}
