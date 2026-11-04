import { cn } from "@/lib/utils";

function ProgressRing({
  value,
  size = 64,
  stroke = 6,
  label,
  className,
}: {
  value: number;
  size?: number;
  stroke?: number;
  label: string;
  className?: string;
}) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.min(Math.max(value, 0), 100);

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clamped}
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90" aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" strokeWidth={stroke} className="stroke-muted" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - clamped / 100)}
          className={cn("transition-all duration-500 motion-reduce:transition-none", className)}
        />
      </svg>
      <span className="absolute text-xs font-medium text-foreground tabular-nums">{clamped}%</span>
    </div>
  );
}

const rings = [
  { label: "Storage", value: 72, className: "stroke-blue-500", detail: "72 of 100 GB" },
  { label: "Bandwidth", value: 38, className: "stroke-teal-400", detail: "380 of 1,000 GB" },
  { label: "Build minutes", value: 91, className: "stroke-orange-400", detail: "5,460 of 6,000" },
];

const ProgressDemo = () => {
  return (
    <div className="grid w-full max-w-md grid-cols-3 gap-3">
      {rings.map((ring) => (
        <div key={ring.label} className="flex flex-col items-center gap-2 rounded-lg border border-border bg-background p-4 text-center">
          <ProgressRing value={ring.value} label={ring.label} className={ring.className} />
          <div>
            <p className="text-sm font-medium text-foreground">{ring.label}</p>
            <p className="text-xs text-muted-foreground tabular-nums">{ring.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressDemo;
