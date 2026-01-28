"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Check, Flame } from "lucide-react";
import { motion } from "motion/react";

type PricingPlan = {
  plan_name: string;
  plan_descp: string;
  plan_price: number;
  plan_feature: string[];
  plan_recommended: boolean;
};

const pricingData: PricingPlan[] = [
  {
    plan_name: "Pro",
    plan_descp:
      "Launch your website faster with ready-to-use components, blocks and zero setup friction with us.",
    plan_price: 2500,
    plan_feature: [
      "Access to all core Shadcn UI blocks",
      "Copy-paste ready React code",
      "Regular library updates",
      "Commercial use license",
      "Community support & documentation",
    ],
    plan_recommended: false,
  },
  {
    plan_name: "Pro Plus",
    plan_descp:
      "Scale with confidence using premium blocks, templates, and included strategy guidance.",
    plan_price: 3800,
    plan_feature: [
      "Everything in Pro",
      "Premium templates & more sections",
      "Early access to new components",
      "Private Discord & priority support",
      "Monthly strategy & growth sessions",
    ],
    plan_recommended: true,
  },
  {
    plan_name: "Enterprise",
    plan_descp:
      "Build at scale with full access, priority support, and dedicated one-on-one strategy calls.",
    plan_price: 5000,
    plan_feature: [
      "Everything in Pro Plus",
      "Unlimited team seats",
      "Dedicated UI & integration support",
      "Custom component requests",
      "One-on-one implementation",
    ],
    plan_recommended: false,
  },
];

const Pricing = () => {
  const pricingCardVariants = {
    hidden: {
      opacity: 0,
      x: -60,
    },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.25,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="bg-background py-10 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 xl:px-16 min-h-screen flex items-center justify-center">
        <div className="flex flex-col gap-8 md:gap-12 items-center justify-center w-full">
          {/* Heading */}
          <div className="flex flex-col gap-4 justify-center items-center">
            {/* Badge */}
            <Badge
              variant={"outline"}
              className="py-1 px-3 text-sm font-normal leading-5 w-fit h-7"
            >
              Pricing
            </Badge>
            {/* Heading */}
            <div className="max-w-3xs sm:max-w-md mx-auto text-center">
              <h2 className="text-foreground text-3xl sm:text-5xl font-medium">
                Pick the plan that fits your start-up
              </h2>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch w-full">
            {pricingData.map((plan: PricingPlan, index: number) => {
              const isFeatured = plan.plan_recommended;

              return (
                <motion.div
                  key={index}
                  variants={pricingCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  className={cn(
                    "relative h-full w-full",
                    isFeatured && "z-10 scale-102"
                  )}
                >
                  {/* GRADIENT BORDER */}
                  {isFeatured && (
                    <div className="absolute -inset-0.5 rounded-2xl overflow-hidden">
                      {/* Animated conic-gradient border */}
                      <div className="absolute -inset-full blur-xs animate-spin [animation-duration:2s] bg-conic from-blue-500 via-red-500 to-teal-400" />

                      {/* Inner mask */}
                      <div className="absolute inset-0.5 rounded-2xl bg-card" />
                    </div>
                  )}

                  {/* CARD */}
                  <Card
                    className={cn(
                      "relative h-full rounded-2xl p-8 gap-8",
                      isFeatured ? "border-0 ring-0" : "border border-border"
                    )}
                  >
                    <CardHeader className="p-0">
                      <div className="flex flex-col gap-3 self-stretch">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-2xl font-medium text-primary">
                            {plan.plan_name}
                          </CardTitle>
                          {isFeatured && (
                            <Badge className="py-1 px-3 text-sm font-medium leading-5 w-fit h-7 flex items-center gap-1.5 [&>svg]:size-4!">
                              <Flame size={16} /> Recommend
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="text-base font-normal max-w-2x">
                          {plan.plan_descp}
                        </CardDescription>
                      </div>
                    </CardHeader>

                    <CardContent className="flex flex-col flex-1 gap-8 p-0">
                      <div className="flex items-baseline gap-1">
                        <span className="text-foreground text-4xl sm:text-5xl font-medium">
                          ${plan.plan_price}
                        </span>
                        <span className="text-muted-foreground text-base font-normal">
                          /month
                        </span>
                      </div>

                      <Separator orientation="horizontal" />

                      <ul className="flex flex-col gap-4 flex-1">
                        {plan.plan_feature.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 text-base font-normal text-muted-foreground"
                          >
                            <Check className="size-4 text-primary shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Button
                        className="w-full h-12"
                        variant={isFeatured ? "default" : "outline"}
                      >
                        Get started
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
