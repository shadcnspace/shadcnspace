"use client";

import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  isInView = true,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  isInView?: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString(),
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 1.5 });
      return controls.stop;
    }
  }, [value, isInView]);

  return (
    <span>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const WelcomeCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="flex flex-col items-center justify-center">
      <Card className="p-7 bg-blue-500 dark:bg-blue-500 pb-0 max-w-[500px] mx-auto my-auto relative overflow-hidden">
        <div className="grid grid-cols-12">
          {/* LEFT SIDE */}
          <div className="md:col-span-7 col-span-12">
            <div className="flex gap-4 items-center">
              <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center shrink-0">
                <TrendingUp size={24} className="text-neutral-600" />
              </div>

              <h5 className="text-xl text-white">Welcome Back David</h5>
            </div>

            {/* COUNTERS */}
            <div className="flex w-full xl:mt-12 sm:mt-12 lg:mt-6 mt-6">
              <div className="border-e border-white/20 pe-4">
                <p className="text-white opacity-75 text-sm mb-1">Budget</p>
                <h2 className="text-white text-2xl! font-semibold tracking-tight">
                  <AnimatedCounter
                    value={98450}
                    isInView={isInView}
                    prefix="$"
                  />
                </h2>
              </div>

              <div className="ps-4">
                <p className="text-white opacity-75 text-sm mb-1">Expenses</p>
                <h2 className="text-white text-2xl! font-semibold tracking-tight">
                  <AnimatedCounter
                    value={2440}
                    isInView={isInView}
                    prefix="$"
                  />
                </h2>
              </div>
            </div>
          </div>

          {/* IMAGE RIGHT */}
          <div className="md:col-span-5 col-span-12 md:ms-auto ms-auto me-auto">
            <img
              src="https://images.shadcnspace.com/assets/backgrounds/welcome-bg-1.png"
              alt="background"
              className="-mb-n5 xl:max-w-[170px] lg:max-w-36 md:max-w-36 max-w-32 lg:ps-4 md:pt-0 pt-6"
              width={1024}
              height={195}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WelcomeCard;
