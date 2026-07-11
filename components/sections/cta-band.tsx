import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export function CtaBand({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const { ctaBand } = dict.home;

  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl brand-gradient px-6 py-16 text-center sm:px-16">
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {ctaBand.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
              {ctaBand.subtitle}
            </p>
            <Link
              href={`/${locale}/${dict.routes.contact}`}
              className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-accent shadow-lg transition-transform hover:scale-[1.03]"
            >
              {ctaBand.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
