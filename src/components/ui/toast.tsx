"use client"

import React, {
  useCallback,
  useState,
  useSyncExternalStore,
  useEffect,
  useLayoutEffect,
  isValidElement,
  useRef,
} from "react"
import { createPortal } from "react-dom"
import { createRoot } from "react-dom/client"
import { AnimatePresence, motion } from "motion/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  XIcon,
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon,
} from "lucide-react"

type ToastType =
  | "default"
  | "success"
  | "error"
  | "info"
  | "warning"
  | "loading"

type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"

type ToastMessage = React.ReactNode

type ToastCustomRender = (id: string) => ToastMessage

interface ToastAction {
  label: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  dismiss?: boolean
}

interface ToastOptions {
  id?: string
  type?: ToastType
  title?: ToastMessage
  description?: ToastMessage
  custom?: ToastMessage | ToastCustomRender
  duration?: number
  position?: ToastPosition
  action?: ToastAction
  cancel?: ToastAction
  icon?: React.ReactNode
  closeButton?: boolean
  dismissible?: boolean
  onDismiss?: (id: string) => void
  className?: string
}

interface ToastData extends Omit<ToastOptions, "id" | "type" | "custom"> {
  id: string
  type: ToastType
  custom?: ToastMessage
  createdAt: number
}

interface ToasterProps {
  position?: ToastPosition
  duration?: number
  gap?: number
  offset?: number | Partial<Record<"top" | "right" | "bottom" | "left", number>>
  closeButton?: boolean
  dismissible?: boolean
  icons?: Partial<Record<Exclude<ToastType, "default">, React.ReactNode>>
  toastOptions?: Omit<ToastOptions, "id" | "title" | "type">
  className?: string
  autoMount?: boolean
}

interface PromiseToastData<Value> {
  loading?: ToastMessage | Omit<ToastOptions, "id" | "type">
  success?:
  | ToastMessage
  | Omit<ToastOptions, "id" | "type">
  | ((result: Value) => ToastMessage | Omit<ToastOptions, "id" | "type">)
  error?:
  | ToastMessage
  | Omit<ToastOptions, "id" | "type">
  | ((error: unknown) => ToastMessage | Omit<ToastOptions, "id" | "type">)
}

type ToastCustom = ToastMessage | ((id: string) => ToastMessage)

const defaultIcons: Record<
  Exclude<ToastType, "default">,
  React.ReactNode
> = {
  success: <CircleCheckIcon aria-hidden="true" />,
  info: <InfoIcon aria-hidden="true" />,
  warning: <TriangleAlertIcon aria-hidden="true" />,
  error: <OctagonXIcon className="text-destructive" aria-hidden="true" />,
  loading: <Loader2Icon className="animate-spin" aria-hidden="true" />,
}

const MAX_VISIBLE_TOASTS = 3
const COLLAPSED_PEEK = 14
const SCALE_STEP = 0.06
const TOAST_WIDTH = 380

let toastCounter = 0
let defaultOptions: Partial<ToastOptions> = {}
let inheritPosition: ToastOptions["position"] | undefined
let toastState: ToastData[] = []
let registeredToasters = 0
let autoRoot: ReturnType<typeof createRoot> | null = null
let autoContainer: HTMLDivElement | null = null
let autoMounted = false
let autoConfig: ToasterProps = {}
const listeners = new Set<() => void>()

function emit() {
  for (const listener of listeners) listener()
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

function getSnapshot() {
  return toastState
}

function ensureMount() {
  if (typeof document === "undefined") return
  if (registeredToasters > 0 || autoMounted) return

  autoMounted = true
  const container = document.createElement("div")
  autoContainer = container
  document.body.appendChild(container)
  autoRoot = createRoot(container)
  autoRoot.render(<Toaster autoMount {...autoConfig} />)
}

function configure(options: ToasterProps) {
  autoConfig = options
  defaultOptions = {
    position: options.position,
    duration: options.duration,
    closeButton: options.closeButton,
    dismissible: options.dismissible,
    ...options.toastOptions,
  }
  if (autoRoot && autoMounted) {
    autoRoot.render(<Toaster autoMount {...autoConfig} />)
  }
}

function generateId() {
  toastCounter += 1
  return `toast-${toastCounter}`
}

function isToastMessage(
  value: ToastMessage | ToastOptions
): boolean {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    isValidElement(value as React.ReactNode)
  )
}

function removeToast(id: string) {
  const item = toastState.find((toastItem) => toastItem.id === id)
  item?.onDismiss?.(id)
  toastState = toastState.filter((toastItem) => toastItem.id !== id)
  emit()
}

function resolveData(
  value: ToastMessage | Omit<ToastOptions, "id" | "type">
): ToastOptions {
  return isToastMessage(value as ToastMessage)
    ? { title: value as ToastMessage }
    : (value as ToastOptions)
}

function add(
  input: ToastMessage | ToastOptions,
  options?: ToastOptions
): string {
  ensureMount()
  const isMessage = isToastMessage(input)
  const resolved = isMessage
    ? { title: input as ToastMessage }
    : (input as ToastOptions)
  const merged: ToastOptions = {
    ...defaultOptions,
    ...resolved,
    ...(isMessage ? options : undefined),
  }
  const explicitPosition = isMessage ? options?.position : resolved.position
  const position = explicitPosition ?? inheritPosition
  if (position !== undefined) merged.position = position
  inheritPosition = undefined
  const id = merged.id ?? generateId()
  const existing = toastState.find((toastItem) => toastItem.id === id)

  const next: ToastData = {
    id,
    type: merged.type ?? "default",
    title: merged.title,
    description: merged.description,
    custom:
      typeof merged.custom === "function"
        ? (merged.custom as (id: string) => ToastMessage)(id)
        : merged.custom,
    duration: merged.duration,
    position: merged.position,
    action: merged.action,
    cancel: merged.cancel,
    icon: merged.icon,
    closeButton: merged.closeButton,
    dismissible: merged.dismissible,
    onDismiss: merged.onDismiss,
    className: merged.className,
    createdAt: existing ? existing.createdAt : Date.now(),
  }

  toastState = existing
    ? toastState.map((toastItem) =>
      toastItem.id === id
        ? { ...toastItem, ...next, createdAt: toastItem.createdAt }
        : toastItem
    )
    : [...toastState, next]
  emit()
  return id
}

function update(id: string, options: Omit<ToastOptions, "id">) {
  const existing = toastState.find((toastItem) => toastItem.id === id)
  if (!existing) return
  toastState = toastState.map((toastItem) =>
    toastItem.id === id
      ? {
        ...toastItem,
        ...options,
        id,
        type: options.type ?? toastItem.type,
        custom:
          typeof options.custom === "function"
            ? (options.custom as ToastCustomRender)(id)
            : (options.custom ?? toastItem.custom),
      }
      : toastItem
  )
  emit()
}

function dismiss(id?: string) {
  if (!id) {
    toastState = []
    emit()
    return
  }
  removeToast(id)
}

function promise<Value>(
  promise: Promise<Value>,
  data: PromiseToastData<Value>,
  options?: Omit<ToastOptions, "id" | "title" | "type">
): Promise<Value> {
  const loading = resolveData(data.loading ?? "Loading...")
  const id = add({
    ...options,
    ...loading,
    type: "loading",
    duration: loading.duration ?? options?.duration ?? Infinity,
  })

  promise
    .then((result) => {
      const resolved = resolveData(
        typeof data.success === "function"
          ? data.success(result)
          : (data.success ?? "Done")
      )
      update(id, {
        ...options,
        ...resolved,
        type: "success",
        duration:
          resolved.duration ?? options?.duration ?? defaultOptions.duration ?? 5000,
      })
    })
    .catch((error) => {
      const resolved = resolveData(
        typeof data.error === "function"
          ? data.error(error)
          : (data.error ?? "Something went wrong")
      )
      update(id, {
        ...options,
        ...resolved,
        type: "error",
        duration:
          resolved.duration ?? options?.duration ?? defaultOptions.duration ?? 5000,
      })
    })

  return promise
}

function success(
  message: ToastMessage,
  options?: Omit<ToastOptions, "type">
) {
  return add(message, { ...options, type: "success" })
}

function error(message: ToastMessage, options?: Omit<ToastOptions, "type">) {
  return add(message, { ...options, type: "error" })
}

function info(message: ToastMessage, options?: Omit<ToastOptions, "type">) {
  return add(message, { ...options, type: "info" })
}

function warning(message: ToastMessage, options?: Omit<ToastOptions, "type">) {
  return add(message, { ...options, type: "warning" })
}

function loading(message: ToastMessage, options?: Omit<ToastOptions, "type">) {
  return add(message, {
    ...options,
    type: "loading",
    duration: options?.duration ?? Infinity,
  })
}

function custom(
  content: ToastCustom,
  options?: Omit<ToastOptions, "title" | "type">
) {
  return add({ custom: content, ...options })
}

const toast = {
  add,
  update,
  dismiss,
  close: dismiss,
  promise,
  success,
  error,
  info,
  warning,
  loading,
  custom,
  configure,
}

function getOffsetStyle(
  position: ToastPosition,
  offset: NonNullable<ToasterProps["offset"]>
): React.CSSProperties {
  const resolved =
    typeof offset === "number"
      ? { top: offset, right: offset, bottom: offset, left: offset }
      : { top: 16, right: 16, bottom: 16, left: 16, ...offset }

  const style: React.CSSProperties = {}
  if (position.startsWith("top")) style.top = resolved.top
  else style.bottom = resolved.bottom

  if (position.endsWith("left")) style.left = resolved.left
  else if (position.endsWith("right")) style.right = resolved.right
  else {
    style.left = "50%"
    style.transform = "translateX(-50%)"
  }
  return style
}

function groupToasts(
  toasts: ToastData[],
  defaultPosition: ToastPosition
): Map<ToastPosition, ToastData[]> {
  const groups = new Map<ToastPosition, ToastData[]>()
  for (const item of toasts) {
    const pos = item.position ?? defaultPosition
    const group = groups.get(pos)
    if (group) group.push(item)
    else groups.set(pos, [item])
  }
  return groups
}

function ToastCard({
  item,
  position,
  icons,
  y,
  scale,
  zIndex,
  hidden,
  onHeightChange,
  onUnmount,
}: {
  item: ToastData
  position: ToastPosition
  icons?: ToasterProps["icons"]
  y: number
  scale: number
  zIndex: number
  hidden: boolean
  onHeightChange: (id: string, height: number) => void
  onUnmount: (id: string) => void
}) {
  const duration = item.duration ?? defaultOptions.duration ?? 5000
  const autoDismiss = duration > 0 && duration !== Infinity
  const closeButton = item.closeButton ?? defaultOptions.closeButton ?? false
  const dismissible = item.dismissible ?? defaultOptions.dismissible ?? true

  const pausedRef = useRef(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const cardRef = useRef<HTMLDivElement | null>(null)

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const armTimer = useCallback(() => {
    clearTimer()
    if (!autoDismiss || pausedRef.current) return
    timerRef.current = setTimeout(() => removeToast(item.id), duration)
  }, [autoDismiss, clearTimer, duration, item.id])

  useEffect(() => {
    armTimer()
    return clearTimer
  }, [armTimer, clearTimer])

  const pause = useCallback(() => {
    pausedRef.current = true
    clearTimer()
  }, [clearTimer])

  const resume = useCallback(() => {
    pausedRef.current = false
    armTimer()
  }, [armTimer])

  useLayoutEffect(() => {
    const node = cardRef.current
    if (!node) return
    const report = () => onHeightChange(item.id, node.offsetHeight)
    report()
    if (typeof ResizeObserver === "undefined") return
    const observer = new ResizeObserver(report)
    observer.observe(node)
    return () => observer.disconnect()
  }, [item.id, onHeightChange])

  useEffect(() => {
    return () => onUnmount(item.id)
  }, [item.id, onUnmount])

  const isTop = position.startsWith("top")
  const isLeft = position.endsWith("left")
  const isCenter = position.endsWith("center")
  const restY = isTop ? y : -y

  // Left/right toasts slide in from their edge of the screen; center toasts
  // slide in from the top/bottom edge instead, since they have no side.
  const offScreenY = isTop ? "-100%" : "100%"
  const enterY = isCenter ? `calc(${offScreenY} + ${restY}px)` : restY
  const exitY = enterY
  const restYValue = isCenter ? `calc(0% + ${restY}px)` : restY
  const enterX = isCenter ? 0 : isLeft ? "-100%" : "100%"
  const exitX = enterX

  const icon =
    item.icon ??
    (item.type !== "default"
      ? (icons?.[item.type] ?? defaultIcons[item.type])
      : null)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: enterX, y: enterY, scale: scale * 0.95 }}
      animate={{ opacity: hidden ? 0 : 1, x: 0, y: restYValue, scale, zIndex }}
      exit={{ opacity: 0, x: exitX, y: exitY, scale: scale * 0.9 }}
      transition={{ type: "spring", stiffness: 320, damping: 30 }}
      drag={dismissible ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={{ left: 0.4, right: 0.4 }}
      dragSnapToOrigin
      onDragEnd={(_event, info) => {
        if (dismissible && Math.abs(info.offset.x) > 120) {
          removeToast(item.id)
        }
      }}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      style={{
        position: "absolute",
        left: 0,
        width: "100%",
        [isTop ? "top" : "bottom"]: 0,
        pointerEvents: hidden ? "none" : "auto",
      }}
      className={cn(
        "cursor-default select-none outline-none",
        item.custom
          ? "overflow-visible"
          : "flex items-start gap-3 overflow-hidden rounded-2xl border bg-popover p-4 text-popover-foreground shadow-lg",
        item.className
      )}
    >
      {item.custom ? (
        item.custom
      ) : (
        <>
          {icon ? (
            <span className="shrink-0 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4">
              {icon}
            </span>
          ) : null}
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            {item.title ? (
              <div className="text-sm font-medium">{item.title}</div>
            ) : null}
            {item.description ? (
              <div className="text-sm text-muted-foreground">
                {item.description}
              </div>
            ) : null}
          </div>
          {item.action || item.cancel ? (
            <div className="flex shrink-0 items-center gap-2">
              {item.cancel ? (
                <Button
                  variant="ghost"
                  size="sm"
                  className="shrink-0"
                  onClick={(event) => {
                    inheritPosition = item.position
                    item.cancel?.onClick(event)
                    inheritPosition = undefined
                    removeToast(item.id)
                  }}
                >
                  {item.cancel.label}
                </Button>
              ) : null}
              {item.action ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="shrink-0"
                  onClick={(event) => {
                    inheritPosition = item.position
                    item.action?.onClick(event)
                    inheritPosition = undefined
                    if (item.action?.dismiss) removeToast(item.id)
                  }}
                >
                  {item.action.label}
                </Button>
              ) : null}
            </div>
          ) : null}
          {closeButton ? (
            <button
              type="button"
              aria-label="Close toast"
              onClick={() => removeToast(item.id)}
              className="shrink-0 rounded-sm text-muted-foreground opacity-70 transition-opacity hover:opacity-100 focus:opacity-100 focus:outline-none"
            >
              <XIcon aria-hidden="true" className="size-4" />
            </button>
          ) : null}
        </>
      )}
    </motion.div>
  )
}

function ToastGroup({
  position,
  items,
  icons,
  offset,
  gap,
}: {
  position: ToastPosition
  items: ToastData[]
  icons?: ToasterProps["icons"]
  offset: NonNullable<ToasterProps["offset"]>
  gap: number
}) {
  const [expanded, setExpanded] = useState(false)
  const [heights, setHeights] = useState<Record<string, number>>({})

  const setHeight = useCallback((id: string, height: number) => {
    setHeights((prev) => (prev[id] === height ? prev : { ...prev, [id]: height }))
  }, [])

  const removeHeight = useCallback((id: string) => {
    setHeights((prev) => {
      if (!(id in prev)) return prev
      const next = { ...prev }
      delete next[id]
      return next
    })
  }, [])

  // Newest toast first: it sits at the front of the stack.
  const ordered = [...items].reverse()

  let cumulative = 0
  const offsets = ordered.map((item, index) => {
    const y = expanded
      ? cumulative
      : Math.min(index, MAX_VISIBLE_TOASTS - 1) * COLLAPSED_PEEK
    cumulative += (heights[item.id] ?? 0) + gap
    return y
  })
  const frontHeight = heights[ordered[0]?.id ?? ""] ?? 0
  const expandedHeight = cumulative > 0 ? cumulative - gap : 0

  return (
    <div
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onFocus={() => setExpanded(true)}
      onBlur={() => setExpanded(false)}
      aria-live="polite"
      className="pointer-events-none fixed"
      style={{
        ...getOffsetStyle(position, offset),
        width: `min(${TOAST_WIDTH}px, calc(100vw - 2rem))`,
        height: expanded ? expandedHeight : frontHeight,
        transition: "height 300ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <AnimatePresence initial={false}>
        {ordered.map((item, index) => (
          <ToastCard
            key={item.id}
            item={item}
            position={position}
            icons={icons}
            y={offsets[index]}
            scale={
              expanded ? 1 : 1 - Math.min(index, MAX_VISIBLE_TOASTS) * SCALE_STEP
            }
            zIndex={ordered.length - index}
            hidden={!expanded && index >= MAX_VISIBLE_TOASTS}
            onHeightChange={setHeight}
            onUnmount={removeHeight}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

function Toaster({
  position = "bottom-right",
  duration = 5000,
  gap = 12,
  offset = 16,
  closeButton = false,
  dismissible = true,
  icons,
  toastOptions,
  className,
  autoMount = false,
}: ToasterProps) {
  const [mounted, setMounted] = useState(false)
  const toasts = useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => []
  )

  useEffect(() => {
    setMounted(true)
    registeredToasters += 1
    defaultOptions = { position, duration, closeButton, dismissible, ...toastOptions }

    if (!autoMount && autoRoot && autoMounted) {
      autoRoot.unmount()
      autoRoot = null
      autoMounted = false
      autoContainer?.remove()
      autoContainer = null
    }

    return () => {
      registeredToasters -= 1
    }
  }, [autoMount, position, duration, closeButton, dismissible, toastOptions])

  if (!mounted) return null

  const groups = groupToasts(toasts, position)

  return createPortal(
    <div className={cn("pointer-events-none fixed inset-0 z-100", className)}>
      {[...groups.entries()].map(([pos, items]) => (
        <ToastGroup
          key={pos}
          position={pos}
          items={items}
          icons={icons}
          offset={offset}
          gap={gap}
        />
      ))}
    </div>,
    document.body
  )
}

export {
  Toaster,
  toast,
  configure,
  type ToasterProps,
  type ToastAction,
  type ToastData,
  type ToastMessage,
  type ToastOptions,
  type ToastPosition,
  type ToastType,
}
