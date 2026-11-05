"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const rows = [
  { id: "switch-sm-off", label: "Small", size: "sm" as const },
  { id: "switch-sm-on", label: "Small, on", size: "sm" as const, defaultChecked: true },
  { id: "switch-default-off", label: "Default", size: "default" as const },
  { id: "switch-default-on", label: "Default, on", size: "default" as const, defaultChecked: true },
  { id: "switch-disabled-off", label: "Disabled", size: "default" as const, disabled: true },
  { id: "switch-disabled-on", label: "Disabled, on", size: "default" as const, disabled: true, defaultChecked: true },
  { id: "switch-invalid", label: "Invalid", size: "default" as const, invalid: true },
];

const SwitchDemo = () => {
  return (
    <div className="grid w-full max-w-xs grid-cols-2 gap-x-8 gap-y-4">
      {rows.map((row) => (
        <Label key={row.id} htmlFor={row.id} className="justify-between font-normal">
          {row.label}
          <Switch
            id={row.id}
            size={row.size}
            defaultChecked={row.defaultChecked}
            disabled={row.disabled}
            aria-invalid={row.invalid || undefined}
          />
        </Label>
      ))}
    </div>
  );
};

export default SwitchDemo;
