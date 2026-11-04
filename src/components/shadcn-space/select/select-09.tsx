import { useId } from 'react'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectWithSeparatorDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Select Your Focus Area</Label>
      <Select defaultValue='Leadership'>
        <SelectTrigger id={id} className='w-full'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="data-[state=open]:slide-in-from-bottom-8 data-[state=open]:zoom-in-100 duration-400">
          <SelectGroup>
            <SelectLabel>Professional Skills</SelectLabel>
            <SelectItem value='Leadership'>Leadership</SelectItem>
            <SelectItem value='Communication'>Communication</SelectItem>
            <SelectItem value='Project Management'>Project Management</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Personal Growth</SelectLabel>
            <SelectItem value='Mindfulness'>Mindfulness</SelectItem>
            <SelectItem value='Time Management'>Time Management</SelectItem>
            <SelectItem value='Creativity'>Creativity</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Technology & Innovation</SelectLabel>
            <SelectItem value='AI & Machine Learning'>AI & Machine Learning</SelectItem>
            <SelectItem value='Blockchain'>Blockchain</SelectItem>
            <SelectItem value='Web Development'>Web Development</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectWithSeparatorDemo
