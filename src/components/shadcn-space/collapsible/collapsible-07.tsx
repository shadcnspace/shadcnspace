"use client";

import { ChevronDown, ShoppingBag } from "lucide-react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const items = [
  { name: "Everyday tote", variant: "Sand, Large", qty: 1, price: 68, color: "bg-amber-300/40" },
  { name: "Linen shirt", variant: "Sky, M", qty: 2, price: 42, color: "bg-sky-400/30" },
  { name: "Canvas sneakers", variant: "Teal, 42", qty: 1, price: 85, color: "bg-teal-400/30" },
];

const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);
const shipping = 0;
const tax = Math.round(subtotal * 0.08 * 100) / 100;
const total = subtotal + shipping + tax;

const money = (value: number) => `$${value.toFixed(2)}`;

const CollapsibleDemo = () => {
  return (
    <Collapsible className="w-full max-w-sm overflow-hidden rounded-lg border border-border bg-background">
      <CollapsibleTrigger className="group flex w-full items-center gap-2 bg-muted/40 px-4 py-3 text-left text-sm transition-colors hover:bg-muted/70 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring">
        <ShoppingBag className="size-4 text-muted-foreground" aria-hidden="true" />
        <span className="flex-1 font-medium text-foreground">
          <span className="group-data-panel-open:hidden">Show order summary</span>
          <span className="hidden group-data-panel-open:inline">Hide order summary</span>
        </span>
        <ChevronDown
          className="size-4 text-muted-foreground transition-transform group-data-panel-open:rotate-180 motion-reduce:transition-none"
          aria-hidden="true"
        />
        <span className="font-semibold text-foreground tabular-nums">{money(total)}</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-all duration-200 data-ending-style:h-0 data-starting-style:h-0 motion-reduce:transition-none">
        <div className="flex flex-col gap-4 border-t border-border p-4">
          <ul className="flex flex-col gap-3">
            {items.map((item) => (
              <li key={item.name} className="flex items-center gap-3">
                <span className={`relative size-12 shrink-0 rounded-md ${item.color}`} aria-hidden="true">
                  <span className="absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-foreground text-xs text-background tabular-nums">
                    {item.qty}
                  </span>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm text-foreground">{item.name}</span>
                  <span className="block text-xs text-muted-foreground">
                    {item.variant}
                    <span className="sr-only">, quantity {item.qty}</span>
                  </span>
                </span>
                <span className="text-sm text-foreground tabular-nums">{money(item.qty * item.price)}</span>
              </li>
            ))}
          </ul>
          <dl className="flex flex-col gap-1.5 border-t border-border pt-3 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <dt>Subtotal</dt>
              <dd className="tabular-nums">{money(subtotal)}</dd>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <dt>Shipping</dt>
              <dd>{shipping === 0 ? "Free" : money(shipping)}</dd>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <dt>Estimated tax</dt>
              <dd className="tabular-nums">{money(tax)}</dd>
            </div>
            <div className="flex justify-between pt-1.5 font-medium text-foreground">
              <dt>Total</dt>
              <dd className="tabular-nums">{money(total)}</dd>
            </div>
          </dl>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleDemo;
