'use client'

import { useState } from 'react'
import { type LucideIcon } from 'lucide-react'
import { UserIcon, CreditCardIcon, SettingsIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut
} from '@/components/ui/command'

export interface CommandMenuItem {
  label: string
  icon?: LucideIcon
  shortcut?: string
  onSelect?: () => void
}

export interface CommandMenuGroup {
  heading: string
  items: CommandMenuItem[]
}

export interface CommandShortcutDemoProps {
  buttonLabel?: string
  placeholder?: string
  emptyMessage?: string
  groups?: CommandMenuGroup[]
}

const defaultGroups: CommandMenuGroup[] = [
  {
    heading: 'Settings',
    items: [
      { label: 'Profile', icon: UserIcon, shortcut: '⌘P' },
      { label: 'Billing', icon: CreditCardIcon, shortcut: '⌘B' },
      { label: 'Settings', icon: SettingsIcon, shortcut: '⌘S' }
    ]
  }
]

const CommandShortcutDemo = ({
  buttonLabel = 'Shortcut Menu',
  placeholder = 'Type a command or search...',
  emptyMessage = 'No results found.',
  groups = defaultGroups
}: CommandShortcutDemoProps) => {
  const [open, setOpen] = useState(false)

  return (
    <div className='flex flex-col gap-4'>
      <Button onClick={() => setOpen(true)} variant='outline' className='w-fit cursor-pointer'>
        {buttonLabel}
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            {groups.map((group) => (
              <CommandGroup key={group.heading} heading={group.heading}>
                {group.items.map((item) => (
                  <CommandItem
                    key={item.label}
                    className='cursor-pointer'
                    onSelect={item.onSelect}
                  >
                    {item.icon && <item.icon />}
                    <span>{item.label}</span>
                    {item.shortcut && <CommandShortcut>{item.shortcut}</CommandShortcut>}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}

export default CommandShortcutDemo
