import { useId } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const InputStartSelectDemo = () => {
  const id = useId();

  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor={id}>Phone Number</Label>
      <div className="flex rounded-md shadow-xs">
        <Select defaultValue="+91">
          <SelectTrigger
            id={id}
            className="rounded-r-none shadow-none focus-visible:z-1"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="+91" className="pr-2 [&_svg]:hidden">
              +91
            </SelectItem>
            <SelectItem value="+1" className="pr-2 [&_svg]:hidden">
              +1
            </SelectItem>
            <SelectItem value="+44" className="pr-2 [&_svg]:hidden">
              +44
            </SelectItem>
            <SelectItem value="+971" className="pr-2 [&_svg]:hidden">
              +971
            </SelectItem>
            <SelectItem value="+91" className="pr-2 [&_svg]:hidden">
              +91
            </SelectItem>
            <SelectItem value="+1" className="pr-2 [&_svg]:hidden">
              +1
            </SelectItem>
          </SelectContent>
        </Select>
        <Input
          id={id}
          className="-ms-px rounded-l-none shadow-none"
          placeholder="1234567890"
          type="tel"
        />
      </div>
    </div>
  );
};

export default InputStartSelectDemo;
