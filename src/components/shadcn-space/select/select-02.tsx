"use client"
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dribbble, Facebook, Instagram, Twitter } from 'lucide-react'

const socials = [
  {
    value: 'Dribbble',
    label: 'Dribbble',
    icon: Dribbble,
  },
  {
    value: 'Facebook',
    label: 'Facebook',
    icon: Facebook,
  },
  {
    value: 'Instagram',
    label: 'Instagram',
    icon: Instagram,
  },
  {
    value: 'Twitter',
    label: 'Twitter',
    icon: Twitter,
  },
]

const SelectwithIconDemo = () => {
  const [value, setValue] = useState("Dribbble")
  const selectedSocial = socials.find((s) => s.value === value)

  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor="Socials" className="gap-1">
        Socials
      </Label>

      <Select value={value} onValueChange={(val) => val && setValue(val)}>
        <SelectTrigger id="Socials" className="w-full">
          <div className="flex items-center gap-2">
            {selectedSocial && <selectedSocial.icon className="h-4 w-4" />}
            <SelectValue />
          </div>
        </SelectTrigger>

        <SelectContent align="start" alignItemWithTrigger={false} className="data-[state=open]:slide-in-from-bottom-8 data-[state=open]:zoom-in-100 duration-400">
          {socials.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <item.icon className="h-4 w-4" />
              <span className="truncate">{item.label}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectwithIconDemo
