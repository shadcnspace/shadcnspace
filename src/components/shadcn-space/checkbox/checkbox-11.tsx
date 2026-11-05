"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const CheckboxDemo = () => {
  const [terms, setTerms] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [done, setDone] = useState(false);

  const showError = submitted && !terms;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    if (terms) setDone(true);
  };

  if (done) {
    return (
      <div className="flex w-full max-w-sm flex-col items-center gap-3 rounded-lg border border-border bg-background p-6 text-center">
        <span className="flex size-10 items-center justify-center rounded-full bg-teal-400/15">
          <Check className="size-5 text-teal-400" />
        </span>
        <p className="text-sm font-medium text-foreground">Account created</p>
        <p className="text-xs text-muted-foreground">
          {marketing ? "We will send you product updates." : "You will not receive marketing emails."}
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setDone(false);
            setSubmitted(false);
            setTerms(false);
            setMarketing(false);
          }}
        >
          Reset
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex w-full max-w-sm flex-col gap-4 rounded-lg border border-border bg-background p-5">
      <div className="flex flex-col gap-1.5">
        <div className="flex items-start gap-3">
          <Checkbox
            id="terms"
            checked={terms}
            onCheckedChange={setTerms}
            aria-invalid={showError || undefined}
            aria-describedby={showError ? "terms-error" : undefined}
            aria-required="true"
            className="mt-0.5"
          />
          <label htmlFor="terms" className="text-sm leading-snug text-foreground">
            I agree to the{" "}
            <a href="#" className="font-medium underline underline-offset-4 transition-colors hover:text-muted-foreground">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="font-medium underline underline-offset-4 transition-colors hover:text-muted-foreground">
              Privacy Policy
            </a>
            <span className="text-destructive" aria-hidden="true"> *</span>
          </label>
        </div>
        {showError && (
          <p id="terms-error" className="flex items-center gap-1.5 pl-7 text-xs text-destructive">
            <AlertCircle className="size-3" aria-hidden="true" />
            You need to accept the terms to continue.
          </p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <Checkbox id="marketing" checked={marketing} onCheckedChange={setMarketing} className="mt-0.5" />
        <div className="flex flex-col gap-1">
          <label htmlFor="marketing" className="text-sm leading-snug text-foreground">
            Send me product updates
          </label>
          <p className="text-xs text-muted-foreground">One email a month. Unsubscribe any time.</p>
        </div>
      </div>

      <Button type="submit" className="w-full">
        Create account
      </Button>
    </form>
  );
};

export default CheckboxDemo;
