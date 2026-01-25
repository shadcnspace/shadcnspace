import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const RadioGroupColorsDemo = () => {
  return (
    <>
      <RadioGroup
        defaultValue="destructive"
        className="flex items-center gap-4 justify-center"
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem
            value="destructive"
            id="color-destructive"
            className="border-destructive text-destructive [&_svg]:fill-destructive focus-visible:ring-destructive/20 focus-visible:border-destructive dark:focus-visible:ring-destructive/40"
          />
          <Label htmlFor="color-destructive" className="text-red-500">
            Error
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem
            value="success"
            id="color-success"
            className="border-teal-400 text-teal-400 focus-visible:border-teal-400 focus-visible:ring-teal-400/20 dark:border-teal-400 dark:text-teal-400 dark:focus-visible:border-teal-400 dark:focus-visible:ring-teal-400/40 [&_svg]:fill-teal-400 dark:[&_svg]:fill-teal-400"
          />
          <Label htmlFor="color-success" className="text-teal-400">
            Approved
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem
            value="info"
            id="color-info"
            className="border-amber-300 text-amber-300 focus-visible:border-amber-300 focus-visible:ring-amber-300/20 dark:border-amber-400 dark:text-amber-400 dark:focus-visible:border-amber-400 dark:focus-visible:ring-amber-400/40 [&_svg]:fill-amber-300 dark:[&_svg]:fill-amber-400"
          />
          <Label htmlFor="color-info" className="text-amber-400">
            Alert
          </Label>
        </div>
      </RadioGroup>
    </>
  );
};

export default RadioGroupColorsDemo;
