"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2Icon, XIcon } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const MotionButton = motion.create(Button);

interface AlertToastDemoProps {
  title?: string;
  description?: string;
}

const ringVariants = {
  rest: { pathLength: 0 },
  hover: { pathLength: 1 },
};

const AlertToastDemo = ({
  title = "Payment successful",
  description = "Your transaction has been processed and a receipt was sent to your email.",
}: AlertToastDemoProps) => {
  const [visible, setVisible] = useState(true);

  return (
    <div className="w-full max-w-md">
      <AnimatePresence>
        {visible && (
          <motion.div
            layout
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: -6,
              scale: 0.98,
              filter: "blur(4px)",
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 34,
              mass: 0.7,
            }}
          >
            <Alert className="relative flex items-start gap-3 overflow-hidden rounded-xl border-border/60 bg-card py-3.5 pr-10 pl-4 before:absolute before:inset-y-0 before:left-0 before:w-0.75 before:rounded-l-xl before:bg-teal-400">
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 22,
                  delay: 0.08,
                }}
                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-teal-400/10"
              >
                <CheckCircle2Icon className="size-4! text-teal-400" />
              </motion.div>

              <div className="flex min-w-0 flex-1 flex-col gap-1 pt-0.5">
                <AlertTitle className="text-sm font-medium tracking-tight">
                  {title}
                </AlertTitle>
                <AlertDescription className="text-xs text-muted-foreground">
                  {description}
                </AlertDescription>
              </div>

              <MotionButton
                variant="ghost"
                size="icon-xs"
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.92 }}
                animate="rest"
                onClick={() => setVisible(false)}
                className="absolute top-3 right-3 grid shrink-0 cursor-pointer place-items-center rounded-full border-0 text-muted-foreground/60 hover:text-foreground"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="absolute inset-0 size-6 -rotate-90"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    fill="none"
                    strokeWidth="1.5"
                    className="stroke-muted-foreground/15"
                  />
                  <motion.circle
                    cx="12"
                    cy="12"
                    r="9"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="stroke-teal-400"
                    variants={ringVariants}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />
                </svg>
                <XIcon className="size-3.5" />
                <span className="sr-only">Dismiss</span>
              </MotionButton>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AlertToastDemo;
