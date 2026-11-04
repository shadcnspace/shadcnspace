import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectRequiredDemo = () => {
  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor="country" className="gap-1">
        Country <span className="text-destructive">*</span>
      </Label>

      <Select defaultValue="United States" required>
        <SelectTrigger id="country" className="w-full">
          <SelectValue />
        </SelectTrigger>

        <SelectContent className={"data-[state=open]:!zoom-in-0 origin-center duration-400"}>
          <SelectItem value="United States">United States</SelectItem>
          <SelectItem value="Japan">Japan</SelectItem>
          <SelectItem value="Australia">Australia</SelectItem>
          <SelectItem value="Brazil">Brazil</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectRequiredDemo
