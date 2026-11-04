"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, ChevronUp, SlidersHorizontal, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  inStock: boolean;
  onSale: boolean;
};

const PRODUCTS: Product[] = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 129, rating: 4.6, inStock: true, onSale: true },
  { id: 2, name: "Smart Watch Series 9", category: "Electronics", price: 399, rating: 4.8, inStock: true, onSale: false },
  { id: 3, name: "Mechanical Keyboard", category: "Electronics", price: 89, rating: 4.4, inStock: false, onSale: false },
  { id: 4, name: "Classic Beige Jacket", category: "Fashion", price: 79, rating: 4.2, inStock: true, onSale: true },
  { id: 5, name: "Linen Shirt", category: "Fashion", price: 49, rating: 3.9, inStock: true, onSale: false },
  { id: 6, name: "Leather Backpack", category: "Fashion", price: 159, rating: 4.7, inStock: false, onSale: true },
  { id: 7, name: "Ceramic Table Lamp", category: "Home", price: 59, rating: 4.3, inStock: true, onSale: false },
  { id: 8, name: "Velvet Sofa", category: "Home", price: 899, rating: 4.9, inStock: true, onSale: true },
  { id: 9, name: "Vitamin C Serum", category: "Beauty", price: 24, rating: 4.5, inStock: true, onSale: true },
  { id: 10, name: "Perfume Set", category: "Beauty", price: 110, rating: 4.1, inStock: false, onSale: false },
  { id: 11, name: "Running Shoes", category: "Sports", price: 74, rating: 4.4, inStock: true, onSale: false },
  { id: 12, name: "Yoga Mat", category: "Sports", price: 29, rating: 3.7, inStock: true, onSale: true },
];

const CATEGORIES = ["Electronics", "Fashion", "Home", "Beauty", "Sports"];

const RATINGS = [
  { value: 0, label: "Any" },
  { value: 3, label: "3+" },
  { value: 4, label: "4+" },
  { value: 4.5, label: "4.5+" },
];

const PRICE_MIN = 0;
const PRICE_MAX = 1000;

const SPRING = { type: "spring", bounce: 0.2, duration: 0.5 } as const;

const money = (value: number) => `$${value}`;

type Props = {
  defaultOpen?: boolean;
};

const DropdownMenu09 = ({ defaultOpen = false }: Props) => {
  const [open, setOpen] = useState(defaultOpen);
  const [categories, setCategories] = useState<string[]>([]);
  const [price, setPrice] = useState<number[]>([PRICE_MIN, PRICE_MAX]);
  const [rating, setRating] = useState(0);
  const [inStock, setInStock] = useState(false);
  const [onSale, setOnSale] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const matches = PRODUCTS.filter(
    (product) =>
      (categories.length === 0 || categories.includes(product.category)) &&
      product.price >= price[0] &&
      product.price <= price[1] &&
      product.rating >= rating &&
      (!inStock || product.inStock) &&
      (!onSale || product.onSale),
  );

  const priceChanged = price[0] !== PRICE_MIN || price[1] !== PRICE_MAX;
  const activeCount =
    categories.length +
    (priceChanged ? 1 : 0) +
    (rating > 0 ? 1 : 0) +
    (inStock ? 1 : 0) +
    (onSale ? 1 : 0);

  const toggleCategory = (name: string) => {
    setCategories((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name],
    );
  };

  const reset = () => {
    setCategories([]);
    setPrice([PRICE_MIN, PRICE_MAX]);
    setRating(0);
    setInStock(false);
    setOnSale(false);
  };

  return (
    <div className="flex w-full items-start justify-center px-4">
      <div className="flex w-full max-w-sm justify-center">
        <div
          style={{ borderRadius: open ? 24 : 9999 }}
          className={cn(
            "relative overflow-hidden border border-border",
            open ? "w-full" : "w-50",
          )}
        >
          {!open ? (
              <div key="trigger">
                <Button
                  variant="ghost"
                  aria-expanded={open}
                  onClick={() => setOpen(true)}
                  className="h-auto w-full justify-between gap-3 rounded-full px-4 py-2.5 hover:bg-transparent dark:hover:bg-transparent cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <SlidersHorizontal className="size-4" />
                    <span className="text-sm font-semibold">Filters</span>
                  </span>
                  <span className="flex items-center gap-2">
                    {activeCount > 0 && <Badge>{activeCount}</Badge>}
                    <ChevronDown className="size-4 text-muted-foreground" />
                  </span>
                </Button>
              </div>
            ) : (
              <div key="content">
                <div className="flex items-center justify-between gap-2 px-4 py-3 sm:px-5">
                  <div className="flex items-center gap-2">
                    <p className="text-base font-semibold text-foreground">
                      Filters
                    </p>
                    {activeCount > 0 && <Badge>{activeCount}</Badge>}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    <ChevronUp className="size-4" />
                    <span className="sr-only">Close filters</span>
                  </Button>
                </div>

                <Separator />

                <ScrollArea className="**:data-[slot=scroll-area-viewport]:max-h-80">
                  <div className="flex flex-col gap-5 p-4 sm:p-5">
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ...SPRING, delay: 0.05 }}
                      className="flex flex-col gap-4"
                    >
                      <div className="flex items-center justify-between">
                        <Label>Price range</Label>
                        <span className="text-sm tabular-nums text-muted-foreground">
                          {money(price[0])} - {money(price[1])}
                        </span>
                      </div>
                      <Slider
                        min={PRICE_MIN}
                        max={PRICE_MAX}
                        step={10}
                        value={price}
                        className="**:data-[slot=slider-thumb]:cursor-pointer"
                        onValueChange={(value) =>
                          setPrice(
                            typeof value === "number"
                              ? price
                              : [value[0], value[1]],
                          )
                        }
                      />
                    </motion.div>

                    <Separator />

                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ...SPRING, delay: 0.1 }}
                      className="flex flex-col gap-3"
                    >
                      <Label>Category</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {CATEGORIES.map((name) => {
                          const checked = categories.includes(name);
                          const count = PRODUCTS.filter(
                            (product) => product.category === name,
                          ).length;
                          return (
                            <div
                              key={name}
                              className={cn(
                                "flex items-center gap-2 rounded-lg border border-border px-3 transition-colors",
                                checked && " bg-accent",
                              )}
                            >
                              <Checkbox
                                id={`filter-${name}`}
                                checked={checked}
                                onCheckedChange={() => toggleCategory(name)}
                                className="cursor-pointer"
                              />
                              <Label
                                htmlFor={`filter-${name}`}
                                className="flex-1 cursor-pointer justify-between py-2.5"
                              >
                                {name}
                                <span className="text-xs font-normal text-muted-foreground">
                                  {count}
                                </span>
                              </Label>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>

                    <Separator />

                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ...SPRING, delay: 0.15 }}
                      className="flex flex-col gap-3"
                    >
                      <Label>Rating</Label>
                      <div className="flex flex-wrap gap-2">
                        {RATINGS.map((item) => (
                          <Button
                            key={item.value}
                            variant={rating === item.value ? "default" : "outline"}
                            size="sm"
                            className="rounded-full cursor-pointer"
                            onClick={() => setRating(item.value)}
                          >
                            {item.value > 0 && (
                              <Star className="size-3.5" />
                            )}
                            <span className="leading-none">{item.label}</span>
                          </Button>
                        ))}
                      </div>
                    </motion.div>

                    <Separator />

                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ...SPRING, delay: 0.2 }}
                      className="flex flex-col gap-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex flex-col gap-1">
                          <Label htmlFor="filter-in-stock">In stock only</Label>
                          <span className="text-xs text-muted-foreground">
                            Hide sold-out items
                          </span>
                        </div>
                        <Switch
                          id="filter-in-stock"
                          checked={inStock}
                          onCheckedChange={setInStock}
                          className="cursor-pointer"
                        />
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex flex-col gap-1">
                          <Label htmlFor="filter-on-sale">On sale</Label>
                          <span className="text-xs text-muted-foreground">
                            Show discounted products
                          </span>
                        </div>
                        <Switch
                          id="filter-on-sale"
                          checked={onSale}
                          onCheckedChange={setOnSale}
                          className="cursor-pointer"
                        />
                      </div>
                    </motion.div>
                  </div>
                </ScrollArea>

                <Separator />

                <div className="flex items-center gap-2 p-3 sm:px-5">
                  <Button
                    variant="outline"
                    className="rounded-full cursor-pointer"
                    disabled={activeCount === 0}
                    onClick={reset}
                  >
                    Reset
                  </Button>
                  <Button
                    className="flex-1 rounded-full cursor-pointer"
                    disabled={matches.length === 0}
                    onClick={() => setOpen(false)}
                  >
                    {matches.length === 0 ? (
                      "No results"
                    ) : (
                      <span className="flex items-center gap-1">
                        Show
                        <span className="relative inline-flex overflow-hidden">
                          <AnimatePresence mode="popLayout" initial={false}>
                            <motion.span
                              key={matches.length}
                              initial={{ y: -12, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: 12, opacity: 0 }}
                              transition={{ duration: 0.15 }}
                            >
                              {matches.length}
                            </motion.span>
                          </AnimatePresence>
                        </span>
                        {matches.length === 1 ? "result" : "results"}
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu09;
