import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Aurora } from "@/components/motion/aurora";
import { TextReveal } from "@/components/motion/text-reveal";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { Marquee } from "@/components/motion/marquee";
import { AnimatedCounter } from "@/components/motion/counter";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

const chips = [
  { label: "Instagram Ads", pos: "left-0 top-6", delay: "0s" },
  { label: "Reels", pos: "right-2 top-16", delay: "0.8s" },
  { label: "TikTok", pos: "left-4 top-1/2", delay: "1.6s" },
  { label: "UGC", pos: "right-0 top-[46%]", delay: "0.4s" },
  { label: "SEO", pos: "left-10 bottom-10", delay: "1.2s" },
  { label: "GEO", pos: "right-8 bottom-6", delay: "2s" },
];

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const { hero, stats, marquee } = dict.home;

  return (
    <section className="relative overflow-hidden">
      <Aurora />
      <div className="grain pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-8 pt-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pb-14 lg:pt-24 lg:px-8">
        {/* Copy */}
        <div className="max-w-xl">
          <Reveal direction="none" duration={0.6}>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-background/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent backdrop-blur">
              <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-accent-2" />
              {hero.eyebrow}
            </span>
          </Reveal>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-7xl">
            <TextReveal text={hero.title} className="block" delay={0.15} />
            <TextReveal
              text={hero.titleAccent}
              className="mt-1 block"
              wordClassName="brand-gradient-text-animated"
              delay={0.45}
            />
          </h1>

          <Reveal delay={0.7} className="mt-7">
            <p className="max-w-lg text-lg leading-relaxed text-muted">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.85} className="mt-9">
            <div className="flex flex-wrap items-center gap-3">
              <Magnetic>
                <Link
                  href={`${base}/${dict.routes.contact}`}
                  className="inline-block rounded-full brand-gradient px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-shadow hover:shadow-xl hover:shadow-accent/35"
                >
                  {hero.ctaPrimary}
                </Link>
              </Magnetic>
              <Link
                href={`${base}/${dict.routes.services}`}
                className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent"
              >
                {hero.ctaSecondary}
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={1} className="mt-5">
            <p className="text-sm text-muted">{hero.note}</p>
          </Reveal>
        </div>

        {/* Visual */}
        <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center lg:max-w-lg">
          {/* Halo */}
          <div
            className="absolute h-2/3 w-2/3 animate-glow-pulse rounded-full brand-gradient opacity-60 blur-3xl"
            aria-hidden
          />
          {/* Ring */}
          <div className="absolute h-[78%] w-[78%] animate-spin-slow rounded-full border border-dashed border-accent/25" aria-hidden />
          {/* Logo */}
          <div className="animate-float">
            <Logo
              withWordmark={false}
              markClassName="h-56 w-56 sm:h-64 sm:w-64 drop-shadow-2xl"
              priority
            />
          </div>
          {/* Floating chips */}
          {chips.map((c) => (
            <span
              key={c.label}
              className={`glass animate-float absolute ${c.pos} rounded-full px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-lg`}
              style={{ animationDelay: c.delay }}
            >
              {c.label}
            </span>
          ))}
        </div>
      </div>

      {/* Category marquee */}
      <div className="relative border-y border-border/60 bg-surface/40 py-5 backdrop-blur-sm">
        <Marquee speed={38}>
          {marquee.map((word) => (
            <span
              key={word}
              className="mx-7 inline-flex items-center gap-7 text-lg font-medium uppercase tracking-wide text-muted"
            >
              {word}
              <span className="h-1.5 w-1.5 rounded-full bg-accent-2/70" />
            </span>
          ))}
        </Marquee>
      </div>

      {/* Stats */}
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {stats.map((s) => (
            <Reveal key={s.label} direction="up">
              <div className="h-full bg-surface px-6 py-8 text-center">
                <dt className="brand-gradient-text text-4xl font-semibold sm:text-5xl">
                  <AnimatedCounter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                </dt>
                <dd className="mt-2 text-sm text-muted">{s.label}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
