"use client";

import { useMemo, useState } from "react";
import { AlertCircle, Braces, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const initial = `{"name":"acme-web","version":"2.4.0","private":true,"scripts":{"dev":"next dev","build":"next build"}}`;

// Turn the parser's character position into a line and column for the error message.
function lineAndColumn(text: string, message: string) {
  const position = Number(message.match(/position (\d+)/)?.[1]);
  if (!Number.isFinite(position)) return null;
  const before = text.slice(0, position).split("\n");
  return { line: before.length, column: before[before.length - 1].length + 1 };
}

const TextareaDemo = () => {
  const [value, setValue] = useState(initial);

  const result = useMemo(() => {
    if (!value.trim()) return { ok: false as const, error: "Enter some JSON" };
    try {
      JSON.parse(value);
      return { ok: true as const };
    } catch (error) {
      const message = error instanceof Error ? error.message : "Invalid JSON";
      const where = lineAndColumn(value, message);
      return { ok: false as const, error: where ? `Invalid JSON at line ${where.line}, column ${where.column}` : "Invalid JSON" };
    }
  }, [value]);

  const format = () => {
    if (result.ok) setValue(JSON.stringify(JSON.parse(value), null, 2));
  };

  const minify = () => {
    if (result.ok) setValue(JSON.stringify(JSON.parse(value)));
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="json-input">Request body</Label>
        <div className="flex gap-1">
          <Button variant="ghost" size="sm" onClick={minify} disabled={!result.ok}>
            Minify
          </Button>
          <Button variant="outline" size="sm" onClick={format} disabled={!result.ok}>
            <Braces />
            Format
          </Button>
        </div>
      </div>
      <Textarea
        id="json-input"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        spellCheck={false}
        aria-invalid={!result.ok || undefined}
        aria-describedby="json-status"
        className="min-h-44 font-mono text-xs md:text-xs"
      />
      <p
        id="json-status"
        aria-live="polite"
        className={`flex items-center gap-1.5 text-xs ${result.ok ? "text-muted-foreground" : "text-destructive"}`}
      >
        {result.ok ? (
          <>
            <Check className="size-3.5 text-teal-400" aria-hidden="true" />
            Valid JSON
          </>
        ) : (
          <>
            <AlertCircle className="size-3.5" aria-hidden="true" />
            {result.error}
          </>
        )}
      </p>
    </div>
  );
};

export default TextareaDemo;
