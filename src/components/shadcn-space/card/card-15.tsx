"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Wifi, Eye, EyeOff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ChipSVG = () => (
  <svg
    width="44"
    height="34"
    viewBox="0 0 44 34"
    fill="none"
    aria-hidden="true"
  >
    <rect width="44" height="34" rx="5" fill="#C9963A" />
    <rect x="14" width="16" height="34" fill="#B8852A" />
    <rect y="11" width="44" height="12" fill="#B8852A" />
    <rect x="14" y="11" width="16" height="12" fill="#E0B060" />
    <line x1="14" y1="0" x2="14" y2="11" stroke="#9A6E1A" strokeWidth="0.6" />
    <line x1="30" y1="0" x2="30" y2="11" stroke="#9A6E1A" strokeWidth="0.6" />
    <line x1="14" y1="23" x2="14" y2="34" stroke="#9A6E1A" strokeWidth="0.6" />
    <line x1="30" y1="23" x2="30" y2="34" stroke="#9A6E1A" strokeWidth="0.6" />
    <line x1="0" y1="11" x2="14" y2="11" stroke="#9A6E1A" strokeWidth="0.6" />
    <line x1="0" y1="23" x2="14" y2="23" stroke="#9A6E1A" strokeWidth="0.6" />
    <line x1="30" y1="11" x2="44" y2="11" stroke="#9A6E1A" strokeWidth="0.6" />
    <line x1="30" y1="23" x2="44" y2="23" stroke="#9A6E1A" strokeWidth="0.6" />
  </svg>
);

const MastercardLogo = () => (
  <div className="flex items-center" aria-label="Mastercard">
    <div className="w-7 h-7 rounded-full bg-red-500/90" />
    <div className="w-7 h-7 rounded-full bg-amber-400/90 -ml-3" />
  </div>
);

export default function CreditCardDemo() {
  const [flipped, setFlipped] = useState(false);
  const [showBalance, setShowBalance] = useState(false);

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-96 p-6 bg-background w-full">
      {/* 3D flip container */}
      <div
        className="relative w-full max-w-sm h-56 cursor-pointer"
        style={{ perspective: "1200px" }}
        onClick={() => setFlipped((f) => !f)}
        role="button"
        aria-label={flipped ? "Show card front" : "Show card back"}
      >
        <div
          className="relative w-full h-full transition-transform duration-700 ease-in-out"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* ── FRONT ── */}
          <Card
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-0 bg-transparent p-6"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-blue-500 via-sky-400 to-teal-400" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-white/10 blur-md" />
            <div className="absolute -bottom-20 -left-14 w-64 h-64 rounded-full bg-white/5 blur-md" />

            <CardContent className="relative z-10 flex flex-col justify-between h-full p-0">
              {/* Row 1: bank name | balance + eye */}
              <div className="flex items-start justify-between">
                <span className="text-white font-bold text-lg tracking-wider uppercase">
                  Nova
                </span>
                <div className="flex flex-col items-end gap-0.5">
                  <p className="text-white/70 text-xs uppercase tracking-wider">
                    Balance
                  </p>
                  <div className="flex items-center gap-1.5">
                    <p className="text-white font-bold text-sm tracking-wide select-none">
                      {showBalance ? "$12,840.00" : "••••••••"}
                    </p>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowBalance((s) => !s);
                      }}
                      className="text-white/80 hover:text-white hover:bg-black/30! transition-colors rounded-full cursor-pointer"
                      aria-label={showBalance ? "Hide balance" : "Show balance"}
                    >
                      {showBalance ? (
                        <EyeOff className="w-3.5 h-3.5" />
                      ) : (
                        <Eye className="w-3.5 h-3.5" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Row 2: chip + NFC */}
              <div className="flex items-center justify-between">
                <ChipSVG />
                <Wifi className="text-white/80 w-5 h-5 rotate-90" />
              </div>

              {/* Row 3: card number */}
              <p className="font-mono text-white text-base tracking-widest select-none">
                {showBalance ? "4921  3847  2910  8374" : "4921 •••• •••• 8374"}
              </p>

              {/* Row 4: holder | expiry | network */}
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-white/70 text-xs uppercase tracking-wider">
                    Card Holder
                  </p>
                  <p className="text-white text-sm font-semibold tracking-widest mt-0.5">
                    ALEX MORGAN
                  </p>
                </div>
                <div>
                  <p className="text-white/70 text-xs uppercase tracking-wider">
                    Expires
                  </p>
                  <p className="text-white text-sm font-semibold tracking-widest mt-0.5">
                    08 / 28
                  </p>
                </div>
                <MastercardLogo />
              </div>
            </CardContent>
          </Card>

          {/* ── BACK ── */}
          <Card
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-0 bg-transparent p-0 py-4"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-blue-500 via-sky-400 to-teal-400" />
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 flex flex-col gap-4 h-full">
              <div className="w-full h-11 bg-black/80" />

              <CardContent className="p-0 px-6 flex flex-col gap-3">
                <div className="flex items-end gap-3">
                  <div className="flex-1 h-8 bg-white/90 rounded-sm flex items-center overflow-hidden">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "flex-1 h-full",
                          i % 2 === 0 ? "bg-slate-300/70" : "bg-white/80",
                        )}
                      />
                    ))}
                  </div>
                  <div className="flex flex-col items-center gap-0.5 shrink-0">
                    <span className="text-white/70 text-xs uppercase tracking-widest">
                      CVV
                    </span>
                    <div className="bg-white text-slate-900 font-mono font-bold text-sm px-3 py-1.5 rounded-sm w-12 text-center select-none">
                      {showBalance ? "937" : "•••"}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-white/60 text-xs leading-relaxed">
                    This card is property of Nova Financial Services. If found,
                    please return to the nearest branch or call 1-800-NOVA-BANK.
                  </p>

                  <div className="flex items-center justify-end">
                    <span className="text-white/70 text-xs hover:text-white/80 transition-colors">
                      novabank.com
                    </span>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">Click card to flip</p>
    </div>
  );
}
