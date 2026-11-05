import { Gauge } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const USED = 9240;
const LIMIT = 10000;

const AlertDemo = () => {
  const percent = Math.round((USED / LIMIT) * 100);

  return (
    <Alert className="w-full max-w-md border-amber-300/50 p-4">
      <Gauge className="text-amber-300!" />
      <AlertTitle>You have used {percent}% of your API requests</AlertTitle>
      <AlertDescription className="flex flex-col gap-3">
        <span>Requests over the limit will fail until your quota resets on Nov 1.</span>
        <span className="flex flex-col gap-1.5">
          <Progress value={percent} aria-label="API requests used" />
          <span className="flex justify-between text-xs tabular-nums">
            <span>
              {USED.toLocaleString("en-US")} / {LIMIT.toLocaleString("en-US")} requests
            </span>
            <span>{(LIMIT - USED).toLocaleString("en-US")} left</span>
          </span>
        </span>
        <span className="flex gap-2">
          <Button size="sm">Upgrade plan</Button>
          <Button size="sm" variant="outline">
            View usage
          </Button>
        </span>
      </AlertDescription>
    </Alert>
  );
};

export default AlertDemo;
