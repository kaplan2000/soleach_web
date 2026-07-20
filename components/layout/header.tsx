"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const base = `/${locale}`;
  const contactHref = `${base}/${dict.routes.contact}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: base, label: dict.nav.home },
    { href: `${base}/${dict.routes.services}`, label: dict.nav.services },
    { href: `${base}/${dict.routes.about}`, label: dict.nav.about },
    { href: `${base}/${dict.routes.blog}`, label: dict.nav.blog },
    { href: contactHref, label: dict.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md shadow-sm shadow-accent/5"
          : "border-transparent bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <Link href={base} aria-label="Soleach" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group relative py-1 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {l.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 brand-gradient transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher current={locale} />
          </div>
          <ThemeToggle />
          <Link
            href={contactHref}
            className="hidden rounded-full brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-accent/20 transition-transform hover:scale-105 sm:inline-block"
          >
            {dict.nav.cta}
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü"
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-surface"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between px-1">
              <LanguageSwitcher current={locale} />
              <Link
                href={contactHref}
                onClick={() => setOpen(false)}
                className="rounded-full brand-gradient px-4 py-2 text-sm font-semibold text-white"
              >
                {dict.nav.cta}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
