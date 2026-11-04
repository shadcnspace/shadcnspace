"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "motion/react";
import { CircleX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/components/ui/autocomplete";
import { cn } from "@/lib/utils";

const cities = [
  { value: "new-york", label: "New York" },
  { value: "los-angeles", label: "Los Angeles" },
  { value: "chicago", label: "Chicago" },
  { value: "houston", label: "Houston" },
  { value: "phoenix", label: "Phoenix" },
  { value: "philadelphia", label: "Philadelphia" },
  { value: "san-antonio", label: "San Antonio" },
  { value: "san-diego", label: "San Diego" },
  { value: "dallas", label: "Dallas" },
  { value: "san-jose", label: "San Jose" },
];

const AutocompleteDemo = () => {
  const [inputValue, setInputValue] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [animatingChars, setAnimatingChars] = useState<string[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filtered = cities.filter((c) =>
    c.label.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const handleClear = useCallback(() => {
    if (!inputValue || isAnimating) return;

    const chars = inputValue.split("");
    setAnimatingChars(chars);
    setIsAnimating(true);

    // Trigger internal clear button after last letter finishes animating
    const totalDelay = (chars.length - 1) * 30 + 280 + 60;

    setTimeout(() => {
      const clearBtn = wrapperRef.current?.querySelector<HTMLButtonElement>(
        '[data-slot="autocomplete-clear"]',
      );
      clearBtn?.click();
      setIsAnimating(false);
      setAnimatingChars([]);
    }, totalDelay);
  }, [inputValue, isAnimating]);

  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor="city-input">Destination City</Label>

      <div ref={wrapperRef} className="relative">
        <Autocomplete onInputValueChange={setInputValue}>
          <AutocompleteInput
            id="city-input"
            placeholder="Search city..."
            showClear
            className={cn(
              "pr-8",
              // Hide the built-in clear button — we use our own with animation
              "[&~[data-slot=autocomplete-clear]]:opacity-0 [&~[data-slot=autocomplete-clear]]:pointer-events-none",
              // Make input text invisible during vanish animation
              isAnimating && "text-transparent caret-transparent",
            )}
          />

          <AutocompleteContent>
            <AutocompleteList>
              {filtered.length === 0 ? (
                <AutocompleteEmpty>No city found.</AutocompleteEmpty>
              ) : (
                filtered.map((c) => (
                  <AutocompleteItem
                    key={c.value}
                    value={c.value}
                    label={c.label}
                  >
                    {c.label}
                  </AutocompleteItem>
                ))
              )}
            </AutocompleteList>
          </AutocompleteContent>
        </Autocomplete>

        {/* Animated letter overlay — shown during clear animation */}
        {isAnimating && (
          <div
            className="pointer-events-none absolute inset-0 flex items-center px-2.5"
            aria-hidden="true"
          >
            {animatingChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                animate={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{
                  delay: i * 0.03,
                  duration: 0.26,
                  ease: "easeOut",
                }}
                className="whitespace-pre text-sm text-foreground"
              >
                {char}
              </motion.span>
            ))}
          </div>
        )}

        {/* Custom clear button with vanish animation */}
        {inputValue && !isAnimating && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleClear}
            aria-label="Clear input"
            className="absolute right-0.5 top-1/2 size-7 -translate-y-1/2 opacity-60 hover:opacity-100 hover:bg-transparent"
          >
            <CircleX className="size-4 text-foreground" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default AutocompleteDemo;
