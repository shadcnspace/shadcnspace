'use client'

import { useState } from 'react'
import { type DateRange } from 'react-day-picker'
import { Calendar } from '@/components/ui/calendar'

const DisabledWeekendsDemo = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2026, 5, 9),
    to: new Date(2026, 5, 12)
  })

  return (
    <>
      <Calendar
        mode='range'
        defaultMonth={dateRange?.from}
        selected={dateRange}
        onSelect={setDateRange}
        disabled={{ dayOfWeek: [0, 6] }}
        className='rounded-lg border'
        excludeDisabled
      />
    </>
  )
}

export default DisabledWeekendsDemo
