import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";

const ButtonSaveDemo = () => {
  return (
    <Button className="hover:-translate-y-1 transition-transform duration-200 bg-green-500 text-white hover:bg-green-500/80 rounded-m">
      <CheckCheck className="size-4" />
      Save Changes
    </Button>
  );
};

export default ButtonSaveDemo;
