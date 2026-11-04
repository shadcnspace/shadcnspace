"use client";

import { useMemo, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  CreditCard,
  Bell,
  Settings2,
  ArrowUpRight,
  ArrowDownRight,
  Circle,
  type LucideIcon,
} from "lucide-react";

export type AnimatedTabItem = {
  value: string;
  label: string;
  icon?: LucideIcon;
  badge?: number | string;
  disabled?: boolean;
  content: ReactNode;
};

const panelVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 24 : -24,
    scale: 0.97,
    filter: "blur(6px)",
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.045,
      delayChildren: 0.05,
      type: "spring",
      stiffness: 300,
      damping: 28,
      mass: 0.9,
    },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -24 : 24,
    scale: 0.97,
    filter: "blur(6px)",
    transition: { duration: 0.15, ease: "easeIn" },
  }),
};

const panelItemVariants = {
  enter: { opacity: 0, y: 10 },
  center: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 380, damping: 30 },
  },
};

interface AnimatedTabsProps {
  tabs: AnimatedTabItem[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  listClassName?: string;
  contentClassName?: string;
  indicatorId?: string;
}

export function AnimatedTabs({
  tabs,
  defaultValue,
  value: controlledValue,
  onValueChange,
  className,
  listClassName,
  contentClassName,
  indicatorId = "animated-tabs-indicator",
}: AnimatedTabsProps) {
  const [internalValue, setInternalValue] = useState(
    defaultValue ?? tabs[0]?.value,
  );
  const value = controlledValue ?? internalValue;
  const [direction, setDirection] = useState(1);

  const activeTab = useMemo(
    () => tabs.find((tab) => tab.value === value),
    [tabs, value],
  );

  const handleChange = (next: string) => {
    const prevIndex = tabs.findIndex((tab) => tab.value === value);
    const nextIndex = tabs.findIndex((tab) => tab.value === next);
    setDirection(nextIndex > prevIndex ? 1 : -1);
    if (controlledValue === undefined) setInternalValue(next);
    onValueChange?.(next);
  };

  return (
    <Tabs value={value} onValueChange={handleChange} className={cn("w-full gap-4", className)}>
      <TabsList
        className={cn(
          "no-scrollbar h-auto! w-full gap-1 overflow-x-auto rounded-2xl border border-border bg-muted/40 p-1 sm:w-fit",
          listClassName,
        )}
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.value === value;
          return (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              disabled={tab.disabled}
              className={cn(
                "relative z-0 shrink-0 gap-1.5 rounded-xl border-none cursor-pointer bg-transparent px-3.5 text-sm font-medium shadow-none outline-none transition-colors after:hidden data-active:bg-transparent h-9 data-active:shadow-none",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId={indicatorId}
                  className="absolute inset-0 -z-10 rounded-xl bg-background shadow-[0_1px_2px_rgba(0,0,0,0.06),0_4px_10px_-4px_rgba(0,0,0,0.15)] ring-1 ring-border"
                  transition={{ type: "spring", stiffness: 500, damping: 34, mass: 0.9 }}
                />
              )}
              <motion.span
                key={isActive ? "active" : "inactive"}
                initial={isActive ? { scale: 0.85 } : false}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
                className="flex items-center gap-1.5"
              >
                {Icon && <Icon className="size-4" />}
                <span>{tab.label}</span>
              </motion.span>
              {tab.badge !== undefined && (
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={tab.badge}
                    initial={{ opacity: 0, scale: 0.5, y: -6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 6 }}
                    transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    className={cn(
                      "flex h-4.5 min-w-4.5 items-center justify-center rounded-full px-1 text-[10px] font-semibold tabular-nums transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted-foreground/15 text-muted-foreground",
                    )}
                  >
                    {tab.badge}
                  </motion.span>
                </AnimatePresence>
              )}
            </TabsTrigger>
          );
        })}
      </TabsList>

      <motion.div
        layout
        transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
        className={cn("relative overflow-hidden", contentClassName)}
      >
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          {activeTab && (
            <motion.div
              key={activeTab.value}
              custom={direction}
              role="tabpanel"
              variants={panelVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {activeTab.content}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Tabs>
  );
}

function OverviewPanel() {
  const stats = [
    { label: "Active users", value: "12,483", change: "+8.2%", up: true },
    { label: "Revenue (MTD)", value: "$48,920", change: "+3.1%", up: true },
    { label: "Churn rate", value: "1.4%", change: "-0.3%", up: false },
  ];

  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={panelItemVariants}
            className="rounded-xl border border-border/60 p-4"
          >
            <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
            <p className="mt-1.5 text-2xl font-bold tracking-tight text-foreground tabular-nums">
              {stat.value}
            </p>
            <div
              className={cn(
                "mt-1.5 flex items-center gap-1 text-xs font-medium",
                stat.up ? "text-emerald-600 dark:text-emerald-400" : "text-destructive",
              )}
            >
              {stat.up ? (
                <ArrowUpRight className="size-3.5" />
              ) : (
                <ArrowDownRight className="size-3.5" />
              )}
              {stat.change}
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-5 text-sm text-muted-foreground">
        A quick snapshot of your workspace performance over the last 30 days.
      </p>
    </div>
  );
}

function BillingPanel() {
  const invoices = [
    { id: "INV-0231", date: "Jun 1, 2026", amount: "$49.00", status: "Paid" },
    { id: "INV-0230", date: "May 1, 2026", amount: "$49.00", status: "Paid" },
    { id: "INV-0229", date: "Apr 1, 2026", amount: "$49.00", status: "Overdue" },
  ];

  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      <ul className="flex flex-col divide-y divide-border">
        {invoices.map((invoice) => (
          <motion.li
            key={invoice.id}
            variants={panelItemVariants}
            className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
          >
            <div>
              <p className="text-sm font-medium text-foreground">{invoice.id}</p>
              <p className="text-xs text-muted-foreground">{invoice.date}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium tabular-nums text-foreground">{invoice.amount}</span>
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[11px] font-semibold",
                  invoice.status === "Paid"
                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                    : "bg-destructive/10 text-destructive",
                )}
              >
                {invoice.status}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function NotificationsPanel() {
  const notifications = [
    { title: "New team member joined", time: "2h ago", unread: true },
    { title: "Deployment succeeded", time: "5h ago", unread: true },
    { title: "Weekly report is ready", time: "1d ago", unread: false },
  ];

  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      <ul className="flex flex-col divide-y divide-border">
        {notifications.map((item) => (
          <motion.li
            key={item.title}
            variants={panelItemVariants}
            className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
          >
            <Circle
              className={cn(
                "size-2 shrink-0 fill-current",
                item.unread ? "text-primary" : "text-transparent",
              )}
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.time}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function SettingsPanel() {
  const [preferences, setPreferences] = useState({
    emailUpdates: true,
    productAnnouncements: false,
    weeklyDigest: true,
  });

  const rows: { key: keyof typeof preferences; label: string; description: string }[] = [
    { key: "emailUpdates", label: "Email updates", description: "Get notified about account activity." },
    { key: "productAnnouncements", label: "Product announcements", description: "New features and releases." },
    { key: "weeklyDigest", label: "Weekly digest", description: "A summary sent every Monday." },
  ];

  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      <ul className="flex flex-col divide-y divide-border">
        {rows.map((row) => (
          <motion.li
            key={row.key}
            variants={panelItemVariants}
            className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
          >
            <div>
              <p className="text-sm font-medium text-foreground">{row.label}</p>
              <p className="text-xs text-muted-foreground">{row.description}</p>
            </div>
            <Switch
              checked={preferences[row.key]}
              onCheckedChange={(checked) =>
                setPreferences((prev) => ({ ...prev, [row.key]: checked }))
              }
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

const TabsDemo = () => {
  const tabs: AnimatedTabItem[] = [
    { value: "overview", label: "Overview", icon: LayoutDashboard, content: <OverviewPanel /> },
    { value: "billing", label: "Billing", icon: CreditCard, badge: 1, content: <BillingPanel /> },
    { value: "notifications", label: "Notifications", icon: Bell, badge: 2, content: <NotificationsPanel /> },
    { value: "settings", label: "Settings", icon: Settings2, content: <SettingsPanel /> },
  ];

  return (
    <div className="w-full max-w-2xl">
      <AnimatedTabs tabs={tabs} defaultValue="overview" />
    </div>
  );
};

export default TabsDemo;