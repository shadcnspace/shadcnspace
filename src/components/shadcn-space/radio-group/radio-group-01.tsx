import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/motion-radio-group";
 
const RadioGroupAnimatedDemo = () => {
  return (
    <RadioGroup defaultValue="system">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="light" id="theme-light" className="flex items-center justify-center" />
        <Label htmlFor="theme-light">Light</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="dark" id="theme-dark" className="flex items-center justify-center" />
        <Label htmlFor="theme-dark">Dark</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="system" id="theme-system" className="flex items-center justify-center" />
        <Label htmlFor="theme-system">System</Label>
      </div>
    </RadioGroup>
  );
};
 
export default RadioGroupAnimatedDemo;