"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Soft, slowly drifting gradient blobs — the "aurora" behind hero and CTA
 * sections. Theme-aware (uses brand CSS vars) and disabled for reduced motion.
 */
export function Aurora({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  const blobs = [
    {
      color: "rgb(var(--color-accent-2))",
      className: "left-[-10%] top-[-15%] h-[46vw] w-[46vw]",
      animate: { x: [0, 60, -20, 0], y: [0, 40, 10, 0], scale: [1, 1.12, 1] },
      duration: 22,
    },
    {
      color: "rgb(var(--color-accent))",
      className: "right-[-12%] top-[-8%] h-[42vw] w-[42vw]",
      animate: { x: [0, -50, 20, 0], y: [0, 30, -20, 0], scale: [1, 1.15, 1] },
      duration: 26,
    },
    {
      color: "rgb(var(--color-lilac))",
      className: "bottom-[-20%] left-[30%] h-[40vw] w-[40vw]",
      animate: { x: [0, 40, -30, 0], y: [0, -30, 20, 0], scale: [1, 1.1, 1] },
      duration: 30,
    },
  ];

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[80px] opacity-40 ${b.className}`}
          style={{ backgroundColor: b.color }}
          animate={reduce ? undefined : b.animate}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
