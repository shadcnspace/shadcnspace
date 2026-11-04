"use client";

import { useId, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Wifi, type LucideIcon } from "lucide-react";

const MotionButton = motion(Button);

export type Direction = "top" | "right" | "bottom" | "left";
export type DirectionProp = Direction | "auto";

export interface GooeyStatItem {
  key: string;
  label: string;
  value: string;
  tone?: "default" | "success" | "warning" | "danger";
}

const DIMENSIONS = {
  min: 40,
  gap: 12,
  max: 200,
};

const DEFAULT_STATS: GooeyStatItem[] = [
  { key: "status", label: "Status", value: "Operational", tone: "success" },
  { key: "latency", label: "Latency", value: "24 ms" },
  { key: "region", label: "Region", value: "ap-south-1" },
];

const toneDotClass: Record<NonNullable<GooeyStatItem["tone"]>, string> = {
  default: "bg-background/50",
  success: "bg-teal-400",
  warning: "bg-amber-300",
  danger: "bg-red-500",
};

const DIRECTION_ORDER: Direction[] = ["right", "left", "bottom", "top"];
const OPPOSITE_DIRECTION: Record<Direction, Direction> = {
  right: "left",
  left: "right",
  top: "bottom",
  bottom: "top",
};

type Edge = "left" | "right" | "top" | "bottom";
const ALL_EDGES: Edge[] = ["left", "right", "top", "bottom"];

interface DirectionEntryConfig {
  closedStyle: Record<string, number | string>;
  openStyle: Record<string, number | string>;
  transformOrigin: string;
  squashKey: "scaleX" | "scaleY";
}

/**
 * Builds the anchor/offset pair for one direction: `growEdge` is pinned near
 * the trigger (0 when closed, min+gap when open) while `crossEdge` stays put
 * and the remaining two edges are left "auto" so they don't fight the layout.
 */
const makeDirectionConfig = (
  growEdge: Edge,
  crossEdge: Edge,
  transformOrigin: string,
  squashKey: "scaleX" | "scaleY"
): DirectionEntryConfig => {
  const autoEdges = ALL_EDGES.filter((edge) => edge !== growEdge && edge !== crossEdge);
  const withAuto = (value: number) => {
    const style: Record<string, number | string> = { [growEdge]: value, [crossEdge]: 0 };
    autoEdges.forEach((edge) => {
      style[edge] = "auto";
    });
    return style;
  };

  return {
    closedStyle: withAuto(0),
    openStyle: withAuto(DIMENSIONS.min + DIMENSIONS.gap),
    transformOrigin,
    squashKey,
  };
};

const DIRECTION_CONFIG: Record<Direction, DirectionEntryConfig> = {
  right: makeDirectionConfig("left", "top", "left center", "scaleX"),
  left: makeDirectionConfig("right", "top", "right center", "scaleX"),
  bottom: makeDirectionConfig("top", "left", "center top", "scaleY"),
  top: makeDirectionConfig("bottom", "left", "center bottom", "scaleY"),
};

const getPanelVariants = (dir: Direction): Variants => {
  const cfg = DIRECTION_CONFIG[dir];

  return {
    closed: {
      ...cfg.closedStyle,
      scaleX: 1,
      scaleY: 1,
      borderRadius: 20,
      width: DIMENSIONS.min,
      height: DIMENSIONS.min,
      transition: {
        type: "spring",
        bounce: 0.15,
        duration: 0.35,
        left: { delay: 0.18 },
        right: { delay: 0.18 },
        top: { delay: 0.18 },
        bottom: { delay: 0.18 },
        width: { delay: 0 },
        height: { delay: 0 },
      },
    },
    open: {
      ...cfg.openStyle,
      [cfg.squashKey]: [1, 1.12, 1],
      borderRadius: 14,
      width: DIMENSIONS.max,
      height: "auto",
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.6,
        width: { delay: 0.12 },
        height: { delay: 0.12, type: "spring", bounce: 0.35 },
        borderRadius: { delay: 0.12 },
        [cfg.squashKey]: { delay: 0.12, duration: 0.5 },
      },
    },
  } as Variants;
};

const listVariants: Variants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.24 },
  },
};

const rowVariants: Variants = {
  closed: { opacity: 0, scale: 0.75, y: 6 },
  open: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.55, duration: 0.5 },
  },
};

export interface GooeyStatusTooltipProps {
  /**
   * Key/value rows shown in the expanded panel
   * @default Status, Latency, Region sample rows
   */
  data?: GooeyStatItem[];
  /**
   * Side the panel opens toward. "auto" measures available viewport space on
   * hover and picks the best-fitting side, falling back from an explicit
   * direction to its opposite, then to whichever side has the most room.
   * @default "top"
   */
  direction?: DirectionProp;
  /**
   * Icon rendered inside the trigger button
   * @default Wifi (lucide-react)
   */
  icon?: LucideIcon;
  /**
   * Accessible label for the trigger button
   * @default "Show status details"
   */
  triggerLabel?: string;
  /**
   * Additional classes for the outer wrapper
   */
  className?: string;
}

export function GooeyStatusTooltip({
  data = DEFAULT_STATS,
  direction = "top",
  icon: Icon = Wifi,
  triggerLabel = "Show status details",
  className,
}: GooeyStatusTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [resolvedDirection, setResolvedDirection] = useState<Direction>(
    direction === "auto" ? "right" : direction,
  );
  const filterId = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const resolveDirection = () => {
    const el = wrapperRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const requiredWidth = DIMENSIONS.max + DIMENSIONS.gap;
    const requiredHeight = 24 + data.length * 28 + DIMENSIONS.gap;

    const space: Record<Direction, number> = {
      right: window.innerWidth - rect.right,
      left: rect.left,
      bottom: window.innerHeight - rect.bottom,
      top: rect.top,
    };
    const required: Record<Direction, number> = {
      right: requiredWidth,
      left: requiredWidth,
      bottom: requiredHeight,
      top: requiredHeight,
    };
    const fits = (dir: Direction) => space[dir] >= required[dir];

    if (direction !== "auto") {
      if (fits(direction)) return setResolvedDirection(direction);
      if (fits(OPPOSITE_DIRECTION[direction])) {
        return setResolvedDirection(OPPOSITE_DIRECTION[direction]);
      }
    }

    const best =
      DIRECTION_ORDER.find(fits) ??
      DIRECTION_ORDER.reduce((a, b) => (space[b] > space[a] ? b : a));
    setResolvedDirection(best);
  };

  const handleEnter = () => {
    resolveDirection();
    setIsOpen(true);
  };

  const panelVariants = useMemo(
    () => getPanelVariants(resolvedDirection),
    [resolvedDirection]
  );
  const panelTransformOrigin =
    DIRECTION_CONFIG[resolvedDirection].transformOrigin;

  return (
    <div
      className={cn(
        "relative flex h-full min-h-32 w-full items-center justify-center bg-transparent",
        className,
      )}
    >
      <svg className="absolute left-0 top-0 h-0 w-0">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="4.4"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div
        ref={wrapperRef}
        style={{ filter: `url(#${filterId})` }}
        className="relative"
        onMouseEnter={handleEnter}
        onMouseLeave={() => setIsOpen(false)}
      >
        <MotionButton
          type="button"
          size="icon"
          aria-label={triggerLabel}
          animate={{ rotate: isOpen ? [0, -14, 10, 0] : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative z-20 size-10 cursor-pointer rounded-full"
        >
          <Icon className="size-4" />
        </MotionButton>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="status-panel"
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="closed"
              style={{ transformOrigin: panelTransformOrigin }}
              className="absolute overflow-hidden bg-foreground"
            >
              <motion.div
                variants={listVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="grid w-full max-w-50 gap-2 p-3"
              >
                {data.map((item) => (
                  <motion.div
                    key={item.key}
                    variants={rowVariants}
                    className="flex items-center justify-between gap-3 text-background"
                  >
                    <span className="text-xs font-medium text-background/70">
                      {item.label}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-xs">
                      <span
                        className={`size-1.5 rounded-full ${toneDotClass[item.tone ?? "default"]}`}
                      />
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const GooeyStatusTooltipDemo = () => {
  return <GooeyStatusTooltip />;
};

export default GooeyStatusTooltipDemo;
