'use client'

import { useEffect, useId, useRef, useState } from 'react'

import { SearchIcon, XIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Kbd, KbdGroup } from '@/components/ui/kbd'
import { Label } from '@/components/ui/label'
import { Spinner } from '@/components/ui/spinner'

const items = [
  'Accordion',
  'Alert',
  'Avatar',
  'Badge',
  'Button',
  'Button Group',
  'Calendar',
  'Card',
  'Checkbox',
  'Combobox',
  'Dialog',
  'Input',
  'Select',
  'Tabs',
  'Tooltip'
]

const InputSearchShortcutDemo = () => {
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isMac, setIsMac] = useState(true)

  const inputRef = useRef<HTMLInputElement>(null)

  const id = useId()
  const statusId = `${id}-status`

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.userAgent))

    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        inputRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (!query) {
      setIsLoading(false)
      return
    }
    setIsLoading(true)
    const timeout = setTimeout(() => setIsLoading(false), 600)
    return () => clearTimeout(timeout)
  }, [query])

  const results = items.filter(item => item.toLowerCase().includes(query.trim().toLowerCase()))

  const handleClear = () => {
    setQuery('')
    inputRef.current?.focus()
  }

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Search components</Label>
      <div className='relative'>
        <SearchIcon
          aria-hidden='true'
          className='text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2'
        />
        <Input
          ref={inputRef}
          id={id}
          type='text'
          role='searchbox'
          enterKeyHint='search'
          autoComplete='off'
          placeholder='Search...'
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Escape') {
              if (query) setQuery('')
              else e.currentTarget.blur()
            }
          }}
          aria-describedby={statusId}
          aria-keyshortcuts='Meta+K Control+K'
          className='pr-16 pl-8'
        />
        <div className='absolute inset-y-0 right-0 flex items-center pr-1.5'>
          {isLoading ? (
            <Spinner aria-hidden='true' className='text-muted-foreground mr-1 size-4' />
          ) : query ? (
            <Button
              variant='ghost'
              size='icon-xs'
              onClick={handleClear}
              aria-label='Clear search'
              className='text-muted-foreground cursor-pointer'
            >
              <XIcon />
            </Button>
          ) : (
            <KbdGroup aria-hidden='true'>
              <Kbd>{isMac ? '⌘' : 'Ctrl'}</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
          )}
        </div>
      </div>
      <p id={statusId} aria-live='polite' className='text-muted-foreground text-xs'>
        {!query
          ? `Press ${isMac ? '⌘' : 'Ctrl'} K to search from anywhere`
          : isLoading
            ? 'Searching...'
            : results.length
              ? `${results.length} ${results.length === 1 ? 'result' : 'results'}: ${results.slice(0, 3).join(', ')}${results.length > 3 ? '...' : ''}`
              : `No results for "${query}"`}
      </p>
    </div>
  )
}

export default InputSearchShortcutDemo
