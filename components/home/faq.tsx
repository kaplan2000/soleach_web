"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import type { Dictionary } from "@/lib/dictionaries";

export function Faq({ dict }: { dict: Dictionary }) {
  const { faq } = dict.home;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />

        <Reveal className="mt-12" amount={0.1}>
          <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background">
            {faq.items.map((item, i) => {
              const open = openIndex === i;
              return (
                <div key={item.q}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? null : i)}
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface/60"
                    >
                      <span className="text-base font-semibold text-foreground">
                        {item.q}
                      </span>
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-accent transition-all ${
                          open ? "rotate-45 border-accent bg-accent/10" : ""
                        }`}
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-sm leading-relaxed text-muted">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
