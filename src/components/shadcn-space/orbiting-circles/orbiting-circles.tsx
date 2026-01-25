import React from "react";
import { LucideIcon, Sun, Moon, Star, Earth } from "lucide-react";
import { cn } from "@/lib/utils";
import "@/components/shadcn-space/orbiting-circles/orbiting-circles.css";

export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircleIcons({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            style={
              {
                "--duration": `${calculatedDuration}s`,
                "--radius": `${radius}px`,
                "--angle": `${angle}deg`,
              } as React.CSSProperties
            }
            className={cn("animate-orbit", reverse && "reverse", className)}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}

export default function OrbitingCirclesDemo() {

  type IconData = {
  IconComponent: LucideIcon;
  bgColor: string;
  textColor: string;
  label: string;
};

  const circle1Icons: IconData[] = [
    { IconComponent: Sun, bgColor: "bg-orange-400/10", textColor: "text-orange-400", label: "Sun" },
    { IconComponent: Earth, bgColor: "bg-blue-500/10", textColor: "text-blue-500", label: "Earth" },
    { IconComponent: Star, bgColor: "bg-red-500/10", textColor: "text-red-500", label: "Star" },
    { IconComponent: Moon, bgColor: "bg-teal-400/10", textColor: "text-teal-400", label: "Moon" },
  ];

  const circle2Icons: IconData[] = [
    { IconComponent: Earth, bgColor: "bg-blue-500/10", textColor: "text-blue-500", label: "Earth" },
    { IconComponent: Star, bgColor: "bg-red-500/10", textColor: "text-red-500", label: "Star" },
    { IconComponent: Moon, bgColor: "bg-teal-400/10", textColor: "text-teal-400", label: "Moon" },
    { IconComponent: Sun, bgColor: "bg-orange-400/10", textColor: "text-orange-400", label: "Sun" },
  ];

  return (
    <div className="relative flex min-h-96 w-full items-center justify-center overflow-hidden">
      <OrbitingCircleIcons>
        {circle1Icons.map(({ IconComponent, bgColor, textColor, label }) => (
          <div key={label} className={cn("p-2 rounded-full", bgColor, textColor)} aria-label={label}>
            <IconComponent className="size-6" />
          </div>
        ))}
      </OrbitingCircleIcons>

      <OrbitingCircleIcons radius={100} reverse speed={2}>
        {circle2Icons.map(({ IconComponent, bgColor, textColor, label }) => (
          <div key={label} className={cn("p-2 rounded-full", bgColor, textColor)} aria-label={label}>
            <IconComponent className="size-6" />
          </div>
        ))}
      </OrbitingCircleIcons>
    </div>
  );
}
