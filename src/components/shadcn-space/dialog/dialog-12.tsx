"use client";

import { useEffect, useId, useRef, useState } from "react";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { CircleCheckIcon, MailIcon } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { Spinner } from "@/components/ui/spinner";

const DEMO_CODE = "123456";
const RESEND_SECONDS = 30;
const MAX_ATTEMPTS = 3;

type Status = "idle" | "verifying" | "error" | "verified";

export default function Dialog12() {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [attemptsLeft, setAttemptsLeft] = useState(MAX_ATTEMPTS);
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
  const [resent, setResent] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const statusId = useId();

  useEffect(() => {
    if (!open || secondsLeft === 0 || status === "verified") return;
    const timeout = setTimeout(() => setSecondsLeft((seconds) => seconds - 1), 1000);
    return () => clearTimeout(timeout);
  }, [open, secondsLeft, status]);

  useEffect(() => {
    if (status !== "verifying") return;
    const timeout = setTimeout(() => {
      if (code === DEMO_CODE) {
        setStatus("verified");
        return;
      }
      setStatus("error");
      setAttemptsLeft((attempts) => attempts - 1);
      setCode("");
      requestAnimationFrame(() => inputRef.current?.focus());
    }, 700);
    return () => clearTimeout(timeout);
  }, [status, code]);

  const reset = () => {
    setCode("");
    setStatus("idle");
    setAttemptsLeft(MAX_ATTEMPTS);
    setSecondsLeft(RESEND_SECONDS);
    setResent(false);
  };

  const handleOpenChange = (next: boolean) => {
    if (status === "verifying") return;
    if (next) reset();
    setOpen(next);
  };

  const handleResend = () => {
    setCode("");
    setStatus("idle");
    setAttemptsLeft(MAX_ATTEMPTS);
    setSecondsLeft(RESEND_SECONDS);
    setResent(true);
  };

  const isLocked = attemptsLeft === 0;
  const isError = status === "error";

  const statusMessage =
    status === "verifying"
      ? "Verifying code..."
      : isLocked
        ? "Too many attempts. Request a new code to try again."
        : isError
          ? `That code is incorrect. ${attemptsLeft} ${attemptsLeft === 1 ? "attempt" : "attempts"} left.`
          : resent
            ? "We sent you a new code."
            : `Demo code: ${DEMO_CODE}`;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger render={<Button variant="outline" className="cursor-pointer" />}>
        Verify email
      </DialogTrigger>
      <DialogContent className="gap-6 p-6 sm:max-w-sm">
        {status === "verified" ? (
          <div className="flex flex-col items-center gap-4 py-2 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-teal-400/15">
              <CircleCheckIcon aria-hidden="true" className="size-6 text-teal-400" />
            </span>
            <DialogHeader className="items-center">
              <DialogTitle className="text-xl font-semibold">Email verified</DialogTitle>
              <DialogDescription>Your account is ready. You can start building now.</DialogDescription>
            </DialogHeader>
            <DialogClose render={<Button className="w-full cursor-pointer" />}>Continue</DialogClose>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="flex size-12 items-center justify-center rounded-full border border-border bg-muted">
                <MailIcon aria-hidden="true" className="size-5 text-blue-500" />
              </span>
              <DialogHeader className="items-center">
                <DialogTitle className="text-xl font-semibold">Check your email</DialogTitle>
                <DialogDescription>
                  Enter the 6-digit code we sent to{" "}
                  <span className="font-medium text-foreground">j•••@example.com</span>
                </DialogDescription>
              </DialogHeader>
            </div>

            <div className="flex flex-col items-center gap-3">
              <InputOTP
                ref={inputRef}
                maxLength={6}
                pattern={REGEXP_ONLY_DIGITS}
                value={code}
                onChange={(value) => {
                  setCode(value);
                  if (isError) setStatus("idle");
                }}
                onComplete={() => setStatus("verifying")}
                disabled={status === "verifying" || isLocked}
                autoFocus
                aria-label="Verification code"
                aria-describedby={statusId}
              >
                <InputOTPGroup>
                  {[0, 1, 2].map((index) => (
                    <InputOTPSlot key={index} index={index} aria-invalid={isError || undefined} className="size-10 text-base" />
                  ))}
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  {[3, 4, 5].map((index) => (
                    <InputOTPSlot key={index} index={index} aria-invalid={isError || undefined} className="size-10 text-base" />
                  ))}
                </InputOTPGroup>
              </InputOTP>

              <p
                id={statusId}
                aria-live="polite"
                className={
                  isError || isLocked
                    ? "flex items-center gap-1.5 text-xs text-destructive"
                    : "flex items-center gap-1.5 text-xs text-muted-foreground"
                }
              >
                {status === "verifying" && <Spinner aria-hidden="true" className="size-3.5" />}
                {statusMessage}
              </p>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Didn&apos;t get a code?{" "}
              {secondsLeft > 0 && !isLocked ? (
                <span className="tabular-nums">Resend in {secondsLeft}s</span>
              ) : (
                <button
                  type="button"
                  onClick={handleResend}
                  className="cursor-pointer rounded-sm font-medium text-foreground underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring/50"
                >
                  Resend code
                </button>
              )}
            </p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
