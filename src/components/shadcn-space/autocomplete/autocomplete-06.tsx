"use client";

import { useId, useState } from "react";
import { motion } from "motion/react";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/components/ui/autocomplete";
import { Label } from "@/components/ui/label";
import {
  Globe2Icon,
  SmartphoneIcon,
  LaptopIcon,
  ServerIcon,
  BotIcon,
  DatabaseIcon,
  GitBranchIcon,
  PaletteIcon,
  BookOpenIcon,
  BarChart3Icon,
} from "lucide-react";

const items = [
  { id: "web-app", label: "Web Application", icon: <Globe2Icon /> },
  { id: "mobile-app", label: "Mobile App", icon: <SmartphoneIcon /> },
  { id: "desktop-app", label: "Desktop Software", icon: <LaptopIcon /> },
  { id: "rest-api", label: "REST API", icon: <ServerIcon /> },
  { id: "ml-model", label: "Machine Learning", icon: <BotIcon /> },
  { id: "data-pipeline", label: "Data Pipeline", icon: <DatabaseIcon /> },
  { id: "devops", label: "DevOps & CI/CD", icon: <GitBranchIcon /> },
  { id: "design-system", label: "Design System", icon: <PaletteIcon /> },
  { id: "docs-site", label: "Documentation Site", icon: <BookOpenIcon /> },
  { id: "analytics", label: "Analytics Dashboard", icon: <BarChart3Icon /> },
];

const SPRING = { type: "spring", bounce: 0.15, duration: 0.3 } as const;

const AutocompleteWithIcon = () => {
  const id = useId();
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const selectedItem = items.find((item) => item.id === selectedValue);
  const showIcon = !!selectedItem && inputValue === selectedItem.label;

  const filtered = items.filter((item) =>
    item.label.toLowerCase().includes(inputValue.toLowerCase()),
  );

  return (
    <div className="w-full max-w-xs">
      <Autocomplete
        onInputValueChange={setInputValue}
        onValueChange={setSelectedValue}
      >
        <div className="flex flex-col items-start gap-2">
          <Label htmlFor={id}>Project Type</Label>
          <div className="relative w-full">
            {showIcon && (
              <span className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 [&_svg]:size-4 [&_svg]:shrink-0">
                {selectedItem.icon}
              </span>
            )}
            <AutocompleteInput
              id={id}
              placeholder="Search project type..."
              className={showIcon ? "pl-8" : undefined}
              showClear
            />
          </div>
        </div>

        <AutocompleteContent>
          <AutocompleteList>
            {filtered.length === 0 ? (
              <AutocompleteEmpty>No items found.</AutocompleteEmpty>
            ) : (
              filtered.map((item, idx) => (
                <AutocompleteItem
                  key={item.id}
                  value={item.id}
                  label={item.label}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...SPRING, delay: idx * 0.04 }}
                    className="flex w-full items-center gap-2"
                  >
                    <span className="text-muted-foreground [&_svg]:size-4 [&_svg]:shrink-0">
                      {item.icon}
                    </span>
                    {item.label}
                  </motion.div>
                </AutocompleteItem>
              ))
            )}
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
    </div>
  );
};

export default AutocompleteWithIcon;
