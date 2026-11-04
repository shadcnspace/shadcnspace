'use client'

import { useState } from 'react'
import { CheckIcon, CopyIcon, RotateCcwIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Kbd, KbdGroup } from '@/components/ui/kbd'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

type Platform = 'mac' | 'win'

const MAC_MODIFIERS = [
  { symbol: '⌘', label: 'Cmd' },
  { symbol: '⇧', label: 'Shift' },
  { symbol: '⌥', label: 'Option' },
  { symbol: '⌃', label: 'Ctrl' },
]

const WIN_MODIFIERS = [
  { label: 'Ctrl' },
  { label: 'Shift' },
  { label: 'Alt' },
  { label: 'Win' },
]

const KbdGeneratorDemo = () => {
  const [platform, setPlatform] = useState<Platform>('mac')
  const [selected, setSelected] = useState<string[]>([])
  const [key, setKey] = useState('')
  const [copied, setCopied] = useState(false)

  const modifiers = platform === 'mac' ? MAC_MODIFIERS : WIN_MODIFIERS as { symbol?: string; label: string }[]

  const toggleModifier = (value: string) => {
    setSelected(prev =>
      prev.includes(value) ? prev.filter(m => m !== value) : [...prev, value]
    )
  }

  const switchPlatform = (isWin: boolean) => {
    setPlatform(isWin ? 'win' : 'mac')
    setSelected([])
    setKey('')
  }

  const allKeys = [...selected, ...(key ? [key.toUpperCase()] : [])]

  const jsxCode = allKeys.length > 0
    ? `<KbdGroup>\n${allKeys.map(k => `  <Kbd>${k}</Kbd>`).join('\n')}\n</KbdGroup>`
    : ''

  const handleCopy = () => {
    if (!jsxCode) return
    navigator.clipboard.writeText(jsxCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-5">
      {/* Platform switch */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">MacOS</span>
        <Switch
          checked={platform === 'win'}
          onCheckedChange={switchPlatform}
        />
        <span className="text-muted-foreground">Windows</span>
      </div>

      {/* Modifiers */}
      <div>
        <p className="mb-2.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">Modifiers</p>
        <div className="flex flex-wrap gap-2">
          {modifiers.map(({ symbol, label }) => {
            const value = symbol ?? label
            return (
              <Button
                key={label}
                onClick={() => toggleModifier(value)}
                variant="outline"
                className={cn(
                  'gap-1.5 font-medium transition-all cursor-pointer',
                  selected.includes(value) && 'bg-foreground! text-background! hover:bg-foreground/90 hover:text-background border-foreground'
                )}
              >
                {symbol && <span className="font-mono">{symbol}</span>}
                <span>{label}</span>
              </Button>
            )
          })}
        </div>
      </div>

      {/* Key input */}
      <div>
        <p className="mb-2.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">Key</p>
        <Input
          value={key}
          onChange={e => setKey(e.target.value.slice(-1))}
          placeholder="e.g. S"
          maxLength={1}
          className="w-20 text-center font-mono uppercase placeholder:normal-case"
        />
      </div>

      {/* Preview */}
      <div>
        <p className="mb-2.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">Preview</p>
        <div className="flex min-h-11 items-center rounded-xl border bg-muted/30 px-4">
          {allKeys.length > 0 ? (
            <KbdGroup>
              {allKeys.map((k, i) => <Kbd key={i}>{k}</Kbd>)}
            </KbdGroup>
          ) : (
            <span className="text-xs text-muted-foreground">Select modifiers or enter a key</span>
          )}
        </div>
      </div>

      {/* JSX output */}
      {jsxCode && (
        <div>
          <p className="mb-2.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">JSX Code</p>
          <div className="relative overflow-hidden rounded-xl border bg-muted/40">
            <pre className="p-3 pr-10 font-mono text-xs text-foreground/80 whitespace-pre-wrap">{jsxCode}</pre>
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-1.5 top-1.5 size-7 cursor-pointer"
              onClick={handleCopy}
            >
              {copied
                ? <CheckIcon className="size-3.5 text-teal-400" />
                : <CopyIcon className="size-3.5" />
              }
            </Button>
          </div>
        </div>
      )}

      {/* Reset */}
      <Button
        variant="outline"
        size="sm"
        className="w-full gap-1.5 cursor-pointer"
        onClick={() => { setSelected([]); setKey('') }}
        disabled={allKeys.length === 0}
      >
        <RotateCcwIcon className="size-3.5" />
        Reset
      </Button>
    </div>
  )
}

export default KbdGeneratorDemo
