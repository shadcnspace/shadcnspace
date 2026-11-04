import { Button } from "@/components/ui/button";
import "@/components/shadcn-space/button/button-02.css";

const ButtonShinyTextDemo = () => {
  return (
    <Button className="transition-all">
      <div className="shiny inline-block bg-[linear-gradient(120deg,rgba(255,255,255,0)_40%,rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)_60%)] dark:bg-[linear-gradient(120deg,rgba(0,0,0,0)_40%,rgba(0,0,0,0.8)_50%,rgba(0,0,0,0)_60%)] bg-[length:200%_100%] bg-clip-text text-base font-medium text-white/70 dark:text-background/60">
        Shiny Button Text
      </div>
    </Button>
  );
};

export default ButtonShinyTextDemo;
