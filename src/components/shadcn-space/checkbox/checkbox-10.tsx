"use client";

import { useState } from "react";
import { Database, Globe, HardDrive, ShieldCheck } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const addons = [
  { id: "domain", name: "Custom domain", description: "Use your own domain with free SSL.", price: 5, icon: Globe, color: "bg-blue-500/15 text-blue-500" },
  { id: "backups", name: "Daily backups", description: "30 days of point in time restore.", price: 9, icon: HardDrive, color: "bg-teal-400/15 text-teal-400" },
  { id: "database", name: "Managed database", description: "Postgres with 10 GB storage.", price: 15, icon: Database, color: "bg-orange-400/15 text-orange-400" },
  { id: "security", name: "Advanced security", description: "WAF, DDoS protection, and audit logs.", price: 19, icon: ShieldCheck, color: "bg-sky-400/15 text-sky-400" },
];

const BASE_PRICE = 20;

const CheckboxDemo = () => {
  const [selected, setSelected] = useState<string[]>(["domain"]);
  const total = BASE_PRICE + addons.filter((addon) => selected.includes(addon.id)).reduce((sum, addon) => sum + addon.price, 0);

  const toggle = (id: string, checked: boolean) =>
    setSelected((current) => (checked ? [...current, id] : current.filter((item) => item !== id)));

  return (
    <fieldset className="flex w-full max-w-md flex-col gap-3">
      <legend className="mb-3 text-sm font-medium text-foreground">Add-ons</legend>
      {addons.map((addon) => {
        const checked = selected.includes(addon.id);
        return (
          <label
            key={addon.id}
            className={cn(
              "flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition-colors has-focus-visible:ring-2 has-focus-visible:ring-ring",
              checked ? "border-foreground/30 bg-muted/40" : "border-border hover:bg-muted/30",
            )}
          >
            <span className={cn("flex size-9 shrink-0 items-center justify-center rounded-md", addon.color)}>
              <addon.icon className="size-4" />
            </span>
            <span className="flex min-w-0 flex-1 flex-col gap-0.5">
              <span className="text-sm font-medium text-foreground">{addon.name}</span>
              <span className="text-xs text-muted-foreground">{addon.description}</span>
            </span>
            <span className="text-sm text-foreground tabular-nums">+${addon.price}/mo</span>
            <Checkbox checked={checked} onCheckedChange={(value) => toggle(addon.id, value)} className="mt-0.5" />
          </label>
        );
      })}
      <div className="mt-1 flex items-center justify-between border-t border-border pt-3 text-sm">
        <span className="text-muted-foreground">
          Pro plan + {selected.length} {selected.length === 1 ? "add-on" : "add-ons"}
        </span>
        <span className="font-medium text-foreground tabular-nums" aria-live="polite">
          ${total}/mo
        </span>
      </div>
    </fieldset>
  );
};

export default CheckboxDemo;
