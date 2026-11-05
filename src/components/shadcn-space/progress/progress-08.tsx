"use client";

import { useEffect, useState } from "react";
import { Check, FileImage, FileText, FileVideo, RotateCcw, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type Upload = {
  id: number;
  name: string;
  sizeMb: number;
  icon: typeof FileText;
  progress: number;
  speed: number;
  status: "uploading" | "done" | "cancelled";
};

const initialUploads: Upload[] = [
  { id: 1, name: "product-demo.mp4", sizeMb: 48.2, icon: FileVideo, progress: 12, speed: 3, status: "uploading" },
  { id: 2, name: "hero-banner.png", sizeMb: 3.4, icon: FileImage, progress: 64, speed: 9, status: "uploading" },
  { id: 3, name: "pitch-deck.pdf", sizeMb: 8.9, icon: FileText, progress: 100, speed: 0, status: "done" },
];

const ProgressDemo = () => {
  const [uploads, setUploads] = useState(initialUploads);
  const active = uploads.some((upload) => upload.status === "uploading");

  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      setUploads((current) =>
        current.map((upload) => {
          if (upload.status !== "uploading") return upload;
          const progress = Math.min(100, upload.progress + upload.speed);
          return { ...upload, progress, status: progress >= 100 ? "done" : "uploading" };
        }),
      );
    }, 400);
    return () => clearInterval(id);
  }, [active]);

  const setStatus = (id: number, status: Upload["status"], reset = false) =>
    setUploads((current) =>
      current.map((upload) => (upload.id === id ? { ...upload, status, progress: reset ? 0 : upload.progress } : upload)),
    );

  const done = uploads.filter((upload) => upload.status === "done").length;

  return (
    <div className="flex w-full max-w-md flex-col gap-3 rounded-lg border border-border bg-background p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-foreground">Uploads</p>
        <p className="text-xs text-muted-foreground tabular-nums" aria-live="polite">
          {done} of {uploads.length} complete
        </p>
      </div>
      <ul className="flex flex-col gap-2">
        {uploads.map((upload) => (
          <li key={upload.id} className="flex items-center gap-3 rounded-md border border-border p-3">
            <span
              className={cn(
                "flex size-9 shrink-0 items-center justify-center rounded-md",
                upload.status === "done" ? "bg-teal-400/15 text-teal-400" : "bg-muted text-muted-foreground",
              )}
            >
              {upload.status === "done" ? <Check className="size-4" /> : <upload.icon className="size-4" />}
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <div className="flex items-center justify-between gap-2">
                <p className={cn("truncate text-sm", upload.status === "cancelled" ? "text-muted-foreground line-through" : "text-foreground")}>
                  {upload.name}
                </p>
                <p className="shrink-0 text-xs text-muted-foreground tabular-nums">
                  {upload.status === "cancelled"
                    ? "Cancelled"
                    : upload.status === "done"
                      ? `${upload.sizeMb} MB`
                      : `${((upload.sizeMb * upload.progress) / 100).toFixed(1)} / ${upload.sizeMb} MB`}
                </p>
              </div>
              {upload.status === "uploading" && <Progress value={upload.progress} aria-label={`Uploading ${upload.name}`} />}
            </div>
            {upload.status === "uploading" && (
              <Button variant="ghost" size="icon-sm" aria-label={`Cancel ${upload.name}`} onClick={() => setStatus(upload.id, "cancelled")}>
                <X />
              </Button>
            )}
            {upload.status === "cancelled" && (
              <Button variant="ghost" size="icon-sm" aria-label={`Retry ${upload.name}`} onClick={() => setStatus(upload.id, "uploading", true)}>
                <RotateCcw />
              </Button>
            )}
          </li>
        ))}
      </ul>
      {!active && (
        <Button variant="outline" size="sm" className="self-end" onClick={() => setUploads(initialUploads)}>
          Restart demo
        </Button>
      )}
    </div>
  );
};

export default ProgressDemo;
