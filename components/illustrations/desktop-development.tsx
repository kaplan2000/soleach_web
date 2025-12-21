"use client";

import { motion, useInView } from "motion/react";
import { useRef, useId } from "react";

export default function DesktopDevelopmentIllustration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const id = useId();

  return (
    <motion.svg
      ref={ref}
      width="2293"
      height="932"
      viewBox="0 0 2293 932"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      className="w-full h-auto"
    >
      <defs>
        <linearGradient
          id={`${id}-paint0`}
          x1="1718.22"
          y1="764.5"
          x2="1718.22"
          y2="914.599"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.586538" stopColor="#CCCCCC" />
          <stop offset="0.725962" stopColor="#6E6E6E" />
          <stop offset="0.822115" stopColor="#9D9D9D" />
          <stop offset="1" stopColor="#B8B8B8" />
        </linearGradient>
        <linearGradient
          id={`${id}-paint1`}
          x1="776"
          y1="25"
          x2="1761"
          y2="500"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFF7" />
          <stop offset="1" stopColor="#FF2024" />
        </linearGradient>
        <linearGradient
          id={`${id}-paint2`}
          x1="1372.5"
          y1="-176.5"
          x2="2040"
          y2="931"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8800FF" />
          <stop offset="1" stopColor="#FF45DD" />
        </linearGradient>
        <linearGradient
          id={`${id}-paint3`}
          x1="2089.5"
          y1="35"
          x2="1647"
          y2="906.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6AFF00" />
          <stop offset="1" stopColor="#00170E" />
        </linearGradient>
        <linearGradient
          id={`${id}-paint4`}
          x1="27"
          y1="781.5"
          x2="1172"
          y2="781.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9D9D9" />
          <stop offset="0.414897" stopColor="#D9D9D9" />
          <stop offset="0.415953" stopColor="#68686D" />
          <stop offset="0.425985" stopColor="#A1A1A3" />
          <stop offset="0.504124" stopColor="#D9D9D9" />
          <stop offset="0.574872" stopColor="#BDBDBE" />
          <stop offset="0.585695" stopColor="#68686D" />
          <stop offset="0.586751" stopColor="#D9D9D9" />
          <stop offset="1" stopColor="#D9D9D9" />
        </linearGradient>
        <linearGradient
          id={`${id}-paint5`}
          x1="27"
          y1="795.5"
          x2="1172"
          y2="795.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9D9D9" />
          <stop offset="0.5" stopColor="#A6A6A6" />
          <stop offset="1" stopColor="#737373" />
        </linearGradient>
        <linearGradient
          id={`${id}-paint6`}
          x1="1601"
          y1="155"
          x2="616"
          y2="630"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFF7" />
          <stop offset="1" stopColor="#FF2024" />
        </linearGradient>
        <linearGradient
          id={`${id}-paint7`}
          x1="1004.5"
          y1="-46.5"
          x2="337"
          y2="1061"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8800FF" />
          <stop offset="1" stopColor="#FF45DD" />
        </linearGradient>
        <linearGradient
          id={`${id}-paint8`}
          x1="287.5"
          y1="165"
          x2="730"
          y2="1036.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6AFF00" />
          <stop offset="1" stopColor="#00170E" />
        </linearGradient>
        <clipPath id={`${id}-clip0`}>
          <rect
            width="1005"
            height="565"
            fill="white"
            transform="matrix(-1 0 0 1 2221 58)"
          />
        </clipPath>
        <clipPath id={`${id}-clip1`}>
          <rect width="888" height="557" fill="white" transform="translate(156 188)" />
        </clipPath>
      </defs>

      <g id="Frame 1">
        <rect width="2293" height="932" fill="rgb(var(--color-background))" />

        {/* iMac */}
        <motion.g
          id="imac"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 40, scale: 0.95 }
          }
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <motion.path
            id="monitor-stand"
            d="M1594.5 878C1604.1 871.6 1609 788.5 1611.5 752H1827.5C1830 787.333 1842 874.3 1848 883.5C1855.5 895 1911.5 910 1871 915.5C1830.5 921 1561.99 917.94 1555 912.5C1546 905.5 1582.5 886 1594.5 878Z"
            fill={`url(#${id}-paint0)`}
            animate={
              isInView
                ? {
                    y: [0, -3, 0],
                  }
                : {}
            }
            transition={{
              y: {
                duration: 6,
                repeat: Infinity,
                delay: 1.5,
              },
            }}
          />
          <motion.rect
            id="monitor-outside-corners"
            x="1172"
            y="9"
            width="1094"
            height="756"
            rx="30"
            fill="#D7D8DA"
            animate={
              isInView
                ? {
                    y: [0, -5, 0],
                  }
                : {}
            }
            transition={{
              y: {
                duration: 6,
                repeat: Infinity,
                delay: 1.5,
              },
            }}
          />
          <motion.path
            id="monitor-inside-corners"
            d="M1172 38C1172 23.0883 1184.09 11 1199 11H2236C2252.57 11 2266 24.4315 2266 41V663H1172V38Z"
            fill="black"
            animate={
              isInView
                ? {
                    y: [0, -5, 0],
                  }
                : {}
            }
            transition={{
              y: {
                duration: 6,
                repeat: Infinity,
                delay: 1.5,
              },
            }}
          />
          <motion.rect
            id="screen"
            x="1216"
            y="58"
            width="1005"
            height="565"
            fill="white"
            animate={
              isInView
                ? {
                    y: [0, -5, 0],
                  }
                : {}
            }
            transition={{
              y: {
                duration: 6,
                repeat: Infinity,
                delay: 1.5,
              },
            }}
          />
          <motion.g
            id="background"
            clipPath={`url(#${id}-clip0)`}
            animate={
              isInView
                ? {
                    y: [0, -5, 0],
                  }
                : {}
            }
            transition={{
              y: {
                duration: 6,
                repeat: Infinity,
                delay: 1.5,
              },
            }}
          >
            <g id="background_2">
              <path
                id="Vector 3"
                d="M1729.5 828L1712 24.5H941.5V828H1729.5Z"
                fill={`url(#${id}-paint1)`}
              />
              <path
                id="Vector 2"
                d="M2067 -0.5V777H1287.5C1367.17 747.833 1551.1 656.1 1649.5 522.5C1772.5 355.5 1394.5 258.5 1526.5 203C1632.1 158.6 1411.17 48.8333 1287.5 -0.5H2067Z"
                fill={`url(#${id}-paint2)`}
              />
              <path
                id="Vector 1"
                d="M1895.22 497.043C1723.7 328.627 1788.11 118.841 1841.75 35H2395L2368.51 781H1995.68C2033.66 756.521 2066.75 665.459 1895.22 497.043Z"
                fill={`url(#${id}-paint3)`}
              />
            </g>
            <motion.g
              id="app-mockup"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <path
                id="Rectangle 1"
                d="M1288 87C1288 79.8203 1293.82 74 1301 74H2105.36C2112.54 74 2118.36 79.8203 2118.36 87V100.026C2118.36 100.578 2117.91 101.026 2117.36 101.026H1289C1288.45 101.026 1288 100.578 1288 100.026V87Z"
                fill="#4E4E4E"
              />
              <circle
                id="Ellipse 1"
                cx="1308.04"
                cy="87.5131"
                r="6.98953"
                fill="#FF4C4C"
              />
              <circle
                id="Ellipse 2"
                cx="1333.2"
                cy="87.5131"
                r="6.98953"
                fill="#FFAA00"
              />
              <circle
                id="Ellipse 3"
                cx="1358.36"
                cy="87.5131"
                r="6.98953"
                fill="#00C42E"
              />
              <rect
                id="Rectangle 2"
                x="1288"
                y="101.026"
                width="830.356"
                height="506.974"
                fill="#757575"
              />
              <rect
                id="Rectangle 3"
                x="1288"
                y="433.728"
                width="830.356"
                height="174.272"
                fill="#393232"
              />
              <rect
                id="Rectangle 4"
                x="1288"
                y="101.026"
                width="164.953"
                height="332.702"
                fill="#626262"
              />
            </motion.g>
          </motion.g>
        </motion.g>

        {/* MacBook Air */}
        <motion.g
          id="macbook-air"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 40, scale: 0.95 }
          }
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <motion.rect
            id="screen-outside"
            x="134.5"
            y="148.5"
            width="932"
            height="631"
            rx="12.5"
            fill="black"
            stroke="#D9D9D9"
            strokeWidth="5"
            animate={
              isInView
                ? {
                    y: [0, -4, 0],
                  }
                : {}
            }
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
                delay: 1.8,
              },
            }}
          />
          <motion.rect
            id="screen_2"
            x="156"
            y="188"
            width="888"
            height="555"
            fill="white"
            animate={
              isInView
                ? {
                    y: [0, -4, 0],
                  }
                : {}
            }
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
                delay: 1.8,
              },
            }}
          />
          <rect id="base-top" x="27" y="778" width="1145" height="7" fill={`url(#${id}-paint4)`} />
          <path
            id="base-bottom"
            d="M1172 785H27C49.4706 800 157.829 806 157.829 806H1047.16C1095.92 797.799 1126.06 804.5 1172 785Z"
            fill={`url(#${id}-paint5)`}
          />
          <motion.g
            id="background_3"
            clipPath={`url(#${id}-clip1)`}
            animate={
              isInView
                ? {
                    y: [0, -4, 0],
                  }
                : {}
            }
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
                delay: 1.8,
              },
            }}
          >
            <g id="background_4">
              <path
                id="Vector 3_2"
                d="M647.5 958L665 154.5H1435.5V958H647.5Z"
                fill={`url(#${id}-paint6)`}
              />
              <path
                id="Vector 2_2"
                d="M310 129.5V907H1089.5C1009.83 877.833 825.9 786.1 727.5 652.5C604.5 485.5 982.5 388.5 850.5 333C744.9 288.6 965.833 178.833 1089.5 129.5H310Z"
                fill={`url(#${id}-paint7)`}
              />
              <path
                id="Vector 1_2"
                d="M481.776 627.043C653.299 458.627 588.894 248.841 535.252 165H-18L8.48812 911H381.321C343.338 886.521 310.253 795.459 481.776 627.043Z"
                fill={`url(#${id}-paint8)`}
              />
            </g>
            <motion.g
              id="app-mockup_2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <path
                id="Rectangle 1_2"
                d="M251 280C251 272.82 256.82 267 264 267H922C929.18 267 935 272.82 935 280V288.263C935 288.815 934.552 289.263 934 289.263H252C251.448 289.263 251 288.815 251 288.263V280Z"
                fill="#4E4E4E"
              />
              <circle id="Ellipse 1_2" cx="267.505" cy="278.131" r="5.75758" fill="#FF4C4C" />
              <circle id="Ellipse 2_2" cx="288.232" cy="278.131" r="5.75758" fill="#FFAA00" />
              <circle id="Ellipse 3_2" cx="308.96" cy="278.131" r="5.75758" fill="#00C42E" />
              <rect
                id="Rectangle 2_2"
                x="251"
                y="289.263"
                width="684"
                height="417.616"
                fill="#757575"
              />
              <rect
                id="Rectangle 3_2"
                x="251"
                y="563.323"
                width="684"
                height="143.556"
                fill="#393232"
              />
              <rect
                id="Rectangle 4_2"
                x="251"
                y="289.263"
                width="135.879"
                height="274.061"
                fill="#626262"
              />
            </motion.g>
          </motion.g>
        </motion.g>
      </g>
    </motion.svg>
  );
}
