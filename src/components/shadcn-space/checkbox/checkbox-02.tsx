import { Dribbble, Facebook, Instagram } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const socials = [
  { label: 'Dribble', icon: Dribbble },
  { label: 'Facebook', icon: Facebook },
  { label: 'Instagram', icon: Instagram }
]

const CheckboxVerticalGroupDemo = () => {
  return (
    <div className='space-y-4'>
      <Label>Let's Get Social</Label>
      <div className='flex flex-col gap-4'>
        {socials.map(({ label, icon: Icon }) => (
          <div key={label} className='flex items-center gap-2'>
            <Checkbox id={label} />
            <Label htmlFor={label}>
              <Icon className='size-4' aria-hidden='true' />
              {label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CheckboxVerticalGroupDemo
