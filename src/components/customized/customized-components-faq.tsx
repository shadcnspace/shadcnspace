import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/ui/accordion";

const items = [
  {
    title: "Is this an alternative to Shadcn UI?",
    content:
      "No, Shadcn Space is not an alternative to Shadcn UI. It actually complements Shadcn UI.",
  },
  {
    title: "How can I use the customized components in my project?",
    content:
      "You can use the customized components by previewing them on our platform, copying the provided code, and pasting it directly into your project. This allows for quick implementation without extensive coding.",
  },
  {
    title: "What types of customized components are available?",
    content:
      "Our collection includes various customized Shadcn UI components designed for flexibility and style, such as buttons, inputs, accordions, tabs, cards, etc., allowing you to create a unique look for your application.",
  },
  {
    title: "Does the customized component support dark mode?",
    content:
      "Yes, all customized components are designed to look good in both light and dark modes.",
  },
  {
    title: "Can I modify the Shadcn UI components after copying them?",
    content:
      "Absolutely! Once you copy the code for any Shadcn UI component or block, you have full freedom to modify it according to your project's requirements.",
  },
];

export function CustomizedComponentsFAQ() {
  return (
    <>
      <p className="uppercase mb-3 font-semibold text-foreground/80 tracking-tight">
        Frequently Asked Questions
      </p>
      <Accordion type="multiple" className="w-full border-t">
        {items.map(({ title, content }, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-semibold text-[17px] py-3 gap-3">
              {title}
            </AccordionTrigger>
            <AccordionContent className="text-base text-foreground/80">
              {content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
