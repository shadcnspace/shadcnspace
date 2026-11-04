"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  ChevronUp,
  Clock,
  CornerDownLeft,
  FileText,
  LucideIcon,
  Package,
  Search,
  SearchX,
  TrendingUp,
  User,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type ItemType = "product" | "page" | "people";
type Filter = "all" | ItemType;

type SearchItem = {
  id: number;
  type: ItemType;
  title: string;
  subtitle: string;
};

type Row = {
  id: string;
  label: string;
  kind: "result" | "recent" | "trending";
};

const ITEMS: SearchItem[] = [
  { id: 1, type: "product", title: "Wireless Headphones", subtitle: "Audio · $129" },
  { id: 2, type: "product", title: "Mechanical Keyboard", subtitle: "Accessories · $89" },
  { id: 3, type: "product", title: "Smart Watch Series 9", subtitle: "Wearables · $399" },
  { id: 4, type: "product", title: "Running Shoes", subtitle: "Footwear · $74" },
  { id: 5, type: "page", title: "Pricing", subtitle: "Plans and billing" },
  { id: 6, type: "page", title: "Documentation", subtitle: "Guides and API reference" },
  { id: 7, type: "page", title: "Changelog", subtitle: "Latest product updates" },
  { id: 8, type: "people", title: "Jessica Miller", subtitle: "Product Designer" },
  { id: 9, type: "people", title: "Albert Chen", subtitle: "Frontend Engineer" },
];

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "product", label: "Products" },
  { value: "page", label: "Pages" },
  { value: "people", label: "People" },
];

const TYPE_ICON: Record<ItemType, LucideIcon> = {
  product: Package,
  page: FileText,
  people: User,
};

const TYPE_LABEL: Record<ItemType, string> = {
  product: "Product",
  page: "Page",
  people: "People",
};

const TRENDING = [
  "Wireless headphones",
  "Smart watch",
  "Pricing",
  "Documentation",
];

const INITIAL_RECENT = ["Mechanical keyboard", "Changelog", "Jessica Miller"];

const SPRING = { type: "spring", bounce: 0.2, duration: 0.5 } as const;

type Props = {
  defaultOpen?: boolean;
};

const DropdownMenu08 = ({ defaultOpen = false }: Props) => {
  const [open, setOpen] = useState(defaultOpen);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState(0);
  const [recent, setRecent] = useState<string[]>(INITIAL_RECENT);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const term = query.trim();
  const showResults = term !== "" || filter !== "all";

  const results = ITEMS.filter(
    (item) =>
      (filter === "all" || item.type === filter) &&
      `${item.title} ${item.subtitle}`
        .toLowerCase()
        .includes(term.toLowerCase()),
  );

  const rows: Row[] = showResults
    ? results.map((item) => ({
        id: `result-${item.id}`,
        label: item.title,
        kind: "result",
      }))
    : [
        ...recent.map((label) => ({
          id: `recent-${label}`,
          label,
          kind: "recent" as const,
        })),
        ...TRENDING.map((label) => ({
          id: `trending-${label}`,
          label,
          kind: "trending" as const,
        })),
      ];

  const close = () => {
    setOpen(false);
    setQuery("");
    setFilter("all");
    setActive(0);
  };

  const selectRow = (row: Row) => {
    if (row.kind === "result") {
      setRecent((prev) =>
        [row.label, ...prev.filter((label) => label !== row.label)].slice(0, 4),
      );
      close();
      return;
    }
    setQuery(row.label);
    setActive(0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((prev) => Math.min(prev + 1, rows.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((prev) => Math.max(prev - 1, 0));
    }
    if (e.key === "Enter" && rows[active]) {
      selectRow(rows[active]);
    }
  };

  const rowClass = (index: number) =>
    cn(
      "h-auto min-w-0 flex-1 justify-start gap-3 rounded-lg px-3 py-2 text-left cursor-pointer",
      active === index && "bg-accent",
    );

  return (
    <div className="flex w-full items-start justify-center px-4">
      <div className="flex w-full max-w-sm justify-center">
        <div
          style={{ borderRadius: open ? 24 : 9999 }}
          className={cn(
            "relative overflow-hidden border border-border w-full",

          )}
        >
          {!open ? (
              <div key="trigger">
                <Button
                  variant="ghost"
                  aria-expanded={open}
                  onClick={() => setOpen(true)}
                  className="h-auto w-full justify-start gap-3 rounded-full px-4 py-2.5 font-normal text-muted-foreground hover:bg-transparent hover:text-muted-foreground dark:hover:bg-transparent cursor-pointer"
                >
                  <Search className="size-4" />
                  <span className="text-sm">Search...</span>
                </Button>
              </div>
            ) : (
              <div key="content">
                <div className="flex items-center gap-2 p-3">
                  <InputGroup className="h-10 rounded-full">
                    <InputGroupAddon>
                      <Search />
                    </InputGroupAddon>
                    <InputGroupInput
                      autoFocus
                      value={query}
                      onChange={(e) => {
                        setQuery(e.target.value);
                        setActive(0);
                      }}
                      onKeyDown={handleKeyDown}
                      placeholder="Search products, pages, people..."
                    />
                    <AnimatePresence>
                      {query && (
                        <InputGroupAddon align="inline-end">
                          <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                          >
                            <InputGroupButton
                              size="icon-xs"
                              className="cursor-pointer"
                             
                              onClick={() => {
                                setQuery("");
                                setActive(0);
                              }}
                            >
                              <X />
                              <span className="sr-only">Clear search</span>
                            </InputGroupButton>
                          </motion.div>
                        </InputGroupAddon>
                      )}
                    </AnimatePresence>
                  </InputGroup>
                  <motion.div
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...SPRING, delay: 0.05 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="cursor-pointer"
                   
                      onClick={close}
                    >
                      <ChevronUp className="size-4" />
                      <span className="sr-only">Close search</span>
                    </Button>
                  </motion.div>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 px-3 pb-3">
                  {FILTERS.map((item, index) => (
                    <motion.div
                      key={item.value}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ...SPRING, delay: 0.05 + index * 0.04 }}
                    >
                      <Button
                        variant={filter === item.value ? "default" : "ghost"}
                        size="sm"
                        onClick={() => {
                          setFilter(item.value);
                          setActive(0);
                        }}
                        className="rounded-full cursor-pointer"
                      >
                        {item.label}
                      </Button>
                    </motion.div>
                  ))}
                </div>

                <Separator />

                <ScrollArea className="**:data-[slot=scroll-area-viewport]:max-h-72">
                  <div className="p-2">
                    {showResults ? (
                      <AnimatePresence initial={false}>
                        {results.length > 0 ? (
                          results.map((item, index) => {
                            const Icon = TYPE_ICON[item.type];
                            return (
                              <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: -24 }}
                                transition={{ ...SPRING, delay: index * 0.03 }}
                              >
                                <Button
                                  variant="ghost"
                                  onMouseEnter={() => setActive(index)}
                                  onClick={() => selectRow(rows[index])}
                                  className={cn(rowClass(index), "w-full")}
                                >
                                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border">
                                    <Icon className="size-4" />
                                  </span>
                                  <span className="flex min-w-0 flex-1 flex-col leading-tight">
                                    <span className="truncate text-sm font-medium">
                                      {item.title}
                                    </span>
                                    <span className="truncate text-xs font-normal text-muted-foreground">
                                      {item.subtitle}
                                    </span>
                                  </span>
                                  <Badge variant="outline" className="shrink-0">
                                    {TYPE_LABEL[item.type]}
                                  </Badge>
                                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground" />
                                </Button>
                              </motion.div>
                            );
                          })
                        ) : (
                          <motion.div
                            key="empty"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center gap-2 px-6 py-10 text-center"
                          >
                            <span className="flex size-12 items-center justify-center rounded-full bg-muted">
                              <SearchX className="size-5 text-muted-foreground" />
                            </span>
                            <p className="text-sm font-medium text-popover-foreground">
                              No results found
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Try a different keyword or category.
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    ) : (
                      <div className="flex flex-col gap-3">
                        {recent.length > 0 && (
                          <div className="flex flex-col">
                            <div className="flex items-center justify-between px-3 py-1">
                              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                                Recent
                              </span>
                              <Button
                                variant="ghost"
                                size="xs"
                                className="cursor-pointer"
                                onClick={() => setRecent([])}
                              >
                                Clear all
                              </Button>
                            </div>
                            <AnimatePresence initial={false}>
                              {recent.map((label, index) => (
                                <motion.div
                                  key={label}
                                  layout
                                  initial={{ opacity: 0, y: 8 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, x: -24 }}
                                  transition={{
                                    ...SPRING,
                                    delay: index * 0.03,
                                  }}
                                  className="flex items-center gap-1"
                                >
                                  <Button
                                    variant="ghost"
                                    onMouseEnter={() => setActive(index)}
                                    onClick={() => selectRow(rows[index])}
                                    className={rowClass(index)}
                                  >
                                    <Clock className="size-4 text-muted-foreground" />
                                    <span className="truncate text-sm">
                                      {label}
                                    </span>
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon-sm"
                                    className="cursor-pointer"
                                    onClick={() =>
                                      setRecent((prev) =>
                                        prev.filter((item) => item !== label),
                                      )
                                    }
                                  >
                                    <X className="size-4 text-muted-foreground" />
                                    <span className="sr-only">
                                      Remove {label}
                                    </span>
                                  </Button>
                                </motion.div>
                              ))}
                            </AnimatePresence>
                          </div>
                        )}

                        <div className="flex flex-col">
                          <div className="px-3 py-1">
                            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                              Trending
                            </span>
                          </div>
                          {TRENDING.map((label, index) => {
                            const rowIndex = recent.length + index;
                            return (
                              <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  ...SPRING,
                                  delay: 0.1 + index * 0.03,
                                }}
                              >
                                <Button
                                  variant="ghost"
                                  onMouseEnter={() => setActive(rowIndex)}
                                  onClick={() => selectRow(rows[rowIndex])}
                                  className={cn(rowClass(rowIndex), "w-full")}
                                >
                                  <TrendingUp className="size-4 text-teal-400" />
                                  <span className="truncate text-sm">
                                    {label}
                                  </span>
                                </Button>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>

                <Separator />

                <div className="flex items-center justify-between gap-2 px-4 py-2.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Kbd>
                        <ArrowUp />
                      </Kbd>
                      <Kbd>
                        <ArrowDown />
                      </Kbd>
                      Navigate
                    </span>
                    <span className="flex items-center gap-1">
                      <Kbd>
                        <CornerDownLeft />
                      </Kbd>
                      Select
                    </span>
                  </div>
                  <span className="flex items-center gap-1">
                    <Kbd>Esc</Kbd>
                    Close
                  </span>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu08;
