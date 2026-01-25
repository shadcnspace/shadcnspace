import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  FileText,
  Folder,
  Handshake,
  MinusIcon,
  PlusIcon,
  Users,
} from "lucide-react";

// Static data instead of faker
const items = [
  {
    id: "item-1",
    title: "Company Overview",
    icon: FileText,
    textColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
    collapsibles: [
      {
        id: "collapsible-1-1",
        title: "Mission Statement",
        content:
          "Our mission is to deliver high-quality products that improve the lives of our customers.",
      },
      {
        id: "collapsible-1-2",
        title: "Core Values",
        content:
          "Integrity, innovation, and customer satisfaction are at the heart of everything we do.",
      },
    ],
  },
  {
    id: "item-2",
    title: "Products & Services",
    icon: Folder,
    textColor: "text-orange-400",
    bgColor: "bg-orange-400/10",
    collapsibles: [
      {
        id: "collapsible-2-1",
        title: "Software Solutions",
        content:
          "We offer a range of software tools designed to enhance business efficiency and productivity.",
      },
      {
        id: "collapsible-2-2",
        title: "Consulting Services",
        content:
          "Our consulting team helps clients identify opportunities, streamline operations, and drive growth.",
      },
    ],
  },
  {
    id: "item-3",
    title: "Team & Culture",
    icon: Handshake,
    textColor: "text-teal-400",
    bgColor: "bg-teal-400/10",
    collapsibles: [
      {
        id: "collapsible-3-1",
        title: "Leadership Team",
        content:
          "Our leadership team is composed of experienced professionals committed to innovation and growth.",
      },
      {
        id: "collapsible-3-2",
        title: "Work Environment",
        content:
          "We foster a collaborative and inclusive culture where everyone can thrive.",
      },
    ],
  },
  {
    id: "item-4",
    title: "Contact Information",
    icon: Users,
    textColor: "text-red-500",
    bgColor: "bg-red-500/10",
    collapsibles: [
      {
        id: "collapsible-4-1",
        title: "Support",
        content:
          "Reach out to our support team via email or phone for any inquiries or assistance.",
      },
      {
        id: "collapsible-4-2",
        title: "Locations",
        content:
          "Our offices are located in New York, San Francisco, and London to serve clients globally.",
      },
    ],
  },
];

const AccordionMultiLevelDemo = () => (
  <div className="flex items-center justify-center max-w-md w-full">
    <Accordion className="w-full -space-y-1" defaultValue={[items[0].id]}>
      {items.map((item) => (
        <AccordionItem
          className="overflow-hidden border bg-background first:rounded-t-lg last:rounded-b-lg last:border-b"
          key={item.id}
          value={item.id}
        >
          <AccordionTrigger className="group px-4 py-3 hover:no-underline last:[&>svg]:hidden">
            <div className="flex w-full items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "p-2.5 rounded-xl",
                    item.bgColor,
                    item.textColor,
                  )}
                >
                  <item.icon size={20} className="size-5" />
                </div>
                <span className="flex-1 text-left">{item.title}</span>
              </div>
              <div className="relative size-4 shrink-0">
                <PlusIcon className="absolute inset-0 size-4 text-muted-foreground transition-opacity duration-200 group-data-[panel-open]:opacity-0" />
                <MinusIcon className="absolute inset-0 size-4 text-muted-foreground opacity-0 transition-opacity duration-200 group-data-[panel-open]:opacity-100" />
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0">
            {item.collapsibles.map((collapsible) => (
              <Collapsible
                className="space-y-1 border-t border-border bg-accent px-4 py-3"
                key={collapsible.id}
              >
                <CollapsibleTrigger className="flex items-center gap-2 font-medium [&[data-state=open]>svg]:rotate-180">
                  <ChevronDown
                    aria-hidden="true"
                    className="shrink-0 opacity-60 transition-transform duration-200"
                    size={16}
                    strokeWidth={2}
                  />
                  {collapsible.title}
                </CollapsibleTrigger>
                <CollapsibleContent className="overflow-hidden ps-6 text-sm text-muted-foreground transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                  {collapsible.content}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export default AccordionMultiLevelDemo;
