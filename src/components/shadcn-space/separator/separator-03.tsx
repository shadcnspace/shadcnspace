import { Separator } from '@/components/ui/separator'

const HorizontalPlacementDemo = () => {
  return (
    <div className='w-full max-w-sm'>
      <div className='flex flex-col gap-6'>
        <div className='relative flex items-center gap-2'>
          <span className='text-muted-foreground shrink-0 pr-2 text-sm font-medium'>Start</span>
          <Separator className='flex-1' />
        </div>

        <div className='relative flex items-center gap-2'>
          <Separator className='flex-1' />
          <span className='text-muted-foreground shrink-0 px-2 text-sm font-medium'>Center</span>
          <Separator className='flex-1' />
        </div>

        <div className='relative flex items-center gap-2'>
          <Separator className='flex-1' />
          <span className='text-muted-foreground shrink-0 pl-2 text-sm font-medium'>End</span>
        </div>
      </div>
    </div>
  )
}

export default HorizontalPlacementDemo
