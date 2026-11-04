"use client";

import { useState } from "react";
import { Archive, RotateCcw } from "lucide-react";

import { toast } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";

const initialThreads = [
  { id: 1, from: "Maya Rivera", subject: "Pricing page feedback" },
  { id: 2, from: "Leo Chen", subject: "Sprint 42 planning notes" },
  { id: 3, from: "Ava Patel", subject: "Q4 roadmap draft" },
  { id: 4, from: "Noah Kim", subject: "Release 2.4.0 checklist" },
];

type Thread = (typeof initialThreads)[number];

const SonnerDemo = () => {
  const [threads, setThreads] = useState(initialThreads);

  const archive = (thread: Thread) => {
    const index = threads.findIndex((item) => item.id === thread.id);
    setThreads((current) => current.filter((item) => item.id !== thread.id));

    toast.add({
      title: "Conversation archived",
      description: thread.subject,
      icon: <Archive aria-hidden="true" />,
      duration: 6000,
      position: "top-right",
      action: {
        label: (
          <>
            <RotateCcw className="size-3.5" aria-hidden="true" />
            Undo
          </>
        ),
        dismiss: true,
        // Put the thread back where it was.
        onClick: () =>
          setThreads((current) => {
            if (current.some((item) => item.id === thread.id)) return current;
            const next = [...current];
            next.splice(Math.min(index, next.length), 0, thread);
            return next;
          }),
      },
    });
  };

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-border bg-background">
      {threads.length === 0 ? (
        <div className="flex flex-col items-center gap-2 p-6 text-center">
          <p className="text-sm text-muted-foreground">All conversations archived.</p>
          <Button variant="outline" size="sm" onClick={() => setThreads(initialThreads)}>
            Restore all
          </Button>
        </div>
      ) : (
        <ul className="divide-y divide-border">
          {threads.map((thread) => (
            <li key={thread.id} className="flex items-center gap-3 px-4 py-3">
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-foreground">{thread.from}</p>
                <p className="truncate text-xs text-muted-foreground">{thread.subject}</p>
              </div>
              <Button variant="ghost" size="icon-sm" aria-label={`Archive ${thread.subject}`} onClick={() => archive(thread)}>
                <Archive />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SonnerDemo;
