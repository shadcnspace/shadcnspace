import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MinusIcon, PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ_DATA = [
  {
    question: "How do I get started with the component library?",
    answer:
      "Getting started is simple — install the package, import the components you need, and drop them into your project. Each component follows shadcn/ui conventions, so it works seamlessly with your existing setup.",
  },
  {
    question: "Can I customize the styles to match my brand?",
    answer:
      "Absolutely. All components are built with Tailwind CSS and shadcn design tokens, so you can override colors, spacing, and typography through your `globals.css` or by passing a `className` prop directly to any component.",
  },
  {
    question: "Are the components accessible by default?",
    answer:
      "Yes. Every component is built on top of Radix UI primitives, which handle keyboard navigation, focus management, and ARIA attributes out of the box, ensuring WCAG-compliant accessibility from day one.",
  },
];

const AccordionFaqDemo = () => (
  <div className="flex items-center justify-center w-full max-w-lg">
    <Accordion defaultValue={["item-0"]} className="w-full flex flex-col gap-4">
      {FAQ_DATA.map((faq, index) => (
        <AccordionItem
          key={`item-${index}`}
          value={`item-${index}`}
          className={cn(
            "border border-border rounded-2xl flex flex-col group/item data-open:bg-accent data-open:border-transparent transition-colors animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both",
            index === 0 && "delay-100",
            index === 1 && "delay-200",
            index === 2 && "delay-300"
          )}
        >
          <AccordionTrigger className="px-4 py-3 items-center text-base font-semibold hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden cursor-pointer">
            <div className="flex gap-6 items-center text-left">
              <span className="text-muted-foreground tabular-nums shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              {faq.question}
            </div>
            <PlusIcon className="w-5 h-5 shrink-0 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
            <MinusIcon className="w-5 h-5 shrink-0 text-muted-foreground hidden group-aria-expanded/accordion-trigger:inline" />
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-5 ps-16 text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export default AccordionFaqDemo;
