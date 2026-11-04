import { useId } from 'react'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const LabelWithBadge = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>
        Webhook URL{' '}
        <Badge className='border-none bg-teal-400/10 px-1.5 py-px text-teal-400'>
          Active
        </Badge>
      </Label>
      <Input id={id} type='url' placeholder='https://yoursite.com/webhook' />
    </div>
  )
}

export default LabelWithBadge
