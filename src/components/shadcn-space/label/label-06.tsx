'use client'

import { useId, useState } from 'react'
import { UserRound } from 'lucide-react'
import { motion } from 'motion/react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

const FloatingLabel = () => {
  const id = useId()
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')
  const isFloated = focused || value.length > 0

  return (
    <div className='w-full max-w-xs'>
      <div className='flex items-end gap-3 pb-1'>
        <UserRound
          className={cn(
            'size-4 shrink-0 transition-colors duration-300 mb-1',
            focused ? 'text-primary' : 'text-muted-foreground',
          )}
        />
        <div className='relative flex-1'>
          <Input
            id={id}
            type='text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className='h-auto rounded-none border-none px-0 pb-0.5 pt-5 text-sm shadow-none dark:bg-transparent focus-visible:ring-0 focus-visible:border-transparent'
          />
          <Label
            htmlFor={id}
            className={cn(
              'pointer-events-none absolute left-0 cursor-text transition-all duration-300 ease-in-out',
              isFloated
                ? 'top-0.5 text-xs text-primary'
                : 'top-5 text-sm text-muted-foreground',
            )}
          >
            Full name
          </Label>
        </div>
      </div>

      {/* Animated bottom line */}
      <div className='relative h-px'>
        <div className='absolute inset-0 bg-border' />
        <motion.div
          className='absolute inset-0 bg-primary'
          initial={false}
          animate={{ scaleX: focused ? 1 : 0, opacity: focused ? 1 : 0 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          style={{ transformOrigin: 'center' }}
        />
      </div>
    </div>
  )
}

export default FloatingLabel
