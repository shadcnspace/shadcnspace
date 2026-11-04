'use client'

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "motion/react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { X, Wallet } from "lucide-react"
import { cn } from "@/lib/utils"

const FailedToastContent = () => {
  const [status, setStatus] = useState<"pending" | "failed">("pending")

  useEffect(() => {
    const t = setTimeout(() => setStatus("failed"), 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <style>{`
        @keyframes error-ripple {
          0%   { transform: scale(1);   opacity: 0.45; }
          30%  {                        opacity: 0.38; }
          70%  {                        opacity: 0.1;  }
          100% { transform: scale(3.4); opacity: 0;    }
        }
        @keyframes amber-breathe-07 {
          0%, 100% { transform: scale(1);    opacity: 0.35; }
          50%       { transform: scale(1.22); opacity: 0.1;  }
        }
        .ripple-red   { animation: error-ripple   2.2s cubic-bezier(0.1, 0.5, 0.25, 1) infinite; }
        .ripple-amber-07 { animation: amber-breathe-07 1.9s ease-in-out infinite; }
      `}</style>

      <div className="relative flex w-80 items-start gap-3.5 overflow-hidden rounded-2xl border border-border bg-background p-4 transition-all duration-700">
        {/* Icon with wave */}
        <div className="relative mt-0.5 shrink-0">
          {status === "failed" && (
            <span className="ripple-red absolute inset-0 rounded-full bg-red-500/25" />
          )}
          {status === "pending" && (
            <span className="ripple-amber-07 absolute inset-0 rounded-full bg-amber-300/30" />
          )}

          {/* Icon circle */}
          <div className={cn(
            "relative flex size-11 items-center justify-center rounded-full shadow-xs transition-colors duration-500",
            status === "pending" ? "bg-amber-300/20" : "bg-red-500/15"
          )}>
            <Wallet className={cn(
              "size-5 transition-colors duration-500",
              status === "pending" ? "text-amber-400" : "text-red-500"
            )} />

            {/* Status badge */}
            <div className={cn(
              "absolute -bottom-1 -right-1 flex size-4.5 items-center justify-center rounded-full shadow-sm transition-colors duration-500",
              status === "pending" ? "bg-amber-300/80" : "bg-red-500/80"
            )}>
              {status === "pending" ? (
                <Spinner className="size-2.5 stroke-3 text-white" />
              ) : (
                <X className="size-2.5 stroke-3 text-white" />
              )}
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={status}
              initial={{ x: 24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -24, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-sm font-semibold text-foreground">
                {status === "pending" ? "Sending Payout..." : "Payout Failed"}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {status === "pending"
                  ? "Routing $2,400 through the payment network."
                  : "Unable to process the transfer. Please try again."}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

const PayoutFailed = () => {
  const showToast = () => {
    toast.custom(() => <FailedToastContent />, { duration: 6000 })
  }

  return (
    <div className="flex items-center justify-center">
      <Button variant="outline" className="cursor-pointer" onClick={showToast}>
        Failed Payout
      </Button>
    </div>
  )
}

export default PayoutFailed
