"use client";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Bell,
  ChevronRight,
  CreditCard,
  FileText,
  Inbox,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Shield,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const title = "Dashboard Sidebar";

type NavChild = {
  id: string;
  label: string;
  icon: React.ElementType;
  badge?: string;
};

type NavSection = {
  id: string;
  label: string;
  icon: React.ElementType;
  children: NavChild[];
};

const navSections: NavSection[] = [
  {
    id: "overview",
    label: "Overview",
    icon: LayoutDashboard,
    children: [
      { id: "home", label: "Home", icon: LayoutDashboard },
      { id: "analytics", label: "Analytics", icon: BarChart3 },
      { id: "reports", label: "Reports", icon: FileText },
    ],
  },
  {
    id: "inbox",
    label: "Inbox",
    icon: Inbox,
    children: [
      { id: "messages", label: "Messages", icon: MessageSquare, badge: "4" },
      { id: "notifications", label: "Notifications", icon: Bell, badge: "12" },
    ],
  },
  {
    id: "workspace",
    label: "Workspace",
    icon: Users,
    children: [
      { id: "members", label: "Members", icon: Users },
      { id: "roles", label: "Roles & Access", icon: Shield },
      { id: "billing", label: "Billing", icon: CreditCard },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    children: [
      { id: "general", label: "General", icon: Settings },
      { id: "security", label: "Security", icon: Shield },
    ],
  },
];

export default function CollapsibleDashboardSidebar() {
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(["overview"]),
  );
  const [activeId, setActiveId] = useState("analytics");

  const toggle = (id: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="flex h-full w-64 flex-col rounded-xl border bg-background overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 border-b px-4 py-3.5">
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
          S
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold leading-none text-foreground">
            Shadcn Space
          </span>
          <span className="text-xs text-muted-foreground mt-0.5">Pro plan</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-2">
        {navSections.map((section) => {
          const isOpen = openSections.has(section.id);
          const SectionIcon = section.icon;

          return (
            <Collapsible
              key={section.id}
              open={isOpen}
              onOpenChange={() => toggle(section.id)}
            >
              <CollapsibleTrigger
                className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                <SectionIcon className="size-4 shrink-0" />
                <span className="flex-1 text-left">{section.label}</span>
                <ChevronRight
                  className={cn(
                    "size-3.5 shrink-0 transition-transform duration-200",
                    isOpen && "rotate-90",
                  )}
                />
              </CollapsibleTrigger>

              <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                <ul className="ml-2 mt-0.5 flex flex-col gap-0.5 border-l border-border pl-3 pb-1">
                  {section.children.map((child) => {
                    const ChildIcon = child.icon;
                    const isActive = activeId === child.id;
                    return (
                      <li key={child.id}>
                        <button
                          onClick={() => setActiveId(child.id)}
                          className={cn(
                            "flex w-full items-center gap-2.5 rounded-md px-2.5 py-1.5 text-sm transition-colors cursor-pointer",
                            isActive
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground",
                          )}
                        >
                          <ChildIcon className="size-3.5 shrink-0" />
                          <span className="flex-1 text-left">
                            {child.label}
                          </span>
                          {child.badge && (
                            <Badge
                              variant="secondary"
                              className="h-4 min-w-4 px-1 text-[10px] font-semibold"
                            >
                              {child.badge}
                            </Badge>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </nav>
    </div>
  );
}
