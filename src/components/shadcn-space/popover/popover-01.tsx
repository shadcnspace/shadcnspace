import { InfoIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const PopoverAboutDemo = () => {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant='outline' size='icon' className="cursor-pointer" />}>
        <InfoIcon />
        <span className='sr-only'>About Shadcn Space</span>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <div className='grid gap-4'>
          <div className='space-y-1.5 text-center'>
            <div className='text-lg font-semibold'>About Shadcn Space</div>
            <p className='text-muted-foreground text-sm'>
              Welcome to Shadcn Space - your go-to library of beautifully crafted, registry-ready UI components built on shadcn/ui.
            </p>
          </div>
          <Button size='sm' render={<a href='#' />} className="hover:bg-primary/80 cursor-pointer">
            Learn More
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverAboutDemo
