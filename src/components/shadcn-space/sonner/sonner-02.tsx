"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function ToastComponent() {
  const handleDelete = () => {
    toast.warning("Delete project?", {
      description: "This action will permanently remove the project and all its data.",
      action: {
        label: "Delete",
        onClick: () =>
          toast.error("Project deleted", {
            description: "The project has been permanently removed."
          })
      },
      cancel: {
        label: "Cancel",
        onClick: () => toast.info("Deletion cancelled.")
      }
    });
  };

  return (
    <Button variant="outline" onClick={handleDelete} className="cursor-pointer">
      Delete Project
    </Button>
  );
}
