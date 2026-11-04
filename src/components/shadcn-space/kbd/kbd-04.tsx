'use client'

import { useState } from 'react'
import { SearchIcon } from 'lucide-react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'
import { Kbd, KbdGroup } from '@/components/ui/kbd'
import { Switch } from '@/components/ui/switch'

type Platform = 'mac' | 'win'

const KbdSearchInputDemo = () => {
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

      <InputGroup className="w-full max-w-64">
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon align="inline-end">
          <KbdGroup>
            <Kbd>{isMac ? '⌘' : 'Ctrl'}</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export default KbdSearchInputDemo
