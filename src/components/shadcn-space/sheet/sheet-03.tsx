"use client";

import { useState } from "react";
import { ShoppingCartIcon, PlusIcon, MinusIcon, Trash2Icon } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const initialItems = [
  {
    id: 1,
    name: "Apple Watch S9",
    variant: "Midnight / 41mm",
    price: 684.0,
    qty: 1,
    image: "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-03-1.webp",
  },
  {
    id: 2,
    name: "Beige Jacket",
    variant: "Size M / Beige",
    price: 479.0,
    qty: 1,
    image: "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-02-2.webp",
  },
  {
    id: 3,
    name: "Glow Serum",
    variant: "30ml / Vitamin C",
    price: 46.0,
    qty: 2,
    image: "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-03-3.webp",
  },
];

const ShoppingCartDemo = () => {
  const [items, setItems] = useState(initialItems);

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => item.id === id ? { ...item, qty: item.qty + delta } : item)
        .filter((item) => item.qty > 0)
    );
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalCount = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" size="icon" className="relative cursor-pointer" />}>
        <ShoppingCartIcon size={18} />
        {totalCount > 0 && (
          <Badge className="absolute -top-2 -right-2 size-5 justify-center rounded-full p-0 text-[10px]">
            {totalCount}
          </Badge>
        )}
      </SheetTrigger>

      <SheetContent side="right" className="flex flex-col p-0 gap-0">
        <SheetHeader className="px-4 pt-5 pb-4 border-b">
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            {totalCount > 0
              ? `${totalCount} item${totalCount > 1 ? "s" : ""} in your cart`
              : "Your cart is empty"}
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3">
          {items.map((item) => (
            <div key={item.id} className="flex items-start gap-3">
              <div className="size-16 rounded-lg bg-muted shrink-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="size-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium leading-snug truncate">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.variant}</p>
                <p className="text-sm font-semibold mt-1">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0">
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="text-muted-foreground hover:text-destructive hover:bg-destructive/10! cursor-pointer"
                  onClick={() => updateQty(item.id, -item.qty)}
                >
                  <Trash2Icon size={14} />
                </Button>
                <ButtonGroup>
                  <Button
                    variant="outline"
                    size="icon-sm"
                    className="cursor-pointer"
                    onClick={() => updateQty(item.id, -1)}
                  >
                    <MinusIcon />
                  </Button>
                  <ButtonGroupText className="px-2 text-sm min-w-7 justify-center">
                    {item.qty}
                  </ButtonGroupText>
                  <Button
                    variant="outline"
                    size="icon-sm"
                    className="cursor-pointer"
                    onClick={() => updateQty(item.id, 1)}
                  >
                    <PlusIcon />
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          ))}
        </div>

        <SheetFooter className="flex flex-col gap-3 px-4 pt-3 pb-5 border-t">
          <div className="flex flex-col gap-1.5 w-full">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Shipping</span>
              <span className="text-teal-400">Free</span>
            </div>
            <Separator className="my-1" />
            <div className="flex justify-between text-sm font-semibold">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>
          <Button className="w-full cursor-pointer hover:bg-primary/80">
            Checkout
          </Button>
          <SheetClose render={<Button variant="outline" className="w-full cursor-pointer" />}>
            Continue Shopping
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default ShoppingCartDemo

