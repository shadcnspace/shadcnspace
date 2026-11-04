"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Users, FileText, Bell } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "team", label: "Team", icon: Users },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "notifications", label: "Notifications", icon: Bell },
];

export default function TabsVertical() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        orientation="vertical"
        className="flex flex-col sm:flex-row gap-6 w-full"
      >
        {/* Sidebar Tabs */}
        <TabsList
          className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible no-visible-scrollbar sm:w-48 sm:shrink-0 sm:border-r border-border pb-2 sm:pb-0 sm:pr-4 bg-transparent p-0 rounded-none h-auto justify-start"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={cn(
                  "relative flex items-center cursor-pointer gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors outline-none w-full whitespace-nowrap bg-transparent data-active:bg-transparent data-active:text-primary dark:data-active:bg-transparent dark:data-active:border-transparent dark:data-active:text-primary border border-dashed data-active:border-transparent shadow-none data-active:shadow-none after:hidden justify-start text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                <Icon className="w-4 h-4 z-10" />
                <span className="z-10">{tab.label}</span>

                {isActive && (
                  <motion.div
                    layoutId="tabs-06-bg"
                    className="absolute inset-0 bg-primary/10 rounded-lg"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}
                {isActive && (
                  <motion.div
                    layoutId="tabs-06-indicator"
                    className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-primary rounded-r-full hidden sm:block"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}
              </TabsTrigger>
            );
          })}
        </TabsList>

        {/* Content Area */}
        <div className="flex-1 min-w-0">
          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="outline-none h-full">
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-2xl border border-border bg-card/50 p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-4 text-foreground">
                  {(() => {
                    const ActiveIcon = tab.icon;
                    return <ActiveIcon className="w-5 h-5 text-primary" />;
                  })()}
                  <h2 className="text-xl font-bold">
                    {tab.label}
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="h-4 bg-muted/60 rounded-md w-3/4 animate-pulse" />
                  <div className="h-4 bg-muted/60 rounded-md w-full animate-pulse" />
                  <div className="h-4 bg-muted/60 rounded-md w-5/6 animate-pulse" />

                  <p className="pt-4 text-muted-foreground text-sm">
                    The {tab.label} panel provides key metrics and quick actions for your workflow. Switch between tabs to see the smooth layout transitions.
                  </p>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
