"use client";

import { MouseEvent, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { type LucideIcon, Copy, Edit, MoreVertical, Share2, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

// -- Types --

export interface ContextMenuBubbleItem {
  icon: LucideIcon;
  label: string;
  iconBg: string;
  iconColor: string;
  danger?: boolean;
  onClick?: () => void;
}

export interface ContextMenuBubbleProps {
  items: ContextMenuBubbleItem[];
  className?: string;
}

// -- Component --

export const ContextMenuBubble = ({ items, className }: ContextMenuBubbleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = () => {
    if (triggerRef.current && containerRef.current) {
      const buttonRect = triggerRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      setPosition({
        x: buttonRect.left + buttonRect.width / 2 - containerRect.left,
        y: buttonRect.top + buttonRect.height / 2 - containerRect.top,
      });
    }
  };

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    updatePosition();
    setIsOpen(true);
  };

  const handleClick = () => {
    updatePosition();
    setIsOpen(!isOpen);
  };

  const closeMenu = () => setIsOpen(false);

  const itemCount = items.length;
  const radius = 80;
  const angleStep = (2 * Math.PI) / itemCount;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl",
        className
      )}
    >
      <motion.button
        ref={triggerRef}
        onContextMenu={handleContextMenu}
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md"
      >
        <MoreVertical className="h-5 w-5" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40"
            />

            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0, transition: { duration: 0.18 } }}
              transition={{ type: "spring", stiffness: 380, damping: 20 }}
              className="absolute z-50 flex h-40 w-40 items-center justify-center"
              style={{
                left: position.x - 80,
                top: position.y - 80,
              }}
            >
              {items.map((item, index) => {
                const Icon = item.icon;

                // Final position
                const angle = index * angleStep - Math.PI / 2;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                // Spiral path — both angle and radius grow together from the top origin,
                // exactly like a circular table leaf pivoting outward from the center.
                const origin = -Math.PI / 2;
                const sweep = angle >= origin ? angle - origin : angle + 2 * Math.PI - origin;
                const steps = [0, 0.25, 0.5, 0.75, 1];
                const xFrames = steps.map(t =>
                  t === 0 ? 0 : Math.cos(origin + t * sweep) * (t * radius)
                );
                const yFrames = steps.map(t =>
                  t === 0 ? 0 : Math.sin(origin + t * sweep) * (t * radius)
                );

                return (
                  <motion.button
                    key={item.label}
                    initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                    animate={{
                      scale: [0, 0.6, 0.8, 0.95, 1],
                      opacity: [0, 1,   1,   1,    1],
                      x: xFrames,
                      y: yFrames,
                    }}
                    exit={{
                      scale: 0,
                      opacity: 0,
                      x: 0,
                      y: 0,
                      transition: { duration: 0.18, ease: "easeIn" },
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.06,
                      times: [0, 0.25, 0.5, 0.75, 1],
                      ease: ["linear", "linear", "linear", "easeOut"],
                    }}                    
                    title={item.label}
                    onClick={() => {
                      item.onClick?.();
                      closeMenu();
                    }}
                    className={cn(
                      "absolute flex h-10 w-10 items-center justify-center rounded-full shadow-xs transition-colors",
                      item.iconBg,
                      item.iconColor,
                      item.danger
                        ? "hover:border-red-500 hover:bg-red-500 hover:text-white"
                        : "hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.button>
                );
              })}

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeMenu}
                className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md"
              >
                <MoreVertical className="h-4 w-4" />
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// -- Demo --

const demoItems: ContextMenuBubbleItem[] = [
  {
    icon: Edit,
    label: "Edit",
    iconBg: "bg-orange-400/10",
    iconColor: "text-orange-400",
  },
  {
    icon: Copy,
    label: "Copy",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Share2,
    label: "Share",
    iconBg: "bg-teal-400/10",
    iconColor: "text-teal-400",
  },
  {
    icon: Trash2,
    label: "Delete",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-500",
    danger: true,
  },
];

const ContextMenuBubbleDemo = () => <ContextMenuBubble items={demoItems} />;

export default ContextMenuBubbleDemo;
