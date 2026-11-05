"use client";

import { useState, type MouseEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

const pages = [
  { title: "Introduction", section: "Getting started" },
  { title: "Installation", section: "Getting started" },
  { title: "Theming", section: "Customization" },
  { title: "Dark mode", section: "Customization" },
  { title: "CLI", section: "Reference" },
];

const cardClass =
  "group flex flex-1 flex-col gap-1 rounded-lg border border-border p-4 transition-colors hover:border-foreground/30 hover:bg-muted/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

const PaginationDemo = () => {
  const [current, setCurrent] = useState(2);
  const previous = pages[current - 1];
  const next = pages[current + 1];

  const go = (index: number) => (event: MouseEvent) => {
    event.preventDefault();
    setCurrent(index);
  };

  return (
    <div className="flex w-full max-w-xl flex-col gap-4">
      <div className="rounded-lg border border-dashed border-border p-4 text-center">
        <p className="text-xs text-muted-foreground">{pages[current].section}</p>
        <p className="text-base font-medium text-foreground">{pages[current].title}</p>
      </div>

      <nav aria-label="Docs pages" className="flex flex-col gap-3 sm:flex-row">
        {previous ? (
          <a href="#" onClick={go(current - 1)} rel="prev" className={cardClass}>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5 motion-reduce:transition-none" />
              Previous
            </span>
            <span className="text-sm font-medium text-foreground">{previous.title}</span>
          </a>
        ) : (
          <span className="hidden flex-1 sm:block" />
        )}
        {next ? (
          <a href="#" onClick={go(current + 1)} rel="next" className={cn(cardClass, "items-end text-right")}>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              Next
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </span>
            <span className="text-sm font-medium text-foreground">{next.title}</span>
          </a>
        ) : (
          <span className="hidden flex-1 sm:block" />
        )}
      </nav>
    </div>
  );
};

export default PaginationDemo;
