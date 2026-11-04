"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function ToastComponent() {
  const handleFileUpload = () => {
    const toastId = toast.loading("Uploading file...", {
      description: "Please wait while your file is being uploaded."
    });

    setTimeout(() => {
      toast.success("Upload complete", {
        id: toastId,
        description: "resume.pdf has been uploaded successfully.",
        action: {
          label: "View File",
          onClick: () => toast.info("Opening file preview...")
        }
      });
    }, 2000);
  };

  return (
    <Button variant="outline" onClick={handleFileUpload} className="cursor-pointer">
      Upload File
    </Button>
  );
}
