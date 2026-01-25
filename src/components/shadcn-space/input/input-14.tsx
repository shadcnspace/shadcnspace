import { useId } from 'react'

import { Input } from '@/components/ui/input'

const InputErrorDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Input
        id={id}
        type='email'
        placeholder='Email address'
        className="border-red-400 bg-background focus-visible:border-red-400 focus-visible:ring-red-400/50"
        defaultValue='invalid@email.com'
      />
      <Input
      className="border-teal-400 bg-background focus-visible:border-teal-400 focus-visible:ring-teal-400/50"
      defaultValue="shadcnspace@gmail.com"
      id={id}
      placeholder="shadcnspace@gmail.com"
    />
    </div>
  )
}

export default InputErrorDemo
