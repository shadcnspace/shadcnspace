"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const EMOJI_BASE = "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets";

const RATINGS = [
    { folder: "Crying face", file: "crying_face_3d.png", label: "Terrible" },
    { folder: "Disappointed face", file: "disappointed_face_3d.png", label: "Bad" },
    { folder: "Neutral face", file: "neutral_face_3d.png", label: "Okay" },
    { folder: "Smiling face", file: "smiling_face_3d.png", label: "Good" },
    { folder: "Grinning face with smiling eyes", file: "grinning_face_with_smiling_eyes_3d.png", label: "Awesome" },
] as const;

const srcOf = (rating: (typeof RATINGS)[number]) =>
    `${EMOJI_BASE}/${encodeURIComponent(rating.folder)}/3D/${rating.file}`;

const sizeConfig = {
    sm: { emoji: "size-9", label: "text-[10px]" },
    md: { emoji: "size-14", label: "text-xs" },
    lg: { emoji: "size-20", label: "text-sm" },
} as const;

export interface RatingProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
    value?: number;
    defaultValue?: number;
    onValueChange?: (value: number) => void;
    max?: number;
    readOnly?: boolean;
    disabled?: boolean;
    size?: keyof typeof sizeConfig;
    labels?: string[];
}

export function Rating02({
    value,
    defaultValue = 0,
    onValueChange,
    max = 5,
    readOnly = false,
    disabled = false,
    size = "md",
    labels,
    className,
    ...props
}: RatingProps) {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const prefersReducedMotion = useReducedMotion();

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;
    const isInteractive = !readOnly && !disabled;

    const commitValue = (next: number) => {
        const clamped = Math.min(Math.max(Math.round(next), 0), max);
        if (!isControlled) setInternalValue(clamped);
        onValueChange?.(clamped);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (!isInteractive) return;
        if (event.key === "ArrowRight" || event.key === "ArrowUp") {
            event.preventDefault();
            commitValue(currentValue + 1);
        } else if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
            event.preventDefault();
            commitValue(currentValue - 1);
        } else if (event.key === "Home") {
            event.preventDefault();
            commitValue(0);
        } else if (event.key === "End") {
            event.preventDefault();
            commitValue(max);
        }
    };

    const clearHover = () => setHoverIndex(null);

    return (
        <div
            role="radiogroup"
            aria-label={`Rating: ${currentValue} out of ${max}`}
            aria-disabled={disabled || undefined}
            className={cn(
                "inline-flex items-center gap-2 md:gap-3",
                disabled && "pointer-events-none opacity-60",
                className,
            )}
            onMouseLeave={clearHover}
            onKeyDown={handleKeyDown}
            {...props}
        >
            {RATINGS.slice(0, max).map((rating, index) => {
                const isSelected = index + 1 === currentValue;
                const isHovered = hoverIndex === index;
                const isActive = isSelected || isHovered;
                const isFocusTarget = Math.max(Math.ceil(currentValue), 1) - 1 === index;
                const isFloating = isSelected && hoverIndex === null;

                const imgAnimate = prefersReducedMotion
                    ? { opacity: isActive ? 1 : 0.4, scale: isActive ? 1 : 0.9, y: 0, rotate: 0 }
                    : isHovered
                        ? { opacity: 1, scale: [0.9, 1.2, 1.05, 1.1], rotate: [-3, 2, -1, 0], y: 0 }
                        : isFloating
                            ? { opacity: 1, scale: [1, 1.04, 1], y: [0, -5, 0], rotate: 0 }
                            : { opacity: isActive ? 1 : 0.4, scale: isActive ? 1 : 0.9, y: 0, rotate: 0 };

                const imgTransition = prefersReducedMotion
                    ? { duration: 0.2, ease: "easeOut" as const }
                    : isHovered
                        ? { duration: 0.45, times: [0, 0.4, 0.7, 1], ease: [0.34, 1.56, 0.64, 1] as const }
                        : isFloating
                            ? { duration: 2.6, repeat: Infinity, ease: "easeInOut" as const }
                            : { duration: 0.3, ease: "easeOut" as const };

                return (
                    <motion.button
                        key={rating.folder}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        aria-label={`${rating.label}, ${index + 1} out of ${max}`}
                        tabIndex={isInteractive ? (isFocusTarget ? 0 : -1) : -1}
                        disabled={disabled}
                        className="group flex flex-col items-center gap-1.5 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 12, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                            delay: prefersReducedMotion ? 0 : index * 0.07,
                        }}
                        onMouseEnter={() => isInteractive && setHoverIndex(index)}
                        onFocus={() => isInteractive && setHoverIndex(index)}
                        onClick={() => isInteractive && commitValue(index + 1)}
                    >
                        <motion.img
                            src={srcOf(rating)}
                            alt={rating.label}
                            draggable={false}
                            loading="lazy"
                            className={cn(
                                sizeConfig[size].emoji,
                                "select-none object-contain transition-[filter] duration-300",
                                isInteractive && "cursor-pointer",
                                isActive ? "drop-shadow-lg" : "grayscale",
                            )}
                            animate={imgAnimate}
                            transition={imgTransition}
                        />
                        <span
                            className={cn(
                                sizeConfig[size].label,
                                "transition-colors duration-300",
                                isActive
                                    ? "font-medium text-foreground"
                                    : "text-muted-foreground/70",
                            )}
                        >
                            {labels?.[index] ?? rating.label}
                        </span>
                    </motion.button>
                );
            })}
        </div>
    );
}

const RatingDemo = () => {
    const [rating, setRating] = useState(3);

    return (
        <Rating02 value={rating} onValueChange={setRating} size="md" />
    );
};

export default RatingDemo;