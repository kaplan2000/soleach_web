import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import type { Dictionary } from "@/lib/dictionaries";

export function Process({ dict }: { dict: Dictionary }) {
  const { process } = dict.home;

  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
          subtitle={process.subtitle}
        />

        <div className="relative mt-16">
          {/* Connecting line (desktop) */}
          <div
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent lg:block"
            aria-hidden
          />
          <Stagger
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            stagger={0.14}
          >
            {process.steps.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="group relative h-full rounded-2xl border border-border bg-background p-7 transition-colors hover:border-accent/40">
                  <div className="flex items-center gap-4">
                    <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface font-display text-3xl font-semibold">
                      <span className="brand-gradient-text">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.desc}
                  </p>
                  <div className="mt-4 border-t border-border pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">
                      {process.deliverablesLabel}
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {step.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
