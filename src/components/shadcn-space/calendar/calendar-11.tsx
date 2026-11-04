'use client'

import { useState } from 'react'
import { type ChevronProps } from 'react-day-picker'
import { Calendar } from '@/components/ui/calendar'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'

const LeftSideNavigationDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <>
      <Calendar
        mode='single'
        selected={date}
        defaultMonth={date}
        onSelect={setDate}
        className='rounded-md border'
        classNames={{
          month_caption: 'flex items-center h-8 justify-end',
          nav: 'flex justify-start absolute w-full items-center'
        }}
        components={{
          Chevron: ({ orientation }: ChevronProps) => {
            if (orientation === 'left') return <ArrowLeftIcon className='size-4' />
            if (orientation === 'right') return <ArrowRightIcon className='size-4' />
            return <></>
          }
        }}
      />
    </>
  )
}

export default LeftSideNavigationDemo
