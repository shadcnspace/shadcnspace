"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Check, CircleCheck } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const steps = [
  { value: "account", name: "Account" },
  { value: "profile", name: "Profile" },
  { value: "plan", name: "Plan" },
  { value: "review", name: "Review" },
];

const plans = [
  { value: "starter", name: "Starter", price: "$12 / month" },
  { value: "pro", name: "Pro", price: "$29 / month" },
];

const WizardStepsTabsDemo = () => {
  const [current, setCurrent] = useState(0);
  const [reached, setReached] = useState(0);
  const [finished, setFinished] = useState(false);
  const [form, setForm] = useState({ email: "", name: "", role: "", plan: "pro" });
  const reduceMotion = useReducedMotion();

  const goTo = (index: number) => {
    setCurrent(index);
    setReached((prev) => Math.max(prev, index));
  };

  const handleNext = () => {
    if (current === steps.length - 1) {
      setFinished(true);
      return;
    }
    goTo(current + 1);
  };

  const reset = () => {
    setCurrent(0);
    setReached(0);
    setFinished(false);
    setForm({ email: "", name: "", role: "", plan: "pro" });
  };

  const update = (key: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const progress = finished ? 1 : current / (steps.length - 1);
  const selectedPlan = plans.find((plan) => plan.value === form.plan);

  return (
    <div className="w-full max-w-lg rounded-xl border border-border bg-background p-6">
      <Tabs
        value={steps[current].value}
        onValueChange={(value) =>
          goTo(steps.findIndex((step) => step.value === value))
        }
        className="gap-8"
      >
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute top-4 right-1/8 left-1/8 h-0.5 -translate-y-1/2 bg-border"
          >
            <motion.div
              className="h-full origin-left bg-blue-500"
              initial={false}
              animate={{ scaleX: progress }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 200, damping: 30 }
              }
            />
          </div>

          <TabsList
            variant="line"
            className="relative w-full gap-0 p-0 group-data-horizontal/tabs:h-auto"
          >
            {steps.map((step, index) => {
              const isComplete = finished || index < current;
              const isActive = !finished && index === current;

              return (
                <TabsTrigger
                  key={step.value}
                  value={step.value}
                  disabled={finished || index > reached}
                  className="h-auto flex-1 flex-col gap-2 border-0 px-0 py-0 after:hidden hover:text-foreground disabled:opacity-100"
                >
                  <span
                    className={cn(
                      "flex size-8 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold text-muted-foreground transition-colors",
                      isActive && "border-blue-500 text-foreground",
                      isComplete && "border-blue-500 bg-blue-500 text-white",
                    )}
                  >
                    {isComplete ? (
                      <Check aria-hidden="true" className="size-4" />
                    ) : (
                      index + 1
                    )}
                  </span>
                  <span
                    className={cn(
                      "text-xs",
                      isActive || isComplete ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {step.name}
                    {isComplete && <span className="sr-only"> (completed)</span>}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>

        {finished ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <CircleCheck aria-hidden="true" className="size-10 text-teal-400" />
            <div>
              <p className="font-semibold text-foreground">You&apos;re all set</p>
              <p className="text-muted-foreground">
                Your {selectedPlan?.name} workspace is ready to go.
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={reset}>
              Start over
            </Button>
          </div>
        ) : (
          <>
            <TabsContent value="account" className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="wizard-email">Email</Label>
                <Input
                  id="wizard-email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={update("email")}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="wizard-password">Password</Label>
                <Input id="wizard-password" type="password" />
              </div>
            </TabsContent>

            <TabsContent value="profile" className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="wizard-name">Full name</Label>
                <Input
                  id="wizard-name"
                  placeholder="Jane Cooper"
                  value={form.name}
                  onChange={update("name")}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="wizard-role">Role</Label>
                <Input
                  id="wizard-role"
                  placeholder="Frontend engineer"
                  value={form.role}
                  onChange={update("role")}
                />
              </div>
            </TabsContent>

            <TabsContent value="plan" className="flex flex-col gap-2">
              <p id="wizard-plan-label" className="font-medium text-foreground">
                Choose a plan
              </p>
              <div
                role="group"
                aria-labelledby="wizard-plan-label"
                className="grid gap-3 sm:grid-cols-2"
              >
                {plans.map((plan) => (
                  <button
                    key={plan.value}
                    type="button"
                    aria-pressed={form.plan === plan.value}
                    onClick={() => setForm((prev) => ({ ...prev, plan: plan.value }))}
                    className="flex flex-col items-start gap-1 rounded-lg border border-border p-4 text-left transition-colors outline-none hover:bg-muted focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 aria-pressed:border-blue-500"
                  >
                    <span className="font-medium text-foreground">{plan.name}</span>
                    <span className="text-xs text-muted-foreground">{plan.price}</span>
                  </button>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="review">
              <dl className="divide-y divide-border rounded-lg border border-border">
                {[
                  { label: "Email", value: form.email },
                  { label: "Name", value: form.name },
                  { label: "Role", value: form.role },
                  { label: "Plan", value: selectedPlan?.name },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between gap-4 px-4 py-3">
                    <dt className="text-muted-foreground">{item.label}</dt>
                    <dd className="truncate font-medium text-foreground">
                      {item.value || "Not provided"}
                    </dd>
                  </div>
                ))}
              </dl>
            </TabsContent>

            <div className="flex items-center justify-between gap-4">
              <Button
                variant="outline"
                onClick={() => setCurrent((index) => index - 1)}
                disabled={current === 0}
              >
                Back
              </Button>
              <span className="text-xs text-muted-foreground">
                Step {current + 1} of {steps.length}
              </span>
              <Button onClick={handleNext}>
                {current === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </>
        )}
      </Tabs>
    </div>
  );
};

export default WizardStepsTabsDemo;
