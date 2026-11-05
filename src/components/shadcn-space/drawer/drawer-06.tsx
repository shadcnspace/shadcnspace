"use client";

import { useState } from "react";
import {
  BarChart3,
  ChevronDown,
  FolderKanban,
  Home,
  Inbox,
  LogOut,
  Menu,
  Settings,
  Users,
  XIcon,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", icon: Home },
  { label: "Inbox", icon: Inbox, badge: 4 },
  { label: "Analytics", icon: BarChart3 },
  { label: "Team", icon: Users },
];

const projects = [
  { label: "Website redesign", color: "bg-blue-500" },
  { label: "Mobile app", color: "bg-teal-400" },
  { label: "Brand refresh", color: "bg-orange-400" },
];

const itemClass =
  "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring";

const DrawerDemo = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const go = (label: string) => {
    setActive(label);
    setOpen(false);
  };

  return (
    <Drawer swipeDirection="left" open={open} onOpenChange={setOpen}>
      <DrawerTrigger
        render={
          <Button variant="outline" size="icon" aria-label="Open menu">
            <Menu />
          </Button>
        }
      />
      <DrawerContent>
        <DrawerHeader className="flex-row items-center justify-between gap-2 text-left">
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-md bg-primary text-xs font-semibold text-primary-foreground">
              A
            </span>
            <div className="flex flex-col">
              <DrawerTitle className="text-sm">Acme Inc.</DrawerTitle>
              <DrawerDescription className="text-xs">Pro workspace</DrawerDescription>
            </div>
          </div>
          <DrawerClose
            render={
              <Button variant="ghost" size="icon-sm" aria-label="Close menu">
                <XIcon />
              </Button>
            }
          />
        </DrawerHeader>

        <nav aria-label="Main" className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
          {links.map((link) => (
            <a
              key={link.label}
              href="#"
              onClick={(event) => {
                event.preventDefault();
                go(link.label);
              }}
              aria-current={active === link.label ? "page" : undefined}
              className={cn(itemClass, active === link.label && "bg-muted font-medium text-foreground")}
            >
              <link.icon className="size-4" />
              <span className="flex-1">{link.label}</span>
              {link.badge && (
                <Badge variant="secondary" className="h-5 min-w-5 rounded-full px-1.5 tabular-nums">
                  {link.badge}
                </Badge>
              )}
            </a>
          ))}

          <Collapsible defaultOpen className="mt-2">
            <CollapsibleTrigger className={cn(itemClass, "group")}>
              <FolderKanban className="size-4" />
              <span className="flex-1 text-left">Projects</span>
              <ChevronDown className="size-4 transition-transform group-data-panel-open:rotate-180 motion-reduce:transition-none" />
            </CollapsibleTrigger>
            <CollapsibleContent className="flex flex-col gap-1 pt-1 pl-4">
              {projects.map((project) => (
                <a
                  key={project.label}
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    go(project.label);
                  }}
                  aria-current={active === project.label ? "page" : undefined}
                  className={cn(itemClass, active === project.label && "bg-muted font-medium text-foreground")}
                >
                  <span className={cn("size-2 rounded-full", project.color)} aria-hidden="true" />
                  {project.label}
                </a>
              ))}
            </CollapsibleContent>
          </Collapsible>

          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              go("Settings");
            }}
            aria-current={active === "Settings" ? "page" : undefined}
            className={cn(itemClass, "mt-2", active === "Settings" && "bg-muted font-medium text-foreground")}
          >
            <Settings className="size-4" />
            Settings
          </a>
        </nav>

        <DrawerFooter className="flex-row items-center gap-3 border-t border-border pt-4">
          <Avatar className="size-8">
            <AvatarFallback className="bg-sky-400/20 text-xs font-medium text-foreground">JD</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-foreground">Jordan Diaz</p>
            <p className="truncate text-xs text-muted-foreground">jordan@acme.com</p>
          </div>
          <Button variant="ghost" size="icon-sm" aria-label="Sign out">
            <LogOut />
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerDemo;
