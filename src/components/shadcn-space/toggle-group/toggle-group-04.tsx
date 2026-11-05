"use client";

import { useState } from "react";
import { KanbanSquare, LayoutGrid, List } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

type View = "grid" | "list" | "board";

const projects = [
  { name: "Website redesign", status: "In progress", color: "bg-blue-500" },
  { name: "Mobile app", status: "In progress", color: "bg-teal-400" },
  { name: "Brand refresh", status: "Review", color: "bg-orange-400" },
  { name: "Docs migration", status: "Review", color: "bg-sky-400" },
  { name: "Onboarding emails", status: "Done", color: "bg-amber-300" },
  { name: "Pricing page", status: "Done", color: "bg-blue-500" },
];

const columns = ["In progress", "Review", "Done"];

const ToggleGroupDemo = () => {
  const [view, setView] = useState<View>("grid");

  return (
    <div className="flex w-full max-w-xl flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-foreground">Projects</p>
        <ToggleGroup
          variant="outline"
          size="sm"
          spacing={0}
          value={[view]}
          // Keep one view selected: ignore the change that would empty the group.
          onValueChange={(value) => value[0] && setView(value[0] as View)}
          aria-label="Layout"
        >
          <ToggleGroupItem value="grid" aria-label="Grid view">
            <LayoutGrid />
          </ToggleGroupItem>
          <ToggleGroupItem value="list" aria-label="List view">
            <List />
          </ToggleGroupItem>
          <ToggleGroupItem value="board" aria-label="Board view">
            <KanbanSquare />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {view === "board" ? (
        <div className="grid grid-cols-3 gap-3">
          {columns.map((column) => (
            <div key={column} className="flex flex-col gap-2 rounded-lg bg-muted/40 p-2">
              <p className="px-1 text-xs font-medium text-muted-foreground">{column}</p>
              {projects
                .filter((project) => project.status === column)
                .map((project) => (
                  <div key={project.name} className="flex items-center gap-2 rounded-md border border-border bg-background p-2 text-sm text-foreground">
                    <span className={cn("size-2 shrink-0 rounded-full", project.color)} aria-hidden="true" />
                    <span className="truncate">{project.name}</span>
                  </div>
                ))}
            </div>
          ))}
        </div>
      ) : (
        <ul className={cn(view === "grid" ? "grid grid-cols-2 gap-3 sm:grid-cols-3" : "flex flex-col divide-y divide-border rounded-lg border border-border")}>
          {projects.map((project) => (
            <li
              key={project.name}
              className={cn(
                "flex text-sm",
                view === "grid" ? "flex-col gap-3 rounded-lg border border-border bg-background p-3" : "items-center gap-3 bg-background px-3 py-2.5",
              )}
            >
              <span className={cn("shrink-0 rounded-md", project.color, view === "grid" ? "h-12 w-full opacity-30" : "size-2 rounded-full")} aria-hidden="true" />
              <span className="flex-1 truncate font-medium text-foreground">{project.name}</span>
              <span className="text-xs text-muted-foreground">{project.status}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToggleGroupDemo;
