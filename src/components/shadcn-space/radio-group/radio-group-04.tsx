import { useId } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SwatchBook, WandSparkles } from "lucide-react";

const plans = [
  {
    value: "1",
    title: "Brand Strategy",
    description: "Perfect for individual creators.",
    icon: SwatchBook,
    backgroundColor: "bg-blue-500/10",
    color: "text-blue-500",
  },
  {
    value: "2",
    title: "UX/UI Design",
    description: "Built for collaboration and growing teams.",
    icon: WandSparkles,
    backgroundColor: "bg-orange-400/10",
    color: "text-orange-400",
  },
];

const RadioGroupCardVerticalRadioDemo = () => {
  const id = useId();

  return (
    <RadioGroup
      defaultValue="1"
      className="w-full max-w-72 justify-items-center sm:grid-cols-2"
    >
      {plans.map((plan) => {
        const Icon = plan.icon;
        const radioId = `${id}-${plan.value}`;

        return (
          <Label
            key={plan.value}
            htmlFor={radioId}
            className={`border-input cursor-pointer relative flex w-full max-w-44 flex-col items-center gap-3 rounded-md border p-5 shadow-xs transition ${plan.backgroundColor}`}
          >
            <div className="w-full flex flex-col justify-items-start gap-9 text-start">
              <div className="w-full flex items-center justify-between gap-2">
                <Icon className={plan.color} />
                <div className="bg-background p-px rounded-full">
                  <RadioGroupItem
                    id={radioId}
                    value={plan.value}
                    className="order-0 size-5 [&_svg]:size-3"
                    aria-describedby={`${radioId}-description`}
                  />
                </div>
              </div>
              <span className="text-base font-medium">{plan.title}</span>
            </div>
          </Label>
        );
      })}
    </RadioGroup>
  );
};

export default RadioGroupCardVerticalRadioDemo;
