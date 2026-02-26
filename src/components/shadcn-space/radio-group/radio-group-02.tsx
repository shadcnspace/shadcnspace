import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const RadioGroupColorsDemo = () => {
  return (
    <RadioGroup
      defaultValue="destructive"
      className="flex items-center gap-6 justify-center"
    >
      {/* Error / Destructive */}
      <div className="flex items-center gap-2">
        <RadioGroupItem
          value="destructive"
          id="color-destructive"
          className="text-destructive border-destructive data-checked:bg-transparent! data-checked:border-destructive! [&_span[data-slot]]:bg-transparent! [&_span:not([data-slot])]:bg-destructive! focus-visible:ring-destructive/20 focus-visible:border-destructive cursor-pointer"
        />
        <Label
          htmlFor="color-destructive"
          className="text-destructive cursor-pointer font-medium leading-none"
        >
          Error
        </Label>
      </div>

      {/* Approved / Success */}
      <div className="flex items-center gap-2">
        <RadioGroupItem
          value="success"
          id="color-success"
          className="text-teal-500 border-teal-500 data-checked:bg-transparent! data-checked:border-teal-500! [&_span[data-slot]]:bg-transparent! [&_span:not([data-slot])]:bg-teal-500! focus-visible:border-teal-500 focus-visible:ring-teal-500/20 cursor-pointer"
        />
        <Label
          htmlFor="color-success"
          className="text-teal-500 cursor-pointer font-medium leading-none"
        >
          Approved
        </Label>
      </div>

      {/* Alert / Warning */}
      <div className="flex items-center gap-2">
        <RadioGroupItem
          value="info"
          id="color-info"
          className="text-amber-500 border-amber-500 data-checked:bg-transparent! data-checked:border-amber-500! [&_span[data-slot]]:bg-transparent! [&_span:not([data-slot])]:bg-amber-500! focus-visible:border-amber-500 focus-visible:ring-amber-500/20 cursor-pointer"
        />
        <Label
          htmlFor="color-info"
          className="text-amber-500 cursor-pointer font-medium leading-none"
        >
          Alert
        </Label>
      </div>
    </RadioGroup>
  );
};

export default RadioGroupColorsDemo;
