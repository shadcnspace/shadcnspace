"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronsUpDown, Globe, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Language = {
  code: string;
  name: string;
  native: string;
  greeting: string;
  rtl?: boolean;
};

type Region = {
  label: string;
  languages: Language[];
};

const POPULAR: Language[] = [
  { code: "EN", name: "English", native: "English", greeting: "Hello" },
  { code: "ES", name: "Spanish", native: "Español", greeting: "Hola" },
  { code: "FR", name: "French", native: "Français", greeting: "Bonjour" },
  { code: "DE", name: "German", native: "Deutsch", greeting: "Hallo" },
];

const REGIONS: Region[] = [
  {
    label: "Asia",
    languages: [
      { code: "ZH", name: "Chinese", native: "中文", greeting: "你好" },
      { code: "HI", name: "Hindi", native: "हिन्दी", greeting: "नमस्ते" },
      { code: "JA", name: "Japanese", native: "日本語", greeting: "こんにちは" },
      { code: "KO", name: "Korean", native: "한국어", greeting: "안녕하세요" },
    ],
  },
  {
    label: "Europe",
    languages: [
      { code: "IT", name: "Italian", native: "Italiano", greeting: "Ciao" },
      { code: "PT", name: "Portuguese", native: "Português", greeting: "Olá" },
      { code: "RU", name: "Russian", native: "Русский", greeting: "Привет" },
      { code: "NL", name: "Dutch", native: "Nederlands", greeting: "Hallo" },
    ],
  },
  {
    label: "Middle East",
    languages: [
      { code: "AR", name: "Arabic", native: "العربية", greeting: "مرحبا", rtl: true },
      { code: "HE", name: "Hebrew", native: "עברית", greeting: "שלום", rtl: true },
      { code: "TR", name: "Turkish", native: "Türkçe", greeting: "Merhaba" },
      { code: "FA", name: "Persian", native: "فارسی", greeting: "سلام", rtl: true },
    ],
  },
];

const ALL_LANGUAGES = [...POPULAR, ...REGIONS.flatMap((r) => r.languages)];

const SPRING = { type: "spring", bounce: 0.25, duration: 0.5 } as const;

const itemClass = "cursor-pointer gap-3 rounded-lg p-2 text-sm";

const LanguageItem = ({
  item,
  index,
  selected,
}: {
  item: Language;
  index: number;
  selected: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -14 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ ...SPRING, delay: 0.04 + index * 0.045 }}
  >
    <DropdownMenuRadioItem value={item.code} className={itemClass}>
      <motion.span
        animate={{ scale: selected ? 1.1 : 1, rotate: selected ? -6 : 0 }}
        transition={SPRING}
        className={
          selected
            ? "flex size-7 shrink-0 items-center justify-center rounded-md bg-primary text-xs font-semibold text-primary-foreground!"
            : "flex size-7 shrink-0 items-center justify-center rounded-md bg-muted text-xs font-semibold text-foreground!"
        }
      >
        {item.code}
      </motion.span>
      <span className="flex min-w-0 flex-1 flex-col leading-tight">
        <span className="truncate text-sm font-medium">{item.native}</span>
        <span className="truncate text-xs text-muted-foreground">
          {item.name}
        </span>
      </span>
      {item.rtl && (
        <Badge variant="outline" className="mr-5 shrink-0">
          RTL
        </Badge>
      )}
    </DropdownMenuRadioItem>
  </motion.div>
);

type Props = {
  defaultOpen?: boolean;
};

const DropdownMenu11 = ({ defaultOpen = false }: Props) => {
  const [open, setOpen] = useState(defaultOpen);
  const [selected, setSelected] = useState("EN");
  const [autoTranslate, setAutoTranslate] = useState(true);

  const current =
    ALL_LANGUAGES.find((item) => item.code === selected) ?? ALL_LANGUAGES[0];

  return (
    <div className="flex w-full justify-center px-4">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger
          render={
            <Button
              variant="outline"
              className="h-auto min-w-56 cursor-pointer justify-between gap-3 rounded-full py-2 pr-3"
            />
          }
        >
          <span className="flex items-center gap-2.5">
            <motion.span
              animate={{ rotate: open ? 360 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex"
            >
              <Globe className="size-4 text-muted-foreground" />
            </motion.span>
            <span className="relative inline-flex h-5 items-center overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={current.code}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm font-medium"
                >
                  {current.native}
                </motion.span>
              </AnimatePresence>
            </span>
            <Badge variant="secondary">{current.code}</Badge>
          </span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <ChevronsUpDown className="size-4 text-muted-foreground" />
          </motion.span>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="center" sideOffset={10} className="w-80 p-2">
          <DropdownMenuRadioGroup value={selected} onValueChange={setSelected}>
            <DropdownMenuLabel className="px-2 pt-2 text-xs uppercase tracking-wide text-muted-foreground">
              Popular
            </DropdownMenuLabel>
            {POPULAR.map((item, index) => (
              <LanguageItem
                key={item.code}
                item={item}
                index={index}
                selected={item.code === selected}
              />
            ))}
          </DropdownMenuRadioGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuLabel className="px-2 pt-1 text-xs uppercase tracking-wide text-muted-foreground">
              More regions
            </DropdownMenuLabel>
            {REGIONS.map((region, index) => {
              const active = region.languages.some(
                (item) => item.code === selected,
              );
              return (
                <motion.div
                  key={region.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...SPRING, delay: 0.25 + index * 0.06 }}
                >
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className={itemClass}>
                      <span className="flex-1 font-medium">{region.label}</span>
                      <AnimatePresence initial={false}>
                        {active && (
                          <motion.span
                            initial={{ scale: 0.4, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.4, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                          >
                            <Badge className="text-primary-foreground!">{current.code}</Badge>
                          </motion.span>
                        )}
                      </AnimatePresence>
                      <span className="text-xs text-muted-foreground">
                        {region.languages.length}
                      </span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="w-64 p-2">
                      <DropdownMenuRadioGroup
                        value={selected}
                        onValueChange={setSelected}
                      >
                        {region.languages.map((item, i) => (
                          <LanguageItem
                            key={item.code}
                            item={item}
                            index={i}
                            selected={item.code === selected}
                          />
                        ))}
                      </DropdownMenuRadioGroup>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </motion.div>
              );
            })}
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING, delay: 0.45 }}
          >
            <DropdownMenuCheckboxItem
              checked={autoTranslate}
              onCheckedChange={setAutoTranslate}
              className={itemClass}
            >
              <motion.span
                animate={{
                  rotate: autoTranslate ? [0, -15, 15, 0] : 0,
                  scale: autoTranslate ? 1 : 0.85,
                }}
                transition={{ duration: 0.4 }}
                className="flex"
              >
                <Sparkles
                  className={
                    autoTranslate
                      ? "size-4 text-primary"
                      : "size-4 text-muted-foreground"
                  }
                />
              </motion.span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-medium">Auto-translate pages</span>
                <span className="text-xs text-muted-foreground">
                  Translate content on the fly
                </span>
              </span>
            </DropdownMenuCheckboxItem>
          </motion.div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropdownMenu11;
