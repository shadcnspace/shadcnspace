import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const RadioGroupDashedDemo = () => {
  return (
    <RadioGroup defaultValue='economy' className='max-w-64'>
      <div className='flex items-center gap-2'>
        <RadioGroupItem
          value='economy'
          id='economy'
          className='border-primary focus-visible:border-primary border-dashed'
        />
        <Label htmlFor='economy'>Economy Shipping</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem
          value='priority'
          id='priority'
          className='border-primary focus-visible:border-primary border-dashed'
        />
        <Label htmlFor='priority'>Priority Shipping</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem
          value='next-day'
          id='next-day'
          className='border-primary focus-visible:border-primary border-dashed'
        />
        <Label htmlFor='next-day'>Next-Day Delivery</Label>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupDashedDemo
