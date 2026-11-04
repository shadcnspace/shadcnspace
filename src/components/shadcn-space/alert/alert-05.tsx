'use client'

import { useState } from 'react'
import { Check, XIcon } from 'lucide-react'
import { Alert, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

const AlertDarkDemo = () => {
  const [isActive, setIsActive] = useState(true)

  if (!isActive) return null

  return (
    <Alert className='bg-gray-950 text-primary-foreground flex flex-col gap-4 justify-between border-none max-w-xs'>
      <div className='flex items-start justify-between gap-2 w-full'>
        <div className='flex items-start gap-2'>
          <div className='bg-teal-400/40 p-1 rounded-full w-fit h-fit'>
            <Check size={16} className='text-teal-400' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <div className='flex-1 flex-col justify-center gap-1'>
              <AlertTitle className='text-base font-normal text-gray-50'>New location created successfully!</AlertTitle>
            </div>
          </div>
        </div>
        <button className='size-4 cursor-pointer' onClick={() => setIsActive(false)}>
          <XIcon className='size-4 text-gray-50' />
          <span className='sr-only'>Close</span>
        </button>
      </div>

      <div className='grid grid-cols-2 items-center gap-4'>
        <Button className="h-auto px-5 py-2.5 rounded-lg bg-teal-400/20 text-teal-400 hover:bg-teal-400/25">View Location</Button>
        <Button variant={"outline"} className="h-auto px-5 py-2.5 rounded-lg bg-transparent hover:bg-gray-200/10 border border-gray-200/20 text-gray-50 hover:text-gray-50">Dismiss</Button>
      </div>
    </Alert>
  )
}

export default AlertDarkDemo
