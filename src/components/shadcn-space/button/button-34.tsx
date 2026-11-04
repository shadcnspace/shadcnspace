import { Button } from "@/components/ui/button";
import { Rocket, Star } from "lucide-react";

const KidsPlayButton = () => {
  return (
    <Button
      variant="ghost"
      className="group relative h-auto rounded-2xl border-0 bg-orange-400 p-0 pb-1.5 hover:bg-orange-400 dark:hover:bg-orange-400 cursor-pointer"
    >
      {/* Pop-out stars on hover */}
      <Star
        aria-hidden="true"
        className="absolute -top-3 -right-3 z-20 size-5 scale-0 fill-teal-400 text-teal-400 transition-transform duration-300 group-hover:scale-100 group-hover:rotate-45"
      />
      <Star
        aria-hidden="true"
        className="absolute -bottom-2 -left-3 z-20 size-4 scale-0 fill-blue-500 text-blue-500 transition-transform delay-75 duration-300 group-hover:scale-100 group-hover:-rotate-12"
      />

      {/* Raised button face, presses down into the base on click */}
      <span className="relative flex items-center gap-2 rounded-2xl border-2 border-orange-400 bg-amber-300 px-6 py-3 text-base font-extrabold tracking-wide text-gray-950 transition-transform duration-150 group-hover:-translate-y-0.5 group-active:translate-y-1.5">
        {/* Candy shine */}
        <span
          aria-hidden="true"
          className="absolute top-1.5 left-3 h-1.5 w-6 rounded-full bg-white/70"
        />
        <Rocket className="size-5 motion-safe:group-hover:animate-bounce" />
        Let's Play!
      </span>
    </Button>
  );
};

export default KidsPlayButton;
