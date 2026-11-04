"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Sparkles, Cpu, Terminal, Layers, CheckCircle2, Circle } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  {
    id: "product",
    label: "Product Suite",
    icon: Sparkles,
    stats: [
      { label: "Models deployed", value: "14" },
      { label: "Avg. response", value: "38 ms" },
      { label: "Monthly runs", value: "2.4 M" },
    ],
    features: [
      { label: "Text generation", done: true },
      { label: "Image synthesis", done: true },
      { label: "Fine-tuning UI", done: false },
    ],
    status: "Stable",
  },
  {
    id: "services",
    label: "Core Services",
    icon: Cpu,
    stats: [
      { label: "Uptime (30 d)", value: "99.97%" },
      { label: "Edge nodes", value: "42" },
      { label: "P95 latency", value: "12 ms" },
    ],
    features: [
      { label: "Auto-scaling", done: true },
      { label: "Global CDN", done: true },
      { label: "Zero-downtime deploys", done: true },
    ],
    status: "Active",
  },
  {
    id: "playground",
    label: "Playground",
    icon: Terminal,
    stats: [
      { label: "Languages", value: "9" },
      { label: "Saved snippets", value: "183" },
      { label: "Avg. exec time", value: "220 ms" },
    ],
    features: [
      { label: "Live output stream", done: true },
      { label: "Memory profiler", done: true },
      { label: "Collaborative mode", done: false },
    ],
    status: "Beta",
  },
  {
    id: "content",
    label: "Asset Hub",
    icon: Layers,
    stats: [
      { label: "Components", value: "312" },
      { label: "Design tokens", value: "68" },
      { label: "Last updated", value: "2 d ago" },
    ],
    features: [
      { label: "Figma export", done: true },
      { label: "Dark mode variants", done: true },
      { label: "RTL support", done: false },
    ],
    status: "v2.4",
  },
];

export default function TabsScrollSwitch() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [direction, setDirection] = useState(1);

  const handleTabChange = (newId: string) => {
    const prevIdx = tabs.findIndex((t) => t.id === activeTab);
    const nextIdx = tabs.findIndex((t) => t.id === newId);
    setDirection(nextIdx > prevIdx ? 1 : -1);
    setActiveTab(newId);
  };

  const variants = {
    enter: (dir: number) => ({ y: dir > 0 ? -48 : 48, opacity: 0 }),
    center: { y: 0, opacity: 1 },
    exit: (dir: number) => ({ y: dir > 0 ? 48 : -48, opacity: 0 }),
  };

  const transition = { type: "spring", stiffness: 320, damping: 30 };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        orientation="vertical"
        className="flex flex-col md:flex-row gap-8 md:gap-12 items-start"
      >
        {/* Sidebar */}
        <div className="w-full md:w-56 shrink-0">
          <TabsList className="flex flex-col gap-1.5 bg-transparent w-full h-auto p-0 rounded-none justify-start border-none">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={cn(
                    "relative flex items-center cursor-pointer gap-3 px-3.5 py-3 rounded-lg text-sm font-medium transition-all outline-none w-full justify-start select-none whitespace-nowrap",
                    "hover:bg-muted/60 hover:text-foreground",
                    isActive ? "border-none" : "border border-border/50",
                    "data-[state=active]:bg-transparent data-[state=active]:text-foreground",
                    "shadow-none data-[state=active]:shadow-none ring-0 data-[state=active]:ring-0 after:hidden",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  <Icon className="w-4 h-4 z-10 shrink-0" />
                  <span className="z-10 text-left">{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="tabs-07-active-indicator"
                      className="absolute inset-0 bg-muted rounded-lg pointer-events-none"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>

        {/* Content panel */}
        <div className="flex-1 w-full relative min-h-[360px] md:min-h-[380px] overflow-hidden">
          <div className="relative w-full h-[360px]">
            <AnimatePresence mode="wait" custom={direction}>
              {tabs.map((tab) => {
                if (tab.id !== activeTab) return null;
                const Icon = tab.icon;
                return (
                  <motion.div
                    key={tab.id}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={transition}
                    className="absolute inset-0 w-full h-full rounded-xl border border-border bg-card p-5 sm:p-7 flex flex-col gap-5"
                  >
                    {/* Header — big icon + title */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6 text-foreground shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold tracking-tight text-foreground leading-none">
                            {tab.label}
                          </h3>
                        </div>
                      </div>
                      <span className="text-[11px] text-muted-foreground font-mono border border-border rounded px-2 py-0.5 mt-0.5 shrink-0">
                        {tab.status}
                      </span>
                    </div>

                    <div className="h-px bg-border" />

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-4">
                      {tab.stats.map((s) => (
                        <div key={s.label}>
                          <div className="text-2xl font-bold tracking-tight text-foreground tabular-nums">{s.value}</div>
                          <div className="text-[11px] uppercase tracking-wide text-muted-foreground mt-1 font-medium">{s.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="h-px bg-border" />

                    {/* Feature checklist */}
                    <ul className="flex flex-col gap-2.5">
                      {tab.features.map((f) => (
                        <li key={f.label} className="flex items-center gap-3 text-sm">
                          {f.done
                            ? <CheckCircle2 className="w-4 h-4 text-foreground shrink-0" />
                            : <Circle className="w-4 h-4 text-muted-foreground/30 shrink-0" />
                          }
                          <span className={cn("font-medium", f.done ? "text-foreground" : "text-muted-foreground")}>
                            {f.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
