"use client";

import { ArrowRight } from "lucide-react";
import {
  ProductCard,
  type ProductCardProps,
} from "@/components/shadcn-space/blocks/product-listing-01/product-card";

export const PRODUCTS: ProductCardProps[] = [
  {
    image:
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-03-1.webp",
    category: "Electronics",
    name: "Apple Watch S9",
    rating: 4.5,
    reviews: 105,
    price: 684,
    originalPrice: 855,
  },
  {
    image:
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-02-2.webp",
    category: "Fashion",
    name: "Beige Jacket",
    rating: 4.3,
    reviews: 105,
    price: 479,
    originalPrice: 599,
    badge: { text: "-15%" },
  },
  {
    image:
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-03-3.webp",
    category: "Beauty",
    name: "Glow Serum",
    rating: 4.5,
    reviews: 105,
    price: 46,
    originalPrice: 55,
    badge: { text: "New" },
  },
  {
    image:
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-03-4.webp",
    category: "Electronics",
    name: "Space WH-1000XM5",
    rating: 4.5,
    reviews: 105,
    price: 279,
    originalPrice: 349,
    badge: { text: "Hot" },
  },
];

export interface ProductListingProps {
  products?: ProductCardProps[];
}

export default function ProductListing({
  products = PRODUCTS,
}: ProductListingProps) {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold text-foreground">
              Featured products
            </h2>
            <p className="text-base text-muted-foreground">
              Handpicked by our team
            </p>
          </div>
          <a
            href="#"
            className="items-center gap-2 text-sm font-medium flex group cursor-pointer"
          >
            See all
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-all" />
          </a>
        </div>

        <div className="w-full overflow-x-auto xl:[scrollbar-width:none] xl:[-ms-overflow-style:none] xl:[&::-webkit-scrollbar]:hidden">
          <div className="flex gap-6">
            {products.map((product, index) => (
              <div key={index} className="inline-block min-w-67.5 max-w-67.5 w-full whitespace-normal shrink-0">
                <ProductCard {...product} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}