'use client'

import { useState } from 'react'
import { Kbd, KbdGroup } from '@/components/ui/kbd'
import { Switch } from '@/components/ui/switch'

type Platform = 'mac' | 'win'

const KbdGroupDemo = () => {
  const [platform, setPlatform] = useState<Platform>('mac')
  const isMac = platform === 'mac'

  return (
    <div className="flex flex-col gap-4">
      {/* Platform switch */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">MacOS</span>
        <Switch
          checked={platform === 'win'}
          onCheckedChange={(checked) => setPlatform(checked ? 'win' : 'mac')}
        />
        <span className="text-muted-foreground">Windows</span>
      </div>

      {/* Shortcuts */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">Command Palette</span>
          <KbdGroup>
            <Kbd>{isMac ? '⌘' : 'Ctrl'}</Kbd>
            <Kbd>{isMac ? '⇧' : 'Shift'}</Kbd>
            <Kbd>P</Kbd>
          </KbdGroup>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">Find & Replace</span>
          <KbdGroup>
            <Kbd>{isMac ? '⌘' : 'Ctrl'}</Kbd>
            <Kbd>{isMac ? '⇧' : 'Shift'}</Kbd>
            <Kbd>H</Kbd>
          </KbdGroup>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">New Terminal</span>
          <KbdGroup>
            <Kbd>{isMac ? '⌘' : 'Ctrl'}</Kbd>
            <Kbd>{isMac ? '⇧' : 'Shift'}</Kbd>
            <Kbd>`</Kbd>
          </KbdGroup>
        </div>
      </div>
    </div>
  )
}

export default KbdGroupDemo
