"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationButtonGroupDemo() {
  const [page, setPage] = useState(1);
  const totalPages = 10;

  const handlePrevious = () => {
    setPage((prev) => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setPage((prev) => Math.min(totalPages, prev + 1));
  };

  return (
    <>
      <ButtonGroup>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handlePrevious}
          disabled={page === 1}
          className="cursor-pointer"
        >
          <ChevronLeft className="size-4" />
        </Button>
        <ButtonGroupText className="px-4 min-w-32 justify-center">
          Page {page} of {totalPages}
        </ButtonGroupText>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handleNext}
          disabled={page === totalPages}
          className="cursor-pointer"
        >
          <ChevronRight className="size-4" />
        </Button>
      </ButtonGroup>
    </>
  );
}

