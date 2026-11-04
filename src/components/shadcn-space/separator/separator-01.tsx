import { Separator } from '@/components/ui/separator'

const DefaultDemo = () => {
  return (
    <div className='flex max-w-sm flex-col gap-4 py-4 text-sm'>
      <div className='flex flex-col gap-1'>
        <div className='font-medium'>shadcn/ui</div>
        <div className='text-muted-foreground'>Beautifully designed components built with Radix UI and Tailwind CSS.</div>
      </div>
      <Separator />
      <p>
        Accessible, customizable, and open source — copy, paste, and ship production-ready UI components in minutes.
      </p>
    </div>
  )
}

export default DefaultDemo
