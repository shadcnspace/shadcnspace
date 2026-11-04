'use client'

import { useState } from 'react'
import {
  BookOpenIcon,
  MapPinIcon,
  SunIcon,
  UsersIcon,
  TriangleIcon,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

const stats = [
  { icon: TriangleIcon, label: 'Depth', value: '1.6km' },
  { icon: SunIcon, label: 'Peak Temp', value: '40°C' },
  { icon: UsersIcon, label: 'Visitors', value: '5M+/yr' },
]

const PopoverAboutLocationDemo = () => {
  const [open, setOpen] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger render={<Button
        variant='outline'
        size='icon'
        className='cursor-pointer transition-all duration-300'
      />}>
        <MapPinIcon className={cn('transition-transform duration-300', open && 'scale-110')} />
        <span className='sr-only'>About Grand Canyon</span>
      </PopoverTrigger>

      <PopoverContent className='w-80 p-0 overflow-hidden rounded-xl border-0 shadow-2xl shadow-black/20'>
        <div>
          {/* Hero image with gradient overlay */}
          <div className='relative h-44 w-full overflow-hidden'>
            <img
              src='https://images.shadcnspace.com/assets/backgrounds/grand-canyon.webp'
              alt='the grand canyon'
              onLoad={() => setImageLoaded(true)}
              className={cn(
                'h-full w-full object-cover transition-all duration-700 scale-105',
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              )}
            />
            {/* Gradient overlays */}
            <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent' />
            <div className='absolute inset-0 bg-linear-to-r from-black/30 to-transparent' />

            {/* Location badge */}
            <Badge
              variant='outline'
              className='absolute top-3 left-3 h-6 flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 backdrop-blur-sm border-white/20 hover:bg-white/10'
            >
              <MapPinIcon className='size-3 text-white' />
              <span className='text-[10px] font-medium text-white tracking-wide uppercase'>
                North America · USA
              </span>
            </Badge>

            {/* Title block over image */}
            <div className='absolute bottom-3 left-3 right-3'>
              <h3 className='text-base font-bold text-white leading-tight'>The Grand Canyon</h3>
              <p className='text-xs text-white/70 mt-0.5'>
                A breathtaking geological wonder
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className='grid grid-cols-3 divide-x divide-border bg-muted dark:bg-muted/40'>
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className='flex flex-col items-center gap-1 px-2 py-3 text-center transition-colors duration-200'
              >
                <Icon className='size-3.5 text-muted-foreground' />
                <span className='text-xs font-semibold tabular-nums'>{value}</span>
                <span className='text-[10px] text-muted-foreground leading-none'>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Description + CTA */}
        <div className='p-4 space-y-3'>
          <p className='text-xs text-muted-foreground leading-relaxed'>
            Carved over millions of years by the Colorado River, the Grand Canyon reveals billions of years of Earth's geological history through its vast, layered bands of red rock.
          </p>

          <a
            href='https://en.wikipedia.org/wiki/Grand_Canyon'
            target='_blank'
            rel='noopener noreferrer'
            className={cn(
              'group flex items-center justify-center gap-2 w-full rounded-lg py-2 px-3',
              'bg-primary text-primary-foreground text-xs font-medium',
              'hover:bg-primary/90 active:scale-[0.98] transition-all duration-200'
            )}
          >
            <BookOpenIcon className='size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5' />
            Explore on Wikipedia
          </a>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverAboutLocationDemo
