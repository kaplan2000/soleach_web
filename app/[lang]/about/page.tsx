import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

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
    path: dict.routes.about,
    title: dict.meta.about.title,
    description: dict.meta.about.description,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const { hero, story, mission, vision, values } = dict.aboutPage;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: dict.nav.home, path: "" },
          { name: dict.nav.about, path: dict.routes.about },
        ])}
      />

      {/* Hero */}
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      {/* Story */}
      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              {story.title}
            </h2>
          </Reveal>
          <Stagger className="mt-6 space-y-5" stagger={0.12}>
            {story.paragraphs.map((p, i) => (
              <StaggerItem key={i}>
                <p className="text-base leading-relaxed text-muted sm:text-lg">
                  {p}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Stagger className="grid gap-6 md:grid-cols-2" stagger={0.14}>
            {[mission, vision].map((block) => (
              <StaggerItem key={block.title} className="h-full">
                <div className="card-hover h-full rounded-2xl border border-border bg-surface p-8">
                  <h3 className="text-xl font-semibold text-foreground">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {block.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
              {values.title}
            </h2>
          </Reveal>
          <Stagger
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.1}
          >
            {values.items.map((v, i) => (
              <StaggerItem key={v.title} className="h-full">
                <div className="card-hover h-full rounded-2xl border border-border bg-background p-6">
                  <span className="brand-gradient-text font-display text-3xl font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {v.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
