import { Sparkles } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "../app-sidebar/theme-toggle";
import { GithubStarButton } from "../github-star-button";
import { Logo } from "../logo";
import { Button } from "@/components/ui/button";
import { VersionSwitcher } from "../version-switcher";
import { AppNavigationMenu } from "./app-navigation-menu";
import { NavigationSheet } from "./navigation-sheet";
import { cn } from "@/lib/utils";

export const Navbar = ({ className }: { className?: string }) => {
  return (
    <nav className="px-6 lg:px-0 bg-background ps-4 pe-2 border-b">
      <div
        className={cn(
          "h-14 flex items-center justify-between relative z-20 max-w-(--breakpoint-xl) mx-auto text-foreground border-primary/8 shadow shadow-primary/1",
          className
        )}
      >
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="font-bold" />

          </Link>
        </div>

        <div className="ml-2 hidden md:block">
          <AppNavigationMenu />
        </div>

        <div className="flex items-center gap-2">

          <GithubStarButton size="icon-sm" />
          <ThemeToggle size="icon-sm" />
          <div className="block md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};
