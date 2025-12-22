"use client";

import { useId, useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { useTheme } from "next-themes";
import { PATHS } from "./paths/backend-development.paths";

export default function BackendDevelopment() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const uniqueId = useId();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Only use theme colors after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const isDark = mounted ? resolvedTheme === "dark" : true; // Default to dark on server
  
  // Theme-aware colors
  const primaryColor = isDark ? "#E8DB2A" : "#D4C720";
  const strokeColor = isDark ? "#FFFFFF" : "#000000";
  const waveColor = "#3B82F6"; // Bright blue for the wave effect
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };
  
  const centerGroupVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };
  
  const circuitVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5 },
        opacity: { duration: 0.5 },
      },
    },
  };
  
  // Heartbeat animation: 0.5s beat + 2s rest = 2.5s total cycle
  const heartbeatDuration = 0.5;
  const heartbeatDelay = 2;

  return (
    <motion.svg
      ref={ref}
      width="100%"
      height="100%"
      viewBox="0 0 2074 1709"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="max-w-full h-auto"
    >
      <defs>
        {/* Gradient for lightning - heartbeat effect */}
        <linearGradient
          id={`${uniqueId}-lightning-gradient`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor={primaryColor} stopOpacity="1" />
          <stop offset="50%" stopColor={primaryColor} stopOpacity="0.9" />
          <stop offset="100%" stopColor={primaryColor} stopOpacity="1" />
        </linearGradient>

        {/* Radial gradient for wave effect - center is brain/lightning at ~1037, 854.5 */}
        <radialGradient
          id={`${uniqueId}-wave-gradient`}
          cx="1037"
          cy="854.5"
          r="1500"
          gradientUnits="userSpaceOnUse"
        >
          <motion.stop
            offset="0%"
            stopColor={strokeColor}
            animate={
              isInView
                ? {
                    stopColor: [strokeColor, waveColor, strokeColor],
                    transition: {
                      duration: heartbeatDuration,
                      repeat: Infinity,
                      repeatType: "loop" as const,
                      repeatDelay: heartbeatDelay,
                      times: [0, 0.5, 1],
                    },
                  }
                : {}
            }
          />
          <motion.stop
            offset="15%"
            stopColor={strokeColor}
            animate={
              isInView
                ? {
                    stopColor: [strokeColor, waveColor, strokeColor],
                    transition: {
                      duration: heartbeatDuration,
                      repeat: Infinity,
                      repeatType: "loop" as const,
                      repeatDelay: heartbeatDelay,
                      delay: 0.08,
                      times: [0, 0.5, 1],
                    },
                  }
                : {}
            }
          />
          <motion.stop
            offset="30%"
            stopColor={strokeColor}
            animate={
              isInView
                ? {
                    stopColor: [strokeColor, waveColor, strokeColor],
                    transition: {
                      duration: heartbeatDuration,
                      repeat: Infinity,
                      repeatType: "loop" as const,
                      repeatDelay: heartbeatDelay,
                      delay: 0.16,
                      times: [0, 0.5, 1],
                    },
                  }
                : {}
            }
          />
          <motion.stop
            offset="50%"
            stopColor={strokeColor}
            animate={
              isInView
                ? {
                    stopColor: [strokeColor, waveColor, strokeColor],
                    transition: {
                      duration: heartbeatDuration,
                      repeat: Infinity,
                      repeatType: "loop" as const,
                      repeatDelay: heartbeatDelay,
                      delay: 0.25,
                      times: [0, 0.5, 1],
                    },
                  }
                : {}
            }
          />
          <motion.stop
            offset="70%"
            stopColor={strokeColor}
            animate={
              isInView
                ? {
                    stopColor: [strokeColor, waveColor, strokeColor],
                    transition: {
                      duration: heartbeatDuration,
                      repeat: Infinity,
                      repeatType: "loop" as const,
                      repeatDelay: heartbeatDelay,
                      delay: 0.35,
                      times: [0, 0.5, 1],
                    },
                  }
                : {}
            }
          />
          <stop
            offset="100%"
            stopColor={strokeColor}
          />
        </radialGradient>

        {/* Mask to apply gradient only to circuit paths and nodes */}
        <mask id={`${uniqueId}-circuit-mask`}>
          <rect width="2074" height="1709" fill="white" />
        </mask>
      </defs>

      {/* Center Group: Brain + Lightning */}
      <motion.g
        id={`${uniqueId}-center-group`}
        variants={centerGroupVariants}
        style={{ transformOrigin: "center" }}
      >
        {/* Brain */}
        <motion.path
          id={`${uniqueId}-brain`}
          d={PATHS.brain}
          fill={strokeColor}
          initial={{ scale: 1, opacity: 1 }}
          animate={
            isInView
              ? {
                  scale: [1, 1.08, 1],
                  opacity: [1, 0.95, 1],
                  transition: {
                    duration: heartbeatDuration,
                    repeat: Infinity,
                    repeatType: "loop" as const,
                    repeatDelay: heartbeatDelay,
                  },
                }
              : { scale: 1, opacity: 1 }
          }
          style={{ transformOrigin: "center" }}
        />

        {/* Lightning Icon */}
        <motion.path
          id={`${uniqueId}-electric-icon`}
          d={PATHS.lightning}
          fill={`url(#${uniqueId}-lightning-gradient)`}
          initial={{ scale: 1, opacity: 1 }}
          animate={
            isInView
              ? {
                  scale: [1, 1.08, 1],
                  opacity: [1, 0.95, 1],
                  transition: {
                    duration: heartbeatDuration,
                    repeat: Infinity,
                    repeatType: "loop" as const,
                    repeatDelay: heartbeatDelay,
                  },
                }
              : { scale: 1, opacity: 1 }
          }
          style={{ transformOrigin: "center" }}
        />
      </motion.g>

      {/* Circuits - animated paths from center to edges */}
      <motion.g id={`${uniqueId}-circuits`} variants={containerVariants}>
        {/* Circuit path 1 - Left side circuits */}
        <motion.path
          id={`${uniqueId}-vector-1`}
          d={PATHS.nodes.left}
          fill={`url(#${uniqueId}-wave-gradient)`}
          strokeWidth="2"
          variants={circuitVariants}
        />

        {/* Circuit path 2 - Right side circuits */}
        <motion.path
          id={`${uniqueId}-vector-2`}
          d={PATHS.nodes.right}
          fill={`url(#${uniqueId}-wave-gradient)`}
          strokeWidth="2"
          variants={circuitVariants}
        />

        {/* Circuit path 3 - Left top circuits */}
        <motion.path
          id={`${uniqueId}-vector-3`}
          d={PATHS.nodes.topleft}
          fill={`url(#${uniqueId}-wave-gradient)`}
          strokeWidth="2"
          variants={circuitVariants}
        />

        {/* Circuit path 4 - Top circuits */}
        <motion.path
          id={`${uniqueId}-vector-4`}
          d={PATHS.nodes.top}
          fill={`url(#${uniqueId}-wave-gradient)`}
          strokeWidth="2"
          variants={circuitVariants}
        />

        {/* Edge node circles - animated with gradient wave from center */}
        {[
          { cx: 650.5, cy: 1062.5 },
          { cx: 367, cy: 1640 },
          { cx: 253.5, cy: 1640 },
          { cx: 37.5, cy: 1285 },
          { cx: 193, cy: 1520 },
          { cx: 1045.5, cy: 1171.5 },
          { cx: 1961, cy: 821 },
          { cx: 1961, cy: 980.5 },
          { cx: 1953.3, cy: 1140 },
          { cx: 571, cy: 747.5 },
          { cx: 41.5, cy: 404.852 },
          { cx: 1041, cy: 483 },
          { cx: 1977.5, cy: 394.5 },
          { cx: 1977.5, cy: 67 },
        ].map((node, index) => (
          <circle
            key={`node-${index}`}
            cx={node.cx}
            cy={node.cy}
            r="8"
            fill={`url(#${uniqueId}-wave-gradient)`}
          />
        ))}
      </motion.g>
    </motion.svg>
  );
}
