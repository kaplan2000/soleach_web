"use client";

import { motion, useInView } from "motion/react";
import { useRef, useId } from "react";

export default function MobileDevelopmentIllustration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const id = useId();

  return (
    <motion.svg
      ref={ref}
      width="706"
      height="953"
      viewBox="0 0 706 953"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      className="w-full h-auto"
    >
      <defs>
        <clipPath id={`${id}-clip0`}>
          <rect width="706" height="953" fill="white" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${id}-clip0)`}>
        <rect width="706" height="953" fill="rgb(var(--color-background))" />

        {/* Phone in the back */}
        <motion.rect
          id="phone-in-the-back"
          x="245.031"
          width="495"
          height="854"
          rx="90"
          transform="rotate(15 245.031 0)"
          fill="rgb(var(--color-surface))"
          initial={{ opacity: 0, rotate: 10, scale: 0.95 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  rotate: 15,
                  scale: 1,
                  y: [0, -5, 0],
                }
              : {
                  opacity: 0,
                  rotate: 10,
                  scale: 0.95,
                }
          }
          transition={{
            opacity: { duration: 0.8 },
            rotate: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: {
              duration: 4,
              repeat: Infinity,
              delay: 1,
            },
          }}
        />

        {/* Phone in the front */}
        <motion.g
          id="phone-in-the-front"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.rect
            id="phone"
            x="18.5"
            y="55.5"
            width="509"
            height="889"
            rx="82.5"
            fill="rgb(var(--color-background))"
            stroke="rgb(var(--color-foreground))"
            strokeWidth="15"
            animate={
              isInView
                ? {
                    y: [0, -8, 0],
                  }
                : {}
            }
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
                delay: 1.2,
              },
            }}
          />
          <rect
            id="camera"
            x="190"
            y="73"
            width="166"
            height="32"
            rx="15"
            fill="rgb(var(--color-foreground))"
          />
          <rect
            id="volume-button"
            y="164"
            width="24"
            height="155"
            rx="12"
            fill="rgb(var(--color-foreground))"
          />
          <rect
            id="screen-close-button"
            y="357"
            width="24"
            height="71"
            rx="12"
            fill="rgb(var(--color-foreground))"
          />

          {/* Messages with stagger animation */}
          <g id="messages">
            <motion.rect
              id="message-1"
              x="32"
              y="187"
              width="304"
              height="55"
              rx="20"
              fill="rgb(var(--color-surface))"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <motion.rect
              id="message-2"
              x="204"
              y="264"
              width="304"
              height="55"
              rx="20"
              fill="rgb(var(--color-accent) / 0.2)"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.rect
              id="message-3"
              x="32"
              y="347"
              width="351"
              height="55"
              rx="20"
              fill="rgb(var(--color-surface))"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
            <motion.rect
              id="message-4"
              x="336"
              y="430"
              width="158"
              height="55"
              rx="20"
              fill="rgb(var(--color-accent) / 0.2)"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
            <motion.rect
              id="message-5"
              x="32"
              y="507"
              width="351"
              height="112"
              rx="20"
              fill="rgb(var(--color-surface))"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            />
            <motion.rect
              id="message-6"
              x="190"
              y="647"
              width="304"
              height="55"
              rx="20"
              fill="rgb(var(--color-accent) / 0.2)"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
            <motion.rect
              id="message-7"
              x="32"
              y="730"
              width="304"
              height="55"
              rx="20"
              fill="rgb(var(--color-surface))"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            />
          </g>
        </motion.g>
      </g>
    </motion.svg>
  );
}
