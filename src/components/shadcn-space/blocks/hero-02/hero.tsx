"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import SeamlessCloud from "@/components/shadcn-space/blocks/hero-02/seamless-cloud";
import { Bath, BedDouble, Car } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { motion, useInView } from "motion/react";

const propertyFeatures = [
  {
    icon: BedDouble,
    label: "4 Bedrooms",
    className: "border-e border-b",
  },
  {
    icon: Bath,
    label: "4 Restroom",
    className: "border-b",
  },
  {
    icon: Car,
    label: "Parking space",
    className: "border-e",
  },
  {
    price: "$4,750,000",
    label: "For selling price",
    className: "",
  },
];

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef}>
      <div className='bg-[url(https://images.shadcnspace.com/assets/backgrounds/real-estate-bg.webp)] bg-contain bg-center bg-repeat overflow-hidden relative flex flex-col xl:h-screen justify-center z-10 xl:gap-0 gap-12'>
        <div className='max-w-7xl mx-auto sm:px-16 px-4 w-full xl:pt-0 pt-32'>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className='relative text-white text-start z-30'
          >
            <p className='text-inherit text-xs font-normal'>Palm springs, CA</p>
            <h1 className='text-inherit text-5xl! md:text-6xl! lg:text-7xl! font-normal! max-w-32 mt-2 mb-6'>
              Space <span className='font-semibold!'>Residence</span>
            </h1>
            <div>
              <Button
                className='px-6 py-3.5 bg-white border-0 text-black duration-300 hover:bg-white/80 font-medium rounded-full hover:cursor-pointer h-auto'>
                <a href='#'>Schedule a tour</a>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="xl:absolute bottom-0 right-0 z-30 xl:w-auto lg:w-4/5 w-full lg:ms-auto">
          <div className='relative'>
            <div className='xl:absolute bottom-24 w-full z-0'>
              <img src={'https://images.shadcnspace.com/assets/backgrounds/hero-4-banner.webp'} alt='heroImg' width={956} height={897} className='w-full' />
            </div>
            <div className='bg-background rounded-t-2xl xl:rounded-none xl:rounded-tl-2xl sm:py-10 py-6 sm:ps-12 ps-4 sm:pe-12 pe-4 xl:pe-60 z-1 relative'>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className='grid grid-cols-2 sm:grid-cols-4 gap-0 sm:flex sm:items-center justify-center sm:gap-10 sm:text-center'
              >
                {propertyFeatures.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 32 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                    transition={{
                      duration: 1,
                      delay: 0.1 + index * 0.2,
                      ease: "easeInOut",
                    }}
                    className="flex sm:gap-10"
                  >
                    <div className={`flex flex-col items-center gap-3 sm:py-0 sm:px-0 py-5 px-8 sm:border-0 border-gray-200 dark:border-gray-700 w-full ${item.className}`}>
                      {item.icon ? (
                        <>
                          <item.icon size={28} className='text-foreground font-light' />
                          <p className='text-sm font-normal text-muted-foreground'>
                            {item.label}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className='sm:text-xl text-lg font-semibold text-foreground'>
                            {item.price}
                          </p>
                          <p className='text-sm font-normal text-muted-foreground'>
                            {item.label}
                          </p>
                        </>
                      )}
                    </div>
                    {index < propertyFeatures.length - 1 && (
                      <Separator orientation="vertical" className="h-12 my-auto sm:block hidden" />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
        {/* Clouds */}
        <>
          <SeamlessCloud
            cloudCount={2}
            minSize={400}
            maxSize={678}
            opacity="opacity-60"
            gapMin={100}
            gapMax={500}
            top="top-56 sm:top-40 left-0"
          />
        </>
      </div>
    </section>
  );
};

export default HeroSection;
