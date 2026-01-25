import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const CheckboxColorsDemo = () => {
  return (
    <div className="flex flex-col items-start gap-4">
      <Label className="font-semibold">Alert Indicators</Label>
      <div className="flex flex-col items-start gap-2.5">
        <div key="destructive" className="flex items-center gap-2">
          <Checkbox
            className="data-checked:bg-red-500! data-checked:border-red-500! focus-visible:ring-red-500/20 dark:focus-visible:ring-red-500/40 dark:text-white"
            aria-label="Color destructive"
            defaultChecked
          />
          <Label htmlFor="destructive" className="text-red-400">
            Oops! Error
          </Label>
        </div>
        <div key="success" className="flex items-center gap-2">
          <Checkbox
            className="data-checked:bg-teal-400! data-checked:border-teal-400! focus-visible:ring-teal-400/20 dark:focus-visible:ring-teal-400/40 dark:text-white"
            aria-label="Color success"
            defaultChecked
          />
          <Label htmlFor="success" className="text-teal-400">
            Approved
          </Label>
        </div>
        <div key="warning" className="flex items-center gap-2">
          <Checkbox
            className="data-checked:bg-amber-500! data-checked:border-amber-500! focus-visible:ring-amber-500/20 dark:focus-visible:ring-amber-500/40 dark:text-white"
            aria-label="Color warning"
            defaultChecked
          />
          <Label htmlFor="warning" className="text-amber-400">
            Caution
          </Label>
        </div>
      </div>
    </div>
  );
};

export default CheckboxColorsDemo;
