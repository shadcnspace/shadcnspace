"use client";

import { Fragment, useState, type ComponentProps } from "react";
import { AlertCircle, Check, PartyPopper } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const steps = ["Shipping", "Payment", "Review"] as const;

type Form = { name: string; address: string; card: string; expiry: string };
type Field = keyof Form;

const fieldsByStep: Field[][] = [["name", "address"], ["card", "expiry"], []];

const validators: Record<Field, (value: string) => string | null> = {
  name: (value) => (value.trim().length < 2 ? "Enter your full name" : null),
  address: (value) => (value.trim().length < 5 ? "Enter a street address" : null),
  card: (value) => (value.replace(/\s/g, "").length !== 16 ? "Card number must be 16 digits" : null),
  expiry: (value) => (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(value) ? "Use MM/YY" : null),
};

const formatCard = (value: string) =>
  value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();

const formatExpiry = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  return digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
};

export default function StepperDemo() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>({ name: "", address: "", card: "", expiry: "" });
  const [attempted, setAttempted] = useState<boolean[]>([false, false, false]);
  const [placed, setPlaced] = useState(false);

  const errorsFor = (index: number) =>
    fieldsByStep[index]
      .map((field) => [field, validators[field](form[field])] as const)
      .filter(([, error]) => error);

  const stepHasError = (index: number) => attempted[index] && errorsFor(index).length > 0;
  const fieldError = (field: Field) => {
    const index = fieldsByStep.findIndex((fields) => fields.includes(field));
    return attempted[index] ? validators[field](form[field]) : null;
  };

  const next = () => {
    setAttempted((current) => current.map((value, index) => (index === step ? true : value)));
    if (errorsFor(step).length === 0) setStep(step + 1);
  };

  const update = (field: Field, value: string) => setForm((current) => ({ ...current, [field]: value }));

  if (placed) {
    return (
      <div className="flex w-full max-w-md flex-col items-center gap-3 rounded-lg border border-border bg-background p-8 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-teal-400/15">
          <PartyPopper className="size-6 text-teal-400" />
        </span>
        <p className="text-base font-medium text-foreground">Order placed</p>
        <p className="text-sm text-muted-foreground">A confirmation was sent to your email.</p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setPlaced(false);
            setStep(0);
            setAttempted([false, false, false]);
            setForm({ name: "", address: "", card: "", expiry: "" });
          }}
        >
          Start again
        </Button>
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-6 rounded-lg border border-border bg-background p-5">
      <ol className="flex items-center" aria-label="Checkout progress">
        {steps.map((label, index) => {
          const complete = index < step;
          const active = index === step;
          const error = stepHasError(index);
          return (
            <Fragment key={label}>
              <li className="flex items-center gap-2" aria-current={active ? "step" : undefined}>
                <span
                  className={cn(
                    "flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-medium",
                    error && "border-orange-400 bg-orange-400 text-gray-950",
                    !error && complete && "border-primary bg-primary text-primary-foreground",
                    !error && active && "border-primary text-foreground",
                    !error && !complete && !active && "border-border text-muted-foreground",
                  )}
                >
                  {error ? <AlertCircle className="size-3.5" /> : complete ? <Check className="size-3.5" /> : index + 1}
                </span>
                <span
                  className={cn(
                    "text-sm",
                    active ? "font-medium text-foreground" : "text-muted-foreground",
                    index !== step && "hidden sm:inline",
                  )}
                >
                  {label}
                </span>
              </li>
              {index < steps.length - 1 && (
                <li aria-hidden="true" className={cn("mx-3 h-px flex-1", complete ? "bg-primary" : "bg-border")} />
              )}
            </Fragment>
          );
        })}
      </ol>

      <div className="flex min-h-40 flex-col gap-4">
        {step === 0 && (
          <>
            <FormField id="name" label="Full name" value={form.name} error={fieldError("name")} onChange={(value) => update("name", value)} autoComplete="name" />
            <FormField id="address" label="Street address" value={form.address} error={fieldError("address")} onChange={(value) => update("address", value)} autoComplete="street-address" />
          </>
        )}
        {step === 1 && (
          <>
            <FormField id="card" label="Card number" value={form.card} error={fieldError("card")} onChange={(value) => update("card", formatCard(value))} inputMode="numeric" autoComplete="cc-number" placeholder="4242 4242 4242 4242" />
            <FormField id="expiry" label="Expiry" value={form.expiry} error={fieldError("expiry")} onChange={(value) => update("expiry", formatExpiry(value))} inputMode="numeric" autoComplete="cc-exp" placeholder="MM/YY" />
          </>
        )}
        {step === 2 && (
          <dl className="flex flex-col gap-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Ship to</dt>
              <dd className="text-right text-foreground">
                {form.name}
                <br />
                {form.address}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Card</dt>
              <dd className="text-foreground tabular-nums">ending in {form.card.slice(-4)}</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-border pt-3 font-medium">
              <dt className="text-foreground">Total</dt>
              <dd className="text-foreground tabular-nums">$128.00</dd>
            </div>
          </dl>
        )}
      </div>

      <div className="flex justify-between gap-2">
        <Button variant="outline" onClick={() => setStep(step - 1)} disabled={step === 0}>
          Back
        </Button>
        {step < steps.length - 1 ? (
          <Button onClick={next}>Continue</Button>
        ) : (
          <Button onClick={() => setPlaced(true)}>Place order</Button>
        )}
      </div>
    </div>
  );
}

function FormField({
  id,
  label,
  value,
  error,
  onChange,
  ...props
}: {
  id: string;
  label: string;
  value: string;
  error: string | null;
  onChange: (value: string) => void;
} & Omit<ComponentProps<typeof Input>, "onChange" | "value">) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={!!error || undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
