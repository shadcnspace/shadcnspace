"use client";

import { LucideIcon, AppWindowMac, HandMetal, Megaphone, Contrast, Brush } from 'lucide-react';
import { FolderPlus, FolderPen, FolderMinus } from 'lucide-react';
import { EllipsisVertical } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TableAction {
    icon: LucideIcon;
    listtitle: string;
}

interface ProjectData {
    project: string;
    date: string;
    budget: string;
    icon: LucideIcon;
    iconcolor: string;
    iconbg: string;
    avatar: string;
    name: string;
    handle: string;
    progress: number;
    progressColor: string;
}

const TableComp = () => {
    const tableActionData: TableAction[] = [
        { icon: FolderPlus, listtitle: "Add" },
        { icon: FolderPen, listtitle: "Edit" },
        { icon: FolderMinus, listtitle: "Delete" },
    ];

    const checkboxTableData: ProjectData[] = [
        {
            project: 'Web App Project',
            date: "04 June 2026",
            budget: '12,000',
            icon: AppWindowMac,
            iconcolor: 'text-orange-400',
            iconbg: 'bg-orange-400/20',
            avatar: "https://images.shadcnspace.com/assets/profiles/user-11.jpg",
            name: 'Olivia Rhye',
            handle: 'olivia@ui.com',
            progress: 60,
            progressColor: '**:data-[slot=progress-indicator]:bg-orange-400'
        },
        {
            project: 'MaterialM Admin',
            date: "09 January 2026",
            budget: '8000',
            icon: HandMetal,
            iconcolor: 'text-sky-400',
            iconbg: 'bg-sky-400/20',
            avatar: "https://images.shadcnspace.com/assets/profiles/user-8.jpg",
            name: 'Barbara Steele',
            handle: 'steele@ui.com',
            progress: 30,
            progressColor: '**:data-[slot=progress-indicator]:bg-blue-500'
        },
        {
            project: 'Digital Marketing',
            date: "15 April 2026",
            budget: '15,000',
            icon: Megaphone,
            iconcolor: 'text-teal-400',
            iconbg: 'bg-teal-400/20',
            avatar: "https://images.shadcnspace.com/assets/profiles/user-3.jpg",
            name: 'Leonard Gordon',
            handle: 'olivia@ui.com',
            progress: 45,
            progressColor: '**:data-[slot=progress-indicator]:bg-amber-300'
        },
        {
            project: 'Shadcn Space Design',
            date: "30 March 2026",
            budget: '1000',
            icon: Contrast,
            iconcolor: 'text-red-500',
            iconbg: 'bg-red-500/20',
            avatar: "https://images.shadcnspace.com/assets/profiles/user-4.jpg",
            name: 'Evelyn Pope',
            handle: 'steele@ui.com',
            progress: 37,
            progressColor: '**:data-[slot=progress-indicator]:bg-red-500'
        },
        {
            project: 'Graphic Design',
            date: "23 October 2026",
            budget: '7000',
            icon: Brush,
            iconcolor: 'text-blue-500',
            iconbg: 'bg-blue-500/20',
            avatar: "https://images.shadcnspace.com/assets/profiles/user-5.jpg",
            name: 'Tommy Garza',
            handle: 'olivia@ui.com',
            progress: 87,
            progressColor: '**:data-[slot=progress-indicator]:bg-teal-400'
        },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center max-w-4xl mx-auto">
            <Card className="w-full rounded-md border-0 overflow-hidden pb-0">
                <CardHeader>
                    <CardTitle>Top Projects</CardTitle>
                    <CardDescription>Checkout the statistics of top projects</CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                    <div className="overflow-x-auto">
                        <Table className="min-w-2xl">
                            <TableHeader>
                                <TableRow className="hover:bg-transparent!">
                                    <TableHead className="p-3 ps-6">#</TableHead>
                                    <TableHead className="p-2">Project Name</TableHead>
                                    <TableHead className="p-2">Budget</TableHead>
                                    <TableHead className="p-2">Manager</TableHead>
                                    <TableHead className="p-2">Progress</TableHead>
                                    <TableHead className="p-3 pe-6 flex justify-end">Action</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody className="divide-y divide-border dark:divide-darkborder">
                                {checkboxTableData.map((item, index) => (
                                    <TableRow key={index}>
                                        {/* Checkbox */}
                                        <TableCell className="whitespace-nowrap p-3 ps-6">
                                            <Checkbox className="data-[state=checked]:bg-blue-500 dark:data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 dark:data-[state=checked]:border-blue-500 cursor-pointer" />
                                        </TableCell>

                                        {/* project */}
                                        <TableCell className="whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <div className={cn("h-9 w-9 rounded-full flex items-center justify-center", item.iconbg)}>
                                                    <item.icon width={18} height={18} className={cn(item.iconcolor)} />
                                                </div>
                                                <div className="">
                                                    <h6 className="text-sm font-medium">{item.project}</h6>
                                                    <p className="text-xs text-muted-foreground">{item.date}</p>
                                                </div>
                                            </div>
                                        </TableCell>

                                        {/* Status Badge */}
                                        <TableCell className="whitespace-nowrap">
                                            <p className="text-sm text-foreground">
                                                ${item.budget}
                                            </p>
                                        </TableCell>

                                        {/* Customer */}
                                        <TableCell className="whitespace-nowrap">
                                            <div className="flex gap-3 items-center">
                                                <img
                                                    src={item.avatar}
                                                    alt="icon"
                                                    className="h-9 w-9 rounded-full"
                                                    width={36}
                                                    height={36}
                                                />
                                                <div className="truncate line-clamp-2 max-w-56">
                                                    <h6 className="text-base! font-normal!">{item.name}</h6>
                                                    <p className="text-sm text-muted-foreground">{item.handle}</p>
                                                </div>
                                            </div>
                                        </TableCell>

                                        {/* Progress */}
                                        <TableCell className="whitespace-nowrap">
                                            <Progress
                                                value={item.progress}
                                                className={cn("w-full h-1", `${item.progressColor}`)}
                                            />
                                        </TableCell>

                                        {/* Dropdown Menu */}
                                        <TableCell className="whitespace-nowrap p-3 pe-6">
                                            <div className="flex items-center justify-end">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger>
                                                        <span className="flex justify-center items-center rounded-full p-2 hover:bg-muted cursor-pointer">
                                                            <EllipsisVertical width={16} height={16} />
                                                        </span>
                                                    </DropdownMenuTrigger>

                                                    <DropdownMenuContent align="end">
                                                        {tableActionData.map((action, idx) => (
                                                            <DropdownMenuItem key={idx} className="group flex gap-3 hover:bg-accent! cursor-pointer">
                                                                <action.icon />
                                                                <span>{action.listtitle}</span>
                                                            </DropdownMenuItem>
                                                        ))}
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default TableComp;