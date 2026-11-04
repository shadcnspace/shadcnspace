'use client'

import { useEffect, useState } from 'react'
import { CheckCircle2, DownloadIcon, PauseIcon, PlayIcon, XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

const PopoverDownloadDemo = () => {
  const [isPaused, setIsPaused] = useState(false)
  const [isCanceled, setIsCanceled] = useState(false)
  const [value, setValue] = useState(0)
  const [open, setOpen] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (open && !hasStarted && !isCanceled) {
      setHasStarted(true)
    }
  }, [open, hasStarted, isCanceled])

  useEffect(() => {
    if (!hasStarted || isPaused || isCanceled) return

    const timer = setInterval(() => {
      setValue(prev => {
        if (prev < 100) {
          return Math.min(100, prev + Math.floor(Math.random() * 10) + 1)
        } else {
          clearInterval(timer)
          return prev
        }
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [open, isPaused, isCanceled, hasStarted])

  const isComplete = value === 100
  const isActive = !isPaused && !isCanceled && !isComplete

  const getStatusText = () => {
    if (isCanceled) return 'Download Canceled'
    if (isPaused) return 'Download Paused'
    if (isComplete) return 'Download Complete'
    return 'Downloading File...'
  }

  const getFillColor = () => {
    if (isCanceled) return 'bg-destructive/15'
    if (isComplete) return 'bg-teal-400/20'
    if (isPaused) return 'bg-amber-300/15'
    return 'bg-primary/15'
  }

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger render={<Button variant='outline' size='icon' className='cursor-pointer' />}>
        <DownloadIcon />
        <span className='sr-only'>Download File</span>
      </PopoverTrigger>

      <PopoverContent className='relative w-80 p-0 overflow-hidden'>
        {/* Full-popover background fill */}
        <div
          className={cn(
            'absolute left-0 top-0 bottom-0 transition-all duration-700 ease-in-out',
            getFillColor(),
            isCanceled ? 'opacity-100' : 'opacity-100'
          )}
          style={{ width: isCanceled ? '100%' : `${value}%` }}
        />

        {/* Content layer */}
        <div className='relative z-10 p-4 grid gap-4'>
          {/* Header row */}
          <div className='flex items-center justify-between gap-3'>
            {/* Animated icon */}
            {/* Icon controls: pause/resume toggle + cancel */}
            <div className='flex items-center gap-1.5 shrink-0'>
              {/* Pause / Resume toggle */}
              <button
                onClick={() => !isComplete && !isCanceled && setIsPaused(!isPaused)}
                disabled={isComplete || isCanceled}
                className={cn(
                  'relative flex size-8 items-center justify-center rounded-full transition-colors cursor-pointer',
                  'disabled:pointer-events-none'
                )}
                aria-label={isPaused ? 'Resume download' : 'Pause download'}
              >
                <span
                  className={cn(
                    'absolute inset-0 rounded-full border border-dashed transition-colors',
                    isComplete
                      ? 'border-teal-400'
                      : isCanceled
                        ? 'border-destructive'
                        : isPaused
                          ? 'border-amber-300'
                          : 'border-primary',
                    {
                      'animate-spin animation-duration-[3s]': isActive
                    }
                  )}
                />
                {isComplete ? (
                  <CheckCircle2 className='z-1 size-4 text-teal-400' />
                ) : isCanceled ? (
                  <DownloadIcon className='z-1 size-4 text-destructive' />
                ) : isPaused ? (
                  <PlayIcon className='z-1 size-4 text-amber-300' />
                ) : (
                  <PauseIcon className='z-1 size-4 text-primary' />
                )}
              </button>

              {/* Cancel button */}
              {!isComplete && !isCanceled && (
                <button
                  onClick={() => {
                    setValue(0)
                    setIsCanceled(true)
                    setIsPaused(false)
                    setHasStarted(false)
                    setOpen(false)
                  }}
                  className='flex size-5 items-center justify-center rounded-full text-muted-foreground hover:text-destructive transition-colors cursor-pointer'
                  aria-label='Cancel download'
                >
                  <XIcon className='size-3' />
                </button>
              )}
            </div>

            {/* Status text */}
            <div className='flex-1 min-w-0 max-w-44'>
              <p className='text-sm font-semibold leading-none truncate'>{getStatusText()}</p>
              {!isCanceled && (
                <p className='text-xs text-muted-foreground mt-1 truncate'>
                  {isComplete ? 'File saved to downloads' : 'shadcn-ui-components.zip'}
                </p>
              )}
            </div>

            {/* Percentage badge */}
            {!isCanceled && (
              <span
                className={cn(
                  'text-sm font-bold tabular-nums shrink-0',
                  isComplete ? 'text-teal-400' : isPaused ? 'text-amber-300' : 'text-primary'
                )}
              >
                {value}%
              </span>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverDownloadDemo
