"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Reveals text word-by-word, each word rising from behind a clip mask.
 * Plays on mount (for above-the-fold headlines). `className` styles the block;
 * `wordClassName` styles each word directly (use this for gradient text — a
 * clip on an ancestor won't paint through the per-word clip masks).
 */
export function TextReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.07,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return (
      <span className={className}>
        <span className={wordClassName}>{text}</span>
      </span>
    );
  }

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom me-[0.26em]"
        >
          <motion.span
            className={`inline-block will-change-transform ${wordClassName ?? ""}`}
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: delay + i * stagger, ease: EASE }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
