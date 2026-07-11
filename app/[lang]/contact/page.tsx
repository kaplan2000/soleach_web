import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
      <section className="brand-glow">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:py-24 lg:px-8">
          <span className="inline-flex items-center rounded-full border border-accent/25 bg-accent/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
            {hero.eyebrow}
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {hero.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {hero.subtitle}
          </p>
        </div>
      </section>

      <section className="bg-background pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Form card */}
          <div className="overflow-hidden rounded-3xl border border-border bg-surface">
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
          </div>

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
