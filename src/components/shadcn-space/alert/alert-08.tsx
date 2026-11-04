"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { InfoIcon, XIcon } from "lucide-react";
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface AlertEvaporateDemoProps {
  title?: string;
  description?: string;
}

const VAPOR = [
  { left: "10%", size: 9, delay: 0, duration: 0.9, travel: -32 },
  { left: "26%", size: 6, delay: 0.05, duration: 1.05, travel: -46 },
  { left: "44%", size: 11, delay: 0.02, duration: 0.85, travel: -28 },
  { left: "60%", size: 7, delay: 0.09, duration: 1.1, travel: -50 },
  { left: "76%", size: 9, delay: 0.03, duration: 0.95, travel: -38 },
  { left: "90%", size: 6, delay: 0.07, duration: 1, travel: -42 },
];

const AlertEvaporateDemo = ({
  title = "New update available",
  description = "A new version of the app is ready to install. Restart to apply the update.",
}: AlertEvaporateDemoProps) => {
  const [visible, setVisible] = useState(true);

  return (
    <div className="w-full max-w-md">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 1.03,
              y: -8,
              filter: "blur(6px)",
              transition: { duration: 0.6, ease: "easeOut" },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 32 }}
            className="relative"
          >
            {VAPOR.map((dot, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                exit={{
                  opacity: [0, 0.8, 0],
                  y: dot.travel,
                  scale: [0.4, 1, 1.4],
                  filter: ["blur(0px)", "blur(1px)", "blur(3px)"],
                  transition: {
                    duration: dot.duration,
                    delay: dot.delay,
                    ease: "easeOut",
                  },
                }}
                className="pointer-events-none absolute bottom-2 rounded-full bg-blue-500/70"
                style={{
                  left: dot.left,
                  width: dot.size,
                  height: dot.size,
                }}
              />
            ))}

            <Alert className="relative flex items-start gap-3 overflow-hidden rounded-xl border-border/60 bg-card py-3.5 pr-10 pl-4">
              <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                <InfoIcon className="size-4! text-blue-500" />
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-1 pt-0.5">
                <AlertTitle className="text-sm font-medium tracking-tight">
                  {title}
                </AlertTitle>
                <AlertDescription className="text-xs text-muted-foreground">
                  {description}
                </AlertDescription>
              </div>

              <Button
                variant="ghost"
                size="icon-xs"
                onClick={() => setVisible(false)}
                className="absolute top-3 right-3 shrink-0 cursor-pointer rounded-full text-muted-foreground/60 hover:text-foreground"
              >
                <XIcon className="size-3.5" />
                <span className="sr-only">Dismiss</span>
              </Button>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AlertEvaporateDemo;
