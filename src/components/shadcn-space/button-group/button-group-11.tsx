"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Code2Icon, GlobeIcon, TestTube2Icon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const devVariants = {
  active: {
    scale: 1.1,
    y: [0, -1, 1, -1, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      },
      scale: { duration: 0.2 },
    },
  },
  inactive: {
    scale: 1,
    y: 0,
    rotate: 0,
  },
  hover: {
    scale: 1.15,
    rotate: [0, -5, 5, 0],
    transition: { duration: 0.3 },
  },
};

const stagingVariants = {
  active: {
    scale: 1.1,
    rotate: [0, -10, 10, -8, 8, 0],
    transition: {
      rotate: {
        repeat: Infinity,
        repeatDelay: 1.2,
        duration: 0.8,
        ease: "easeInOut",
      },
      scale: { duration: 0.2 },
    },
  },
  inactive: {
    scale: 1,
    rotate: 0,
    y: 0,
  },
  hover: {
    scale: 1.15,
    y: [0, -3, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  },
};

const productionVariants = {
  active: {
    scale: [1, 1.12, 1],
    transition: {
      scale: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      },
    },
  },
  inactive: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: 1.15,
    transition: { duration: 0.3 },
  },
};

const environments = [
  {
    id: "development",
    label: "Dev",
    icon: <Code2Icon aria-hidden="true" />,
    variants: devVariants,
  },
  {
    id: "staging",
    label: "Staging",
    icon: <TestTube2Icon aria-hidden="true" />,
    variants: stagingVariants,
  },
  {
    id: "production",
    label: "Production",
    icon: <GlobeIcon aria-hidden="true" />,
    variants: productionVariants,
  },
];

const EnvironmentButtonGroup = () => {
  const [active, setActive] = useState("development");

  return (
    <ButtonGroup>
      {environments.map((env) => {
        const isActive = active === env.id;
        let borderRadiusClass = "";
        if (env.id === "development") {
          borderRadiusClass = "rounded-l-lg! rounded-r-none!";
        } else if (env.id === "staging") {
          borderRadiusClass = "rounded-none!";
        } else if (env.id === "production") {
          borderRadiusClass =
            active === "production"
              ? "rounded-l-none! rounded-r-none!"
              : "rounded-l-none! rounded-r-lg!";
        }

        return (
          <Button
            key={env.id}
            variant="outline"
            className={cn(
              "relative overflow-hidden transition-colors duration-300 cursor-pointer",
              borderRadiusClass,
              isActive
                ? "text-primary-foreground hover:text-primary-foreground border-transparent"
                : "text-muted-foreground hover:text-foreground",
            )}
            onClick={() => setActive(env.id)}
          >
            {isActive && (
              <motion.span
                layoutId="active-env-bg"
                className="absolute inset-0 bg-primary"
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 28,
                }}
                style={{ borderRadius: "inherit" }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <motion.span
                className="inline-flex items-center justify-center"
                variants={env.variants}
                animate={isActive ? "active" : "inactive"}
                whileHover="hover"
              >
                {env.icon}
              </motion.span>
              <span>{env.label}</span>
            </span>
          </Button>
        );
      })}
      <AnimatePresence initial={false}>
        {active === "production" && (
          <motion.div
            key="live-badge"
            data-slot="button-group-text"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden flex items-stretch"
          >
            <div className="bg-transparent gap-2 border border-l-0 px-2.5 text-sm font-medium flex items-center whitespace-nowrap rounded-l-none! rounded-r-lg! h-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
              </span>
              <span>Live</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ButtonGroup>
  );
};

export default EnvironmentButtonGroup;
