"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Seamless infinite horizontal ticker. Renders `children` twice and slides by
 * -50% so the loop is invisible. Edges are softly masked.
 */
export function Marquee({
  children,
  speed = 32,
  reverse = false,
  className,
}: {
  children: ReactNode;
  /** Seconds for one full loop (lower = faster). */
  speed?: number;
  reverse?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={`overflow-hidden ${className ?? ""}`}>
        <div className="flex w-max">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden ${className ?? ""}`}
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
      }}
    >
      <motion.div
        className="flex w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
