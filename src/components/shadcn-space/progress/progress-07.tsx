import { cn } from "@/lib/utils";

const TOTAL_GB = 256;

const segments = [
  { label: "Photos", gb: 92.4, color: "bg-orange-400" },
  { label: "Apps", gb: 48.1, color: "bg-blue-500" },
  { label: "Documents", gb: 21.6, color: "bg-teal-400" },
  { label: "System", gb: 18.9, color: "bg-sky-400" },
  { label: "Other", gb: 12.3, color: "bg-amber-300" },
];

const ProgressDemo = () => {
  const used = segments.reduce((sum, segment) => sum + segment.gb, 0);
  const free = TOTAL_GB - used;

  return (
    <div className="flex w-full max-w-md flex-col gap-4 rounded-lg border border-border bg-background p-5">
      <div className="flex items-baseline justify-between">
        <p className="text-sm font-medium text-foreground">Storage</p>
        <p className="text-sm text-muted-foreground tabular-nums">
          {used.toFixed(1)} GB of {TOTAL_GB} GB used
        </p>
      </div>

      <div
        role="img"
        aria-label={`${segments.map((segment) => `${segment.label} ${segment.gb} GB`).join(", ")}, ${free.toFixed(1)} GB free`}
        className="flex h-3 w-full gap-0.5 overflow-hidden rounded-full bg-muted"
      >
        {segments.map((segment) => (
          <div
            key={segment.label}
            className={cn("h-full first:rounded-l-full", segment.color)}
            style={{ width: `${(segment.gb / TOTAL_GB) * 100}%` }}
          />
        ))}
      </div>

      <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
        {segments.map((segment) => (
          <li key={segment.label} className="flex items-center gap-2 text-sm">
            <span className={cn("size-2 shrink-0 rounded-full", segment.color)} aria-hidden="true" />
            <span className="text-foreground">{segment.label}</span>
            <span className="ml-auto text-muted-foreground tabular-nums sm:ml-0">{segment.gb} GB</span>
          </li>
        ))}
        <li className="flex items-center gap-2 text-sm">
          <span className="size-2 shrink-0 rounded-full border border-border bg-muted" aria-hidden="true" />
          <span className="text-foreground">Free</span>
          <span className="ml-auto text-muted-foreground tabular-nums sm:ml-0">{free.toFixed(1)} GB</span>
        </li>
      </ul>
    </div>
  );
};

export default ProgressDemo;
