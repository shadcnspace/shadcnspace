import type { SVGProps } from "react";
import { AppWindow } from "lucide-react";
import { cn } from "@/lib/utils";
import "@/components/shadcn-space/animated-beam/animated-beam-04.css";

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path d="M8 0.000502537C3.5805 0.000502537 0 3.584 0 8.0005C0 11.537 2.292 14.5345 5.4685 15.592C5.87 15.6675 6.015 15.42 6.015 15.206C6.015 15.016 6.0105 14.5135 6.0075 13.8465C3.781 14.3285 3.312 12.771 3.312 12.771C2.9475 11.849 2.4215 11.6015 2.4215 11.6015C1.6975 11.107 2.479 11.1175 2.479 11.1175C3.281 11.172 3.703 11.94 3.703 11.94C4.4165 13.164 5.575 12.81 6.0335 12.604C6.1035 12.0885 6.312 11.734 6.539 11.5365C4.763 11.336 2.8955 10.6485 2.8955 7.583C2.8955 6.7075 3.2055 5.9945 3.718 5.4345C3.6295 5.234 3.3585 4.419 3.7885 3.317C3.7885 3.317 4.458 3.1035 5.9885 4.1375C6.64041 3.95998 7.31285 3.86903 7.9885 3.867C8.6685 3.8715 9.348 3.9605 9.9885 4.1375C11.51 3.1035 12.179 3.317 12.179 3.317C12.6085 4.419 12.3375 5.2335 12.2595 5.4345C12.767 5.9945 13.077 6.708 13.077 7.583C13.077 10.6555 11.207 11.333 9.429 11.5285C9.707 11.768 9.9675 12.2605 9.9675 13.008C9.9675 14.078 9.9575 14.94 9.9575 15.2005C9.9575 15.4085 10.0975 15.6585 10.5095 15.578C13.7095 14.5315 15.999 11.5315 15.999 8C15.999 3.5835 12.4185 2.54313e-06 7.999 2.54313e-06L8 0.000502537Z" />
  </svg>
);

const SlackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 12 12" fill="none" {...props}>
    <path
      d="M2.524 7.562a1.257 1.257 0 1 1-1.257-1.257h1.257v1.257ZM3.152 7.562a1.257 1.257 0 1 1 2.514.005v3.144a1.257 1.257 0 1 1-2.514 0V7.562Z"
      fill="#E01E5A"
    />
    <path
      d="M4.41 2.514a1.257 1.257 0 1 1 1.257-1.257v1.257H4.41ZM4.41 3.152a1.257 1.257 0 1 1-.005 2.514H1.257a1.257 1.257 0 1 1 0-2.514H4.41Z"
      fill="#36C5F0"
    />
    <path
      d="M9.448 4.41a1.257 1.257 0 1 1 1.257 1.257H9.448V4.41ZM8.819 4.41a1.257 1.257 0 1 1-1.257 1.257V2.514a1.257 1.257 0 1 1 2.514 0V4.41Z"
      fill="#2EB67D"
    />
    <path
      d="M7.562 9.448a1.257 1.257 0 1 1 1.257 1.257 1.257 1.257 0 0 1-1.257-1.257V9.448ZM7.562 8.819a1.257 1.257 0 1 1 0-2.514h3.152a1.257 1.257 0 1 1 0 2.514H7.562Z"
      fill="#ECB22E"
    />
  </svg>
);

const NotionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 12 12" fill="none" {...props}>
    <path
      d="M.98.518 7.62.028c.815-.07 1.024-.023 1.537.35l2.119 1.492c.35.258.467.326.467.607v8.19c0 .513-.188.817-.84.862l-7.71.466c-.49.024-.722-.046-.98-.372L.652 9.593c-.28-.373-.394-.654-.394-.98V1.334c0-.42.185-.769.722-.816Z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.62.028.98.518c-.537.047-.722.396-.722.816v7.28c0 .325.118.606.394.979l1.56 2.03c.257.325.492.396.981.372l7.711-.466c.652-.047.84-.35.84-.863V2.477c0-.265-.106-.343-.413-.567L9.16.377C8.644.005 8.435-.042 7.62.028ZM3.368 2.344c-.63.042-.774.052-1.13-.24L1.33 1.382c-.092-.096-.047-.213.187-.237l6.382-.464c.537-.047.816.14 1.025.303l1.095.792c.047.024.164.164.023.164l-6.59.396-.082.008ZM2.634 10.596V3.644c0-.305.093-.443.372-.466l7.57-.443c.259-.024.373.14.373.443v6.905c0 .305-.047.56-.466.584l-7.245.42c-.42.023-.605-.117-.605-.49ZM9.785 4.017c.047.21 0 .42-.21.443l-.35.07v5.134c-.302.163-.581.255-.815.255-.373 0-.467-.117-.746-.466L5.38 5.86v3.475l.723.164s0 .42-.584.42l-1.607.093c-.047-.093 0-.325.163-.373l.42-.117V4.926l-.583-.047c-.047-.211.07-.514.396-.537l1.724-.117 2.376 3.64V4.647l-.605-.07c-.047-.258.14-.443.373-.466l1.608-.094Z"
      fill="#030712"
    />
  </svg>
);

const LinearIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 12 12" fill="none" {...props}>
    <path d="M0 0h12v12H0V0Z" fill="#5E6AD2" />
    <path
      d="M8.727 3.264v.002c.01.017.006.727.006.825l.002 3.494c-.086.005-.34.065-.434.085l-.94.199-2.693.571-.926.196a5.907 5.907 0 0 1-.454.061l-.007-.001c-.017-.038 0-3.92-.001-4.301.151-.017.448-.09.605-.124l1.213-.26 2.383-.51c.42-.09.85-.177 1.246-.237Z"
      fill="#FEFEFE"
    />
  </svg>
);

const GmailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20.2143 15.2381" {...props}>
    <path
      d="M4.59481 15.1631V7.35376L2.1729 5.13808L0.00111898 3.90853V13.7849C0.00111898 14.5475 0.618933 15.1631 1.37926 15.1631H4.59481Z"
      fill="#4285F4"
    />
    <path
      d="M15.6195 15.1631H18.8351C19.5977 15.1631 20.2132 14.5452 20.2132 13.785V3.90862L17.7533 5.31692L15.6195 7.35377V15.1631Z"
      fill="#34A853"
    />
    <path
      d="M4.59479 7.35375L4.26524 4.30242L4.59479 1.38199L10.1072 5.51633L15.6196 1.38199L15.9882 4.14474L15.6196 7.35375L10.1072 11.4881L4.59479 7.35375Z"
      fill="#EA4335"
    />
    <path
      d="M15.6195 1.38199V7.35374L20.2132 3.90851V2.07102C20.2132 0.366798 18.2678 -0.60473 16.9058 0.417328L15.6195 1.38199Z"
      fill="#FBBC04"
    />
    <path
      d="M0.00131836 3.90854L2.11404 5.49314L4.59501 7.35377V1.38202L3.3087 0.417359C1.94437 -0.604778 0.00131836 0.366828 0.00131836 2.07097V3.90854Z"
      fill="#C5221F"
    />
  </svg>
);

const ClaudeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="#D97757" {...props}>
    <path d="M3.11946 10.6694L6.24859 8.91366L6.30121 8.76118L6.24859 8.67635H6.09611L5.57315 8.64413L3.78523 8.59581L2.23463 8.53138L0.732349 8.45084L0.354363 8.37031L0 7.90319L0.0365105 7.67017L0.354363 7.45648L0.809665 7.49621L1.81584 7.56494L3.32564 7.6691L4.42094 7.73353L6.04349 7.90212H6.30121L6.33772 7.79796L6.24967 7.73353L6.18094 7.6691L4.61852 6.61031L2.92725 5.49138L2.04134 4.84709L1.56242 4.52064L1.32081 4.2146L1.21664 3.54668L1.65154 3.06776L2.2357 3.10749L2.38497 3.14722L2.97664 3.60252L4.24054 4.58078L5.89101 5.79635L6.13262 5.99715L6.22926 5.92843L6.24107 5.88011L6.13262 5.69863L5.2349 4.07608L4.27705 2.42561L3.85074 1.74158L3.73799 1.33138C3.69826 1.16279 3.66926 1.02104 3.66926 0.848159L4.1643 0.175944L4.43812 0.0878906L5.09852 0.175944L5.37664 0.417555L5.78685 1.35608L6.45154 2.83366L7.48242 4.84279L7.78416 5.43876L7.94523 5.99071L8.00537 6.1593H8.10953V6.06266L8.19436 4.93084L8.35114 3.54131L8.50362 1.75339L8.55624 1.24977L8.80537 0.646279L9.3004 0.319837L9.68698 0.504535L10.0048 0.959836L9.96081 1.25406L9.77181 2.48252L9.40134 4.40682L9.15973 5.69541H9.3004L9.46148 5.53433L10.1133 4.66883L11.2086 3.2997L11.6918 2.75635L12.2556 2.15608L12.6175 1.87044H13.3015L13.8051 2.6189L13.5796 3.39205L12.8752 4.28547L12.291 5.04252L11.4534 6.17004L10.9305 7.07205L10.9788 7.144L11.1034 7.13219L12.9954 6.7295L14.0177 6.5448L15.2376 6.33541L15.7895 6.59312L15.8497 6.85514L15.6328 7.39098L14.3281 7.71313L12.7979 8.01917L10.5192 8.55823L10.4913 8.57863L10.5235 8.61836L11.5501 8.715L11.9893 8.73863H13.0642L15.0658 8.88789L15.5887 9.23366L15.9023 9.65675L15.8497 9.9789L15.0443 10.3891L13.9576 10.1314L11.4212 9.52789L10.5514 9.31098H10.4311V9.38292L11.156 10.0916L12.4843 11.2911L14.1477 12.8374L14.2325 13.2197L14.0188 13.5214L13.7933 13.4892L12.3318 12.3896L11.7681 11.8946L10.4913 10.8197H10.4064V10.9325L10.7007 11.3631L12.2545 13.6986L12.335 14.4149L12.2223 14.6479L11.8196 14.7886L11.3772 14.708L10.4677 13.4312L9.52913 11.9934L8.77208 10.7048L8.67973 10.7574L8.23302 15.5692L8.02362 15.8151L7.5404 15.9998L7.13772 15.6938L6.92403 15.1988L7.13772 14.2205L7.39544 12.9437L7.60483 11.929L7.79383 10.6683L7.90658 10.2495L7.89906 10.2216L7.80671 10.2334L6.85638 11.5381L5.41101 13.4914L4.26738 14.7155L3.99356 14.824L3.51893 14.5781L3.56295 14.1389L3.82819 13.748L5.41101 11.7346L6.36564 10.4868L6.98201 9.76628L6.97772 9.66212H6.94121L2.73718 12.3918L1.98873 12.4884L1.66658 12.1867L1.70631 11.6916L1.85879 11.5306L3.12268 10.6608L3.11839 10.6651L3.11946 10.6694Z" />
  </svg>
);

// Paths are drawn in a 400 x 300 viewBox: sources at x 40, hub at (200, 150), app at x 330
const OUTPUT_PATH = "M200 150 H330";

const sources = [
  { label: "GitHub", icon: GithubIcon, y: 30, position: "top-1/10", iconClass: "size-5 text-foreground", beamClass: "stroke-sky-400" },
  { label: "Slack", icon: SlackIcon, y: 90, position: "top-3/10", iconClass: "size-5", beamClass: "stroke-teal-400" },
  { label: "Notion", icon: NotionIcon, y: 150, position: "top-1/2", iconClass: "size-5", beamClass: "stroke-amber-300" },
  { label: "Linear", icon: LinearIcon, y: 210, position: "top-7/10", iconClass: "size-5 rounded-sm", beamClass: "stroke-blue-500" },
  { label: "Gmail", icon: GmailIcon, y: 270, position: "top-9/10", iconClass: "h-4 w-5", beamClass: "stroke-orange-400" },
].map((source) => ({
  ...source,
  // Straight out of the tile, then an S-curve into the hub
  path:
    source.y === 150
      ? "M40 150 H200"
      : `M40 ${source.y} H80 C140 ${source.y} 140 150 200 150`,
}));

const AnimatedBeamFanIn = () => {
  return (
    <div className="relative mx-auto aspect-4/3 w-full max-w-lg">
      {/* Connection lines with travelling light pulses */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 300"
        fill="none"
        className="absolute inset-0 size-full"
      >
        {sources.map((source) => (
          <g key={source.label}>
            <path
              d={source.path}
              pathLength={100}
              strokeWidth={1.5}
              vectorEffect="non-scaling-stroke"
              className="stroke-border"
            />
            <path
              d={source.path}
              pathLength={100}
              strokeWidth={2}
              strokeLinecap="round"
              className={cn(
                "animated-beam-04-pulse animated-beam-04-source",
                source.beamClass
              )}
            />
          </g>
        ))}
        <path
          d={OUTPUT_PATH}
          pathLength={100}
          strokeWidth={1.5}
          vectorEffect="non-scaling-stroke"
          className="stroke-border"
        />
        <path
          d={OUTPUT_PATH}
          pathLength={100}
          strokeWidth={2}
          strokeLinecap="round"
          className="animated-beam-04-pulse animated-beam-04-output stroke-teal-400"
        />
      </svg>

      {/* Sources */}
      {sources.map((source) => {
        const Icon = source.icon;
        return (
          <div
            key={source.label}
            className={cn(
              "absolute left-1/10 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-border bg-background",
              source.position
            )}
          >
            <Icon aria-hidden="true" className={source.iconClass} />
            <span className="sr-only">{source.label}</span>
          </div>
        );
      })}

      {/* Claude hub */}
      <div className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background">
        <span
          aria-hidden="true"
          className="animated-beam-04-hub-ring absolute inset-0 rounded-full border border-foreground/20"
        />
        <ClaudeIcon aria-hidden="true" className="size-8" />
        <span className="sr-only">Claude</span>
      </div>

      {/* Output */}
      <div className="absolute top-1/2 left-33/40 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 rounded-2xl border border-border bg-background p-2 pe-4">
        <span className="flex size-9 items-center justify-center rounded-xl bg-teal-400/15 text-teal-400">
          <AppWindow className="size-5" />
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-semibold whitespace-nowrap text-foreground">
            Your App
          </span>
          <span className="text-xs whitespace-nowrap text-muted-foreground">
            Synced
          </span>
        </span>
      </div>
    </div>
  );
};

export default AnimatedBeamFanIn;
