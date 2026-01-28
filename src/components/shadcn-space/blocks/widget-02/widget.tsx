'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icon } from '@iconify/react'
import { Card, CardTitle, CardHeader, CardContent, CardAction } from '@/components/ui/card'
import { motion, useInView } from 'motion/react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

const DEFAULT_DROPDOWN_ITEMS = [
    { title: 'Action', link: '#' },
    { title: 'Another action', link: '#' },
    { title: 'Something else', link: '#' },
]

const DEFAULT_TRANS_DATA = [
    {
        img: 'https://images.shadcnspace.com/assets/flags/flag-us.svg',
        title: 'PayPal Transfer',
        country: 'United states',
        rank: '$8,567k',
        badgeData: "+4.7%",
        badgeBG: "bg-teal-400/10"
    },
    {
        img: 'https://images.shadcnspace.com/assets/flags/flag-brazil.svg',
        title: 'Wallet',
        country: 'Brazil',
        rank: '$2,415k',
        badgeData: "-1.7%",
        badgeBG: "bg-orange-400/10"
    },
    {
        img: 'https://images.shadcnspace.com/assets/flags/flag-india.svg',
        title: 'Credit Card',
        country: 'India',
        rank: '$865k',
        badgeData: "+4.7%",
        badgeBG: "bg-teal-400/10"
    },
    {
        img: 'https://images.shadcnspace.com/assets/flags/flag-australia.svg',
        title: 'Bank Transfer',
        country: 'Australia',
        rank: '$745k',
        badgeData: "-1.7%",
        badgeBG: "bg-orange-400/10"
    },
    {
        img: 'https://images.shadcnspace.com/assets/flags/flag-france.svg',
        title: 'Refund',
        country: 'France',
        rank: '$45',
        badgeData: "+4.7%",
        badgeBG: "bg-teal-400/10"
    },
    {
        img: 'https://images.shadcnspace.com/assets/flags/flag-china.svg',
        title: 'Refund',
        country: 'China',
        rank: '$12k',
        badgeData: "+4.7%",
        badgeBG: "bg-teal-400/10"
    },
]

interface TransactionProps {
    img: string
    title: string
    country: string
    rank: string
    badgeData: string
    badgeBG: string
}

interface DropdownItemProps {
    title: string
    link?: string
}

interface WidgetProps {
    recentTransData?: TransactionProps[]
    dropdownItems?: DropdownItemProps[]
}

const Widget = ({
    recentTransData = DEFAULT_TRANS_DATA,
    dropdownItems = DEFAULT_DROPDOWN_ITEMS,
}: WidgetProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    return (
        <div className='min-h-screen flex items-center justify-center px-6'>
            <Card className='w-full max-w-sm'>
                <CardHeader className='flex items-center justify-between'>
                    <CardTitle className='text-lg font-medium text-foreground'>
                        Sales by Countries
                    </CardTitle>
                    <CardAction>
                        <DropdownMenu>
                            <DropdownMenuTrigger className='outline-none'>
                                <span className='h-9 w-9 flex justify-center items-center rounded-full hover:bg-accent hover:text-accent-foreground cursor-pointer'>
                                    <Icon icon="solar:menu-dots-bold" width={22} height={22} className='rotate-90' />
                                </span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {dropdownItems.map((item, index) => (
                                    <DropdownMenuItem key={index} className='font-normal cursor-pointer'>
                                        {item.link ? (
                                            <Link href={item.link} className="w-full">
                                                {item.title}
                                            </Link>
                                        ) : (
                                            <span className='w-full justify-start'>
                                                {item.title}
                                            </span>
                                        )}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </CardAction>
                </CardHeader>
                <CardContent className='px-0'>
                    <motion.div
                        ref={ref}
                        className='flex flex-col gap-3'
                        initial='hidden'
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.2,
                                },
                            },
                        }}>
                        {recentTransData.map((item, index) => (
                            <React.Fragment key={index}>
                                <motion.div
                                    className='flex gap-3 items-center px-6'
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 24,
                                    }}
                                    whileHover={{ scale: 1.02, x: 4 }}
                                    whileTap={{ scale: 0.98 }}>
                                    <motion.div
                                        className={cn(`w-8 h-8 rounded-full flex justify-center items-center overflow-hidden`)}
                                        whileHover={{ rotate: 5, scale: 1.1 }}
                                        transition={{ type: 'spring', stiffness: 400 }}>
                                        <img src={item.img} alt='icon' width={32} height={32} />
                                    </motion.div>
                                    <div className="flex items-center justify-between flex-1">
                                        <div>
                                            <h5 className='text-base font-medium text-foreground'>{item.rank}</h5>
                                            <p className='text-sm font-normal tracking-wide text-muted-foreground'>
                                                {item.country}
                                            </p>
                                        </div>
                                        <Badge className={cn(`${item.badgeBG}`, "text-muted-foreground")}>
                                            {item.badgeData}
                                        </Badge>
                                    </div>
                                </motion.div>
                                {index < recentTransData.length - 1 && <Separator />}
                            </React.Fragment>
                        ))}
                    </motion.div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Widget
