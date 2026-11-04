'use client'
 
import { useEffect, useState, type ComponentProps } from 'react'
import { CheckIcon, MinusIcon } from 'lucide-react'
import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox'
import { Label } from '@/components/ui/label'
 
const items = ['Nike', 'Adidas', 'Puma']
 
type CheckedState = boolean | 'indeterminate'
 
interface CheckboxProps extends Omit<ComponentProps<typeof CheckboxPrimitive.Root>, 'checked' | 'defaultChecked' | 'onCheckedChange'> {
  checked?: CheckedState
  defaultChecked?: CheckedState
  onCheckedChange?: (checked: CheckedState) => void
}
 
const Checkbox = ({ checked, defaultChecked, onCheckedChange, ...props }: CheckboxProps) => {
  return (
    <CheckboxPrimitive.Root
      data-slot='checkbox'
      checked={checked === 'indeterminate' ? undefined : checked}
      indeterminate={checked === 'indeterminate'}
      defaultChecked={defaultChecked === 'indeterminate' ? false : defaultChecked}
      onCheckedChange={(c) => {
        onCheckedChange?.(c)
      }}
      className='peer border-input dark:bg-input/30 data-[checked]:bg-primary data-[checked]:text-primary-foreground data-[indeterminate]:text-foreground dark:data-[checked]:bg-primary data-[checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive group size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50'
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot='checkbox-indicator'
        className='flex items-center justify-center text-current transition-none'
      >
        <MinusIcon className='hidden size-2.5 group-data-[indeterminate]:block' />
        <CheckIcon className='hidden size-3.5 group-data-[checked]:block' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
 
const CheckboxTreeDemo = () => {
  const [checked, setChecked] = useState<CheckedState>('indeterminate')
  const [selected, setSelected] = useState<string[]>(['Child 1', 'Child 2'])
 
  useEffect(() => {
    if (selected.length === items.length) {
      setChecked(true)
    } else if (selected.length > 0) {
      setChecked('indeterminate')
    } else {
      setChecked(false)
    }
  }, [selected])
 
  const handleCheckedChange = (checked: CheckedState) => {
    setChecked(checked)
 
    if (checked === true) {
      setSelected([...items])
    } else if (checked === false) {
      setSelected([])
    }
  }
 
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-2'>
        <Checkbox id='Brands' checked={checked} onCheckedChange={handleCheckedChange} />
        <Label htmlFor='Brands'>Brands</Label>
      </div>
      <div className='flex flex-col gap-2 pl-6'>
        {items.map(label => (
          <div key={label} className='flex items-center gap-2'>
            <Checkbox
              id={label}
              checked={selected.includes(label)}
              onCheckedChange={checked =>
                setSelected(checked ? [...selected, label] : selected.filter(item => item !== label))
              }
            />
            <Label htmlFor={label} className='text-muted-foreground'>{label}</Label>
          </div>
        ))}
      </div>
    </div>
  )
}
 
export default CheckboxTreeDemo