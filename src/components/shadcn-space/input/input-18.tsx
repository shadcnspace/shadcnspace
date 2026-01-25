import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputDisabledDemo = () => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="disabled-input">Account Number</Label>
      <Input
        type="text"
        id="disabled-input"
        value="ACC-987654321"
        placeholder="ACC-987654321"
        disabled
      />
      <p className="text-xs text-muted-foreground">
        This field cannot be edited.
      </p>
    </div>
  );
};

export default InputDisabledDemo;