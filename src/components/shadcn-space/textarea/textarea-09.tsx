import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const TextareaDisabledDemo = () => {
  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor="message">Message</Label>
      <Textarea placeholder='Drop your message here !' disabled id="message" />
    </div>
  )
}

export default TextareaDisabledDemo
