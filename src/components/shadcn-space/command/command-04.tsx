'use client'

import * as React from 'react'
import { PlusIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
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

export interface CommandMember {
  name: string
  email: string
  avatar: string
  fallback: string
  onSelect?: () => void
}

export interface CommandMemberGroup {
  heading: string
  members: CommandMember[]
}

export interface CommandMembersProps {
  buttonLabel?: string
  placeholder?: string
  emptyMessage?: string
  inviteLabel?: string
  showSeparators?: boolean
  groups?: CommandMemberGroup[]
}

const defaultGroups: CommandMemberGroup[] = [
  {
    heading: 'Team Leads',
    members: [
      {
        name: 'Olivia Carter',
        email: 'olivia.carter@company.com',
        avatar: 'https://images.shadcnspace.com/assets/profiles/tom.webp',
        fallback: 'OC'
      },
      {
        name: 'Daniel Brooks',
        email: 'daniel.brooks@company.com',
        avatar: 'https://images.shadcnspace.com/assets/profiles/albert.webp',
        fallback: 'DB'
      },
      {
        name: 'Ryan Mitchell',
        email: 'ryan.mitchell@company.com',
        avatar: 'https://images.shadcnspace.com/assets/profiles/ben.webp',
        fallback: 'RM'
      },
      {
        name: 'Emma Wilson',
        email: 'emma.wilson@company.com',
        avatar: 'https://images.shadcnspace.com/assets/profiles/linda.webp',
        fallback: 'EW'
      }
    ]
  },
  {
    heading: 'Developers',
    members: [
      {
        name: 'Ethan Walsh',
        email: 'ethan.walsh@company.com',
        avatar: 'https://images.shadcnspace.com/assets/profiles/albert.webp',
        fallback: 'ET'
      },
      {
        name: 'Sofia Reyes',
        email: 'sofia.reyes@company.com',
        avatar: 'https://images.shadcnspace.com/assets/profiles/jenny.webp',
        fallback: 'SR'
      },
      {
        name: 'Lucas Werner',
        email: 'lucas.werner@company.com',
        avatar: 'https://images.shadcnspace.com/assets/profiles/rough.webp',
        fallback: 'LW'
      },
      {
        name: 'Claire Dupont',
        email: 'claire.dupont@company.com',
        avatar: 'https://images.shadcnspace.com/assets/profiles/emily.webp',
        fallback: 'CD'
      }
    ]
  },
  {
    heading: 'Designers',
    members: [
      {
        name: 'Sophia Bennett',
        email: 'sophia.bennett@company.com',
        avatar: 'https://images.shadcnspace.com/assets/profiles/jenny.webp',
        fallback: 'SB'
      },
      {
        name: 'James Turner',
        email: 'james.turner@company.com',
        avatar: 'https://images.shadcnspace.com/assets/profiles/rough.webp',
        fallback: 'JT'
      }
    ]
  }
]

const CommandMembersDemo = ({
  buttonLabel = 'Invite Members',
  placeholder = 'Search members...',
  emptyMessage = 'No members found.',
  inviteLabel = 'Invite',
  showSeparators = true,
  groups = defaultGroups
}: CommandMembersProps) => {
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
                  {group.members.map((member) => (
                    <CommandItem
                      key={member.email}
                      className='cursor-pointer gap-2 py-2'
                      onSelect={member.onSelect}
                    >
                      <Avatar>
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className='text-xs'>{member.fallback}</AvatarFallback>
                      </Avatar>
                      <div className='flex flex-1 flex-col'>
                        <span className='text-sm font-medium'>{member.name}</span>
                        <span className='text-xs text-muted-foreground'>{member.email}</span>
                      </div>
                      <div className='ml-auto' data-slot='command-shortcut'>
                        <Button size='sm' className='cursor-pointer hover:bg-primary/80'>
                          <PlusIcon />
                          {inviteLabel}
                        </Button>
                      </div>
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

export default CommandMembersDemo
