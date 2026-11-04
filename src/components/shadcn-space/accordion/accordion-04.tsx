import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { MinusIcon, PlusIcon } from "lucide-react";

const items = [
  {
    question: "How many team members can I add?",
    answer:
      "There is no hard limit on team members. Each plan has different seat allocations, with options to add more as your team grows.",
  },
  {
    question: "Can teams work together in real time?",
    answer:
      "Yes — our platform supports real-time collaboration with live updates, shared workspaces, and instant notifications.",
  },
  {
    question: "Do you support role-based permissions?",
    answer:
      "Yes — you can assign different roles and permission levels to team members to control access across your workspace.",
  },
];

const AccordionCardDemo = () => (
  <div className="flex items-center justify-center w-full max-w-lg">
    <div className="bg-background border border-border rounded-3xl w-full">
      <Accordion defaultValue={["item-0"]} className="w-full flex flex-col">
        {items.map((item, index) => (
          <AccordionItem
            key={`item-${index}`}
            value={`item-${index}`}
            className={cn(
              "flex flex-col group/item transition-colors border-b border-border last:border-b-0 animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both",
              index === 0 && "delay-100",
              index === 1 && "delay-200",
              index === 2 && "delay-300",
              index === 3 && "delay-400"
            )}
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden cursor-pointer gap-6 items-start">
              <span className="shrink-0 mt-0.5">
                <PlusIcon className="w-5 h-5 group-aria-expanded/accordion-trigger:hidden" />
                <MinusIcon className="w-5 h-5 hidden group-aria-expanded/accordion-trigger:inline" />
              </span>
              <span className="flex-1 text-base font-semibold text-foreground text-left">
                {item.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="ps-16 px-4 pb-5 text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
);

export default AccordionCardDemo;
