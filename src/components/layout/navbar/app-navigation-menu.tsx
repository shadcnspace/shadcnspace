"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import { navData } from "./navdata";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function AppNavigationMenu() {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-1">
        {navData.map((item, index) => (
          <React.Fragment key={index}>
            {item.items ? (
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(`text-base! font-normal`, item.items.some((child) => child.href === pathname) ? "bg-accent text-accent-foreground dark:bg-accent/50 text-base" : "")}>
                  <span className={cn(item.items.some((child) => child.href === pathname) ? "text-accent-foreground" : "text-muted-foreground")}>{item.label}</span>
                </NavigationMenuTrigger>

                <NavigationMenuContent className="rounded-lg shadow-xl!">
                  <ul className="grid w-[220px]">
                    {item.items.map((resource) => (
                      <li key={resource.label}>
                        <NavigationMenuLink render={()=> <Link href={resource.href} className={cn(`text-muted-foreground flex items-center gap-2 px-3 py-2 text-base! rounded-md font-normal hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50`, pathname === resource.href ? "bg-accent text-accent-foreground dark:bg-accent/50" : "my-0.5")}>
                          <Icon icon={resource.icon} width={20} height={20} />
                          {resource.label}
                        </Link>} />
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem>
                <NavigationMenuLink render={()=> <Link href={item.href} className={cn(`px-3 py-2 text-muted-foreground rounded-lg hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50`, pathname === item.href ? "bg-accent dark:bg-accent/50 text-base text-foreground" : "")}>
                  {item.label}
                </Link>} />
              </NavigationMenuItem>
            )}
          </React.Fragment>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
