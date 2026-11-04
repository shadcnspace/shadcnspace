"use client";

import { useState, useEffect, useRef } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const InputGroupDemo = () => {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved">("idle");
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const idleTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setStatus("saving");
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      setStatus("saved");
      idleTimeoutRef.current = setTimeout(() => {
        setStatus("idle");
      }, 2000);
    }, 1000);
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <InputGroup className="h-10 rounded-xl px-1">
        <InputGroupInput
          placeholder="Type message to save..."
          value={value}
          onChange={handleChange}
        />
        <InputGroupAddon align="inline-end" className="pr-3">
          <AnimatePresence mode="wait">
            {status === "saving" && (
              <motion.div
                key="saving"
                initial={{ opacity: 0, scale: 0.8, y: 4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -4 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium"
              >
                <Loader2 className="size-3.5 animate-spin text-primary" />
                <span>Saving</span>
              </motion.div>
            )}
            {status === "saved" && (
              <motion.div
                key="saved"
                initial={{ opacity: 0, scale: 0.8, y: 4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -4 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-1.5 text-xs text-teal-400 font-medium"
              >
                <CheckCircle2 className="size-3.5" />
                <span>Saved</span>
              </motion.div>
            )}
          </AnimatePresence>
        </InputGroupAddon>
      </InputGroup>
      <p className="text-xs text-muted-foreground px-1">
        Typing triggers{" "}
        <span className="font-semibold text-foreground">saving</span> state.
        Stopping for 1s shows{" "}
        <span className="font-semibold text-teal-400">
          saved
        </span>
        .
      </p>
    </div>
  );
};

export default InputGroupDemo;
