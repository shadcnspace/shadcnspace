"use client";
import { motion } from "motion/react";
import { AppWindowMac, Box, ChartColumnBig, Command, Presentation, ShieldCheck, WandSparkles } from "lucide-react";

export default function AnimatedUiBlock() {
    return (
        <>
            <div className="min-h-[216px] flex items-center justify-center relative">
                <span className="flex items-center justify-center rounded-full shadow-lg">
                    <img alt="shadcn dark logo" src="https://images.shadcnspace.com/assets/logo/shadcn-logo.png" width={96} height={96} />
                </span>
                <motion.div
                    className="absolute start-[70%] top-0 z-10"
                    animate={{
                        y: [-15, 15, -15]
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity
                    }}>
                    <span aria-label="Multiple Layouts" className="lg:size-18 size-11 flex items-center justify-center rounded-full bg-background">
                        <AppWindowMac size={32} />
                    </span>
                </motion.div>
                <motion.div
                    className="absolute start-[91%] top-[28%] z-10"
                    animate={{
                        y: [15, -15, 15]
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}>
                    <span aria-label="UI Blocks" className="lg:size-12 size-7 flex items-center justify-center rounded-full bg-background">
                        <Command size={24} />
                    </span>
                </motion.div>
                <motion.div
                    className="absolute start-[78%] top-[61%] z-10"
                    animate={{
                        y: [-15, 15, -15]
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: 1
                    }}>
                    <span aria-label="Authentication" className="lg:size-18 size-11 flex items-center justify-center rounded-full bg-background">
                        <ShieldCheck size={36} />
                    </span>
                </motion.div>
                <motion.div
                    className="absolute end-[78%] top-0"
                    animate={{
                        y: [15, -15, 15]
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}>
                    <span aria-label="Animated Components" className="lg:size-12 size-7 flex items-center justify-center rounded-full bg-background">
                        <Presentation size={20} />
                    </span>
                </motion.div>
                <motion.div
                    className="absolute end-[67%] lg:top-[61%] top-[80%] z-10"
                    animate={{
                        y: [-15, 15, -15]
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: 0.2
                    }}>
                    <span aria-label="Ai Builder" className="lg:size-18 size-11 flex items-center justify-center rounded-full bg-background">
                        <WandSparkles size={32} />
                    </span>
                </motion.div>
                <motion.div
                    className="absolute lg:end-[98%] end-[80%] lg:top-0 top-[30%]"
                    animate={{
                        y: [15, -15, 15]
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: 0.5
                    }}>
                    <span aria-label="Charts" className="lg:size-18 size-11 flex items-center justify-center rounded-full bg-background">
                        <ChartColumnBig size={32} />
                    </span>
                </motion.div>
                <motion.div
                    className="absolute end-[95%] top-[67%] z-10"
                    animate={{
                        y: [-15, 15, -15]
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: 0.7
                    }}>
                    <span aria-label="UI Components" className="lg:size-12 size-7 flex items-center justify-center rounded-full bg-background">
                        <Box size={22} />
                    </span>
                </motion.div>
            </div >
        </>
    )
}