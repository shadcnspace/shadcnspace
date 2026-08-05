import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  MenuIcon,
} from "lucide-react";

export default function Pattern() {
  return (
    <ButtonGroup>
      <Button variant="outline" size="icon-sm" aria-label="Align left">
        <AlignLeftIcon aria-hidden="true" />
      </Button>
      <Button variant="outline" size="icon-sm" aria-label="Align center">
        <AlignCenterIcon aria-hidden="true" />
      </Button>
      <Button variant="outline" size="icon-sm" aria-label="Align right">
        <AlignRightIcon aria-hidden="true" />
      </Button>
      <Button variant="outline" size="icon-sm" aria-label="Align justify">
        <MenuIcon aria-hidden="true" />
      </Button>
    </ButtonGroup>
  );
}