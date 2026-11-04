"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const statuses = ["Paid", "Pending", "Refunded"] as const;
const statusColor: Record<(typeof statuses)[number], string> = {
  Paid: "bg-teal-400",
  Pending: "bg-amber-300",
  Refunded: "bg-orange-400",
};

const invoices = Array.from({ length: 57 }, (_, index) => ({
  id: `INV-${String(1001 + index)}`,
  amount: ((index * 73) % 900) + 49,
  status: statuses[index % 7 === 0 ? 2 : index % 3 === 0 ? 1 : 0],
}));

const pageSizes = [
  { label: "5", value: 5 },
  { label: "10", value: 10 },
  { label: "20", value: 20 },
];

const PaginationDemo = () => {
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(invoices.length / pageSize);
  const start = (page - 1) * pageSize;
  const rows = invoices.slice(start, start + pageSize);

  return (
    <div className="w-full max-w-lg overflow-hidden rounded-lg border border-border bg-background">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border text-left text-muted-foreground">
            <th scope="col" className="px-4 py-2.5 font-medium">Invoice</th>
            <th scope="col" className="px-4 py-2.5 font-medium">Status</th>
            <th scope="col" className="px-4 py-2.5 text-right font-medium">Amount</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((invoice) => (
            <tr key={invoice.id}>
              <td className="px-4 py-2.5 font-mono text-xs text-foreground">{invoice.id}</td>
              <td className="px-4 py-2.5">
                <span className="flex items-center gap-2 text-foreground">
                  <span className={cn("size-1.5 rounded-full", statusColor[invoice.status])} aria-hidden="true" />
                  {invoice.status}
                </span>
              </td>
              <td className="px-4 py-2.5 text-right text-foreground tabular-nums">${invoice.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex flex-col gap-3 border-t border-border px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span id="rows-per-page">Rows per page</span>
          <Select
            items={pageSizes}
            value={pageSize}
            onValueChange={(value) => {
              if (value === null) return;
              // Keep the first visible row on screen when the page size changes.
              setPage(Math.floor(start / value) + 1);
              setPageSize(value);
            }}
          >
            <SelectTrigger size="sm" aria-labelledby="rows-per-page" className="w-16">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {pageSizes.map((size) => (
                <SelectItem key={size.value} value={size.value}>
                  {size.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground tabular-nums" aria-live="polite">
            {start + 1}-{Math.min(start + pageSize, invoices.length)} of {invoices.length}
          </p>
          <nav aria-label="Table pagination" className="flex items-center gap-1">
            <Button variant="outline" size="icon-sm" aria-label="First page" disabled={page === 1} onClick={() => setPage(1)}>
              <ChevronsLeft />
            </Button>
            <Button variant="outline" size="icon-sm" aria-label="Previous page" disabled={page === 1} onClick={() => setPage(page - 1)}>
              <ChevronLeft />
            </Button>
            <Button variant="outline" size="icon-sm" aria-label="Next page" disabled={page === pageCount} onClick={() => setPage(page + 1)}>
              <ChevronRight />
            </Button>
            <Button variant="outline" size="icon-sm" aria-label="Last page" disabled={page === pageCount} onClick={() => setPage(pageCount)}>
              <ChevronsRight />
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PaginationDemo;
