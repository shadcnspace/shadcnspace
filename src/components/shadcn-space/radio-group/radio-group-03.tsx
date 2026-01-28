import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Gem, HeartHandshake, Rocket } from "lucide-react";
import { color } from "motion/react";

export const title = "RadioGroup with Cards";

const Example = () => (
  <RadioGroup defaultValue="card-1" className="grid gap-2 max-w-sm">
    {[
      {
        id: "card-1",
        title: "Launch Plan",
        desc: "Essential tools to get started.",
        price: "Free",
        icon: Rocket,
        color: "text-blue-500",
        background: "bg-blue-500/10",
      },
      {
        id: "card-2",
        title: "Grow Plan",
        desc: "Advanced features for growing teams.",
        price: "$19.00",
        icon: HeartHandshake,
        color: "text-orange-400",
        background: "bg-orange-400/10",
      },
      {
        id: "card-3",
        title: "Scale Plan",
        desc: "Enterprise power and priority support.",
        price: "$49.00",
        icon: Gem,
        color: "text-red-500",
        background: "bg-red-500/10",
      },
    ].map((item) => {
      const Icon = item.icon;
      return (
        <Label
          key={item.id}
          htmlFor={item.id}
          className={cn(
            "flex cursor-pointer items-start gap-3 rounded-lg border p-4 shadow-xs transition-all",
            "hover:bg-accent",
            "has-data-checked:bg-accent",
          )}
        >
          <div className={`${item.background} p-1.5 rounded-lg`}>
            <Icon className={item.color} />
          </div>
          <div className="w-full flex gap-2 items-start justify-between">
            <div className="grid gap-1.5">
              <p className="font-medium leading-none">{item.title}</p>
              <p className="text-xs text-muted-foreground font-normal">
                {item.desc}
              </p>
            </div>
            <span className="text-muted-foreground text-xs font-normal">
              {item.price}
            </span>
          </div>
          <RadioGroupItem value={item.id} id={item.id} />
        </Label>
      );
    })}
  </RadioGroup>
);

export default Example;
