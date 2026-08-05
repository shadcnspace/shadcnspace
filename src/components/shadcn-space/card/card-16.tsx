"use client";

import { useId } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface VisualContainerProps {
  children: React.ReactNode;
  className?: string;
}

interface TeamCardProps {
  visual: React.ReactNode;
  title: string;
  description: string;
  url: string;
}

interface IntegrationItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  x: number;
  y: number;
  path: string;
  delay: number;
}

const FigmaLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 28"
      fill="none"
      className={className}
    >
      <path
        d="M9.19782 13.7949C9.19782 7.6656 18.3948 7.6656 18.3948 13.7949C18.3948 19.9242 9.19782 19.9242 9.19782 13.7949ZM0.000862536 22.9918C0.000522523 22.3879 0.119222 21.7899 0.350175 21.2318C0.581128 20.6738 0.919805 20.1668 1.34684 19.7398C1.77388 19.3127 2.2809 18.9741 2.83891 18.7431C3.39692 18.5122 3.99499 18.3935 4.59891 18.3938H9.19695V22.9918C9.19695 29.1211 0 29.1211 0 22.9918H0.000862536ZM9.19782 -0.000113647V9.19684H13.7959C19.9252 9.19684 19.9252 -0.000113647 13.7959 -0.000113647H9.19782ZM0.000862536 4.59793C0.000522523 5.20185 0.119222 5.79992 0.350175 6.35793C0.581128 6.91594 0.919805 7.42296 1.34684 7.85C1.77388 8.27704 2.2809 8.61571 2.83891 8.84667C3.39692 9.07762 3.99499 9.19632 4.59891 9.19598H9.19695V-0.000975834H4.59891C3.99499 -0.00131585 3.39692 0.117384 2.83891 0.348337C2.2809 0.57929 1.77388 0.917967 1.34684 1.345C0.919805 1.77204 0.581128 2.27906 0.350175 2.83707C0.119222 3.39509 0.000522523 3.99315 0.000862536 4.59707V4.59793ZM0.000862536 13.7949C0.000522523 14.3988 0.119222 14.9969 0.350175 15.5549C0.581128 16.1129 0.919805 16.6199 1.34684 17.047C1.77388 17.474 2.2809 17.8127 2.83891 18.0436C3.39692 18.2746 3.99499 18.3941 4.59891 18.3938H9.19695V9.19598H4.59891C3.99499 9.19564 3.39692 9.31434 2.83891 9.54529C2.2809 9.77624 1.77388 10.1149 1.34684 10.542C0.919805 10.969 0.581128 11.476 0.350175 12.034C0.119222 12.592 0.000522523 13.1901 0.000862536 13.794V13.7949Z"
        fill="currentColor"
      />
    </svg>
  );
};

const ClaudeLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_19954_924)">
        <path
          d="M5.488 18.62L11.004 15.54L11.088 15.26L11.004 15.12H10.724L9.8 15.064L6.664 14.98L3.92 14.84L1.26 14.7L0.588 14.56L0 13.72L0.056 13.3L0.616 12.936L1.428 12.992L3.192 13.132L5.852 13.3L7.784 13.412L10.64 13.748H11.088L11.144 13.552L11.004 13.44L10.892 13.328L8.12 11.48L5.152 9.52L3.584 8.372L2.744 7.812L2.324 7.252L2.156 6.076L2.912 5.236L3.948 5.32L4.2 5.376L5.236 6.188L7.476 7.896L10.36 10.08L10.78 10.416L10.948 10.304L10.976 10.22L10.78 9.912L9.24 7L7.56 4.088L6.804 2.884L6.608 2.156C6.524 1.876 6.496 1.596 6.496 1.316L7.336 0.14L7.84 0L9.016 0.168L9.464 0.56L10.192 2.24L11.34 4.844L13.16 8.372L13.72 9.436L14 10.388L14.084 10.668H14.28V10.528L14.42 8.512L14.7 6.076L14.98 2.94L15.064 2.044L15.512 0.98L16.352 0.42L17.08 0.728L17.64 1.54L17.556 2.044L17.248 4.2L16.52 7.588L16.1 9.884H16.352L16.632 9.576L17.78 8.064L19.712 5.656L20.552 4.676L21.56 3.64L22.204 3.136H23.408L24.276 4.452L23.884 5.824L22.652 7.392L21.616 8.708L20.132 10.696L19.236 12.292L19.32 12.404H19.516L22.876 11.676L24.668 11.368L26.796 11.004L27.776 11.452L27.888 11.9L27.496 12.852L25.2 13.412L22.512 13.972L18.508 14.896L18.452 14.924L18.508 15.008L20.3 15.176L21.084 15.232H22.988L26.516 15.512L27.44 16.072L27.972 16.828L27.888 17.388L26.46 18.116L24.556 17.668L20.076 16.604L18.564 16.24H18.34V16.352L19.628 17.612L21.952 19.712L24.92 22.428L25.06 23.1L24.696 23.66L24.304 23.604L21.728 21.644L20.72 20.804L18.48 18.9H18.34V19.096L18.844 19.852L21.588 23.968L21.728 25.228L21.532 25.62L20.804 25.9L20.048 25.732L18.424 23.492L16.744 20.972L15.428 18.676L15.288 18.788L14.476 27.244L14.112 27.664L13.272 28L12.572 27.44L12.18 26.6L12.572 24.864L13.02 22.624L13.384 20.832L13.72 18.62L13.916 17.892V17.836H13.72L12.04 20.16L9.52 23.604L7.504 25.732L7.028 25.928L6.188 25.508L6.272 24.724L6.72 24.08L9.52 20.496L11.2 18.284L12.32 16.996L12.292 16.856H12.208L4.816 21.672L3.5 21.84L2.94 21.28L2.996 20.44L3.276 20.16L5.516 18.62H5.488Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_19954_924">
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const ShadcnLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 26"
      fill="none"
      className={className}
    >
      <path
        d="M22.5551 13.4553L13.4551 22.5553L22.5551 13.4553ZM20.7351 3.44531L3.44507 20.7353L20.7351 3.44531Z"
        fill="currentColor"
      />
      <path
        d="M22.5551 13.4553L13.4551 22.5553M20.7351 3.44531L3.44507 20.7353"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

const ReactLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <path
        d="M25.3376 13.9997C25.3376 12.3326 23.7754 10.8719 21.2927 9.9164C21.3266 9.7064 21.3826 9.48473 21.4094 9.28056C21.6626 6.87956 21.0909 5.14706 19.8006 4.40156C18.3597 3.56856 16.3204 4.18456 14.2577 5.84706C12.1916 4.1869 10.1499 3.5709 8.71257 4.40156C7.42107 5.14706 6.8459 6.87956 7.10373 9.28056C7.12473 9.48473 7.1819 9.7064 7.21457 9.9164C4.73307 10.8719 3.1709 12.3326 3.1709 13.9997C3.1709 15.6669 4.73307 17.1276 7.21457 18.0831C7.1819 18.2931 7.12473 18.5147 7.10373 18.7189C6.8494 21.1199 7.42107 22.8524 8.71257 23.5979C9.15123 23.8464 9.6494 23.9736 10.1534 23.9666C11.6826 23.826 13.1231 23.1865 14.2531 22.1466C15.3833 23.1867 16.8243 23.8263 18.3539 23.9666C18.8588 23.9737 19.3564 23.8465 19.7959 23.5979C21.0862 22.8524 21.6626 21.1199 21.4047 18.7189C21.3826 18.5147 21.3266 18.2931 21.2881 18.0831C23.7754 17.1276 25.3376 15.6669 25.3376 13.9997ZM18.3259 5.19373C18.6356 5.18671 18.9415 5.26199 19.2126 5.4119C20.0677 5.90656 20.4434 7.2704 20.2439 9.15923C20.2299 9.2829 20.1937 9.41823 20.1762 9.54423C19.1939 9.26034 18.1945 9.05695 17.1779 8.93406C16.5629 8.11245 15.8812 7.34295 15.1397 6.6334C16.0254 5.83254 17.1396 5.3291 18.3259 5.19373ZM9.0894 15.4382C9.29007 15.8349 9.48023 16.2316 9.70657 16.6247C9.9329 17.0179 10.1674 17.3901 10.4066 17.7552C9.77354 17.646 9.14751 17.4995 8.53173 17.3166C8.67987 16.6799 8.86609 16.0526 9.0894 15.4382ZM8.53057 10.6829C9.14634 10.4999 9.77237 10.3535 10.4054 10.2442C10.1658 10.6082 9.93251 10.9851 9.7054 11.3747C9.4779 11.7656 9.2889 12.1646 9.08823 12.5612C8.86579 11.9468 8.6799 11.3207 8.53057 10.6829ZM9.68323 13.9997C9.99317 13.3018 10.339 12.6203 10.7192 11.9581C11.105 11.2954 11.5235 10.6537 11.9746 10.0331C12.6967 9.9619 13.4562 9.9164 14.2542 9.9164C15.0515 9.91718 15.8106 9.95606 16.5316 10.0331C16.9827 10.6552 17.4028 11.2992 17.7904 11.9627C18.17 12.6246 18.5149 13.3036 18.8252 13.9997C18.2048 15.3982 17.4412 16.7287 16.5467 17.9699C15.022 18.1268 13.4853 18.1268 11.9606 17.9699C11.5146 17.3479 11.0996 16.7042 10.7169 16.0414C10.3374 15.3791 9.99241 14.6976 9.68323 13.9997ZM18.8019 16.6247C19.0352 16.2316 19.2196 15.8349 19.4202 15.4382C19.6427 16.0535 19.8286 16.68 19.9779 17.3177C19.3615 17.4983 18.7356 17.6447 18.1031 17.7564C18.3387 17.3901 18.5744 17.0156 18.7996 16.6247H18.8019ZM19.4202 12.5612C19.2196 12.1646 19.0294 11.7679 18.8019 11.3747C18.5794 10.9909 18.3459 10.6136 18.1019 10.2431C18.735 10.3535 19.3596 10.4997 19.9756 10.6817C19.8275 11.3188 19.6413 11.9465 19.4179 12.5612H19.4202ZM14.2531 7.3964C14.7197 7.83429 15.1592 8.29823 15.5714 8.78823C15.1397 8.76412 14.7007 8.75129 14.2542 8.74973C13.5846 8.7474 13.3676 8.7649 12.9347 8.78823C13.347 8.29823 13.7864 7.83429 14.2531 7.3964ZM9.2959 5.41306C9.56694 5.26316 9.87291 5.18787 10.1826 5.1949C11.368 5.33041 12.4812 5.8334 13.3664 6.6334C12.6249 7.34295 11.9432 8.11245 11.3282 8.93406C10.3125 9.05695 9.3134 9.26073 8.33107 9.5454C8.31357 9.41823 8.27623 9.2829 8.2634 9.15923C8.0639 7.2704 8.43957 5.90773 9.2959 5.41306ZM4.33757 13.9997C4.33757 12.9497 5.4739 11.8647 7.4234 11.0761C7.67773 12.0759 8.0114 13.0536 8.42207 13.9997C8.0114 14.9459 7.67773 15.9247 7.4234 16.9234C5.4739 16.1347 4.33757 15.0497 4.33757 13.9997ZM9.2959 22.5876C8.43957 22.0941 8.0639 20.7291 8.2634 18.8402C8.27623 18.7166 8.31357 18.5812 8.33107 18.4541C9.31262 18.738 10.3097 18.9417 11.3224 19.0654C11.9422 19.8902 12.6277 20.6635 13.3722 21.3777C11.7144 22.6716 10.2059 23.1137 9.2959 22.5876ZM12.9242 19.2101C13.3598 19.2357 13.8031 19.249 14.2542 19.2497C14.7053 19.249 15.1483 19.2357 15.5831 19.2101C15.1683 19.7085 14.7241 20.1819 14.2531 20.6276C13.7824 20.1819 13.3387 19.7085 12.9242 19.2101ZM19.2126 22.5876C18.3002 23.1137 16.7917 22.6716 15.1292 21.3766C15.8752 20.6641 16.5608 19.8911 17.1791 19.0654C18.1912 18.9421 19.1919 18.738 20.1716 18.4552C20.1891 18.5812 20.2252 18.7166 20.2392 18.8402C20.4434 20.7291 20.0666 22.0941 19.2126 22.5876ZM21.0792 16.9246C20.8263 15.9247 20.4939 14.9467 20.0852 13.9997C20.4967 13.0508 20.8296 12.0759 21.0839 11.0749C23.0334 11.8647 24.1709 12.9497 24.1709 13.9997C24.1709 15.0497 23.0334 16.1347 21.0839 16.9246H21.0792Z"
        fill="currentColor"
      />
      <path
        d="M14.2507 16.068C14.6641 16.0694 15.0686 15.9482 15.4131 15.7197C15.7576 15.4913 16.0267 15.1658 16.1863 14.7844C16.3458 14.4031 16.3888 13.983 16.3097 13.5772C16.2305 13.1715 16.0329 12.7983 15.7417 12.5048C15.4506 12.2114 15.0789 12.0108 14.6738 11.9286C14.2687 11.8463 13.8483 11.8859 13.4657 12.0425C13.0831 12.1991 12.7555 12.4656 12.5244 12.8084C12.2932 13.1511 12.1689 13.5547 12.167 13.968V13.975C12.1659 14.2494 12.219 14.5213 12.3232 14.7751C12.4275 15.0289 12.5808 15.2597 12.7743 15.4541C12.9679 15.6486 13.198 15.8029 13.4513 15.9082C13.7047 16.0136 13.9763 16.0679 14.2507 16.068Z"
        fill="currentColor"
      />
    </svg>
  );
};

const MotionLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_19954_939)">
        <path
          d="M10.5829 8.74902L5.04503 19.2503H0L4.32469 11.0509C4.99494 9.77912 6.66706 8.74902 8.0605 8.74902H10.5829ZM22.955 11.3747C22.955 9.92415 24.0842 8.74924 25.4774 8.74924C26.8706 8.74924 28 9.92393 28 11.3747C28 12.8248 26.8708 13.9997 25.4774 13.9997C24.0842 13.9997 22.955 12.8252 22.955 11.3747ZM11.5288 8.74902H16.5738L11.0359 19.2503H5.99091L11.5288 8.74902ZM17.4871 8.74902H22.5321L18.209 16.9484C17.5385 18.2202 15.8651 19.2503 14.4718 19.2503H11.9492L17.4871 8.74902Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_19954_939">
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const TailwindLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_19954_921)">
        <path
          d="M7 11.1927C7.93308 7.44991 10.2669 5.57812 14 5.57812C19.6 5.57812 20.3 9.78906 23.1 10.4909C24.9669 10.959 26.6 10.2572 28 8.3854C27.0669 12.1282 24.7331 14 21 14C15.4 14 14.7 9.78906 11.9 9.08726C10.0331 8.61913 8.4 9.32094 7 11.1927ZM0 19.6146C0.933078 15.8718 3.26692 14 7 14C12.6 14 13.3 18.2109 16.1 18.9127C17.9669 19.3809 19.6 18.6791 21 16.8073C20.0669 20.5501 17.7331 22.4219 14 22.4219C8.4 22.4219 7.7 18.2109 4.9 17.5091C3.03308 17.041 1.4 17.7428 0 19.6146Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_19954_921">
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

// Center is 282, 205
const integrations: IntegrationItem[] = [
  {
    id: "figma", // Top-Left
    icon: FigmaLogo,
    x: 110,
    y: 90,
    path: "M 270 205 V 105 Q 270 90 255 90 H 110",
    delay: 0.1,
  },
  {
    id: "claude", // Top-Right
    icon: ClaudeLogo,
    x: 360,
    y: 70,
    path: "M 294 205 V 85 Q 294 70 309 70 H 360",
    delay: 0.2,
  },
  {
    id: "shadcn", // Mid-Left
    icon: ShadcnLogo,
    x: 160,
    y: 205,
    path: "M 250 205 H 160",
    delay: 0.3,
  },
  {
    id: "react", // Mid-Right
    icon: ReactLogo,
    x: 480,
    y: 205,
    path: "M 314 205 H 480",
    delay: 0.4,
  },
  {
    id: "motion", // Bottom-Center
    icon: MotionLogo,
    x: 282,
    y: 360,
    path: "M 282 205 V 360",
    delay: 0.6,
  },
  {
    id: "tailwind", // Bottom-Right
    icon: TailwindLogo,
    x: 460,
    y: 340,
    path: "M 314 215 V 325 Q 314 340 329 340 H 460",
    delay: 0.7,
  },
];

const AnimatedPath = ({ d, id }: { d: string; id: string }) => {
  return (
    <>
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-border"
      />
      <motion.path
        d={d}
        stroke={`url(#${id})`}
        strokeWidth="2"
        fill="none"
        strokeDasharray="40 160"
        initial={{ strokeDashoffset: 200 }}
        animate={{ strokeDashoffset: -200 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 2,
        }}
      />
      <defs>
        <linearGradient id={id} gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="transparent" />
          <stop
            offset="50%"
            stopColor="var(--color-primary)"
            stopOpacity="0.5"
          />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </>
  );
};

export function Integration() {
  const containerId = useId();

  return (
    <div className="relative h-full w-full">
      {/* SVG Lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 564 410"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {integrations.map((integration) => (
          <AnimatedPath
            key={integration.id}
            d={integration.path}
            id={`${containerId}-${integration.id}`}
          />
        ))}
      </svg>

      {/* Center Logo */}
      <div className="absolute top-1/2 left-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-border bg-background p-0.5 shadow-md sm:rounded-2xl sm:p-2 sm:shadow-xl">
        <div className="border p-1 rounded-lg sm:p-2.5 sm:rounded-xl">
          <img
            src={"https://images.shadcnspace.com/assets/logo/shadcn-logo.png"}
            alt="logo"
            width={35}
            height={35}
            className="size-5 object-cover sm:size-9 block dark:hidden"
          />
          <img
            src={
              "https://images.shadcnspace.com/assets/logo/shadcn-white-logo.png"
            }
            alt="logo"
            width={35}
            height={35}
            className="size-5 object-cover sm:size-9 hidden dark:block"
          />
        </div>
        <motion.div
          className="absolute inset-0 rounded-lg border-2 border-primary/10 sm:rounded-2xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Peripheral Icons */}
      {integrations.map((integration) => {
        const Icon = integration.icon;
        return (
          <motion.div
            key={integration.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: integration.delay }}
            style={{
              left: `${(integration.x / 564) * 100}%`,
              top: `${(integration.y / 410) * 100}%`,
            }}
            className="absolute z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-border bg-background shadow-sm sm:h-12 sm:w-12 md:h-13.5 md:w-13.5 sm:rounded-xl text-foreground"
          >
            <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-foreground" />
          </motion.div>
        );
      })}
    </div>
  );
}

export function VisualContainer({ children, className }: VisualContainerProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-564/460 w-full items-center justify-center overflow-hidden rounded-none bg-muted p-8 sm:aspect-564/410 dark:bg-muted/50",
        className,
      )}
    >
      {/* Dots Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-background/60 from-10% via-transparent to-90% to-background/60" />
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        {children}
      </div>
    </div>
  );
}

const IntegrationCard = ({
  visual,
  title,
  description,
  url,
}: TeamCardProps) => {
  return (
    <Card className="mx-auto flex w-full flex-col sm:max-w-141 rounded-2xl overflow-hidden p-0 ring-0 border gap-0">
      <VisualContainer>{visual}</VisualContainer>

      <CardContent className="p-6 sm:p-8 flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl sm:text-2xl font-medium tracking-tight">
            {title}
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
        <Button
          nativeButton={false}
          className="h-10 w-fit rounded-full px-5 hover:bg-primary/80 cursor-pointer"
          render={<a href={url} />}
        >
          Learn more
        </Button>
      </CardContent>
    </Card>
  );
};

export function IntegrationCardDemo() {
  return (
    <div className="flex items-center justify-center w-full min-h-96 p-4 sm:p-6">
      <IntegrationCard
        visual={<Integration />}
        title="Seamless Integrations"
        description="Connect your favorite tools and keep your workflows unified without switching between platforms."
        url="#"
      />
    </div>
  );
}

export default IntegrationCardDemo;
