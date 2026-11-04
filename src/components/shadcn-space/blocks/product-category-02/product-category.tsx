"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
  image: string;
}

const categories: Category[] = [
  {
    id: "1",
    name: "Phone Cases",
    image:
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-04-1-white.webp",
  },
  {
    id: "2",
    name: "Watch Bands",
    image:
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-04-2-white.webp",
  },
  {
    id: "3",
    name: "Powerbanks",
    image:
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-04-3-white.webp",
  },
  {
    id: "4",
    name: "Bags",
    image:
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-04-4-white.webp",
  },
];

const filters = ["Tech", "Bags", "Work Essentials"];

const ProductCategory = () => {
  const [activeFilter, setActiveFilter] = useState("Tech");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-20 lg:py-24 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-5 text-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="space-y-1"
            >
              <h2 className="text-3xl font-medium text-foreground">
                Shop by Category
              </h2>
            </motion.div>

            {/* Centered Filters */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="flex flex-wrap justify-center gap-2"
            >
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "rounded-lg px-5 h-9 text-sm font-medium transition-all duration-200 cursor-pointer",
                    activeFilter === filter
                      ? "bg-foreground text-background hover:bg-foreground/90 border-transparent"
                      : "border-border text-foreground hover:bg-accent dark:bg-background dark:border-border",
                  )}
                >
                  {filter}
                </Button>
              ))}
            </motion.div>
          </div>

          {/* Always Scrollable Row - Requirement */}
          <div className="w-full">
            <div className="w-full overflow-x-auto xl:[scrollbar-width:none] xl:[-ms-overflow-style:none] xl:[&::-webkit-scrollbar]:hidden">
              <div className="flex gap-6">
                {categories.map((category, index) => (
                  <div key={category.id} className="w-67.5 shrink-0">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: 0.2 + index * 0.1,
                        ease: [0.21, 0.47, 0.32, 0.98],
                      }}
                      className="group flex flex-col items-center gap-4"
                    >
                      <div className="relative w-67.5 h-100 overflow-hidden flex items-center justify-center">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-102"
                        />
                      </div>
                      <p className="text-base font-medium text-foreground">
                        {category.name}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Centered Footer Action */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <Button
              variant="outline"
              className="h-9 px-6 rounded-lg font-medium border-border group hover:bg-accent dark:bg-background dark:border-border cursor-pointer"
            >
              See all
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
