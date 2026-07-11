import { Aurora } from "@/components/motion/aurora";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

/** Shared animated hero for sub-pages (services / about / contact). */
export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <Aurora className="opacity-70" />
      <div className="grain pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:py-28 lg:px-8">
        <Stagger className="flex flex-col items-center">
          <StaggerItem>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-background/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent backdrop-blur">
              <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-accent-2" />
              {eyebrow}
            </span>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              {subtitle}
            </p>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
