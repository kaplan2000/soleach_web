import { useId } from "react";

interface LogoProps {
  /** Show the "Soleach" wordmark next to the mark. */
  withWordmark?: boolean;
  className?: string;
}

/**
 * Brand mark inspired by the Soleach desktop icon: a violet gear ring crossed
 * by a dusty-pink brush stroke. Gradient stops are fixed brand hues so the mark
 * reads consistently in both light and dark themes.
 */
export function Logo({ withWordmark = true, className }: LogoProps) {
  const id = useId();
  const gearGrad = `${id}-gear`;
  const brushGrad = `${id}-brush`;

  // Eight gear teeth evenly placed around the ring.
  const teeth = Array.from({ length: 8 }, (_, i) => i * 45);

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label="Soleach"
        className="h-9 w-9 shrink-0"
      >
        <defs>
          <linearGradient id={gearGrad} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#C9BCF5" />
            <stop offset="1" stopColor="#8B3FD9" />
          </linearGradient>
          <linearGradient id={brushGrad} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#EC6FBA" />
            <stop offset="1" stopColor="#F4B8DA" />
          </linearGradient>
        </defs>

        {/* Gear teeth */}
        <g fill={`url(#${gearGrad})`}>
          {teeth.map((deg) => (
            <rect
              key={deg}
              x="30.5"
              y="4"
              width="5"
              height="9"
              rx="1.5"
              transform={`rotate(${deg} 33 34)`}
            />
          ))}
        </g>

        {/* Gear ring */}
        <circle
          cx="33"
          cy="34"
          r="17.5"
          fill="none"
          stroke={`url(#${gearGrad})`}
          strokeWidth="6"
        />

        {/* Brush stroke sweeping across the ring */}
        <path
          d="M18 50c6-4 12-12 18-22 4-7 8-13 12-16-3 8-6 15-11 23-4 7-9 12-14 16-2 1-4 1-5-1z"
          fill={`url(#${brushGrad})`}
        />
        {/* Brush tip */}
        <circle cx="19" cy="47" r="6" fill="#F4A9D4" />
      </svg>

      {withWordmark && (
        <span className="font-display text-xl font-semibold tracking-tight text-foreground">
          Soleach
        </span>
      )}
    </span>
  );
}
