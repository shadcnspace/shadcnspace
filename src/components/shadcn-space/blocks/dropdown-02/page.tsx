import Dropdown from "@/components/shadcn-space/blocks/dropdown-02/dropdown";
import { Button } from "@/components/ui/button";
import { BellRing } from "lucide-react";

const page = () => {
  return (
    <Dropdown
      defaultOpen={true}
      align="center"
      trigger={
        <Button className="rounded-full h-5 w-5">
          <BellRing className="size-4" />
        </Button>
      }
    />
  );
};

export default page;
