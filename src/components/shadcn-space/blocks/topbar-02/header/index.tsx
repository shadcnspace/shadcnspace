"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BellRing, Globe, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import NotificationDropdown from "@/components/shadcn-space/blocks/topbar-02/header/notification-dropdown";
import LanguageDropdown from "@/components/shadcn-space/blocks/topbar-02/header/dropdown-language";
import ProfileDropdown from "@/components/shadcn-space/blocks/topbar-02/header/dropdown-profile";
import Sidebar from "@/components/shadcn-space/blocks/topbar-02/header/sidebar";
import { NavDropdown, NavButton } from "@/components/shadcn-space/blocks/topbar-02/header/desktop-nav";
import NavData from "@/components/shadcn-space/blocks/topbar-02/data";
import { NavGroup } from "@/components/shadcn-space/blocks/topbar-02/types";

export default function Header() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const BREAKPOINT = 1024;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= BREAKPOINT) {
        setSheetOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
        <div className="flex items-center gap-3">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger
              id="mobile-sidebar-trigger"
              className="lg:hidden"
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer"
                >
                  <Menu size={20} />
                </Button>
              }
            />

            <SheetContent side="left" className="overflow-auto w-75!">
              <SheetTitle className="sr-only">customizer</SheetTitle>
              <a href="#" className="p-4 sticky top-0 bg-background z-10">
                <img
                  src="https://images.shadcnspace.com/assets/logo/shadcnspace.svg"
                  alt="logo"
                  className="dark:hidden w-40 h-10"
                />
                <img
                  src="https://images.shadcnspace.com/assets/logo/shadcnspace-white.svg"
                  alt="logo"
                  className="hidden dark:block w-40 h-10"
                />
              </a>
              <Sidebar onLinkClick={() => setSheetOpen(false)} />
            </SheetContent>
          </Sheet>

          <a href="#">
            <img
              src="https://images.shadcnspace.com/assets/logo/shadcnspace.svg"
              alt="logo"
              className="dark:hidden w-40 h-10"
            />
            <img
              src="https://images.shadcnspace.com/assets/logo/shadcnspace-white.svg"
              alt="logo"
              className="hidden dark:block w-40 h-10"
            />
          </a>
        </div>

        <div className="flex items-center gap-2">
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
              <div
                id="language-dropdown-trigger"
                className="rounded-full hover:bg-accent/80 cursor-pointer p-2"
              >
                <Globe size={16} />
              </div>
            }
          />
          <ProfileDropdown
            trigger={
              <div
                id="profile-dropdown-trigger"
                className="rounded-full cursor-pointer"
              >
                <Avatar className="size-7 rounded-full">
                  <AvatarImage src="https://images.shadcnspace.com/assets/profiles/user-11.jpg" />
                  <AvatarFallback>NJ</AvatarFallback>
                </Avatar>
              </div>
            }
          />
        </div>
      </div>

      <div className="h-px w-full bg-border" />

      {/* NAVIGATION BAR */}
      <div className="hidden lg:flex items-center justify-start gap-1 px-4 py-2 max-w-7xl mx-auto">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-1">
            {(NavData as NavGroup[]).map((item) => {
              if (item.type === "dropdown") {
                return (
                  <NavDropdown
                    key={item.label}
                    label={item.label}
                    icon={item.icon}
                    items={item.items}
                  />
                );
              }

              return (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    render={<NavButton label={item.label} icon={item.icon} />}
                  />
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
