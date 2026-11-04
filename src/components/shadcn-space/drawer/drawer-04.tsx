"use client";

import { useState } from "react";
import { Bell, BellOff, CheckCheck, XIcon } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type Notification = {
  id: number;
  name: string;
  initials: string;
  color: string;
  action: string;
  target: string;
  time: string;
  read: boolean;
};

const initialNotifications: Notification[] = [
  { id: 1, name: "Maya Rivera", initials: "MR", color: "bg-teal-400/20", action: "commented on", target: "Pricing page v3", time: "2m ago", read: false },
  { id: 2, name: "Leo Chen", initials: "LC", color: "bg-blue-500/20", action: "assigned you to", target: "Fix checkout bug", time: "18m ago", read: false },
  { id: 3, name: "Ava Patel", initials: "AP", color: "bg-orange-400/20", action: "mentioned you in", target: "Q4 roadmap", time: "1h ago", read: false },
  { id: 4, name: "Noah Kim", initials: "NK", color: "bg-sky-400/20", action: "approved", target: "Release 2.4.0", time: "3h ago", read: true },
  { id: 5, name: "Zoe Martin", initials: "ZM", color: "bg-amber-300/30", action: "invited you to", target: "Design system", time: "Yesterday", read: true },
];

const DrawerDemo = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState<"all" | "unread">("all");

  const unread = notifications.filter((item) => !item.read).length;
  const visible = filter === "unread" ? notifications.filter((item) => !item.read) : notifications;

  const markRead = (id: number) =>
    setNotifications((current) => current.map((item) => (item.id === id ? { ...item, read: true } : item)));

  const markAllRead = () =>
    setNotifications((current) => current.map((item) => ({ ...item, read: true })));

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            aria-label={unread ? `Notifications, ${unread} unread` : "Notifications"}
            className="relative"
          >
            <Bell />
            {unread > 0 && (
              <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-orange-400 text-xs font-medium text-gray-950 tabular-nums">
                {unread}
              </span>
            )}
          </Button>
        }
      />
      <DrawerContent>
        <DrawerHeader className="gap-3 border-b border-border pb-3 text-left">
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col gap-0.5">
              <DrawerTitle>Notifications</DrawerTitle>
              <DrawerDescription>
                {unread ? `You have ${unread} unread` : "You are all caught up"}
              </DrawerDescription>
            </div>
            <DrawerClose
              render={
                <Button variant="ghost" size="icon-sm" aria-label="Close notifications">
                  <XIcon />
                </Button>
              }
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <Tabs value={filter} onValueChange={(value) => setFilter(value as "all" | "unread")}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">
                  Unread
                  {unread > 0 && <span className="text-muted-foreground tabular-nums">{unread}</span>}
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <Button variant="ghost" size="sm" onClick={markAllRead} disabled={!unread}>
              <CheckCheck />
              Mark all read
            </Button>
          </div>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto">
          {visible.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-2 p-8 text-center">
              <span className="flex size-10 items-center justify-center rounded-full bg-muted">
                <BellOff className="size-5 text-muted-foreground" />
              </span>
              <p className="text-sm font-medium text-foreground">No unread notifications</p>
              <p className="text-xs text-muted-foreground">New activity will show up here.</p>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {visible.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => markRead(item.id)}
                    className={cn(
                      "flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/60 focus-visible:bg-muted/60 focus-visible:outline-none",
                      !item.read && "bg-sky-400/5",
                    )}
                  >
                    <Avatar className="size-8">
                      <AvatarFallback className={cn("text-xs font-medium text-foreground", item.color)}>
                        {item.initials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                      <span className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{item.name}</span>{" "}
                        {item.action}{" "}
                        <span className="font-medium text-foreground">{item.target}</span>
                      </span>
                      <span className="text-xs text-muted-foreground">{item.time}</span>
                    </span>
                    <span
                      className={cn("mt-1.5 size-2 shrink-0 rounded-full", item.read ? "bg-transparent" : "bg-blue-500")}
                      aria-hidden="true"
                    />
                    {!item.read && <span className="sr-only">Unread</span>}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerDemo;
