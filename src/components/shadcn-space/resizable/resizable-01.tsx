"use client";

import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  CreditCard,
  MapPin,
  Package,
  Search,
  User,
} from "lucide-react";

export type OrderStatus = "completed" | "pending" | "failed" | "refunded";

export type Order = {
  id: string;
  customer: string;
  email: string;
  product: string;
  amount: number;
  status: OrderStatus;
  date: string;
  location: string;
  payment: string;
};

const statusStyles: Record<OrderStatus, string> = {
  completed: "bg-teal-400/10 text-teal-400",
  pending: "bg-orange-400/10 text-orange-400",
  failed: "bg-red-500/10 text-red-500",
  refunded: "bg-sky-400/10 text-sky-400",
};

const defaultOrders: Order[] = [
  {
    id: "#1024",
    customer: "Sarah Johnson",
    email: "sarah@example.com",
    product: "Pro Plan (Annual)",
    amount: 299,
    status: "completed",
    date: "Jul 1, 2026",
    location: "New York, US",
    payment: "Visa ···· 4242",
  },
  {
    id: "#1023",
    customer: "Marcus Lee",
    email: "marcus@example.com",
    product: "Starter Plan",
    amount: 49,
    status: "pending",
    date: "Jun 30, 2026",
    location: "London, UK",
    payment: "Mastercard ···· 5500",
  },
  {
    id: "#1022",
    customer: "Anna Torres",
    email: "anna@example.com",
    product: "Enterprise Plan",
    amount: 999,
    status: "completed",
    date: "Jun 28, 2026",
    location: "Berlin, DE",
    payment: "Wire Transfer",
  },
  {
    id: "#1021",
    customer: "Dev Team",
    email: "dev@acme.com",
    product: "Pro Plan (Monthly)",
    amount: 29,
    status: "failed",
    date: "Jun 27, 2026",
    location: "Austin, US",
    payment: "Visa ···· 1111",
  },
  {
    id: "#1020",
    customer: "Lisa Chen",
    email: "lisa@example.com",
    product: "Add-on: Analytics",
    amount: 19,
    status: "refunded",
    date: "Jun 25, 2026",
    location: "Tokyo, JP",
    payment: "PayPal",
  },
  {
    id: "#1019",
    customer: "James Wilson",
    email: "james@example.com",
    product: "Pro Plan (Annual)",
    amount: 299,
    status: "completed",
    date: "Jun 22, 2026",
    location: "Sydney, AU",
    payment: "Visa ···· 9876",
  },
  {
    id: "#1018",
    customer: "Priya Mehta",
    email: "priya@example.com",
    product: "Starter Plan",
    amount: 49,
    status: "completed",
    date: "Jun 20, 2026",
    location: "Mumbai, IN",
    payment: "UPI",
  },
  {
    id: "#1017",
    customer: "David Smith",
    email: "david@example.com",
    product: "Enterprise Plan",
    amount: 999,
    status: "completed",
    date: "Jun 18, 2026",
    location: "Toronto, CA",
    payment: "Amex ···· 3005",
  },
  {
    id: "#1016",
    customer: "Elena Rostova",
    email: "elena@example.com",
    product: "Pro Plan (Monthly)",
    amount: 29,
    status: "pending",
    date: "Jun 15, 2026",
    location: "Paris, FR",
    payment: "Visa ···· 8821",
  },
  {
    id: "#1015",
    customer: "Alex Wong",
    email: "alex@example.com",
    product: "Starter Plan",
    amount: 49,
    status: "completed",
    date: "Jun 12, 2026",
    location: "Singapore, SG",
    payment: "Apple Pay",
  },
  {
    id: "#1014",
    customer: "Sofia Rodriguez",
    email: "sofia@example.com",
    product: "Pro Plan (Annual)",
    amount: 299,
    status: "failed",
    date: "Jun 10, 2026",
    location: "Madrid, ES",
    payment: "Mastercard ···· 4321",
  },
  {
    id: "#1013",
    customer: "Liam O'Connor",
    email: "liam@example.com",
    product: "Add-on: Premium Support",
    amount: 99,
    status: "completed",
    date: "Jun 08, 2026",
    location: "Dublin, IE",
    payment: "Visa ···· 7744",
  },
];

type Props = { orders?: Order[]; title?: string };

/* ── Shared detail panel ─────────────────────────────── */

function OrderDetail({ order, onBack }: { order: Order; onBack?: () => void }) {
  const fields = [
    { icon: User, label: "Customer", lines: [order.customer, order.email] },
    {
      icon: Package,
      label: "Product",
      lines: [order.product, `$${order.amount.toFixed(2)}`],
    },
    { icon: CreditCard, label: "Payment", lines: [order.payment] },
    { icon: MapPin, label: "Location", lines: [order.location, order.date] },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="h-15 flex items-center gap-3 px-5 border-b border-border shrink-0">
        {onBack && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-muted-foreground hover:text-foreground cursor-pointer"
          >
            <ArrowLeft className="size-4" />
          </Button>
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">
            Order {order.id}
          </p>
          <p className="text-xs text-muted-foreground truncate">{order.date}</p>
        </div>
        <Badge
          className={cn(
            "text-xs capitalize shrink-0 border-0",
            statusStyles[order.status],
          )}
        >
          {order.status}
        </Badge>
      </div>

      {/* Fields */}
      <ScrollArea className="flex-1 min-h-0">
        <div className="flex flex-col gap-px p-5">
          {fields.map(({ icon: Icon, label, lines }) => (
            <div
              key={label}
              className="flex items-start gap-3 rounded-lg p-3 hover:bg-muted/50 transition-colors"
            >
              <div className="mt-0.5 size-8 rounded-md bg-muted flex items-center justify-center shrink-0">
                <Icon className="size-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
                {lines.map((l, i) => (
                  <p
                    key={i}
                    className={cn(
                      "text-sm",
                      i === 0
                        ? "font-medium text-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    {l}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Actions */}
      <div className="p-5 border-t border-border flex flex-wrap gap-2 shrink-0">
        <Button variant="outline" className="flex-1 min-w-32 cursor-pointer">
          View Receipt
        </Button>
        {order.status === "completed" && (
          <Button
            variant="destructive"
            className="flex-1 min-w-32 cursor-pointer"
          >
            Refund
          </Button>
        )}
      </div>
    </div>
  );
}

/* ── Main component ──────────────────────────────────── */

function OrderTableResizable({
  orders = defaultOrders,
  title = "Orders",
}: Props) {
  const [selected, setSelected] = useState(orders[0]);
  const [query, setQuery] = useState("");
  const [mobileView, setMobileView] = useState<"table" | "detail">("table");

  const filtered = orders.filter((o) =>
    [o.customer, o.id, o.product, o.status].some((v) =>
      v.toLowerCase().includes(query.toLowerCase()),
    ),
  );

  const selectRow = (order: Order) => {
    setSelected(order);
    setMobileView("detail");
  };

  /* Table rows shared between mobile + desktop */
  const rows = filtered.map((order) => (
    <TableRow
      key={order.id}
      onClick={() => selectRow(order)}
      className={cn("cursor-pointer", selected.id === order.id && "bg-accent")}
    >
      <TableCell className="font-mono text-xs text-muted-foreground">
        {order.id}
      </TableCell>
      <TableCell>
        <p className="text-sm font-medium text-foreground">{order.customer}</p>
        <p className="text-xs text-muted-foreground">{order.email}</p>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground hidden sm:table-cell">
        {order.product}
      </TableCell>
      <TableCell className="text-sm font-medium text-foreground">
        ${order.amount}
      </TableCell>
      <TableCell>
        <Badge
          className={cn(
            "text-xs capitalize border-0",
            statusStyles[order.status],
          )}
        >
          {order.status}
        </Badge>
      </TableCell>
      <TableCell className="text-xs text-muted-foreground hidden lg:table-cell">
        {order.date}
      </TableCell>
    </TableRow>
  ));

  return (
    <div className="h-150 w-full rounded-xl border border-border overflow-hidden bg-background">
      {/* ── Mobile (< md) ── */}
      <div className="flex flex-col h-full md:hidden">
        {mobileView === "table" ? (
          <>
            <div className="h-15 flex items-center justify-between gap-4 px-4 border-b border-border shrink-0">
              <p className="text-sm font-semibold text-foreground shrink-0">
                {title}
              </p>
              <InputGroup className="w-full">
                <InputGroupAddon>
                  <Search className="size-4" />
                </InputGroupAddon>
                <InputGroupInput
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={`Search ${title.toLowerCase()}...`}
                />
              </InputGroup>
            </div>
            <ScrollArea className="flex-1 min-h-0 **:data-[slot=table-container]:overflow-x-visible">
              <Table className="[&_th]:px-4 [&_td]:px-4 [&_td]:py-3.5 min-w-150">
                <TableHeader className="sticky top-0 z-10 bg-background">
                  <TableRow className="hover:bg-background dark:hover:bg-background">
                    <TableHead className="text-xs">ID</TableHead>
                    <TableHead className="text-xs">Customer</TableHead>
                    <TableHead className="text-xs">Amount</TableHead>
                    <TableHead className="text-xs">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>{rows}</TableBody>
              </Table>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </>
        ) : (
          <OrderDetail order={selected} onBack={() => setMobileView("table")} />
        )}
      </div>

      {/* ── Desktop (md+) ── */}
      <ResizablePanelGroup
        orientation="horizontal"
        className="hidden md:flex h-full"
      >
        <ResizablePanel defaultSize={"65%"}>
          <div className="flex flex-col h-full">
            <div className="h-15 flex items-center justify-between gap-3 px-5 border-b border-border shrink-0">
              <p className="text-sm font-semibold text-foreground shrink-0">
                {title}
              </p>
              <InputGroup className="flex-1 max-w-xs">
                <InputGroupAddon>
                  <Search className="size-4" />
                </InputGroupAddon>
                <InputGroupInput
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search..."
                />
              </InputGroup>
            </div>
            <ScrollArea className="flex-1 min-h-0 **:data-[slot=table-container]:overflow-x-visible">
              <Table className="[&_th]:px-4 [&_td]:px-4 [&_td]:py-3.5 min-w-175">
                <TableHeader className="sticky top-0 z-10 bg-background [&_th]:shadow-[inset_0_-1px_0_var(--border)]">
                  <TableRow className="hover:bg-background dark:hover:bg-background">
                    <TableHead className="text-xs w-16">ID</TableHead>
                    <TableHead className="text-xs">Customer</TableHead>
                    <TableHead className="text-xs hidden sm:table-cell">
                      Product
                    </TableHead>
                    <TableHead className="text-xs">Amount</TableHead>
                    <TableHead className="text-xs">Status</TableHead>
                    <TableHead className="text-xs hidden lg:table-cell">
                      Date
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>{rows}</TableBody>
              </Table>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={"35%"} maxSize={"50%"}>
          <OrderDetail order={selected} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default function MasterDetailDemo() {
  return <OrderTableResizable />;
}
