import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MonitorIcon, PaletteIcon, RocketIcon } from "lucide-react";

const items = [
  {
    icon: RocketIcon,
    title: "How do you support early-stage startups?",
    content:
      "We guide your team through setup, so you can focus on what matters most — from tooling to workflows, we handle the groundwork.",
    media:
      "https://images.shadcnspace.com/assets/services/services-10-img-5.webp",
  },
  {
    icon: MonitorIcon,
    title: "What does your web design process look like?",
    content:
      "We design and develop high-performing websites focused on user experience, from wireframes to a fully production-ready build.",
    media:
      "https://images.shadcnspace.com/assets/services/services-10-img-3.webp",
  },
  {
    icon: PaletteIcon,
    title: "Can you help define our brand identity?",
    content:
      "We create distinctive visual identities and design systems that make your brand stand out and stay consistent across every touchpoint.",
    media:
      "https://images.shadcnspace.com/assets/services/services-10-img-4.webp",
  },
];

const AccordionMediaDemo = () => (
  <div className="flex items-center justify-center w-full max-w-lg">
    <Accordion
      defaultValue={["item-0"]}
      className="w-full"
    >
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="px-4 py-3 cursor-pointer hover:no-underline items-center">
            <span className="flex items-center gap-4">
              <item.icon className="size-4 shrink-0 text-muted-foreground" />
              <span>{item.title}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="space-y-4">
            <p className="text-muted-foreground">{item.content}</p>
            <img
              src={item.media}
              alt={item.title}
              width={520}
              height={200}
              className="w-full h-40 rounded-lg object-cover"
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export default AccordionMediaDemo;
