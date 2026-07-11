import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

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
    path: dict.routes.contact,
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const { hero, formTitle, formSubtitle, formButton, emailTitle, emailDesc, orLabel } =
    dict.contactPage;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: dict.nav.home, path: "" },
          { name: dict.nav.contact, path: dict.routes.contact },
        ])}
      />

      {/* Hero */}
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      <section className="bg-background pb-24 pt-4">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Form card */}
          <Reveal className="overflow-hidden rounded-3xl border border-border bg-surface" amount={0.1}>
            <div className="flex flex-col gap-4 border-b border-border p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  {formTitle}
                </h2>
                <p className="mt-1 max-w-md text-sm text-muted">
                  {formSubtitle}
                </p>
              </div>
              <a
                href={siteConfig.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full brand-gradient px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
              >
                {formButton}
              </a>
            </div>

            {/* Embedded Google Form */}
            <iframe
              src={siteConfig.formEmbedUrl}
              title={formTitle}
              loading="lazy"
              className="h-[1600px] w-full bg-white"
            >
              Yükleniyor…
            </iframe>
          </Reveal>

          {/* Email alternative */}
          <div className="mt-8 flex flex-col items-center gap-2 text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted">
              {orLabel}
            </span>
            <h2 className="text-lg font-semibold text-foreground">{emailTitle}</h2>
            <p className="max-w-md text-sm text-muted">{emailDesc}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-1 text-base font-semibold text-accent hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
