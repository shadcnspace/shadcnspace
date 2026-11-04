"use client";

import { useState } from "react";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

const initialTasks: Task[] = [
  {
    id: "create-account",
    title: "Create Account",
    description: "Set up your Shadcnspace profile",
    completed: true,
  },
  {
    id: "install-component",
    title: "Install Your First Component",
    description: "Copy and use a component in your project",
    completed: false,
  },
  {
    id: "explore-blocks",
    title: "Explore Block Library",
    description: "Browse marketing and dashboard blocks",
    completed: false,
  },
  {
    id: "preview-templates",
    title: "Preview Templates",
    description: "See complete production-ready designs",
    completed: false,
  },
  {
    id: "save-favorites",
    title: "Save Favorites",
    description: "Build your personal component collection",
    completed: false,
  },
  {
    id: "join-community",
    title: "Join the Community",
    description: "Stay updated with new releases and updates",
    completed: false,
  },
];

const GetStartedDrawerDemo = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const completedCount = tasks.filter((task) => task.completed).length;

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger
        render={
          <Button variant={"outline"} className="capitalize cursor-pointer">
            explore shadcnspace
          </Button>
        }
      />
      <DrawerContent className="data-[swipe-direction=right]:rounded-none data-[swipe-axis=x]:sm:[--drawer-content-width:30rem] **:data-[slot=drawer-content]:w-full">
        <DrawerHeader className="gap-3 border-b p-5 text-left">
          <div className="flex items-center justify-between">
            <DrawerTitle className="text-lg font-semibold">
              Get Started
            </DrawerTitle>
            <DrawerClose
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="cursor-pointer"
                >
                  <XIcon className="size-5" />
                </Button>
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <DrawerDescription className="text-sm text-muted-foreground">
              {completedCount} / {tasks.length} Completed
            </DrawerDescription>
            <Progress
              value={(completedCount / tasks.length) * 100}
              className="w-full [&>div]:h-1.5 **:data-[slot=progress-track]:bg-primary/10"
            />
          </div>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto p-5">
          <div className="flex flex-col rounded-lg border overflow-hidden">
            {tasks.map((task, index) => (
              <Label
                key={task.id}
                className={cn(
                  "flex items-start gap-3 p-4 text-left cursor-pointer hover:bg-muted/50 transition-colors text-foreground font-normal leading-normal",
                  index !== tasks.length - 1 && "border-b",
                )}
              >
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => toggleTask(task.id)}
                  className="mt-0.5"
                />
                <div className="flex flex-col gap-1 select-none">
                  <p className="text-sm font-medium">{task.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {task.description}
                  </p>
                </div>
              </Label>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default GetStartedDrawerDemo;
