import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const { hero, stats } = dict.home;

  const floatTags = ["Instagram Ads", "Reels", "TikTok", "UGC", "SEO", "GEO"];

  return (
    <section className="relative overflow-hidden brand-glow">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-28 lg:px-8">
        {/* Copy */}
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full border border-accent/25 bg-background/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent backdrop-blur">
            {hero.eyebrow}
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {hero.title}{" "}
            <span className="brand-gradient-text">{hero.titleAccent}</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {hero.subtitle}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href={`${base}/${dict.routes.contact}`}
              className="rounded-full brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-opacity hover:opacity-90"
            >
              {hero.ctaPrimary}
            </Link>
            <Link
              href={`${base}/${dict.routes.services}`}
              className="rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {hero.ctaSecondary}
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted">{hero.note}</p>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-border bg-surface shadow-2xl shadow-accent/10">
            <div className="absolute inset-0 brand-gradient opacity-90" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-white/15 p-8 backdrop-blur-sm ring-1 ring-white/25">
                <Logo withWordmark={false} className="[&_svg]:h-24 [&_svg]:w-24" />
              </div>
            </div>
            {/* Floating tags */}
            <div className="absolute inset-0">
              {floatTags.map((tag, i) => {
                const positions = [
                  "left-4 top-6",
                  "right-5 top-12",
                  "left-6 top-1/2",
                  "right-4 top-1/2",
                  "left-8 bottom-8",
                  "right-8 bottom-6",
                ];
                return (
                  <span
                    key={tag}
                    className={`absolute ${positions[i]} rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-accent shadow-md`}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface px-6 py-8 text-center">
              <dt className="brand-gradient-text text-4xl font-semibold">
                {s.value}
              </dt>
              <dd className="mt-2 text-sm text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
