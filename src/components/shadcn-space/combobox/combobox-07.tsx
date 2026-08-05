"use client";

import { useId, useRef, useState, useEffect } from "react";

import { CheckIcon, ChevronsUpDownIcon, PlusIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const initialLabels = [
  { value: "bug", label: "Bug", color: "bg-red-500" },
  { value: "feature", label: "Feature", color: "bg-blue-500" },
  { value: "enhancement", label: "Enhancement", color: "bg-purple-500" },
  { value: "documentation", label: "Documentation", color: "bg-yellow-500" },
  { value: "design", label: "Design", color: "bg-pink-500" },
];

const labelColors = [
  "bg-green-500",
  "bg-orange-500",
  "bg-teal-500",
  "bg-cyan-500",
  "bg-indigo-500",
  "bg-rose-500",
];

const ComboboxCreatableDemo = () => {
  const id = useId();
  const colorIndexRef = useRef(0);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [labels, setLabels] =
    useState<{ value: string; label: string; color: string }[]>(initialLabels);
  const [value, setValue] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setMounted(true);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setMounted(false);
    }
  }, [open]);

  const selected = labels.find((l) => l.value === value);

  const trimmed = query.trim();
  const exactMatch = labels.some(
    (l) => l.label.toLowerCase() === trimmed.toLowerCase(),
  );
  const showCreate = trimmed.length > 0 && !exactMatch;

  const handleCreate = () => {
    const newValue = trimmed.toLowerCase().replace(/\s+/g, "-");
    const color = labelColors[colorIndexRef.current % labelColors.length];
    colorIndexRef.current += 1;
    const newLabel = { value: newValue, label: trimmed, color };
    setLabels((prev) => [...prev, newLabel]);
    setValue(newValue);
    setQuery("");
    setOpen(false);
  };

  return (
    <div className="w-full max-w-xs">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <Button
              id={id}
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-2 cursor-pointer"
            >
              {selected ? (
                <span className="flex items-center gap-2">
                  <span
                    className={cn(
                      "size-2 rounded-full shrink-0",
                      selected.color,
                    )}
                  />
                  <span className="truncate">{selected.label}</span>
                </span>
              ) : (
                <span className="text-muted-foreground">
                  Select or create label
                </span>
              )}
              <ChevronsUpDownIcon
                className="text-muted-foreground/80 shrink-0 size-4"
                aria-hidden="true"
              />
            </Button>
          }
        />
        <PopoverContent
          className="border-input w-full p-0"
          align="start"
          initialFocus={false}
        >
          {mounted && (
            <Command>
              <CommandInput
                placeholder="Search or create label..."
                value={query}
                onValueChange={setQuery}
              />
              <CommandList>
                <CommandEmpty className={cn(showCreate && "hidden")}>
                  No label found.
                </CommandEmpty>
                <CommandGroup>
                  {labels.map((label) => (
                    <CommandItem
                      key={label.value}
                      value={label.label}
                      onSelect={() => {
                        setValue(label.value === value ? "" : label.value);
                        setQuery("");
                        setOpen(false);
                      }}
                      className="[&>svg:last-of-type]:hidden"
                    >
                      <span className="flex grow items-center gap-2">
                        <span
                          className={cn(
                            "size-2 rounded-full shrink-0",
                            label.color,
                          )}
                        />
                        {label.label}
                      </span>
                      <CheckIcon
                        className={cn(
                          "size-4 transition-opacity",
                          value === label.value ? "opacity-100" : "opacity-0",
                        )}
                      />
                    </CommandItem>
                  ))}
                  {showCreate && (
                    <CommandItem
                      value={`__create__${trimmed}`}
                      onSelect={handleCreate}
                      className="[&>svg:last-of-type]:hidden text-muted-foreground"
                    >
                      <PlusIcon className="size-4 shrink-0" />
                      Create
                      <Badge
                        variant="secondary"
                        className="ml-1 rounded px-1.5 py-0 font-medium leading-5"
                      >
                        {trimmed}
                      </Badge>
                    </CommandItem>
                  )}
                </CommandGroup>
              </CommandList>
            </Command>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ComboboxCreatableDemo;
