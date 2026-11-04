"use client"

import { cn } from "@/lib/utils";
import { LucideIcon, Plus } from "lucide-react";
import { Instrument_Serif } from "next/font/google";
import { useEffect, useRef } from "react";
import { motion, useSpring, useTransform, useInView } from "motion/react";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

type aboutusData = {
  icon: LucideIcon;
  title: string;
  color: string;
}[];

type statisticsCounter = {
  title: string;
  count: number;
}[];

const AnimatedCounter = ({
  value,
  isInView,
}: {
  value: number;
  isInView: boolean;
}) => {
  const springValue = useSpring(0, {
    bounce: 0,
    duration: 2000,
  });

  const displayValue = useTransform(springValue, (current) =>
    Math.round(current)
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return <motion.span>{displayValue}</motion.span>;
};

const AboutUs = ({
  aboutusData,
  statisticsCounter,
}: {
  aboutusData: aboutusData;
  statisticsCounter: statisticsCounter;
}) => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section>
      <div className="min-h-screen flex items-center justify-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16 py-8 lg:py-12">
          <div className="flex flex-col items-center justify-center gap-8 md:gap-16">
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="flex flex-col items-center justify-center gap-4"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground text-center tracking-tight">
                Crafting exceptional, well experienced & technology driven
                strategies to drive impactful results with
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
                {aboutusData.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-center gap-3 px-6 py-2 rounded-full",
                      item.color
                    )}
                  >
                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                    <span
                      className={cn(
                        "text-4xl font-normal",
                        instrumentSerif.className
                      )}
                    >
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div
              ref={statsRef}
              className="w-full grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-0"
            >
              {statisticsCounter?.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="relative px-6 py-5 sm:py-10 gap-3 flex flex-col items-center justify-center"
                  >
                    {index !== 0 && (
                      <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-40 bg-border" />
                    )}
                    <div className="flex gap-0 sm:gap-2 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium">
                      <Plus
                        strokeWidth={3.5}
                        className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12"
                      />
                      <AnimatedCounter
                        value={value.count}
                        isInView={isInView}
                      />
                    </div>
                    <p className="text-base font-normal text-muted-foreground text-center">
                      {value.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
