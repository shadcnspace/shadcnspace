'use client'

import { useId, useState } from 'react'

import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const users = [
  {
    name: 'Albert Flores',
    email: 'albert12@gmail.com',
    avatar: 'https://images.shadcnspace.com/assets/profiles/albert.webp',
    status: 'online'
  },
  {
    name: 'Davis Donin',
    email: 'davisdonin@gmail.com',
    avatar: 'https://images.shadcnspace.com/assets/profiles/davis.webp',
    status: 'offline'
  },
  {
    name: 'Emily Davis',
    email: 'emilydavis@gmail.com',
    avatar: 'https://images.shadcnspace.com/assets/profiles/emily.webp',
    status: 'away'
  },
  {
    name: 'Jenny Wilson',
    email: 'jennylouise@gmail.com',
    avatar: 'https://images.shadcnspace.com/assets/profiles/jenny.webp',
    status: 'online'
  },
  {
    name: 'Jessica Brown',
    email: 'jessicabrown@gmail.com',
    avatar: 'https://images.shadcnspace.com/assets/profiles/jessica.webp',
    status: 'busy'
  },
  {
    name: 'Linda Davis',
    email: 'lindadavis@gmail.com',
    avatar: 'https://images.shadcnspace.com/assets/profiles/linda.webp',
    status: 'online'
  },
]

const ComboboxUserDemo = () => {
  const id = useId()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const selectedUser = users.find(user => user.name === value)

  return (
    <div className='w-full max-w-xs'>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger render={
          <Button id={id} variant='outline' role='combobox' aria-expanded={open} className='w-full justify-between'>
            {selectedUser ? (
              <span className='flex gap-2'>
                <Avatar className='size-6'>
                  <AvatarImage src={selectedUser.avatar} alt={selectedUser.name} />
                  <AvatarFallback>{selectedUser.name[0]}</AvatarFallback>
                </Avatar>
                <span className='font-medium leading-relaxed'>{selectedUser.name}</span>
              </span>
            ) : (
              <span className='text-muted-foreground'>Select user</span>
            )}
            <ChevronsUpDownIcon className='text-muted-foreground/80 shrink-0' aria-hidden='true' />
          </Button>
        } />
        <PopoverContent className='p-0'>
          <Command>
            <CommandInput placeholder='Search user...' />
            <CommandList>
              <CommandEmpty>No users found.</CommandEmpty>
              <CommandGroup>
                {users.map(user => (
                  <CommandItem
                    key={user.name}
                    value={user.name}
                    onSelect={currentValue => {
                      setValue(currentValue === value ? '' : currentValue)
                      setOpen(false)
                    }}
                    className="[&>svg:last-of-type]:hidden"
                  >
                    <span className='flex items-center gap-2'>
                      <Avatar className='size-7'>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className='flex flex-col'>
                        <span className='font-medium'>{user.name}</span>
                        <span className='text-muted-foreground text-sm'>{user.email}</span>
                      </span>
                    </span>
                    {value === user.name && <CheckIcon size={16} className='ml-auto' />}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default ComboboxUserDemo
