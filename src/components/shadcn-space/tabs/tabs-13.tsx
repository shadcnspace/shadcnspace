"use client";

import { useEffect, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Period = "monthly" | "yearly";

type Plan = {
  name: string;
  description: string;
  price: Record<Period, number>;
  features: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    description: "For solo developers shipping side projects.",
    price: { monthly: 12, yearly: 10 },
    features: ["5 projects", "All free blocks", "Community support"],
  },
  {
    name: "Pro",
    description: "For teams building production apps.",
    price: { monthly: 29, yearly: 23 },
    features: ["Unlimited projects", "All pro blocks", "Priority support"],
    featured: true,
  },
];

const AnimatedPrice = ({ from, to }: { from: number; to: number }) => {
  const reduceMotion = useReducedMotion();
  const value = useMotionValue(reduceMotion ? to : from);
  const rounded = useTransform(value, (latest) => Math.round(latest));

  useEffect(() => {
    if (reduceMotion) {
      value.set(to);
      return;
    }
    const controls = animate(value, to, { duration: 0.6, ease: "easeOut" });
    return () => controls.stop();
  }, [to, reduceMotion, value]);

  return <motion.span className="tabular-nums">{rounded}</motion.span>;
};

const PlanGrid = ({ period, animated }: { period: Period; animated: boolean }) => {
  const otherPeriod: Period = period === "monthly" ? "yearly" : "monthly";

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={cn(
            "flex flex-col gap-5 rounded-xl border border-border bg-background p-5",
            plan.featured && "border-blue-500",
          )}
        >
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground">{plan.name}</h3>
              {plan.featured && (
                <Badge variant="outline" className="border-blue-500 text-foreground">
                  Popular
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground">{plan.description}</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="flex items-baseline gap-1">
              <span className="text-4xl font-semibold text-foreground">
                $
                <AnimatedPrice
                  from={plan.price[animated ? otherPeriod : period]}
                  to={plan.price[period]}
                />
              </span>
              <span className="text-muted-foreground">/ month</span>
            </p>
            <p className="text-xs text-muted-foreground">
              {period === "yearly"
                ? `Billed $${plan.price.yearly * 12} yearly`
                : "Billed monthly, cancel anytime"}
            </p>
          </div>

          <ul className="flex flex-col gap-2">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-foreground/90">
                <Check aria-hidden="true" className="size-4 text-teal-400" />
                {feature}
              </li>
            ))}
          </ul>

          <Button
            variant={plan.featured ? "default" : "outline"}
            className="mt-auto w-full"
          >
            Get {plan.name}
          </Button>
        </div>
      ))}
    </div>
  );
};

const BillingToggleTabsDemo = () => {
  const [hasSwitched, setHasSwitched] = useState(false);

  return (
    <div className="w-full max-w-xl">
      <Tabs
        defaultValue="monthly"
        onValueChange={() => setHasSwitched(true)}
        className="items-center gap-6"
      >
        <TabsList className="group-data-horizontal/tabs:h-10">
          <TabsTrigger value="monthly" className="px-4">
            Monthly
          </TabsTrigger>
          <TabsTrigger value="yearly" className="px-4">
            Yearly
            <Badge className="bg-teal-400 text-gray-950">Save 20%</Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="monthly" className="w-full">
          <PlanGrid period="monthly" animated={hasSwitched} />
        </TabsContent>
        <TabsContent value="yearly" className="w-full">
          <PlanGrid period="yearly" animated={hasSwitched} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BillingToggleTabsDemo;
