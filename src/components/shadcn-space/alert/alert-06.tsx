"use client";

import { useState } from "react";
import { CircleAlertIcon, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface AlertItem {
  id: number;
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
  type?: "success" | "error";
}

const DEFAULT_ALERTS: AlertItem[] = [
  {
    id: 1,
    title: "Success Alert",
    description:
      "Alert notice communicate system status and provide feedback to users about their actions and options.",
    actionText: "Action",
    type: "success",
  },
  {
    id: 2,
    title: "Error Alert",
    description:
      "Alert notice communicate system status and provide feedback to users about their actions and options.",
    actionText: "Action",
    type: "error",
  },
];

const ALERT_STYLES: Record<
  "success" | "error",
  {
    bgGradient: string;
    iconBg: string;
    iconColor: string;
    btnBg: string;
    closeHover: string;
  }
> = {
  success: {
    bgGradient: "from-teal-400/10",
    iconBg: "bg-teal-400/20",
    iconColor: "text-teal-400",
    btnBg: "bg-teal-400 hover:bg-teal-400/85",
    closeHover: "hover:bg-teal-400/20",
  },
  error: {
    bgGradient: "from-red-500/10",
    iconBg: "bg-red-500/20",
    iconColor: "text-red-500",
    btnBg: "bg-red-500 hover:bg-red-500/85",
    closeHover: "hover:bg-red-500/20",
  },
};

interface AlertGradientDemoProps {
  alerts?: AlertItem[];
}

const AlertGradientDemo = ({
  alerts = DEFAULT_ALERTS,
}: AlertGradientDemoProps) => {
  const [state, setState] = useState({
    expandedId: 1 as number | null,
    closedIds: [] as number[],
  });

  const handleExpand = (id: number) =>
    setState((p) => ({ ...p, expandedId: p.expandedId === id ? null : id }));
  const handleClose = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setState((p) => ({
      ...p,
      expandedId: p.expandedId === id ? null : p.expandedId,
      closedIds: [...p.closedIds, id],
    }));
  };

  const visibleAlerts = alerts.filter((a) => !state.closedIds.includes(a.id));
  if (visibleAlerts.length === 0) return null;

  const transition = { type: "spring", stiffness: 300, damping: 30 };

  return (
    <div className="flex flex-col gap-2 w-full max-w-2xl">
      {visibleAlerts.map((alert) => {
        const isExpanded = state.expandedId === alert.id;
        const styles = ALERT_STYLES[alert.type || "success"];
        const desc = alert.description;

        return (
          <motion.div
            key={alert.id}
            layout
            transition={transition}
            onClick={() => handleExpand(alert.id)}
            className={`rounded-lg border-none shadow-xs text-accent-foreground flex gap-2 justify-between bg-linear-to-b to-transparent to-80% cursor-pointer select-none p-3 transition-colors duration-300 ${styles.bgGradient} ${isExpanded ? "items-start" : "items-center"}`}
          >
            <motion.div
              layout
              className={`p-2 shadow-sm rounded-full shrink-0 ${styles.iconBg}`}
            >
              <CircleAlertIcon size={16} className={styles.iconColor} />
            </motion.div>

            <motion.div
              layout
              transition={transition}
              className={`flex flex-1 gap-2 ${isExpanded ? "flex-col items-start" : "flex-row items-center justify-between overflow-hidden"}`}
            >
              <motion.div
                layout
                transition={transition}
                className={`flex gap-2 ${isExpanded ? "flex-col items-start gap-0.5" : "flex-row items-center"}`}
              >
                <motion.div layout="position" transition={transition}>
                  <AlertTitle className={isExpanded ? "" : "shrink-0 mb-0"}>
                    {alert.title}
                  </AlertTitle>
                </motion.div>
                <motion.div
                  layout="position"
                  transition={transition}
                  className="min-w-0"
                >
                  <AlertDescription className="text-accent-foreground/60">
                    {isExpanded
                      ? desc
                      : desc.length > 25
                        ? desc.slice(0, 25) + "..."
                        : desc}
                  </AlertDescription>
                </motion.div>
              </motion.div>

              {alert.actionText && (
                <motion.div
                  layout
                  transition={transition}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button
                    className={`w-fit text-white text-xs cursor-pointer shrink-0 ${styles.btnBg}`}
                    onClick={alert.onAction}
                  >
                    {alert.actionText}
                  </Button>
                </motion.div>
              )}
            </motion.div>

            <AnimatePresence mode="wait">
              {isExpanded && (
                <motion.button
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  className={`cursor-pointer shrink-0 p-1 rounded-full ${styles.closeHover}`}
                  onClick={(e) => handleClose(alert.id, e)}
                >
                  <XIcon className="size-4 text-accent-foreground/75" />
                  <span className="sr-only">Close</span>
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AlertGradientDemo;