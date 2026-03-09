"use client";

import { useId, useState } from "react";

import { CheckIcon, ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const countries = [
  {
    value: "1",
    label: "United States",
    flag: "https://images.shadcnspace.com/assets/flags/flag-us.svg",
  },
  {
    value: "2",
    label: "India",
    flag: "https://images.shadcnspace.com/assets/flags/flag-india.svg",
  },
  {
    value: "3",
    label: "France",
    flag: "https://images.shadcnspace.com/assets/flags/flag-france.svg",
  },
  {
    value: "4",
    label: "China",
    flag: "https://images.shadcnspace.com/assets/flags/flag-china.svg",
  },
  {
    value: "5",
    label: "Australia",
    flag: "https://images.shadcnspace.com/assets/flags/flag-australia.svg",
  },
  {
    value: "6",
    label: "Brazil",
    flag: "https://images.shadcnspace.com/assets/flags/flag-brazil.svg",
  },
];

const ComboboxCountryFlagDemo = () => {
  const id = useId();
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

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
              className="bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]"
            >
              {value ? (
                <span className="flex min-w-0 items-center gap-2">
                  <img
                    src={countries.find((item) => item.label === value)?.flag}
                    alt={value}
                    className="h-4 w-5"
                  />
                  <span className="truncate">{value}</span>
                </span>
              ) : (
                <span className="text-muted-foreground">Select country</span>
              )}
              <ChevronDownIcon
                className="text-muted-foreground/80 shrink-0"
                aria-hidden="true"
              />
            </Button>
          }
        />
        <PopoverContent className="border-input w-full p-0" align="start">
          <Command>
            <CommandInput placeholder="Search country..." />
            <CommandList>
              <CommandEmpty>No country found.</CommandEmpty>
              {countries.map((country) => (
                <CommandItem
                  key={country.value}
                  value={country.label}
                  onSelect={(currentValue) => {
                    setValue(currentValue);
                    setOpen(false);
                  }}
                  className="[&>svg:last-of-type]:hidden"
                >
                  <img
                    src={country.flag}
                    alt={`${country.label} flag`}
                    className="h-4 w-4 rounded-full"
                  />
                  {country.label}
                  {value === country.value && (
                    <CheckIcon size={16} className="ml-auto" />
                  )}
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ComboboxCountryFlagDemo;
