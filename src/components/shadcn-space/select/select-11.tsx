"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Bell, Hash, Mail, MessageSquare, Webhook } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const channels = [
  {
    value: "email",
    label: "Email",
    icon: Mail,
    color: "bg-blue-500 text-white",
  },
  {
    value: "sms",
    label: "SMS",
    icon: MessageSquare,
    color: "bg-teal-400 text-white",
  },
  {
    value: "push",
    label: "Push",
    icon: Bell,
    color: "bg-amber-300 text-white",
  },
  {
    value: "slack",
    label: "Slack",
    icon: Hash,
    color: "bg-sky-400 text-white",
  },
  {
    value: "webhook",
    label: "Webhook",
    icon: Webhook,
    color: "bg-orange-400 text-white",
  },
];

const SelectAlertChannelsDemo = () => {
  const [selected, setSelected] = useState<string[]>([
    "email",
    "push",
    "slack",
  ]);

  return (
    <div className="w-full max-w-xs">
      <Select
        multiple
        value={selected}
        onValueChange={(val) => setSelected(val)}
        items={channels}
      >
        <SelectTrigger className="w-full justify-between">
          <SelectValue>
            {(values: string[]) => {
              return (
                <div className="flex items-center gap-2 overflow-hidden">
                  <div className="flex items-center pl-1.5">
                    {channels.map((c) => {
                      const isSelected = values.includes(c.value);
                      return (
                        <motion.div
                          key={c.value}
                          initial={false}
                          animate={{
                            width: isSelected ? 20 : 0,
                            marginLeft: isSelected ? -6 : 0,
                            scale: isSelected ? 1 : 0.4,
                            opacity: isSelected ? 1 : 0,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 32,
                          }}
                          className={cn(
                            "ring-background flex h-5 shrink-0 items-center justify-center overflow-hidden rounded-full ring-2",
                            isSelected
                              ? "-ml-1.5 w-5 scale-100 opacity-100"
                              : "ml-0 w-0 scale-0.4 opacity-0",
                            c.color,
                          )}
                        >
                          <c.icon className="size-2.5 shrink-0" />
                        </motion.div>
                      );
                    })}
                  </div>
                  <span className="truncate">Alert channels</span>
                  <Badge className="ml-auto gap-0.5">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span
                        key={values.length}
                        initial={{ y: -6, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 6, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        {values.length}
                      </motion.span>
                    </AnimatePresence>
                    /{channels.length}
                  </Badge>
                </div>
              );
            }}
          </SelectValue>
        </SelectTrigger>

        <SelectContent
          alignItemWithTrigger={false}
          className="min-w-56 data-[state=open]:slide-in-from-top-4 data-[state=open]:zoom-in-100 duration-400"
        >
          <SelectGroup>
            {channels.map((channel) => {
              const isSelected = selected.includes(channel.value);
              return (
                <SelectItem key={channel.value} value={channel.value}>
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{
                        scale: isSelected ? 1 : 0.85,
                        opacity: isSelected ? 1 : 0.55,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                      className={cn(
                        "flex size-6 items-center justify-center rounded-full",
                        channel.color,
                      )}
                    >
                      <channel.icon className="size-3.5" />
                    </motion.div>
                    <span>{channel.label}</span>
                  </div>
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectAlertChannelsDemo;
