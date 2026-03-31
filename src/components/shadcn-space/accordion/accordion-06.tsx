import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    title: "What services does Shadcn Space offer?",
    content:
      "We offer a wide range of services including web development, app development, and digital marketing tailored to help your business grow and scale effectively.",
  },
  {
    title: "How long does a typical project take?",
    content:
      "The time it takes to complete a project depends on the complexity and scope of the work. Most projects range from 4–8 weeks, and we'll give you a clear timeline upfront.",
  },
  {
    title: "Do you offer ongoing support after project completion?",
    content:
      "Absolutely! We offer comprehensive post-launch support to ensure a seamless implementation and provide ongoing maintenance packages tailored to clients who need regular updates or technical assistance. Our commitment doesn't end at launch — we're here to help you every step of the way.",
  },
];

const AccordionFilledDemo = () => (
  <div className="flex items-center justify-center w-full max-w-lg">
    <Accordion
      defaultValue={["item-0"]}
      className="w-full space-y-2"
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="rounded-lg border!"
        >
          <AccordionTrigger className="bg-accent px-4 py-3 aria-expanded:rounded-b-none cursor-pointer hover:no-underline items-center">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground px-5 pt-4">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export default AccordionFilledDemo;
