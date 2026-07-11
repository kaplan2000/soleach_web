import { Stagger, StaggerItem } from "@/components/motion/reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  const alignment =
    align === "center"
      ? "mx-auto text-center items-center"
      : "text-left items-start";
  return (
    <Stagger className={`flex max-w-2xl flex-col ${alignment} ${className ?? ""}`}>
      {eyebrow && (
        <StaggerItem>
          <span className="mb-3 inline-flex items-center rounded-full border border-accent/25 bg-accent/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
            {eyebrow}
          </span>
        </StaggerItem>
      )}
      <StaggerItem>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
          {title}
        </h2>
      </StaggerItem>
      {subtitle && (
        <StaggerItem>
          <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>
        </StaggerItem>
      )}
    </Stagger>
  );
}
