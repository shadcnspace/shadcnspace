"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check, Eye, EyeClosed } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AnimatedCheckmarkCircleProps = {
  progress: number;
};

type AnimatedFormProps = {
  className?: string;
};

// const variables
const CIRCLE_RADIUS = 7;
const CIRCLE_LENGTH = 2 * Math.PI * CIRCLE_RADIUS;

// regex constants
const USERNAME_REGEX = /^[a-zA-Z0-9_]*$/;
const NUMBER_REGEX = /\d/;
const UPPERCASE_REGEX = /[A-Z]/;
const SPECIAL_CHAR_REGEX = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

const getStrokeColorClass = (p: number) => {
  if (p <= 0) return "stroke-transparent";
  if (p <= 0.35) return "stroke-red-500";
  if (p <= 0.7) return "stroke-orange-500";
  return "stroke-teal-400";
};

// animated checkmark circle component
export const AnimatedCheckmarkCircle = ({
  progress,
}: AnimatedCheckmarkCircleProps) => {
  const isComplete = progress >= 1;

  return (
    <div className="relative flex items-center justify-center w-5 h-5 select-none">
      <svg width="20" height="20" className="-rotate-90">
        <circle
          cx="10"
          cy="10"
          r={CIRCLE_RADIUS}
          className="stroke-muted-foreground/20"
          strokeWidth="1.5"
          fill="transparent"
        />
        <motion.circle
          cx="10"
          cy="10"
          r={CIRCLE_RADIUS}
          className={cn(
            "transition-colors duration-300",
            getStrokeColorClass(progress),
          )}
          strokeWidth="1.5"
          fill="transparent"
          strokeDasharray={CIRCLE_LENGTH}
          initial={{ strokeDashoffset: CIRCLE_LENGTH }}
          animate={{
            strokeDashoffset: CIRCLE_LENGTH - progress * CIRCLE_LENGTH,
          }}
          transition={{
            duration: 0.35,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="10"
          cy="10"
          r={CIRCLE_RADIUS}
          className="fill-teal-400"
          style={{ transformOrigin: "center" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isComplete ? 1 : 0,
            opacity: isComplete ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: isComplete ? 0.15 : 0,
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isComplete ? 1 : 0,
            opacity: isComplete ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 15,
            delay: isComplete ? 0.28 : 0,
          }}
        >
          <Check className="text-white size-3" strokeWidth={3} />
        </motion.div>
      </div>
    </div>
  );
};

// dry input field component with validation checkmark
const ValidationInputField = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  progress,
  helperText,
  rightElement,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  progress: number;
  helperText?: string;
  rightElement?: React.ReactNode;
}) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-transparent pr-16 focus-visible:ring-1"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
          {rightElement}
          <AnimatedCheckmarkCircle progress={progress} />
        </div>
      </div>
      {helperText && (
        <p className="text-xs text-muted-foreground px-0.5">{helperText}</p>
      )}
    </div>
  );
};

// input component with animated checkmark
const InputWithAnimatedCheckmark = ({ className }: AnimatedFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Calculate username progress based on length up to 3 (if characters are valid)
  const isUsernameCharsValid = USERNAME_REGEX.test(username);
  const usernameProgress = isUsernameCharsValid
    ? Math.min(username.length / 3, 1.0)
    : 0.0;

  // Password validation checks
  const validations = [
    { text: "At least 8 characters", valid: password.length >= 8 },
    { text: "Contains a number", valid: NUMBER_REGEX.test(password) },
    { text: "Contains uppercase letter", valid: UPPERCASE_REGEX.test(password) },
    {
      text: "Contains special character",
      valid: SPECIAL_CHAR_REGEX.test(password),
    },
  ];

  const satisfiedCount = validations.filter((v) => v.valid).length;
  const passwordProgress = satisfiedCount / validations.length;

  return (
    <div className={cn("w-full max-w-sm space-y-4", className)}>
      <div className="space-y-4">
        {/* Username Field */}
        <ValidationInputField
          id="username-input"
          label="Username"
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={setUsername}
          progress={usernameProgress}
          helperText="Min. 3 characters, alphanumeric & underscores"
        />

        {/* Password Field */}
        <ValidationInputField
          id="password-input"
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          value={password}
          onChange={setPassword}
          progress={passwordProgress}
          rightElement={
            <Button
              className="h-7 w-7 text-muted-foreground hover:text-foreground cursor-pointer hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
              size="icon"
              type="button"
              variant="ghost"
            >
              {showPassword ? (
                <Eye className="h-3.5 w-3.5" />
              ) : (
                <EyeClosed className="h-3.5 w-3.5" />
              )}
            </Button>
          }
        />

        {/* Real-time Checklist */}
        <div className="space-y-2 pt-1">
          <span className="text-xs font-medium text-muted-foreground">
            Password must contain:
          </span>
          <div className="space-y-1.5">
            {validations.map((validation, index) => (
              <div
                className={cn(
                  "flex items-center gap-2 text-sm transition-colors duration-200",
                  validation.valid
                    ? "text-teal-400 font-medium"
                    : "text-muted-foreground",
                )}
                key={index}
              >
                <div className="flex items-center justify-center w-3.5 h-3.5">
                  {validation.valid ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center justify-center w-3 h-3 rounded-full bg-teal-400 text-white"
                    >
                      <Check className="size-2.5 shrink-0" strokeWidth={3} />
                    </motion.div>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                  )}
                </div>
                <span className="text-sm">{validation.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputWithAnimatedCheckmark;
