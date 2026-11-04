import { Button } from "@/components/ui/button";
import { Redo2, Undo2 } from "lucide-react";

const ButtonOutlineWithIconDemo = () => {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      {/*  */}
      <Button
        variant="outline"
        className="rounded-lg hover:-translate-y-1 transition-transform duration-200"
      >
        <Undo2 size={16} />
        Undo
      </Button>
      {/*  */}
      <Button
        variant="outline"
        className="rounded-lg hover:-translate-y-1 transition-transform duration-200"
      >
        Redo
        <Redo2 size={16} />
      </Button>
    </div>
  );
};

export default ButtonOutlineWithIconDemo;
