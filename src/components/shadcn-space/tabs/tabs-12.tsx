"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "@/components/shadcn-space/tabs/tabs-12.css";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  { value: "all", name: "All", count: 128 },
  { value: "design", name: "Design", count: 24 },
  { value: "development", name: "Development", count: 31 },
  { value: "marketing", name: "Marketing", count: 12 },
  { value: "product", name: "Product", count: 18 },
  { value: "sales", name: "Sales", count: 9 },
  { value: "support", name: "Support", count: 7 },
  { value: "finance", name: "Finance", count: 6 },
  { value: "operations", name: "Operations", count: 8 },
  { value: "legal", name: "Legal", count: 4 },
  { value: "people", name: "People", count: 5 },
  { value: "research", name: "Research", count: 4 },
];

const ScrollableTabsDemo = () => {
  const [active, setActive] = useState(categories[0].value);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const updateScrollState = useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    setCanScrollLeft(list.scrollLeft > 1);
    setCanScrollRight(list.scrollLeft + list.clientWidth < list.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    updateScrollState();
    list.addEventListener("scroll", updateScrollState, { passive: true });
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(list);
    return () => {
      list.removeEventListener("scroll", updateScrollState);
      observer.disconnect();
    };
  }, [updateScrollState]);

  useEffect(() => {
    const list = listRef.current;
    const tab = list?.querySelector<HTMLElement>('[aria-selected="true"]');
    if (!list || !tab) return;
    const padding = 32;
    const tabStart = tab.offsetLeft;
    const tabEnd = tabStart + tab.offsetWidth;
    let left: number | null = null;
    if (tabStart - padding < list.scrollLeft) left = tabStart - padding;
    else if (tabEnd + padding > list.scrollLeft + list.clientWidth)
      left = tabEnd + padding - list.clientWidth;
    if (left !== null) {
      list.scrollTo({ left, behavior: reduceMotion ? "auto" : "smooth" });
    }
  }, [active, reduceMotion]);

  const scrollBy = (direction: 1 | -1) => {
    const list = listRef.current;
    if (!list) return;
    list.scrollBy({
      left: direction * list.clientWidth * 0.7,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <div className="w-full max-w-md">
      <Tabs
        value={active}
        onValueChange={(value) => setActive(value as string)}
        className="gap-4"
      >
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => scrollBy(-1)}
            disabled={!canScrollLeft}
            aria-label="Scroll tabs left"
            className="shrink-0"
          >
            <ChevronLeft />
          </Button>

          <div className="relative min-w-0 flex-1">
            <TabsList
              ref={listRef}
              className="tabs-12-scroll relative w-full justify-start overflow-x-auto"
            >
              {categories.map(({ value, name, count }) => (
                <TabsTrigger key={value} value={value} className="flex-none px-3">
                  {name}
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {count}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute inset-y-0 left-0 w-8 rounded-l-lg bg-linear-to-r from-muted to-transparent transition-opacity",
                canScrollLeft ? "opacity-100" : "opacity-0",
              )}
            />
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute inset-y-0 right-0 w-8 rounded-r-lg bg-linear-to-l from-muted to-transparent transition-opacity",
                canScrollRight ? "opacity-100" : "opacity-0",
              )}
            />
          </div>

          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => scrollBy(1)}
            disabled={!canScrollRight}
            aria-label="Scroll tabs right"
            className="shrink-0"
          >
            <ChevronRight />
          </Button>
        </div>

        {categories.map(({ value, name, count }) => (
          <TabsContent
            key={value}
            value={value}
            className="rounded-xl border border-border p-4"
          >
            <p className="font-medium text-foreground">
              {value === "all" ? "All templates" : `${name} templates`}
            </p>
            <p className="mt-1 text-muted-foreground">
              Showing {count} ready-to-use templates
              {value === "all" ? " across every category" : ` for ${name.toLowerCase()} teams`}.
            </p>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ScrollableTabsDemo;
