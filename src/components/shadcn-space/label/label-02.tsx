import { useId } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const LabelWithInput = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Password</Label>
      <Input id={id} type='password' placeholder='••••••••' />
    </div>
  )
}

export default LabelWithInput
