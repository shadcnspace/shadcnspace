"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const CollapsibleDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <article className="w-full max-w-md rounded-lg border border-border bg-background p-5">
      <header className="mb-3 flex items-center gap-3">
        <Avatar>
          <AvatarFallback className="bg-sky-400/20 text-xs font-medium text-foreground">NK</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium text-foreground">Noah Kim</p>
          <p className="text-xs text-muted-foreground">Rated 5 out of 5, 2 days ago</p>
        </div>
      </header>

      <Collapsible open={open} onOpenChange={setOpen}>
        <div className="relative">
          <p className="text-sm text-foreground/90">
            We moved our whole design system to these components in a week. The defaults are sensible, the
            code is easy to read, and dark mode just worked.
          </p>
          {!open && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-linear-to-t from-background to-transparent"
            />
          )}
        </div>
        <CollapsibleContent className="overflow-hidden">
          <div className="flex flex-col gap-3 pt-3 text-sm text-foreground/90">
            <p>
              What surprised me most was the accessibility. Keyboard navigation and focus states were right out of
              the box, which saved our QA team a lot of time.
            </p>
            <p>
              My only wish is more examples for complex forms, but the community filled that gap quickly. Would
              recommend to any team starting a new product.
            </p>
          </div>
        </CollapsibleContent>
        <CollapsibleTrigger className="group mt-3 flex items-center gap-1 rounded-sm text-sm font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
          {open ? "Show less" : "Read more"}
          <ChevronDown
            className={cn("size-4 transition-transform motion-reduce:transition-none", open && "rotate-180")}
            aria-hidden="true"
          />
        </CollapsibleTrigger>
      </Collapsible>
    </article>
  );
};

export default CollapsibleDemo;
