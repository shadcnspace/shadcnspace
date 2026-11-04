"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function ToastComponent() {
  const handleInvite = () => {
    toast.success("Invitation sent", {
      description: "alex@example.com has been invited to collaborate.",
      duration: 5000,
      action: {
        label: "Resend",
        onClick: () =>
          toast.success("Invitation resent", {
            description: "A new invite link has been delivered."
          })
      }
    });
  };

  return (
    <Button variant="outline" onClick={handleInvite} className="cursor-pointer">
      Invite Member
    </Button>
  );
}
