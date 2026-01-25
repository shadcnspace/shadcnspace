import { Switch } from "@/components/ui/switch";

const SwitchCustomColorDemo = () => {
  return (
    <div className="flex gap-2">
      <Switch className={"data-checked:bg-blue-500"} defaultChecked />
      <Switch className={"data-checked:bg-teal-400"} defaultChecked />
      <Switch className={"data-checked:bg-orange-400"} defaultChecked />
    </div>
  );
};

export default SwitchCustomColorDemo;
