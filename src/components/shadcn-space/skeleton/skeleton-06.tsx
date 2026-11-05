import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const messages = [
  { mine: false, lines: ["w-48", "w-32"] },
  { mine: true, lines: ["w-40"] },
  { mine: false, lines: ["w-56", "w-44", "w-24"] },
  { mine: true, lines: ["w-52", "w-28"] },
  { mine: false, lines: ["w-36"] },
];

const SkeletonDemo = () => {
  return (
    <div
      role="status"
      aria-label="Loading conversation"
      className="flex w-full max-w-sm flex-col overflow-hidden rounded-lg border border-border bg-background"
    >
      <div className="flex items-center gap-3 border-b border-border p-3">
        <Skeleton className="size-9 rounded-full motion-reduce:animate-none" />
        <div className="flex flex-col gap-1.5">
          <Skeleton className="h-3.5 w-28 motion-reduce:animate-none" />
          <Skeleton className="h-3 w-16 motion-reduce:animate-none" />
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4">
        {messages.map((message, index) => (
          <div key={index} className={cn("flex items-end gap-2", message.mine && "flex-row-reverse")}>
            {!message.mine && <Skeleton className="size-6 shrink-0 rounded-full motion-reduce:animate-none" />}
            <div
              className={cn(
                "flex flex-col gap-1.5 rounded-xl border border-border p-3",
                message.mine ? "items-end rounded-br-sm bg-muted/30" : "rounded-bl-sm",
              )}
            >
              {message.lines.map((width, line) => (
                <Skeleton key={line} className={cn("h-3 motion-reduce:animate-none", width)} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 border-t border-border p-3">
        <Skeleton className="h-9 flex-1 rounded-full motion-reduce:animate-none" />
        <Skeleton className="size-9 rounded-full motion-reduce:animate-none" />
      </div>
      <span className="sr-only">Loading conversation...</span>
    </div>
  );
};

export default SkeletonDemo;
