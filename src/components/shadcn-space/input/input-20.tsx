import { useId } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RangeInputDemo = () => {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label className="flex-1">Range</Label>
      <div className="flex">
        <Input
          aria-label="Min Value"
          className="flex-1 rounded-e-none [-moz-appearance:textfield] focus:z-10 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          id={`${id}-1`}
          placeholder="From"
          type="number"
        />
        <Input
          aria-label="Max Value"
          className="-ms-px flex-1 rounded-s-none [-moz-appearance:textfield] focus:z-10 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          id={`${id}-2`}
          placeholder="To"
          type="number"
        />
      </div>
    </div>
  );
}

export default RangeInputDemo