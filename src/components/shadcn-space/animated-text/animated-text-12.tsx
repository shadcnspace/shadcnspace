"use client";

import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface OrigamiFoldProps {
  text?: string;
  className?: string;
  inkColor?: string;
  accentColor?: string;
  secondaryColor?: string;
}

const ORIGAMI_KEYFRAMES = `
@keyframes origami-fold {
  0%, 8% {
    transform: rotateY(-92deg) translateZ(0);
    opacity: 0;
    color: color-mix(in srgb, var(--origami-ink) 55%, var(--color-black));
    text-shadow: none;
    filter: brightness(0.55);
  }
  22% {
    transform: rotateY(8deg) translateZ(6px);
    opacity: 1;
    color: var(--origami-ink);
    text-shadow: 4px 0 10px color-mix(in srgb, var(--origami-accent) 35%, transparent);
    filter: brightness(1.08);
  }
  30%, 58% {
    transform: rotateY(0deg) translateZ(0);
    opacity: 1;
    color: var(--origami-ink);
    text-shadow: none;
    filter: brightness(1);
  }
  72% {
    transform: rotateY(-12deg) translateZ(4px);
    opacity: 1;
    color: var(--origami-accent-2);
    text-shadow: -3px 0 8px color-mix(in srgb, var(--origami-accent-2) 30%, transparent);
    filter: brightness(1.05);
  }
  86%, 100% {
    transform: rotateY(92deg) translateZ(0);
    opacity: 0;
    color: color-mix(in srgb, var(--origami-ink) 55%, var(--color-black));
    text-shadow: none;
    filter: brightness(0.55);
  }
}
`;

export function OrigamiFold({
  text = "SHADCN",
  className,
  inkColor,
  accentColor = "var(--color-orange-400)",
  secondaryColor = "var(--color-orange-400)",
}: OrigamiFoldProps) {
  const style = {
    "--origami-ink": inkColor ?? "currentColor",
    "--origami-accent": accentColor,
    "--origami-accent-2": secondaryColor,
  } as CSSProperties;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ORIGAMI_KEYFRAMES }} />
      <span
        role="img"
        aria-label={text}
        className={cn(
          "inline-flex font-medium tracking-widest text-(--origami-ink) perspective-[640px] transform-3d",
          className,
        )}
        style={style}
      >
        {Array.from(text).map((char, i) => (
          <span
            key={`${text}-${i}`}
            aria-hidden="true"
            className="inline-block origin-left backface-hidden transform-3d animate-[origami-fold_3.8s_cubic-bezier(0.4,0,0.2,1)_infinite] [animation-delay:calc(var(--fold-index)*0.11s)] motion-reduce:animate-none"
            style={{ "--fold-index": i } as CSSProperties}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </>
  );
}

const OrigamiFoldDemo = () => {
  return <OrigamiFold text="SHADCN" className="text-3xl sm:text-4xl" />;
};

export default OrigamiFoldDemo;
