"use client";

import { useState } from "react";
import { SlidersHorizontalIcon, StarIcon } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const CATEGORIES = ["Watches", "Clothing", "Beauty", "Electronics", "Home & Living"];
const RATINGS = [4, 3, 2, 1];
const AVAILABILITY = ["In Stock", "On Sale"];

const AdvancedFiltersDemo = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);

  const toggleCategory = (cat: string) =>
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );

  const toggleAvailability = (val: string) =>
    setSelectedAvailability((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );

  const clearAll = () => {
    setSelectedCategories([]);
    setPriceRange([0, 1000]);
    setSelectedRating(null);
    setSelectedAvailability([]);
  };

  const activeCount =
    selectedCategories.length +
    (priceRange[0] !== 0 || priceRange[1] !== 1000 ? 1 : 0) +
    (selectedRating !== null ? 1 : 0) +
    selectedAvailability.length;

  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" className="relative cursor-pointer gap-2" />}>
        <SlidersHorizontalIcon size={16} />
        Filters
        {activeCount > 0 && (
          <Badge className="size-5 justify-center rounded-full p-0 text-[10px]">
            {activeCount}
          </Badge>
        )}
      </SheetTrigger>

      <SheetContent side="left" className="flex flex-col p-0 gap-0">
        <SheetHeader className="px-4 pt-5 pb-4 border-b">
          <div className="flex items-center justify-between">
            <SheetTitle>Filters</SheetTitle>
          </div>
          <SheetDescription>Narrow down products by your preferences.</SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-5">
          {/* Categories */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium">Category</p>
            {CATEGORIES.map((cat) => (
              <div key={cat} className="flex items-center gap-2.5">
                <Checkbox
                  id={`cat-${cat}`}
                  checked={selectedCategories.includes(cat)}
                  onCheckedChange={() => toggleCategory(cat)}
                />
                <Label htmlFor={`cat-${cat}`} className="text-sm font-normal cursor-pointer">
                  {cat}
                </Label>
              </div>
            ))}
          </div>

          <Separator />

          {/* Price Range */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Price Range</p>
              <span className="text-xs text-muted-foreground">
                ${priceRange[0]} — ${priceRange[1]}
              </span>
            </div>
            <Slider
              value={priceRange}
              onValueChange={(val) => setPriceRange(Array.isArray(val) ? [...val] : [val])}
              min={0}
              max={1000}
              step={10}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>$0</span>
              <span>$1000</span>
            </div>
          </div>

          <Separator />

          {/* Rating */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium">Rating</p>
            {RATINGS.map((rating) => (
              <div
                key={rating}
                className="flex items-center gap-2.5 cursor-pointer"
                onClick={() => setSelectedRating(selectedRating === rating ? null : rating)}
              >
                <Checkbox
                  id={`rating-${rating}`}
                  checked={selectedRating === rating}
                  onCheckedChange={() => setSelectedRating(selectedRating === rating ? null : rating)}
                />
                <Label htmlFor={`rating-${rating}`} className="flex items-center gap-1 text-sm font-normal cursor-pointer">
                  {Array.from({ length: rating }).map((_, i) => (
                    <StarIcon key={i} size={13} className="fill-amber-400 text-amber-400" />
                  ))}
                  {Array.from({ length: 5 - rating }).map((_, i) => (
                    <StarIcon key={i} size={13} className="text-muted-foreground/40" />
                  ))}
                  <span className="ml-0.5 text-muted-foreground">& up</span>
                </Label>
              </div>
            ))}
          </div>

          <Separator />

          {/* Availability */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium">Availability</p>
            {AVAILABILITY.map((val) => (
              <div key={val} className="flex items-center gap-2.5">
                <Checkbox
                  id={`avail-${val}`}
                  checked={selectedAvailability.includes(val)}
                  onCheckedChange={() => toggleAvailability(val)}
                />
                <Label htmlFor={`avail-${val}`} className="text-sm font-normal cursor-pointer">
                  {val}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <SheetFooter className="flex flex-row gap-2 px-4 pt-3 pb-5 border-t">
          <Button
            variant="outline"
            className="flex-1 cursor-pointer"
            onClick={clearAll}
          >
            Clear All
          </Button>
          <SheetClose render={<Button className="flex-1 cursor-pointer hover:bg-primary/80" />}>
            Apply Filters
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default AdvancedFiltersDemo
