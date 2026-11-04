"use client";

import { toast, type ToastPosition } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";

const positions: { value: ToastPosition; label: string }[] = [
  { value: "top-left", label: "Top left" },
  { value: "top-center", label: "Top center" },
  { value: "top-right", label: "Top right" },
  { value: "bottom-left", label: "Bottom left" },
  { value: "bottom-center", label: "Bottom center" },
  { value: "bottom-right", label: "Bottom right" },
];

const SonnerDemo = () => {
  return (
    <div className="grid w-full max-w-sm grid-cols-3 gap-2 rounded-lg border border-dashed border-border p-3">
      {positions.map((position) => (
        <Button
          key={position.value}
          variant="outline"
          size="sm"
          onClick={() =>
            toast.add({
              title: `Toast at ${position.label.toLowerCase()}`,
              description: "Toasts stack per position.",
              position: position.value,
            })
          }
        >
          {position.label}
        </Button>
      ))}
    </div>
  );
};

export default SonnerDemo;
