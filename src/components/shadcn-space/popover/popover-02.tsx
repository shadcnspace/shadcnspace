import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const PopoverProfileCardDemo = () => {
  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant='ghost'
            className='flex items-center gap-2 px-2 cursor-pointer hover:bg-transparent dark:hover:bg-transparent aria-expanded:bg-transparent'
          />
        }
      >
        <Avatar className='h-8 w-8'>
          <AvatarImage
            src='https://images.shadcnspace.com/assets/profiles/jenny.webp'
            alt='Sophia Carter'
          />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className='w-72 p-0' align='start'>
        <div className='h-20 rounded-t-md bg-linear-to-r from-primary/30 to-primary/10' />
        <div className='px-4 pb-4 -mt-8'>
          <Avatar className='h-14 w-14 border-2 border-background'>
            <AvatarImage
              src='https://images.shadcnspace.com/assets/profiles/jenny.webp'
              alt='Sophia Carter'
            />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div className='mt-2 space-y-1'>
            <div className='flex items-center gap-2'>
              <span className='font-semibold'>Sophia Carter</span>
              <Badge variant='secondary' className='text-xs'>
                Pro
              </Badge>
            </div>
            <p className='text-muted-foreground text-sm'>
              Frontend Engineer at Company Inc.
            </p>
          </div>
          <div className='mt-3 flex gap-6 text-sm'>
            <div className='text-center'>
              <div className='font-semibold'>84</div>
              <div className='text-muted-foreground text-xs'>Posts</div>
            </div>
            <div className='text-center'>
              <div className='font-semibold'>3.1k</div>
              <div className='text-muted-foreground text-xs'>Followers</div>
            </div>
            <div className='text-center'>
              <div className='font-semibold'>214</div>
              <div className='text-muted-foreground text-xs'>Following</div>
            </div>
          </div>
          <div className='mt-4 flex gap-2'>
            <Button size='sm' className='flex-1 cursor-pointer hover:bg-primary/80'>
              Follow
            </Button>
            <Button
              size='sm'
              variant='outline'
              className='flex-1 cursor-pointer'
            >
              Message
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverProfileCardDemo
