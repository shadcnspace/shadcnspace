import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SwitchWithNormalLabelDemo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" className="cursor-pointer" />
      <Label htmlFor="airplane-mode" className="cursor-pointer">
        Airplane Mode
      </Label>
    </div>
  );
};

export default SwitchWithNormalLabelDemo;
