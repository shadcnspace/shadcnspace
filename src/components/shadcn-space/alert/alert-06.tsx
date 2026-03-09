'use client'

import { useState } from 'react'
import { CircleAlertIcon, XIcon } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

const AlertGradientDemo = () => {
    const [isActive, setIsActive] = useState(true)

    if (!isActive) return null

    return (
        <div className='flex flex-col gap-2'>
            <Alert className='border-none shadow-xs from-sky-300/10 text-accent-foreground flex gap-2 items-center justify-between bg-linear-to-b to-transparent to-80%'>
                <div className='p-2 shadow-sm rounded-full bg-sky-200/20 shrink-0'>
                    <CircleAlertIcon size={16} className='text-sky-400' />
                </div>
                <div className='flex flex-1 gap-2 items-center overflow-hidden'>
                    <div className='flex flex-1 gap-2 items-center overflow-hidden'>
                        <AlertTitle className="shrink-0 mb-0">Alert notice</AlertTitle>
                        <AlertDescription className='text-accent-foreground/60'>
                           {"Alert notice communicate system status and provide feedback to users about their actions and options.".slice(0, 25)}...
                        </AlertDescription>
                    </div>
                </div>
                <Button className="w-fit bg-sky-400 hover:bg-sky-400/80 text-white text-xs cursor-pointer shrink-0">Action</Button>
            </Alert>
            
            <Alert className='border-none shadow-xs from-sky-300/10 text-accent-foreground flex gap-2 items-start justify-between bg-linear-to-b to-transparent to-80%'>
                <div className='p-2 shadow-sm rounded-full bg-sky-200/20'>
                    <CircleAlertIcon size={16} className='text-sky-400' />
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-1 flex-col gap-0.5'>
                        <AlertTitle>Alert notice</AlertTitle>
                        <AlertDescription className='text-accent-foreground/60'>
                            Alert notice communicate system status and provide feedback to users about their actions and options.
                        </AlertDescription>
                    </div>
                    <Button className="w-fit bg-sky-400 hover:bg-sky-400/80 text-white text-xs cursor-pointer">Action</Button>
                </div>
                <button className='cursor-pointer' onClick={() => setIsActive(false)}>
                    <XIcon className='size-4' />
                    <span className='sr-only'>Close</span>
                </button>
            </Alert>
        </div>
    )
}

export default AlertGradientDemo
