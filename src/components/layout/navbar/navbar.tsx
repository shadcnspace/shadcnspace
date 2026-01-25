import Link from "next/link";
import { ThemeToggle } from "../../custom-components/ss-sidebar/theme-toggle";
import { GithubStarButton } from "./github-star-button";
import { Logo } from "../../common/logo/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AppNavigationMenu } from "./app-navigation-menu";
import { NavigationSheet } from "./navigation-sheet";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export const Navbar = ({ className }: { className?: string }) => {
  return (
    <header className="bg-background border-b sticky top-0 z-5">
      <nav>
        <div
          className={cn(
            "flex items-center justify-between relative z-20 container mx-auto text-foreground border-primary/8 shadow shadow-primary/1 py-3",
            className
          )}
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <Logo className="font-bold" />
              </Link>
            </div>
            <Separator orientation="vertical" className="h-5! self-center!" />
            <div className="hidden lg:block">
              <AppNavigationMenu />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <ThemeToggle />
              <GithubStarButton className="w-auto! h-auto! py-2.5 px-4 text-base font-medium border border-transparent hover:bg-background hover:border-border duration-300 transition-all" />
            </div>
            {/* <Button variant="outline" className="lg:inline-flex! hidden py-2.5 px-3.5! h-auto! bg-linear-to-b from-background from-30% to-[#1118270a] shadow" >
              <Link href="#" className="text-base! font-medium leading-snug tracking-[0.2px] flex items-center gap-2">
                <Icon icon="tabler:bolt" width={24} height={24} className="w-5! h-5!" />
                Get Unlimited Access 
              </Link> 
            </Button> */}
            <div className="block lg:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
