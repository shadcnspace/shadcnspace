"use client";

import { BellRing, CircleCheck, Clock, Info, OctagonAlert, TriangleAlert, type LucideIcon } from "lucide-react";

import { toast } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Top right keeps toasts clear of chat widgets in the bottom corner.
const position = "top-right" as const;

type Tone = {
  icon: LucideIcon;
  iconColor: string;
  badge: string;
  border: string;
  button: string;
};

// Each type gets its own icon in a tinted circle, a matching toast border, and a matching button.
const tones = {
  default: {
    icon: BellRing,
    iconColor: "text-muted-foreground",
    badge: "bg-muted",
    border: "",
    button: "",
  },
  success: {
    icon: CircleCheck,
    iconColor: "text-teal-400",
    badge: "bg-teal-400/15",
    border: "border-teal-400/30",
    button: "border-teal-400/30 bg-teal-400/10 hover:bg-teal-400/20",
  },
  info: {
    icon: Info,
    iconColor: "text-sky-400",
    badge: "bg-sky-400/15",
    border: "border-sky-400/30",
    button: "border-sky-400/30 bg-sky-400/10 hover:bg-sky-400/20",
  },
  warning: {
    icon: TriangleAlert,
    iconColor: "text-amber-300",
    badge: "bg-amber-300/20",
    border: "border-amber-300/40",
    button: "border-amber-300/40 bg-amber-300/15 hover:bg-amber-300/25",
  },
  error: {
    icon: OctagonAlert,
    iconColor: "text-destructive",
    badge: "bg-destructive/10",
    border: "border-destructive/30",
    button: "border-destructive/30 bg-destructive/10 hover:bg-destructive/15",
  },
  reminder: {
    icon: Clock,
    iconColor: "text-blue-500",
    badge: "bg-blue-500/15",
    border: "border-blue-500/30",
    button: "border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20",
  },
} satisfies Record<string, Tone>;

type ToneName = keyof typeof tones;

const toastStyle = (name: ToneName) => {
  const tone: Tone = tones[name];
  return {
    icon: (
      <span className={cn("flex size-7 items-center justify-center rounded-full", tone.badge)}>
        <tone.icon className={cn("size-4", tone.iconColor)} aria-hidden="true" />
      </span>
    ),
    className: tone.border,
    position,
  };
};

const variants: { label: string; tone: ToneName; show: () => void }[] = [
  {
    label: "Default",
    tone: "default",
    show: () => toast.add({ title: "Event created", description: "Friday, Nov 7 at 10:00 AM", ...toastStyle("default") }),
  },
  {
    label: "Success",
    tone: "success",
    show: () => toast.success("Changes saved", { description: "Your profile is up to date.", ...toastStyle("success") }),
  },
  {
    label: "Info",
    tone: "info",
    show: () => toast.info("New version available", { description: "Refresh to get v2.4.0.", ...toastStyle("info") }),
  },
  {
    label: "Warning",
    tone: "warning",
    show: () => toast.warning("Storage almost full", { description: "You have used 92% of 10 GB.", ...toastStyle("warning") }),
  },
  {
    label: "Error",
    tone: "error",
    show: () => toast.error("Payment failed", { description: "Your card was declined.", ...toastStyle("error") }),
  },
  {
    label: "With close button",
    tone: "reminder",
    show: () =>
      toast.add({
        title: "Session expires soon",
        description: "You will be signed out in 5 minutes.",
        closeButton: true,
        duration: 8000,
        ...toastStyle("reminder"),
      }),
  },
];

const SonnerDemo = () => {
  return (
    <div className="flex max-w-md flex-wrap justify-center gap-2">
      {variants.map((variant) => {
        const tone: Tone = tones[variant.tone];
        return (
          <Button
            key={variant.label}
            variant="outline"
            onClick={variant.show}
            className={cn("text-foreground", tone.button)}
          >
            <tone.icon className={tone.iconColor} aria-hidden="true" />
            {variant.label}
          </Button>
        );
      })}
    </div>
  );
};

export default SonnerDemo;
