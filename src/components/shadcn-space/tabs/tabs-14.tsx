import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Status = "live" | "review" | "draft" | "archived";

const statuses: { value: Status; name: string; dot: string; pulse?: boolean }[] = [
  { value: "live", name: "Live", dot: "bg-teal-400", pulse: true },
  { value: "review", name: "In Review", dot: "bg-amber-300" },
  { value: "draft", name: "Draft", dot: "bg-sky-400" },
  { value: "archived", name: "Archived", dot: "bg-muted-foreground" },
];

const projects: { name: string; url: string; updated: string; status: Status }[] = [
  { name: "Marketing Site", url: "shadcnspace.com", updated: "2h ago", status: "live" },
  { name: "Docs", url: "docs.shadcnspace.com", updated: "5h ago", status: "live" },
  { name: "Customer Portal", url: "portal.acme.dev", updated: "1d ago", status: "live" },
  { name: "Pricing Redesign", url: "preview-412.acme.dev", updated: "30m ago", status: "review" },
  { name: "Onboarding Flow", url: "preview-398.acme.dev", updated: "3h ago", status: "review" },
  { name: "Mobile Dashboard", url: "Not deployed", updated: "Yesterday", status: "draft" },
  { name: "Changelog", url: "Not deployed", updated: "2d ago", status: "draft" },
  { name: "Holiday Campaign", url: "holiday.acme.dev", updated: "Jan 12", status: "archived" },
];

const StatusDot = ({ dot, pulse }: { dot: string; pulse?: boolean }) => (
  <span aria-hidden="true" className="relative flex size-2">
    {pulse && (
      <span
        className={cn(
          "absolute inline-flex size-full rounded-full opacity-75 motion-safe:animate-ping",
          dot,
        )}
      />
    )}
    <span className={cn("relative inline-flex size-2 rounded-full", dot)} />
  </span>
);

const StatusDotsTabsDemo = () => {
  return (
    <div className="w-full max-w-lg">
      <Tabs defaultValue="live" className="gap-4">
        <TabsList variant="line" className="w-full justify-start">
          {statuses.map(({ value, name, dot, pulse }) => (
            <TabsTrigger key={value} value={value} className="flex-none gap-2 px-2.5">
              <StatusDot dot={dot} pulse={pulse} />
              {name}
              <span className="rounded-md bg-muted px-1.5 text-xs text-muted-foreground tabular-nums">
                {projects.filter((project) => project.status === value).length}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {statuses.map(({ value, name, dot }) => (
          <TabsContent key={value} value={value}>
            <ul className="divide-y divide-border rounded-xl border border-border">
              {projects
                .filter((project) => project.status === value)
                .map((project) => (
                  <li
                    key={project.name}
                    className="flex items-center justify-between gap-4 px-4 py-3"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <StatusDot dot={dot} />
                      <div className="min-w-0">
                        <p className="truncate font-medium text-foreground">
                          {project.name}
                        </p>
                        <p className="truncate text-xs text-muted-foreground">
                          {project.url}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      <span className="sr-only">{name}, updated </span>
                      {project.updated}
                    </span>
                  </li>
                ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default StatusDotsTabsDemo;
