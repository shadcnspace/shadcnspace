"use client";

import { useEffect, useId, useState } from "react";
import { CheckIcon, CircleCheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";

type PlanId = "free" | "pro" | "team";

const plans: {
  id: PlanId;
  name: string;
  description: string;
  price: { monthly: number; yearly: number };
  unit: string;
  features: string[];
}[] = [
  {
    id: "free",
    name: "Free",
    description: "For trying things out.",
    price: { monthly: 0, yearly: 0 },
    unit: "/ month",
    features: ["3 projects", "Free components", "Community support"],
  },
  {
    id: "pro",
    name: "Pro",
    description: "For solo developers shipping real products.",
    price: { monthly: 29, yearly: 23 },
    unit: "/ month",
    features: ["Unlimited projects", "All pro blocks and templates", "Figma kit", "Priority email support"],
  },
  {
    id: "team",
    name: "Team",
    description: "For teams that build together.",
    price: { monthly: 59, yearly: 47 },
    unit: "/ seat / month",
    features: ["Everything in Pro", "Shared team library", "Role-based access", "Dedicated Slack channel"],
  },
];

const CURRENT_PLAN: PlanId = "free";

export default function Dialog13() {
  const [open, setOpen] = useState(false);
  const [yearly, setYearly] = useState(true);
  const [selected, setSelected] = useState<PlanId>("pro");
  const [upgrading, setUpgrading] = useState(false);
  const [upgraded, setUpgraded] = useState(false);

  const id = useId();
  const plan = plans.find((item) => item.id === selected)!;
  const isCurrent = selected === CURRENT_PLAN;

  useEffect(() => {
    if (!upgrading) return;
    const timeout = setTimeout(() => {
      setUpgrading(false);
      setUpgraded(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [upgrading]);

  const handleOpenChange = (next: boolean) => {
    if (upgrading) return;
    if (next) {
      setSelected("pro");
      setUpgraded(false);
    }
    setOpen(next);
  };

  const price = (item: (typeof plans)[number]) => item.price[yearly ? "yearly" : "monthly"];

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger render={<Button className="cursor-pointer" />}>Upgrade plan</DialogTrigger>
      <DialogContent className="max-h-11/12 gap-5 overflow-y-auto p-6 sm:max-w-lg">
        {upgraded ? (
          <div className="flex flex-col items-center gap-4 py-2 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-teal-400/15">
              <CircleCheckIcon aria-hidden="true" className="size-6 text-teal-400" />
            </span>
            <DialogHeader className="items-center">
              <DialogTitle className="text-xl font-semibold">You&apos;re on {plan.name}</DialogTitle>
              <DialogDescription>
                Billed {yearly ? `$${price(plan) * 12} yearly` : `$${price(plan)} monthly`}. Here&apos;s what you
                unlocked:
              </DialogDescription>
            </DialogHeader>
            <ul className="grid w-full gap-2 rounded-lg border border-border p-4 text-left">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <CheckIcon aria-hidden="true" className="size-4 text-teal-400" />
                  {feature}
                </li>
              ))}
            </ul>
            <DialogClose render={<Button className="w-full cursor-pointer" />}>Start building</DialogClose>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">Upgrade your plan</DialogTitle>
              <DialogDescription>You&apos;re on the Free plan. Pick the plan that fits how you work.</DialogDescription>
            </DialogHeader>

            <div className="flex items-center justify-between gap-3 rounded-lg bg-muted/50 px-3 py-2">
              <Label htmlFor={`${id}-billing`} className="cursor-pointer gap-2">
                Yearly billing
                <Badge className="bg-teal-400 text-gray-950">Save 20%</Badge>
              </Label>
              <Switch
                id={`${id}-billing`}
                checked={yearly}
                onCheckedChange={(checked) => setYearly(checked)}
                className="cursor-pointer"
              />
            </div>

            <RadioGroup
              value={selected}
              onValueChange={(value) => setSelected(value as PlanId)}
              aria-label="Plan"
              className="gap-3"
            >
              {plans.map((item) => (
                <Label
                  key={item.id}
                  htmlFor={`${id}-${item.id}`}
                  className={cn(
                    "flex cursor-pointer items-start gap-3 rounded-lg border border-border p-4 font-normal transition-colors hover:bg-muted/40",
                    selected === item.id && "border-blue-500 bg-muted/40",
                  )}
                >
                  <RadioGroupItem id={`${id}-${item.id}`} value={item.id} className="mt-0.5" />
                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-2 font-medium">
                        {item.name}
                        {item.id === CURRENT_PLAN && <Badge variant="outline">Current</Badge>}
                      </span>
                      <span className="text-sm">
                        <span className="font-semibold tabular-nums">${price(item)}</span>
                        <span className="text-muted-foreground"> {item.unit}</span>
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">{item.description}</span>
                  </div>
                </Label>
              ))}
            </RadioGroup>

            <div className="grid gap-2">
              <p className="text-sm font-medium">What&apos;s included in {plan.name}</p>
              <ul className="grid gap-1.5 sm:grid-cols-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckIcon aria-hidden="true" className="size-4 shrink-0 text-teal-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <DialogFooter className="-mx-6 -mb-6 p-4 px-6">
              <DialogClose
                render={<Button variant="outline" className="cursor-pointer" />}
                disabled={upgrading}
              >
                Maybe later
              </DialogClose>
              <Button
                onClick={() => setUpgrading(true)}
                disabled={isCurrent || upgrading}
                className="cursor-pointer"
              >
                {upgrading && <Spinner data-icon="inline-start" />}
                {isCurrent ? "Current plan" : upgrading ? "Upgrading..." : `Upgrade to ${plan.name}`}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
