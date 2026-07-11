import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/home/hero";
import { ServicesOverview } from "@/components/home/services-overview";
import { Process } from "@/components/home/process";
import { WhyUs } from "@/components/home/why-us";
import { Faq } from "@/components/home/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema, servicesSchema } from "@/lib/schema";

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
    path: "",
    title: dict.meta.home.title,
    description: dict.meta.home.description,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <JsonLd data={servicesSchema(locale)} />
      <JsonLd data={faqSchema(locale)} />
      <Hero locale={locale} dict={dict} />
      <ServicesOverview locale={locale} dict={dict} />
      <Process dict={dict} />
      <WhyUs dict={dict} />
      <Faq dict={dict} />
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
