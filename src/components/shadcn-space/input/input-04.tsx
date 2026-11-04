"use client";

import { CheckCircle2, EyeClosed, X, Eye } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const title = "Password Validation";

const InputRealTimeValidationDemo = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validations = [
    { text: "At least 8 characters", valid: password.length >= 8 },
    { text: "Contains a number", valid: /\d/.test(password) },
    { text: "Contains uppercase letter", valid: /[A-Z]/.test(password) },
    { text: "Contains special character", valid: /[!@#$%^&*]/.test(password) },
  ];

  const strength = validations.filter((v) => v.valid).length;

  const getStrengthColor = (score: number) => {
    if (score === 0) return "bg-muted";
    if (score <= 1) return "bg-red-500";
    if (score <= 2) return "bg-orange-500";
    if (score <= 3) return "bg-teal-400";
    return "bg-teal-500";
  };

  const getStrengthText = (score: number) => {
    if (score === 0) return "";
    if (score <= 1) return "Weak";
    if (score <= 2) return "Moderate";
    if (score <= 3) return "Strong";
    return "Very Strong";
  };

  const getStrengthTextColor = (score: number) => {
    if (score === 0) return "text-muted-foreground";
    if (score <= 1) return "text-red-500";
    if (score <= 2) return "text-orange-500";
    if (score <= 3) return "text-teal-400";
    return "text-teal-500";
  };

  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="password-realtime">Password</Label>
        <div className="relative">
          <Input
            className="bg-transparent"
            id="password-realtime"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            type={showPassword ? "text" : "password"}
            value={password}
          />
          <Button
            className="absolute top-0 right-0 h-full px-3 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
            size="icon"
            type="button"
            variant="ghost"
          >
            {showPassword ? (
              <Eye className="h-4 w-4 text-muted-foreground" />
            ) : (
              <EyeClosed className="h-4 w-4 text-muted-foreground" />
            )}
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <div className="h-1 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className={`h-full transition-all duration-500 ease-out ${getStrengthColor(
              strength
            )}`}
            style={{ width: `${(strength / 4) * 100}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-xs font-medium">
          <span className="text-muted-foreground">Password must contain</span>
          <span className={getStrengthTextColor(strength)}>
            {getStrengthText(strength)}
          </span>
        </div>
      </div>

      <div className="space-y-1.5 pt-1">
        {validations.map((validation, index) => (
          <div
            className={`flex items-center gap-2 text-sm transition-colors duration-200 ${
              validation.valid
                ? "text-teal-400 dark:text-teal-400"
                : "text-muted-foreground"
            }`}
            key={index}
          >
            {validation.valid ? (
              <CheckCircle2 className="h-3.5 w-3.5" />
            ) : (
              <X className="h-3.5 w-3.5" />
            )}
            <span className="text-[13px]">{validation.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputRealTimeValidationDemo;
