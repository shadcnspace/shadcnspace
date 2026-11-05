'use client'

import { useId, useState } from 'react'

import { CheckIcon, EyeIcon, EyeOffIcon, XIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const requirements = [
  { label: 'At least 8 characters', test: (value: string) => value.length >= 8 },
  { label: 'At least 1 number', test: (value: string) => /\d/.test(value) },
  { label: 'At least 1 uppercase letter', test: (value: string) => /[A-Z]/.test(value) },
  { label: 'At least 1 symbol', test: (value: string) => /[^A-Za-z0-9]/.test(value) }
]

const strengthLevels = [
  { label: 'Too weak', color: 'bg-border' },
  { label: 'Weak', color: 'bg-orange-400' },
  { label: 'Fair', color: 'bg-amber-300' },
  { label: 'Good', color: 'bg-sky-400' },
  { label: 'Strong', color: 'bg-teal-400' }
]

const InputPasswordStrengthDemo = () => {
  const [password, setPassword] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  const id = useId()
  const hintId = `${id}-hint`

  const results = requirements.map(requirement => ({
    ...requirement,
    met: requirement.test(password)
  }))
  const score = results.filter(result => result.met).length
  const strength = strengthLevels[score]

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Password</Label>
      <div className='relative'>
        <Input
          id={id}
          type={isVisible ? 'text' : 'password'}
          placeholder='Create a password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          aria-describedby={hintId}
          autoComplete='new-password'
          className='pr-9'
        />
        <Button
          variant='ghost'
          size='icon'
          onClick={() => setIsVisible(prev => !prev)}
          aria-label={isVisible ? 'Hide password' : 'Show password'}
          aria-pressed={isVisible}
          aria-controls={id}
          className='text-muted-foreground absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent cursor-pointer'
        >
          {isVisible ? <EyeOffIcon /> : <EyeIcon />}
        </Button>
      </div>

      <div className='flex gap-1 pt-1' aria-hidden='true'>
        {[1, 2, 3, 4].map(segment => (
          <span
            key={segment}
            className={cn(
              'h-1 flex-1 rounded-full bg-border transition-colors duration-300 motion-reduce:transition-none',
              score >= segment && strength.color
            )}
          />
        ))}
      </div>

      <div id={hintId} className='space-y-2'>
        <p className='text-xs text-muted-foreground' aria-live='polite'>
          Strength: <span className='font-medium text-foreground'>{password ? strength.label : 'Not set'}</span>
        </p>
        <ul className='space-y-1'>
          {results.map(result => (
            <li key={result.label} className='flex items-center gap-2 text-xs'>
              {result.met ? (
                <CheckIcon aria-hidden='true' className='size-3.5 text-teal-400' />
              ) : (
                <XIcon aria-hidden='true' className='size-3.5 text-muted-foreground' />
              )}
              <span className={result.met ? 'text-foreground' : 'text-muted-foreground'}>
                {result.label}
                <span className='sr-only'>{result.met ? ', met' : ', not met'}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default InputPasswordStrengthDemo
