"use client";

import { useState } from "react";
import {
  Bike,
  Check,
  ChefHat,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Package,
  Phone,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const PEEK = "176px";
const HALF = 0.55;
const FULL = 1;
const snapPoints = [PEEK, HALF, FULL];

const steps = [
  { label: "Order confirmed", time: "7:42 PM", icon: Check, done: true },
  { label: "Preparing your food", time: "7:45 PM", icon: ChefHat, done: true },
  { label: "Out for delivery", time: "7:58 PM", icon: Bike, done: true },
  { label: "Delivered", time: "ETA 8:10 PM", icon: Package, done: false },
];

const items = [
  { name: "Margherita pizza", qty: 1, price: 14.5 },
  { name: "Caesar salad", qty: 1, price: 9 },
  { name: "Lemonade", qty: 2, price: 3.5 },
];

const DrawerDemo = () => {
  const [snap, setSnap] = useState<(typeof snapPoints)[number] | null>(PEEK);
  const expanded = snap !== PEEK;
  const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <Drawer
      showSwipeHandle
      snapPoints={snapPoints}
      snapPoint={snap}
      onSnapPointChange={(point) => setSnap(point as (typeof snapPoints)[number] | null)}
      onOpenChange={(open) => open && setSnap(PEEK)}
    >
      <DrawerTrigger render={<Button variant="outline">Track order</Button>} />
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-md flex-1 flex-col overflow-y-auto">
          <DrawerHeader className="gap-3 text-left">
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col gap-0.5">
                <DrawerTitle className="text-lg">Arriving in 12 min</DrawerTitle>
                <DrawerDescription>Your rider is 1.8 km away</DrawerDescription>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSnap(expanded ? PEEK : FULL)}
                aria-expanded={expanded}
              >
                {expanded ? <ChevronDown /> : <ChevronUp />}
                {expanded ? "Less" : "Details"}
              </Button>
            </div>
            <Progress value={75} aria-label="Delivery progress" />
          </DrawerHeader>

          <div className="flex flex-col gap-6 p-4">
            <div className="flex items-center gap-3 rounded-lg border border-border p-3">
              <Avatar className="size-10">
                <AvatarFallback className="bg-teal-400/20 font-medium text-foreground">DS</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground">Daniel S.</p>
                <p className="text-xs text-muted-foreground">Blue scooter, KA 01 4821</p>
              </div>
              <Button variant="outline" size="icon" aria-label="Message rider">
                <MessageSquare />
              </Button>
              <Button variant="outline" size="icon" aria-label="Call rider">
                <Phone />
              </Button>
            </div>

            <ol className="flex flex-col">
              {steps.map((step, index) => (
                <li key={step.label} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <span
                      className={cn(
                        "flex size-7 shrink-0 items-center justify-center rounded-full border",
                        step.done
                          ? "border-teal-400 bg-teal-400 text-gray-950"
                          : "border-border bg-background text-muted-foreground",
                      )}
                    >
                      <step.icon className="size-3.5" />
                    </span>
                    {index < steps.length - 1 && (
                      <span className={cn("w-px flex-1", step.done ? "bg-teal-400" : "bg-border")} />
                    )}
                  </div>
                  <div className="flex flex-1 items-start justify-between gap-2 pb-5">
                    <p className={cn("text-sm", step.done ? "text-foreground" : "text-muted-foreground")}>
                      {step.label}
                    </p>
                    <p className="text-xs text-muted-foreground tabular-nums">{step.time}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-foreground">Order #4821</p>
              <ul className="flex flex-col gap-1.5 text-sm">
                {items.map((item) => (
                  <li key={item.name} className="flex justify-between text-muted-foreground">
                    <span>
                      {item.qty} x {item.name}
                    </span>
                    <span className="tabular-nums">${(item.qty * item.price).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between border-t border-border pt-2 text-sm font-medium text-foreground">
                <span>Total</span>
                <span className="tabular-nums">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerDemo;
