"use client";

import type { ReactElement } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BellRing,
  Headset,
  LucideIcon,
  Salad,
  ScanText,
  Star,
  Video,
} from "lucide-react";

type Props = {
  trigger: ReactElement;
  defaultOpen?: boolean;
  align?: "start" | "center" | "end";
};

type MenuItem = {
  iconColor: string;
  bgColor: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  time: string;
};

const PROFILE_ITEMS: MenuItem[] = [
  {
    iconColor: "stroke-blue-500",
    bgColor: "bg-blue-500/10",
    icon: Star,
    title: "Event Today",
    desc: "Just reminder that you have to",
    time: "9:00 AM",
  },
  {
    iconColor: "stroke-orange-400",
    bgColor: "bg-orange-400/10",
    icon: Video,
    title: "Team Meeting",
    desc: "Discuss project updates and next steps",
    time: "10:00 AM",
  },
  {
    iconColor: "stroke-teal-400",
    bgColor: "bg-teal-400/10",
    icon: Salad,
    title: "Lunch Break",
    desc: "Take a break and recharge",
    time: "12:30 PM",
  },
  {
    iconColor: "stroke-red-500",
    bgColor: "bg-red-500/10",
    icon: Headset,
    title: "Client Call",
    desc: "Monthly check-in with the client",
    time: "3:00 PM",
  },
  {
    iconColor: "stroke-sky-400",
    bgColor: "bg-sky-400/10",
    icon: ScanText,
    title: "Project Review",
    desc: "Review project deliverables with client",
    time: "4:00 PM",
  },
];

const Dropdown = ({ trigger, defaultOpen, align = "end" }: Props) => {
  return (
    <div className="flex items-start justify-center p-4 sm:p-8">
      <DropdownMenu defaultOpen={defaultOpen}>
        <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
        <DropdownMenuContent
          align={align}
          className="p-0 w-[calc(100vw-24px)] sm:w-sm rounded-2xl data-open:slide-in-from-top-20! data-closed:slide-out-to-top-20 data-open:fade-in-0 data-closed:fade-out-0 data-closed:zoom-out-100 duration-400"
        >
          <DropdownMenuGroup>
            {/* title */}
            <DropdownMenuLabel className="flex items-center justify-between p-4">
              <p className="text-base font-medium text-popover-foreground">
                Notifications
              </p>
              <Badge className="font-normal leading-0">5 New</Badge>
            </DropdownMenuLabel>

            {/* Notifications */}
            {PROFILE_ITEMS.map(
              ({ bgColor, iconColor, icon: Icon, title, desc, time }) => (
                <DropdownMenuItem
                  key={title}
                  className={
                    "mx-1.5 my-1 p-2 flex items-center justify-between cursor-pointer"
                  }
                >
                  <div className="flex items-center gap-3">
                    <div className={cn("p-2.5 rounded-xl", bgColor)}>
                      <Icon size={20} className={cn("size-5", iconColor)} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-popover-foreground">
                        {title}
                      </p>
                      <p className="max-w-52 truncate text-sm text-muted-foreground">
                        {desc}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{time}</p>
                </DropdownMenuItem>
              ),
            )}

            {/* button */}
            <div className="mx-1.5 my-1 p-2">
              <Button className="rounded-xl w-full cursor-pointer h-9 hover:bg-primary/80">
                See All Notifications
              </Button>
            </div>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const DropdownMenu02 = () => {
  return (
    <Dropdown
      align="center"
      trigger={
        <div className="rounded-full h-9 w-9 flex items-center justify-center bg-primary text-primary-foreground cursor-pointer">
          <BellRing className="size-4" />
        </div>
      }
    />
  );
};

export default DropdownMenu02;
