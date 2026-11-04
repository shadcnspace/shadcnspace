"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  ChevronRightIcon,
  ClockIcon,
  LucideIcon,
  MapPinIcon,
  MessageSquareIcon,
} from "lucide-react";

export type StatRow = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export type Collapsible04Props = {
  name?: string;
  username?: string;
  avatar?: string;
  status?: string;
  stats?: StatRow[];
  profileHref?: string;
};

const containerVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.04, 0.62, 0.23, 0.98],
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -4, transition: { duration: 0.15 } },
};

const defaultStats: StatRow[] = [
  { icon: MessageSquareIcon, label: "Last activity", value: "2 hours ago" },
  { icon: ClockIcon, label: "Member since", value: "Mar 2022" },
  { icon: MapPinIcon, label: "Location", value: "New York, US" },
];

const UserProfileDemo = ({
  name = "Jessica Thompson",
  avatar = "https://images.shadcnspace.com/assets/profiles/jessica.webp",
  status = "Online",
  stats = defaultStats,
  profileHref = "#",
}: Collapsible04Props) => {
  const [open, setOpen] = useState(false);

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="w-full max-w-xs">
      <div className="w-full rounded-xl border bg-card shadow-sm">
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger className="flex w-full px-4 py-3">
            <div className="flex grow flex-row items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <Avatar className="size-7">
                    <AvatarImage src={avatar} alt={name} />
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>
                  <span className="absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 border-card bg-teal-400" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-foreground text-sm font-semibold leading-tight">
                    {name}
                  </span>
                  <span className="text-muted-foreground text-xs leading-tight">
                    {status}
                  </span>
                </div>
              </div>
              <motion.span
                animate={{ rotate: open ? 90 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="inline-flex"
              >
                <ChevronRightIcon
                  aria-hidden="true"
                  className="text-muted-foreground size-4"
                />
              </motion.span>
            </div>
          </CollapsibleTrigger>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="collapsible-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ overflow: "hidden" }}
              >
                <motion.div variants={itemVariants}>
                  <Separator />
                </motion.div>

                <div className="px-4 py-3 space-y-2">
                  {stats.map(({ icon: Icon, label, value }) => (
                    <motion.div
                      key={label}
                      variants={itemVariants}
                      className="flex items-center justify-between rounded-lg bg-muted dark:bg-muted/50 px-3 py-2"
                    >
                      <div className="flex items-center gap-2">
                        <Icon
                          aria-hidden="true"
                          className="text-muted-foreground size-3.5 shrink-0"
                        />
                        <span className="text-muted-foreground text-xs">
                          {label}
                        </span>
                      </div>
                      <span className="text-foreground text-xs font-medium">
                        {value}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={itemVariants}>
                  <Separator />
                </motion.div>

                <motion.div variants={itemVariants} className="px-4 py-2.5">
                  <a
                    href={profileHref}
                    className="group flex gap-1 items-center text-muted-foreground hover:text-primary text-xs font-medium transition-colors"
                  >
                    View full profile{" "}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 duration-300"
                    />
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </Collapsible>
      </div>
    </div>
  );
};

export default UserProfileDemo;
