'use client'

import * as React from 'react'
import {
  Code2Icon,
  GitBranchIcon,
  GitCommitHorizontalIcon,
  GitPullRequestIcon,
  PlayIcon,
  SquareTerminalIcon,
  BugIcon,
  RocketIcon,
  CloudUploadIcon,
  EyeIcon,
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

export interface CommandDevItem {
  label: string
  icon?: LucideIcon
  shortcut?: string
  onSelect?: () => void
}

export interface CommandDevGroup {
  heading: string
  items: CommandDevItem[]
}

export interface CommandDevProps {
  placeholder?: string
  emptyMessage?: string
  showSeparators?: boolean
  groups?: CommandDevGroup[]
}

const defaultGroups: CommandDevGroup[] = [
  {
    heading: 'Code',
    items: [
      { label: 'New Branch', icon: GitBranchIcon, shortcut: '⌘B' },
      { label: 'Commit Changes', icon: GitCommitHorizontalIcon, shortcut: '⌘⇧C' },
      { label: 'Open Pull Request', icon: GitPullRequestIcon, shortcut: '⌘P' }
    ]
  },
  {
    heading: 'Run',
    items: [
      { label: 'Run Project', icon: PlayIcon, shortcut: '⌘R' },
      { label: 'Open Terminal', icon: SquareTerminalIcon, shortcut: '⌘`' },
      { label: 'Start Debugger', icon: BugIcon, shortcut: '⌘⇧D' }
    ]
  },
  {
    heading: 'Deploy',
    items: [
      { label: 'Deploy to Production', icon: RocketIcon, shortcut: '⌘⇧P' },
      { label: 'Push to Staging', icon: CloudUploadIcon, shortcut: '⌘⇧S' },
      { label: 'Preview Build', icon: EyeIcon, shortcut: '⌘⇧V' }
    ]
  }
]

const CommandDevDemo = ({
  placeholder = 'Type a command or search...',
  emptyMessage = 'No results found.',
  showSeparators = true,
  groups = defaultGroups
}: CommandDevProps) => {
  const [open, setOpen] = React.useState(false)

  return (
    <div className='flex flex-col gap-4'>
      <Button onClick={() => setOpen(true)} variant='outline' size='icon' className='cursor-pointer'>
        <Code2Icon />
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

export default CommandDevDemo
