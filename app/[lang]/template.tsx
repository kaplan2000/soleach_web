"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Wraps each page so it fades/rises in on navigation. `template.tsx` remounts
 * on every route change (unlike layout), which is exactly what we want here.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
