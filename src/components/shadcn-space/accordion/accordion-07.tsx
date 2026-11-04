"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionItem {
  id: string;
  number: string;
  title: string;
  content: string;
}

const items: AccordionItem[] = [
  {
    id: "discovery",
    number: "01",
    title: "Discovery",
    content:
      "We dive deep into your business goals, target audience, and competitive landscape to uncover what truly drives growth and shapes a clear product direction.",
  },
  {
    id: "design",
    number: "02",
    title: "Design",
    content:
      "Our designers craft pixel-perfect interfaces that blend aesthetics with functionality, translating research into intuitive experiences users love at first interaction.",
  },
  {
    id: "engineering",
    number: "03",
    title: "Engineering",
    content:
      "We build robust, performant solutions with modern tech stacks — clean architecture, test coverage, and a codebase that scales as confidently as your product does.",
  },
  {
    id: "launch",
    number: "04",
    title: "Launch",
    content:
      "From staging to production, we handle deployment pipelines, monitoring setup, and rollout strategies so your release day is smooth, stable, and celebrated.",
  },
];

const AccordionMotionServices = () => {
  const [openItems, setOpenItems] = useState<string[]>(["discovery"]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="flex items-center justify-center px-4 py-8 w-full">
      <div className="w-full max-w-lg">
        <Accordion
          value={openItems}
          onValueChange={setOpenItems}
          className="w-full"
        >
          {items.map((item) => {
            const isActive = openItems.includes(item.id);
            const isHovered = hoveredId === item.id;

            return (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="relative border-none not-last:border-none"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <AccordionTrigger className="hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden px-1 py-5 cursor-pointer">
                  <div className="flex items-center gap-6 w-full">
                    {/* Number bubble */}
                    <div className="relative flex h-10 w-10 items-center justify-center shrink-0">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-foreground"
                        initial={false}
                        animate={{
                          scale: isActive ? 1 : isHovered ? 0.85 : 0,
                          opacity: isActive ? 1 : isHovered ? 0.1 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      />
                      <motion.span
                        className="relative z-10 text-sm font-medium tracking-wide"
                        animate={{
                          color: isActive
                            ? "var(--color-primary-foreground)"
                            : "var(--color-muted-foreground)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.number}
                      </motion.span>
                    </div>

                    {/* Title */}
                    <motion.span
                      className="text-base font-medium"
                      animate={{
                        x: isActive || isHovered ? 4 : 0,
                        color:
                          isActive || isHovered
                            ? "var(--color-foreground)"
                            : "var(--color-muted-foreground)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                      {item.title}
                    </motion.span>

                    {/* Plus / X icon */}
                    <motion.div
                      className="ml-auto flex h-8 w-8 items-center justify-center shrink-0"
                      animate={{
                        rotate: isActive ? 45 : 0,
                        opacity: isActive || isHovered ? 1 : 0.4,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Plus className="size-4 text-foreground" />
                    </motion.div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pl-16 pr-4 pb-6 text-sm text-muted-foreground leading-relaxed">
                  {item.content}
                </AccordionContent>

                {/* Static border */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />

                {/* Animated active/hover line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-px origin-left bg-foreground"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : isHovered ? 0.3 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionMotionServices;
