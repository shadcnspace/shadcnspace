'use client'

import type { ReactNode } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icon } from '@iconify/react'

type Props = {
    trigger: ReactNode
    defaultOpen?: boolean
    align?: 'start' | 'center' | 'end'
}

type MenuItem = {
    label: string
    icon: string
    destructive?: boolean
}

const PROFILE_ITEMS: MenuItem[] = [
    { label: 'My Profile', icon: 'solar:user-broken' },
    { label: 'My Subscription', icon: 'solar:bookmark-opened-outline' },
    { label: 'My Invoice', icon: 'solar:bill-check-outline' },
]

const SETTINGS_ITEMS: MenuItem[] = [
    { label: 'Account Settings', icon: 'solar:settings-linear' },
]

const LOGOUT_ITEM: MenuItem = {
    label: 'Signout',
    icon: 'solar:logout-outline',
    destructive: true,
}

const itemClass = 'px-4 py-2.5 text-base cursor-pointer gap-3'

const ProfileDropdown = ({ trigger, defaultOpen, align = 'end' }: Props) => {
    return (
        <DropdownMenu defaultOpen={defaultOpen}>
            <DropdownMenuTrigger >{trigger}</DropdownMenuTrigger>

            <DropdownMenuContent className="w-80" align={align}>
                {/* User Info */}
                <DropdownMenuLabel className="flex items-center gap-4 px-4 py-2.5 font-normal">
                    <div className="relative">
                        <Avatar className="size-10">
                            <AvatarImage
                                src="https://images.shadcnspace.com/assets/profiles/user-11.jpg"
                                alt="David McMichael"
                            />
                            <AvatarFallback>DM</AvatarFallback>
                        </Avatar>
                        <span className="ring-card absolute right-0 bottom-0 size-2 rounded-full bg-green-600 ring-2" />
                    </div>

                    <div className="flex flex-col">
                        <span className="text-foreground text-lg font-semibold">
                            David McMichael
                        </span>
                        <span className="text-muted-foreground text-sm">
                            david.mcmichael@example.com
                        </span>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                {/* Main Links */}
                <DropdownMenuGroup>
                    {PROFILE_ITEMS.map(({ label, icon }) => (
                        <DropdownMenuItem key={label} className={itemClass}>
                            <Icon icon={icon} className="text-foreground size-5" />
                            <span>{label}</span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                {/* Settings */}
                <DropdownMenuGroup>
                    {SETTINGS_ITEMS.map(({ label, icon }) => (
                        <DropdownMenuItem key={label} className={itemClass}>
                            <Icon icon={icon} className="text-foreground size-5" />
                            <span>{label}</span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                {/* Logout */}
                <DropdownMenuItem
                    variant="destructive"
                    className={itemClass}
                >
                    <Icon icon={LOGOUT_ITEM.icon} className="size-5" />
                    <span>{LOGOUT_ITEM.label}</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ProfileDropdown
