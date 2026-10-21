import { Button } from "@/components/ui/button";
import { Swords } from "lucide-react";

const SEGMENTS = 10;

const LevelUpButton = () => {
  return (
    <Button
      variant="ghost"
      className="group h-auto flex-col items-stretch gap-2 rounded-xl border border-white/10 bg-gray-950 px-4 py-3 text-white hover:bg-gray-950 hover:text-white dark:hover:bg-gray-950 cursor-pointer"
    >
      <span className="flex items-center gap-6">
        <span className="flex items-center gap-2 text-sm font-semibold tracking-wide">
          <Swords className="size-4 text-amber-300 transition-transform duration-300 group-hover:-rotate-45" />
          Level Up
        </span>
        <span className="ms-auto font-mono text-xs text-sky-400">LV 07</span>
      </span>

      {/* Segmented XP bar, fills left to right on hover */}
      <span aria-hidden="true" className="flex gap-1">
        {Array.from({ length: SEGMENTS }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 flex-1 rounded-sm bg-white/15 transition-colors duration-200 group-hover:bg-teal-400 motion-reduce:transition-none"
            style={{ transitionDelay: `${index * 50}ms` }}
          />
        ))}
      </span>
    </Button>
  );
};

export default LevelUpButton;
