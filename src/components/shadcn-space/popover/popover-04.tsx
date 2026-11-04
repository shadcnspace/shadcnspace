'use client'

import { useState } from 'react'
import { Volume1Icon, Volume2Icon, VolumeXIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Slider } from '@/components/ui/slider'

const PopoverVolumeDemo = () => {
  const [value, setValue] = useState<number[]>([45])

  const VolumeIcon = value[0] === 0 ? VolumeXIcon : value[0] < 50 ? Volume1Icon : Volume2Icon

  return (
    <Popover>
      <PopoverTrigger render={<Button variant='outline' size='icon' />}>
        <VolumeIcon />
        <span className='sr-only'>Volume control</span>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <div className='space-y-3'>
          <div className='flex items-center justify-between gap-2'>
            <Label className='leading-5'>Volume</Label>
            <Badge variant='secondary'>{value[0]}%</Badge>
          </div>
          <div className='flex items-center gap-3'>
            <VolumeXIcon className='size-4 shrink-0 opacity-40' />
            <Slider
              value={value}
              onValueChange={(val) => {
                setValue(Array.isArray(val) ? val : [val])
              }}
              max={100}
              step={1}
              className="cursor-pointer **:data-[slot=slider-track]:data-horizontal:h-1.5 **:data-[slot=slider-track]:cursor-pointer **:data-[slot=slider-thumb]:cursor-pointer"
            />
            <Volume2Icon className='size-4 shrink-0 opacity-40' />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverVolumeDemo