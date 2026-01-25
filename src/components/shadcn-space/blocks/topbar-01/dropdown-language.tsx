'use client'

import { useState, type ReactNode } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icon } from '@iconify/react'

type Props = {
    trigger: ReactNode
    defaultOpen?: boolean
    align?: 'start' | 'center' | 'end'
}

type Language = {
    value: string
    label: string
    icon: string
}

const LANGUAGES: Language[] = [
    {
        value: 'english',
        label: 'English (UK)',
        icon: 'circle-flags:uk',
    },
    {
        value: 'chinese',
        label: '中国人 (Chinese)',
        icon: 'circle-flags:lang-zh',
    },
    {
        value: 'french',
        label: 'français (French)',
        icon: 'circle-flags:lang-fr',
    },
    {
        value: 'arabic',
        label: 'عربي (Arabic)',
        icon: 'circle-flags:lang-ar',
    },
]

const itemClass =
    'cursor-pointer gap-2 pl-2 text-sm data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground [&>span]:hidden'

const LanguageDropdown = ({ trigger, defaultOpen, align = 'end' }: Props) => {
    const [language, setLanguage] = useState(LANGUAGES[0].value)

    return (
        <DropdownMenu defaultOpen={defaultOpen}>
            <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>

            <DropdownMenuContent className="w-50" align={align}>
                <DropdownMenuRadioGroup
                    value={language}
                    onValueChange={setLanguage}
                    className="flex flex-col gap-2"
                >
                    {LANGUAGES.map(({ value, label, icon }) => (
                        <DropdownMenuRadioItem key={value} value={value} className={itemClass}>
                            <Icon icon={icon} width={16} height={16} />
                            {label}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LanguageDropdown
