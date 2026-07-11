"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Reveals text word-by-word, each word rising from behind a clip mask.
 * Plays on mount (for above-the-fold headlines). `className` styles the words
 * (e.g. gradient text); wrap separate calls to mix styles in one headline.
 */
export function TextReveal({
  text,
  className,
  delay = 0,
  stagger = 0.07,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) return <span className={className}>{text}</span>;

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom me-[0.26em]"
        >
          <motion.span
            className="inline-block will-change-transform"
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
