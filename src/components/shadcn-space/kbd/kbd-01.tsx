'use client'

import { useState } from 'react'
import { PrinterIcon, SaveIcon, Share2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Kbd, KbdGroup } from '@/components/ui/kbd'
import { Switch } from '@/components/ui/switch'

type Platform = 'mac' | 'win'

const KbdInButtonDemo = () => {
  const [platform, setPlatform] = useState<Platform>('mac')
  const isMac = platform === 'mac'

  return (
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

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        <Button variant="outline" className="hover:bg-muted/40">
          <SaveIcon aria-hidden="true" />
          Save
          <KbdGroup className="-me-1">
            <Kbd>{isMac ? '⌘' : 'Ctrl'}</Kbd>
            <Kbd>S</Kbd>
          </KbdGroup>
        </Button>

        <Button variant="outline" className="hover:bg-muted/40">
          <PrinterIcon aria-hidden="true" />
          Print
          <KbdGroup className="-me-1">
            <Kbd>{isMac ? '⌘' : 'Ctrl'}</Kbd>
            <Kbd>P</Kbd>
          </KbdGroup>
        </Button>

        <Button variant="outline" className="hover:bg-muted/40">
          <Share2Icon aria-hidden="true" />
          Share
          <KbdGroup className="-me-1">
            <Kbd>{isMac ? '⌘' : 'Ctrl'}</Kbd>
            <Kbd>{isMac ? '⇧' : 'Shift'}</Kbd>
            <Kbd>S</Kbd>
          </KbdGroup>
        </Button>
      </div>
    </div>
  )
}

export default KbdInButtonDemo
