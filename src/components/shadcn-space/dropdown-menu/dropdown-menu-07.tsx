"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Archive,
  Check,
  Download,
  FileCode,
  FileJson,
  FileSpreadsheet,
  FileText,
  FileType,
  LayoutList,
  LucideIcon,
  Table,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Status = "idle" | "exporting" | "done";

type FormatOption = {
  id: string;
  label: string;
  description: string;
  size: string;
  icon: LucideIcon;
};

const FORMATS: FormatOption[] = [
  {
    id: "pdf",
    label: "PDF",
    description: "Best for sharing and printing",
    size: "1.2 MB",
    icon: FileText,
  },
  {
    id: "csv",
    label: "CSV",
    description: "Plain text, opens anywhere",
    size: "320 KB",
    icon: Table,
  },
  {
    id: "xlsx",
    label: "Excel",
    description: "Spreadsheet with formatting",
    size: "540 KB",
    icon: FileSpreadsheet,
  },
  {
    id: "json",
    label: "JSON",
    description: "Structured data for developers",
    size: "410 KB",
    icon: FileJson,
  },
];

const MORE_FORMATS: FormatOption[] = [
  {
    id: "xml",
    label: "XML",
    description: "Markup data",
    size: "480 KB",
    icon: FileCode,
  },
  {
    id: "txt",
    label: "Text",
    description: "Plain text",
    size: "260 KB",
    icon: FileType,
  },
];

const ALL_FORMATS = [...FORMATS, ...MORE_FORMATS];

const SIZE = 60;
const STROKE = 3;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const SPRING = { type: "spring", bounce: 0.2, duration: 0.5 } as const;

const itemClass = "cursor-pointer gap-3 rounded-lg p-2 text-sm";

type Props = {
  defaultOpen?: boolean;
};

const DropdownMenu10 = ({ defaultOpen = false }: Props) => {
  const [format, setFormat] = useState("pdf");
  const [status, setStatus] = useState<Status>("idle");
  const [progress, setProgress] = useState(0);
  const [headers, setHeaders] = useState(true);
  const [zip, setZip] = useState(false);

  const selected = ALL_FORMATS.find((item) => item.id === format) ?? FORMATS[0];

  useEffect(() => {
    if (status !== "exporting") return;
    const timer = setInterval(
      () => setProgress((prev) => Math.min(prev + 6, 100)),
      140,
    );
    return () => clearInterval(timer);
  }, [status]);

  useEffect(() => {
    if (status === "exporting" && progress >= 100) setStatus("done");
  }, [progress, status]);

  useEffect(() => {
    if (status !== "done") return;
    const timer = setTimeout(() => {
      setStatus("idle");
      setProgress(0);
    }, 2500);
    return () => clearTimeout(timer);
  }, [status]);

  const startExport = (id: string) => {
    if (status !== "idle") return;
    setFormat(id);
    setProgress(0);
    setStatus("exporting");
  };

  const caption =
    status === "exporting"
      ? `Exporting ${selected.label}...`
      : status === "done"
        ? "done"
        : "Export data";

  return (
    <div className="flex w-full flex-col items-center gap-3 px-4">
      <DropdownMenu defaultOpen={defaultOpen}>
        <div
          className="relative flex items-center justify-center "
          style={{ width: SIZE, height: SIZE }}
        >
          <svg
            width={SIZE}
            height={SIZE}
            className="pointer-events-none absolute inset-0 -rotate-90"
            aria-hidden="true"
          >
            <circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              strokeWidth={STROKE}
              className="stroke-muted"
            />
            <motion.circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              strokeWidth={STROKE}
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              initial={false}
              animate={{
                strokeDashoffset: CIRCUMFERENCE * (1 - progress / 100),
                opacity: status === "idle" ? 0 : 1,
              }}
              transition={{ duration: 0.14, ease: "linear" }}
              className="stroke-chart-2"
            />
          </svg>
          <DropdownMenuTrigger
            render={
              <Button
                size="icon-lg"
                className="size-11 rounded-full cursor-pointer"
              />
            }
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={status}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.15 }}
                className="flex items-center justify-center"
              >
                {status === "idle" && <Download className="size-5" />}
                {status === "exporting" && (
                  <span className="text-xs font-semibold tabular-nums">
                    {progress}%
                  </span>
                )}
                {status === "done" && <Check className="size-5" />}
              </motion.span>
            </AnimatePresence>
            <span className="sr-only">Open export menu</span>
          </DropdownMenuTrigger>
        </div>

        <DropdownMenuContent
          align="center"
          sideOffset={12}
          className="w-72  p-2"
        >
          <DropdownMenuGroup>
            <DropdownMenuLabel className="px-2 py-1.5 text-sm font-semibold text-foreground">
              Export as
            </DropdownMenuLabel>
            {FORMATS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...SPRING, delay: 0.03 + index * 0.05 }}
                >
                  <DropdownMenuItem
                    className={itemClass}
                    onClick={() => startExport(item.id)}
                  >
                    <span className="flex size-9 items-center justify-center rounded-lg bg-muted">
                      <Icon className="size-4" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col leading-tight">
                      <span className="font-medium">{item.label}</span>
                      <span className="truncate text-xs font-normal text-muted-foreground">
                        {item.description}
                      </span>
                    </span>
                    <DropdownMenuShortcut>{item.size}</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </motion.div>
              );
            })}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className={itemClass}>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <LayoutList className="size-4" />
                </span>
                <span className="flex-1 font-medium">More formats</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="w-56 rounded-xl p-1.5">
                {MORE_FORMATS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <DropdownMenuItem
                      key={item.id}
                      className={itemClass}
                      onClick={() => startExport(item.id)}
                    >
                      <Icon className="size-4" />
                      <span className="flex-1">{item.label}</span>
                      <DropdownMenuShortcut>{item.size}</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuLabel className="px-2 py-1.5 text-sm font-semibold text-foreground">
              Options
            </DropdownMenuLabel>
            <DropdownMenuCheckboxItem
              checked={headers}
              onCheckedChange={setHeaders}
              className={itemClass}
            >
              <FileText className="size-4" />
              Include column headers
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={zip}
              onCheckedChange={setZip}
              className={itemClass}
            >
              <Archive className="size-4" />
              Compress as .zip
            </DropdownMenuCheckboxItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex h-6 items-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={caption}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            {status === "done" ? (
              <>
                <Badge variant="secondary">export.{selected.id}</Badge>
                saved to downloads
              </>
            ) : (
              caption
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DropdownMenu10;

