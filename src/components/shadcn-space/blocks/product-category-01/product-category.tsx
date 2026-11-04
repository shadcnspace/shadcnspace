"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";

interface Category {
  id: string;
  name: string;
  count: string;
  image: string;
}

const categories: Category[] = [
  {
    id: "grocery",
    name: "Grocery",
    count: "312 items",
    image:
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-02-1.webp",
  },
  {
    id: "fashion",
    name: "Fashion",
    count: "134 items",
    image:
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-02-2.webp",
  },
  {
    id: "bags",
    name: "Bags",
    count: "89 items",
    image:
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-02-3.webp",
  },
  {
    id: "beauty",
    name: "Beauty",
    count: "201 items",
    image:
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-02-4.webp",
  },
];

const ProductCategory = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col gap-8 h-full">
          {/* Header */}
          <div className="flex items-center justify-between w-full">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-2xl font-semibold text-foreground"
            >
              Browse by category
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <a
                href="#"
                className="group flex items-center gap-1.5 text-sm font-medium text-foreground hover:opacity-80 transition-all"
              >
                See all
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Categories Horizontal Scroll */}
          <div className="w-full overflow-x-auto xl:[scrollbar-width:none] xl:[-ms-overflow-style:none] xl:[&::-webkit-scrollbar]:hidden">
            <div className="flex gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + index * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="shrink-0 max-w-67.5 w-full"
                >
                  <a
                    href="#"
                    className="group flex items-center overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/20"
                  >
                    {/* Image Container */}
                    <div className="w-26 h-23 shrink-0 relative flex items-center justify-center border-r border-border overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Content Container */}
                    <div className="flex-1 p-6">
                      <p className="text-base font-medium text-foreground">
                        {category.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {category.count}
                      </p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
