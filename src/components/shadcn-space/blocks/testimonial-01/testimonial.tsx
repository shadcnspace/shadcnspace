"use client";

import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "motion/react";

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="py-10">
      <div className="max-w-7xl mx-auto px-4 xl:px-16">
        <div className="flex flex-col items-center self-stretch gap-12">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -32 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center gap-2 sm:gap-4"
          >
            <Badge
              variant={"outline"}
              className="py-1 px-3 text-sm font-normal h-7"
            >
              Testimonials
            </Badge>
            <h2 className="text-foreground text-3xl sm:text-5xl font-medium max-w-xs sm:max-w-2xl mx-auto text-center">
              What our satisfied customers are saying about us
            </h2>
          </motion.div>
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
              className="col-span-1 lg:col-span-8"
            >
              <Card className="bg-[url('https://images.shadcnspace.com/assets/backgrounds/testimonials-userBg-01.webp')] object-cover bg-center bg-cover bg-no-repeat border border-border h-full w-full md:min-h-96 p-8 md:pe-16 rounded-2xl">
                <CardContent className="flex flex-col items-start justify-between gap-24 p-0 h-full">
                   <p className="text-white/70 text-base font-normal">
                    Customer stories
                  </p>
                  <div className="flex flex-col gap-6">
                    <p className="text-white text-xl lg:text-2xl font-medium">
                      Shadn Space expertise transformed my vision into success
                      with creativity, precision, and a deep understanding of my
                      goals.
                    </p>
                    <div>
                      <p className="text-white text-base font-medium">
                        Anaya Shah
                      </p>
                      <p className="text-white/70 text-sm font-normal">
                        Founder of Chipsland
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
              className="col-span-1 lg:col-span-4"
            >
              <Card className="bg-blue-500 border border-border h-full w-full md:min-h-96 p-8 rounded-2xl">
                <CardContent className="flex flex-col items-start justify-between gap-24 p-0 h-full">
                  <p className="text-white/70 text-base font-normal">
                    Facts & numbers
                  </p>
                  <div className="flex flex-col items-start gap-4">
                    <p className="text-white text-4xl lg:text-5xl font-medium">
                      91%
                    </p>
                    <p className="text-white text-xl lg:text-2xl font-medium">
                      clients recommend our design services.”
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              className="col-span-1 lg:col-span-4"
            >
              <Card className="bg-gray-950 border border-border h-full w-full p-8 rounded-2xl">
                <CardContent className="flex flex-col items-start justify-between gap-6 p-0 h-full">
                  <div className="flex flex-col items-start gap-2">
                    <p className="text-white/70 text-base font-normal">
                      Customer stories
                    </p>
                    <p className="text-white text-xl lg:text-2xl font-medium">
                      Their creativity and attention to detail transformed our
                      brand completely!
                    </p>
                  </div>
                  <img
                    src="https://images.shadcnspace.com/assets/backgrounds/testimonials-bg-01.webp"
                    alt="background-img"
                    width={'100%'}
                    height={220}
                  />
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              className="col-span-1 lg:col-span-8"
            >
              <Card className="bg-primary/10 dark:bg-white/10 border border-border h-full w-full p-8 rounded-2xl">
                <CardContent className="flex flex-col items-start justify-between gap-24 p-0 h-full">
                  <div className="flex flex-col items-start gap-2">
                    <p className="text-primary/70 text-base font-normal">
                      Customer stories
                    </p>
                    <p className="text-card-foreground text-xl lg:text-2xl font-medium">
                      “Shadcn Space Agency brought our ideas to life with
                      exceptional creativity and precision, exceeding
                      expectations.”
                    </p>
                  </div>
                  <div>
                    <p className="text-card-foreground text-base font-medium">
                      Sarah Mitchell
                    </p>
                    <p className="text-muted-foreground text-sm font-normal">
                      Marketing Head at TalentConnect
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
