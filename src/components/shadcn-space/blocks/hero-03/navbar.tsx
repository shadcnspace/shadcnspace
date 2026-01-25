"use client";

import { useEffect, useState, useRef } from "react";
import NavLink from "@/components/shadcn-space/blocks/hero-03/navlink";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Equal, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useInView, AnimatePresence } from "motion/react";

type navData = {
  title: string;
  href: string;
};

type NavbarProps = {
  navigationData: navData[];
};

const Header = ({ navigationData }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const isInView = useInView(headerRef, { once: true, amount: 0.1 });

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 w-full border-t-4 border-teal-400 transition-all duration-500 ease-in-out h-20 flex items-center",
        "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:bg-teal-400 before:transition-all before:duration-500 before:ease-in-out",
        sticky && "before:h-full"
      )}
    >
      <motion.nav
        initial={{ opacity: 0, y: -32 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -32 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className={cn(
          "relative mx-auto max-w-7xl px-4 xl:px-16 flex item-center justify-between w-full"
        )}
      >
        <a href="#">
          <img
            src="https://images.shadcnspace.com/assets/logo/shadcnspace-logo-white.svg"
            alt="brand logo"
            width={147}
            height={40}
          />
        </a>
        <div>
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              />
            )}
          </AnimatePresence>
          <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
            {/* Trigger */}
            <DropdownMenuTrigger className="bg-white text-black flex items-center justify-center rounded-full sm:h-12 sm:w-12 h-10 w-10 p-2.5 sm:p-4 outline-none">
              <Equal size={16} />
            </DropdownMenuTrigger>
            {/* Content */}
            <DropdownMenuContent
              align="end"
              sideOffset={20}
              className="min-w-xs sm:min-w-sm bg-background py-8 px-6 shadow-lg rounded-3xl border-none -mt-16"
            >
              <div className="flex flex-col gap-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <p className="text-lg font-medium text-foreground">Menu</p>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X size={20} />
                  </button>
                </div>
                <hr className="border-border" />
                {/* Navigation */}
                <ul className="flex flex-col gap-4 pb-4">
                  {navigationData.map((menuItem, index) => (
                    <NavLink key={index} item={menuItem} />
                  ))}
                </ul>
                {/* Contact */}
                <div className="flex flex-col">
                  <a
                    href="tel:+1-212-456-7890"
                    className="text-lg font-normal leading-7 text-muted-foreground w-fit hover:text-primary"
                  >
                    +1-212-456-7890
                  </a>
                  <a
                    href="mailto:info@wrappixel.com"
                    className="text-2xl font-semibold leading-8 text-foreground w-fit"
                  >
                    info@wrappixel.com
                  </a>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
