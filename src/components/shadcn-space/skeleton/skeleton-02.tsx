"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Skeleton } from "@/components/ui/skeleton"

const fadeUp = (inView: boolean, delay: number) => ({
  initial: { opacity: 0, y: 8 },
  animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 },
  transition: { duration: 0.4, ease: "easeOut", delay },
})

const ProfileSkeleton = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex w-full max-w-2xl flex-col gap-4 rounded-md border p-4"
    >
      {/* Table title + action */}
      <motion.div {...fadeUp(inView, 0.05)} className="flex items-center justify-between">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-8 w-20 rounded-md" />
      </motion.div>

      {/* Header row */}
      <motion.div {...fadeUp(inView, 0.1)} className="grid grid-cols-4 gap-4 rounded-md bg-muted px-3 py-2">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-3 w-16" />
      </motion.div>

      {/* Data rows */}
      <div className="flex flex-col gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            {...fadeUp(inView, 0.15 + i * 0.08)}
            className="grid grid-cols-4 items-center gap-4 border-b pb-3 last:border-0 last:pb-0"
          >
            <div className="flex items-center gap-3">
              <Skeleton className="size-8 shrink-0 rounded-full" />
              <Skeleton className="h-4 flex-1" />
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default ProfileSkeleton;
