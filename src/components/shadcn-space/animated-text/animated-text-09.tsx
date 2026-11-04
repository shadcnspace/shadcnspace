"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_GLYPHS = "▓▒░#%&*@$€£¥☰01QKR";

export interface TextDecoderProps {
  text?: string;
  glyphs?: string;
  className?: string;
  inkColor?: string;
  accentColor?: string;
  scrambleColor?: string;
  speed?: number;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);

    const onChange = () => setReduced(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export function TextDecoder({
  text = "SHADCNSPACE",
  glyphs = DEFAULT_GLYPHS,
  className,
  inkColor,
  accentColor,
  scrambleColor,
  speed = 1,
}: TextDecoderProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [output, setOutput] = useState(text);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const chars = Array.from(text);

    if (reducedMotion || chars.length === 0) {
      setOutput(text);
      setSettled(true);
      return;
    }

    const decodeMs = Math.max(600, chars.length * 80) / speed;
    const holdMs = 1400 / speed;
    const encryptMs = 400 / speed;
    const total = decodeMs + holdMs + encryptMs;
    const tick = 55;

    let elapsed = 0;
    const glyph = () =>
      glyphs[Math.floor(Math.random() * glyphs.length)] ?? "#";

    const id = window.setInterval(() => {
      elapsed = (elapsed + tick) % total;
      let frame = "";
      let isSettled = false;

      if (elapsed < decodeMs) {
        const progress = elapsed / decodeMs;
        for (let i = 0; i < chars.length; i++) {
          frame +=
            chars[i] === " "
              ? " "
              : i / chars.length < progress
                ? chars[i]
                : glyph();
        }
      } else if (elapsed < decodeMs + holdMs) {
        isSettled = true;
        frame = text;
      } else {
        const progress = (elapsed - decodeMs - holdMs) / encryptMs;
        for (let i = 0; i < chars.length; i++) {
          frame +=
            chars[i] === " "
              ? " "
              : i / chars.length >= progress
                ? chars[i]
                : glyph();
        }
      }

      setOutput(frame);
      setSettled(isSettled);
    }, tick);

    return () => window.clearInterval(id);
  }, [text, glyphs, speed, reducedMotion]);

  const scramble = scrambleColor ?? "var(--primary)";
  const accent = accentColor ?? "var(--primary)";
  const ink = inkColor ?? "currentColor";

  const style = {
    color: settled ? ink : scramble,
    textShadow: `0 0 ${settled ? "0.35em" : "0.4em"} color-mix(in oklch, ${
      settled ? accent : scramble
    } ${settled ? 30 : 45}%, transparent)`,
  } as CSSProperties;

  return (
    <span
      role="img"
      aria-label={text}
      data-settled={settled}
      className={cn(
        "font-medium whitespace-pre inline-block",
        "transition-[color,text-shadow] duration-200 ease-out motion-reduce:transition-none",
        className,
      )}
      style={style}
    >
      {output}
    </span>
  );
}

const TextDecoderDemo = () => {
  return (
    <TextDecoder
      text="SHADCNSPACE"
      className="text-2xl sm:text-3xl"
      accentColor="var(--color-sky-400)"
      scrambleColor="var(--color-sky-400)"
    />
  );
};

export default TextDecoderDemo;
