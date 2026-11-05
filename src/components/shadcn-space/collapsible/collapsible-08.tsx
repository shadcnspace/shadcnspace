"use client";

import { ChevronRight, Settings2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const CollapsibleDemo = () => {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="flex w-full max-w-sm flex-col gap-4 rounded-lg border border-border bg-background p-5"
    >
      <div>
        <p className="text-base font-medium text-foreground">Create webhook</p>
        <p className="text-sm text-muted-foreground">Send events to your endpoint as they happen.</p>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="webhook-url">Endpoint URL</Label>
        <Input id="webhook-url" type="url" placeholder="https://api.acme.com/webhooks" />
      </div>

      <Collapsible className="rounded-md border border-border">
        <CollapsibleTrigger className="group flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-left text-sm font-medium text-foreground transition-colors hover:bg-muted/50 focus-visible:outline-2 focus-visible:outline-ring">
          <Settings2 className="size-4 text-muted-foreground" aria-hidden="true" />
          <span className="flex-1">Advanced options</span>
          <ChevronRight
            className="size-4 text-muted-foreground transition-transform group-data-panel-open:rotate-90 motion-reduce:transition-none"
            aria-hidden="true"
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-all duration-200 data-ending-style:h-0 data-starting-style:h-0 motion-reduce:transition-none">
          <div className="flex flex-col gap-4 border-t border-border p-3">
            <div className="flex flex-col gap-2">
              <Label htmlFor="webhook-secret">Signing secret</Label>
              <Input id="webhook-secret" placeholder="whsec_..." className="font-mono" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="webhook-retries">Max retries</Label>
              <Input id="webhook-retries" type="number" min={0} max={10} defaultValue={3} />
            </div>
            <Label className="justify-between font-normal">
              <span className="flex flex-col gap-0.5">
                <span className="font-medium text-foreground">Batch events</span>
                <span className="text-xs text-muted-foreground">Group up to 100 events per request.</span>
              </span>
              <Switch />
            </Label>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
};

export default CollapsibleDemo;
