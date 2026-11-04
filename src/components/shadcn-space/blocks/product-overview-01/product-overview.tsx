"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Minus, Plus, Star } from "lucide-react";
import { toast } from "sonner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface ProductOverviewData {
    brand: string;
    title: string;
    rating: number;
    reviewCount: number;
    description: string;
    discount?: number;
    sizes: {
        name: string;
        price: number;
        outOfStock?: boolean;
    }[];
    images: {
        main: string;
        details: string[];
    };
    accordionInfo: {
        title: string;
        content: string;
    }[];
}

export interface ProductOverviewProps {
    product: ProductOverviewData;
}

export default function ProductOverview({
    product,
}: ProductOverviewProps) {
    const {
        brand,
        title,
        rating,
        reviewCount,
        description,
        discount,
        sizes,
        images,
        accordionInfo,
    } = product;
    const [quantity, setQuantity] = React.useState(1);
    const [selectedSize, setSelectedSize] = React.useState(sizes.find(s => !s.outOfStock) || sizes[0]);
    const [isLiked, setIsLiked] = React.useState(false);
    const [isInCart, setIsInCart] = React.useState(false);

    const currentOriginalPrice = selectedSize.price;

    const handleCartToggle = () => {
        if (isInCart) {
            toast.success("product removed from cart");
        } else {
            toast.success("product added to cart");
        }
        setIsInCart(!isInCart);
    };

    const discountedPrice = React.useMemo(() => {
        if (discount !== undefined) {
            return currentOriginalPrice * (1 - discount / 100);
        }
        return currentOriginalPrice;
    }, [currentOriginalPrice, discount]);

    return (
        <section className="w-full bg-background">
            <div className="mx-auto max-w-7xl px-4 py-16 lg:px-12 lg:py-24 xl:px-16">
                <div className="grid grid-cols-1 items-start justify-center gap-6 lg:grid-cols-12">
                    {/* Image Gallery */}
                    <div className="lg:col-span-7">
                        {/* Desktop: Original Layout */}
                        <div className="hidden md:flex flex-col gap-6 md:flex-row h-full">
                            {/* Main Image */}
                            <div className="bg-muted aspect-3/4 flex-1 overflow-hidden rounded-xl md:aspect-auto">
                                <img
                                    src={images.main}
                                    alt={title}
                                    className="size-full object-cover"
                                />
                            </div>
                            {/* Side Images */}
                            <div className="flex w-[270px] flex-col gap-6">
                                {images.details.slice(0, 2).map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-muted flex-1 overflow-hidden rounded-lg"
                                    >
                                        <img
                                            src={img}
                                            alt={`${title} detail ${idx + 1}`}
                                            className="size-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile: Unified Slider (Below md breakpoint) */}
                        <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-4 md:hidden">
                            {[images.main, ...images.details].map((img, idx) => (
                                <div
                                    key={idx}
                                    className="bg-muted aspect-[3/4] w-[280px] shrink-0 overflow-hidden rounded-xl sm:w-[350px]"
                                >
                                    <img
                                        src={img}
                                        alt={`${title} image ${idx + 1}`}
                                        className="size-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col gap-8 lg:col-span-5 lg:pl-6">
                        <div className="flex flex-col gap-5">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex flex-col gap-3">
                                    <span className="text-muted-foreground text-sm font-medium">
                                        {brand}
                                    </span>
                                    <h2 className="text-foreground text-3xl font-semibold leading-tight tracking-tight lg:text-4xl">
                                        {title}
                                    </h2>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={cn(
                                                        "size-4",
                                                        i < Math.floor(rating)
                                                            ? "fill-orange-400 text-orange-400"
                                                            : "text-muted-foreground/30"
                                                    )}
                                                />
                                            ))}
                                            <span className="ml-1 text-base font-medium">
                                                {rating}
                                            </span>
                                        </div>
                                        <span className="text-foreground text-sm font-medium">
                                            {reviewCount} reviews
                                        </span>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="size-10 shrink-0 rounded-full border-border cursor-pointer"
                                    onClick={() => setIsLiked(!isLiked)}
                                >
                                    <Heart
                                        className={cn(
                                            "size-4 transition-colors",
                                            isLiked && "fill-destructive text-destructive"
                                        )}
                                    />
                                </Button>
                            </div>

                            <p className="text-muted-foreground text-base leading-relaxed">
                                {description}
                            </p>

                            <div className="flex items-center gap-4 py-1">
                                <span className="text-3xl font-semibold">
                                    ${discountedPrice.toFixed(2)}
                                </span>
                                {discount !== undefined && (
                                    <>
                                        <span className="text-muted-foreground text-xl font-semibold line-through opacity-40">
                                            ${currentOriginalPrice.toFixed(2)}
                                        </span>
                                        <Badge
                                            variant="secondary"
                                            className="bg-red-500/10 text-red-500 hover:bg-red-500/20 border-none rounded-full px-3 py-0.5 text-sm"
                                        >
                                            {discount}% Off
                                        </Badge>
                                    </>
                                )}
                            </div>

                            {sizes && sizes.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {sizes.map((size) => (
                                        <Button
                                            key={size.name}
                                            variant={selectedSize.name === size.name ? "default" : "outline"}
                                            size="sm"
                                            disabled={size.outOfStock}
                                            onClick={() => setSelectedSize(size)}
                                            className={cn(
                                                "h-8 rounded-lg px-4 text-sm font-medium transition-all shadow-none",
                                                selectedSize.name === size.name ? "cursor-default" : "cursor-pointer",
                                                selectedSize.name !== size.name && "border-border",
                                                size.outOfStock && "opacity-50 cursor-not-allowed!"
                                            )}
                                        >
                                            {size.name}
                                        </Button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Separator className="bg-border" />

                        <div className="flex flex-col gap-5">
                            <div className="flex gap-4">
                                <div className="border-border bg-background flex h-12 items-center overflow-hidden rounded-full border shadow-xs">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="hover:bg-muted h-full shrink-0 rounded-none px-4 cursor-pointer"
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    >
                                        <Minus className="size-4" />
                                    </Button>
                                    <div className="border-border flex h-full min-w-14 items-center justify-center border-x text-sm font-medium">
                                        {quantity.toString().padStart(2, "0")}
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="hover:bg-muted h-full shrink-0 rounded-none px-4 cursor-pointer"
                                        onClick={() => setQuantity(quantity + 1)}
                                    >
                                        <Plus className="size-4" />
                                    </Button>
                                </div>
                                <Button
                                    variant="outline"
                                    className="border-border hover:bg-muted/50 flex-1 rounded-full h-12 font-medium cursor-pointer dark:bg-background shadow-xs"
                                    size="lg"
                                    onClick={handleCartToggle}
                                >
                                    {isInCart ? "Remove from cart" : "Add to cart"}
                                </Button>
                            </div>
                            <Button
                                className="w-full rounded-full h-12 font-medium cursor-pointer hover:bg-primary/80"
                                size="lg"
                            >
                                Buy at ${(discountedPrice * quantity).toFixed(2)}
                            </Button>
                        </div>

                        <div className="flex flex-col pt-2">
                            <Accordion className="w-full">
                                {accordionInfo.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <Separator className="bg-border" />
                                        <AccordionItem value={`item-${index}`} className="border-none">
                                            <AccordionTrigger className="group/trigger py-4 text-base font-normal hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
                                                <div className="flex w-full items-center justify-between">
                                                    <span>{item.title}</span>
                                                    <Plus className="size-4 shrink-0 transition-transform duration-500 ease-in-out group-aria-expanded/trigger:rotate-45" />
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground pb-6">
                                                {item.content}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </React.Fragment>
                                ))}
                            </Accordion>
                            <Separator className="bg-border" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
