import Image from "next/image";

interface LogoProps {
  /** Show the "Soleach" wordmark next to the mark. */
  withWordmark?: boolean;
  /** Sizing/utility classes for the mark image (default h-9 w-9). */
  markClassName?: string;
  /** Wrapper classes. */
  className?: string;
  priority?: boolean;
}

/**
 * The Soleach brand mark — the real brush + gear icon (transparent PNG),
 * so it sits cleanly on both light and dark surfaces.
 */
export function Logo({
  withWordmark = true,
  markClassName = "h-9 w-9",
  className,
  priority = false,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <Image
        src="/brand/soleach-logo.png"
        alt="Soleach"
        width={64}
        height={64}
        priority={priority}
        className={`shrink-0 object-contain ${markClassName}`}
      />
      {withWordmark && (
        <span className="font-display text-xl font-semibold tracking-tight text-foreground">
          Soleach
        </span>
      )}
    </span>
  );
}
