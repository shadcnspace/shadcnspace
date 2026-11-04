"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Bookmark,
  ChevronDown,
  MapPin,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Trash2,
  Truck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type CartItem = {
  id: number;
  name: string;
  variant: string;
  seller: string;
  price: number;
  mrp: number;
  qty: number;
  image: string;
};

const IMG = "https://images.shadcnspace.com/assets/ecommerce/product-category";

const INITIAL_ITEMS: CartItem[] = [
  {
    id: 1,
    name: "Apple Watch Series 9",
    variant: "Midnight / 41mm",
    seller: "RetailNet",
    price: 399,
    mrp: 429,
    qty: 1,
    image: `${IMG}/product-category-03-1.webp`,
  },

  {
    id: 2,
    name: "Classic Beige Jacket",
    variant: "Size M / Beige",
    seller: "UrbanThread",
    price: 79,
    mrp: 120,
    qty: 1,
    image: `${IMG}/product-category-02-2.webp`,
  },
  {
    id: 3,
    name: "Glow Vitamin C Serum",
    variant: "30ml",
    seller: "PureSkin Store",
    price: 24,
    mrp: 30,
    qty: 2,
    image: `${IMG}/product-category-03-3.webp`,
  },
];

const FREE_DELIVERY_AT = 600;
const DELIVERY_FEE = 9;

const SPRING = { type: "spring", bounce: 0.2, duration: 0.5 } as const;

const money = (value: number) => `$${value.toFixed(2)}`;
const percentOff = (price: number, mrp: number) =>
  Math.round(((mrp - price) / mrp) * 100);

type Props = {
  defaultOpen?: boolean;
};

const DropdownMenu07 = ({ defaultOpen = false }: Props) => {
  const [open, setOpen] = useState(defaultOpen);
  const [items, setItems] = useState<CartItem[]>(INITIAL_ITEMS);
  const [saved, setSaved] = useState<CartItem[]>([]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const count = items.reduce((sum, item) => sum + item.qty, 0);
  const totalMrp = items.reduce((sum, item) => sum + item.mrp * item.qty, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = totalMrp - totalPrice;
  const freeDelivery = totalPrice >= FREE_DELIVERY_AT;
  const delivery = items.length === 0 || freeDelivery ? 0 : DELIVERY_FEE;
  const total = totalPrice + delivery;
  const remaining = Math.max(FREE_DELIVERY_AT - totalPrice, 0);
  const progress = Math.min((totalPrice / FREE_DELIVERY_AT) * 100, 100);

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item,
        )
        .filter((item) => item.qty > 0),
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const saveForLater = (item: CartItem) => {
    removeItem(item.id);
    setSaved((prev) => [...prev, item]);
  };

  const moveSavedToCart = () => {
    setItems((prev) => [...prev, ...saved]);
    setSaved([]);
  };

  return (
    <div className="flex w-full items-start justify-center px-4">
      <div className="flex w-full max-w-sm justify-center">
        <div
          style={{ borderRadius: open ? 24 : 9999 }}
          className={cn(
            "relative overflow-hidden border border-border",
            open ? "w-full" : "w-64",
          )}
        >
          {!open ? (
              /* ── Trigger ── */
              <div key="trigger">
                <Button
                  variant="ghost"
                  aria-expanded={open}
                  onClick={() => setOpen(true)}
                  className="h-auto w-full justify-between gap-3 rounded-full px-3 py-2 cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="relative flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <ShoppingCart className="size-4" />
                      <AnimatePresence>
                        {count > 0 && (
                          <motion.span
                            key={count}
                            initial={{ scale: 0.4, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", bounce: 0.5, duration: 0.4 }}
                            className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-orange-500 text-xs  text-white"
                          >
                            {count}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                    <span className="text-sm font-semibold">My Cart</span>
                  </span>
                  <ChevronDown className="size-4 text-muted-foreground" />
                </Button>
              </div>
            ) : (
              /* ── Cart panel ── */
              <div key="content">
                {/* Header */}
                <div className="flex items-center justify-between gap-2 px-4 py-3 sm:px-5">
                  <div className="flex items-center gap-2">
                    <p className="text-base font-semibold text-popover-foreground">
                      My Cart
                    </p>
                    <Badge>
                      {count}
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setOpen(false)}
                    className="cursor-pointer"
                  >
                    <ChevronDown className="size-4 rotate-180" />
                    <span className="sr-only">Close cart</span>
                  </Button>
                </div>

                {/* Deliver to */}
                <div className="flex items-center justify-between gap-2 border-y border-border px-4 py-2 text-xs sm:px-5">
                  <span className="flex min-w-0 items-center gap-1.5 text-muted-foreground">
                    <MapPin className="size-3.5 shrink-0" />
                    <span className="truncate">
                      Deliver to{" "}
                      <span className="font-semibold text-foreground">
                        Mumbai 400001
                      </span>
                    </span>
                  </span>
                  <Button
                    variant="ghost"
                    className="cursor-pointer"
                  >
                    Change
                  </Button>
                </div>

                {items.length > 0 ? (
                  <>
                    {/* Free delivery progress */}
                    <div className="px-4 pt-3 sm:px-5">
                      <div
                        className={cn(
                          "flex items-center gap-2 text-xs",
                          freeDelivery
                            ? "font-medium text-teal-400"
                            : "text-muted-foreground",
                        )}
                      >
                        <Truck className="size-4 shrink-0" />
                        {freeDelivery ? (
                          <span>Free delivery unlocked</span>
                        ) : (
                          <span>
                            Add{" "}
                            <span className="font-semibold text-foreground">
                              {money(remaining)}
                            </span>{" "}
                            more for FREE delivery
                          </span>
                        )}
                      </div>
                      <Progress
                        value={progress}
                        className="mt-2 **:data-[slot=progress-indicator]:bg-teal-400"
                      />
                    </div>

                    {/* Items */}
                    <ScrollArea className="**:data-[slot=scroll-area-viewport]:max-h-56">
                      <AnimatePresence initial>
                        {items.map((item, index) => (
                          <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -80 }}
                            transition={{ ...SPRING, delay: index * 0.05 }}
                          >
                            <div className="flex gap-3 px-4 py-4 sm:px-5">
                            
                              <img
                                src={item.image}
                                alt={item.name}
                                className="size-20 rounded-xl border border-border object-cover"
                              />
                              <div className="flex min-w-0 flex-1 flex-col gap-1">
                                <p className="truncate text-sm font-medium text-foreground">
                                  {item.name}
                                </p>
                                <p className="truncate text-xs text-muted-foreground">
                                  {item.variant} · Seller: {item.seller}
                                </p>

                                <div className="flex flex-wrap items-baseline gap-x-2">
                                  <span className="text-base font-semibold text-popover-foreground">
                                    {money(item.price)}
                                  </span>
                                  <span className="text-xs text-muted-foreground line-through">
                                    {money(item.mrp)}
                                  </span>
                                  <span className="text-xs font-semibold text-teal-400">
                                    {percentOff(item.price, item.mrp)}% off
                                  </span>
                                </div>

                                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
                                  <ButtonGroup>
                                    <Button
                                      variant="outline"
                                      size="icon-sm"
                                      onClick={() => updateQty(item.id, -1)}
                                      className="cursor-pointer"
                                    >
                                      <Minus />
                                      <span className="sr-only">
                                        Decrease quantity
                                      </span>
                                    </Button>
                                    <ButtonGroupText className="min-w-8 justify-center overflow-hidden bg-transparent px-2 text-sm">
                                      <AnimatePresence mode="popLayout" initial={false}>
                                        <motion.span
                                          key={item.qty}
                                          initial={{ y: -10, opacity: 0 }}
                                          animate={{ y: 0, opacity: 1 }}
                                          exit={{ y: 10, opacity: 0 }}
                                          transition={{ duration: 0.15 }}
                                        >
                                          {item.qty}
                                        </motion.span>
                                      </AnimatePresence>
                                    </ButtonGroupText>
                                    <Button
                                      variant="outline"
                                      size="icon-sm"
                                      onClick={() => updateQty(item.id, 1)}
                                      className="cursor-pointer"
                                    >
                                      <Plus />
                                      <span className="sr-only">
                                        Increase quantity
                                      </span>
                                    </Button>
                                  </ButtonGroup>

                                  <div className="flex items-center gap-1">
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => saveForLater(item)}
                                      className="size-7 cursor-pointer"
                                    >
                                      <Bookmark className="size-4" />
                                      <span className="sr-only">
                                        Save for later
                                      </span>
                                    </Button>
                                    <Button
                                      variant="destructive"
                                      size="icon"
                                      onClick={() => removeItem(item.id)}
                                      className="size-7 cursor-pointer"
                                    >
                                      <Trash2 className="size-4" />
                                      <span className="sr-only">Remove</span>
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {index < items.length - 1 && <Separator />}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </ScrollArea>

                    {/* Saved for later */}
                    <AnimatePresence>
                      {saved.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="flex items-center justify-between gap-2 border-t border-border px-4 py-2 text-xs sm:px-5">
                            <span className="text-muted-foreground">
                              {saved.length} saved for later
                            </span>
                            <Button
                              variant="link"
                              onClick={moveSavedToCart}
                              className="text-xs cursor-pointer"
                            >
                              Move to cart
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Price details */}
                    <div className="flex flex-col gap-1.5 border-t border-border  px-4 py-3 text-sm sm:px-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Price details
                      </p>
                      <div className="flex items-center justify-between">
                        <span>
                          Price ({count} {count === 1 ? "item" : "items"})
                        </span>
                        <span>{money(totalMrp)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Discount</span>
                        <span className="font-medium text-teal-400">
                          −{money(discount)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Delivery charges</span>
                        {delivery === 0 ? (
                          <span className="font-medium text-teal-400">
                            FREE
                          </span>
                        ) : (
                          <span>{money(delivery)}</span>
                        )}
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between text-base font-semibold">
                        <span>Total amount</span>
                        <div className="overflow-hidden">
                          <AnimatePresence mode="popLayout" initial={false}>
                            <motion.span
                              key={total}
                              initial={{ y: -12, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: 12, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="block"
                            >
                              {money(total)}
                            </motion.span>
                          </AnimatePresence>
                        </div>
                      </div>
                      {discount > 0 && (
                        <p className="rounded-md bg-teal-400/10 px-2.5 py-1.5 text-xs font-medium text-teal-400">
                          You will save {money(discount)} on this order
                        </p>
                      )}
                    </div>

                    {/* Checkout */}
                    <div className="flex flex-col gap-2 border-t border-border p-4 sm:px-5">
                      <Button className="h-11 w-full cursor-pointer">
                        Place Order
                        <ArrowRight className="size-4" />
                      </Button>
                      <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                        <ShieldCheck className="size-3.5" />
                        Safe and secure payments
                      </p>
                    </div>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-2 px-6 py-10 text-center"
                  >
                    <span className="flex size-14 items-center justify-center rounded-md bg-muted">
                      <ShoppingBag className="size-6 text-muted-foreground" />
                    </span>
                    <p className="text-sm font-semibold text-foreground">
                      Your cart is empty
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Add items to it now.
                    </p>
                    {saved.length > 0 && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={moveSavedToCart}
                        className="mt-2 cursor-pointer"
                      >
                        Move {saved.length} saved to cart
                      </Button>
                    )}
                  </motion.div>
                )}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu07;
