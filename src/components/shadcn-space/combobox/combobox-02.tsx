"use client";

import { useId, useState } from "react";

import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";

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

const regions = [
  {
    value: "us-east-1",
    label: "US East (N. Virginia)",
  },
  {
    value: "us-east-2",
    label: "US East (Ohio)",
  },
  {
    value: "us-west-1",
    label: "US West (N. California)",
  },
  {
    value: "us-west-2",
    label: "US West (Oregon)",
  },
  {
    value: "eu-west-1",
    label: "EU (Ireland)",
  },
  {
    value: "eu-central-1",
    label: "EU (Frankfurt)",
  },
  {
    value: "ap-northeast-1",
    label: "Asia Pacific (Tokyo)",
  },
  {
    value: "sa-east-1",
    label: "South America (São Paulo)",
  },
];

const ComboboxDeploymentRegionDemo = () => {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

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
              className="w-full max-w-xs justify-between font-normal"
            >
              {value ? (
                regions.find((region) => region.value === value)?.label
              ) : (
                <span className="text-muted-foreground">
                  Select server region
                </span>
              )}
              <ChevronsUpDownIcon className="opacity-50 size-4" />
            </Button>
          }
        />
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search regions..." className="h-9" />
            <CommandList>
              <CommandEmpty>No region found.</CommandEmpty>
              <CommandGroup>
                {regions.map((region) => (
                  <CommandItem
                    key={region.value}
                    value={region.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                    className="[&>svg:last-of-type]:hidden"
                  >
                    {region.label}
                    {value === region.value && (
                      <CheckIcon
                        className={cn(
                          "ml-auto size-4 text-blue-500 transition-all duration-200 scale-100 block"
                        )}
                      />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ComboboxDeploymentRegionDemo;
