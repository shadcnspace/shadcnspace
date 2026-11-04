"use client";

import { ChevronRight, House } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

export default function BlockBreadcrumb() {
    const pathname = usePathname();
    const segments = pathname.split('/').filter(segment => segment !== '');
    const capitalize = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div className="flex items-center gap-3 text-base text-neutral-600 dark:text-neutral-400">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-1">
                <Link href="/" className="hover:text-neutral-900 dark:hover:text-neutral-200">
                    <House width={20} height={20} />
                </Link>
                {segments.map((segment, index) => {
                    const previousSegment = index > 0 ? segments[index - 1] : null;
                    let href: string;
                    if (previousSegment === 'blocks') {
                        href = '/blocks#' + segment;
                    } else if (previousSegment === 'templates') {
                        href = '/templates#' + segment;
                    } else {
                        href = '/' + segments.slice(0, index + 1).join('/');
                    }
                    const isLast = index === segments.length - 1;

                    return (
                        <div key={index} className="flex items-center gap-1">
                            <ChevronRight className="h-4 w-4 text-neutral-400" />
                            {isLast ? (
                                <span className="font-medium text-neutral-900 dark:text-neutral-200">
                                    {capitalize(segment)}
                                </span>
                            ) : (
                                <Link href={href} className="hover:text-neutral-900 dark:hover:text-neutral-200">
                                    {capitalize(segment)}
                                </Link>
                            )}
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
}
