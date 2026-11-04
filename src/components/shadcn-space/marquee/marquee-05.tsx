import { TrendingDown, TrendingUp } from "lucide-react";

import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { cn } from "@/lib/utils";

type Stock = {
  symbol: string;
  name: string;
  price: number;
  change: number;
  logoClass: string;
};

const stocks: Stock[] = [
  {
    symbol: "AAPL",
    name: "Apple",
    price: 227.48,
    change: 1.24,
    logoClass: "bg-blue-500",
  },
  {
    symbol: "MSFT",
    name: "Microsoft",
    
    price: 418.92,
    change: -0.63,
    logoClass: "bg-sky-400",
  },
  {
    symbol: "NVDA",
    name: "NVIDIA",
    price: 131.76,
    change: 3.41,
    logoClass: "bg-teal-400",
  },
  {
    symbol: "TSLA",
    name: "Tesla",
    price: 248.5,
    change: -2.18,
    logoClass: "bg-red-500",
  },
  {
    symbol: "AMZN",
    name: "Amazon",
    price: 186.3,
    change: 0.87,
    logoClass: "bg-orange-400",
  },
  {
    symbol: "GOOGL",
    name: "Alphabet",
    price: 165.12,
    change: 1.05,
    logoClass: "bg-amber-300",
  },
  {
    symbol: "META",
    name: "Meta",
    price: 512.74,
    change: -1.32,
    logoClass: "bg-blue-500",
  },
  {
    symbol: "NFLX",
    name: "Netflix",
    price: 689.05,
    change: 2.76,
    logoClass: "bg-sky-400",
  },
];

const StockItem = ({ symbol, name, price, change, logoClass }: Stock) => {
  const isUp = change >= 0;
  const TrendIcon = isUp ? TrendingUp : TrendingDown;

  return (
    <div className="flex items-center gap-3 px-6">
      <div
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white",
          logoClass,
        )}
      >
        {symbol.charAt(0)}
      </div>
      <p className="text-sm font-medium text-foreground">{name}</p>
      <p className="text-sm text-muted-foreground">${price.toFixed(2)}</p>
      <p
        className={cn(
          "flex items-center gap-1 text-sm font-medium",
          isUp
            ? "text-emerald-600 dark:text-emerald-400"
            : "text-red-600 dark:text-red-400",
        )}
      >
        <TrendIcon className="size-4" aria-hidden="true" />
        {isUp ? "+" : ""}
        {change.toFixed(2)}%
      </p>
    </div>
  );
};

export default function TrendingStocksMarqueeDemo() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-border bg-card">
      <Marquee pauseOnHover className="py-4 [--duration:30s] [--gap:0rem]">
        {stocks.map((stock) => (
          <StockItem key={stock.symbol} {...stock} />
        ))}
      </Marquee>
    </div>
  );
}
