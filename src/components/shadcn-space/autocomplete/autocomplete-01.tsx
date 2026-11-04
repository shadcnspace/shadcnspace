"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompleteSeparator,
} from "@/components/ui/autocomplete";

const frameworks = [
  { value: "nextjs", label: "Next.js", group: "React" },
  { value: "remix", label: "Remix", group: "React" },
  { value: "gatsby", label: "Gatsby", group: "React" },
  { value: "nuxt", label: "Nuxt.js", group: "Vue" },
  { value: "quasar", label: "Quasar", group: "Vue" },
  { value: "sveltekit", label: "SvelteKit", group: "Svelte" },
  { value: "astro", label: "Astro", group: "Other" },
  { value: "solidstart", label: "SolidStart", group: "Other" },
  { value: "qwik", label: "Qwik", group: "Other" },
];

const groups = ["React", "Vue", "Svelte", "Other"];

const AutocompleteDemo = () => {
  const [inputValue, setInputValue] = useState("");

  const filtered = frameworks.filter((f) =>
    f.label.toLowerCase().includes(inputValue.toLowerCase()),
  );

  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor="framework-input">Framework</Label>
      <Autocomplete onInputValueChange={setInputValue}>
        <AutocompleteInput
          id="framework-input"
          placeholder="Search framework..."
        />
        <AutocompleteContent>
          <AutocompleteList>
            {filtered.length === 0 && (
              <AutocompleteEmpty>No framework found.</AutocompleteEmpty>
            )}
            {groups.map((group, gi) => {
              const items = filtered.filter((f) => f.group === group);
              if (!items.length) return null;
              return (
                <AutocompleteGroup key={group}>
                  {gi > 0 && <AutocompleteSeparator />}
                  <AutocompleteGroupLabel>{group}</AutocompleteGroupLabel>
                  {items.map((f) => (
                    <AutocompleteItem
                      key={f.value}
                      value={f.value}
                      label={f.label}
                    >
                      {f.label}
                    </AutocompleteItem>
                  ))}
                </AutocompleteGroup>
              );
            })}
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
    </div>
  );
};

export default AutocompleteDemo;
