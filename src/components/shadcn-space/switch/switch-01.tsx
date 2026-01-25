"use client";

import { useId, useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SwitchActiveEffectDemo = () => {
  const id = useId();
  const [checked, setChecked] = useState(false);

  const toggle = () => setChecked((prev) => !prev);

  return (
    <div
      className="border border-input has-data-checked:border-primary/50 relative flex w-full items-start justify-between gap-2 rounded-md p-4 outline-none"
      onClick={toggle}
    >
      <div className="flex flex-col gap-2 grow">
        <Label htmlFor={id} onClick={toggle}>
          Remember me
        </Label>
        <p id={`${id}-description`} className="text-muted-foreground text-xs">
          Save my login details for next time.
        </p>
      </div>
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={setChecked}
        className="cursor-pointer"
      />
    </div>
  );
};

export default SwitchActiveEffectDemo;
