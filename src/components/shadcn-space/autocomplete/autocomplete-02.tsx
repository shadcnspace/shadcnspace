"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/components/ui/autocomplete";

const languages = [
  { value: "typescript", label: "TypeScript" },
  { value: "javascript", label: "JavaScript" },
  { value: "python", label: "Python" },
  { value: "rust", label: "Rust" },
  { value: "go", label: "Go" },
  { value: "java", label: "Java" },
  { value: "csharp", label: "C#" },
  { value: "cpp", label: "C++" },
];

const SizeDemo = ({
  id,
  label,
  size,
  placeholder,
}: {
  id: string;
  label: string;
  size: "sm" | "default" | "lg";
  placeholder: string;
}) => {
  const [inputValue, setInputValue] = useState("");

  const filtered = languages.filter((l) =>
    l.label.toLowerCase().includes(inputValue.toLowerCase()),
  );

  return (
    <div className="w-full space-y-1.5">
      <Label htmlFor={id} className="text-muted-foreground text-xs font-medium">
        {label}
      </Label>
      <Autocomplete onInputValueChange={setInputValue}>
        <AutocompleteInput id={id} size={size} placeholder={placeholder} />
        <AutocompleteContent>
          <AutocompleteList>
            {filtered.length === 0 ? (
              <AutocompleteEmpty>No language found.</AutocompleteEmpty>
            ) : (
              filtered.map((l) => (
                <AutocompleteItem key={l.value} value={l.value} label={l.label}>
                  {l.label}
                </AutocompleteItem>
              ))
            )}
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
    </div>
  );
};

const AutocompleteDemo = () => {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <SizeDemo
        id="lang-sm"
        label="Small"
        size="sm"
        placeholder="Search language..."
      />
      <SizeDemo
        id="lang-default"
        label="Default"
        size="default"
        placeholder="Search language..."
      />
      <SizeDemo
        id="lang-lg"
        label="Large"
        size="lg"
        placeholder="Search language..."
      />
    </div>
  );
};

export default AutocompleteDemo;
