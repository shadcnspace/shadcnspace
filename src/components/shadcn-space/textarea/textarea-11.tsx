"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { AtSign } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const users = [
  { handle: "maya", name: "Maya Rivera", color: "bg-teal-400/20" },
  { handle: "leo", name: "Leo Chen", color: "bg-blue-500/20" },
  { handle: "ava", name: "Ava Patel", color: "bg-orange-400/20" },
  { handle: "noah", name: "Noah Kim", color: "bg-sky-400/20" },
  { handle: "zoe", name: "Zoe Martin", color: "bg-amber-300/30" },
];

const TextareaDemo = () => {
  const [value, setValue] = useState("");
  const [query, setQuery] = useState<string | null>(null);
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLTextAreaElement>(null);

  const matches =
    query === null
      ? []
      : users.filter((user) => user.handle.startsWith(query.toLowerCase()) || user.name.toLowerCase().includes(query.toLowerCase()));
  const open = matches.length > 0;

  // Look for an @mention being typed right before the caret.
  const detect = (text: string, caret: number) => {
    const match = text.slice(0, caret).match(/(^|\s)@(\w*)$/);
    setQuery(match ? match[2] : null);
    setActive(0);
  };

  const insert = (handle: string) => {
    const textarea = ref.current;
    if (!textarea) return;
    const caret = textarea.selectionStart;
    const before = value.slice(0, caret).replace(/@(\w*)$/, `@${handle} `);
    const next = before + value.slice(caret);
    setValue(next);
    setQuery(null);
    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(before.length, before.length);
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (!open) return;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const step = event.key === "ArrowDown" ? 1 : -1;
      setActive((current) => (current + step + matches.length) % matches.length);
    } else if (event.key === "Enter" || event.key === "Tab") {
      event.preventDefault();
      insert(matches[active].handle);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setQuery(null);
    }
  };

  const startMention = () => {
    const textarea = ref.current;
    if (!textarea) return;
    const caret = textarea.selectionStart;
    const prefix = caret > 0 && !/\s/.test(value[caret - 1]) ? " @" : "@";
    const next = value.slice(0, caret) + prefix + value.slice(caret);
    setValue(next);
    setQuery("");
    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(caret + prefix.length, caret + prefix.length);
    });
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="overflow-hidden rounded-lg border border-input bg-background transition-colors focus-within:border-ring">
        <Textarea
          ref={ref}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            detect(event.target.value, event.target.selectionStart);
          }}
          onKeyDown={handleKeyDown}
          onClick={(event) => detect(value, event.currentTarget.selectionStart)}
          onBlur={() => setTimeout(() => setQuery(null), 120)}
          role="combobox"
          aria-label="Comment"
          aria-autocomplete="list"
          aria-expanded={open}
          aria-controls="mention-list"
          aria-activedescendant={open ? `mention-${matches[active].handle}` : undefined}
          placeholder="Leave a comment. Type @ to mention someone."
          className="min-h-24 resize-none rounded-none border-0 focus-visible:ring-0 dark:bg-transparent"
        />
        <div className="flex items-center justify-between border-t border-border px-2 py-1.5">
          <Button type="button" variant="ghost" size="icon-sm" aria-label="Mention someone" onClick={startMention}>
            <AtSign />
          </Button>
          <Button size="sm" disabled={!value.trim()} onClick={() => setValue("")}>
            Comment
          </Button>
        </div>
      </div>

      {open && (
        <ul
          id="mention-list"
          role="listbox"
          aria-label="People"
          className="absolute top-full left-0 z-10 mt-1 w-60 rounded-lg border border-border bg-popover p-1"
        >
          {matches.map((user, index) => (
            <li
              key={user.handle}
              id={`mention-${user.handle}`}
              role="option"
              aria-selected={index === active}
              onMouseDown={(event) => {
                event.preventDefault();
                insert(user.handle);
              }}
              onMouseEnter={() => setActive(index)}
              className={cn(
                "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm",
                index === active ? "bg-muted text-foreground" : "text-muted-foreground",
              )}
            >
              <Avatar size="sm">
                <AvatarFallback className={cn("text-foreground", user.color)}>
                  {user.name.split(" ").map((part) => part[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <span className="flex-1 truncate text-foreground">{user.name}</span>
              <span className="text-xs text-muted-foreground">@{user.handle}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TextareaDemo;
