'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Kbd } from '@/components/ui/kbd'
import { Switch } from '@/components/ui/switch'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

type Platform = 'mac' | 'win'

const KbdTooltipDemo = () => {
  const [platform, setPlatform] = useState<Platform>('mac')
  const isMac = platform === 'mac'

  return (
    <TooltipProvider>
      <div className="flex flex-col items-center gap-4">
        {/* Platform switch */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">MacOS</span>
          <Switch
            checked={platform === 'win'}
            onCheckedChange={(checked) => setPlatform(checked ? 'win' : 'mac')}
          />
          <span className="text-muted-foreground">Windows</span>
        </div>

        <ButtonGroup>
          <Tooltip>
            <TooltipTrigger render={<Button size="sm" variant="outline">Accept</Button>} />
            <TooltipContent>
              <div className="flex items-center gap-2">
                Accept
                <Kbd>{isMac ? '↵' : 'Enter'}</Kbd>
              </div>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger render={<Button size="sm" variant="outline">Cancel</Button>} />
            <TooltipContent>
              <div className="flex items-center gap-2">
                Cancel
                <Kbd>Esc</Kbd>
              </div>
            </TooltipContent>
          </Tooltip>
        </ButtonGroup>
      </div>
    </TooltipProvider>
  )
}

export default KbdTooltipDemo
