"use client";

import type { ReactNode } from "react";
import { useEffect, useId, useState } from "react";
import { motion } from "motion/react";
import { LoaderCircleIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompleteStatus,
} from "@/components/ui/autocomplete";

const BASE = "https://images.shadcnspace.com/assets/profiles";

const topMembers = [
  {
    id: "liam-carter",
    name: "Liam Carter",
    position: "Frontend Architect",
    avatar: `${BASE}/ben.webp`,
  },
  {
    id: "ava-bennett",
    name: "Ava Bennett",
    position: "Senior Full Stack Engineer",
    avatar: `${BASE}/jenny.webp`,
  },
  {
    id: "noah-parker",
    name: "Noah Parker",
    position: "API Developer",
    avatar: `${BASE}/albert.webp`,
  },
  {
    id: "mia-collins",
    name: "Mia Collins",
    position: "Cloud Infrastructure Engineer",
    avatar: `${BASE}/jessica.webp`,
  },
  {
    id: "elijah-turner",
    name: "Elijah Turner",
    position: "React Native Developer",
    avatar: `${BASE}/user-1.jpg`,
  },
  {
    id: "sofia-mitchell",
    name: "Sofia Mitchell",
    position: "Interaction Developer",
    avatar: `${BASE}/linda.webp`,
  },
  {
    id: "logan-reed",
    name: "Logan Reed",
    position: "Head of Product Design",
    avatar: `${BASE}/user-2.jpg`,
  },
  {
    id: "harper-flores",
    name: "Harper Flores",
    position: "Senior UI Designer",
    avatar: `${BASE}/user-3.jpg`,
  },
  {
    id: "ethan-price",
    name: "Ethan Price",
    position: "Experience Designer",
    avatar: `${BASE}/user-4.jpg`,
  },
  {
    id: "chloe-ward",
    name: "Chloe Ward",
    position: "Brand & Visual Designer",
    avatar: `${BASE}/user-7.jpg`,
  },
  {
    id: "jackson-cole",
    name: "Jackson Cole",
    position: "Growth Marketing Lead",
    avatar: `${BASE}/rough.webp`,
  },
  {
    id: "ella-rivera",
    name: "Ella Rivera",
    position: "Content Strategist",
    avatar: `${BASE}/jessica.webp`,
  },
  {
    id: "aiden-morgan",
    name: "Aiden Morgan",
    position: "Performance Marketing Manager",
    avatar: `${BASE}/user-1.jpg`,
  },
  {
    id: "scarlett-brooks",
    name: "Scarlett Brooks",
    position: "Community & Social Lead",
    avatar: `${BASE}/jenny.webp`,
  },
];

type Member = (typeof topMembers)[number];

function matchesQuery(text: string, query: string) {
  return text.toLowerCase().includes(query.toLowerCase());
}

async function searchMembers(query: string): Promise<Member[]> {
  await new Promise((resolve) =>
    setTimeout(resolve, Math.random() * 800 + 200),
  );
  if (Math.random() < 0.02 || query === "error")
    throw new Error("Network error");
  return topMembers.filter(
    (m) => matchesQuery(m.name, query) || matchesQuery(m.position, query),
  );
}

const SPRING = { type: "spring", bounce: 0.15, duration: 0.3 } as const;

const AutocompleteWithAsync = () => {
  const id = useId();
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<Member[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!inputValue) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);
    let ignore = false;

    const timer = setTimeout(async () => {
      try {
        const data = await searchMembers(inputValue);
        if (!ignore) setResults(data);
      } catch {
        if (!ignore) {
          setError("Failed to fetch members. Please try again.");
          setResults([]);
        }
      } finally {
        if (!ignore) setIsLoading(false);
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      ignore = true;
    };
  }, [inputValue]);

  let status: ReactNode = null;
  if (isLoading) {
    status = (
      <div className="flex items-center gap-2">
        <LoaderCircleIcon className="size-4 animate-spin" />
        Searching members...
      </div>
    );
  } else if (error) {
    status = error;
  } else if (inputValue && results.length === 0) {
    status = `No members found for "${inputValue}"`;
  } else if (results.length > 0) {
    status = `${results.length} member${results.length === 1 ? "" : "s"} found`;
  }

  return (
    <div className="w-full max-w-xs">
      <Autocomplete onInputValueChange={setInputValue}>
        <div className="flex flex-col items-start gap-2">
          <Label htmlFor={id}>Async Autocomplete</Label>
          <AutocompleteInput
            id={id}
            placeholder="e.g. Liam Carter, Designer..."
            showTrigger
            showClear
          />
        </div>

        {inputValue && (
          <AutocompleteContent>
            {status && <AutocompleteStatus>{status}</AutocompleteStatus>}
            <AutocompleteList>
              {results.map((member, idx) => (
                <AutocompleteItem
                  key={member.id}
                  value={member.id}
                  label={member.name}
                  className="rounded-lg py-1.5"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...SPRING, delay: idx * 0.04 }}
                    className="flex w-full items-center gap-2.5"
                  >
                    <Avatar className="size-9 shrink-0">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">
                        {member.name}
                      </p>
                      <p className="text-muted-foreground truncate text-xs">
                        {member.position}
                      </p>
                    </div>
                  </motion.div>
                </AutocompleteItem>
              ))}
            </AutocompleteList>
          </AutocompleteContent>
        )}
      </Autocomplete>
    </div>
  );
};

export default AutocompleteWithAsync;
