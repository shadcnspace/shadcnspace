"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "motion/react";

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="relative flex items-end text-white bg-black h-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        loop
        autoPlay
        muted
        playsInline
      >
        <source
          src="https://images.shadcnspace.com/assets/video/hero05-banner-video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 xl:px-16">
        <div className="flex flex-col gap-4 sm:gap-6 py-10 sm:py-16">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -32 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex items-start gap-2.5 md:gap-4"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0">
              <motion.img
                src={
                  "https://images.shadcnspace.com/assets/svgs/primary-leaf.svg"
                }
                alt="icon"
                width={44}
                height={44}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <p className="sm:text-base text-sm sm:leading-6 leading-5 font-normal text-white sm:max-w-sm">
              We create <span className="text-teal-400">high-performing</span>{" "}
              digital designs that elevate brands and enhance conversions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
            className="flex sm:flex-row flex-col items-start lg:items-baseline gap-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-10 lg:leading-32 font-bold">
              SHADCN®SPACE
            </h1>
            <div>
              <div className="bg-teal-400 rounded-full p-1 pl-8">
                <div className="lg:p-3 p-2 bg-white text-black rounded-full">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
