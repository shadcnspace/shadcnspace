"use client";

import { useMemo, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronsDownUp,
  ChevronsUpDown,
  HelpCircle,
  Search,
  ThumbsDown,
  ThumbsUp,
  X,
} from "lucide-react";

interface FaqItem {
  id: string;
  category: "Billing" | "Security" | "Integrations" | "General";
  question: string;
  answer: string;
  helpfulCount: number;
}

const faqData: FaqItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "Can I use Shadcn Space components in both commercial and open-source projects?",
    answer:
      "Yes, all components are licensed under MIT. You can freely adapt, customize, and ship them in personal hobby projects, enterprise SaaS platforms, and client work with zero royalty fees.",
    helpfulCount: 84,
  },
  {
    id: "faq-2",
    category: "Billing",
    question: "How does team seat licensing and renewal work?",
    answer:
      "Team plans are billed annually per active developer seat. You can add or reassign seats at any time from your organization dashboard with prorated billing calculated automatically.",
    helpfulCount: 52,
  },
  {
    id: "faq-3",
    category: "Security",
    question: "Are dependencies audited for vulnerabilities and SOC2 compliance?",
    answer:
      "Yes. Every primitive relies strictly on audited Base UI and Radix headless cores. We run automated Snyk and Dependabot security scans on every build and maintain strict zero-eval execution guarantees.",
    helpfulCount: 41,
  },
  {
    id: "faq-4",
    category: "Integrations",
    question: "How does the official MCP Server connect to AI IDEs like Cursor and Windsurf?",
    answer:
      "The Shadcn Space MCP server exposes tools like `searchBlocks` and `getBlockInstall`. Simply add `https://mcp.shadcnspace.com/mcp` to your IDE's `mcp.json` configuration file to install blocks via natural language prompts.",
    helpfulCount: 67,
  },
  {
    id: "faq-5",
    category: "General",
    question: "Does Shadcn Space support Tailwind CSS v4 and Next.js 15+ App Router?",
    answer:
      "Yes! All blocks are designed with Tailwind CSS v4 `@theme` tokens and modern React 19 RSC conventions, while preserving full backward compatibility with Tailwind v3 setups.",
    helpfulCount: 96,
  },
  {
    id: "faq-6",
    category: "Security",
    question: "Where are my custom registry tokens and license keys stored?",
    answer:
      "Your license credentials reside solely in your local `.env.local` file and are never sent to third-party trackers or stored outside your verified CLI session.",
    helpfulCount: 38,
  },
];

const categories = ["All", "General", "Billing", "Security", "Integrations"] as const;

const AccordionFilterableFaq = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openItems, setOpenItems] = useState<string[]>(["faq-1"]);
  const [helpfulFeedback, setHelpfulFeedback] = useState<Record<string, "up" | "down">>({});

  const filteredItems = useMemo(() => {
    return faqData.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesQuery =
        item.question.toLowerCase().includes(search.toLowerCase()) ||
        item.answer.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [search, selectedCategory]);

  const allFilteredIds = useMemo(() => filteredItems.map((item) => item.id), [filteredItems]);
  const isAllOpen = allFilteredIds.length > 0 && allFilteredIds.every((id) => openItems.includes(id));

  const toggleExpandAll = () => {
    if (isAllOpen) {
      setOpenItems([]);
    } else {
      setOpenItems(allFilteredIds);
    }
  };

  const handleVote = (id: string, vote: "up" | "down") => {
    setHelpfulFeedback((prev) => ({
      ...prev,
      [id]: prev[id] === vote ? (undefined as unknown as "up") : vote,
    }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-2 py-4">
      {/* Header */}
      <div className="mb-6 space-y-1">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1.5 py-1 text-xs">
            <HelpCircle className="size-3 text-primary" />
            Knowledge Base
          </Badge>
          <span className="text-xs text-muted-foreground">
            {filteredItems.length} articles found
          </span>
        </div>
        <h3 className="text-xl font-bold tracking-tight text-foreground">
          Frequently Asked Questions
        </h3>
        <p className="text-xs text-muted-foreground">
          Quick answers to common questions about licensing, integration, security, and updates.
        </p>
      </div>

      {/* Search & Actions Bar */}
      <div className="space-y-3 mb-5">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions or keywords (e.g. MCP, Tailwind, license)..."
            className="pl-9 pr-8 h-9 text-xs"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-0.5"
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>

        {/* Category Pills & Expand/Collapse Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground font-medium shadow-xs"
                    : "bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleExpandAll}
            className="h-7 text-xs gap-1 text-muted-foreground hover:text-foreground cursor-pointer"
          >
            {isAllOpen ? (
              <>
                <ChevronsDownUp className="size-3.5" />
                Collapse All
              </>
            ) : (
              <>
                <ChevronsUpDown className="size-3.5" />
                Expand All
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Accordion List */}
      {filteredItems.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border p-8 text-center space-y-2">
          <HelpCircle className="size-8 mx-auto text-muted-foreground/60" />
          <h4 className="text-sm font-semibold text-foreground">No questions found</h4>
          <p className="text-xs text-muted-foreground max-w-sm mx-auto">
            Try adjusting your search terms or select another category filter above.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSearch("");
              setSelectedCategory("All");
            }}
            className="mt-2 text-xs"
          >
            Reset Filters
          </Button>
        </div>
      ) : (
        <Accordion
          value={openItems}
          onValueChange={setOpenItems}
          className="space-y-2.5"
        >
          {filteredItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="rounded-xl border border-border/70 bg-card/60 backdrop-blur-sm transition-all hover:border-border overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3.5 hover:no-underline cursor-pointer group text-left">
                <div className="flex flex-1 items-start gap-3 pr-3">
                  <Badge variant="secondary" className="shrink-0 text-[10px] font-normal mt-0.5">
                    {item.category}
                  </Badge>
                  <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                    {item.question}
                  </span>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-4 pb-4 pt-1 text-xs sm:text-sm text-muted-foreground border-t border-border/40 bg-muted/20">
                <p className="leading-relaxed text-foreground/80 mt-1">
                  {item.answer}
                </p>

                {/* Helpful voting footer */}
                <div className="mt-3.5 pt-2.5 flex items-center justify-between border-t border-border/40 text-xs">
                  <span className="text-[11px] text-muted-foreground">
                    Was this answer helpful?
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleVote(item.id, "up")}
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] transition-colors cursor-pointer ${
                        helpfulFeedback[item.id] === "up"
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium"
                          : "hover:bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <ThumbsUp className="size-3" />
                      <span>{item.helpfulCount + (helpfulFeedback[item.id] === "up" ? 1 : 0)}</span>
                    </button>
                    <button
                      onClick={() => handleVote(item.id, "down")}
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] transition-colors cursor-pointer ${
                        helpfulFeedback[item.id] === "down"
                          ? "bg-rose-500/10 text-rose-600 dark:text-rose-400 font-medium"
                          : "hover:bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <ThumbsDown className="size-3" />
                    </button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default AccordionFilterableFaq;
