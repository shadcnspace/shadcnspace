import { CircleCheck, Info, OctagonAlert, TriangleAlert } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const alerts = [
  {
    icon: Info,
    title: "Scheduled maintenance",
    description: "The dashboard will be read only on Sunday from 2:00 to 3:00 AM UTC.",
    className: "border-sky-400/40 bg-sky-400/10",
    iconClass: "text-sky-400!",
  },
  {
    icon: CircleCheck,
    title: "Domain verified",
    description: "acme.com is connected and SSL is active.",
    className: "border-teal-400/40 bg-teal-400/10",
    iconClass: "text-teal-400!",
  },
  {
    icon: TriangleAlert,
    title: "Your trial ends in 3 days",
    description: "Add a payment method to keep your projects running.",
    className: "border-amber-300/50 bg-amber-300/15",
    iconClass: "text-amber-300!",
  },
  {
    icon: OctagonAlert,
    title: "Build failed",
    description: "Type error in src/app/page.tsx on line 42.",
    className: "border-orange-400/40 bg-orange-400/10",
    iconClass: "text-orange-400!",
  },
];

const AlertDemo = () => {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      {alerts.map((alert) => (
        <Alert key={alert.title} className={alert.className}>
          <alert.icon className={alert.iconClass} />
          <AlertTitle>{alert.title}</AlertTitle>
          <AlertDescription className="text-foreground/80">{alert.description}</AlertDescription>
        </Alert>
      ))}
    </div>
  );
};

export default AlertDemo;
