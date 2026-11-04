'use client'

import * as React from 'react'
import {
  FileIcon,
  SettingsIcon,
  FilePlusIcon,
  TerminalIcon,
  WandSparklesIcon,
  GitBranchIcon,
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

export interface CommandPaletteAction {
  label: string
  icon?: LucideIcon
  shortcut?: string
  onSelect?: () => void
}

export interface CommandPaletteFile {
  name: string
  path: string
  onSelect?: () => void
}

export interface CommandPaletteProps {
  buttonLabel?: string
  placeholder?: string
  emptyMessage?: string
  actionsHeading?: string
  filesHeading?: string
  actions?: CommandPaletteAction[]
  files?: CommandPaletteFile[]
}

const defaultActions: CommandPaletteAction[] = [
  { label: 'Open Settings', icon: SettingsIcon, shortcut: '⌘,' },
  { label: 'New File', icon: FilePlusIcon, shortcut: '⌘N' },
  { label: 'Open Terminal', icon: TerminalIcon, shortcut: '⌃`' },
  { label: 'Format Document', icon: WandSparklesIcon, shortcut: '⇧⌥F' },
  { label: 'Git: Clone Repository', icon: GitBranchIcon, shortcut: '⌃⌘I' }
]

const defaultFiles: CommandPaletteFile[] = [
  { name: 'page.tsx', path: 'src/app/page.tsx' },
  { name: 'layout.tsx', path: 'src/app/layout.tsx' },
  { name: 'globals.css', path: 'src/app/globals.css' },
  { name: 'middleware.ts', path: 'src/middleware.ts' },
  { name: 'next.config.ts', path: 'next.config.ts' },
  { name: 'tailwind.config.ts', path: 'tailwind.config.ts' },
  { name: 'components.json', path: 'components.json' },
  { name: 'tsconfig.json', path: 'tsconfig.json' }
]

const CommandPaletteDemo = ({
  buttonLabel = 'Command Palette',
  placeholder = 'Type a command or search...',
  emptyMessage = 'No results found.',
  actionsHeading = 'Actions',
  filesHeading = 'Files',
  actions = defaultActions,
  files = defaultFiles
}: CommandPaletteProps) => {
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
            <CommandGroup heading={actionsHeading}>
              {actions.map((action) => (
                <CommandItem
                  key={action.label}
                  className='cursor-pointer'
                  onSelect={action.onSelect}
                >
                  {action.icon && <action.icon />}
                  <span>{action.label}</span>
                  {action.shortcut && <CommandShortcut>{action.shortcut}</CommandShortcut>}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading={filesHeading}>
              {files.map((file) => (
                <CommandItem
                  key={file.path}
                  className='cursor-pointer gap-2.5'
                  onSelect={file.onSelect}
                >
                  <FileIcon className='size-4 shrink-0' />
                  <div className='flex flex-1 items-center gap-2'>
                    <span className='font-medium'>{file.name}</span>
                    <span className='truncate text-xs text-muted-foreground'>{file.path}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}

export default CommandPaletteDemo
