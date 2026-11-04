'use client'

import * as React from 'react'
import {
  SearchIcon,
  LayoutDashboardIcon,
  TrendingUpIcon,
  BriefcaseIcon,
  ZapIcon,
  SettingsIcon,
  ClockIcon,
  BookOpenIcon,
  ScrollIcon,
  MessageSquareIcon,
  Undo2Icon,
  ArrowUpIcon,
  ArrowDownIcon,
  type LucideIcon
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Kbd } from '@/components/ui/kbd'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from '@/components/ui/command'

export interface CommandSearchItem {
  label: string
  icon?: LucideIcon
  timestamp?: string
  onSelect?: () => void
}

export interface CommandSearchGroup {
  heading: string
  items: CommandSearchItem[]
}

export interface CommandSearchProps {
  buttonLabel?: string
  placeholder?: string
  emptyMessage?: string
  showSeparators?: boolean
  groups?: CommandSearchGroup[]
}

const defaultGroups: CommandSearchGroup[] = [
  {
    heading: 'Suggestions',
    items: [
      { label: 'Dashboard', icon: LayoutDashboardIcon },
      { label: 'Analytics', icon: TrendingUpIcon },
      { label: 'Projects', icon: BriefcaseIcon },
      { label: 'Integrations', icon: ZapIcon },
      { label: 'Settings', icon: SettingsIcon }
    ]
  },
  {
    heading: 'Recent',
    items: [
      { label: 'Q2 Sales Report', icon: ClockIcon, timestamp: '2m ago' },
      { label: 'Sprint Planning', icon: ClockIcon, timestamp: '15m ago' },
      { label: 'API Configuration', icon: ClockIcon, timestamp: '1h ago' },
      { label: 'Team Permissions', icon: ClockIcon, timestamp: '3h ago' }
    ]
  },
  {
    heading: 'Quick Links',
    items: [
      { label: 'Documentation', icon: BookOpenIcon },
      { label: 'Changelog', icon: ScrollIcon },
      { label: 'Community Forum', icon: MessageSquareIcon }
    ]
  }
]

const CommandSearchDemo = ({
  buttonLabel = 'Search files...',
  placeholder = 'Type a command or search...',
  emptyMessage = 'No results found.',
  showSeparators = true,
  groups = defaultGroups
}: CommandSearchProps) => {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if (event.key === 'j' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen(open => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <div className='flex flex-col gap-4'>
      <Button onClick={() => setOpen(true)} variant='outline' className='w-52 cursor-pointer'>
        <SearchIcon className='size-4' />
        {buttonLabel}
        <Kbd className='ml-auto'>⌘J</Kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen} className='w-full max-w-lg!'>
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
                      {item.icon && (
                        <item.icon className={item.timestamp ? 'text-muted-foreground' : ''} />
                      )}
                      <span>{item.label}</span>
                      {item.timestamp && (
                        <div className='ml-auto' data-slot='command-shortcut'>
                          <span>{item.timestamp}</span>
                        </div>
                      )}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </React.Fragment>
            ))}
          </CommandList>
          <CommandSeparator />
          <div className='flex flex-wrap items-center gap-4 p-4 text-muted-foreground'>
            <div className='flex flex-1 items-center gap-2'>
              <kbd className='rounded border px-1 text-sm'>esc</kbd>
              <span>To close</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='flex size-5 items-center justify-center rounded border'>
                <Undo2Icon className='size-4' />
              </div>
              <span>To Select</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='flex size-5 items-center justify-center rounded border'>
                <ArrowUpIcon className='size-4' />
              </div>
              <div className='flex size-5 items-center justify-center rounded border'>
                <ArrowDownIcon className='size-4' />
              </div>
              <span>To Navigate</span>
            </div>
          </div>
        </Command>
      </CommandDialog>
    </div>
  )
}

export default CommandSearchDemo
