"use client";

import { useState, type FormEvent } from "react";
import { ArrowUp, Paperclip, Sparkles, Square } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import { Textarea } from "@/components/ui/textarea";

const suggestions = ["Summarize this thread", "Draft a reply", "Find action items"];

const TextareaDemo = () => {
  const [value, setValue] = useState("");
  const [sent, setSent] = useState<string[]>([]);
  const [thinking, setThinking] = useState(false);

  const send = (event?: FormEvent) => {
    event?.preventDefault();
    const prompt = value.trim();
    if (!prompt || thinking) return;
    setSent((current) => [...current, prompt]);
    setValue("");
    setThinking(true);
    setTimeout(() => setThinking(false), 1500);
  };

  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      {sent.length > 0 && (
        <ul className="flex flex-col items-end gap-2" aria-label="Sent prompts">
          {sent.slice(-2).map((prompt, index) => (
            <li key={index} className="max-w-xs rounded-xl rounded-br-sm bg-muted px-3 py-2 text-sm text-foreground">
              {prompt}
            </li>
          ))}
        </ul>
      )}

      <form
        onSubmit={send}
        className="flex flex-col gap-2 rounded-2xl border border-border bg-background p-2 transition-colors focus-within:border-ring"
      >
        <Textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={(event) => {
            // Enter sends, Shift + Enter adds a new line. Skip while an IME is composing.
            if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) send(event);
          }}
          aria-label="Ask the assistant"
          placeholder="Ask anything..."
          rows={2}
          className="max-h-48 min-h-12 resize-none border-0 px-2 focus-visible:ring-0 dark:bg-transparent"
        />
        <div className="flex items-center gap-1">
          <Button type="button" variant="ghost" size="icon-sm" aria-label="Attach file">
            <Paperclip />
          </Button>
          <Button type="button" variant="ghost" size="sm" className="text-muted-foreground">
            <Sparkles className="text-blue-500" />
            Auto model
          </Button>
          <span className="ml-auto hidden items-center gap-1 text-xs text-muted-foreground sm:flex">
            <Kbd>Shift</Kbd>+<Kbd>Enter</Kbd> new line
          </span>
          <Button
            type={thinking ? "button" : "submit"}
            size="icon-sm"
            aria-label={thinking ? "Stop generating" : "Send"}
            disabled={!thinking && !value.trim()}
            onClick={thinking ? () => setThinking(false) : undefined}
            className="ml-2 rounded-full"
          >
            {thinking ? <Square className="fill-current" /> : <ArrowUp />}
          </Button>
        </div>
      </form>

      {sent.length === 0 && (
        <div className="flex flex-wrap gap-2">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => setValue(suggestion)}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TextareaDemo;
