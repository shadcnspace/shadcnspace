"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import NavData from "@/components/shadcn-space/blocks/topbar-03/data";
import { NavGroup } from "@/components/shadcn-space/blocks/topbar-03/types";

export default function Sidebar({ onLinkClick }: { onLinkClick?: () => void }) {
  return (
    <nav className="space-y-1 px-4">
      <Accordion className="w-full">
        {(NavData as NavGroup[]).map((group) => {
          const hasChildren =
            Array.isArray(group.items) && group.items.length > 0;
          const GroupIcon = group.icon;

          // SINGLE LINK ITEM
          if (!hasChildren && group.href) {
            return (
              <a
                key={group.label}
                href={group.href}
                onClick={onLinkClick}
                className="flex items-center gap-2 rounded-md px-2 py-2 text-sm font-normal
                           hover:bg-accent hover:text-foreground"
              >
                <GroupIcon size={16} />
                <span>{group.label}</span>
              </a>
            );
          }

          // ACCORDION GROUP
          return (
            <AccordionItem
              key={group.label}
              value={group.label}
              className="border-none"
            >
              <AccordionTrigger
                id={`accordion-trigger-${group.label}`}
                className="flex items-center gap-2 px-2 py-2 text-sm
                           hover:no-underline cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <GroupIcon size={16} />
                  <span className="tracking-normal!">{group.label}</span>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pl-4">
                <div className="space-y-1">
                  {group.items?.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={onLinkClick}
                        className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm
                                     hover:bg-accent hover:text-foreground no-underline!"
                      >
                        <ItemIcon size={14} />
                        <span>{item.label}</span>
                      </a>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </nav>
  );
}
