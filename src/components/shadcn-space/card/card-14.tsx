"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const colors = [
  { label: "Green", bg: "bg-green-500" },
  { label: "White", bg: "bg-stone-100" },
  { label: "Black", bg: "bg-neutral-900" },
];

const sizes = ["7", "8", "9", "10"];

const getDeliveryDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 3); // Delivery in 3 days
  const day = date.getDate();
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()];
  const suffix = ["th", "st", "nd", "rd"][
    day % 10 > 3 ? 0 : (day % 100 - day % 10 !== 10 ? day % 10 : 0)
  ];
  return `${day}${suffix} ${month}`;
};


export default function EcommerceProductCard() {
  const [activeColor, setActiveColor] = useState(0);
  const [activeSize, setActiveSize] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [inBag, setInBag] = useState(false);

  return (
    <div className="flex items-center justify-center p-8 w-full bg-background min-h-screen">
      <Card className="w-80 rounded-2xl overflow-hidden p-0 gap-0  group/card">

        {/* ── Image zone ── */}
        <div className="relative overflow-hidden h-80">
          <Image
            src="https://images.shadcnspace.com/assets/card/running-shoe-3d.png"
            fill
            className="object-contain drop-shadow-2xl px-8 py-6 transition-transform duration-500 ease-out group-hover/card:scale-105"
            alt="Nike Air Max Pulse"
            unoptimized
          />

          {/* Discount badge — always visible */}
          <span className="absolute top-3 left-3 text-xs tracking-widest font-bold uppercase bg-foreground text-background px-2.5 py-1 rounded-sm select-none">
            −21%
          </span>

          {/* Wishlist — always visible top-right */}
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            title="Wishlist"
            className={cn(
              "absolute top-3 right-3 h-8 w-8 rounded-full border shadow-sm flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95",
              isWishlisted
                ? "bg-rose-50 border-rose-200 dark:bg-rose-950 dark:border-rose-800"
                : "bg-background"
            )}
          >
            <Heart
              className={cn(
                "w-3.5 h-3.5 transition-colors",
                isWishlisted ? "fill-rose-500 text-rose-500" : "text-muted-foreground"
              )}
            />
          </button>
        </div>

        {/* Info zone */}
        <CardContent className="px-4 pt-4 pb-4 space-y-1.5">
          {/* Brand + name */}
          <div className="min-w-0">
            <h3 className="text-base font-bold text-foreground truncate">
              Nike
            </h3>
            <p className="text-sm text-muted-foreground truncate">
              Air Max Pulse Running Shoes
            </p>
          </div>

          {/* Price & Discount */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-green-600 dark:text-green-500 font-semibold text-sm">↓21%</span>
            <span className="text-muted-foreground line-through text-sm">$150</span>
            <span className="text-foreground font-bold text-base">$119</span>
          </div>


          {/* Delivery */}
          <div className="text-xs text-muted-foreground font-medium">
            Delivery by <span suppressHydrationWarning className="text-foreground font-bold">{getDeliveryDate()}</span>
          </div>

          {/* Size selector */}
          <div className="flex gap-1.5 pt-2">
            {sizes.map((s, i) => (
              <button
                key={s}
                onClick={() => setActiveSize(i)}
                className={cn(
                  "flex-1 h-7 rounded-lg text-sm font-medium border transition-all duration-150",
                  activeSize === i
                    ? "bg-foreground text-background border-foreground"
                    : "text-muted-foreground hover:border-foreground/50 hover:text-foreground"
                )}
              >
                US {s}
              </button>
            ))}
          </div>
        </CardContent>

        {/* Action zone — always visible */}
        <CardFooter className="px-4 pb-6 gap-2 bg-transparent border-t-0">
          {/* Bag toggle icon button */}
          <button
            onClick={() => setInBag(!inBag)}
            title={inBag ? "Remove from bag" : "Add to bag"}
            className={cn(
              "h-12 w-12 shrink-0 rounded-xl border flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95",
              inBag
                ? "bg-foreground text-background border-foreground"
                : "bg-background text-muted-foreground hover:border-foreground/50 hover:text-foreground"
            )}
          >
            <ShoppingBag className="w-5 h-5" />
          </button>

          {/* Buy Now — button-17 ripple style */}
          <Button className="relative overflow-hidden group/btn flex-1 h-12 rounded-xl font-semibold text-base cursor-pointer border border-primary transition-all flex items-center justify-center gap-2">
            <span className="absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-950 rounded-full scale-0 transition-transform duration-700 ease-in-out group-hover/btn:scale-[20]" />
            <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-gray-950 dark:group-hover/btn:text-white">
              Buy Now
            </span>
          </Button>
        </CardFooter>

      </Card>
    </div>
  );
}
