"use client";

import { useRef, useState, type FormEvent } from "react";
import { OctagonAlert } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Field = "name" | "email" | "company";

const labels: Record<Field, string> = { name: "Full name", email: "Work email", company: "Company" };

const validate = (values: Record<Field, string>) => {
  const errors: Partial<Record<Field, string>> = {};
  if (!values.name.trim()) errors.name = "Enter your full name";
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Enter a valid email address";
  if (!values.company.trim()) errors.company = "Enter your company name";
  return errors;
};

const AlertDemo = () => {
  const [values, setValues] = useState<Record<Field, string>>({ name: "", email: "jane@", company: "" });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sent, setSent] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);

  const errorList = Object.entries(errors) as [Field, string][];

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const next = validate(values);
    setErrors(next);
    setSent(Object.keys(next).length === 0);
    // Move focus to the summary so screen readers announce every error at once.
    if (Object.keys(next).length) requestAnimationFrame(() => summaryRef.current?.focus());
  };

  const update = (field: Field, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: validate({ ...values, [field]: value })[field] }));
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex w-full max-w-sm flex-col gap-4">
      {errorList.some(([, message]) => message) && (
        <Alert ref={summaryRef} tabIndex={-1} variant="destructive" className="border-destructive/40 outline-none focus-visible:ring-2 focus-visible:ring-destructive/40">
          <OctagonAlert />
          <AlertTitle>
            Fix {errorList.filter(([, message]) => message).length} errors to continue
          </AlertTitle>
          <AlertDescription>
            <ul className="mt-1 flex list-disc flex-col gap-0.5 pl-4">
              {errorList
                .filter(([, message]) => message)
                .map(([field, message]) => (
                  <li key={field}>
                    <a
                      href={`#summary-${field}`}
                      onClick={(event) => {
                        event.preventDefault();
                        document.getElementById(`summary-${field}`)?.focus();
                      }}
                    >
                      {message}
                    </a>
                  </li>
                ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      {sent && (
        <p role="status" className="rounded-lg border border-teal-400/40 bg-teal-400/10 px-3 py-2 text-sm text-foreground">
          Thanks, we will be in touch.
        </p>
      )}

      {(Object.keys(labels) as Field[]).map((field) => (
        <div key={field} className="flex flex-col gap-2">
          <Label htmlFor={`summary-${field}`}>{labels[field]}</Label>
          <Input
            id={`summary-${field}`}
            type={field === "email" ? "email" : "text"}
            value={values[field]}
            onChange={(event) => update(field, event.target.value)}
            aria-invalid={!!errors[field] || undefined}
            aria-describedby={errors[field] ? `summary-${field}-error` : undefined}
          />
          {errors[field] && (
            <p id={`summary-${field}-error`} className="text-xs text-destructive">
              {errors[field]}
            </p>
          )}
        </div>
      ))}

      <Button type="submit">Request demo</Button>
    </form>
  );
};

export default AlertDemo;
