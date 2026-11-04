import { LucideIcon } from "lucide-react";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavItem } from "../types";

export function NavDropdown({
  label,
  Icon,
  items,
}: {
  label: string;
  Icon: LucideIcon;
  items: NavItem[];
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className="gap-2 rounded-lg border border-transparent bg-transparent! cursor-pointer"
      >
        <Icon size={16} />
        <span className="text-sm">{label}</span>
      </NavigationMenuTrigger>

      <NavigationMenuContent className="min-w-48 p-1">
        <ul className="space-y-1">
          {items.map((item) => {
            const ItemIcon = item.icon;
            return (
              <li key={item.label}>
                <NavigationMenuLink
                  render={
                    <a
                      href={item.href}
                      className="flex items-left gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-foreground"
                    >
                      <div className="flex items-center gap-2">
                        <ItemIcon size={16} />
                        <span>{item.label}</span>
                      </div>
                    </a>
                  }
                />
              </li>
            );
          })}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export function NavButton({
  label,
  Icon,
  href = "#",
}: {
  label: string;
  Icon: LucideIcon;
  href?: string;
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        render={
          <a
            href={href}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-accent transition-colors"
          >
            <Icon size={16} />
            <span className="text-sm">{label}</span>
          </a>
        }
      />
    </NavigationMenuItem>
  );
}
