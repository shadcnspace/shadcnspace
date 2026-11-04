"use client";
import AboutUs from "@/components/shadcn-space/blocks/about-us-01/about-us";
import { Target, WandSparkles, Zap } from "lucide-react";

const aboutusData = [
    {
      icon: WandSparkles,
      title: "Creativity",
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      icon: Zap,
      title: "Innovation",
      color: "bg-teal-400/10 text-teal-400" 
    },
    {
      icon: Target,
      title: "Strategy",
      color: "bg-orange-400/10 text-orange-400" 
    }
];

const statisticsCounter = [
    {
        title: "Total Projects Completed",
        count: 40
    },
    {
        title: "Years of Experience",
        count: 15
    },
    {
        title: "Design Awards",
        count: 12
    },
]

const AboutAndStats01 = () => {
  return (
    <>
      <AboutUs aboutusData={aboutusData} statisticsCounter={statisticsCounter} />
    </>
  );
};

export default AboutAndStats01;
