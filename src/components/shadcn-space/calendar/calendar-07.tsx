'use client'

import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'

const VariableSizeDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-lg border [--cell-size:--spacing(7)] md:[--cell-size:--spacing(10)]'
      />
    </>
  )
}

export default VariableSizeDemo
