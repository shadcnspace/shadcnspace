"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Logo } from "../../common/logo/logo";
import { navData } from "./navdata";
import { usePathname } from "next/navigation";
import React from "react";

export function NavigationSheet() {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const pathname = usePathname();

  const toggleSubmenu = () => {
    setOpenSubmenu(!openSubmenu);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger >
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="pb-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="font-bold" />
          </Link>
        </SheetHeader>
        <ScrollArea className="h-full pb-20 px-4">
          <div className="space-y-4 text-base pr-2.5">
            {navData.map((item, index) => (
              <React.Fragment key={index}>
                {item.items ?
                  <>
                    <button
                      onClick={toggleSubmenu}
                      className={` flex justify-between items-center w-full`}
                    >
                      {item.label}
                      <Icon
                        icon={'solar:alt-arrow-up-linear'}
                        className={`text-xl duration-200 transition-all ${openSubmenu ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openSubmenu && (
                      <div className="mt-2" key={index}>
                        <ul className="flex flex-col gap-1 ps-3">
                          {item.items.map((link, j) => {
                            const label = link.label || link.label
                            const href = link.href || link.href || '#'
                            const isLinkActive =
                              (pathname === href || pathname.startsWith(href))
                            return (
                              <li key={j}>
                                <Link
                                  href={href}
                                  onClick={() => setOpen(false)}
                                  className={``}
                                >
                                  {label}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    )}
                  </> :
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block"
                  >
                    {item.label}
                  </Link>
                }
              </React.Fragment>
            ))}
          </div >
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
