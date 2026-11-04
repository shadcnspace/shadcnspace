import { ReactNode } from "react";
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
import { Check, Flame } from "lucide-react";
import {cn} from "@/lib/utils";

/* ============================= */
/* ShineBorder (Reusable Wrapper) */
/* ============================= */

type ShineBorderProps = {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
  duration?: number;
  gradient?: string;
};

const ShineBorder = ({
  children,
  className,
  borderWidth = 2,
  duration = 3,
  gradient = "from-blue-500 via-red-500 to-teal-400",
}: ShineBorderProps) => {
  return (
    <div
      className={cn("relative rounded-2xl", className)}
      style={{ padding: borderWidth }}
    >
      {/* Animated Gradient Layer */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div
          className={cn(
            "absolute -inset-full blur-sm animate-spin bg-conic",
            gradient
          )}
          style={{ animationDuration: `${duration}s` }}
        />
      </div>

      {/* Content Layer */}
      <div className="relative rounded-2xl bg-card">
        {children}
      </div>
    </div>
  );
};

/* ============================= */
/* Pricing Card */
/* ============================= */

type PricingPlan = {
  plan_name: string;
  plan_descp: string;
  plan_price: number;
  plan_feature: string[];
};

const pricingData: PricingPlan = {
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
};

const PricingCard = ({
  plan_name,
  plan_descp,
  plan_price,
  plan_feature,
}: PricingPlan) => {
  return (
    <Card className="relative h-full rounded-2xl p-8 gap-8 border-0 ring-0">
      <CardHeader className="p-0">
        <div className="flex flex-col gap-3 self-stretch">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-medium text-primary">
              {plan_name}
            </CardTitle>
            <Badge className="py-1 px-3 text-sm font-medium leading-5 w-fit h-7 flex items-center gap-1.5 [&>svg]:size-4!">
              <Flame size={16} /> Recommend
            </Badge>
          </div>
          <CardDescription className="text-base font-normal max-w-2xl">
            {plan_descp}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col flex-1 gap-8 p-0">
        <div className="flex items-baseline gap-1">
          <span className="text-foreground text-4xl sm:text-5xl font-medium">
            ${plan_price}
          </span>
          <span className="text-muted-foreground text-base font-normal">
            /month
          </span>
        </div>

        <Separator />

        <ul className="flex flex-col gap-4 flex-1">
          {plan_feature.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 text-base font-normal text-muted-foreground"
            >
              <Check className="size-4 text-primary shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <Button className="w-full h-12">Get started</Button>
      </CardContent>
    </Card>
  );
};

/* ============================= */
/* Demo */
/* ============================= */

export default function ShineBorderDemo() {
  return (
    <ShineBorder
      borderWidth={2}
      duration={4}
      gradient="from-blue-500 via-red-500 to-teal-400"
      className="w-fit"
    >
      <PricingCard {...pricingData} />
    </ShineBorder>
  );
}
