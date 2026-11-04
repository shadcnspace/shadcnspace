"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface MarkerHighlightProps {
  before?: string;
  highlight: string;
  after?: string;
  markerColor?: string;
  baseColor?: string;
  highlightedTextColor?: string;
  speed?: number;
  className?: string;
}

const isCssColorValue = (color?: string): boolean => {
  if (!color) return false;
  return (
    color.startsWith("#") ||
    color.startsWith("rgb") ||
    color.startsWith("hsl") ||
    color.startsWith("var(")
  );
};

export function MarkerHighlight({
  before = "",
  highlight,
  after = "",
  markerColor = "#facc15",
  baseColor,
  highlightedTextColor,
  speed = 1,
  className,
}: MarkerHighlightProps) {
  const [isInView, setIsInView] = useState(false);

  const isMarkerCss = isCssColorValue(markerColor);
  const isBaseCss = isCssColorValue(baseColor);
  const isHighlightTextCss = isCssColorValue(highlightedTextColor);

  const bgClass = markerColor && !isMarkerCss ? markerColor : "";
  const baseTextClass = baseColor && !isBaseCss ? baseColor : "";
  const highlightTextClass =
    highlightedTextColor && !isHighlightTextCss && isInView
      ? highlightedTextColor
      : "";

  const resolvedBaseColor = isBaseCss
    ? baseColor
    : baseColor
      ? undefined
      : "hsl(var(--foreground))";
  const resolvedHighlightedTextColor = highlightedTextColor
    ? isHighlightTextCss
      ? highlightedTextColor
      : undefined
    : resolvedBaseColor;

  return (
    <span
      className={cn("inline-block tracking-tight", baseTextClass, className)}
      style={{
        color: resolvedBaseColor,
      }}
    >
      {before && <span>{before} </span>}
      <span style={{ position: "relative", display: "inline-block" }}>
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
          transition={{
            type: "spring",
            damping: 14,
            stiffness: 100,
            delay: 0.2 / speed,
          }}
          className={cn("absolute origin-left z-0", bgClass)}
          style={{
            inset: "0 -0.1em",
            background: isMarkerCss ? markerColor : undefined,
            transformOrigin: "left center",
          }}
        />
        <span
          className={cn("transition-colors ease-out", highlightTextClass)}
          style={{
            position: "relative",
            zIndex: 1,
            color: isInView ? resolvedHighlightedTextColor : resolvedBaseColor,
            transitionDuration: `${0.25 / speed}s`,
            transitionDelay: `${0.45 / speed}s`,
          }}
        >
          {highlight}
        </span>
      </span>
      {after && <span> {after}</span>}
    </span>
  );
}

const MarkerHighlightDemo = () => {
  return (
    <>
      <MarkerHighlight
        before="Made for "
        highlight="Designers"
        after=" & Developers"
        className="text-3xl text-center leading-tight font-medium"
        markerColor="bg-amber-300"
        highlightedTextColor="text-gray-950"
      />
    </>
  );
};

export default MarkerHighlightDemo;
