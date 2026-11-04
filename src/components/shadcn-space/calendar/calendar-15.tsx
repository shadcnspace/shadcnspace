'use client'

import { useState } from 'react'
import { Calendar, CalendarDayButton } from '@/components/ui/calendar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

function getPriceForDate(date: Date) {
  const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate()
  const val = (seed * 9301 + 49297) % 233280
  return Math.floor(50 + (val / 233280) * 200)
}

type PriceTier = 'low' | 'mid' | 'high'

function getPriceTier(price: number): PriceTier {
  if (price < 100) return 'low'
  if (price < 170) return 'mid'
  return 'high'
}

const tierConfig: Record<
  PriceTier,
  { label: string; textClass: string; dotClass: string; bgClass: string; borderClass: string }
> = {
  low: {
    label: 'Best deal',
    textClass: 'text-teal-400',
    dotClass: 'bg-teal-400',
    bgClass: 'bg-teal-400/10',
    borderClass: 'border-teal-400/30',
  },
  mid: {
    label: 'Fair price',
    textClass: 'text-orange-400',
    dotClass: 'bg-orange-400',
    bgClass: 'bg-orange-400/10',
    borderClass: 'border-orange-400/30',
  },
  high: {
    label: 'Peak price',
    textClass: 'text-red-500',
    dotClass: 'bg-red-500',
    bgClass: 'bg-red-500/10',
    borderClass: 'border-red-500/30',
  },
}

const WithPricingDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const selectedPrice = date ? getPriceForDate(date) : null
  const selectedTier = selectedPrice ? getPriceTier(selectedPrice) : null

  return (
    <Card className='w-fit overflow-hidden p-4'>
      <CardContent className='flex flex-col gap-4 p-0'>
        {/* Calendar */}
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          showOutsideDays={false}
          className='[--cell-size:--spacing(12)]'
          components={{
            DayButton: ({ children, modifiers, day, ...props }) => {
              const price = getPriceForDate(day.date)
              const tier = getPriceTier(price)
              const { textClass, dotClass } = tierConfig[tier]

              return (
                <CalendarDayButton day={day} modifiers={modifiers} {...props}>
                  <span className='text-xs font-medium leading-none'>{children}</span>
                  {!modifiers.outside && (
                    <>
                      <span className={`text-xs font-medium leading-none ${textClass}`}>
                        ${price}
                      </span>
                      <span className={`h-1 w-1 rounded-full ${dotClass}`} />
                    </>
                  )}
                </CalendarDayButton>
              )
            },
          }}
          disabled={{ before: new Date() }}
        />

        <Separator />

        {/* Selected date summary */}
        {date && selectedPrice && selectedTier && (
          <div
            className={`rounded-xl border p-4 flex flex-col gap-5 ${tierConfig[selectedTier].bgClass} ${tierConfig[selectedTier].borderClass}`}
          >
            <div className='flex items-start justify-between gap-3'>
              <div>
                <p className='text-xs uppercase tracking-widest text-muted-foreground'>
                  Selected
                </p>
                <p className='mt-1 text-sm font-semibold'>
                  {date.toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <Badge
                variant='outline'
                className={`shrink-0 border font-semibold ${tierConfig[selectedTier].textClass} ${tierConfig[selectedTier].borderClass}`}
              >
                {tierConfig[selectedTier].label}
              </Badge>
            </div>

            <div className='flex items-end justify-between'>
              <div className='leading-none'>
                <span className='text-2xl font-bold tracking-tight'>${selectedPrice}</span>
                <span className='ml-1 text-sm text-muted-foreground'>/ seat</span>
              </div>
              <Button size='sm' className='h-8 rounded-lg px-4 text-xs font-semibold hover:bg-primary/80 cursor-pointer'>
                Reserve
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default WithPricingDemo
