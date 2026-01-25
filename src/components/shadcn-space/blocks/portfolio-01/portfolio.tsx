"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

type PortfolioData = {
  portfolio_image: string;
  portfolio_title: string;
  portfolio_tags: string[];
};

const portfolioData: PortfolioData[] = [
  {
    portfolio_image:
      "https://images.shadcnspace.com/assets/portfolio/flowbank.webp",
    portfolio_title: "Flowbank",
    portfolio_tags: ["UX Research", "Interface Design"],
  },
  {
    portfolio_image:
      "https://images.shadcnspace.com/assets/portfolio/academy.webp",
    portfolio_title: "Academy.co",
    portfolio_tags: ["Product Design", "Interection Design"],
  },
  {
    portfolio_image:
      "https://images.shadcnspace.com/assets/portfolio/genome.webp",
    portfolio_title: "Genome",
    portfolio_tags: ["Brand identity design", "UX Research"],
  },
  {
    portfolio_image:
      "https://images.shadcnspace.com/assets/portfolio/hotto.webp",
    portfolio_title: "Hotto",
    portfolio_tags: ["Visual Storytelling", "Web & Mobile Design"],
  },
];

const Portfolio = () => {
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
        <div className="flex flex-col gap-8 sm:gap-12 justify-center items-center w-full">
          {/* Heading */}
          <div className="flex flex-col gap-4 justify-center items-center animate-in fade-in slide-in-from-top-8 duration-700 ease-in-out">
            {/* Badge */}
            <Badge
              variant={"outline"}
              className="py-1 px-3 text-sm font-normal h-7"
            >
              Portfolio
            </Badge>
            {/* Heading */}
            <div className="max-w-xs sm:max-w-2xl mx-auto text-center">
              <h2 className="text-foreground text-3xl sm:text-5xl font-semibold">
                How we transformed a small business’s online presence
              </h2>
            </div>
          </div>
          {/* portfolio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-7 md:gap-y-8 w-full">
            {portfolioData.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={cardVariants}
                className="group"
              >
                <Card className="p-0 ring-0 overflow-hidden shadow-none border-0">
                  <CardContent className="p-0 flex flex-col gap-6">
                    <div className="relative aspect-auto overflow-hidden rounded-2xl">
                      <a href="#">
                        <img
                          src={item.portfolio_image}
                          alt={item.portfolio_title}
                          width={"100%"}
                          height={370}
                          className="rounded-2xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                      </a>
                    </div>
                    <div className="flex flex-col gap-3">
                      <a
                        href="#"
                        className="text-foreground text-2xl font-medium tracking-tighter w-fit"
                      >
                        {item.portfolio_title}
                      </a>
                      <div className="flex flex-wrap gap-3">
                        {item.portfolio_tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="text-sm font-normal px-3 py-1 h-7"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
