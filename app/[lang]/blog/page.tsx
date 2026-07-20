import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { PostCard } from "@/components/blog/post-card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { isLocale, localeHtmlLang, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/metadata";
import { blogSchema, breadcrumbSchema } from "@/lib/schema";
import { getPosts, readingTimeMinutes } from "@/lib/blog";

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
    path: dict.routes.blog,
    title: dict.meta.blog.title,
    description: dict.meta.blog.description,
  });
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const posts = getPosts(locale);
  const dateFormat = new Intl.DateTimeFormat(localeHtmlLang[locale], {
    dateStyle: "long",
  });

  return (
    <>
      <JsonLd data={blogSchema(locale)} />
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: dict.nav.home, path: "" },
          { name: dict.nav.blog, path: dict.routes.blog },
        ])}
      />

      <PageHero
        eyebrow={dict.blogPage.hero.eyebrow}
        title={dict.blogPage.hero.title}
        subtitle={dict.blogPage.hero.subtitle}
      />

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {posts.map(({ post, content }) => {
            const category = dict.services.find((s) => s.key === post.category);
            return (
              <StaggerItem key={post.id} className="h-full">
                <PostCard
                  href={`/${locale}/${dict.routes.blog}/${content.slug}`}
                  categoryTitle={category?.title ?? dict.nav.services}
                  dateLabel={dateFormat.format(new Date(post.publishedAt))}
                  readingLabel={`${readingTimeMinutes(content)} ${dict.blogPage.readingTimeSuffix}`}
                  title={content.title}
                  excerpt={content.excerpt}
                />
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>

      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
