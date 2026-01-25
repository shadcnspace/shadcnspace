"use client";

import { useState, useId } from "react";
import { CircleIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const statuses = [
  {
    value: "In Progress",
    label: "In Progress",
    color: "text-violet-500 fill-violet-500",
  },
  {
    value: "Pending",
    label: "Pending",
    color: "text-amber-300 fill-amber-300",
  },
  {
    value: "Completed",
    label: "Completed",
    color: "text-teal-600 fill-teal-600",
  },
  {
    value: "Cancelled",
    label: "Cancelled",
    color: "text-gray-500 fill-gray-500",
  },
  {
    value: "Rejected",
    label: "Rejected",
    color: "text-red-500 fill-red-500",
  },
];

const SelectStatusDemo = () => {
  const id = useId();
  const [value, setValue] = useState("In Progress");

  const selectedStatus = statuses.find((s) => s.value === value);

  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor={id}>Status</Label>

      <Select value={value} onValueChange={(val) => val && setValue(val)}>
        <SelectTrigger
          id={id}
          className="w-full [&>span]:flex [&>span]:items-center [&>span]:gap-2"
        >
          {selectedStatus && (
            <CircleIcon className={`size-2 ${selectedStatus.color}`} />
          )}
          <SelectValue />
        </SelectTrigger>

        <SelectContent align="start" alignItemWithTrigger={false} className="data-[state=open]:slide-in-from-bottom-8 data-[state=open]:zoom-in-100 duration-400">
          {statuses.map((status) => (
            <SelectItem
              key={status.value}
              value={status.value}
              className="flex items-center gap-2"
            >
              <div className="flex items-center gap-2">
                <CircleIcon className={`size-2 ${status.color}`} />
                <span className="truncate">{status.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectStatusDemo;
