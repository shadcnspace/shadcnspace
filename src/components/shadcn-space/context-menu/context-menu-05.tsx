"use client";

import { useState } from "react";
import { CheckCircle2, Copy, ExternalLink, Mail, RotateCcw, Trash2 } from "lucide-react";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuGroup,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { cn } from "@/lib/utils";

type Status = "Paid" | "Pending" | "Overdue";

const statusDot: Record<Status, string> = {
  Paid: "bg-teal-400",
  Pending: "bg-amber-300",
  Overdue: "bg-orange-400",
};

const initialRows = [
  { id: "INV-2041", customer: "Acme Inc.", amount: 1250, status: "Paid" as Status },
  { id: "INV-2042", customer: "Globex", amount: 830, status: "Pending" as Status },
  { id: "INV-2043", customer: "Initech", amount: 2400, status: "Overdue" as Status },
  { id: "INV-2044", customer: "Umbrella Co.", amount: 560, status: "Pending" as Status },
];

const ContextMenuDemo = () => {
  const [rows, setRows] = useState(initialRows);
  const [message, setMessage] = useState("Right click any row");

  const setStatus = (id: string, status: Status) =>
    setRows((current) => current.map((row) => (row.id === id ? { ...row, status } : row)));

  return (
    <div className="flex w-full max-w-lg flex-col gap-2">
      <div className="overflow-hidden rounded-lg border border-border bg-background">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-muted-foreground">
              <th scope="col" className="px-4 py-2.5 font-medium">Invoice</th>
              <th scope="col" className="px-4 py-2.5 font-medium">Customer</th>
              <th scope="col" className="px-4 py-2.5 font-medium">Status</th>
              <th scope="col" className="px-4 py-2.5 text-right font-medium">Amount</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <ContextMenu key={row.id}>
                <ContextMenuTrigger
                  render={<tr />}
                  className="border-b border-border transition-colors last:border-0 hover:bg-muted/40 data-popup-open:bg-muted/60"
                >
                  <td className="px-4 py-2.5 font-mono text-xs text-foreground">{row.id}</td>
                  <td className="px-4 py-2.5 text-foreground">{row.customer}</td>
                  <td className="px-4 py-2.5">
                    <span className="flex items-center gap-2 text-foreground">
                      <span className={cn("size-1.5 rounded-full", statusDot[row.status])} aria-hidden="true" />
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-right text-foreground tabular-nums">${row.amount.toLocaleString("en-US")}</td>
                </ContextMenuTrigger>
                <ContextMenuContent className="w-52">
                  <ContextMenuGroup>
                    <ContextMenuLabel>{row.id}</ContextMenuLabel>
                    <ContextMenuItem onClick={() => setMessage(`Opened ${row.id}`)}>
                      <ExternalLink />
                      Open invoice
                    </ContextMenuItem>
                    <ContextMenuItem
                      onClick={() => {
                        navigator.clipboard?.writeText(row.id).catch(() => undefined);
                        setMessage(`Copied ${row.id}`);
                      }}
                    >
                      <Copy />
                      Copy invoice ID
                      <ContextMenuShortcut>Ctrl C</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem disabled={row.status === "Paid"} onClick={() => setMessage(`Reminder sent to ${row.customer}`)}>
                      <Mail />
                      Send reminder
                    </ContextMenuItem>
                  </ContextMenuGroup>
                  <ContextMenuSeparator />
                  {row.status === "Paid" ? (
                    <ContextMenuItem onClick={() => setStatus(row.id, "Pending")}>
                      <RotateCcw />
                      Mark as unpaid
                    </ContextMenuItem>
                  ) : (
                    <ContextMenuItem onClick={() => setStatus(row.id, "Paid")}>
                      <CheckCircle2 />
                      Mark as paid
                    </ContextMenuItem>
                  )}
                  <ContextMenuItem
                    variant="destructive"
                    onClick={() => {
                      setRows((current) => current.filter((item) => item.id !== row.id));
                      setMessage(`Deleted ${row.id}`);
                    }}
                  >
                    <Trash2 />
                    Delete
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <p aria-live="polite">{message}</p>
        {rows.length < initialRows.length && (
          <button
            type="button"
            onClick={() => setRows(initialRows)}
            className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Reset table
          </button>
        )}
      </div>
    </div>
  );
};

export default ContextMenuDemo;
