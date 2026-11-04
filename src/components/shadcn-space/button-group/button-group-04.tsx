import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";
import { Save, X, MoreHorizontal } from "lucide-react";

export default function ButtonGroupSeparatorDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <ButtonGroup>
        <Button className="gap-2 cursor-pointer">
          <Save className="size-4" />
          Save Changes
        </Button>
        <ButtonGroupSeparator />
        <Button variant="outline" size="icon" className="cursor-pointer">
          <MoreHorizontal className="size-4" />
        </Button>
      </ButtonGroup>
      
      <ButtonGroup>
        <Button variant="outline" className="gap-2 cursor-pointer">
          <X className="size-4" />
          Discard
        </Button>
        <ButtonGroupSeparator />
        <Button variant="default" className="gap-2 cursor-pointer">
          <Save className="size-4" />
          Publish
        </Button>
      </ButtonGroup>
    </div>
  );
}
