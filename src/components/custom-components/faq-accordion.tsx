import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

export type FaqItem = {
  title: string;
  content: React.ReactNode | string;
};

type FaqAccordionProps = {
  faqData: FaqItem[];
  className?: string;
};

const FaqAccordion = ({ faqData, className }: FaqAccordionProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-foreground text-xl sm:text-2xl font-bold">FAQs</h2>
      <Accordion className={className ?? "w-full"}>
        {faqData.map(({ title, content }, index) => {
          return (
            <AccordionItem key={index} value={index}>
              <AccordionTrigger className="text-lg font-medium last:[&>svg]:hidden items-center">
                <h3>{title}</h3>

                <div
                  className="bg-muted text-foreground rounded-full p-2.5 
                group-aria-expanded/accordion-trigger:rotate-180 
                duration-200 
                group-aria-expanded/accordion-trigger:bg-primary 
                group-aria-expanded/accordion-trigger:text-primary-foreground"
                >
                  <ChevronDown className="size-3.5" />
                </div>
              </AccordionTrigger>

              <AccordionContent className="text-foreground/80 text-base">
                {content}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
