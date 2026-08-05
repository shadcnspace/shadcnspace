"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const SignInFormDemo = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm rounded-xl border border-border p-6"
    >
      <FieldGroup>
        <Field data-invalid={!!error}>
          <FieldLabel htmlFor="signin-email">Email</FieldLabel>
          <Input
            id="signin-email"
            type="email"
            placeholder="you@example.com"
            value={email}
            aria-invalid={!!error}
            onChange={(event) => {
              setEmail(event.target.value);
              if (error) setError(null);
            }}
          />
          <FieldError errors={error ? [{ message: error }] : undefined} />
        </Field>
        <Field>
          <div className="flex items-center justify-between">
            <FieldLabel htmlFor="signin-password">Password</FieldLabel>
            <a
              href="#"
              className="text-muted-foreground text-sm underline-offset-4 hover:text-primary hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <Input id="signin-password" type="password" placeholder="••••••••" />
        </Field>
        <Field>
          <Button type="submit" className="hover:bg-primary/80 cursor-pointer">Sign in</Button>
          <FieldDescription className="text-center">
            Don&apos;t have an account? <a href="#">Sign up</a>
          </FieldDescription>
        </Field>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" className="flex-1 cursor-pointer">
            Google
          </Button>
          <Button type="button" variant="outline" className="flex-1 cursor-pointer">
            GitHub
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
};

export default SignInFormDemo;
