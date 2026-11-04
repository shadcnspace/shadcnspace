"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { StarIcon } from "lucide-react";
import { motion } from "motion/react";

const STARS = [1, 2, 3, 4, 5];

const RatingButtonGroup = () => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  const active = hovered || rating;

  return (
    <ButtonGroup
      className="gap-1 border-none"
      onMouseLeave={() => setHovered(0)}
      aria-label="Rate your experience"
    >
      {STARS.map((star) => {
        const isFilled = star <= active;

        return (
          <Button
            key={star}
            variant="ghost"
            size="icon-sm"
            className="cursor-pointer border-none bg-transparent! hover:bg-transparent!"
            onMouseEnter={() => setHovered(star)}
            onClick={() => setRating(star)}
            aria-label={`Rate ${star} out of 5`}
            aria-pressed={star === rating}
          >
            <motion.span
              className="block"
              animate={isFilled ? { scale: [1, 1.25, 1] } : { scale: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <StarIcon
                className={cn(
                  "size-5 transition-colors",
                  isFilled
                    ? "fill-amber-300 text-amber-300"
                    : "fill-transparent text-muted-foreground",
                )}
              />
            </motion.span>
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default RatingButtonGroup;
