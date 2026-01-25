"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const Brands = ({
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards",
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse",
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    const items = [
        {
            name: "Wrappixel",
            logo: "/images/landingpage/wrappixel.svg",
        },
        {
            name: "Theme Designer",
            logo: "/images/landingpage/theme_designer.svg",
        },
        {
            name: "Envanto",
            logo: "/images/landingpage/envanto.svg",
        },
        {
            name: "Adminmart",
            logo: "/images/landingpage/adminmart.svg",
        },
        {
            name: "Tailwind Admin",
            logo: "/images/landingpage/tailwind_admin.svg",
        },
    ];

    return (
        <div className="lg:pt-12 pt-8 border-t border-border" >
            <div
                ref={containerRef}
                className={cn(
                    "scroller relative z-20 container mx-auto overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ",
                    className,
                )}
            >
                <ul
                    ref={scrollerRef}
                    className={cn(
                        "flex w-max min-w-full shrink-0 flex-nowrap gap-30 py-4",
                        start && "animate-scroll",
                        pauseOnHover && "hover:paused",
                    )}
                >
                    {items.map((item, idx) => (
                        <li
                            className="relative shrink-0 flex items-center justify-center"
                            key={item.name}
                        >
                            <Image
                                src={item.logo}
                                alt={item.name}
                                width={100}
                                height={100}
                                className="max-w-full max-h-full object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 w-auto! h-auto!"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
