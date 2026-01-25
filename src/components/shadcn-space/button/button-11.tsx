import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const ButtonCancelDemo = () => {
  return (
    <Button className="hover:-translate-y-1 transition-transform duration-200 bg-red-500 text-white hover:bg-red-500/80">
      <X className="size-4" />
      Cancel
    </Button>
  );
};

export default ButtonCancelDemo;
