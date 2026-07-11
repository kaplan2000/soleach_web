"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

export function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() || `/${current}`;

  return (
    <div className="inline-flex items-center rounded-full border border-border p-0.5 text-xs font-semibold">
      {locales.map((l) => {
        const active = l === current;
        return (
          <Link
            key={l}
            href={swapLocale(pathname, l)}
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
