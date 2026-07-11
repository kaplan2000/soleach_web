import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceIcon } from "@/components/ui/service-icon";
import { Reveal } from "@/components/motion/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/metadata";
import { servicesSchema, breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return buildMetadata({
    locale: lang,
    path: dict.routes.services,
    title: dict.meta.services.title,
    description: dict.meta.services.description,
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const { hero, featuresLabel, outcomeLabel } = dict.servicesPage;

  return (
    <>
      <JsonLd data={servicesSchema(locale)} />
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: dict.nav.home, path: "" },
          { name: dict.nav.services, path: dict.routes.services },
        ])}
      />

      {/* Hero */}
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      {/* Detailed services */}
      <div className="mx-auto max-w-7xl space-y-6 px-4 pb-8 pt-4 sm:px-6 lg:px-8">
        {dict.services.map((s, i) => (
          <Reveal key={s.key} amount={0.15}>
          <article
            id={s.key}
            className="grid scroll-mt-24 gap-8 rounded-3xl border border-border bg-surface p-8 transition-colors hover:border-accent/30 lg:grid-cols-2 lg:gap-12 lg:p-12"
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl brand-gradient text-white">
                <ServiceIcon icon={s.icon} className="h-7 w-7" />
              </span>
              <h2 className="mt-6 text-2xl font-semibold text-foreground sm:text-3xl">
                {s.title}
              </h2>
              <p className="mt-2 text-base font-medium text-accent">
                {s.tagline}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {s.summary}
              </p>
              <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {outcomeLabel}
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {s.outcome}
                </p>
              </div>
            </div>

            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <p className="text-sm font-semibold text-foreground">
                {featuresLabel}
              </p>
              <ul className="mt-4 space-y-3">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed text-muted">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
          </Reveal>
        ))}
      </div>

      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
