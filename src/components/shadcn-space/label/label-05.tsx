import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const LabelWithSwitch = () => {
  return (
    <div className='flex items-center space-x-2'>
      <Switch id='email-notification' className='cursor-pointer' />
      <Label htmlFor='email-notification' className='cursor-pointer'>Email notifications</Label>
    </div>
  )
}

export default LabelWithSwitch
