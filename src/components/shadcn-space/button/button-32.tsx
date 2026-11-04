import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const GenerateAIButton = () => {
  return (
    <Button
      variant="outline"
      className="relative h-10 gap-2 overflow-hidden rounded-full border-transparent px-6 text-primary cursor-pointer"
    >
      {/* Continuously animated gradient border */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-full bg-border">
        <div className="absolute top-1/2 left-1/2 size-40 -translate-x-1/2 -translate-y-1/2 animate-spin animation-duration-[2.5s] bg-[conic-gradient(from_0deg,transparent_0%,transparent_35%,var(--color-blue-500)_50%,transparent_65%,transparent_85%,var(--color-orange-400)_100%)]" />
        <div className="absolute inset-0.5 rounded-full bg-background" />
      </div>

      <span className="relative z-10 flex items-center gap-2">
        <Sparkles className="size-4" fill="currentColor" />
        Generate
      </span>
    </Button>
  );
};

export default GenerateAIButton;
