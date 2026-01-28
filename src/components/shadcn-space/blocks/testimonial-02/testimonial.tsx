"use client";

import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { motion, useInView } from "motion/react";

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
    image: string;
}

export interface Testimonial01Props {
    badge?: string;
    title?: string;
    testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
    {
        quote: "Shadcn Space replaced messy UI kits and half-baked templates. Today our dashboards look premium, scale beautifully, and our team focuses on real features instead of design debt.",
        author: "Walter Dutcher",
        role: "CEO",
        image: "https://images.shadcnspace.com/assets/profiles/testimonial-user.png",
    },
    {
        quote: "Shadcn Space replaced messy UI kits and half-baked templates. Today our dashboards look premium, scale beautifully, and our team focuses on real features instead of design debt.",
        author: "Walter Dutcher",
        role: "CEO",
        image: "https://images.shadcnspace.com/assets/profiles/testimonial-user-2.png",
    },
];

export default function Testimonial01({
    testimonials = defaultTestimonials,
}: Testimonial01Props) {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    return (
        <section ref={sectionRef}>
            <div className="max-w-7xl mx-auto sm:px-16 px-4 pt-12">
                <div className="">
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                        className="flex flex-col gap-3"
                    >
                        <Badge className="text-sm h-auto py-1 px-3 border-0 w-fit">
                            Testimonials
                        </Badge>
                        <h2 className="sm:text-5xl text-xl leading-none font-medium tracking">
                            Success Stories
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                        className="pt-12 pb-8"
                    >
                        <Carousel>
                            <CarouselContent>
                                {testimonials.map((testimonial, index) => (
                                    <CarouselItem key={index}>
                                        <div className="grid grid-cols-12 gap-6 items-center">
                                            <div className="lg:col-span-8 col-span-12 flex sm:flex-row flex-col sm:gap-10 gap-6 lg:pe-12">
                                                <div className="shrink-0 flex items-start">
                                                    <img
                                                        src="https://images.shadcnspace.com/assets/svgs/icon-quote.svg"
                                                        alt="muted quote"
                                                        className="dark:hidden"
                                                    />
                                                    <img
                                                        src="https://images.shadcnspace.com/assets/svgs/icon-quote-white.svg"
                                                        alt="muted quote"
                                                        className="hidden dark:block"
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-12">
                                                    <p className="sm:text-4xl text-xl text-muted-foreground">
                                                        {testimonial.quote}
                                                    </p>
                                                    <div>
                                                        <p className="text-base font-medium ">
                                                            {testimonial.author}
                                                        </p>
                                                        <p className="text-sm text-muted-foreground">
                                                            {testimonial.role}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:col-span-4 col-span-12">
                                                <div className="rounded-xl overflow-hidden">
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.author}
                                                        width={500}
                                                        height={500}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className={"-top-20 left-auto right-12"} />
                            <CarouselNext className={"-top-20 right-0"} />
                        </Carousel>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
