import { Button } from "@/components/ui/button";
import { Gem } from "lucide-react";

const ButtonAnimatedBorderDemo = () => {
  return (
    <>
      <span className="relative inline-flex rounded-md">
        {/* Button */}
        <Button
          variant="outline"
          className="relative z-10 shadow-none rounded-md border-border/50 bg-background dark:bg-background hover:bg-background dark:hover:bg-background"
        >
          <Gem className="size-4" />
          Get Pro
        </Button>

        {/* Gradient border on top */}
        <span className="absolute inset-0 rounded-md pointer-events-none overflow-hidden">
          <span className="absolute -inset-full animate-spin [animation-duration:4s] bg-[conic-gradient(from_0deg,_#2b7fff_0deg,_#2b7fff_40deg,_transparent_60deg)]" />
        </span>
      </span>
    </>
  );
};

export default ButtonAnimatedBorderDemo;
