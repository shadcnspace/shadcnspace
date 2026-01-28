import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarGroupTooltipDemo = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <div className="flex flex-row justify-center items-center gap-6">
        <TooltipProvider>
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
            <Tooltip>
              <TooltipTrigger >
                <Avatar>
                  <AvatarImage
                    src="https://images.shadcnspace.com/assets/profiles/user-1.jpg"
                    alt="user"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>
                <p>Chris Nolan</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger >
                <Avatar>
                  <AvatarImage
                    src="https://images.shadcnspace.com/assets/profiles/user-2.jpg"
                    alt="user"
                  />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>
                <p>Laura Ross</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger >
                <Avatar>
                  <AvatarImage
                    src="https://images.shadcnspace.com/assets/profiles/user-3.jpg"
                    alt="user"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>
                <p>John Roberts</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger >
                <Avatar>
                  <AvatarFallback className="text-card-foreground font-medium text-sm">
                    +4
                  </AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>
                <p>4 more members</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default AvatarGroupTooltipDemo;
