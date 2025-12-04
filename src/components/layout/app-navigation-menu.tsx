"use client";

import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AppNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-0">
        <NavigationMenuItem>
          <Button size="sm" variant="ghost" asChild>
            <Link href="/blocks">Blocks</Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button size="sm" variant="ghost" asChild>
            <Link href="/components/accordion">Components</Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button size="sm" variant="ghost" asChild>
            <Link href="/templates">Templates</Link>
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { icon?: LucideIcon }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          {props.icon && <props.icon className="mb-3 h-5 w-5" />}
          {title && (
            <div className="text-sm font-medium leading-none">{title}</div>
          )}
          {children && (
            <div className="mt-2 line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </div>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
