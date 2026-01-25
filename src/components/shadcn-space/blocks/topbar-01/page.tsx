import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LanguageDropdown from "@/components/shadcn-space/blocks/topbar-01/dropdown-language";
import ProfileDropdown from "@/components/shadcn-space/blocks/topbar-01/dropdown-profile";

import { Icon } from "@iconify/react";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <div className="flex min-h-dvh w-full">
      <div className="flex flex-1 flex-col">
        <header className="bg-card sticky top-0 z-50 border-b">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2 sm:px-6">
            <div className="flex items-center gap-4">
              <a href="#">
                <img
                  src="https://images.shadcnspace.com/assets/logo/shadcnspace.svg"
                  alt="logo"
                  className="dark:hidden h-10"
                />
                <img
                  src="https://images.shadcnspace.com/assets/logo/shadcnspace-white.svg"
                  alt="logo"
                  className="hidden dark:block h-10"
                />
              </a>
              <Separator orientation="vertical" />
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-xs gap-4">
                        <li>
                          <NavigationMenuLink>
                            <a href="#">
                              <div className="font-medium">Components</div>
                              <div className="text-muted-foreground">
                                Browse all components in the library.
                              </div>
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink>
                            <a href="#">
                              <div className="font-medium">Documentation</div>
                              <div className="text-muted-foreground">
                                Learn how to use the library.
                              </div>
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink>
                            <a href="#">
                              <div className="font-medium">Blog</div>
                              <div className="text-muted-foreground">
                                Read our latest blog posts.
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex items-center gap-2.5">
              <Icon
                icon="solar:moon-line-duotone"
                width={16}
                height={16}
                className="cursor-pointer"
              />
              <div className="relative cursor-pointer">
                <Icon
                  icon="solar:bell-line-duotone"
                  width={16}
                  height={16}
                  className="ml-2"
                />
                <div className="rounded-full absolute -right-1.5 -top-1.5 bg-red-400 text-[8px] px-1 py-0.4 flex justify-center items-center text-white">
                  2
                </div>
              </div>
              <LanguageDropdown
                trigger={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="focus-visible:ring-0! focus-visible:shadow-none! rounded-full! hover:bg-accent/80! cursor-pointer"
                  >
                    <Icon icon="solar:global-linear" width={16} height={16} />
                  </Button>
                }
              />
              <ProfileDropdown
                trigger={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-7 rounded-full cursor-pointer"
                  >
                    <Avatar className="size-7 rounded-full">
                      <AvatarImage src="https://images.shadcnspace.com/assets/profiles/user-11.jpg" />
                      <AvatarFallback>NJ</AvatarFallback>
                    </Avatar>
                  </Button>
                }
              />
            </div>
          </div>
        </header>
        <main>
          <div className="flex flex-1 flex-col gap-4 p-4">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="skeleton bg-muted/50 aspect-video h-11 w-full rounded-lg"
              />
            ))}
          </div>
        </main>

        <footer className="bg-card h-10 border-t">
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="skeleton bg-muted/50 aspect-video h-14 w-full rounded-lg" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Header;
