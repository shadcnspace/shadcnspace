"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  LucideIcon,
  AppWindowMac,
  ChartPie,
  Image,
  SwatchBook,
  WandSparkles,
  ArrowUpRight,
} from "lucide-react";

type ServiceData = {
  service_icon: LucideIcon;
  service_title: string;
  service_bg_color: string;
  service_text_color: string;
};

const serviceData: ServiceData[] = [
  {
    service_icon: SwatchBook,
    service_title: "Brand Strategy",
    service_bg_color: "bg-blue-500/10",
    service_text_color: "text-blue-500",
  },
  {
    service_icon: WandSparkles,
    service_title: "UX/UI Design",
    service_bg_color: "bg-orange-400/10",
    service_text_color: "text-orange-400",
  },
  {
    service_icon: ChartPie,
    service_title: "Analytics & Reporting",
    service_bg_color: "bg-teal-400/10",
    service_text_color: "text-teal-400",
  },
  {
    service_icon: Image,
    service_title: "Digital Marketing",
    service_bg_color: "bg-sky-400/10",
    service_text_color: "text-sky-400",
  },
  {
    service_icon: AppWindowMac,
    service_title: "Web Development",
    service_bg_color: "bg-red-500/10",
    service_text_color: "text-red-500",
  },
];

const Services = () => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.3,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="bg-background py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
        <div className="flex flex-col gap-8 sm:gap-16 justify-center items-center w-full">
          {/* Heading */}
          <div className="flex flex-col gap-4 justify-center items-center animate-in fade-in slide-in-from-top-10 duration-1000 delay-200 ease-in-out fill-mode-both">
            {/* Badge */}
            <Badge
              variant={"outline"}
              className="text-sm font-normal py-1 px-3 h-7"
            >
              Services
            </Badge>
            {/* Heading */}
            <div className="max-w-3xs sm:max-w-lg mx-auto text-center">
              <h2 className="text-foreground text-3xl sm:text-5xl font-medium">
                Where innovation meets aesthetics
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-8 sm:gap-12 justify-center items-center">
            {/* services */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
              {serviceData.map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <Card className={cn("ring-0 p-8", service.service_bg_color)}>
                    <CardContent className="p-0 flex flex-col items-start justify-between gap-12 sm:gap-16">
                      <service.service_icon
                        size={32}
                        className={cn(service.service_text_color)}
                      />
                      <p
                        className={cn(
                          "text-2xl font-medium max-w-36",
                          service.service_text_color
                        )}
                      >
                        {service.service_title}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            {/* cta */}
            <div className="bg-gray-950 border rounded-2xl p-8 flex flex-col lg:flex-row items-center justify-between gap-12 w-full animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200 ease-in-out fill-mode-both">
              <div className="text-center md:text-start">
                <p className="text-2xl font-medium text-white">
                  See Our Work in Action.{" "}
                </p>
                <p className="text-2xl font-medium text-white">
                  Start Your Creative Journey with Us!
                </p>
              </div>
              <div className="flex md:flex-row flex-col items-center gap-4">
                <Button className="group text-sm font-medium text-black bg-white hover:text-black dark:hover:text-black hover:bg-white/90 rounded-full flex items-center gap-4 p-1 ps-5 w-fit h-12">
                  <a href="#" className="flex items-center gap-4">
                    <span>Let’s Collaborate</span>
                    <div className="p-3 bg-black text-white rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                      <ArrowUpRight size={16} />
                    </div>
                  </a>
                </Button>
                <Button className="group text-sm font-medium text-white bg-gray-950 hover:text-white dark:hover:text-white hover:bg-gray-950/90 rounded-full border border-white/50 flex items-center gap-4 p-1 ps-5 w-fit h-12">
                  <a href="#" className="flex items-center gap-4">
                    <span>View Portfolio</span>
                    <div className="p-3 bg-white text-black rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                      <ArrowUpRight size={16} />
                    </div>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
