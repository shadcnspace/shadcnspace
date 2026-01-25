"use client";
import React from "react";
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarProvider, SidebarTrigger, } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo/logo";
import { NavMain } from "@/components/shadcn-space/blocks/dashboard-shell-01/nav-main";
import { AlignStartVertical, ChartPie, CircleUserRound, ClipboardList, LucideIcon, Notebook, NotepadText, Table, TextInitial, Ticket, } from "lucide-react";
import { SiteHeader } from "@/components/shadcn-space/blocks/dashboard-shell-01/site-header";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css'

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
    { title: "Analytics", icon: ChartPie, href: "/block/dashboard-shell-01/preview" },
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

const AppSidebar = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <Sidebar className="py-4 px-0 bg-background">
                <div className="flex flex-col gap-6 bg-background">
                    {/* ---------------- Header ---------------- */}
                    <SidebarHeader className="py-0 px-4">
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <a href="#" className="w-full h-full">
                                    <Logo />
                                </a>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarHeader>

                    {/* ---------------- Content ---------------- */}
                    <SidebarContent className="overflow-hidden gap-0 px-0">
                        <SimpleBar autoHide={true} className="h-[calc(100vh-348px)] border-b border-border">
                            <div className="px-4">
                                <NavMain items={navData} />
                            </div>
                        </SimpleBar>
                        {/* card */}
                        <div className="pt-4 px-4">
                            <Card className="shadow-none ring-0 bg-blue-500/10 px-4 py-6">
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
                                        <Button className="w-fit px-4 py-2 shadow-none cursor-pointer rounded-xl bg-blue-500 font-medium hover:bg-blue-500/80">
                                            Get Premium
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </SidebarContent>
                </div>
            </Sidebar>

            {/* ---------------- Main ---------------- */}
            <div className="flex flex-1 flex-col">
                <header className="sticky top-0 z-50 flex items-center border-b px-6 py-3 bg-background">
                    <SiteHeader />
                </header>
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </SidebarProvider>
    );
};

export default AppSidebar;
