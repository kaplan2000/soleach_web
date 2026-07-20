import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Aurora } from "@/components/motion/aurora";
import { CtaBand } from "@/components/sections/cta-band";
import { ArticleBody, renderInline } from "@/components/blog/article-body";
import { Reveal } from "@/components/motion/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { isLocale, locales, localeHtmlLang, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/metadata";
import {
  blogPostingSchema,
  breadcrumbSchema,
  faqSchemaFromItems,
} from "@/lib/schema";
import { getPostBySlug, getPosts, readingTimeMinutes } from "@/lib/blog";

export function generateStaticParams({
  params,
}: {
  params: { lang: string };
}) {
  if (!isLocale(params.lang)) return [];
  return getPosts(params.lang).map(({ content }) => ({ slug: content.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const found = getPostBySlug(lang, slug);
  if (!found) return {};
  const { post, content } = found;

  // Slugs differ per locale, so hreflang pairs are built from the post itself.
  const pathByLocale = Object.fromEntries(
    locales.map((l) => [
      l,
      `${getDictionary(l).routes.blog}/${post.locales[l].slug}`,
    ]),
  );

  return buildMetadata({
    locale: lang,
    pathByLocale,
    title: content.metaTitle,
    description: content.metaDescription,
    ogType: "article",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const found = getPostBySlug(locale, slug);
  if (!found) notFound();
  const { post, content } = found;

  const category = dict.services.find((s) => s.key === post.category);
  const dateFormat = new Intl.DateTimeFormat(localeHtmlLang[locale], {
    dateStyle: "long",
  });
  const blogHref = `/${locale}/${dict.routes.blog}`;

  return (
    <>
      <JsonLd
        data={blogPostingSchema(locale, {
          slug: content.slug,
          title: content.title,
          description: content.metaDescription,
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
          tags: content.tags,
          categoryTitle: category?.title ?? dict.nav.services,
          sources: content.sources,
        })}
      />
      <JsonLd data={faqSchemaFromItems(content.faq)} />
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: dict.nav.home, path: "" },
          { name: dict.nav.blog, path: dict.routes.blog },
          { name: content.title, path: `${dict.routes.blog}/${content.slug}` },
        ])}
      />

      {/* Article hero */}
      <section className="relative overflow-hidden">
        <Aurora className="opacity-60" />
        <div className="grain pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
          <Link
            href={blogHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            {dict.blogPage.backToBlog}
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="inline-flex rounded-full border border-accent/25 bg-background/60 px-3 py-1 text-xs font-semibold text-accent backdrop-blur">
              {category?.title ?? dict.nav.services}
            </span>
            <span className="text-xs text-muted">
              <time dateTime={post.publishedAt}>
                {dateFormat.format(new Date(post.publishedAt))}
              </time>
              {" · "}
              {readingTimeMinutes(content)} {dict.blogPage.readingTimeSuffix}
              {post.updatedAt && (
                <>
                  {" · "}
                  {dict.blogPage.updatedLabel}:{" "}
                  <time dateTime={post.updatedAt}>
                    {dateFormat.format(new Date(post.updatedAt))}
                  </time>
                </>
              )}
            </span>
          </div>
          <h1 className="mt-5 text-balance font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            {content.title}
          </h1>
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="space-y-5 border-l-2 border-accent/40 pl-5">
          {content.intro.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-muted">
              {renderInline(p)}
            </p>
          ))}
        </div>

        <div className="mt-12">
          <ArticleBody sections={content.sections} />
        </div>

        {/* FAQ — rendered statically so every answer is crawlable */}
        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {dict.blogPage.faqTitle}
          </h2>
          <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-surface">
            {content.faq.map((item) => (
              <div key={item.q} className="p-6">
                <h3 className="text-base font-semibold text-foreground">
                  {item.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {renderInline(item.a)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Cited sources — also emitted as schema.org `citation` */}
        {content.sources && content.sources.length > 0 && (
          <section className="mt-12">
            <h2 className="text-lg font-semibold text-foreground">
              {dict.blogPage.sourcesTitle}
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5">
              {content.sources.map((s) => (
                <li key={s.url} className="text-sm leading-relaxed text-muted">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
                  >
                    {s.label}
                  </a>
                  {s.publisher && <> — {s.publisher}</>}
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Internal link to the related service pillar */}
        {category && (
          <Reveal className="mt-12" amount={0.2}>
            <Link
              href={`/${locale}/${dict.routes.services}#${category.key}`}
              className="card-hover group block rounded-2xl border border-accent/25 bg-accent/5 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                {dict.blogPage.relatedServiceLabel}
              </p>
              <p className="mt-2 text-lg font-semibold text-foreground group-hover:text-accent">
                {category.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {category.tagline}
              </p>
            </Link>
          </Reveal>
        )}
      </article>

      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
