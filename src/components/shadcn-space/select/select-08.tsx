import { useId } from 'react'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectWithLeadingTextDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Ride of Choice</Label>
      <Select defaultValue='Tesla Model S'>
        <SelectTrigger id={id} className='w-full'>
          <span className='flex items-center gap-2'>
            Your Wheels: <SelectValue />
          </span>
        </SelectTrigger>
        <SelectContent align="start" alignItemWithTrigger={false} className="data-[state=open]:slide-in-from-bottom-8 data-[state=open]:zoom-in-100 duration-400">
          <SelectItem value='Tesla Model S'>Tesla Model S</SelectItem>
          <SelectItem value='BMW M4'>BMW M4</SelectItem>
          <SelectItem value='Audi R8'>Audi R8</SelectItem>
          <SelectItem value='Lamborghini Huracán'>Lamborghini Huracán</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectWithLeadingTextDemo
