import { useId } from 'react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectWithOverlappingLabelDemo = () => {
  const id = useId()

  return (
    <div className='group relative w-full max-w-xs'>
      <label
        htmlFor={id}
        className='bg-background text-foreground absolute top-0 left-2 z-10 block -translate-y-1/2 px-1 text-xs font-medium group-has-disabled:opacity-50'
      >
        Country
      </label>
      <Select defaultValue="New York">
        <SelectTrigger id={id} className='dark:!bg-background w-full'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent className={"data-[state=open]:slide-in-from-bottom-8 data-[state=open]:zoom-in-100 duration-400"}>
          <SelectItem value='New York'>New York</SelectItem>
          <SelectItem value='London'>London</SelectItem>
          <SelectItem value='Tokyo'>Tokyo</SelectItem>
          <SelectItem value='Paris'>Paris</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectWithOverlappingLabelDemo
