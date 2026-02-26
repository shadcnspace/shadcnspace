import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { LayoutGrid, List, Table } from "lucide-react";

export default function VerticalButtonGroupDemo() {
  return (
    <>
      <ButtonGroup orientation="vertical">
        <Button variant="outline" className="justify-start gap-2 cursor-pointer">
          <LayoutGrid className="size-4" />
          Grid View
        </Button>
        <Button variant="outline" className="justify-start gap-2 cursor-pointer">
          <List className="size-4" />
          List View
        </Button>
        <Button variant="outline" className="justify-start gap-2 cursor-pointer">
          <Table className="size-4" />
          Table View
        </Button>
      </ButtonGroup>
    </>
  );
}
