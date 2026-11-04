import { Separator } from '@/components/ui/separator'

const VerticalPlacementDemo = () => {
  return (
    <div className='flex h-64 w-full max-w-sm justify-center gap-16'>
      <div className='flex flex-col items-center gap-3'>
        <span className='text-muted-foreground shrink-0 text-sm font-medium'>Top</span>
        <Separator orientation='vertical' className='mx-auto flex-1' />
      </div>

      <div className='flex flex-col items-center gap-3'>
        <Separator orientation='vertical' className='mx-auto flex-1' />
        <span className='text-muted-foreground shrink-0 text-sm font-medium'>Center</span>
        <Separator orientation='vertical' className='mx-auto flex-1' />
      </div>

      <div className='flex flex-col items-center gap-3'>
        <Separator orientation='vertical' className='mx-auto flex-1' />
        <span className='text-muted-foreground shrink-0 text-sm font-medium'>Bottom</span>
      </div>
    </div>
  )
}

export default VerticalPlacementDemo
