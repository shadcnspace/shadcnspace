"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { motion } from "motion/react";
import Technologies from "./technologies";

export const Hero = () => {

  const stats = [
    {
      id: 1,
      name: "Blocks",
      count: "48+",
    },
    {
      id: 2,
      name: "Templates",
      count: "3",
    },
    {
      id: 3,
      name: "Components",
      count: "110+",
    },
  ];

  return (
    <section className="xl:py-24 md:py-16 py-8 bg-gradient-to-b from-background to-muted dark:to-muted/20 border-b border-border">
      <div className="container">
        <div className="flex flex-col lg:max-w-5xl gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="sm:flex hidden items-center outline outline-border rounded-full w-fit">
            <div className="py-1 ps-1.5 flex">
              <div className="bg-blue-500 text-primary-foreground py-0.5 px-2 rounded-full text-xs font-medium flex">
                Free
              </div>
            </div>
            {stats.map((item) => (
              <React.Fragment key={item.id} >
                <div className="py-1 ps-2.5 pe-3">
                  <p className="text-sm text-primary">{item.count} {item.name}</p>
                </div>
                {item.id !== stats.length && <Separator orientation="vertical" />}
              </React.Fragment>
            ))}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="relative text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight lg:pe-2.5">
            Extraordinary Shadcn UI blocks, components, and templates
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="text-sm sm:text-lg text-muted-foreground lg:max-w-8/12">
            An open-source collection of production-ready <span className="font-medium text-primary">Shadcn UI blocks</span>, <span className="font-medium text-primary">components</span>, and <span className="font-medium text-primary">templates</span> for websites, admin dashboards and modern <span className="font-medium text-primary">React web projects</span>, built with <span className="font-medium text-primary">Tailwind CSS</span> and ready to copy-paste or install via the Shadcn CLI.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.75 }} className="flex items-center flex-wrap gap-4 sm:gap-8">
            <Button
              size="lg"
              className="h-auto! py-3 px-6 text-base font-medium rounded-lg border-0"
            >
              <Link href="#ui-blocks" className="flex items-center gap-2">Browse Blocks & Templates <Icon icon="line-md:arrow-right" width={20} height={20} /></Link>
            </Button>
            <Technologies />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
