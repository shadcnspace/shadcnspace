"use client"

import { useId, useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'

const users = [
  {
    id: '1',
    src: 'https://images.shadcnspace.com/assets/profiles/user-1.jpg',
    fallback: 'JD',
    name: 'John Smith'
  },
  {
    id: '2',
    src: 'https://images.shadcnspace.com/assets/profiles/user-2.jpg',
    fallback: 'AD',
    name: 'Alex Doe'
  },
  {
    id: '3',
    src: 'https://images.shadcnspace.com/assets/profiles/user-3.jpg',
    fallback: 'MD',
    name: 'Morgan Doe'
  }
]

const SelectWithAvatarsDemo = () => {
  const id = useId()
  const [value, setValue] = useState('1')

  const selectedUser = users.find(user => user.id === value)

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Select User</Label>
      <Select value={value} onValueChange={(val) => val && setValue(val)}>
        <SelectTrigger
          id={id}
          className='w-full pl-2 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_img]:shrink-0'
        >
          <SelectValue aria-label={value}>
            {selectedUser && (
              <>
                <Avatar className='size-5'>
                  <AvatarImage src={selectedUser.src} alt={selectedUser.name} className='rounded-full' />
                  <AvatarFallback className='text-xs'>{selectedUser.fallback}</AvatarFallback>
                </Avatar>
                <span className='truncate'>{selectedUser.name}</span>
              </>
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className='[&_*[role=option]]:pr-8 [&_*[role=option]]:pl-2 [&_*[role=option]>span]:right-2 [&_*[role=option]>span]:left-auto [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 data-[state=open]:slide-in-from-bottom-8 data-[state=open]:zoom-in-100 duration-400'>
          <SelectGroup>
            <SelectLabel className='pl-2'>User Context</SelectLabel>
            {users.map(item => (
              <SelectItem key={item.id} value={item.id}>
                <Avatar className='size-5'>
                  <AvatarImage src={item.src} alt={item.name} className='rounded-full' />
                  <AvatarFallback className='text-xs'>{item.fallback}</AvatarFallback>
                </Avatar>
                <span className='truncate'>{item.name}</span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectWithAvatarsDemo
