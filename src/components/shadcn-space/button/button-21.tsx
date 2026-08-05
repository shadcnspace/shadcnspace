"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowBigUp } from "lucide-react"
import { cn } from "@/lib/utils"

const COLORS = ["bg-orange-500", "bg-amber-400", "bg-yellow-400", "bg-orange-400"]

const COUNT = 6
const PARTICLES = Array.from({ length: COUNT }, (_, i) => {
  const angle = -150 + (i / (COUNT - 1)) * 120   // -150° → -30° (upward arc)
  const rad   = (angle * Math.PI) / 180
  const dist  = 30 + (i % 2) * 15
  return {
    id:    i,
    x:     Math.cos(rad) * dist,
    y:     Math.sin(rad) * dist,
    color: COLORS[i % COLORS.length],
    size:  4 + (i % 2),
    dur:   0.5 + (i % 3) * 0.07,
  }
})

export default function UpVoteButton() {
  const [voted, setVoted]       = useState(false)
  const [count, setCount]       = useState(165)
  const [clickKey, setClickKey] = useState(0)

  const handleClick = () => {
    const next = !voted
    setVoted(next)
    setCount((c) => (next ? c + 1 : c - 1))
    if (next) setClickKey((k) => k + 1)
  }

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Particles */}
      <AnimatePresence>
        {voted && PARTICLES.map((p) => (
          <motion.span
            key={`${p.id}-${clickKey}`}
            className={cn("absolute rounded-full pointer-events-none", p.color)}
            style={{ width: p.size, height: p.size, left: "50%", top: "50%", marginLeft: -(p.size / 2), marginTop: -(p.size / 2) }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{ x: p.x, y: [0, p.y * 0.6, p.y], opacity: [1, 1, 0], scale: 0.5 }}
            exit={{}}
            transition={{ duration: p.dur, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </AnimatePresence>

      {/* Pill */}
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.88 }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
        className="relative overflow-hidden inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800 cursor-pointer select-none"
      >
        {/* Ripple */}
        <AnimatePresence initial={false}>
          <motion.span
            key={clickKey}
            className="absolute w-5 h-5 rounded-full bg-orange-500/25 pointer-events-none"
            style={{ top: "50%", left: "50%", marginLeft: -10, marginTop: -10 }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 15, opacity: 0 }}
            exit={{}}
            transition={{
              scale:   { duration: 1.1, ease: "easeOut" },
              opacity: { duration: 1.0, ease: "easeIn", delay: 0.1 },
            }}
          />
        </AnimatePresence>

        {/* Arrow */}
        <motion.div
          key={`icon-${clickKey}`}
          animate={voted ? { y: [0, -4, 1, -2, 0] } : { y: [0, 3, 0] }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <ArrowBigUp
            className={cn("size-5 transition-colors duration-300", voted ? "text-orange-500" : "text-neutral-400")}
            fill={voted ? "currentColor" : "none"}
            strokeWidth={1.75}
          />
        </motion.div>

        {/* Count */}
        <div className="overflow-hidden h-5 flex items-center tabular-nums min-w-[2ch]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={count}
              initial={{ y: voted ? 12 : -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: voted ? -12 : 12, opacity: 0 }}
              transition={{ duration: 0.18, ease: [0.2, 0, 0.2, 1] }}
              className="block text-sm font-semibold text-white"
            >
              {count.toLocaleString()}
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.button>
    </div>
  )
}
