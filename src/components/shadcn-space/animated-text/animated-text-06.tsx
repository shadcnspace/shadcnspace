"use client"

import { useMemo } from "react"
import { motion, type Variants, type HTMLMotionProps } from "motion/react"
import { cn } from "@/lib/utils"

export interface TextRevealProps extends Omit<HTMLMotionProps<"span">, "children"> {
  /**
   * The text content to animate
   */
  text: string
  /**
   * The animation mode:
   * - "letter": Animates letter by letter (default)
   * - "word": Animates word by word
   */
  mode?: "letter" | "word"
  /**
   * The HTML tag to render as the outer container
   * @default "span"
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
  /**
   * Initial delay before the text animation begins (in seconds)
   * @default 0.1
   */
  delay?: number
  /**
   * The stagger time between animated elements (in seconds)
   * @default 0.025
   */
  stagger?: number
  /**
   * The duration of the fade and blur transition for each element (in seconds)
   * @default 0.5
   */
  duration?: number
  /**
   * The initial CSS blur filter value (e.g. "8px", "4px")
   * @default "8px"
   */
  blur?: string
  /**
   * Initial vertical offset displacement (Y-axis)
   * @default 0
   */
  y?: number
  /**
   * Whether to animate once when in view, or repeat every time it enters the viewport
   * @default true
   */
  once?: boolean
}

export function TextReveal({
  text,
  mode = "letter",
  as = "span",
  delay = 0.1,
  stagger = 0.025,
  duration = 0.5,
  blur = "8px",
  y = 0,
  once = true,
  className,
  ...props
}: TextRevealProps) {
  // Memoize variants to prevent unnecessary recalculations on re-render
  const childVariants = useMemo<Variants>(() => {
    return {
      hidden: {
        opacity: 0,
        filter: `blur(${blur})`,
        y: y,
      },
      visible: (i: number) => ({
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          duration: duration,
          delay: delay + i * stagger,
          ease: "easeOut",
        },
      }),
    }
  }, [blur, y, duration, delay, stagger])

  const parentVariants = useMemo<Variants>(() => {
    return {
      hidden: {},
      visible: {},
    }
  }, [])

  const words = useMemo(() => text.split(" "), [text])

  // Get the motion tag dynamically
  const MotionComponent = motion[as] as React.ComponentType<any>

  let charIndex = 0

  return (
    <MotionComponent
      variants={parentVariants}
      initial={props.initial ?? "hidden"}
      whileInView={props.whileInView ?? "visible"}
      viewport={props.viewport ?? { once, amount: 0.2 }}
      className={cn("inline-block", className)}
      {...props}
    >
      {mode === "letter"
        ? words.map((word, wordIdx) => {
            return (
              <span key={wordIdx} className="inline-block whitespace-nowrap">
                {word.split("").map((char, charIdx) => {
                  const idx = charIndex++
                  return (
                    <motion.span
                      key={charIdx}
                      custom={idx}
                      variants={childVariants}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  )
                })}
                {wordIdx < words.length - 1 && (
                  <span className="inline-block">&nbsp;</span>
                )}
              </span>
            )
          })
        : words.map((word, wordIdx) => {
            return (
              <span key={wordIdx} className="inline-block whitespace-nowrap">
                <motion.span
                  custom={wordIdx}
                  variants={childVariants}
                  className="inline-block"
                >
                  {word}
                </motion.span>
                {wordIdx < words.length - 1 && (
                  <span className="inline-block">&nbsp;</span>
                )}
              </span>
            )
          })}
    </MotionComponent>
  )
}

const TextRevealMotion = () => {
  return (
    <TextReveal
      text="Shadcnspace is generating your table!"
      as="p"
      className="text-xl sm:text-2xl"
    />
  )
}

export default TextRevealMotion