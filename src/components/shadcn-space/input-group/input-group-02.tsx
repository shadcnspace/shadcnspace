"use client";

import { useMemo, useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Mail, ShieldCheck, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const InputGroupDemo = () => {
  const [value, setValue] = useState("");

  const status = useMemo<"empty" | "valid" | "invalid">(() => {
    if (value.trim() === "") return "empty";
    return EMAIL_REGEX.test(value) ? "valid" : "invalid";
  }, [value]);

  return (
    <div className="flex flex-col gap-2">
      <InputGroup
        className={cn(
          "rounded-xl",
          status === "valid" &&
            "border-teal-400 ring-3 ring-teal-400/20 dark:ring-teal-400/40",
        )}
      >
        <InputGroupAddon align="inline-start" className="pl-2">
          <AnimatePresence mode="wait" initial={false}>
            {status === "empty" && (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.6, rotate: 45 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="size-4 text-muted-foreground" />
              </motion.div>
            )}
            {status === "valid" && (
              <motion.div
                key="valid"
                initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.6, rotate: 45 }}
                transition={{ duration: 0.25, ease: "backOut" }}
              >
                <ShieldCheck className="size-4 text-teal-400" />
              </motion.div>
            )}
            {status === "invalid" && (
              <motion.div
                key="invalid"
                initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0, x: [0, -3, 3, -2, 2, 0] }}
                exit={{ opacity: 0, scale: 0.6, rotate: 45 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ShieldAlert className="size-4 text-red-500" />
              </motion.div>
            )}
          </AnimatePresence>
        </InputGroupAddon>
        <InputGroupInput
          type="email"
          placeholder="you@example.com"
          value={value}
          aria-invalid={status === "invalid"}
          onChange={(e) => setValue(e.target.value)}
        />
      </InputGroup>
      <p className="text-xs text-muted-foreground px-1">
        {status === "empty" && "Enter your email to see it validated live."}
        {status === "invalid" && (
          <span className="font-semibold text-red-500">
            That doesn&apos;t look like a valid email.
          </span>
        )}
      </p>
    </div>
  );
};

export default InputGroupDemo;
