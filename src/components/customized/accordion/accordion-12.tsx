import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/ui/accordion";
import { cn } from "@/lib/utils";
import { Contrast, Palette, Zap } from "lucide-react";

const items = [
  {
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
    icon: Contrast,
  },
  {
    title: "Is it styled?",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
    icon: Palette,
    disabled: true,
  },
  {
    title: "Is it animated?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
    icon: Zap,
  },
];

export default function AccordionItemDisabledDemo() {
  return (
    <Accordion
      defaultValue="item-0"
      type="single"
      collapsible
      className="max-w-lg my-4 w-full"
    >
      {items.map(({ title, content, icon: Icon, disabled }, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger
            disabled={disabled}
            className={cn({
              "opacity-50": disabled,
            })}
          >
            <div className="flex items-start gap-3">
              <Icon />
              {title}
            </div>
          </AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
