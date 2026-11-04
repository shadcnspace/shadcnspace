import { HeartIcon, StarIcon, Send } from "lucide-react";
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";

const CheckboxCustomIconsDemo = () => {
  return (
    <div className="flex items-center gap-6">
      <CheckboxPrimitive.Root
        data-slot="checkbox"
        defaultChecked
        className="group focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-3 flex items-center gap-1.5"
        aria-label="Heart"
      >
        <span className="group-data-[checked]:hidden">
          <HeartIcon className="stroke-1" />
        </span>
        <span className="group-data-[unchecked]:hidden">
          <HeartIcon className="fill-destructive stroke-destructive stroke-1" />
        </span>
        <span className="text-sm font-medium text-muted-foreground group-data-[checked]:text-destructive">
          15k
        </span>
      </CheckboxPrimitive.Root>
      <CheckboxPrimitive.Root
        data-slot="checkbox"
        defaultChecked
        className="group focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-3 flex items-center gap-1.5"
        aria-label="Star"
      >
        <span className="group-data-[checked]:hidden">
          <StarIcon className="stroke-1" />
        </span>
        <span className="group-data-[unchecked]:hidden">
          <StarIcon className="fill-amber-300 stroke-amber-300 stroke-1 dark:fill-amber-300 dark:stroke-amber-300" />
        </span>
        <span className="text-sm font-medium text-muted-foreground group-data-[checked]:text-amber-400">
          20k
        </span>
      </CheckboxPrimitive.Root>
      <CheckboxPrimitive.Root
        data-slot="checkbox"
        defaultChecked
        className="group focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-3 flex items-center gap-1.5"
        aria-label="Send"
      >
        <span className="group-data-[checked]:hidden">
          <Send className="stroke-1" />
        </span>
        <span className="group-data-[unchecked]:hidden">
          <Send className="fill-sky-400 stroke-sky-400 stroke-1 dark:fill-sky-400 dark:stroke-sky-400" />
        </span>
        <span className="text-sm font-medium text-muted-foreground group-data-[checked]:text-sky-500">
          24k
        </span>
      </CheckboxPrimitive.Root>
    </div>
  );
};

export default CheckboxCustomIconsDemo;