"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { type LucideIcon, Copy, FilePen, Mouse, Share2, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// -- Types --

export interface ContextMenuItem {
  icon: LucideIcon;
  label: string;
  shortcut: string;
  iconBg: string;
  iconColor: string;
  danger?: boolean;
  onClick?: () => void;
}

export interface ContextMenuProps {
  items: ContextMenuItem[];
  className?: string;
}

// -- Component --

export const ContextMenu = ({ items, className }: ContextMenuProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
  };

  return (
    <>
      <div
        onContextMenu={handleContextMenu}
        onClick={() => setIsVisible(false)}
        className={cn(
          "relative flex h-64 w-64 cursor-context-menu flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-border/60 bg-muted/20",
          className
        )}
      >
        <div
          className="absolute inset-0 opacity-40 dark:opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle, oklch(0.4461 0.0263 256.8 / 0.4) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background shadow-sm">
            <Mouse className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-foreground">Right-click here</p>
            <p className="mt-0.5 text-xs text-muted-foreground">to open context menu</p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isVisible && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsVisible(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="fixed z-50 w-52 overflow-hidden rounded-2xl border border-border/80 bg-background p-1.5"
              style={{ left: position.x, top: position.y }}
            >
              {items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <React.Fragment key={item.label}>
                    {item.danger && <Separator className="my-1.5" />}
                    <motion.button
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={cn(
                        "flex w-full cursor-pointer items-center justify-between rounded-xl px-2.5 py-2 text-left text-sm font-medium transition-colors",
                        item.danger
                          ? "text-red-500 hover:bg-red-500/10"
                          : "text-foreground hover:bg-muted dark:hover:bg-muted/50"
                      )}
                      whileHover={{ x: 4 }}
                      onClick={() => {
                        item.onClick?.();
                        setIsVisible(false);
                      }}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={cn(
                            "flex h-7 w-7 items-center justify-center rounded-lg",
                            item.iconBg,
                            item.iconColor
                          )}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        {item.label}
                      </div>
                      <kbd
                        className={cn(
                          "rounded-md border px-1.5 py-0.5 font-mono text-[10px] font-medium",
                          item.danger
                            ? "border-red-500/20 bg-red-500/5 text-red-400"
                            : "border-border bg-muted text-muted-foreground"
                        )}
                      >
                        {item.shortcut}
                      </kbd>
                    </motion.button>
                  </React.Fragment>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// -- Demo --

const demoItems: ContextMenuItem[] = [
  {
    icon: Copy,
    label: "Copy",
    shortcut: "⌘C",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: FilePen,
    label: "Edit",
    shortcut: "⌘E",
    iconBg: "bg-orange-400/10",
    iconColor: "text-orange-400",
  },
  {
    icon: Share2,
    label: "Share",
    shortcut: "⌘S",
    iconBg: "bg-teal-400/10",
    iconColor: "text-teal-400",
  },
  {
    icon: Trash2,
    label: "Delete",
    shortcut: "⌘D",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-500",
    danger: true,
  },
];

const ContextMenuDemo = () => <ContextMenu items={demoItems} />;

export default ContextMenuDemo;
