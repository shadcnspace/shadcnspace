import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavItem } from "@/components/shadcn-space/blocks/topbar-03/types";

export function NavDropdown({
  label,
  icon: Icon,
  items,
}: {
  label: string;
  icon: LucideIcon;
  items: NavItem[];
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className="
          gap-2 rounded-lg border border-transparent
          hover:bg-accent
          data-[state=open]:border-muted
          data-[state=open]:bg-accent cursor-pointer
        "
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
  icon: Icon,
}: {
  label: string;
  icon: LucideIcon;
}) {
  return (
    <Button variant="ghost" className="gap-2 rounded-lg">
      <span className="flex items-center gap-2">
        <Icon size={16} />
        <span className="text-sm">{label}</span>
      </span>
    </Button>
  );
}
