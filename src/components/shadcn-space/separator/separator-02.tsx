import { Separator } from '@/components/ui/separator'

const VerticalDemo = () => {
  return (
    <div className='flex items-center gap-4 text-center text-sm'>
      <div className='flex flex-col items-center gap-1'>
        <span className='text-lg font-medium'>4.2k</span>
        <span className='text-muted-foreground text-xs font-medium uppercase'>Projects</span>
      </div>
      <Separator orientation='vertical' className='h-12' />
      <div className='flex flex-col items-center gap-1'>
        <span className='text-lg font-medium'>98%</span>
        <span className='text-muted-foreground text-xs font-medium uppercase'>Success</span>
      </div>
      <Separator orientation='vertical' className='h-12' />
      <div className='flex flex-col items-center gap-1'>
        <span className='text-lg font-medium'>320</span>
        <span className='text-muted-foreground text-xs font-medium uppercase'>Clients</span>
      </div>
    </div>
  )
}

export default VerticalDemo
