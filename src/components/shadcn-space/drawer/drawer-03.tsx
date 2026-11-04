"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, XIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

type Filters = {
  categories: string[];
  price: [number, number];
  inStock: boolean;
};

const CATEGORIES = ["Headphones", "Speakers", "Keyboards", "Monitors", "Accessories"];
const PRICE_MIN = 0;
const PRICE_MAX = 500;
const DEFAULTS: Filters = { categories: [], price: [PRICE_MIN, PRICE_MAX], inStock: false };

// Demo catalog so the result count reacts to the filters.
const products = Array.from({ length: 48 }, (_, index) => ({
  category: CATEGORIES[index % CATEGORIES.length],
  price: (index * 37) % PRICE_MAX + 15,
  inStock: index % 4 !== 0,
}));

const countResults = (filters: Filters) =>
  products.filter(
    (product) =>
      (!filters.categories.length || filters.categories.includes(product.category)) &&
      product.price >= filters.price[0] &&
      product.price <= filters.price[1] &&
      (!filters.inStock || product.inStock),
  ).length;

const activeCount = (filters: Filters) =>
  filters.categories.length +
  (filters.price[0] !== PRICE_MIN || filters.price[1] !== PRICE_MAX ? 1 : 0) +
  (filters.inStock ? 1 : 0);

const DrawerDemo = () => {
  const [open, setOpen] = useState(false);
  const [applied, setApplied] = useState<Filters>(DEFAULTS);
  const [draft, setDraft] = useState<Filters>(DEFAULTS);

  const results = useMemo(() => countResults(draft), [draft]);
  const appliedCount = activeCount(applied);

  const toggleCategory = (category: string, checked: boolean) =>
    setDraft((current) => ({
      ...current,
      categories: checked
        ? [...current.categories, category]
        : current.categories.filter((item) => item !== category),
    }));

  return (
    <Drawer
      swipeDirection="left"
      open={open}
      onOpenChange={(next) => {
        if (next) setDraft(applied);
        setOpen(next);
      }}
    >
      <DrawerTrigger
        render={
          <Button variant="outline">
            <SlidersHorizontal />
            Filters
            {appliedCount > 0 && (
              <Badge className="ml-0.5 h-5 min-w-5 rounded-full px-1.5 tabular-nums">
                {appliedCount}
              </Badge>
            )}
          </Button>
        }
      />
      <DrawerContent>
        <DrawerHeader className="flex-row items-start justify-between gap-2 border-b border-border pb-4 text-left">
          <div className="flex flex-col gap-0.5">
            <DrawerTitle>Filters</DrawerTitle>
            <DrawerDescription>Narrow down the product list.</DrawerDescription>
          </div>
          <DrawerClose
            render={
              <Button variant="ghost" size="icon-sm" aria-label="Close filters">
                <XIcon />
              </Button>
            }
          />
        </DrawerHeader>

        <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-4">
          <fieldset className="flex flex-col gap-3">
            <legend className="mb-3 text-sm font-medium text-foreground">Category</legend>
            {CATEGORIES.map((category) => (
              <Label key={category} className="font-normal">
                <Checkbox
                  checked={draft.categories.includes(category)}
                  onCheckedChange={(checked) => toggleCategory(category, checked)}
                />
                {category}
              </Label>
            ))}
          </fieldset>

          <Separator />

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-foreground" id="price-label">Price</p>
              <p className="text-sm text-muted-foreground tabular-nums">
                ${draft.price[0]} - ${draft.price[1]}
              </p>
            </div>
            <Slider
              aria-labelledby="price-label"
              min={PRICE_MIN}
              max={PRICE_MAX}
              step={10}
              minStepsBetweenValues={1}
              value={draft.price}
              onValueChange={(value) =>
                setDraft((current) => ({ ...current, price: value as [number, number] }))
              }
            />
          </div>

          <Separator />

          <Label className="justify-between font-normal">
            <span className="flex flex-col gap-0.5">
              <span className="font-medium text-foreground">In stock only</span>
              <span className="text-xs text-muted-foreground">Hide items that are sold out</span>
            </span>
            <Switch
              checked={draft.inStock}
              onCheckedChange={(checked) => setDraft((current) => ({ ...current, inStock: checked }))}
            />
          </Label>
        </div>

        <DrawerFooter className="flex-row border-t border-border pt-4">
          <Button
            variant="outline"
            className="flex-1"
            disabled={activeCount(draft) === 0}
            onClick={() => setDraft(DEFAULTS)}
          >
            Reset
          </Button>
          <Button
            className="flex-1"
            disabled={results === 0}
            onClick={() => {
              setApplied(draft);
              setOpen(false);
            }}
          >
            {results === 0 ? "No results" : `Show ${results} results`}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerDemo;
