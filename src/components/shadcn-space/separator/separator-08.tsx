import { Separator } from "@/components/ui/separator";
import { Sparkles } from "lucide-react";

const WithIconDemo = () => {
  return (
    <div className="w-full max-w-sm">
      <div className="flex items-center gap-4">
        <Separator className="flex-1 border-border border-b-2 border-dashed bg-transparent" />
        <div className="shrink-0 rounded-full bg-orange-400/20 p-1.5">
          <Sparkles className="size-4 text-orange-400" />
        </div>
        <Separator className="flex-1 border-border border-b-2 border-dashed bg-transparent" />
      </div>
    </div>
  );
};

export default WithIconDemo;
