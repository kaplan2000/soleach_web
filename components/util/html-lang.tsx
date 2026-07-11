"use client";

import { useEffect } from "react";
import { localeHtmlLang, type Locale } from "@/lib/i18n";

/**
 * The root layout renders `<html lang="tr">` statically (it cannot read the
 * locale param). This corrects the `lang` attribute for the active locale on
 * the client so screen readers and browsers get the right language per page.
 */
export function HtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = localeHtmlLang[locale];
  }, [locale]);
  return null;
}
