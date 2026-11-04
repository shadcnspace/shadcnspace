import { Badge } from "@/components/ui/badge";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Plan = {
  id: string;
  value: string;
  title: string;
  description: string;
  price: string;
  badge?: string;
};

const plans: Plan[] = [
  {
    id: "plan-starter",
    value: "starter",
    title: "Starter",
    description: "For individuals and small side projects.",
    price: "$9/mo",
  },
  {
    id: "plan-team",
    value: "team",
    title: "Team",
    description: "For growing teams that need more power.",
    price: "$29/mo",
    badge: "Popular",
  },
  {
    id: "plan-enterprise",
    value: "enterprise",
    title: "Enterprise",
    description: "Advanced controls and dedicated support.",
    price: "$99/mo",
  },
];

const ChoosePlanDemo = () => {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Choose a plan</FieldLegend>
      <FieldDescription>
        Select the plan that best fits your team&apos;s needs.
      </FieldDescription>
      <RadioGroup defaultValue="team">
        {plans.map((plan) => (
          <FieldLabel key={plan.id} htmlFor={plan.id}>
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>
                  {plan.title}
                  {plan.badge && (
                    <Badge className="h-4">
                      {plan.badge}
                    </Badge>
                  )}
                </FieldTitle>
                <FieldDescription>{plan.description}</FieldDescription>
              </FieldContent>
              <span className="text-foreground text-sm font-medium">
                {plan.price}
              </span>
              <RadioGroupItem value={plan.value} id={plan.id} />
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
    </FieldSet>
  );
};

export default ChoosePlanDemo;
