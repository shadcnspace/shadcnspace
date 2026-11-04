import { CircleAlertIcon } from 'lucide-react'

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const AlertWithUserDetailDemo = () => {
  return (
    <Alert className='flex items-center justify-between cursor-pointer hover:scale-105 ease-in-out duration-300 max-w-md'>
      <Avatar className='rounded-sm'>
        <AvatarImage
          src='https://images.shadcnspace.com/assets/profiles/rough.webp'
          alt='Rough Richards'
          className='rounded-sm'
        />
        <AvatarFallback className='text-xs'>RR</AvatarFallback>
      </Avatar>
      <div className='flex-1 flex-col justify-center gap-1'>
        <AlertTitle className='flex-1'>Rough just dropped a reply on your image.</AlertTitle>
        <AlertDescription>12 unread <a href='#' className='text-teal-400 hover:text-teal-400/80! no-underline!'>Tap to see.</a></AlertDescription>
      </div>
      <CircleAlertIcon className='text-teal-400!'/>
    </Alert>
  )
}

export default AlertWithUserDetailDemo
