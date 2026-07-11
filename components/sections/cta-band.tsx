import Link from "next/link";
import { Aurora } from "@/components/motion/aurora";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
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
        <div className="relative overflow-hidden rounded-[2rem] brand-gradient px-6 py-16 text-center shadow-2xl shadow-accent/25 sm:px-16 sm:py-20">
          <div className="absolute inset-0 opacity-70 mix-blend-soft-light">
            <Aurora />
          </div>
          <div className="grain pointer-events-none absolute inset-0 opacity-20" aria-hidden />
          <Reveal className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {ctaBand.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
              {ctaBand.subtitle}
            </p>
            <div className="mt-9 flex justify-center">
              <Magnetic strength={0.4}>
                <Link
                  href={`/${locale}/${dict.routes.contact}`}
                  className="inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-accent shadow-lg transition-transform hover:scale-[1.04]"
                >
                  {ctaBand.button}
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
