import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ConfettiButton } from "@/components/ui/confetti";
import { Check, X } from "lucide-react";

export default function AlertSocialComponent() {
  return (
    <Alert className="flex items-center justify-between">
      <AlertDescription className="text-sm font-medium">Your connection request has been sent.</AlertDescription>
      <div className="flex gap-2">
        <ConfettiButton className="rounded-lg! px-3 py-1 bg-teal-400/20 hover:bg-teal-400/25 text-teal-400">
          <Check className="text-teal-400"/>
          <span>Accept</span>
        </ConfettiButton>
        <Button variant={"destructive"} className=""><X/></Button>
      </div>
    </Alert>
  );
}