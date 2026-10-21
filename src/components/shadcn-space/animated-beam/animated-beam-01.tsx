import type { SVGProps } from "react";
import { Server } from "lucide-react";
import { cn } from "@/lib/utils";
import "@/components/shadcn-space/animated-beam/animated-beam-01.css";

const ShadcnSpaceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" {...props}>
    <circle cx="20" cy="20" r="20" className="fill-foreground" />
    <path
      d="M25.2992 26.2688C24.0576 26.2688 23.04 26 22.2464 25.4624C21.4528 24.9248 20.9728 24.1568 20.8064 23.1584L23.0336 22.5824C23.1232 23.0304 23.2704 23.3824 23.4752 23.6384C23.6928 23.8944 23.9552 24.08 24.2624 24.1952C24.5824 24.2976 24.928 24.3488 25.2992 24.3488C25.8624 24.3488 26.2784 24.2528 26.5472 24.0608C26.816 23.856 26.9504 23.6064 26.9504 23.312C26.9504 23.0176 26.8224 22.7936 26.5664 22.64C26.3104 22.4736 25.9008 22.3392 25.3376 22.2368L24.8 22.1408C24.1344 22.0128 23.5264 21.84 22.976 21.6224C22.4256 21.392 21.984 21.0784 21.6512 20.6816C21.3184 20.2848 21.152 19.7728 21.152 19.1456C21.152 18.1984 21.4976 17.4752 22.1888 16.976C22.88 16.464 23.7888 16.208 24.9152 16.208C25.9776 16.208 26.8608 16.4448 27.5648 16.9184C28.2688 17.392 28.7296 18.0128 28.9472 18.7808L26.7008 19.472C26.5984 18.9856 26.3872 18.64 26.0672 18.4352C25.76 18.2304 25.376 18.128 24.9152 18.128C24.4544 18.128 24.1024 18.2112 23.8592 18.3776C23.616 18.5312 23.4944 18.7488 23.4944 19.0304C23.4944 19.3376 23.6224 19.568 23.8784 19.7216C24.1344 19.8624 24.48 19.9712 24.9152 20.048L25.4528 20.144C26.1696 20.272 26.816 20.4448 27.392 20.6624C27.9808 20.8672 28.4416 21.168 28.7744 21.5648C29.12 21.9488 29.2928 22.4736 29.2928 23.1392C29.2928 24.1376 28.928 24.912 28.1984 25.4624C27.4816 26 26.5152 26.2688 25.2992 26.2688ZM30.6447 26V12.56H33.0639V17.648H33.4095C33.5119 17.4432 33.6719 17.2384 33.8895 17.0336C34.1071 16.8288 34.3951 16.6624 34.7535 16.5344C35.1247 16.3936 35.5919 16.3232 36.1551 16.3232C36.8975 16.3232 37.5439 16.496 38.0943 16.8416C38.6575 17.1744 39.0927 17.6416 39.3999 18.2432C39.7071 18.832 39.8607 19.5232 39.8607 20.3168V26H37.4415V20.5088C37.4415 19.792 37.2623 19.2544 36.9039 18.896C36.5583 18.5376 36.0591 18.3584 35.4063 18.3584C34.6639 18.3584 34.0879 18.608 33.6783 19.1072C33.2687 19.5936 33.0639 20.2784 33.0639 21.1616V26H30.6447Z"
      className="fill-background"
    />
  </svg>
);

const LovableIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <defs>
      <radialGradient
        id="animated-beam-01-lovable"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-1 22.49999 -30.45394 -1.3535 14 3)"
      >
        <stop offset=".25" stopColor="#FE7B02" />
        <stop offset=".433" stopColor="#FE4230" />
        <stop offset=".548" stopColor="#FE529A" />
        <stop offset=".654" stopColor="#DD67EE" />
        <stop offset=".95" stopColor="#4B73FF" />
      </radialGradient>
    </defs>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.082 0c3.91 0 7.081 3.179 7.081 7.1v2.7h2.357c3.91 0 7.082 3.178 7.082 7.1 0 3.923-3.17 7.1-7.082 7.1H0V7.1C0 3.18 3.17 0 7.082 0z"
      fill="url(#animated-beam-01-lovable)"
    />
  </svg>
);

const V0Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.252 8.25h5.624c.088 0 .176.006.26.018l-5.87 5.87a1.889 1.889 0 01-.019-.265V8.25h-2.25v5.623a4.124 4.124 0 004.125 4.125h5.624v-2.25h-5.624c-.09 0-.179-.006-.265-.018l5.874-5.875a1.9 1.9 0 01.02.27v5.623H24v-5.624A4.124 4.124 0 0019.876 6h-5.624v2.25zM0 7.5v.006l7.686 9.788c.924 1.176 2.813.523 2.813-.973V7.5H8.25v6.87L2.856 7.5H0z"
    />
  </svg>
);

const BoltIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 160 160" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      d="M87.3,123.63c-8.2,0-16.26-2.98-20.88-9.4l-1.63,7.56-30.11,16,3.25-16L59.85,22.35h26.85l-7.76,35.05c6.26-6.86,12.08-9.4,19.54-9.4,16.11,0,26.85,10.59,26.85,29.98s-12.38,45.64-38.04,45.64ZM97.59,83.66c0,9.25-6.56,16.26-15.06,16.26-4.77,0-9.1-1.79-11.93-4.92l4.18-18.35c3.13-3.13,6.71-4.92,10.89-4.92,6.41,0,11.93,4.77,11.93,11.93Z"
    />
  </svg>
);

// Paths are drawn in a 300 x 300 viewBox: source at (150, 50), hub at (150, 150), targets at y 250
const SOURCE_PATH = "M150 50 V150";

const targets = [
  {
    label: "Lovable",
    icon: LovableIcon,
    path: "M150 150 V180 Q150 210 120 210 H80 Q50 210 50 240 V250",
    position: "left-1/6",
    iconClass: "bg-orange-400/15",
    beamClass: "stroke-orange-400",
  },
  {
    label: "v0",
    icon: V0Icon,
    path: "M150 150 V250",
    position: "left-1/2",
    iconClass: "bg-teal-400/15 text-foreground",
    beamClass: "stroke-teal-400",
  },
  {
    label: "Bolt",
    icon: BoltIcon,
    path: "M150 150 V180 Q150 210 180 210 H220 Q250 210 250 240 V250",
    position: "left-5/6",
    iconClass: "bg-sky-400/15 text-foreground",
    beamClass: "stroke-sky-400",
  },
];

const AnimatedBeamDataFlow = () => {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      {/* Connection lines with travelling light pulses */}
      <svg
        aria-hidden="true"
        viewBox="0 0 300 300"
        fill="none"
        className="absolute inset-0 size-full"
      >
        <path
          d={SOURCE_PATH}
          pathLength={100}
          strokeWidth={1.5}
          vectorEffect="non-scaling-stroke"
          className="stroke-border"
        />
        <path
          d={SOURCE_PATH}
          pathLength={100}
          strokeWidth={2}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className="beam-pulse beam-pulse-source stroke-blue-500"
        />
        {targets.map((target) => (
          <g key={target.label}>
            <path
              d={target.path}
              pathLength={100}
              strokeWidth={1.5}
              vectorEffect="non-scaling-stroke"
              className="stroke-border"
            />
            <path
              d={target.path}
              pathLength={100}
              strokeWidth={2}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              className={cn(
                "beam-pulse beam-pulse-target",
                target.beamClass
              )}
            />
          </g>
        ))}
      </svg>

      {/* MCP server */}
      <div className="absolute top-1/6 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-2xl border border-border bg-background p-2 pe-5">
        <span className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
          <Server className="size-5" />
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-semibold whitespace-nowrap text-foreground">
            MCP Server
          </span>
          <span className="text-xs whitespace-nowrap text-muted-foreground">
            shadcnspace
          </span>
        </span>
      </div>

      {/* Hub */}
      <div className="absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background">
        <ShadcnSpaceIcon className="size-8" />
      </div>

      {/* Targets */}
      {targets.map((target) => {
        const Icon = target.icon;
        return (
          <div
            key={target.label}
            className={cn(
              "absolute top-5/6 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-border bg-background py-1.5 ps-1.5 pe-3",
              target.position
            )}
          >
            <span
              className={cn(
                "flex size-7 items-center justify-center rounded-full",
                target.iconClass
              )}
            >
              <Icon aria-hidden="true" className="size-4" />
            </span>
            <span className="text-sm font-medium text-foreground">
              {target.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedBeamDataFlow;
