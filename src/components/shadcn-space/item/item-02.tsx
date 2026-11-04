"use client";

import { cn } from "@/lib/utils";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";

export type ModelItem = {
  name: string;
  description: string;
  blobs: string[];
};

export type ModelGridCardsProps = {
  items?: ModelItem[];
};

const defaultModels: ModelItem[] = [
  {
    name: "v0-1.5-sm",
    description: "Everyday tasks and UI generation.",
    blobs: [
      "-top-8 -left-8 size-28 bg-blue-500/70",
      "top-1/2 left-1/2 size-24 -translate-x-1/2 -translate-y-1/2 bg-red-500",
      "-bottom-10 -right-6 size-28 bg-blue-500/60",
    ],
  },
  {
    name: "v0-1.5-lg",
    description: "Advanced thinking or reasoning.",
    blobs: [
      "-top-8 -left-8 size-28 bg-orange-400/80",
      "top-1/3 -right-6 size-28 bg-sky-400/80",
      "-bottom-10 left-1/3 size-28 bg-teal-400/80",
    ],
  },
];

const ModelGridCardsDemo = ({ items = defaultModels }: ModelGridCardsProps) => {
  return (
    <ItemGroup className="grid grid-cols-2 max-w-sm gap-4">
      {items.map((item) => (
        <Item key={item.name} variant="outline">
          <ItemHeader>
            <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-neutral-950 p-0">
              {item.blobs.map((blob, i) => (
                <div
                  key={i}
                  className={cn("absolute rounded-full blur-2xl", blob)}
                />
              ))}
            </div>
          </ItemHeader>
          <ItemContent>
            <ItemTitle>{item.name}</ItemTitle>
            <ItemDescription>{item.description}</ItemDescription>
          </ItemContent>
        </Item>
      ))}
    </ItemGroup>
  );
};

export default ModelGridCardsDemo;

