'use client'

import { useEffect, useId, useRef, useState } from 'react'

import { CheckIcon, PencilIcon, XIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const InputInlineEditDemo = () => {
  const [value, setValue] = useState('Marketing Website')
  const [draft, setDraft] = useState(value)
  const [isEditing, setIsEditing] = useState(false)
  const [error, setError] = useState('')
  const [saved, setSaved] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const editButtonRef = useRef<HTMLButtonElement>(null)
  const closingRef = useRef(false)

  const id = useId()
  const labelId = `${id}-label`
  const errorId = `${id}-error`

  useEffect(() => {
    if (isEditing) inputRef.current?.select()
  }, [isEditing])

  useEffect(() => {
    if (!saved) return
    const timeout = setTimeout(() => setSaved(false), 2000)
    return () => clearTimeout(timeout)
  }, [saved])

  const startEditing = () => {
    closingRef.current = false
    setDraft(value)
    setError('')
    setIsEditing(true)
  }

  const finishEditing = (restoreFocus = true) => {
    closingRef.current = true
    setIsEditing(false)
    setError('')
    if (restoreFocus) requestAnimationFrame(() => editButtonRef.current?.focus())
  }

  const save = (fromBlur = false) => {
    if (closingRef.current) return
    const next = draft.trim()
    if (!next) {
      // Clicking away from an empty field restores the previous value instead of trapping focus.
      if (fromBlur) return finishEditing(false)
      setError('Name cannot be empty.')
      inputRef.current?.focus()
      return
    }
    if (next !== value) {
      setValue(next)
      setSaved(true)
    }
    finishEditing(!fromBlur)
  }

  return (
    <div className='w-full max-w-xs space-y-2'>
      <p id={labelId} className='text-sm font-medium'>
        Project name
      </p>

      {isEditing ? (
        <div className='space-y-1.5'>
          <div className='flex items-center gap-1'>
            <Input
              ref={inputRef}
              value={draft}
              onChange={e => {
                setDraft(e.target.value)
                if (error) setError('')
              }}
              onKeyDown={e => {
                if (e.key === 'Enter') save()
                if (e.key === 'Escape') finishEditing()
              }}
              onBlur={() => save(true)}
              aria-labelledby={labelId}
              aria-invalid={!!error || undefined}
              aria-describedby={error ? errorId : undefined}
              maxLength={60}
            />
            <Button
              variant='ghost'
              size='icon'
              onMouseDown={e => e.preventDefault()}
              onClick={() => save()}
              aria-label='Save'
              className='shrink-0 cursor-pointer text-teal-400 hover:text-teal-400'
            >
              <CheckIcon />
            </Button>
            <Button
              variant='ghost'
              size='icon'
              onMouseDown={e => e.preventDefault()}
              onClick={() => finishEditing()}
              aria-label='Cancel'
              className='text-muted-foreground shrink-0 cursor-pointer'
            >
              <XIcon />
            </Button>
          </div>
          {error ? (
            <p id={errorId} className='text-destructive text-xs'>
              {error}
            </p>
          ) : (
            <p className='text-muted-foreground text-xs'>Press Enter to save, Esc to cancel.</p>
          )}
        </div>
      ) : (
        <div className='space-y-1.5'>
          <button
            ref={editButtonRef}
            type='button'
            onClick={startEditing}
            aria-label={`Edit project name, ${value}`}
            className='group flex h-8 w-full cursor-pointer items-center justify-between gap-2 rounded-lg border border-input px-2.5 text-left text-sm outline-none transition-colors hover:bg-muted/50 dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50'
          >
            <span className='truncate'>{value}</span>
            <PencilIcon
              aria-hidden='true'
              className='text-muted-foreground size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100'
            />
          </button>
          <p aria-live='polite' className='text-muted-foreground flex h-4 items-center gap-1 text-xs'>
            {saved ? (
              <>
                <CheckIcon aria-hidden='true' className='size-3 text-teal-400' />
                Saved
              </>
            ) : (
              'Click to rename'
            )}
          </p>
        </div>
      )}
    </div>
  )
}

export default InputInlineEditDemo
