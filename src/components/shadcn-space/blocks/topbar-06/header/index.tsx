"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { BellRing, Globe } from "lucide-react";
import LanguageDropdown from "@/components/shadcn-space/blocks/topbar-06/header/dropdown-language";
import ProfileDropdown from "@/components/shadcn-space/blocks/topbar-06/header/dropdown-profile";
import Search from "@/components/shadcn-space/blocks/topbar-06/header/search";
import NotificationDropdown from "@/components/shadcn-space/blocks/topbar-06/header/notification-dropdown";

export default function Header() {
  return (
    <header className="bg-card sticky top-0 z-50 border-b">
      <div className="mx-auto flex items-center justify-between gap-6 px-4 py-2.5 sm:px-6">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="[&_svg]:size-5! cursor-pointer" />
          <Separator
            orientation="vertical"
            className="hidden h-4! sm:block self-center!"
          />
          <a href="#" className="sticky top-0 bg-background z-10 block">
            <img
              src="https://images.shadcnspace.com/assets/logo/shadcnspace.svg"
              alt="logo"
              className="dark:hidden w-[160px] h-10"
            />
            <img
              src="https://images.shadcnspace.com/assets/logo/shadcnspace-white.svg"
              alt="logo"
              className="hidden dark:block w-[160px] h-10"
            />
          </a>
        </div>
        <div>
          <Search />
        </div>
        <div className="flex items-center gap-2.5">
          <NotificationDropdown
            defaultOpen={false}
            align="center"
            trigger={
              <div className="rounded-full p-2 hover:bg-accent relative before:absolute before:bottom-0 before:left-1/2 before:z-10 before:w-2 before:h-2 before:rounded-full before:bg-red-500 before:top-1">
                <BellRing className="size-4" />
              </div>
            }
          />
          <LanguageDropdown
            trigger={
              <Button
                id="language-dropdown-trigger-06"
                variant="ghost"
                size="icon"
                className="focus-visible:ring-0! focus-visible:shadow-none! rounded-full! hover:bg-accent/80! cursor-pointer"
                suppressHydrationWarning
              >
                <Globe size={16} />
              </Button>
            }
          />
          <ProfileDropdown
            trigger={
              <Button
                id="profile-dropdown-trigger-06"
                variant="ghost"
                size="icon"
                className="size-7 rounded-full cursor-pointer"
                suppressHydrationWarning
              >
                <Avatar className="size-7 rounded-full">
                  <AvatarImage src="https://images.shadcnspace.com/assets/profiles/user-11.jpg" />
                  <AvatarFallback>NJ</AvatarFallback>
                </Avatar>
              </Button>
            }
          />
        </div>
      </div>
    </header>
  );
}
