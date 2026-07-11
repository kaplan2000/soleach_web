import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import type { Dictionary } from "@/lib/dictionaries";

export function WhyUs({ dict }: { dict: Dictionary }) {
  const { whyUs } = dict.home;

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow={whyUs.eyebrow}
            title={whyUs.title}
            subtitle={whyUs.subtitle}
            align="left"
            className="lg:sticky lg:top-28 lg:self-start"
          />

          <Stagger className="grid gap-6 sm:grid-cols-2" stagger={0.1}>
            {whyUs.points.map((p) => (
              <StaggerItem key={p.title} className="h-full">
                <div className="card-hover group h-full rounded-2xl border border-border bg-surface p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
