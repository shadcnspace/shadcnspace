"use client";

import { useId, useState } from "react";

import {
  CheckIcon,
  ChevronsUpDownIcon,
  DollarSignIcon,
  FactoryIcon,
  MonitorIcon,
  PaletteIcon,
  ZapIcon,
} from "lucide-react";

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

const techStack = [
  {
    value: "nextjs",
    label: "Next.js (Frontend Framework)",
    icon: MonitorIcon,
  },
  {
    value: "postgresql",
    label: "PostgreSQL (Database)",
    icon: FactoryIcon,
  },
  {
    value: "supabase",
    label: "Supabase (Backend as a Service)",
    icon: ZapIcon,
  },
  {
    value: "stripe",
    label: "Stripe (Payment Infrastructure)",
    icon: DollarSignIcon,
  },
  {
    value: "tailwind",
    label: "Tailwind CSS (Styling)",
    icon: PaletteIcon,
  },
  {
    value: "vercel",
    label: "Vercel (Deployment & Hosting)",
    icon: ZapIcon,
  },
  {
    value: "redis",
    label: "Redis (Caching & Rate Limiting)",
    icon: ZapIcon,
  },
  {
    value: "github",
    label: "GitHub (Version Control)",
    icon: MonitorIcon,
  },
  {
    value: "openai",
    label: "OpenAI (AI & LLM API)",
    icon: ZapIcon,
  },
  {
    value: "posthog",
    label: "PostHog (Product Analytics)",
    icon: MonitorIcon,
  },
];

const ComboboxWithIconDemo = () => {
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
              className="bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-2"
            >
              {value ? (
                <span className="flex min-w-0 items-center gap-2">
                  {(() => {
                    const selectedItem = techStack.find(
                      (item) => item.value === value,
                    );

                    if (selectedItem) {
                      const Icon = selectedItem.icon;

                      return <Icon className="text-muted-foreground size-4" />;
                    }

                    return null;
                  })()}
                  <span className="truncate">
                    {
                      techStack.find((item) => item.value === value)
                        ?.label
                    }
                  </span>
                </span>
              ) : (
                <span className="text-muted-foreground">
                  Select a tech stack component
                </span>
              )}
              <ChevronsUpDownIcon
                className="text-muted-foreground/80 shrink-0 size-4"
                aria-hidden="true"
              />
            </Button>
          }
        />
        <PopoverContent className="border-input w-full p-0" align="start">
          <Command>
            <CommandInput placeholder="Search tech stack..." />
            <CommandList>
              <CommandEmpty>No tool found.</CommandEmpty>
              <CommandGroup>
                {techStack.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                    className="[&>svg:last-of-type]:hidden"
                  >
                    <div className="flex grow items-center gap-2">
                      <item.icon className="text-muted-foreground size-4" />
                      {item.label}
                    </div>
                    {value === item.value && (
                      <CheckIcon
                        className="ml-auto size-4"
                        aria-hidden="true"
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

export default ComboboxWithIconDemo;
