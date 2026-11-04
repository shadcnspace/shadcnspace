'use client'

import * as React from 'react'
import {
  UserIcon,
  GlobeIcon,
  SunIcon,
  ClockIcon,
  KeyIcon,
  ShieldIcon,
  MonitorIcon,
  FileTextIcon,
  MailIcon,
  BellIcon,
  SmartphoneIcon,
  BellOffIcon,
  EyeIcon,
  DownloadIcon,
  ShieldCheckIcon,
  TrashIcon,
  MoonIcon,
  TypeIcon,
  LayoutGridIcon,
  PaletteIcon,
  type LucideIcon
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from '@/components/ui/command'

export interface CommandScrollableItem {
  label: string
  icon?: LucideIcon
  shortcut?: string
  onSelect?: () => void
}

export interface CommandScrollableGroup {
  heading: string
  items: CommandScrollableItem[]
}

export interface CommandScrollableProps {
  buttonLabel?: string
  placeholder?: string
  emptyMessage?: string
  showSeparators?: boolean
  groups?: CommandScrollableGroup[]
}

const defaultGroups: CommandScrollableGroup[] = [
  {
    heading: 'General',
    items: [
      { label: 'Profile', icon: UserIcon, shortcut: '⌘P' },
      { label: 'Language & Region', icon: GlobeIcon },
      { label: 'Theme', icon: SunIcon, shortcut: '⌘T' },
      { label: 'Timezone', icon: ClockIcon }
    ]
  },
  {
    heading: 'Security',
    items: [
      { label: 'Change Password', icon: KeyIcon, shortcut: '⌘K' },
      { label: 'Two-Factor Auth', icon: ShieldIcon, shortcut: '⇧⌘A' },
      { label: 'Active Sessions', icon: MonitorIcon },
      { label: 'Security Log', icon: FileTextIcon }
    ]
  },
  {
    heading: 'Notifications',
    items: [
      { label: 'Email Alerts', icon: MailIcon, shortcut: '⌘E' },
      { label: 'Push Notifications', icon: BellIcon, shortcut: '⌘N' },
      { label: 'SMS Alerts', icon: SmartphoneIcon },
      { label: 'Do Not Disturb', icon: BellOffIcon }
    ]
  },
  {
    heading: 'Privacy',
    items: [
      { label: 'Privacy Settings', icon: EyeIcon, shortcut: '⌘Y' },
      { label: 'Data Export', icon: DownloadIcon, shortcut: '⇧⌘E' },
      { label: 'Cookie Preferences', icon: ShieldCheckIcon },
      { label: 'Delete Account', icon: TrashIcon, shortcut: '⌫' }
    ]
  },
  {
    heading: 'Appearance',
    items: [
      { label: 'Dark Mode', icon: MoonIcon, shortcut: '⌘D' },
      { label: 'Font Size', icon: TypeIcon },
      { label: 'Compact View', icon: LayoutGridIcon, shortcut: '⌘L' },
      { label: 'Color Scheme', icon: PaletteIcon }
    ]
  }
]

const CommandScrollableDemo = ({
  buttonLabel = 'Scrollable Menu',
  placeholder = 'Type a command or search...',
  emptyMessage = 'No results found.',
  showSeparators = true,
  groups = defaultGroups
}: CommandScrollableProps) => {
  const [open, setOpen] = React.useState(false)

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
            {groups.map((group, index) => (
              <React.Fragment key={group.heading}>
                {showSeparators && index > 0 && <CommandSeparator />}
                <CommandGroup heading={group.heading}>
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
              </React.Fragment>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}

export default CommandScrollableDemo
