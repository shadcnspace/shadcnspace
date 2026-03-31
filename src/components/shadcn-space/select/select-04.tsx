"use client";

import { useId, useState } from 'react'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from '@/components/ui/select'

const SelectTimezoneDemo = () => {
  const id = useId()
  const [value, setValue] = useState('New-york (UTC−5)')

  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor={id}>Timezone</Label>

      <Select value={value} onValueChange={(val) => val && setValue(val)}>
        <SelectTrigger id={id} className="w-full">
          <SelectValue />
        </SelectTrigger>

        <SelectContent className="max-h-100 data-[state=open]:slide-in-from-bottom-8 data-[state=open]:zoom-in-100 duration-400">
          <SelectGroup>
            <SelectLabel>Americas</SelectLabel>
            <SelectItem value="New-york (UTC−5)">New York (UTC−5)</SelectItem>
            <SelectItem value="Chicago (UTC−6)">Chicago (UTC−6)</SelectItem>
            <SelectItem value="Denver (UTC−7)">Denver (UTC−7)</SelectItem>
            <SelectItem value="Los-angeles (UTC−8)">Los Angeles (UTC−8)</SelectItem>
            <SelectItem value="Sao-paulo (UTC−3)">São Paulo (UTC−3)</SelectItem>
            <SelectItem value="Toronto (UTC−5)">Toronto (UTC−5)</SelectItem>
          </SelectGroup>

          <SelectGroup>
            <SelectLabel>Europe</SelectLabel>
            <SelectItem value="London (UTC+0)">London (UTC+0)</SelectItem>
            <SelectItem value="Paris (UTC+1)">Paris (UTC+1)</SelectItem>
            <SelectItem value="Berlin (UTC+1)">Berlin (UTC+1)</SelectItem>
            <SelectItem value="Moscow (UTC+3)">Moscow (UTC+3)</SelectItem>
            <SelectItem value="Istanbul (UTC+3)">Istanbul (UTC+3)</SelectItem>
          </SelectGroup>

          <SelectGroup>
            <SelectLabel>Africa & Middle East</SelectLabel>
            <SelectItem value="Cairo (UTC+2)">Cairo (UTC+2)</SelectItem>
            <SelectItem value="Nairobi (UTC+3)">Nairobi (UTC+3)</SelectItem>
            <SelectItem value="Riyadh (UTC+3)">Riyadh (UTC+3)</SelectItem>
            <SelectItem value="Dubai (UTC+4)">Dubai (UTC+4)</SelectItem>
          </SelectGroup>

          <SelectGroup>
            <SelectLabel>Asia</SelectLabel>
            <SelectItem value="Mumbai (UTC+5:30)">Mumbai (UTC+5:30)</SelectItem>
            <SelectItem value="Singapore (UTC+8)">Singapore (UTC+8)</SelectItem>
            <SelectItem value="Shanghai (UTC+8)">Shanghai (UTC+8)</SelectItem>
            <SelectItem value="Tokyo (UTC+9)">Tokyo (UTC+9)</SelectItem>
            <SelectItem value="Seoul (UTC+9)">Seoul (UTC+9)</SelectItem>
          </SelectGroup>

          <SelectGroup>
            <SelectLabel>Pacific</SelectLabel>
            <SelectItem value="Honolulu (UTC−10)">Honolulu (UTC−10)</SelectItem>
            <SelectItem value="Sydney (UTC+10)">Sydney (UTC+10)</SelectItem>
            <SelectItem value="Auckland (UTC+12)">Auckland (UTC+12)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectTimezoneDemo
