"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Skeleton } from "@/components/ui/skeleton"

const fadeUp = (inView: boolean, delay: number) => ({
  initial: { opacity: 0, y: 8 },
  animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 },
  transition: { duration: 0.4, ease: "easeOut", delay },
})

const ListSkeleton = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex w-full max-w-md flex-col gap-4 rounded-md border p-4"
    >
      {/* List title + action */}
      <motion.div {...fadeUp(inView, 0.05)} className="flex items-center justify-between">
        <Skeleton className="h-5 w-28" />
        <Skeleton className="h-7 w-16 rounded-md" />
      </motion.div>

      {/* List rows */}
      <div className="flex flex-col gap-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            {...fadeUp(inView, 0.1 + i * 0.08)}
            className="flex items-center gap-3 rounded-md border p-3"
          >
            <Skeleton className="size-9 shrink-0 rounded-md" />
            <div className="flex flex-1 flex-col gap-2">
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-3 w-1/2" />
            </div>
            <Skeleton className="h-6 w-14 shrink-0 rounded-full" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default ListSkeleton;
