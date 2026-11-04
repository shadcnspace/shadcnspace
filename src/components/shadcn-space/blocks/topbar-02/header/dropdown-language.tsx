'use client'

import { useState, type ReactElement } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type Props = {
    trigger: ReactElement
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
        icon: 'https://images.shadcnspace.com/assets/flags/flag-us.svg',
    },
    {
        value: 'chinese',
        label: '中国人 (Chinese)',
        icon: 'https://images.shadcnspace.com/assets/flags/flag-china.svg',
    },
    {
        value: 'french',
        label: 'français (French)',
        icon: 'https://images.shadcnspace.com/assets/flags/flag-france.svg',
    },
    {
        value: 'arabic',
        label: 'عربي (Arabic)',
        icon: 'https://images.shadcnspace.com/assets/flags/flag-australia.svg',
    },
]

const itemClass =
    'cursor-pointer gap-2 pl-2 text-sm data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground [&>span]:hidden'

const LanguageDropdown = ({ trigger, defaultOpen, align = 'end' }: Props) => {
    const [language, setLanguage] = useState(LANGUAGES[0].value)

    return (
        <DropdownMenu defaultOpen={defaultOpen}>
            <DropdownMenuTrigger>
                {trigger}
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-50" align={align}>
                <DropdownMenuRadioGroup
                    value={language}
                    onValueChange={setLanguage}
                    className="flex flex-col gap-2"
                >
                    {LANGUAGES.map(({ value, label, icon }) => (
                        <DropdownMenuRadioItem key={value} value={value} className={itemClass}>
                            <img src={icon} alt={label} width={16} height={16} className='rounded-full' />
                            {label}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LanguageDropdown
