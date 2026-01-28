'use client'
 
import * as React from 'react'
import { RadioGroup as BaseRadioGroup } from '@base-ui/react/radio-group'
import { Radio as BaseRadio } from '@base-ui/react/radio'
import { AnimatePresence, motion, type HTMLMotionProps, type Transition } from 'motion/react'
import { CircleIcon } from 'lucide-react'
 
import { cn } from '@/lib/utils'
type RadioGroupItemProps = React.ComponentProps<typeof BaseRadio.Root> &
  HTMLMotionProps<'button'> & {
    transition?: Transition
  }
function RadioGroup({ className, ...props }: React.ComponentProps<typeof BaseRadioGroup>) {
  return <BaseRadioGroup data-slot='radio-group' className={cn('grid gap-3', className)} {...props} />
}
 
function RadioGroupItem({
  className,
  transition = { type: 'spring', stiffness: 200, damping: 16 },
  ...props
}: RadioGroupItemProps) {
  return (
    <BaseRadio.Root {...props}>
      <motion.button
        data-slot='radio-group-item'
        className={cn(
          'border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-5 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <BaseRadio.Indicator
          data-slot='radio-group-indicator'
          className='relative flex items-center justify-center'
        >
          <AnimatePresence>
            <motion.div
              key='radio-group-indicator-circle'
              data-slot='radio-group-indicator-circle'
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={transition}
            >
              <CircleIcon className='size-3 fill-current text-current' />
            </motion.div>
          </AnimatePresence>
        </BaseRadio.Indicator>
      </motion.button>
    </BaseRadio.Root>
  )
}
 
export { RadioGroup, RadioGroupItem }