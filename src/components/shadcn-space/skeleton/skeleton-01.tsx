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
      className="flex w-full max-w-sm flex-col items-center gap-6 rounded-md border p-6"
    >
      {/* Centered avatar */}
      <motion.div {...fadeUp(inView, 0.05)}>
        <Skeleton className="size-20 rounded-full" />
      </motion.div>

      {/* Name + bio lines centered */}
      <div className="flex w-full flex-col items-center gap-2">
        <motion.div {...fadeUp(inView, 0.1)}>
          <Skeleton className="h-5 w-36" />
        </motion.div>
        <motion.div {...fadeUp(inView, 0.15)}>
          <Skeleton className="h-4 w-24" />
        </motion.div>
        <motion.div {...fadeUp(inView, 0.2)}>
          <Skeleton className="h-3 w-52" />
        </motion.div>
      </div>

      {/* Stats grid */}
      <motion.div {...fadeUp(inView, 0.25)} className="grid w-full grid-cols-3 gap-4">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            {...fadeUp(inView, 0.3 + i * 0.07)}
            className="flex flex-col items-center gap-2 rounded-md border p-3"
          >
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-3 w-12" />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA button */}
      <motion.div {...fadeUp(inView, 0.52)} className="w-full">
        <Skeleton className="h-10 w-full" />
      </motion.div>
    </motion.div>
  )
}

export default ProfileSkeleton;
