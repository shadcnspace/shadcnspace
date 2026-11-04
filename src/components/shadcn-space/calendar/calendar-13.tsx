'use client'

import { useEffect, useId, useState } from 'react'
import { format } from 'date-fns'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'
import { CalendarSearch } from 'lucide-react'

const WithDateInputDemo = () => {
  const id = useId()
  const today = new Date()
  const [month, setMonth] = useState(today)
  const [date, setDate] = useState<Date | undefined>(today)
  const [inputValue, setInputValue] = useState('')

  const handleDayPickerSelect = (date: Date | undefined) => {
    if (!date) {
      setInputValue('')
      setDate(undefined)
    } else {
      setDate(date)
      setMonth(date)
      setInputValue(format(date, 'yyyy-MM-dd'))
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setInputValue(value)

    if (value) {
      const parsedDate = new Date(value)

      setDate(parsedDate)
      setMonth(parsedDate)
    } else {
      setDate(undefined)
    }
  }

  useEffect(() => {
    setInputValue(format(today, 'yyyy-MM-dd'))
  }, [])

  return (
    <>
    
      <Card className='gap-5 py-5'>
        <CardHeader className='flex items-center border-b px-3 pb-3!'>
          <Label htmlFor={id} className='shrink-0 text-xs'>
            Enter date
          </Label>
          <InputGroup className='grow dark:border-border dark:bg-background'>
            <InputGroupAddon align='inline-start'>
              <CalendarSearch size={16} aria-hidden='true' />
            </InputGroupAddon>
            <InputGroupInput
              id={id}
              type='date'
              value={inputValue}
              onChange={handleInputChange}
              className='appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none'
              aria-label='Select date'
            />
          </InputGroup>
        </CardHeader>
        <CardContent className='px-5'>
          <Calendar
            mode='single'
            selected={date}
            onSelect={handleDayPickerSelect}
            month={month}
            onMonthChange={setMonth}
            className='bg-transparent p-0'
          />
        </CardContent>
      </Card>
    </>
  )
}

export default WithDateInputDemo
