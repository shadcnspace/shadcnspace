'use client'

import { useEffect, useId, useState } from 'react'

import { CircleCheckIcon, CircleXIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Spinner } from '@/components/ui/spinner'

type Status = 'idle' | 'invalid' | 'checking' | 'available' | 'taken'

const takenUsernames = ['admin', 'shadcn', 'design', 'john', 'root', 'support']

const usernamePattern = /^[a-z0-9_]{3,20}$/

const getSuggestions = (name: string) => [`${name}_dev`, `${name}${new Date().getFullYear()}`, `the_${name}`]

const InputUsernameAvailabilityDemo = () => {
  const [username, setUsername] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const id = useId()
  const statusId = `${id}-status`

  useEffect(() => {
    if (!username) {
      setStatus('idle')
      return
    }
    if (!usernamePattern.test(username)) {
      setStatus('invalid')
      return
    }
    setStatus('checking')
    const timeout = setTimeout(() => {
      setStatus(takenUsernames.includes(username) ? 'taken' : 'available')
    }, 700)
    return () => clearTimeout(timeout)
  }, [username])

  const isError = status === 'invalid' || status === 'taken'

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Username</Label>
      <div className='relative'>
        <span
          aria-hidden='true'
          className='text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-sm'
        >
          @
        </span>
        <Input
          id={id}
          type='text'
          placeholder='your_name'
          value={username}
          onChange={e => setUsername(e.target.value.toLowerCase())}
          aria-describedby={statusId}
          aria-invalid={isError || undefined}
          autoComplete='username'
          spellCheck={false}
          className='pr-9 pl-7'
        />
        <div aria-hidden='true' className='absolute inset-y-0 right-0 flex items-center pr-2.5'>
          {status === 'checking' && <Spinner className='text-muted-foreground size-4' />}
          {status === 'available' && <CircleCheckIcon className='size-4 text-teal-400' />}
          {isError && <CircleXIcon className='text-destructive size-4' />}
        </div>
      </div>

      <div id={statusId} aria-live='polite' className='space-y-2 text-xs'>
        {status === 'idle' && <p className='text-muted-foreground'>3 to 20 characters: letters, numbers, and underscores.</p>}
        {status === 'invalid' && (
          <p className='text-destructive'>Use 3 to 20 lowercase letters, numbers, or underscores.</p>
        )}
        {status === 'checking' && <p className='text-muted-foreground'>Checking availability...</p>}
        {status === 'available' && (
          <p className='text-foreground'>
            <span className='font-medium'>@{username}</span> is available.
          </p>
        )}
        {status === 'taken' && <p className='text-destructive'>@{username} is already taken. Try one of these:</p>}
      </div>

      {status === 'taken' && (
        <div className='flex flex-wrap gap-1.5'>
          {getSuggestions(username).map(suggestion => (
            <Button
              key={suggestion}
              variant='outline'
              size='xs'
              onClick={() => setUsername(suggestion)}
              className='cursor-pointer font-mono'
            >
              @{suggestion}
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}

export default InputUsernameAvailabilityDemo
