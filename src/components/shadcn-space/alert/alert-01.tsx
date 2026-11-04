import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";

export default function AlertPassWordDemo() {
  return (
    <Alert variant="destructive">
      <AlertCircleIcon className="size-4" />
      <AlertTitle>Password does not meet requirements:</AlertTitle>
      <AlertDescription>
        <ul className="list-inside list-disc text-sm">
          <li>Minimum 8 characters</li>
          <li className="text-teal-400!">At least one uppercase letter</li>
          <li className="text-teal-400!">At least one lowercase letter</li>
        </ul>
      </AlertDescription>
    </Alert>
  );
}