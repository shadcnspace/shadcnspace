"use client";

import { useEffect, useId, useState, type SVGProps } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
const GoogleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M5.57374 0.526248C3.9751 1.08083 2.59642 2.13346 1.64023 3.5295C0.684041 4.92555 0.200732 6.59143 0.261296 8.28246C0.32186 9.97348 0.923104 11.6005 1.97671 12.9246C3.03033 14.2487 4.48077 15.1999 6.11499 15.6388C7.4399 15.9806 8.82801 15.9956 10.16 15.6825C11.3666 15.4115 12.4822 14.8317 13.3975 14C14.3501 13.1079 15.0415 11.9731 15.3975 10.7175C15.7844 9.35209 15.8532 7.91616 15.5987 6.52H8.15874V9.60625H12.4675C12.3814 10.0985 12.1968 10.5683 11.9249 10.9875C11.653 11.4068 11.2993 11.7669 10.885 12.0462C10.3588 12.3943 9.76574 12.6285 9.14374 12.7338C8.51992 12.8497 7.88006 12.8497 7.25624 12.7338C6.62398 12.603 6.02587 12.3421 5.49999 11.9675C4.65518 11.3695 4.02084 10.5199 3.68749 9.54C3.34851 8.54174 3.34851 7.45951 3.68749 6.46125C3.92478 5.76152 4.31704 5.12442 4.83499 4.5975C5.42773 3.98343 6.17816 3.54449 7.00394 3.32884C7.82972 3.11319 8.69894 3.12916 9.51624 3.375C10.1547 3.57099 10.7386 3.91342 11.2212 4.375C11.7071 3.89166 12.1921 3.40708 12.6762 2.92125C12.9262 2.66 13.1987 2.41125 13.445 2.14375C12.7082 1.45809 11.8433 0.924569 10.9 0.573748C9.18212 -0.0500151 7.30247 -0.0667781 5.57374 0.526248Z"
      fill="white"
    />
    <path
      d="M5.57372 0.526245C7.3023 -0.067184 9.18196 -0.0508623 10.9 0.572495C11.8435 0.925699 12.708 1.46179 13.4437 2.14999C13.1937 2.41749 12.93 2.66749 12.675 2.92749C12.19 3.41166 11.7054 3.89416 11.2212 4.37499C10.7385 3.91342 10.1547 3.57098 9.51622 3.37499C8.69919 3.1283 7.82999 3.1114 7.00399 3.32617C6.178 3.54094 5.42711 3.97907 4.83372 4.59249C4.31576 5.11941 3.9235 5.75652 3.68622 6.45624L1.09497 4.44999C2.02248 2.6107 3.62841 1.20377 5.57372 0.526245Z"
      fill="#E33629"
    />
    <path
      d="M0.40756 6.43751C0.546836 5.74725 0.778064 5.0788 1.09506 4.45001L3.68631 6.46126C3.34733 7.45952 3.34733 8.54175 3.68631 9.54001C2.82298 10.2067 1.95923 10.8767 1.09506 11.55C0.301498 9.97041 0.0594757 8.17064 0.40756 6.43751Z"
      fill="#F8BD00"
    />
    <path
      d="M8.15876 6.51874H15.5988C15.8533 7.9149 15.7844 9.35082 15.3975 10.7162C15.0416 11.9718 14.3501 13.1067 13.3975 13.9987C12.5613 13.3462 11.7213 12.6987 10.885 12.0462C11.2996 11.7666 11.6535 11.4061 11.9254 10.9864C12.1973 10.5667 12.3817 10.0964 12.4675 9.60374H8.15876C8.15751 8.57624 8.15876 7.54749 8.15876 6.51874Z"
      fill="#587DBD"
    />
    <path
      d="M1.09375 11.55C1.95792 10.8833 2.82167 10.2133 3.685 9.54001C4.01901 10.5203 4.65426 11.3699 5.5 11.9675C6.02751 12.3403 6.62691 12.5992 7.26 12.7275C7.88382 12.8435 8.52368 12.8435 9.1475 12.7275C9.7695 12.6222 10.3626 12.388 10.8888 12.04C11.725 12.6925 12.565 13.34 13.4013 13.9925C12.4861 14.8247 11.3705 15.4049 10.1638 15.6763C8.83176 15.9894 7.44366 15.9744 6.11875 15.6325C5.07088 15.3527 4.09209 14.8595 3.24375 14.1838C2.34583 13.4709 1.61244 12.5725 1.09375 11.55Z"
      fill="#319F43"
    />
  </svg>
);

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path d="M8 0.000502537C3.5805 0.000502537 0 3.584 0 8.0005C0 11.537 2.292 14.5345 5.4685 15.592C5.87 15.6675 6.015 15.42 6.015 15.206C6.015 15.016 6.0105 14.5135 6.0075 13.8465C3.781 14.3285 3.312 12.771 3.312 12.771C2.9475 11.849 2.4215 11.6015 2.4215 11.6015C1.6975 11.107 2.479 11.1175 2.479 11.1175C3.281 11.172 3.703 11.94 3.703 11.94C4.4165 13.164 5.575 12.81 6.0335 12.604C6.1035 12.0885 6.312 11.734 6.539 11.5365C4.763 11.336 2.8955 10.6485 2.8955 7.583C2.8955 6.7075 3.2055 5.9945 3.718 5.4345C3.6295 5.234 3.3585 4.419 3.7885 3.317C3.7885 3.317 4.458 3.1035 5.9885 4.1375C6.64041 3.95998 7.31285 3.86903 7.9885 3.867C8.6685 3.8715 9.348 3.9605 9.9885 4.1375C11.51 3.1035 12.179 3.317 12.179 3.317C12.6085 4.419 12.3375 5.2335 12.2595 5.4345C12.767 5.9945 13.077 6.708 13.077 7.583C13.077 10.6555 11.207 11.333 9.429 11.5285C9.707 11.768 9.9675 12.2605 9.9675 13.008C9.9675 14.078 9.9575 14.94 9.9575 15.2005C9.9575 15.4085 10.0975 15.6585 10.5095 15.578C13.7095 14.5315 15.999 11.5315 15.999 8C15.999 3.5835 12.4185 2.54313e-06 7.999 2.54313e-06L8 0.000502537Z" />
  </svg>
);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRules = [
  (value: string) => value.length >= 8,
  (value: string) => /\d/.test(value),
  (value: string) => /[A-Z]/.test(value),
  (value: string) => /[^A-Za-z0-9]/.test(value),
];

const strengthLevels = [
  { label: "Too weak", color: "bg-border" },
  { label: "Weak", color: "bg-orange-400" },
  { label: "Fair", color: "bg-amber-300" },
  { label: "Good", color: "bg-sky-400" },
  { label: "Strong", color: "bg-teal-400" },
];

export default function Dialog11() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const id = useId();

  const score = passwordRules.filter((rule) => rule(password)).length;
  const strength = strengthLevels[score];

  const errors = {
    name: !name.trim() ? "Enter your name." : "",
    email: !email ? "Enter your email." : !emailPattern.test(email) ? "Enter a valid email." : "",
    password: password.length < 8 ? "Use at least 8 characters." : "",
    terms: !agreed ? "You need to accept the terms to sign up." : "",
  };
  const hasErrors = Object.values(errors).some(Boolean);
  const show = (field: keyof typeof errors) => (submitted ? errors[field] : "");

  useEffect(() => {
    if (!loading) return;
    const timeout = setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 900);
    return () => clearTimeout(timeout);
  }, [loading]);

  const handleOpenChange = (next: boolean) => {
    if (loading) return;
    if (next) {
      setSubmitted(false);
      setPassword("");
      setShowPassword(false);
    }
    setOpen(next);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    if (!hasErrors) setLoading(true);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger render={<Button className="cursor-pointer" />}>Sign up</DialogTrigger>
      <DialogContent className="gap-6 p-6 sm:max-w-sm">
        <DialogHeader className="items-center text-center">
          <DialogTitle className="text-xl font-semibold">Sign up</DialogTitle>
          <DialogDescription>Start building in less than a minute.</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-2">
          <Button type="button" variant="outline" className="cursor-pointer">
            <GoogleIcon aria-hidden="true" data-icon="inline-start" />
            Google
          </Button>
          <Button type="button" variant="outline" className="cursor-pointer">
            <GithubIcon aria-hidden="true" data-icon="inline-start" />
            GitHub
          </Button>
        </div>

        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
          or sign up with email
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
        </div>

        <form onSubmit={handleSubmit} noValidate className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor={`${id}-name`}>Full name</Label>
            <Input
              id={`${id}-name`}
              placeholder="Jane Cooper"
              value={name}
              onChange={(event) => setName(event.target.value)}
              aria-invalid={!!show("name") || undefined}
              aria-describedby={show("name") ? `${id}-name-error` : undefined}
              autoComplete="name"
            />
            {show("name") && (
              <p id={`${id}-name-error`} className="text-xs text-destructive">
                {errors.name}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor={`${id}-email`}>Email</Label>
            <Input
              id={`${id}-email`}
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-invalid={!!show("email") || undefined}
              aria-describedby={show("email") ? `${id}-email-error` : undefined}
              autoComplete="email"
            />
            {show("email") && (
              <p id={`${id}-email-error`} className="text-xs text-destructive">
                {errors.email}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor={`${id}-password`}>Password</Label>
            <div className="relative">
              <Input
                id={`${id}-password`}
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                aria-invalid={!!show("password") || undefined}
                aria-describedby={`${id}-password-hint`}
                autoComplete="new-password"
                className="pr-9"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
                className="absolute inset-y-0 right-0 cursor-pointer rounded-l-none text-muted-foreground hover:bg-transparent"
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </Button>
            </div>
            <div aria-hidden="true" className="flex gap-1">
              {[1, 2, 3, 4].map((segment) => (
                <span
                  key={segment}
                  className={cn(
                    "h-1 flex-1 rounded-full bg-border transition-colors duration-300 motion-reduce:transition-none",
                    score >= segment && strength.color,
                  )}
                />
              ))}
            </div>
            <p
              id={`${id}-password-hint`}
              className={cn("text-xs", show("password") ? "text-destructive" : "text-muted-foreground")}
            >
              {show("password")
                ? errors.password
                : password
                  ? `${strength.label}. Use 8+ characters with a number, uppercase letter, and symbol.`
                  : "Use 8+ characters with a number, uppercase letter, and symbol."}
            </p>
          </div>

          <div className="grid gap-2">
            <div className="flex items-start gap-2">
              <Checkbox
                id={`${id}-terms`}
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked === true)}
                aria-invalid={!!show("terms") || undefined}
                aria-describedby={show("terms") ? `${id}-terms-error` : undefined}
                className="mt-0.5 cursor-pointer"
              />
              <Label htmlFor={`${id}-terms`} className="cursor-pointer font-normal leading-snug text-muted-foreground">
                <span>
                  I agree to the{" "}
                  <a href="#" className="font-medium text-foreground underline-offset-4 hover:underline">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className="font-medium text-foreground underline-offset-4 hover:underline">
                    Privacy Policy
                  </a>
                </span>
              </Label>
            </div>
            {show("terms") && (
              <p id={`${id}-terms-error`} className="text-xs text-destructive">
                {errors.terms}
              </p>
            )}
          </div>

          <Button type="submit" disabled={loading} className="w-full cursor-pointer">
            {loading && <Spinner data-icon="inline-start" />}
            {loading ? "Signing up..." : "Sign up"}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <a href="#" className="font-medium text-foreground underline-offset-4 hover:underline">
            Sign in
          </a>
        </p>
      </DialogContent>
    </Dialog>
  );
}
