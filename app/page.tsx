"use client";

import { useEffect } from "react";
import { defaultLocale } from "@/lib/i18n";

/**
 * Static-export root. Cloudflare's `_redirects` handles `/` -> `/tr/` at the
 * edge; this client redirect is the fallback for other hosts and direct hits.
 */
export default function RootRedirect() {
  useEffect(() => {
    window.location.replace(`/${defaultLocale}/`);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <a
        href={`/${defaultLocale}/`}
        className="text-sm font-medium text-accent underline underline-offset-4"
      >
        Soleach&apos;e devam et / Continue to Soleach
      </a>
    </main>
  );
}
