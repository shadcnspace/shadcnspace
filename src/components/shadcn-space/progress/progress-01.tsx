"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

export default function FileUploadProgress() {
  const [progress, setProgress] = useState(0);
  const [run, setRun] = useState(0);

  useEffect(() => {
    setProgress(0);
    const id = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { clearInterval(id); return 100; }
        return Math.min(prev + Math.random() * 8 + 1, 100);
      });
    }, 180);
    return () => clearInterval(id);
  }, [run]);

  const done = progress >= 100;

  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{done ? "Complete" : "Uploading..."}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <Progress value={progress} />
      <Button
        size="sm"
        variant="outline"
        disabled={!done}
        onClick={() => setRun((r) => r + 1)}
        className="w-full gap-2 cursor-pointer"
      >
        <RefreshCw className="size-3.5" />
        Reset
      </Button>
    </div>
  );
}
