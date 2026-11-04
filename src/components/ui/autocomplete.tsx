'use client'

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
  type ReactNode
} from 'react'
import { createPortal } from 'react-dom'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { CircleXIcon, SearchIcon } from 'lucide-react'

// -- Types --

interface ItemMeta {
  value: string
  label: string
  disabled?: boolean
}

interface AutocompleteCtx {
  open: boolean
  setOpen: (v: boolean) => void
  inputValue: string
  setInputValue: (v: string) => void
  selectedValue: string | null
  selectedLabel: string | null
  highlightedValue: string | null
  setHighlightedValue: (v: string | null) => void
  disabled: boolean
  inputWrapperRef: React.RefObject<HTMLDivElement | null>
  inputRef: React.RefObject<HTMLInputElement | null>
  popupRef: React.RefObject<HTMLDivElement | null>
  itemsRef: React.MutableRefObject<ItemMeta[]>
  registerItem: (item: ItemMeta) => void
  unregisterItem: (value: string) => void
  selectItem: (value: string, label: string) => void
  clearSelection: () => void
  highlightNext: () => void
  highlightPrev: () => void
  selectHighlighted: () => void
  onValueChange?: (v: string | null) => void
}

const AutocompleteCtx = createContext<AutocompleteCtx | null>(null)

const useAc = (): AutocompleteCtx => {
  const ctx = useContext(AutocompleteCtx)
  if (!ctx) throw new Error('Must be used inside <Autocomplete>')
  return ctx
}

// -- Root --

interface AutocompleteProps {
  children: ReactNode
  defaultValue?: string
  value?: string | null
  onValueChange?: (v: string | null) => void
  defaultInputValue?: string
  onInputValueChange?: (v: string) => void
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (v: boolean) => void
  disabled?: boolean
}

const Autocomplete = ({
  children,
  defaultValue,
  value: valueProp,
  onValueChange,
  defaultInputValue = '',
  onInputValueChange,
  defaultOpen = false,
  open: openProp,
  onOpenChange,
  disabled = false
}: AutocompleteProps) => {
  const [openState, setOpenState] = useState(defaultOpen)
  const [inputValue, setInputValueState] = useState(defaultInputValue)
  const [selectedValue, setSelectedValue] = useState<string | null>(defaultValue ?? null)
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null)
  const [highlightedValue, setHighlightedValue] = useState<string | null>(null)

  const itemsRef = useRef<ItemMeta[]>([])
  const inputWrapperRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const popupRef = useRef<HTMLDivElement | null>(null)

  const isOpen = openProp !== undefined ? openProp : openState
  const resolvedValue = valueProp !== undefined ? valueProp : selectedValue

  const setOpen = useCallback(
    (v: boolean) => {
      if (openProp === undefined) setOpenState(v)
      onOpenChange?.(v)
    },
    [openProp, onOpenChange]
  )

  const setInputValue = useCallback(
    (v: string) => {
      setInputValueState(v)
      onInputValueChange?.(v)
    },
    [onInputValueChange]
  )

  const registerItem = useCallback((item: ItemMeta) => {
    if (!itemsRef.current.some(i => i.value === item.value)) {
      itemsRef.current = [...itemsRef.current, item]
    }
  }, [])

  const unregisterItem = useCallback((value: string) => {
    itemsRef.current = itemsRef.current.filter(i => i.value !== value)
  }, [])

  const selectItem = useCallback(
    (value: string, label: string) => {
      if (valueProp === undefined) setSelectedValue(value)
      setSelectedLabel(label)
      setInputValue(label)
      setOpen(false)
      setHighlightedValue(null)
      onValueChange?.(value)
    },
    [valueProp, setInputValue, setOpen, onValueChange]
  )

  const clearSelection = useCallback(() => {
    if (valueProp === undefined) setSelectedValue(null)
    setSelectedLabel(null)
    setInputValue('')
    onValueChange?.(null)
    inputRef.current?.focus()
  }, [valueProp, setInputValue, onValueChange])

  const highlightNext = useCallback(() => {
    const items = itemsRef.current.filter(i => !i.disabled)
    if (!items.length) return
    const idx = items.findIndex(i => i.value === highlightedValue)
    setHighlightedValue(items[(idx + 1) % items.length].value)
  }, [highlightedValue])

  const highlightPrev = useCallback(() => {
    const items = itemsRef.current.filter(i => !i.disabled)
    if (!items.length) return
    const idx = items.findIndex(i => i.value === highlightedValue)
    setHighlightedValue(items[(idx - 1 + items.length) % items.length].value)
  }, [highlightedValue])

  const selectHighlighted = useCallback(() => {
    if (!highlightedValue) return
    const item = itemsRef.current.find(i => i.value === highlightedValue)
    if (item && !item.disabled) selectItem(item.value, item.label)
  }, [highlightedValue, selectItem])

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: MouseEvent) => {
      const t = e.target as Node
      if (!popupRef.current?.contains(t) && !inputWrapperRef.current?.contains(t)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [isOpen, setOpen])

  return (
    <AutocompleteCtx.Provider
      value={{
        open: isOpen,
        setOpen,
        inputValue,
        setInputValue,
        selectedValue: resolvedValue ?? null,
        selectedLabel,
        highlightedValue,
        setHighlightedValue,
        disabled,
        inputWrapperRef,
        inputRef,
        popupRef,
        itemsRef,
        registerItem,
        unregisterItem,
        selectItem,
        clearSelection,
        highlightNext,
        highlightPrev,
        selectHighlighted,
        onValueChange
      }}
    >
      {children}
    </AutocompleteCtx.Provider>
  )
}

// -- Value --

const AutocompleteValue = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  const { selectedLabel } = useAc()
  return (
    <span data-slot='autocomplete-value' className={className} {...props}>
      {selectedLabel}
    </span>
  )
}

// -- Input --

const inputVariants = cva(
  'text-foreground placeholder:text-muted-foreground [[readonly]]:bg-muted/80 border-input focus-visible:border-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 dark:bg-input/30 focus-visible:ring-ring/50 flex w-full rounded-lg border bg-transparent text-sm transition-colors outline-none focus-visible:ring-3 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 [[readonly]]:cursor-not-allowed',
  {
    variants: {
      size: {
        sm: 'h-7 px-2 [&~[data-slot=autocomplete-clear]]:right-1.5 [&~[data-slot=autocomplete-trigger]]:right-1.5',
        default:
          'h-8 px-2.5 [&~[data-slot=autocomplete-clear]]:right-1.75 [&~[data-slot=autocomplete-trigger]]:right-1.75',
        lg: 'h-9 px-2.5 [&~[data-slot=autocomplete-clear]]:right-2 [&~[data-slot=autocomplete-trigger]]:right-2'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

interface AutocompleteInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'onChange'>,
    VariantProps<typeof inputVariants> {
  showClear?: boolean
  showTrigger?: boolean
}

const AutocompleteInput = ({
  className,
  size = 'default',
  showClear = false,
  showTrigger = false,
  onFocus,
  onKeyDown,
  ...props
}: AutocompleteInputProps) => {
  const { open, setOpen, inputValue, setInputValue, inputWrapperRef, inputRef, disabled, highlightNext, highlightPrev, selectHighlighted } =
    useAc()

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        if (!open) setOpen(true)
        highlightNext()
        break
      case 'ArrowUp':
        e.preventDefault()
        if (!open) setOpen(true)
        highlightPrev()
        break
      case 'Enter':
        e.preventDefault()
        if (open) selectHighlighted()
        break
      case 'Escape':
        e.preventDefault()
        setOpen(false)
        break
      case 'Tab':
        setOpen(false)
        break
    }
    onKeyDown?.(e)
  }

  return (
    <div ref={inputWrapperRef} className='relative w-full'>
      <input
        ref={inputRef}
        data-slot='autocomplete-input'
        data-size={size}
        role='combobox'
        aria-expanded={open}
        aria-autocomplete='list'
        aria-haspopup='listbox'
        disabled={disabled}
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value)
          if (!open) setOpen(true)
        }}
        onFocus={e => {
          onFocus?.(e)
        }}
        onKeyDown={handleKeyDown}
        className={cn(inputVariants({ size }), className)}
        {...props}
      />
      {showTrigger && <AutocompleteTrigger />}
      {showClear && <AutocompleteClear />}
    </div>
  )
}

// -- Status --

const AutocompleteStatus = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      data-slot='autocomplete-status'
      className={cn('text-muted-foreground px-2 py-1.5 text-sm empty:m-0 empty:p-0', className)}
      {...props}
    />
  )
}

// -- Portal --

interface AutocompletePortalProps {
  children: ReactNode
  container?: HTMLElement | null
}

const AutocompletePortal = ({ children, container }: AutocompletePortalProps) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return createPortal(children, container ?? document.body)
}

// -- Backdrop --

const AutocompleteBackdrop = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      data-slot='autocomplete-backdrop'
      className={cn('fixed inset-0 z-50', className)}
      {...props}
    />
  )
}

// -- Positioner --

interface AutocompletePositionerProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'end' | 'center'
  sideOffset?: number
  alignOffset?: number
  side?: 'top' | 'bottom'
  anchor?: React.RefObject<HTMLElement | null>
}

const AutocompletePositioner = ({
  className,
  children,
  align = 'start',
  sideOffset = 4,
  alignOffset = 0,
  side = 'bottom',
  anchor: anchorProp,
  style: styleProp,
  ...props
}: AutocompletePositionerProps) => {
  const { inputWrapperRef, open } = useAc()
  const [posStyle, setPosStyle] = useState<React.CSSProperties>({})
  const anchorRef = anchorProp ?? inputWrapperRef

  const updatePosition = useCallback(() => {
    const el = anchorRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const s: React.CSSProperties = { position: 'fixed', width: rect.width }

    if (side === 'bottom') {
      s.top = rect.bottom + sideOffset
    } else {
      s.bottom = window.innerHeight - rect.top + sideOffset
    }

    if (align === 'start') {
      s.left = rect.left + alignOffset
    } else if (align === 'end') {
      s.right = window.innerWidth - rect.right + alignOffset
    } else {
      s.left = rect.left + rect.width / 2 + alignOffset
      s.transform = 'translateX(-50%)'
    }

    setPosStyle(s)
  }, [anchorRef, side, sideOffset, align, alignOffset])

  useEffect(() => {
    if (!open) return
    updatePosition()
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition, true)
    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition, true)
    }
  }, [open, updatePosition])

  return (
    <div
      data-slot='autocomplete-positioner'
      className={cn('z-50 outline-none', className)}
      style={{ ...posStyle, ...styleProp }}
      {...props}
    >
      {children}
    </div>
  )
}

// -- Content --

export interface AutocompleteContentProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: AutocompletePositionerProps['align']
  sideOffset?: AutocompletePositionerProps['sideOffset']
  alignOffset?: AutocompletePositionerProps['alignOffset']
  side?: AutocompletePositionerProps['side']
  anchor?: AutocompletePositionerProps['anchor']
  showBackdrop?: boolean
}

const AutocompleteContent = ({
  className,
  children,
  showBackdrop = false,
  align = 'start',
  sideOffset = 4,
  alignOffset = 0,
  side = 'bottom',
  anchor,
  ...props
}: AutocompleteContentProps) => {
  const { open, popupRef } = useAc()

  if (!open) return null

  return (
    <AutocompletePortal>
      <div ref={popupRef}>
        {showBackdrop && <AutocompleteBackdrop />}
        <AutocompletePositioner
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          side={side}
          anchor={anchor}
        >
          <div
            data-slot='autocomplete-popup'
            className={cn(
              'text-popover-foreground ring-foreground/10 bg-background flex max-h-96 w-full flex-col overflow-hidden rounded-lg py-0.5 shadow-md ring-1',
              'animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-300 ease-out',
              className
            )}
            {...props}
          >
            {children}
          </div>
        </AutocompletePositioner>
      </div>
    </AutocompletePortal>
  )
}

// -- List --

interface AutocompleteListProps extends React.HTMLAttributes<HTMLDivElement> {}

const AutocompleteList = ({ className, ...props }: AutocompleteListProps) => {
  return (
    <div
      data-slot='autocomplete-list'
      role='listbox'
      className={cn(
        'max-h-96 overflow-y-auto overscroll-contain scroll-py-1 not-empty:px-1 not-empty:py-1',
        '[scrollbar-width:thin] [scrollbar-color:var(--muted-foreground)_transparent]',
        '[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent',
        '[&::-webkit-scrollbar-button]:hidden',
        '[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-muted-foreground/30',
        '[&::-webkit-scrollbar-thumb:hover]:bg-muted-foreground/60',
        className
      )}
      {...props}
    />
  )
}

// -- Collection --

const AutocompleteCollection = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div data-slot='autocomplete-collection' className={className} {...props} />
}

// -- Row --

const AutocompleteRow = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      data-slot='autocomplete-row'
      className={cn('flex items-center gap-2', className)}
      {...props}
    />
  )
}

// -- Item --

interface AutocompleteItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  label?: string
  disabled?: boolean
}

const AutocompleteItem = ({
  className,
  value,
  label: labelProp,
  disabled = false,
  children,
  ...props
}: AutocompleteItemProps) => {
  const { selectedValue, highlightedValue, setHighlightedValue, selectItem, registerItem, unregisterItem } =
    useAc()
  const itemRef = useRef<HTMLDivElement>(null)

  const label = labelProp ?? (typeof children === 'string' ? children : value)

  useEffect(() => {
    registerItem({ value, label, disabled })
    return () => unregisterItem(value)
  }, [value, label, disabled, registerItem, unregisterItem])

  const isHighlighted = highlightedValue === value
  const isSelected = selectedValue === value

  useEffect(() => {
    if (isHighlighted) {
      itemRef.current?.scrollIntoView({ block: 'nearest' })
    }
  }, [isHighlighted])

  return (
    <div
      ref={itemRef}
      role='option'
      aria-selected={isSelected}
      aria-disabled={disabled || undefined}
      data-slot='autocomplete-item'
      data-highlighted={isHighlighted || undefined}
      data-selected={isSelected || undefined}
      data-disabled={disabled || undefined}
      onMouseEnter={() => !disabled && setHighlightedValue(value)}
      onMouseLeave={() => setHighlightedValue(null)}
      onClick={() => {
        if (!disabled) selectItem(value, label)
      }}
      className={cn(
        "text-foreground data-highlighted:text-foreground data-highlighted:before:bg-accent relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden transition-colors select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:relative data-highlighted:z-0 data-highlighted:before:absolute data-highlighted:before:inset-x-0 data-highlighted:before:inset-y-0 data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([role=img]):not([class*=text-])]:opacity-60",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// -- Group --

const AutocompleteGroup = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div data-slot='autocomplete-group' role='group' className={className} {...props} />
}

// -- GroupLabel --

const AutocompleteGroupLabel = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      data-slot='autocomplete-group-label'
      className={cn('text-muted-foreground px-1.5 py-1 text-xs font-medium', className)}
      {...props}
    />
  )
}

// -- Empty --

const AutocompleteEmpty = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      data-slot='autocomplete-empty'
      className={cn('text-muted-foreground px-2 py-1.5 text-center text-sm empty:m-0 empty:p-0', className)}
      {...props}
    />
  )
}

// -- Clear --

const AutocompleteClear = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { clearSelection, selectedValue, inputValue } = useAc()

  if (!selectedValue && !inputValue) return null

  return (
    <button
      type='button'
      data-slot='autocomplete-clear'
      onClick={clearSelection}
      aria-label='Clear'
      className={cn(
        'ring-offset-background focus:ring-ring absolute top-1/2 -translate-y-1/2 cursor-pointer opacity-70 transition-opacity hover:opacity-100 focus:ring-0 focus:ring-offset-0 focus:outline-none disabled:pointer-events-none',
        className
      )}
      {...props}
    >
      <CircleXIcon className='size-4' />
    </button>
  )
}

// -- Trigger --

const AutocompleteTrigger = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { open, setOpen } = useAc()

  return (
    <button
      type='button'
      data-slot='autocomplete-trigger'
      onClick={() => setOpen(!open)}
      aria-label='Toggle suggestions'
      className={cn(
        'focus:ring-ring ring-offset-background absolute top-1/2 -translate-y-1/2 cursor-pointer focus:ring-0 focus:ring-offset-0 focus:outline-none disabled:pointer-events-none has-[+[data-slot=autocomplete-clear]]:hidden',
        className
      )}
      {...props}
    >
      <SearchIcon className='size-4 opacity-70' />
    </button>
  )
}

// -- Arrow --

const AutocompleteArrow = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div data-slot='autocomplete-arrow' className={className} {...props} />
}

// -- Separator --

const AutocompleteSeparator = ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => {
  return (
    <hr
      data-slot='autocomplete-separator'
      className={cn('bg-border my-1.5 h-px border-none', className)}
      {...props}
    />
  )
}

export {
  Autocomplete,
  AutocompleteValue,
  AutocompleteTrigger,
  AutocompleteInput,
  AutocompleteStatus,
  AutocompletePortal,
  AutocompleteBackdrop,
  AutocompletePositioner,
  AutocompleteContent,
  AutocompleteList,
  AutocompleteCollection,
  AutocompleteRow,
  AutocompleteItem,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteEmpty,
  AutocompleteClear,
  AutocompleteArrow,
  AutocompleteSeparator
}
