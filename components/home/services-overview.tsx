import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceIcon } from "@/components/ui/service-icon";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export function ServicesOverview({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const base = `/${locale}`;
  const { servicesIntro } = dict.home;

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={servicesIntro.eyebrow}
          title={servicesIntro.title}
          subtitle={servicesIntro.subtitle}
        />

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.12}>
          {dict.services.map((s) => (
            <StaggerItem key={s.key} className="h-full">
              <TiltCard className="h-full">
                <Link
                  href={`${base}/${dict.routes.services}#${s.key}`}
                  className="card-hover group flex h-full flex-col rounded-2xl border border-border bg-surface p-8"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl brand-gradient text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <ServiceIcon icon={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-accent">
                    {s.tagline}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {s.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                    {dict.nav.services}
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
