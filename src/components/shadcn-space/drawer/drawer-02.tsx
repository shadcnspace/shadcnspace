"use client";

import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import {
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  StarIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const FREE_SHIPPING_THRESHOLD = 555;
const SHIPPING_FEE = 9.99;
const TAX_RATE = 0.08;

type CartItem = {
  id: string;
  name: string;
  meta: string[];
  price: number;
  qty: number;
  image: string;
};

const initialCartItems: CartItem[] = [
  {
    id: "linen-jacket",
    name: "Essential Linen Jacket",
    meta: ["Size: M", "Color: Beige"],
    price: 89.0,
    qty: 1,
    image:
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-02-2.webp",
  },
  {
    id: "apple-watch",
    name: "Apple Watch Series 9 [GPS 45mm]",
    meta: ["Color: Starlight"],
    price: 429.0,
    qty: 1,
    image:
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-03-1.webp",
  },
];

const suggestions = [
  {
    id: "space-pro-headphones",
    name: "Space Pro Headphones",
    price: 149,
    rating: 4.6,
    reviews: "1.2k",
    image:
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-03-4.webp",
  },
  {
    id: "glow-serum",
    name: "Glow Serum",
    price: 49,
    rating: 4.8,
    reviews: "3.4k",
    image:
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-03-3.webp",
  },
  {
    id: "space-mini-tote",
    name: "Space Mini Tote",
    price: 65,
    rating: 4.3,
    reviews: "287",
    image:
      "https://images.shadcnspace.com/assets/ecommerce/product-overview/product-overview-02-img-1.webp",
  },
];

const ShoppingCartDrawerDemo = () => {
  const [items, setItems] = useState(initialCartItems);
  const [hasFiredConfetti, setHasFiredConfetti] = useState(false);
  const progressSectionRef = useRef<HTMLDivElement>(null);

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addSuggestion = (suggestion: (typeof suggestions)[number]) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === suggestion.id);
      if (existing) {
        return prev.map((item) =>
          item.id === suggestion.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [
        ...prev,
        {
          id: suggestion.id,
          name: suggestion.name,
          meta: [],
          price: suggestion.price,
          qty: 1,
          image: suggestion.image,
        },
      ];
    });
  };

  const totalCount = items.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shippingFee = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + shippingFee;

  const remainingForFreeShipping = Math.max(
    FREE_SHIPPING_THRESHOLD - subtotal,
    0,
  );
  const shippingProgress = Math.min(
    (subtotal / FREE_SHIPPING_THRESHOLD) * 100,
    100,
  );

  useEffect(() => {
    if (subtotal >= FREE_SHIPPING_THRESHOLD && subtotal > 0) {
      if (!hasFiredConfetti) {
        if (progressSectionRef.current) {
          const rect = progressSectionRef.current.getBoundingClientRect();
          const x = (rect.left + rect.width / 2) / window.innerWidth;
          const y = (rect.top + rect.height / 2) / window.innerHeight;
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { x, y },
          });
        }
        setHasFiredConfetti(true);
      }
    } else {
      setHasFiredConfetti(false);
    }
  }, [subtotal, hasFiredConfetti]);

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger
        render={
          <Button variant="outline" className="cursor-pointer">
            <ShoppingCartIcon className="size-4" />
            View Cart
          </Button>
        }
      />
      <DrawerContent className="[--drawer-inset:0px] [--drawer-bleed-background:transparent] m-0 bg-transparent! border-0! shadow-none! data-[swipe-axis=x]:[--drawer-content-width:100%] data-[swipe-axis=x]:sm:[--drawer-content-width:39.125rem] **:data-[slot=drawer-content]:m-4 **:data-[slot=drawer-content]:bg-popover **:data-[slot=drawer-content]:text-popover-foreground **:data-[slot=drawer-content]:border **:data-[slot=drawer-content]:shadow-2xl **:data-[slot=drawer-content]:rounded-2xl **:data-[slot=drawer-content]:w-full">
        <DrawerHeader className="flex-row items-center justify-between gap-0 border-b p-6">
          <div className="flex items-center gap-3">
            <ShoppingBagIcon className="size-5" />
            <DrawerTitle className="text-xl font-medium">
              {totalCount} Items
            </DrawerTitle>
          </div>
          <DrawerClose
            render={
              <Button variant="ghost" size="icon-sm" className="cursor-pointer">
                <XIcon className="size-5" />
              </Button>
            }
          />
        </DrawerHeader>

        <div
          ref={progressSectionRef}
          className="flex flex-col items-center gap-4 border-b px-10 py-6 text-center"
        >
          <p className="text-base font-medium">
            {remainingForFreeShipping > 0
              ? `Spend another $${remainingForFreeShipping.toFixed(2)} and get free shipping!`
              : "You've unlocked free shipping!"}
          </p>
          <Progress
            value={shippingProgress}
            className="w-full [&>div]:h-2 **:data-[slot=progress-track]:bg-primary/10"
          />
        </div>

        <ScrollArea className="flex-1 min-h-0">
          <div className="flex flex-col gap-8 p-6">
            <div className="flex flex-col gap-6">
              {items.map((item, index) => (
                <div key={item.id} className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="size-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 min-w-0 items-start gap-5">
                      <div className="flex flex-1 min-w-0 flex-col justify-center gap-4">
                        <div className="flex flex-col gap-0.5">
                          <p className="truncate text-base">{item.name}</p>
                          {item.meta.map((line) => (
                            <p
                              key={line}
                              className="text-sm text-muted-foreground"
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                        <div className="flex items-center gap-3">
                          <ButtonGroup>
                            <Button
                              variant="outline"
                              size="icon-sm"
                              className="cursor-pointer shadow-xs"
                              onClick={() => updateQty(item.id, -1)}
                            >
                              <MinusIcon />
                            </Button>
                            <ButtonGroupText className="min-w-9 justify-center px-2 text-sm">
                              {String(item.qty).padStart(2, "0")}
                            </ButtonGroupText>
                            <Button
                              variant="outline"
                              size="icon-sm"
                              className="cursor-pointer shadow-xs"
                              onClick={() => updateQty(item.id, 1)}
                            >
                              <PlusIcon />
                            </Button>
                          </ButtonGroup>
                          <Button
                            variant="outline"
                            size="icon-sm"
                            className="cursor-pointer text-muted-foreground shadow-xs hover:text-destructive"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2Icon />
                          </Button>
                        </div>
                      </div>
                      <p className="shrink-0 text-lg font-medium">
                        ${(item.price * item.qty).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  {index !== items.length - 1 && <Separator />}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-base font-medium">You May Also Like</p>
              <ScrollArea>
                <div className="flex gap-4 pb-3">
                  {suggestions.map((suggestion) => (
                    <div
                      key={suggestion.id}
                      className="w-52.75 shrink-0 overflow-hidden rounded-2xl border"
                    >
                      <div className="relative h-42.5 w-full border-b bg-muted">
                        <img
                          src={suggestion.image}
                          alt={suggestion.name}
                          className="size-full object-cover"
                        />
                        <Button
                          size="icon-sm"
                          className="absolute top-3 right-3 size-9 cursor-pointer rounded-full bg-gray-950 text-white hover:bg-gray-950/80"
                          onClick={() => addSuggestion(suggestion)}
                        >
                          <PlusIcon />
                        </Button>
                      </div>
                      <div className="flex flex-col gap-2 p-4">
                        <p className="text-base font-medium">
                          {suggestion.name}
                        </p>
                        <div className="flex items-center gap-1.5 text-sm">
                          <StarIcon className="size-4 fill-amber-400 text-amber-400" />
                          <span>{suggestion.rating}</span>
                          <span className="text-muted-foreground">
                            ({suggestion.reviews})
                          </span>
                        </div>
                        <p className="text-lg font-medium">
                          ${suggestion.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>

            <div className="flex flex-col gap-3 text-base text-muted-foreground">
              <div className="flex items-center gap-4">
                <p className="flex-1">Subtotal ({totalCount} items)</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="flex-1">Shipping</p>
                <p>
                  {shippingFee > 0 ? `$${shippingFee.toFixed(2)}` : "Free"}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="flex-1">Tax</p>
                <p>${tax.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </ScrollArea>

        <DrawerFooter className="border-t p-6">
          <Button className="h-12 w-full cursor-pointer hover:bg-primary/80">
            Checkout ${total.toFixed(2)}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ShoppingCartDrawerDemo;
