"use client";

import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";

const tags = [
  { id: "remote", label: "Remote", count: 42 },
  { id: "full-time", label: "Full time", count: 87 },
  { id: "contract", label: "Contract", count: 19 },
  { id: "senior", label: "Senior", count: 34 },
  { id: "design", label: "Design", count: 23 },
  { id: "engineering", label: "Engineering", count: 61 },
  { id: "visa", label: "Visa sponsor", count: 8 },
];

const CheckboxDemo = () => {
  const [selected, setSelected] = useState<string[]>(["remote", "engineering"]);

  const toggle = (id: string, checked: boolean) =>
    setSelected((current) => (checked ? [...current, id] : current.filter((item) => item !== id)));

  return (
    <div role="group" aria-labelledby="job-filters-label" className="flex w-full max-w-md flex-col gap-3">
      <div className="flex items-center justify-between">
        <p id="job-filters-label" className="text-sm font-medium text-foreground">Filter jobs</p>
        {selected.length > 0 && (
          <button
            type="button"
            onClick={() => setSelected([])}
            className="text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Clear all
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <label
            key={tag.id}
            className="flex cursor-pointer items-center gap-2 rounded-full border border-border py-1.5 pr-3 pl-2 text-sm text-muted-foreground transition-colors select-none hover:bg-muted hover:text-foreground has-focus-visible:ring-2 has-focus-visible:ring-ring has-data-checked:border-foreground/40 has-data-checked:bg-muted has-data-checked:text-foreground"
          >
            <Checkbox
              checked={selected.includes(tag.id)}
              onCheckedChange={(checked) => toggle(tag.id, checked)}
              className="rounded-full"
            />
            {tag.label}
            <span className="text-xs text-muted-foreground tabular-nums">{tag.count}</span>
          </label>
        ))}
      </div>
      <p className="text-xs text-muted-foreground" aria-live="polite">
        {selected.length ? `${selected.length} filters applied` : "Showing all jobs"}
      </p>
    </div>
  );
};

export default CheckboxDemo;
