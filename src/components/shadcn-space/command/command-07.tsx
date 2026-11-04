'use client'

import * as React from 'react'
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { SlidersHorizontalIcon } from 'lucide-react'

export interface CommandFilterOption {
  value: string
  label: string
}

export interface CommandFilterGroup {
  id: string
  heading: string
  defaultValue: string
  options: CommandFilterOption[]
}

export interface CommandCheckboxItem {
  id: string
  label: string
  count: number
}

export interface CommandCheckboxGroup {
  heading: string
  items: CommandCheckboxItem[]
}

export interface CommandFilterSearchProps {
  buttonLabel?: string
  placeholder?: string
  emptyMessage?: string
  filterGroups?: CommandFilterGroup[]
  checkboxGroups?: CommandCheckboxGroup[]
}

const defaultFilterGroups: CommandFilterGroup[] = [
  {
    id: 'category',
    heading: 'Category',
    defaultValue: 'all',
    options: [
      { value: 'all', label: 'All' },
      { value: 'marketing-blocks', label: 'Marketing Blocks' },
      { value: 'ui-components', label: 'UI Components' }
    ]
  },
  {
    id: 'sort',
    heading: 'Sort',
    defaultValue: 'recommended',
    options: [
      { value: 'recommended', label: 'Recommended' },
      { value: 'most-downloaded', label: 'Most downloaded' },
      { value: 'most-bookmarked', label: 'Most bookmarked' },
      { value: 'newest', label: 'Newest' }
    ]
  },
  {
    id: 'time',
    heading: 'Time',
    defaultValue: 'all-time',
    options: [
      { value: 'all-time', label: 'All time' },
      { value: 'last-week', label: 'Last week' },
      { value: 'last-month', label: 'Last month' },
      { value: 'last-3-months', label: 'Last 3 months' },
      { value: 'last-year', label: 'Last year' }
    ]
  }
]

const defaultCheckboxGroups: CommandCheckboxGroup[] = [
  {
    heading: 'Marketing Blocks',
    items: [
      { id: 'announcements', label: 'Announcements', count: 10 },
      { id: 'backgrounds', label: 'Backgrounds', count: 33 },
      { id: 'borders', label: 'Borders', count: 12 },
      { id: 'calls-to-action', label: 'Calls to Action', count: 34 },
      { id: 'clients', label: 'Clients', count: 16 },
      { id: 'comparisons', label: 'Comparisons', count: 6 },
      { id: 'docks', label: 'Docks', count: 7 },
      { id: 'features', label: 'Features', count: 36 },
      { id: 'footers', label: 'Footers', count: 14 },
      { id: 'heroes', label: 'Heroes', count: 73 }
    ]
  },
  {
    heading: 'UI Components',
    items: [
      { id: 'accordions', label: 'Accordions', count: 40 },
      { id: 'ai-chats', label: 'AI Chats', count: 30 },
      { id: 'alerts', label: 'Alerts', count: 23 },
      { id: 'avatars', label: 'Avatars', count: 17 },
      { id: 'badges', label: 'Badges', count: 25 }
    ]
  }
]

const CommandFilterSearchDemo = ({
  buttonLabel = 'Search & Filter',
  placeholder = 'Search...',
  emptyMessage = 'No results found.',
  filterGroups = defaultFilterGroups,
  checkboxGroups = defaultCheckboxGroups
}: CommandFilterSearchProps) => {
  const [open, setOpen] = React.useState(false)
  const [filters, setFilters] = React.useState<Record<string, string>>(() =>
    Object.fromEntries(filterGroups.map(g => [g.id, g.defaultValue]))
  )
  const [checked, setChecked] = React.useState<Record<string, boolean>>({})

  const toggle = (id: string) => setChecked(prev => ({ ...prev, [id]: !prev[id] }))

  return (
    <div className='flex flex-col gap-4'>
      <Button onClick={() => setOpen(true)} variant='outline' className='w-40 cursor-pointer justify-start gap-2'>
        <SlidersHorizontalIcon className='size-4' />
        {buttonLabel}
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className='flex flex-col overflow-hidden'>
          <CommandInput placeholder={placeholder} />
          <CommandList className='flex-1 overflow-y-auto'>
            <CommandEmpty>{emptyMessage}</CommandEmpty>

            {filterGroups.map((group, index) => (
              <React.Fragment key={group.id}>
                {index > 0 && <CommandSeparator />}
                <CommandGroup heading={group.heading}>
                  <RadioGroup
                    value={filters[group.id]}
                    onValueChange={val => setFilters(prev => ({ ...prev, [group.id]: val }))}
                    className='gap-0 px-2'
                  >
                    {group.options.map(({ value, label }) => (
                      <div
                        key={value}
                        className='flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5 hover:bg-accent'
                      >
                        <RadioGroupItem value={value} id={`${group.id}-${value}`} />
                        <Label htmlFor={`${group.id}-${value}`} className='cursor-pointer text-sm font-normal'>
                          {label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CommandGroup>
              </React.Fragment>
            ))}

            {checkboxGroups.map((group) => (
              <React.Fragment key={group.heading}>
                <CommandSeparator />
                <CommandGroup heading={group.heading}>
                  {group.items.map(({ id, label, count }) => (
                    <CommandItem
                      key={id}
                      onSelect={() => toggle(id)}
                      className='flex cursor-pointer items-center justify-between'
                    >
                      <div className='flex items-center gap-2'>
                        <Checkbox
                          checked={!!checked[id]}
                          onCheckedChange={() => toggle(id)}
                          onPointerDown={e => e.stopPropagation()}
                        />
                        <span>{label}</span>
                      </div>
                      <span className='text-xs text-muted-foreground'>{count}</span>
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

export default CommandFilterSearchDemo
