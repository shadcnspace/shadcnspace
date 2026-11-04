"use client";

import { CalendarDaysIcon, XIcon } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import "@/components/shadcn-space/dialog/dialog-07.css";

const bubbles = [
  { top: 94.12, left: 1.25, size: 4.35, color: "amber", duration: 3.6, delay: -0.05 },
  { top: 94.12, left: 11.33, size: 4.35, color: "blue", duration: 4.2, delay: -3.72 },
  { top: 55.88, left: 1.25, size: 4.35, color: "amber", duration: 3.9, delay: -0.05 },
  { top: 32.35, left: -0.76, size: 4.35, color: "blue", duration: 4.6, delay: -4.64 },
  { top: 7.35, left: -0.26, size: 5.44, color: "blue", duration: 4, delay: -4.01 },
  { top: 25.0, left: 0.75, size: 3.26, color: "blue", duration: 3.7, delay: -3.67 },
  { top: 7.35, left: 12.84, size: 5.44, color: "amber", duration: 3.6, delay: -0.46 },
  { top: 7.35, left: 30.98, size: 5.44, color: "blue", duration: 4.2, delay: -2.9 },
  { top: 25.0, left: 4.78, size: 3.26, color: "blue", duration: 3.9, delay: -3.71 },
  { top: 57.35, left: 10.83, size: 3.26, color: "amber", duration: 4.6, delay: -0.5 },
  { top: 30.88, left: 23.92, size: 3.26, color: "blue", duration: 4, delay: -3.04 },
  { top: 79.41, left: 1.25, size: 6.53, color: "blue", duration: 3.7, delay: -3.65 },
  { top: 77.94, left: 7.8, size: 5.44, color: "blue", duration: 3.6, delay: -3.32 },
  { top: 82.35, left: 66.75, size: 6.53, color: "blue", duration: 4.2, delay: -1.4 },
  { top: 80.88, left: 100.5, size: 5.44, color: "blue", duration: 3.9, delay: 0.02 },
  { top: 58.82, left: 85.89, size: 4.35, color: "blue", duration: 4.6, delay: -0.65 },
  { top: 22.06, left: 99.5, size: 3.26, color: "blue", duration: 4, delay: -0.02 },
  { top: 7.35, left: 92.44, size: 5.44, color: "amber", duration: 3.7, delay: -3.42 },
  { top: 8.82, left: 98.99, size: 4.35, color: "blue", duration: 3.6, delay: -0.04 },
  { top: 32.35, left: 92.95, size: 4.35, color: "amber", duration: 4.2, delay: -3.9 },
  { top: 32.35, left: 100.0, size: 4.35, color: "blue", duration: 3.9, delay: 0 },
  { top: 7.35, left: 61.21, size: 5.44, color: "amber", duration: 4.6, delay: -2.82 },
  { top: 55.88, left: 55.66, size: 4.35, color: "amber", duration: 4, delay: -2.23 },
  { top: 22.06, left: 66.24, size: 3.26, color: "amber", duration: 3.7, delay: -2.45 },
] as const;

export default function Dialog07() {
  return (
    <Dialog>
      <DialogTrigger
        render={<Button variant="outline" className="cursor-pointer" />}
      >
        Connect Calendar
      </DialogTrigger>
      <DialogContent
        className="gap-0 overflow-hidden p-0 data-open:zoom-in-95 data-closed:zoom-out-95 duration-300 [[data-slot=dialog-overlay]:has(~_&)]:duration-300 sm:max-w-92"
        showCloseButton={false}
      >
        <div className="relative h-56 shrink-0 overflow-hidden bg-background bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] bg-[size:16px_16px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--color-background)_10%,transparent_70%)]" />
          <DialogClose
            render={
              <Button
                variant="secondary"
                size="icon-sm"
                className="absolute top-3 right-3 cursor-pointer"
              />
            }
          >
            <XIcon size={16} />
            <span className="sr-only">Close</span>
          </DialogClose>
          <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-between w-full px-8">
            <div className="flex p-3 shrink-0 items-center justify-center rounded-3xl border bg-background">
              <div className="flex p-5 shrink-0 items-center justify-center rounded-2xl border bg-background">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <circle cx="16" cy="16" r="16" fill="#fcd34d" />
                  <path
                    d="M20.24 21.015q-1.49 0-2.443-.645t-1.152-1.843l1.782-.461q.108.537.353.845.261.307.63.445.383.123.83.123.675 0 .998-.23.322-.246.322-.6a.59.59 0 0 0-.307-.537q-.307-.2-.983-.322l-.43-.077a8 8 0 0 1-1.46-.415 2.7 2.7 0 0 1-1.06-.753q-.398-.476-.398-1.228 0-1.137.829-1.736.83-.614 2.181-.614 1.275 0 2.12.568t1.106 1.49l-1.798.553q-.122-.585-.506-.83-.369-.245-.922-.245t-.845.2a.58.58 0 0 0-.292.521q0 .369.308.553.306.17.83.261l.43.077q.86.154 1.55.415.707.245 1.106.722.415.46.415 1.26 0 1.197-.875 1.858-.86.645-2.32.645m4.277-.215V10.048h1.935v4.07h.276q.123-.245.384-.491.262-.246.692-.4.445-.168 1.121-.168.891 0 1.551.414.676.4 1.045 1.122.369.706.369 1.658V20.8h-1.936v-4.393q0-.86-.43-1.29-.414-.43-1.198-.43-.891 0-1.382.599-.492.584-.492 1.643V20.8z"
                    fill="#030712"
                  />
                </svg>
              </div>
            </div>
            <div className="relative h-9 flex-1 overflow-visible">
              {bubbles.map((bubble, i) => (
                <span
                  key={i}
                  className={`dialog-07-bubble absolute -translate-x-1/2 -translate-y-1/2 rounded-full ${
                    bubble.color === "amber"
                      ? "dialog-07-bubble-amber bg-amber-300"
                      : "dialog-07-bubble-blue bg-blue-500"
                  }`}
                  style={{
                    top: `${bubble.top}%`,
                    left: `${bubble.left}%`,
                    width: `${bubble.size}px`,
                    height: `${bubble.size}px`,
                    animationDuration: `${bubble.duration}s`,
                    animationDelay: `${bubble.delay}s`,
                  }}
                />
              ))}
            </div>
            <div className="flex p-3 shrink-0 items-center justify-center rounded-3xl border bg-background">
              <div className="flex p-5 shrink-0 items-center justify-center rounded-2xl border bg-background">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g clip-path="url(#a)">
                    <path d="M24.421 7.58H7.58v16.84h16.842z" fill="#fff" />
                    <path
                      d="m24.421 32 7.58-7.58-3.79-.646-3.79.647-.691 3.466z"
                      fill="#ea4335"
                    />
                    <path
                      d="M0 24.42v5.054A2.526 2.526 0 0 0 2.526 32H7.58l.778-3.79-.778-3.79-4.13-.646z"
                      fill="#188038"
                    />
                    <path
                      d="M32 7.579V2.526A2.526 2.526 0 0 0 29.474 0H24.42q-.69 2.82-.691 4.15 0 1.33.691 3.429 2.515.72 3.79.72t3.79-.72"
                      fill="#1967d2"
                    />
                    <path d="M32 7.58h-7.58v16.84H32z" fill="#fbbc04" />
                    <path d="M24.421 24.42H7.58V32h16.842z" fill="#34a853" />
                    <path
                      d="M24.421 0H2.526A2.526 2.526 0 0 0 0 2.526v21.895h7.579V7.579h16.842z"
                      fill="#4285f4"
                    />
                    <path
                      d="M11.034 20.644q-.946-.636-1.304-1.867l1.462-.602q.199.758.694 1.175.495.415 1.196.414.716 0 1.232-.436.515-.435.515-1.109 0-.689-.543-1.124-.544-.436-1.36-.436h-.844v-1.446h.758q.7 0 1.181-.38.48-.377.48-1.037 0-.587-.43-.937-.428-.351-1.088-.351-.644-.001-1.023.343c-.253.23-.442.52-.552.844l-1.446-.602q.287-.815 1.059-1.438.775-.623 1.975-.623.887 0 1.596.343.707.345 1.109.951.401.61.4 1.367 0 .773-.372 1.31a2.6 2.6 0 0 1-.916.822v.087c.467.192.873.51 1.174.915q.46.616.46 1.474 0 .86-.436 1.533-.437.673-1.203 1.059a3.8 3.8 0 0 1-1.724.387 3.57 3.57 0 0 1-2.05-.636m8.974-7.25-1.604 1.16-.802-1.217 2.878-2.076h1.103v9.792h-1.575z"
                      fill="#4285f4"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 px-8 py-6 text-center">
          <DialogHeader className="items-center gap-2">
            <DialogTitle className="text-2xl font-semibold">
              ShadcnSpace Calendar
            </DialogTitle>
            <DialogDescription className="text-base">
              Through integrations with platforms like Chronos and PlanView, we
              deliver state-of-the-art AI solutions.
            </DialogDescription>
          </DialogHeader>
          <div className="flex w-full flex-col gap-2">
            <DialogClose
              render={
                <Button className="w-full h-10 cursor-pointer rounded-full hover:bg-primary/80" />
              }
            >
              Connect to ShadcnSpace Calendar
            </DialogClose>
            <DialogClose
              render={
                <Button
                  variant="ghost"
                  className="w-full h-10 cursor-pointer rounded-full"
                />
              }
            >
              Not now
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
