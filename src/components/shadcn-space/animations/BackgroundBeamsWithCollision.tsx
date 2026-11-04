"use client";
 
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, HTMLProps, ReactNode, RefObject } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
 
// Deterministic pseudo-random in [0, 1), seeded by index — keeps SSR and
// client markup identical (Math.random() would cause a hydration mismatch).
 
type CollisionMechanismProps = {
  containerRef: RefObject<HTMLDivElement | null>;
  parentRef: RefObject<HTMLDivElement | null>;
  beam: Beam;
  beamWidth: number;
  particleCount: number;
};
 
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}
 
function hexToRgba(hex: string, alpha: number) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
 
type Beam = {
  id: number;
  leftPercent: number;
  height: number;
  duration: number;
  delay: number;
  repeatDelay: number;
  travelDistance: number;
  color: string;
};
 
interface BackgroundBeamsWithCollisionProps {
  children?: ReactNode;
  className?: string;
  /** How many falling beams are rendered at once. */
  beamCount?: number;
  /** Colors cycled across the beams (and their collision sparks). */
  colors?: string[];
  /** Multiplier for fall speed and repeat cadence — higher is faster. */
  speed?: number;
  /** Width of each beam line, in px. */
  beamWidth?: number;
  /** How far a beam travels vertically per cycle, in px. */
  travelDistance?: number;
  /** Number of spark particles per collision burst. */
  particleCount?: number;
}
 
export const BackgroundBeamsWithCollision = ({
  children,
  className,
  beamCount = 14,
  colors = ["#22d3ee", "#38bdf8", "#a5f3fc"],
  speed = 1,
  beamWidth = 1,
  travelDistance = 500,
  particleCount = 16,
}: BackgroundBeamsWithCollisionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
 
  const beams = useMemo<Beam[]>(() => {
    return Array.from({ length: beamCount }, (_, i) => {
      const jitter = (seededRandom(i * 7.13 + 1) - 0.5) * (70 / beamCount);
      const leftPercent = ((i + 0.5) / beamCount) * 100 + jitter;
      const duration = (seededRandom(i * 3.1 + 2) * 2.5 + 1.5) / speed;
      const repeatDelay = (seededRandom(i * 5.7 + 3) * 1.5 + 0.5) / speed;
      const delay = seededRandom(i * 2.3 + 4) * 2;
      const height = 24 + seededRandom(i * 9.9 + 5) * 56;
 
      return {
        id: i,
        leftPercent,
        height,
        duration,
        delay,
        repeatDelay,
        travelDistance,
        color: colors[i % colors.length],
      };
    });
  }, [beamCount, colors, speed, travelDistance]);
 
  const glowColor = colors[0];
 
  return (
    <div
      ref={parentRef}
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden",
        className
      )}
    >
      {beams.map((beam) => (
        <CollisionMechanism
          key={beam.id}
          beam={beam}
          beamWidth={beamWidth}
          particleCount={particleCount}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}
 
      {children}
 
      <div
        ref={containerRef}
        className="absolute inset-x-0 bottom-0 w-full pointer-events-none"
        style={{
          backgroundColor: hexToRgba(glowColor, 0.08),
          boxShadow: `0 0 24px 12px ${hexToRgba(glowColor, 0.06)}, 0 1px 0 ${hexToRgba(glowColor, 0.12)}, 0 -1px 0 ${hexToRgba(glowColor, 0.12)}`,
        }}
      />
    </div>
  );
};
 
const CollisionMechanism = ({
  parentRef,
  containerRef,
  beam,
  beamWidth,
  particleCount,
}: CollisionMechanismProps) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({ detected: false, coordinates: null });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);
 
  useEffect(() => {
    const checkCollision = () => {
      if (beamRef.current && containerRef.current && parentRef.current && !cycleCollisionDetected) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();
 
        if (beamRect.bottom >= containerRect.top) {
          const relativeX = beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;
 
          setCollision({ detected: true, coordinates: { x: relativeX, y: relativeY } });
          setCycleCollisionDetected(true);
        }
      }
    };
 
    const animationInterval = setInterval(checkCollision, 50);
    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected, containerRef, parentRef]);
 
  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      const resetTimeout = setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
      }, 2000);
 
      const keyTimeout = setTimeout(() => {
        setBeamKey((prevKey) => prevKey + 1);
      }, 2000);
 
      return () => {
        clearTimeout(resetTimeout);
        clearTimeout(keyTimeout);
      };
    }
  }, [collision]);
 
  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{ translateY: "-200px" }}
        variants={{ animate: { translateY: `${beam.travelDistance}px` } }}
        transition={{
          duration: beam.duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beam.delay,
          repeatDelay: beam.repeatDelay,
        }}
        className="absolute top-0 m-auto rounded-full"
        style={{
          left: `${beam.leftPercent}%`,
          width: `${beamWidth}px`,
          height: `${beam.height}px`,
          backgroundImage: `linear-gradient(to top, ${beam.color}, transparent)`,
        }}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            color={beam.color}
            particleCount={particleCount}
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};
 
CollisionMechanism.displayName = "CollisionMechanism";
 
const Explosion = ({
  color,
  particleCount,
  style,
  ...props
}: HTMLProps<HTMLDivElement> & { color: string; particleCount: number; style?: CSSProperties }) => {
  const spans = useMemo(
    () =>
      Array.from({ length: particleCount }, (_, index) => ({
        id: index,
        directionX: Math.floor(seededRandom(index * 11.7) * 60 - 30),
        directionY: Math.floor(seededRandom(index * 17.3) * -40 - 10),
      })),
    [particleCount]
  );
 
  return (
    <div {...props} style={style} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full blur-sm"
        style={{ backgroundImage: `linear-gradient(to right, transparent, ${color}, transparent)` }}
      />
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ x: span.directionX, y: span.directionY, opacity: 0 }}
          transition={{ duration: seededRandom(span.id * 13.1) * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};