"use client";
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo/logo";
import { NavMain } from "@/components/shadcn-space/blocks/sidebar-01/nav-main";
import { AlignStartVertical, ChartPie, CircleUserRound, ClipboardList, LucideIcon, Notebook, NotepadText, Table, TextInitial, Ticket} from "lucide-react";

export type NavItem = {
  label?: string;
  isSection?: boolean;
  title?: string;
  icon?: LucideIcon;
  href?: string;
  children?: NavItem[];
};

export const navData: NavItem[] = [
  // Dashboards Section
  { label: "Dashboards", isSection: true },
  { title: "Analytics", icon: ChartPie, href: "#" },
  { title: "CRM Dashboard", icon: ClipboardList, href: "#" },

  // Pages Section
  { label: "Pages", isSection: true },
  { title: "Tables", icon: Table, href: "#" },
  { title: "Forms", icon: ClipboardList, href: "#" },
  { title: "User Profile", icon: CircleUserRound, href: "#" },

  // Apps Section
  { label: "Apps", isSection: true },
  { title: "Notes", icon: Notebook, href: "#" },
  { title: "Tickets", icon: Ticket, href: "#" },
  {
    title: "Blogs",
    icon: TextInitial,
    children: [
      { title: "Blog Post", href: "#" },
      { title: "Blog Detail", href: "#" },
      { title: "Blog Edit", href: "#" },
      { title: "Blog Create", href: "#" },
      { title: "Manage Blogs", href: "#" },
    ],
  },

  // Form Elements Section
  { label: "Form Elements", isSection: true },
  {
    title: "Shadcn Forms",
    icon: NotepadText,
    children: [
      { title: "Button", href: "#" },
      { title: "Input", href: "#" },
      { title: "Select", href: "#" },
      { title: "Checkbox", href: "#" },
      { title: "Radio", href: "#" },
    ],
  },
  {
    title: "Form layouts",
    icon: AlignStartVertical,
    children: [
      { title: "Forms Horizontal", href: "#" },
      { title: "Forms Vertical", href: "#" },
      { title: "Forms Validation", href: "#" },
      { title: "Forms Examples", href: "#" },
      { title: "Forms Wizard", href: "#" },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

const Page = () => {
  return (
    <SidebarProvider>
      <Sidebar className="px-0 py-4 h-full [&_[data-slot=sidebar-inner]]:h-full">
        <div className="flex flex-col gap-6">
          {/* ---------------- Header ---------------- */}
          <SidebarHeader className="px-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <a href="#" className="w-full h-full">
                  <Logo />
                </a>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>

          {/* ---------------- Content ---------------- */}
          <SidebarContent className="overflow-hidden">
            <ScrollArea className="h-[calc(100vh-100px)]">
              <div className="px-4">
                <NavMain items={navData} />
              </div>
              {/* card */}
              <div className="pt-5 px-4">
                <Card className="shadow-none ring-0 bg-secondary px-4 py-6">
                  <CardContent className="p-0 flex flex-col gap-3 items-center">
                    <img
                      src="https://images.shadcnspace.com/assets/backgrounds/download-img.png"
                      alt="sidebar-img"
                      width={74}
                      height={74}
                      className="h-20 w-20"
                    />
                    <div className="flex flex-col gap-4 items-center">
                      <div>
                        <p className="text-base font-semibold text-card-foreground text-center">
                          Grab Pro Now
                        </p>
                        <p className="text-sm font-regular text-muted-foreground text-center">
                          Customize your admin
                        </p>
                      </div>
                      <Button className="w-fit px-4 py-2 shadow-none cursor-pointer rounded-xl">
                        Get Premium
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollArea>
          </SidebarContent>
        </div>
      </Sidebar>

      {/* ---------------- Main ---------------- */}
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-50 flex h-14 items-center border-b px-4">
          <SidebarTrigger />
        </header>
        <main className="flex-1 p-4" />
      </div>
    </SidebarProvider>
  );
};

export default Page;
