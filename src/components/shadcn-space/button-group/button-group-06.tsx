import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { ListFilter, BookOpen } from "lucide-react";

export default function VercelButtonGroupDemo() {
  return (
    <>
      <ButtonGroup>
        <Button 
          variant="outline" 
          className="h-9 px-3 gap-2 bg-background border-border hover:bg-accent hover:text-accent-foreground rounded-md shadow-sm transition-all cursor-pointer"
        >
          <ListFilter className="size-4 shrink-0" />
          <span className="text-sm font-medium">Deployments</span>
        </Button>
        <Button 
          variant="outline" 
          size="icon"
          className="h-9 w-9 bg-background border-border hover:bg-accent hover:text-accent-foreground rounded-md shadow-sm transition-all cursor-pointer"
        >
          <BookOpen className="size-4" />
        </Button>
      </ButtonGroup>
    </>
  );
}
