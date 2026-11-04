"use client";

import { motion, useTransform, useMotionValue, useSpring } from "motion/react";

type Item = {
  id: number;
  name: string;
  designation: string;
  image: string;
};

const TooltipItem = ({ item }: { item: Item }) => {
  const x = useMotionValue(0);

  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), {
    stiffness: 100,
    damping: 15,
  });

  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), {
    stiffness: 100,
    damping: 15,
  });

  return (
    <div className="group relative">
      <motion.div
        style={{ translateX, rotate }}
        className="pointer-events-none absolute -top-16 left-1/2 hidden -translate-x-1/2 flex-col items-center rounded-md bg-blue-500 px-4 py-2 text-xs shadow-xl group-hover:flex"
      >
        <p className="whitespace-nowrap text-sm font-medium text-white">
          {item.name}
        </p>
        <p className="whitespace-nowrap text-xs text-white/50">
          {item.designation}
        </p>
      </motion.div>

      <img
        onMouseMove={(e) =>
          x.set(e.nativeEvent.offsetX - e.currentTarget.offsetWidth / 2)
        }
        src={item.image}
        alt={item.name}
        width={32}
        height={32}
        className="h-8 w-8 rounded-full object-cover object-top transition duration-500 group-hover:z-30 group-hover:scale-105"
      />
    </div>
  );
};

const AnimatedTooltipMotion = () => {
  const items: Item[] = [
    {
      id: 1,
      name: "Aarav Mehta",
      designation: "AI Researcher",
      image: "https://images.shadcnspace.com/assets/profiles/user-1.jpg",
    },
    {
      id: 2,
      name: "Sofia Martinez",
      designation: "Cloud Architect",
      image: "https://images.shadcnspace.com/assets/profiles/user-2.jpg",
    },
    {
      id: 3,
      name: "Kenji Tanaka",
      designation: "Cybersecurity Analyst",
      image: "https://images.shadcnspace.com/assets/profiles/user-3.jpg",
    },
    {
      id: 4,
      name: "Amelia Rossi",
      designation: "UX Strategist",
      image: "https://images.shadcnspace.com/assets/profiles/user-4.jpg",
    },
  ];

  return (
    <div className="flex items-center justify-center -space-x-2">
      {items.map((item) => (
        <TooltipItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default AnimatedTooltipMotion;
