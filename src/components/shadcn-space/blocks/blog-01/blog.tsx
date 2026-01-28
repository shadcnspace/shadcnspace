"use client";

import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";

type BlogData = {
  coverImage: string;
  title: string;
  date: string;
};

const blogData: BlogData[] = [
  {
    coverImage: "https://images.shadcnspace.com/assets/blog/blog-1.webp",
    title: "Our latest brand redesign",
    date: "2026-01-01",
  },
  {
    coverImage: "https://images.shadcnspace.com/assets/blog/blog-2.webp",
    title: "Recognized for design",
    date: "2026-01-03",
  },
  {
    coverImage: "https://images.shadcnspace.com/assets/blog/blog-3.webp",
    title: "Journey of footballer",
    date: "2026-01-05",
  },
];

const Blog = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="py-10 md:py-20">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="flex flex-col gap-16">
          {/* header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            {/* title */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
              className="flex flex-col gap-4 justify-center items-start grow"
            >
              {/* Badge */}
              <Badge
                variant={"outline"}
                className="text-sm font-normal py-1 px-3 h-7"
              >
                Resources
              </Badge>
              {/* Heading */}
              <h2 className="text-foreground text-3xl sm:text-5xl font-semibold">
                Recent news
              </h2>
            </motion.div>
            {/* description */}
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
              className="text-base font-normal text-muted-foreground max-w-xl"
            >
              Explore the latest trends, bold projects, and creative insights
              from our agency shaping the future of branding, digital
              experiences, and storytelling.
            </motion.p>
          </div>
          {/* blogs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogData.map((value, index) => {
              const formattedDate = new Date(value.date).toLocaleDateString(
                "en-US",
                {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                }
              );
              return (
                <motion.a
                  href={`#`}
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ 
                    duration: 1, 
                    delay: index === 0 ? 0.2 : index === 1 ? 0.4 : 0.6, 
                    ease: "easeInOut" 
                  }}
                  className={`group flex flex-col gap-5 ${
                    index === 0 ? "sm:col-span-2" : ""
                  }`}
                >
                  <Card className="p-0 ring-0 border-0 rounded-none shadow-none">
                    <CardContent className="p-0 group flex flex-col gap-5">
                      <div className="w-full aspect-video sm:aspect-auto sm:h-96 overflow-hidden group">
                        <img
                          src={value.coverImage}
                          alt={value.title}
                          className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-base font-normal text-muted-foreground">
                          {formattedDate}
                        </p>
                        <p className="text-2xl font-semibold text-foreground">
                          {value.title}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
